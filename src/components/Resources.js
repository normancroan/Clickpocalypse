import React from 'react';
import Resource from './Resource'

const Resources = (props) => (
    <div className="Resources">
        <Resource resourceType="Basic Resource" resourceIncreaseBy={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
        <Resource resourceType="Advanced Resource" resourceIncreaseBy={3} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
        <Resource resourceType="MEGA Resource" resourceIncreaseBy={15} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
    </div>
)

export default Resources;