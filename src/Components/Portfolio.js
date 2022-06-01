import React, { Component } from 'react';

class Portfolio extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false

    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ 
          showHideDemo1: !this.state.showHideDemo1,
          showHideDemo2: false  
        });
        break;
      case "showHideDemo2":
        this.setState({ 
          showHideDemo2: !this.state.showHideDemo2,
          showHideDemo1: false 
        });
        break;
      default:
        console.log(name);
    }
  }
  
  render() {
    const { showHideDemo1, showHideDemo2 } = this.state;
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/06.jpg" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Saga Lib</h3>
                      <p>Saga Lib use digital media to mark a change in the way of story telling and reading. We encourage chapter model stories because it enhances the writer to create a thrilling ending of chapters which helps in keeping audience more engaged. We hope our change mark a difference in history of story writing.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://www.youtube.com/watch?v=B4Q0TBybEXU" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li>
                            <button className="button project-button"  onClick={() => this.hideComponent("showHideDemo1")}>
                            Detail 
                            </button>
                          </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-android-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              {showHideDemo1 && <div className="article-wrapper" style={{paddingBottom:"30px"}}>
                <article className="col-12 col-12-xsmall project-expanded">
                  <div className="art-description">
                    <div className="text-wrapper">
                      <div style={{borderbottom: "3px solid #333333fa", paddingbottom: "6px", color:"white"}}><h3 style={{color:"white", borderbottom: "3px solid #333333fa"}}>Responsiblity</h3></div>
                      <ul className="text-wrapper" style={{listStyleType:"square",marginLeft:"20px"}}>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Developed And Maintained Code for the Rest Api of the backend Application based on blockchain in NodeJS.</p></li>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Structured back-end codes in NodeJS, PostgreSQL db for software to maintain easy access to data</p></li>
                      </ul>
                    </div>
                    <ul className="actions">
                      <div className="languages">
                        <div className="project-tags">Adroid Studio</div>
                        <div className="project-tags">Google Play Console</div>
                        <div className="project-tags">Firebase</div>
                        <div className="project-tags">Firestore</div>
                        {/* <i className="devicon-html5-plain-wordmark technology"></i>
                        <i className="devicon-css3-plain-wordmark technology"></i>
                        <i className="devicon-jquery-plain-wordmark technology"></i> */}
                      </div>
                    </ul>
                  </div>
                </article>
              </div>}


              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/08.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>SagaLib WebApp</h3>
                      <p>Saga Lib use digital media to mark a change in the way of story telling and reading. We encourage chapter model stories because it enhances the writer to create a thrilling ending of chapters which helps in keeping audience more engaged. We hope our change mark a difference in history of story writing.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li><a href="https://www.youtube.com/watch?v=lOppR8f4C4I" className="button project-button" target="_blank" rel="noopener noreferrer">View Demo</a></li>
                        <li>
                            <button className="button project-button"  onClick={() => this.hideComponent("showHideDemo2")}>
                            Detail 
                            </button>
                          </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-react-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>

              {showHideDemo2 && <div className="article-wrapper"  style={{paddingBottom:"30px"}}>
                <article className="col-12 col-12-xsmall project-expanded">
                  <div className="art-description">
                    <div className="text-wrapper">
                      <div style={{borderbottom: "3px solid #333333fa", paddingbottom: "6px", color:"white"}}><h3  style={{color:"white", borderbottom: "3px solid #333333fa"}}>Responsiblity</h3></div>
                      <ul style={{listStyleType:"square",marginLeft:"20px"}}>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Developed and maintained code for different modules of the Zend Application (php).</p></li>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Participated in bussiness requirement gathering, Development and Unit testing of multiple modules</p></li>
                      </ul>
                    </div>
                    <ul className="actions">
                      <div className="languages">
                        <div className="project-tags">React</div>
                        <div className="project-tags">Firebase</div>
                        <div className="project-tags">Firestore</div>
                        <div className="project-tags">JQuery</div>
                        <div className="project-tags">SQL</div>
                        {/* <i className="devicon-html5-plain-wordmark technology"></i>
                        <i className="devicon-css3-plain-wordmark technology"></i>
                        <i className="devicon-jquery-plain-wordmark technology"></i> */}
                      </div>
                    </ul>
                  </div>
                </article>
              </div>}
              
              <ul className="actions">
                <li className="wide-button"><a href="https://github.com/rammazzoti2000" className="button portfolio-button" target="_blank" rel="noopener noreferrer">Follow Social</a></li>
              </ul>
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Portfolio;
