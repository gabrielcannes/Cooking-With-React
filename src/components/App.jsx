import RecipeList from "./RecipeList";
import '../css/app.css'
import { createContext, useState, useEffect } from "react";
import RecipeEdit from "./RecipeEdit";

export const RecipeContext = createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.app.recipes'

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
    return setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  const recipeContextValue = {
    handleAddRecipe,
    handleDeleteRecipe
  }

  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON == null) {
      return sampleRecipes
    } else {
      return JSON.parse(recipeJSON)
    }
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      <RecipeEdit></RecipeEdit>
    </RecipeContext.Provider>
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
