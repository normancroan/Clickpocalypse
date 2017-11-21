import React from 'react';

const Resource = (props) => (
    <div>
        <p>{props.resourceType}</p>
        <button onClick={() => props.handleResourceButtonClicked(props.resourceIncreaseBy, props.cost)}>+{props.resourceIncreaseBy}</button>
    </div>
)

export default Resource;