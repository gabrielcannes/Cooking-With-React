import { createContext, useState } from "react";
import ConterFunctionComponent from "./ConterFunctionComponent";
import CounterClassComponent from "./CounterClassComponent";

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
      <p>Counter Class</p>
      <CounterClassComponent initialCount={0}></CounterClassComponent>
      <p>Counter Function</p>
      <ConterFunctionComponent initialCount={0}></ConterFunctionComponent>
      <button onClick={()=> setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
