import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Select from '../components/Select';
import IFoodContext from '../context/IFoodContext';
import '../styles/recipes.css';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const filterOptions = ['', 'Cookies', 'Chicken', 'Cake', 'Steak', 'Pie'];
  const [filterValue, setFilterValue] = useState('');
  const authorization = localStorage.getItem('authorization');
  const { address } = useContext(IFoodContext);

  useEffect(async () => {
    let response = {};
    try {
      if (filterValue === '') {
        response = await api.get('/recipes/all', {
          headers: {
            authorization,
          },
        });
      } else {
        response = await api.get(`/recipes/?filter=${filterValue}`, {
          headers: {
            authorization,
          },
        });
      }

      if (response.data.length > 0) setRecipes(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }, [filterValue]);

  return (
    <div className="recipes">
      <header className="header-recipes">
        <h2 className="address">{address || 'Endereço'}</h2>
        <div className="links">
          <h2>Restaurantes</h2>
          <h2>Mercados</h2>
          <h2 className="ifree">Receitas</h2>
        </div>
        <hr className="separator" />
        <hr className="ifree-separator" />
      </header>
      <main className="main-recipes">
        <Link to="/user/restrictions" className="add-restrictions">
          <div>
            Adicionar restrições alimentares
          </div>
        </Link>
        <Select
          label="Filtrar por"
          options={filterOptions}
          testid="filter-filter"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
        <div className="recipes-card">
          {recipes.length === 0 ? <div className="noData">Sem receitas no momento</div> : recipes.map(({ _id: id, image, title }) => (
            <Link key={id} to={`/recipes/${id}`} className="link-card">
              <div className="recipe-card">
                <img src={image} alt={title} />
                <h3>{title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
export default Recipes;
