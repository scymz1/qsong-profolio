import React, { Component } from "react";
import Slide from "react-reveal";

class Grants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOngoing: false,
      showPending: false,
      showCompleted: false,
    };
  }

  // Toggle functions for each section
  toggleOngoing = () => {
    this.setState({ showOngoing: !this.state.showOngoing });
  };

  togglePending = () => {
    this.setState({ showPending: !this.state.showPending });
  };

  toggleCompleted = () => {
    this.setState({ showCompleted: !this.state.showCompleted });
  };

  // Helper function to display limited or full list
  getDisplayList(list, showFull) {
    return showFull ? list : list.slice(0, 3);
  }

  render() {
    if (!this.props.grants) return null;

    // Map function to format each grant item
    const grantMapping = (grant) => (
      <div key={grant.id} style={{ padding: '10px', margin: '10px 0', borderRadius: '8px', backgroundColor: '#f9f9f9', border: '1px solid #ddd' }}>
        <h4 style={{ margin: '0', color: '#333' }}>{grant.id}</h4>
        <p style={{ margin: '5px 0', fontStyle: 'italic' }}>{grant.time}</p>
        <p>{grant.description}</p>
        <p style={{ fontWeight: 'bold' }}>Role: {grant.role}</p>
      </div>
    );

    // Display lists for each section
    const OngoingResearchSupport = this.getDisplayList(this.props.grants.OngoingResearchSupport, this.state.showOngoing).map(grantMapping);
    const Pending = this.getDisplayList(this.props.grants.Pending, this.state.showPending).map(grantMapping);
    const Completed = this.getDisplayList(this.props.grants.Completed, this.state.showCompleted).map(grantMapping);

    return (
      <section id="grants" style={{ backgroundColor: 'white' }}>
        <Slide left duration={1300}>
          <div className="row grants">
            <div className="three columns header-col">
              <h1>
                <span>Grants and Contracts</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {/* Ongoing Research Support Section */}
              <h3>Ongoing Research Support</h3>
              <div>{OngoingResearchSupport}</div>
              <button
                onClick={this.toggleOngoing}
                style={{
                  padding: "5px 10px",
                  marginTop: "-15px",
                  borderRadius: "20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  fontSize: "12px"
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                {this.state.showOngoing ? "View Less" : "View More"}
              </button>
              <br/><br/>

              {/* Pending Section */}
              <h3>Pending</h3>
              <div>{Pending}</div>
              <button
                onClick={this.togglePending}
                style={{
                  padding: "5px 10px",
                  marginTop: "-15px",
                  borderRadius: "20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  fontSize: "12px"
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                {this.state.showPending ? "View Less" : "View More"}
              </button>
              <br/><br/>

              {/* Completed Section */}
              <h3>Completed</h3>
              <div>{Completed}</div>
              <button
                onClick={this.toggleCompleted}
                style={{
                  padding: "5px 10px",
                  marginTop: "-15px",
                  borderRadius: "20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  fontSize: "12px"
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                {this.state.showCompleted ? "View Less" : "View More"}
              </button>
              <br/><br/>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Grants;
