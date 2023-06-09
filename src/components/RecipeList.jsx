import React, { useContext } from 'react'
import Recipe from './Recipe'
import { RecipeContext } from './App'

export default function RecipeList({ recipes }) {
    const {handleAddRecipe} = useContext(RecipeContext)
    return (
        <div className='recipe-list'>
            <div>
                {recipes.map(recipe => {
                    return (
                        <Recipe
                            key={recipe.id}
                            {...recipe}
                        />
                    )
                })}
            </div>
            <div className='recipe-list__add-recipe-btn-container'>
                <button onClick={handleAddRecipe} className='btn btn--primary'>Add Recipe</button>
            </div>
        </div>
    )
}
