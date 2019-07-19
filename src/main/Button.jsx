import React from 'react'
import './Button.css'

export default props =>
    <button className={`button ${props.double ? 'double' : ''} ${props.side ? 'rightSide' : ''}`}
            onClick={e => props.click && props.click(e.target.innerHTML)}>{props.text}</button>

           