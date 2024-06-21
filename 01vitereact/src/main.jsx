import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children : 'click me to visit google'
// }

const anotherElement = (
    <a href="reactElement.props.href" target='_blank'> Visit GOogle</a>
)

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target:'_blank'
    },
    'Click Me to Visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    //  <MyApp />
    // MyApp()
    //  reactElement
    //  anotherElement
    
)
