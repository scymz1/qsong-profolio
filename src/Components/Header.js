import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    // const project = this.props.data.project;
    const github = this.props.data.github;
    const linkedin = this.props.data.linkedin;
    const name = this.props.data.name;
    const labName = this.props.data.labName;
    const description = this.props.data.description;
    const uf_profile = this.props.data.uf_profile;

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#research">
                Research
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#news">
                News
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Teams
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#publications">
                Publications
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#resume">
                Educations
              </a>
            </li> */}

            <li>
              <a className="smoothscroll" href="#software-tools">
                Developed Tools
              </a>
            </li>
            
            {/* <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li> */}

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{labName}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                {/* <a href={project} className="button btn project-btn">
                  <i className="fa fa-book"></i>Project
                </a> */}
                <a href={uf_profile} className="button btn school-btn" target="_blank" rel="noopener noreferrer"
                  style={{ marginRight: '15px', padding: '10px 15px', backgroundColor: '#00529b', color: 'white', borderRadius: '5px' }}
                >
                  <i className="fa fa-book"></i> UF profile
                </a>
                <a href={linkedin} className="button btn github-btn"
                style={{ marginRight: '15px', padding: '10px 15px', backgroundColor: '#00529b', color: 'white', borderRadius: '5px' }}
                >
                  <i className="fa fa-linkedin"></i>Linkedin
                </a>
                <a href={github} className="button btn linkedin-btn"
                style={{ marginRight: '15px', padding: '10px 15px', borderRadius: '5px' }}
                >
                  <i className="fa fa-github"></i>Github
                </a>
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#research">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
