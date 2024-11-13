import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
// import "./bootstrap/css/bootstrap.css";
// import "./bootstrap/css/bootstrap-theme.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Publications from "./Components/Publications";
import Teams from "./Components/Teams";
import Grants from "./Components/grants";
import SoftwareTools from "./Components/DevelopedTools";
import News from "./Components/news";
import Research from "./Components/research";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        {/* <UncontrolledExample /> */}
        <Research research={this.state.resumeData.research} />
        {/* <About data={this.state.resumeData.main} /> */}
        <News news={this.state.resumeData.news} />
        <Teams teams={this.state.resumeData.teams} data={this.state.resumeData.main} />
        <Grants publications={this.state.resumeData.GrantsAndContractAwards} />
        <Publications publications={this.state.resumeData.publications} />
        <SoftwareTools softwareTools={this.state.resumeData.DevelopedSoftwareAndTools} />
        {/* <Resume data={this.state.resumeData.resume}/> */}
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
