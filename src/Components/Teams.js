import React, { Component } from "react";
import Slide from "react-reveal";
import Fade from "react-reveal";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCurrents: true,
      showGraduates: true,
    };
  }

  // Function to toggle the view for each section
  toggleCurrents = () => {
    this.setState({ showCurrents: !this.state.showCurrents });
  };

  toggleGraduates = () => {
    this.setState({ showGraduates: !this.state.showGraduates });
  };

  // Helper function to get top 4 items across all roles or full list
  getDisplayList(teams, showFull) {
    // Flatten the structure into an array with roles included
    const flattenedList = Object.keys(teams).flatMap((role) =>
      teams[role].map((member) => ({ ...member, role }))
    );
    return showFull ? flattenedList : flattenedList.slice(0, 4);
  }

  render() {
    if (!this.props.teams) return null;

    const teamsnMapping = function (teamList) {
      return teamList.map((member, index) => {
        // Remove text within parentheses in member.name
        const displayName = member.name.replace(/\s*\(.*?\)\s*/g, "");
    
        return (
          <div 
            key={index} 
            style={{ 
              padding: '10px', 
              margin: '10px 0', 
              borderRadius: '8px', 
              display: 'flex', 
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              // border: '1px solid #ddd',
            }}
          >
            {/* Left Section with Member Details */}
            <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0', color: '#333' }}>{displayName}</h3>
              <p style={{ margin: '0', fontStyle: 'italic', whiteSpace: 'nowrap' }}>{member.role}</p>
              <p style={{ margin: '5px 0' }}>Department: {member.department}</p>
              <p style={{ margin: '5px 0' }}>Time: {member.time}</p>
            </div>
    
            {/* Right Section with Member Image, if imagePath exists */}
            {member.imagePath && (
              <div style={{ flexShrink: 0, marginLeft: '10px', textAlign: 'right' }}>
                <img 
                  src={member.imagePath} 
                  alt={`${displayName}'s photo`} 
                  style={{ width: '130px', height: '165px', borderRadius: '8px', objectFit: 'cover', marginTop: '5px' }} 
                />
              </div>
            )}
          </div>
        );
      });
    };
    
    
    
    

    // Get the current team list with "View More/Less" toggle
    const currentTeams = teamsnMapping(this.getDisplayList(this.props.teams.current, this.state.showCurrents));
    const currentGraduates = teamsnMapping(this.getDisplayList(this.props.teams.graduated, this.state.showGraduates));

    return (
      <div>
        <About data={this.props.data} />
        <section id="teams">
          <Slide left duration={1300}>
            <div className="row teams">
              <div className="three columns header-col">
                <h1>
                  <span>Our Teams</span>
                </h1>
              </div>

              <div className="nine columns main-col">
                {/* Currents Under Review Section */}
                <div className="team-section-header">
                  <h4>Current Students</h4>
                </div>

                <div>{currentTeams}</div>
                {/* <button
                  onClick={this.toggleCurrents}
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
                  {this.state.showCurrents ? "View Less" : "View More"}
                </button> */}
                <br/><br/>

                <div className="team-section-header">
                  <h4>Alumni</h4>
                </div>

                <div>{currentGraduates}</div>
                {/* <button
                  onClick={this.toggleGraduates}
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
                  {this.state.showGraduates ? "View Less" : "View More"}
                </button> */}
              </div>
            </div>
          </Slide>
        </section>
      </div>
    );
  }
}


export default Teams;

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;

    return (
      <section 
  id="about"
  style={{
    paddingBottom: "0px",
    paddingRight: '0px',
    position: 'relative',
    overflow: 'hidden'
  }}
>
  <Slide right duration={1300}>
    {/* Background Image */}
    <img 
      src="/qsong-profolio/images/profilepic3.png"
      alt="Background"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        position: 'absolute',
        top: 15,
        left: 490,
        zIndex: 0,
      }}
    />

    {/* Overlay to make image lighter */}
    <div 
      style={{
        position: 'absolute',
        top: 15,
        left: 490,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.6)', // Adjust alpha for lightness
        zIndex: 0,
      }}
    ></div>

    {/* Section Content */}
    <Fade duration={1000}>
      <div 
        className="row" 
        style={{ 
          backgroundColor: 'rgba(255, 255, 255, 0.0)', 
          padding: '20px', 
          borderRadius: '8px',
          position: 'relative', // To layer this on top of the overlay
          zIndex: 2,
        }}
      >
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Nordic Giant Profile Pic"
            style={{ width: "75%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p style={{ whiteSpace: 'pre-line' }}>{bio}</p>
        </div>
      </div>
    </Fade>
  </Slide>
</section>

    );
  }
}
