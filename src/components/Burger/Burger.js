import React from 'react'
import classes from './Burger.css'
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'

const Burger = (props) => {

    let TransformedBurgerIngridients = Object.keys(props.ingridients).map(igKey => {
        return [...Array(props.ingridients[igKey])].map((_, i)=>{
            return <BurgerIngridient key={igKey + i} type={igKey} />;
        });
    }).reduce((arr, el)=>{
        return arr.concat(el)
    }, [] );
        
    console.log(TransformedBurgerIngridients)

    if(TransformedBurgerIngridients.length === 0){
        TransformedBurgerIngridients = 'Please Add some Ingridients'
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {TransformedBurgerIngridients}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
};

export default Burger