import React, { memo, useState, useEffect } from 'react'

import Card from '../UI/Card'
import './Search.css'

const Search = (props) => {
  const { onLoadIngredients } = props
  const [enteredFilter, setEnteredFilter] = useState('')

  useEffect(() => {
    const query = enteredFilter.length === 0 ? '' : `?orderBy="title"&=equalTo="${enteredFilter}"`
    fetch('https://react-hooks-update-caccd-default-rtdb.firebaseio.com/ingredients.json' + query)
      .then(response => response.json())
      .then(responseData => {
        const loadedIngredients = []
        for (const key in responseData){
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount
          })
        }
        //trigger something in ingredients.js
        onLoadIngredients(loadedIngredients)
      })
  }, [enteredFilter, onLoadIngredients])

  

  return (
    <section className='search'>
      <Card>
        <div className='search-input'>
          <label>Filter by Title</label>
          <input type='text' onChange={(e)=> setEnteredFilter(e.target.value)} />
        </div>
      </Card>
    </section>
  )
}

export default memo(Search)
