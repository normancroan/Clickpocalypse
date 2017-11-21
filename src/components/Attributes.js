import React from 'react';
import Mana from './Mana';

const Attributes = (props) => (
    <div className="Attributes">
        <Mana mana={props.mana}/>
    </div>
)

export default Attributes;