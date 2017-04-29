
// Include React
var React = require("react");


var helpers = require("../utils/helpers");

// Creating the Search component
var Schools = React.createClass({



  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { 
      schoolname: "",
      schools: ['East Cary Middle', 'West Cary Middle', 'AV Baucom Elementary']
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



    // var newQuery = "&q="+this.state.term+"&begin_date="+this.state.begin+"&end_date="+this.state.end;
   
    // this.setState ({
    //   searchQuery: newQuery
    // });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title text-center">Select a School</h3>
          </div>
          <div className="panel-body text-center">
              <p id="usernameDisplay">{this.props.username}</p>
              <p id="logout">LOGOUT</p>
              <br></br><br></br>
             <form id="schoolSearchForm">
              <label id="schoolNameLabel">SCHOOL NAME</label>
              <div className="row">

              </div>
            {/* id needs to match value or user cannot type any input*/}
              <input type="text" 
                      id="schoolname" 
                      name="schoolsearch"
                      value={this.state.schoolname}
                      onChange={this.handleChange}
                      className="form-control text-center"
                      />

                <ul className="list-group" id="listofSchools">
                {this.state.schools.map( function(schools, index){
                  // console.log("_id", results._id, index)
                  return <div className="schoolsList" key={index} >
                      <li className="list-group-item" >
                        <p className="info" style={{fontSize: 25}}>{schools}</p>
                      </li>
                    </div>
                  }.bind(this))
                }
              </ul>
              </form>

        </div>
      </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Schools;