import React from 'react';

const Resource = (props) => (
    <div>
        <p>{props.resourceType}</p>
        <button>+{props.resourceIncreaseBy}</button>
    </div>
)

export default Resource;