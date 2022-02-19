import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';


function Recipes() {
  const { username } = useContext(UserContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('authorization');
    history.push('/get-in');
  };

  return (
    <div></div>>
  );
}
export default Recipes;
