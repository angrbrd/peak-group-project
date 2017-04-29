//Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

var Main = require("./components/Main");

// // Grabs the react routes
var routes = require("./config/routes");

// Renders the contents according to the route page.
// ReactDOM.render(<Main />, document.getElementById("app"));

ReactDOM.render(routes, document.getElementById("app"));