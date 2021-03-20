import React, { useCallback, useEffect, useState, useReducer } from 'react';
import ErrorModal from '../UI/ErrorModal';
import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case 'SET':
      return action.ingredients;
    case 'ADD':
      return [...currentIngredients, action.ingredient];
    case 'DELETE':
      return currentIngredients.filter(ing => ing.id !== action.id);
    default:
      throw new Error('Should not get there');
  }
}

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
  // const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({type: 'SET', ingredients: filteredIngredients});
  }, []);

  const addIngredientHandler = ingredient => {
    setIsLoading(true);
    fetch('https://books-exercise-ec332-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      return res.json();
    })
      .then(resData => {
        setIsLoading(false);
        // setUserIngredients(prevIngredients => [
        //   ...prevIngredients,
        //   { id: resData.name, ...ingredient }
        // ]);
        dispatch({type: 'ADD', ingredient: {id: resData.name, ...ingredient}});
      });
  };

  const removeIngredientHandler = (id) => {
    setIsLoading(true);
    fetch(`https://books-exercise-ec332-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${id}.json`, {
      method: 'DELETE',
    })
      .then(res => {
        setIsLoading(false);
        // setUserIngredients(prevIngredients => prevIngredients.filter(ig => ig.id !== id));
        dispatch({type: 'DELETE', id: id})
      })
      .catch(error => {
        setError('Stupid error!');
        setIsLoading(false);
      })
  };

  const clearError = () => {
    setError(false);
  }

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading} />

      <section>
        <Search
          onLoadIngredients={filteredIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
