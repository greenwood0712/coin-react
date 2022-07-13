import React, {useEffect, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css';
import Kripto from "./Kripto"
import Header from "./Header"
import useKripto from "./Kripto";
import IsFavorite from './IsFavorite'

function App() {

  const [items, setItems] = useState();
  
  const [watchList, setWatchList] = useState(false)
  
  function watchListHandleClick(){
    
  }

  

  const {render,handleClick} = useKripto(items, setItems)

  console.log(items)
  

  return (
    <div className="App">
      
      <IsFavorite 
      items={items}
      handleClick={handleClick}
      />
      
      {render}
      
    </div>
  );
}

export default App;
