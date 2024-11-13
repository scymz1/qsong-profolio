import React, { Component } from "react";
import Slide from "react-reveal";

class SoftwareTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true
    };
  }

  // Toggle function for displaying the full list or limited list
  toggleShowAll = () => {
    this.setState({ showAll: !this.state.showAll });
  };

  // Helper function to return either the top 5 items or full list based on state
  getDisplayList(list, showFull) {
    return showFull ? list : list.slice(0, 5);
  }

  render() {
    if (!this.props.softwareTools) return null;
    const softwareMapping = (software) => (
      <div
          key={software.name}
          style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '15px',
              margin: '15px 0',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
              border: '1px solid #ddd',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f0f8ff';
              e.currentTarget.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f9f9f9';
              e.currentTarget.style.boxShadow = '0px 2px 4px rgba(0, 0, 0, 0.1)';
          }}
      >
          <div style={{ flex: '1' }}>
              <h4 style={{ margin: '0', color: '#333', fontWeight: 'bold' }}>{software.name}</h4>
              <p style={{ margin: '8px 0', color: '#555', lineHeight: '1.15'}}>{software.description}</p>
          </div>
          <a
              href={software.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                  padding: '8px 16px',
                  color: 'white',
                  backgroundColor: '#0762f9',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                  fontSize: '14px',
                  marginLeft: '15px', // Adds spacing between description and button
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#0444AE')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#0762f9')}
          >
              View Tool
          </a>
      </div>
    );
  
      
      

    // Display list with "View More / View Less" functionality
    const displayedSoftware = this.getDisplayList(this.props.softwareTools, this.state.showAll).map(softwareMapping);

    return (
      <section id="software-tools">
        <Slide left duration={1300}>
          <div className="row software-tools">
            <div className="three columns header-col">
              <h1>
                <span>Developed Software & Tools</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {/* Software and Tools List */}
              {/* <h3>Developed Software & Tools</h3> */}
              <div>{displayedSoftware}</div>
              <br/>
              {/* <button
                onClick={this.toggleShowAll}
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
                {this.state.showAll ? "View Less" : "View More"}
              </button> */}
              <br/><br/>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default SoftwareTools;
