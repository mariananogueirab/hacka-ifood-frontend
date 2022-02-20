import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

function RecipeDetails() {
  const [recipe, setRecipe] = useState({});
  const [haveIngredients, setHaveIngredients] = useState([]);
  const [ingredientsToBy, setIngredientsToBy] = useState([]);
  const authorization = localStorage.getItem('authorization');
  const { id } = useParams();

  useEffect(async () => {
    let response = {};
    try {
      response = await api.get(`/recipes/${id}`, {
        headers: {
          authorization,
        },
      });
      setRecipe(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }, []);

  const handleClick = (ingredient) => {
    setHaveIngredients((prev) => [...prev, ingredient]);
    const ingredientsBuy = recipe.ingredients
      .filter((ing) => !haveIngredients.includes(ing));
    setIngredientsToBy(ingredientsBuy);
  };

  return (
    <div>
      DETALHES DA RECEITA
      <img src={recipe.image} alt={recipe.title} />
      <h1>{recipe.title}</h1>

      <h2>Ingredientes</h2>
      <h5>Marque os ingredientes que você tem em casa</h5>
      {recipe.ingredients?.map((ingredient) => (
        <div>
          <label className="label-checkbox" htmlFor={ingredient}>
            <input
              type="checkbox"
              id={ingredient}
              key={ingredient}
              onClick={() => handleClick(ingredient)}
              className="checkbox"
            />
            {ingredient}
          </label>
        </div>
      ))}

      <h2>Modo de preparo</h2>

      {recipe.directions?.map((direction) => (
        <li>{direction}</li>
      ))}

      <div>
        <h3>Encontramos um mercado com os ingredientes restantes, deseja ir para o carrinho?</h3>
        {ingredientsToBy.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </div>
      <div>Escolher outro mercado</div>
    </div>
  );
}
export default RecipeDetails;
