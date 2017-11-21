import React from 'react';
import Resource from './Resource'

const Resources = (props) => (
    <div className="Resources">
        <Resource resourceType="Basic Resource" resourceIncreaseBy={1} cost={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
        <Resource resourceType="Advanced Resource" resourceIncreaseBy={3} cost={10} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
        <Resource resourceType="MEGA Resource" resourceIncreaseBy={15} cost={20} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
    </div>
)

export default Resources;