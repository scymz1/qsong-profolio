import React, { Component } from "react";
import Slide from "react-reveal";

class Publications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showManuscripts: false,
      showJournals: false,
      showConferences: false
    };
  }

  // Function to toggle the view for each section
  toggleManuscripts = () => {
    this.setState({ showManuscripts: !this.state.showManuscripts });
  };

  toggleJournals = () => {
    this.setState({ showJournals: !this.state.showJournals });
  };

  toggleConferences = () => {
    this.setState({ showConferences: !this.state.showConferences });
  };

  // Helper function to return the top 3 items or full list based on state
  getDisplayList(list, showFull) {
    return showFull ? list : list.slice(0, 5);
  }

  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.publications) return null;

    const publicationMapping = function (publication) {
      // Use a regular expression to find and replace "Song Q" with bold
      const highlightedPublication = publication.replace(/Song Q/g, "<strong>Song Q</strong>");

      return (
        <div key={publication}>
          {/* Use dangerouslySetInnerHTML to render the modified string */}
          <p dangerouslySetInnerHTML={{ __html: highlightedPublication }}></p>
        </div>
      );
    };

    const ManuscriptUnderReview = this.props.publications.ManuscriptUnderReview.map(publicationMapping);
    const PublishedJournalArticles = this.props.publications.PublishedJournalArticles.map(publicationMapping);
    const ConferenceAbstracts = this.props.publications.ConferenceAbstracts.map(publicationMapping);

    return (
      <section id="publications" style={{ backgroundColor: 'white' }}>
        <Slide left duration={1300}>
          <div className="row publication">
            <div className="three columns header-col">
              <h1>
                <span>Publications</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              {/* Manuscripts Under Review Section */}
              {/* <h3>Manuscripts Under Review</h3>
              <div>
                {this.getDisplayList(ManuscriptUnderReview, this.state.showManuscripts)}
              </div>
              <button
                onClick={this.toggleManuscripts}
                style={{
                  padding: "5px 10px", // Smaller padding to reduce the button size
                  marginTop: "-15px", // Keep the margin to adjust distance
                  borderRadius: "20px", // Rounded corners
                  backgroundColor: "#007bff", // A sleek blue color
                  color: "white", // White text for contrast
                  border: "none", // Remove border
                  cursor: "pointer", // Change cursor to pointer for better UX
                  transition: "background-color 0.3s ease", // Smooth transition for hover effect
                  fontSize: "12px"
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")} // Darker blue on hover
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")} // Reset to original color
              >
                {this.state.showManuscripts ? "View Less" : "View More"}
              </button>
              <br/><br/> */}


              {/* Published Journal Articles Section */}
              {/* <h3>Published Journal Articles</xh3> */}
              <div>
                {this.getDisplayList(PublishedJournalArticles, this.state.showJournals)}
              </div>
              <button onClick={this.toggleJournals}
                style={{
                  padding: "5px 10px", // Smaller padding to reduce the button size
                  marginTop: "-15px", // Keep the margin to adjust distance
                  borderRadius: "20px", // Rounded corners
                  backgroundColor: "#007bff", // A sleek blue color
                  color: "white", // White text for contrast
                  border: "none", // Remove border
                  cursor: "pointer", // Change cursor to pointer for better UX
                  transition: "background-color 0.3s ease", // Smooth transition for hover effect
                  fontSize: "12px"
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")} // Darker blue on hover
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")} // Reset to original color
              >
                {this.state.showJournals ? "View Less" : "View More"}
              </button>
              <br/>

              {/* Conference Abstracts Section */}
              {/* <h3>Conference Abstracts</h3>
              <div>
                {this.getDisplayList(ConferenceAbstracts, this.state.showConferences)}
              </div>
              <button onClick={this.toggleConferences}
                style={{
                  padding: "5px 10px", // Smaller padding to reduce the button size
                  marginTop: "-15px", // Keep the margin to adjust distance
                  borderRadius: "20px", // Rounded corners
                  backgroundColor: "#007bff", // A sleek blue color
                  color: "white", // White text for contrast
                  border: "none", // Remove border
                  cursor: "pointer", // Change cursor to pointer for better UX
                  transition: "background-color 0.3s ease", // Smooth transition for hover effect
                  fontSize: "12px"
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")} // Darker blue on hover
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")} // Reset to original color
              >
                {this.state.showConferences ? "View Less" : "View More"}
              </button>
              <br/><br/> */}
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Publications;
