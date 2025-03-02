// const heading= React.createElement("h1",{
//     id: "heading"
// },"hello world form react");

// const root =ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

//Nested elements
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



