import React, { useCallback, useEffect, useReducer } from 'react';
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

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null }
    case 'RESPONSE':
      return { ...curHttpState, loading: false }
    case 'ERROR':
      return { loading: false, error: action.errorMessage }
    case 'CLEAR':
      return { ...curHttpState, error: null }
    default:
      throw new Error('Should not get there!');
  }
}

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, [])
  const [httpState, dispatchHttp] = useReducer(httpReducer, { loading: false, error: null });
  // const [userIngredients, setUserIngredients] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = ingredient => {
    dispatchHttp({ type: 'SEND' });
    fetch('https://books-exercise-ec332-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(res => {
      return res.json();
    })
      .then(resData => {
        dispatchHttp({ type: 'RESPONSE' });
        // setUserIngredients(prevIngredients => [
        //   ...prevIngredients,
        //   { id: resData.name, ...ingredient }
        // ]);
        dispatch({ type: 'ADD', ingredient: { id: resData.name, ...ingredient } });
      });
  };

  const removeIngredientHandler = (id) => {
    dispatchHttp({ type: 'SEND' });
    fetch(`https://books-exercise-ec332-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${id}.son`, {
      method: 'DELETE',
    })
      .then(res => {
        dispatchHttp({ type: 'RESPONSE' });
        // setUserIngredients(prevIngredients => prevIngredients.filter(ig => ig.id !== id));
        dispatch({ type: 'DELETE', id: id })
      })
      .catch(error => {
        // setError('Stupid error!');
        dispatchHttp({ type: 'ERROR', errorMessage: 'Something went wrong!' });
      })
  };

  const clearError = () => {
    dispatchHttp({ type: 'CLEAR' });
  }

  useEffect(() => {
    console.log('RENDERING INGREDIENTS', userIngredients);
  }, [userIngredients]);

  return (
    <div className="App">
      {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading} />

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
