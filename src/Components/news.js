import React, { Component } from "react";
import Slide from "react-reveal";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreNews: false,
    };
  }

  // Function to toggle the view for the news section
  toggleNews = () => {
    this.setState({ showMoreNews: !this.state.showMoreNews });
  };

  // Helper function to return the top 5 items or full list based on state
  getDisplayList(list, showFull) {
    return showFull ? list : list.slice(0, 5);
  }

  render() {
    if (!this.props.news) return null;

    // Mapping each news item to display
    const newsMapping = (newsItem, index) => (
      <div key={index} style={{ padding: '10px', margin: '10px 0', borderBottom: '1px solid #ddd' }}>
        <p  style={{ margin: '5px 0', lineHeight: '1.2' }}>
          <span style={{ fontWeight: 'bold', color: '#333', fontSize: '18px' }}>
            [{newsItem.date}]
          </span>
          &nbsp;{newsItem.description}</p>
        {/* {newsItem.additionalInfo && (
          <a
            href={newsItem.additionalInfo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#007bff', textDecoration: 'underline' }}
          >
            Read more
          </a>
        )} */}
      </div>
    );

    // Render a list of news items with a "View More" toggle
    const newsList = this.getDisplayList(this.props.news, this.state.showMoreNews).map(newsMapping);

    return (
      <section id="news">
        <Slide left duration={1300}>
          <div className="row news">
            <div className="three columns header-col">
              <h1>
                <span>News</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div>{newsList}</div>
              <button
                onClick={this.toggleNews}
                style={{
                  padding: "8px 16px",
                  marginTop: "15px",
                  borderRadius: "20px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  fontSize: "14px",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
              >
                {this.state.showMoreNews ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default News;
