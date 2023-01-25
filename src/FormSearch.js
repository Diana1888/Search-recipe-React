import { useEffect, useState } from 'react';
import RecipeComponent from './RecipeComponent';
import icon from './icon.png'
import swal from 'sweetalert';

function FormSearch(){

    const MY_ID = "43d67e48";
    const MY_KEY = "7136b74f9588e5ca9b87872eb6434259";
  
    const [mySearch, setMySearch] = useState('');
    const [myRecipe, setMyRecipe] = useState([]);
    const [userSearch, setUserSearch] = useState('pasta');
  
    useEffect( () => {
      const findRecipe = async() => {
        const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${userSearch}&app_id=${MY_ID}&app_key=${MY_KEY}`);
        const data =  await response.json();
        if(data.count===0){
          swal({
            title: "We couldn't find any matches", 
            icon: "error"});
          setMySearch('')
        }
        setMyRecipe(data.hits)
      }
      findRecipe();
    }, [userSearch])
  
  const recipeSearch =(e) =>{
    setMySearch(e.target.value)
  }

  const finalSearch =(e) => {
    e.preventDefault();
  setUserSearch(mySearch);

    
  }
  
  
    return (
     
      <div>
        <div className='form-search'>
          <div className="container">
            <h1>Find a Recipe</h1>
          </div>
  
          <div className="container ">
            <form onSubmit={finalSearch}>
            <input placeholder='What are you looking for?' onChange={recipeSearch} value={mySearch}>
            </input>
            <button className='btn-search'><img src={icon} className="icon" alt=''/></button>
            </form>
          </div>
        </div>
  
        <div  className='recipe'>
          {myRecipe.map((element, index) =>(
            <RecipeComponent key={index}
            image = {element.recipe.image} 
            label = {element.recipe.label} 
            cuisine = {element.recipe.cuisineType}
            ingredients = {element.recipe.ingredientLines}
            link = {element.recipe.url}/>
          ))}      
        </div>
      </div>
    );
}

export default FormSearch;