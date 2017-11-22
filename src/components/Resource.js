import React from 'react';

const Resource = (props) => (
    <div>
        <button className="ResourceButton" disabled={props.cost > props.mana} onClick={() => props.handleResourceButtonClicked(props.type, props.resourceIncreaseBy, props.cost)}>+{props.resourceIncreaseBy}</button>
    </div>
)

export default Resource;