import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Slide from "react-reveal";
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import "./customCarouselStyles.css";
import { Carousel } from 'react-responsive-carousel';


class Research extends Component {
    render() {
        if (!this.props.research) return null;
        
        const { research } = this.props;

        return (
            <section id="research" style={{ backgroundColor: 'white', marginBottom: "45px" }}>
                <div className="row research">
                    <div className="header-col">
                        <h1>
                            <span>Research</span>
                        </h1>
                    </div>
                </div>
                
                {/* <Slide right duration={1300}> */}
                <div className="row" style={{marginTop: "20px"}}>
                    <div className="twelve columns main-col">
                        {/* Carousel for images */}
                        {/* <div style={{backgroundColor: "#535353", padding: "20px", }}> */}
                            <div style={{backgroundImage: "url('/qsong-profolio/images/carousel_BG2.avif')", backgroundSize: "cover",
                            backgroundSize: "900px 510px"}}>
                            <Carousel autoPlay interval={2500} infiniteLoop showThumbs={false}>
                                <div>
                                    <img src="/qsong-profolio/images/research/SiGra.png" style={{
                                        width: '53%',
                                        height: '53%',
                                        objectFit: 'contain'
                                    }} />
                                    <p className="legend">SiGra: single-cell spatial elucidation through an image-augmented graph transformer, Nature Communications (2023)</p>
                                </div>
                                <div>
                                    <img src="/qsong-profolio/images/research/DRMref.jpeg" style={{
                                        width: '51%',
                                        height: '51%',
                                        objectFit: 'contain'
                                    }} />
                                    <p className="legend">DRMref: comprehensive reference map of drug resistance mechanisms in human cancer, Nucleic Acids Research (2024)</p>
                                </div>
                                <div>
                                    <img src="/qsong-profolio/images/research/hypergraphNN.png" style={{
                                        width: '68%',
                                        height: '68%',
                                        objectFit: 'contain'
                                    }} />
                                    <p className="legend">Gene expression prediction from histology images via hypergraph neural networks, Briefings in Bioinformatics (2024)</p>
                                </div>
                                <div>
                                    <img src="/qsong-profolio/images/research/COVID.jpg" style={{
                                        width: '90%',
                                        height: '90%',
                                        objectFit: 'contain'
                                    }} />
                                    <p className="legend">Risk and Outcome of Breakthrough COVID-19 Infections in Vaccinated Patients With Cancer: Real-World Evidence From the National COVID Cohort Collaborative, Journal of Clinical Oncology (2022)</p>
                                </div>
                                <div>
                                    <img src="/qsong-profolio/images/research/spaCI.png" style={{
                                        width: '70%',
                                        height: '70%',
                                        objectFit: 'contain'
                                    }} />
                                    <p className="legend">spaCI: deciphering spatial cellular communications through adaptive graph model, Briefings in Bioinformatics (2023)</p>
                                </div>
                                <div>
                                    <img src="/qsong-profolio/images/research/scGCN.jpg" style={{
                                        width: '89%',
                                        height: '89%',
                                        objectFit: 'contain'
                                    }} />
                                    <p className="legend">scGCN: a Graph Convolutional Networks Algorithm for Knowledge Transfer in Single Cell Omics. Nature Communications (2021)</p>
                                </div>
                            </Carousel>
                            </div>
                        {/* </div> */}
                        
                        <div>
                            {/* Rendering the introduction text */}
                            <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', paddingLeft: '20px', paddingRight: '20px',  fontSize: '14px'}}>
                                {research.introduction}
                            </p>

                            {/* Iterating over each research section */}
                            {research.text.map((section, index) => (
                                <div key={index} style={{
                                    marginBottom: '-20px',
                                    padding: '20px',
                                    // border: '1px solid #ddd',
                                    // borderRadius: '8px',
                                    // backgroundColor: '#f9f9f9'
                                }}>
                                    <h3 style={{ color: 'black', fontWeight: 'bold', marginBottom: '15px' }}>
                                        {section.title}
                                    </h3>
                                    <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
                                        {section.content.split('\n').map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br /><br />
                                            </React.Fragment>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* </Slide> */}
            </section>
        );
    }
}

export default Research;
