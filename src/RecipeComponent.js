import { useState }  from 'react';
import Details from './Details';

function RecipeComponent({image, label, cuisine, ingredients, link}){
    const [show, setShow] = useState(false);

    const showDetails =() => {
        setShow(!show);
    }

    const openInNewTab =(url) =>{
        window.open(url,  '_blank', 'noreferrer');
    }

    return(
        <div className="card">
            <img src={image} width="300px" height="300px" alt='recipe-pic'/>
            <h2>{label}</h2>
            <h3>{cuisine} cuisine</h3>
            <button className='btn-toggle' onClick={() => showDetails()}>
                Ingredients</button>
            {show && <Details ingredients={ingredients}/>}

            <button className="btn-link" onClick={()=> openInNewTab(link)}>
                Full Recipe</button>
        </div>
    )
}

export default RecipeComponent;