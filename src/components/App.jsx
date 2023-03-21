import RecipeList from "./RecipeList";
import '../css/app.css'
import { useState } from "react";


function App() {

  const handleAddRecipe = () => {
    const newRecipe = {
      id: Date.now().toString(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'instruc',
      ingredients: [
        {
          id: Date.now().toString(),
          name: 'name',
          amount: '1 Tbs'
        }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

  const handleDeleteRecipe = (id) => {
    return setRecipes(recipes.filter(recipe =>recipe.id !== id))
  }

  const [recipes, setRecipes] = useState(sampleRecipes)
  return (
    <>
      <RecipeList
        recipes={recipes}
        handleAddRecipe={handleAddRecipe}
        handleDeleteRecipe={handleDeleteRecipe}
      />
    </>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put the chicken in oven\n3. Eat the chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Punds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      },
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat the pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Punds'
      },
      {
        id: 2,
        name: 'Paprica',
        amount: '2 Tbs'
      },
    ]
  }
]

export default App;
