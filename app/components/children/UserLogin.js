
// Include React
var React = require("react");
var ReactDOM = require("react-dom");
var Schools = require("./Schools");


var helpers = require("../utils/helpers");

// Creating the Search component
var UserLogin = React.createClass({



  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { 
      username: "",
      password: ""

    };
  },



  // componentDidUpdate: function(prevProps, prevState) {
  //   // If we have a new search term, run a new search
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     console.log("UPDATED");

  //     helpers.runQuery(this.state.searchQuery).then(function(data) {
  //       if (data !== this.state.results) {
  //         console.log(data);
  //         this.setState({ results: data });
  //       }
  //       // This code is necessary to bind the keyword "this" when we say this.setState
  //       // to actually mean the component itself and not the runQuery function.
  //     }.bind(this));
  //   }
  // },




  handleChange: function(event){
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    //do the login thing. If successful, navigate to the schools page
    ReactDOM.render(<Schools username={this.state.username}/>, document.getElementById("app"));
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Welcome</h3>
          </div>
          <div className="panel-body text-center">
           <form onSubmit={this.handleSubmit} id="login">
              <div className="form-group">

                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.handleChange}
                  className="form-control text-left"
                  id="username"
                  placeholder="username"
                  required
                />
              <div className="row">
                <div className="col-md-12">

                    <input
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="text"
                      className="form-control text-left"
                      id="password"
                      placeholder="password"
                      required
                    />
                </div> 
              </div> 
              <br />
              <button
                className="btn btn-login"
                type="submit"
              >
                login
              </button>
              <a href="mailto:cscorrigan@icloud.com">Request an account.</a>
            </div>
          </form>
        </div>
      </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = UserLogin;

