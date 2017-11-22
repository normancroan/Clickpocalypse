import React from 'react'

const Asset = (props) => (
    <div className="Asset">
        <p>{props.name} : {props.strength}</p>
    </div>
)

export default Asset