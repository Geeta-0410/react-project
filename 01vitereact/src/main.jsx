import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function Myapp(){
    return(
        <div>
            <h1>CUSTOM  APP | chai </h1>
        </div>
    )
}

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank', // Correcting 'blank' to '_blank'
    },
    children: "Click me to visit Google"
};

const anotherElement= (
<a href="https://google.com " target='-blank'>VISIT GOOGLE</a>
)
const anotheruser ="chai or react"

const reactElement =React.createElement(
    'a',
    {hraf:'https://google.com',target:'-blank'},
    'click me to visit google' ,
    anotheruser 
)

ReactDOM.createRoot(document.getElementById('root')).
render(
// Myapp()
// {/* <Myapp/> */}
reactElement
 
)
