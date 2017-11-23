import React from 'react';
import Resource from './Resource'

const Resources = (props) => (
    <div className="ResourcesContainer">
        {props.stage > 2 && <div className="Resources">
            <Resource mana={props.mana} type="power" resourceType="Basic Resource" resourceIncreaseBy={6} cost={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
            <Resource mana={props.mana} type="power" resourceType="Basic Resource" resourceIncreaseBy={6} cost={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
            <Resource mana={props.mana} type="power" resourceType="Basic Resource" resourceIncreaseBy={6} cost={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
        </div>}
        {props.stage > 1 && <div className="Resources">
            <Resource mana={props.mana} type="power" resourceType="Basic Resource" resourceIncreaseBy={5} cost={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
            <Resource mana={props.mana} type="power" resourceType="Basic Resource" resourceIncreaseBy={5} cost={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
            <Resource mana={props.mana} type="power" resourceType="Basic Resource" resourceIncreaseBy={5} cost={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
        </div>}
        <div className="Resources">
            <Resource mana={props.mana} type="power" resourceType="Basic Resource" resourceIncreaseBy={1} cost={1} handleResourceButtonClicked={props.handleResourceButtonClicked}/>
        </div>
    </div>
)

export default Resources;