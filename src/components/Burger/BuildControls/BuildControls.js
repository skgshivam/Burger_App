import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css';

const Controls =[
    {label : 'Salad', type:'salad'},
    {label : 'Bacon', type:'bacon'},
    {label : 'Cheese', type:'cheese'},
    {label : 'Meat', type:'meat'},
]
const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {Controls.map(ctrl =>(
            
                <BuildControl key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default BuildControls