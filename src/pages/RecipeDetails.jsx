/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsHeart } from 'react-icons/bs';
import api from '../api';
import '../styles/recipes-details.css';

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
    console.log(ingredientsToBy);
  };

  return (
    <div className="recipes-details">
      <img src={recipe.image} alt={recipe.title} className="recipe-img" />

      <div className="recipe-details">
        <h1>{recipe.title}</h1>
        <div className="fav-recipe">
          <BsHeart color="red" size="20px" />
          <h3>Adicionar aos favoritos</h3>
        </div>
        <div className="ingredients-recipe">
          <h2>Ingredientes</h2>
          <h5>Você pode adicionar os ingredientes que já tem, e nós te ajudaremos a encontrar o restante</h5>
          {recipe.ingredients?.map((ingredient) => (
            <div className="ingredients-check">
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
        </div>

        <div className="add-to-cart">
          Adicionar ao carrinho ingredientes restantes
        </div>

        <div className="directions-recipe">
          <h2>Modo de preparo</h2>

          {recipe.directions?.map((direction) => (
            <li>{direction}</li>
          ))}

        </div>

      </div>
    </div>
  );
}
export default RecipeDetails;
