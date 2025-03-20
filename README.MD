# React

# Parcel
    - Dev build
    - local server
    - HMR - hot module replacement
    -File watching Algorithm C++
    -Caching - Faster Builds
    -Image optimization
    -Bundling
    -Compressing
    - Consistent Hashing
    - code splitting
    - differential bundling - - Support older browsers
    - Diagnonostic
    - Error Handling
    - Https
    - Tree Shaking - remove unused code
    - Different Dev and Prod build


Food ordering App

Header
    -Logo
    -Nav Items
Body
    -Search
    -Restro container
    -Restaurant Card
Footer
    -Copyright
    -Links
    -Address
    -Conatct

const heading= React.createElement("h1",{
    id: "heading"
},"hello world form react");

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

Nested elements
const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Nested elements from react"),
    React.createElement("h2",{},"BadmPalu")]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"Nested elements from react"),
    React.createElement("h2",{},"BadmPalu")]),
]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

jsx=> babel transplies to react=>Ract.createElement=>js object=>html
const jsxHeading = <h1 id="heading">Namesthe react by using JSx</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading)


component 
functional component

const Componet = ()=>
     <h1 id ="comp">Hi from inside component</h1>;



const Ancomponent =()=>{
   
    return <div id = "container">
        <Componet/>
        <h1>Hi form main componet </h1>
        </div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Ancomponent/>);


Read about React file Structure

Types of imports/exports
 -default import/export
 -Named import/export

#React Hooks
 (Normal Js utility function)
-useState()-super powerful react variables
-useEffet()

Routing
-Client side Routing
-Server side Routing

# Redux ToolKit
-Install @reduxjs/toolkit and react-redux
-Build our own store
-connect our store to app
-create a cart slice
-dispatch and action
-Selector

# Testing
-Unit test-Resting Individual component
-Integration Test
-End to End  Testing -e2e testing

# Setting up Testing in app
-Install React Testing Library
-Install jest
-Install babel dependencies
-Configure Babel
-Configure parcel config file to disable default babel configuration
-Jest configuration
-If you're using Jest 28 or later, jest-environment-jsdom package now must be installed separately.
-Install @babel/preset-react to make jsx work in test cases
-Include @babel/preset-react inside babel configuration
-Install @testing-library/jest-dom

