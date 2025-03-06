
const mainContainer = document.querySelector('#root');

function customReactRender(customRectElement, mainContainer) {

//    const domElement = document.createElement(customRectElement.type);
    
//    domElement.innerHTML =  customRectElement.children;
//    domElement.setAttribute('href', customRectElement.props.href);
//    domElement.setAttribute('target',customRectElement.props.target);
 
//     mainContainer.appendChild(domElement);

// second styple to creare element and set attribute dynamically

    const domElement =  document.createElement(customRectElement.type);
    domElement.innerHTML = customRectElement.children;
    for(let prop in customRectElement.props) {
         if(prop === 'children')
            continue ;
    domElement.setAttribute(prop, customRectElement.props[prop]);
}
    mainContainer.appendChild(domElement);
}

 const customRectElement = {

    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click here to visit google !' 
 }


 customReactRender(customRectElement, mainContainer);


