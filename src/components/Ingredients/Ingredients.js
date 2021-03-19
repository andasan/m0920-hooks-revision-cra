import React, { useState, useEffect, useCallback } from 'react'

import IngredientForm from './IngredientForm'
import IngredientList from './IngredientList'
import Search from './Search'

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([])

  // useEffect(() => {
  //   fetch(
  //     'https://react-hooks-update-caccd-default-rtdb.firebaseio.com/ingredients.json'
  //   )
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       const loadedIngredients = []
  //       for (const key in responseData) {
  //         loadedIngredients.push({
  //           id: key,
  //           title: responseData[key].title,
  //           amount: responseData[key].amount,
  //         })
  //       }
  //       setUserIngredients(loadedIngredients)
  //     })
  // }, [])

  useEffect(() => {
    console.log('Rendering Ingredients... ', userIngredients)
    // return () => {
    //   console.log('This component will be unmounted.....')
    // }
  }, [userIngredients])

  const addIngredientHandler = (ingredients) => {
    // setUserIngredients((prevState) => [
    //   ...prevState,
    //   { id: Math.random().toString(), ...ingredients}
    // ])
    fetch(
      'https://react-hooks-update-caccd-default-rtdb.firebaseio.com/ingredients.json',
      {
        method: 'POST',
        body: JSON.stringify(ingredients),
        headers: { 'Content-Type': 'application/json' },
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        // console.log(responseData)
        setUserIngredients((prevState) => [
          ...prevState,
          { id: responseData.name, ...ingredients },
        ])
      })
  }

  const removeIngredientHandler = (ingredientId) => {
    fetch(
      `https://react-hooks-update-caccd-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`,
      {
        method: 'DELETE',
      }
    ).then((response) => {
      setUserIngredients((prevState) => {
        return prevState.filter((ingredient) => ingredient.id !== ingredientId)
      })
    })
  }

  const filteredIngredientHandler = useCallback((filteredIngredient) => {
    setUserIngredients(filteredIngredient)
  }, [])

  // useCallback( () => { } , [])

  return (
    <div className='App'>
      <IngredientForm onAddIngredient={addIngredientHandler} />{' '}
      <section>
        <Search onLoadIngredients={filteredIngredientHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  )
}

export default Ingredients
