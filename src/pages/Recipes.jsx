import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Select from '../components/Select';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const filterOptions = ['', 'Cookies', 'Chicken', 'Cake', 'Steak', 'Pie'];
  const [filterValue, setFilterValue] = useState('');
  const authorization = localStorage.getItem('authorization');

  useEffect(async () => {
    let response = {};
    try {
      response = await api.get('/recipes', {
        headers: {
          authorization,
        },
      });
      if (response.data.length > 0) setRecipes(response.data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  }, [filterValue]);

  return (
    <div>
      <div>
        <h2>Restaurantes</h2>
        <h2>Mercados</h2>
        <h2>iFree</h2>
      </div>
      <h1>Receitas</h1>
      <Select
        label="Filtrar por"
        options={filterOptions}
        testid="filter-filter"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      {recipes.length === 0 ? <div className="noData">Sem receitas no momento</div> : recipes.map(({ _id: id, image, title }) => (
        <Link key={id} to={`/recipes/${id}`}>
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </Link>
      ))}
    </div>
  );
}
export default Recipes;
