import React from 'react';
import Asset from './Asset'

const Assets = (props) => (
    <div className="Assets">
        {props.assets.map((asset) => <Asset name={asset.name} strength={asset.strength}/>)}
    </div>
)

export default Assets;