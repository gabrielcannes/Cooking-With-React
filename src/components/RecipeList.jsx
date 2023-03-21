import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({ recipes, handleAddRecipe, handleDeleteRecipe }) {
    return (
        <div className='recipe-list'>
            <div>
                {recipes.map(recipe => {
                    return (
                        <Recipe
                            key={recipe.id}
                            handleDeleteRecipe={handleDeleteRecipe}
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
