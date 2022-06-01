import React, { Component } from 'react';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false,
      showHideDemo4: false,
      showHideDemo5: false,

    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ 
          showHideDemo1: !this.state.showHideDemo1,
          showHideDemo2: false,
          showHideDemo3: false,
          showHideDemo4: false,
          showHideDemo5: false  
        });
        break;
      case "showHideDemo2":
        this.setState({ 
          showHideDemo2: !this.state.showHideDemo2,
          showHideDemo1: false,
          showHideDemo3: false,
          showHideDemo4: false,
          showHideDemo5: false  
        });
        break;
      case "showHideDemo3":
        this.setState({ 
          showHideDemo3: !this.state.showHideDemo3,
          showHideDemo2: false,
          showHideDemo1: false,
          showHideDemo4: false,
          showHideDemo5: false  });
        break;
      case "showHideDemo4":
        this.setState({ 
          showHideDemo4: !this.state.showHideDemo4,
          showHideDemo2: false,
          showHideDemo1: false,
          showHideDemo3: false,
          showHideDemo5: false  });
        break;
      case "showHideDemo5":
        this.setState({ 
          showHideDemo5: !this.state.showHideDemo5,
          showHideDemo2: false,
          showHideDemo1: false,
          showHideDemo3: false,
          showHideDemo4: false  });
        break;
      default:
        console.log(name);
    }
  }
  
  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3, showHideDemo4, showHideDemo5 } = this.state;
    return (
      <section id="portfolio">
        <div className="row projects">
          <div className="twelve columns collapsed">
            <h1>Project managed by  me.</h1>
            <span style={{borderbottom:"5px solid red"}} ><h1 style={{textAlign:"left" }}>Buzzclan LLC</h1></span>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://axia.global/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/axia.jpg" alt="final-capstone" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Axia</h3>
                      <p>Saga Lib use digital media to mark a change in the way of story telling and reading. We encourage chapter model stories because it enhances the writer to create a thrilling ending of chapters which helps in keeping audience more engaged. We hope our change mark a difference in history of story writing.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                          <li>
                            <button className="button project-button"  onClick={() => this.hideComponent("showHideDemo1")}>
                              Detail 
                            </button>
                          </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-nodejs-plain-wordmark technology"></i>
                        <i className="devicon-postgresql-plain-wordmark technology"></i>
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
                        <div className="project-tags">Node JS</div>
                        <div className="project-tags">PostgreSQL</div>
                        <div className="project-tags">Swagger</div>
                        <div className="project-tags">Blockchain</div>
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
                  <a href="https://buzzhrms.com/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/buzzhrms.jpg" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>BuzzHRMS</h3>
                      <p>Saga Lib use digital media to mark a change in the way of story telling and reading. We encourage chapter model stories because it enhances the writer to create a thrilling ending of chapters which helps in keeping audience more engaged. We hope our change mark a difference in history of story writing.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                            <button className="button project-button"  onClick={() => this.hideComponent("showHideDemo2")}>
                            Detail 
                            </button>
                          </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-zend-plain-wordmark technology"></i>
                        <i className="devicon-mysql-plain-wordmark technology"></i>
                        {/* <i className="devicon-html5-plain-wordmark technology"></i>
                        <i className="devicon-css3-plain-wordmark technology"></i>
                        <i className="devicon-jquery-plain-wordmark technology"></i> */}
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
                        <div className="project-tags">Zend</div>
                        <div className="project-tags">PHTML</div>
                        <div className="project-tags">CSS</div>
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

              <div className="article-wrapper">
                <article className="col-12 col-12-xsmall work-item">
                  <a href="https://ajel.sa/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/ajel.jpg" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Ajel News</h3>
                      <p>Saga Lib use digital media to mark a change in the way of story telling and reading. We encourage chapter model stories because it enhances the writer to create a thrilling ending of chapters which helps in keeping audience more engaged. We hope our change mark a difference in history of story writing.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                            <button className="button project-button" onClick={() => this.hideComponent("showHideDemo3")}>
                            Detail 
                            </button>
                          </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-symfony-plain-wordmark technology"></i>
                        <i className="devicon-mongodb-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              {showHideDemo3 && <div className="article-wrapper"  style={{paddingBottom:"30px"}}>
                <article className="col-12 col-12-xsmall project-expanded">
                  <div className="art-description">
                    <div className="text-wrapper">
                      <div style={{borderbottom: "3px solid #333333fa", paddingbottom: "6px", color:"white"}}><h3  style={{color:"white", borderbottom: "3px solid #333333fa"}}>Responsiblity</h3></div>
                      <ul style={{listStyleType:"square",marginLeft:"20px"}}>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Developed And Maintained Code to Manage Application Ads from Applications Backend In Symfony application.</p></li>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Developed code for the frontend to get the fields from migrated table in Symfony application</p></li>
                      </ul>
                    </div>
                    <ul className="actions">
                      <div className="languages">
                        <div className="project-tags">Symfony</div>
                        <div className="project-tags">HTML</div>
                        <div className="project-tags">CSS</div>
                        <div className="project-tags">Mongo DB</div>
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
                  <a href="https://www.buzztaq.com/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/buzztaq.jpg" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>Buzz TAQ</h3>
                      <p>BuzzTAQ, an evolved, scalable and AI-driven application is one talent acquisition application which can source, analyse and recommend the best “fit to hire” applicant with unbelievable distinctive accuracy.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                            <button className="button project-button"  onClick={() => this.hideComponent("showHideDemo4")}>
                            Detail 
                            </button>
                          </li>
                      </div>
                      <div className="languages">
                        <i className="devicon-java-plain-wordmark technology"></i>
                        <i className="devicon-react-plain-wordmark technology"></i>
                        <i className="devicon-nodejs-plain-wordmark technology"></i>
                        <i className="devicon-amazonwebservices-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              {showHideDemo4 && <div className="article-wrapper"  style={{paddingBottom:"30px"}}>
                <article className="col-12 col-12-xsmall project-expanded">
                  <div className="art-description">
                    <div className="text-wrapper">
                      <div style={{borderbottom: "3px solid #333333fa", paddingbottom: "6px", color:"white"}}><h3 style={{color:"white", borderbottom: "3px solid #333333fa"}}>Responsiblity</h3></div>
                      <ul style={{listStyleType:"square",marginLeft:"20px"}}>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Developed And Maintained Code to Manage Application Ads from Applications Backend In Symfony application.</p></li>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Developed code for the frontend to get the fields from migrated table in Symfony application</p></li>
                      </ul>
                    </div>
                    <ul className="actions">
                      <div className="languages">
                        <div className="project-tags">App Script</div>
                        <div className="project-tags">Servlet</div>
                        <div className="project-tags">Oracle DB</div>
                        <div className="project-tags">React JS</div>
                        <div className="project-tags">Node JS</div>
                        <div className="project-tags">Dynamo DB</div>
                        <div className="project-tags">AWS - EC2</div>
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
                  <a href="https://imsmfg.ca/" className="image fit thumb" target="_blank" rel="noopener noreferrer"><img src="images/thumbs/imslink.png" alt="pic-some" /></a>
                  <div className="art-description">
                    <div className="text-wrapper">
                      <h3>IMS Link</h3>
                      <p> Innovative Manufacturing Source (IMS) is a full service Electronic Contract Manufacturer founded in 2004 by Dave Elhard to offer an alternative choice in the Electronic Contract Manufacturing industry in Western Canada.</p>
                    </div>
                    <ul className="actions">
                      <div className="actions-wrapper">
                        <li>
                            <button className="button project-button"  onClick={() => this.hideComponent("showHideDemo5")}>
                            Detail 
                            </button>
                          </li>
                      </div>
                      <div className="languages">
                        <i class="devicon-angularjs-plain technology"></i>
                        <i className="devicon-nodejs-plain-wordmark technology"></i>
                        <i className="devicon-mysql-plain-wordmark technology"></i>
                        <i className="devicon-amazonwebservices-plain-wordmark technology"></i>
                      </div>
                    </ul>
                  </div>
                </article>
              </div>
              {showHideDemo5 && <div className="article-wrapper"  style={{paddingBottom:"30px"}}>
                <article className="col-12 col-12-xsmall project-expanded">
                  <div className="art-description">
                    <div className="text-wrapper">
                      <div style={{borderbottom: "3px solid #333333fa", paddingbottom: "6px", color:"white"}}><h3 style={{color:"white", borderbottom: "3px solid #333333fa"}}>Responsiblity</h3></div>
                      <ul style={{listStyleType:"square",marginLeft:"20px"}}>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Developed And Maintained Code to Manage Application Ads from Applications Backend In Symfony application.</p></li>
                        <li><p style={{fontSize:"1em",lineHeight:"1.2em"}}>Developed code for the frontend to get the fields from migrated table in Symfony application</p></li>
                      </ul>
                    </div>
                    <ul className="actions">
                      <div className="languages">
                        <div className="project-tags">Angular JS</div>
                        <div className="project-tags">Node JS</div>
                        <div className="project-tags">MY SQL</div>
                        <div className="project-tags">MS SQL</div>
                        <div className="project-tags">Node Red</div>
                        <div className="project-tags">AWS - EC2</div>
                        {/* <i className="devicon-html5-plain-wordmark technology"></i>
                        <i className="devicon-css3-plain-wordmark technology"></i>
                        <i className="devicon-jquery-plain-wordmark technology"></i> */}
                      </div>
                    </ul>
                  </div>
                </article>
              </div>}
            </div>
          </div>
        </div>
   </section>
    );
  }
}

export default Project;
