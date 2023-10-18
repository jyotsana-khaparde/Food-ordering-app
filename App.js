import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement("h1", {}, "Hello world, react");
console.log("heading:", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root:", root);
root.render(heading);
console.log("root.render:", root);
