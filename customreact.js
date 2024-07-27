// function customRender(reactElement,container){
//     const domElement=document.createElement(reactElement.type);
// domElement.innerHTML=reactElement.children;
//    domElement.setAttribute('href', reactElement.props.href);
//    domElement.setAttribute('target', reactElement.props.target);

//    container.appendChild(domElement);
// }
// const reactElement={
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'blank',

//     },
//     children:"click me to visit google"

// }
// const maincontainer=document.querySelector('root')
// customRender( reactElement,maincontainer)
function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);
    
    // Setting innerText instead of innerHTML for text content
    domElement.innerText = reactElement.children;

    for(const prop in props){
      if (prop=='children')continue
      domElement.setAttribute(prop,reactElement.props[prop])

    }
    container.appendChild(domElement)
}


// Sample React element
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank', // Correcting 'blank' to '_blank'
    },
    children: "Click me to visit Google"
};

// Selecting container (assuming 'root' is an ID in your HTML)
const mainContainer = document.getElementById('root'); // Changed querySelector to getElementById

// Rendering the React element into the container
customRender(reactElement, mainContainer);
}