import React from 'react';

const Mana = (props) => (
    <div>
        <progress className="Mana" value={props.mana} max="100"></progress>
    </div>
)

export default Mana;