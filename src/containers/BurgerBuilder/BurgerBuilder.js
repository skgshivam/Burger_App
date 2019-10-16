import React , {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
class BurgerBuilder extends Component{
    state={
        ingridients : {
            salad : 0,
            meat : 0,
        }
    }
    render(){
        return(
            <Aux>
                <div> <Burger ingridients={this.state.ingridients} /></div>
                <div> <BuildControls /></div>
            </Aux>
        );
    }
};


export default BurgerBuilder