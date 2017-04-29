


// Include React
var React = require("react");

// Here we include all of the sub-components
var UserLogin = require("./children/UserLogin");
var Schools = require("./children/Schools");

// Creating the Main component
var Main = React.createClass({


  // Here we render the function
  render: function() {
    return (
      <div className="container">

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h2 className="text-center">PEAK</h2>
            <p className="text-center">
              <em>Physical Education Adapted for Kids</em>
            </p>

          </div>
        </div>
          
        <div className="row">
          <div className="col-md-12">
                 <UserLogin />
            
          </div>
        </div>

        
      
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;



