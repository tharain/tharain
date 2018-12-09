import React, { Component } from 'react';
import astarlogo from '../icons/astar_logo.svg';
import shopeelogo from '../icons/shopee_logo.svg';
import hplogo from '../icons/hp_logo.png';
import { ListGroup, ListGroupItem, Panel, Carousel, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { isMobile } from 'react-device-detect';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="./css/app.css" />
        <link rel="stylesheet" href="./css/App_old.css" />
        <Carousel className="App-header">
          <Carousel.Item className="light-pink-font">
            <h1>&#60;Daphne Won&#47;&#62;</h1>
            <p>☙ Bachelor in Computer Science ❧</p>
            <p>☙ 8163 7781 ❣ won.jr@hotmail.com ❧</p>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Full-Stack Developer</h1>
            <p>Daphne currently works in Shopee's Regional Business</p>
            <p>Intelligence Data Engineer team as a full-stack developer</p>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Graduated from NUS (2018)</h1>
            <p>Daphne graduated in Computer Science with Honors and completed</p>
            <p>focus areas in Artificial Intelligence and Media & Game Development</p>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Top 6 NUS Data Science Challenge</h1>
            <p>Daphne achieved top 6 in a 2017 Hackathon NUS Data Science Challenge with a team of 3,</p>
            <p>a project to extract real data from graph images to interpret research papers and business papers.</p>
          </Carousel.Item>
          <Carousel.Item>
            <h1>Project Animus with group of friends</h1>
            <p>Daphne is working with a few friends to develop project Animus to help animal researchers to</p>
            <p>collect wild animal information from general public securely. The project is on-going.</p>
          </Carousel.Item>
        </Carousel>
        <Tab.Container id="left-tabs-example" defaultActiveKey="skillset">
          <Row className="clearfix">
            <Col sm={3}>
              <Nav bsStyle="pills" stacked>
                <NavItem eventKey="skillset" className="white">SKILL SET</NavItem>
                <NavItem eventKey="portfolios" className="white">PORTFOLIOS</NavItem>
                <NavItem eventKey="work" className="white">WORK</NavItem>
                <NavItem eventKey="education" className="white">EDUCATION</NavItem>
                <NavItem eventKey="achievements" className="white">ACHIEVEMENTS</NavItem>
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content animation>

                <Tab.Pane eventKey="skillset">
                <br/>
                <Panel bsStyle="success">
                  <Panel.Heading>
                    <Panel.Title><h1>SKILLED</h1></Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>Visual Basic for Applications, Java, Microsoft Office (exclude Access)</Panel.Body>
                </Panel>
                <Panel bsStyle="info">
                  <Panel.Heading>
                    <Panel.Title><h2>SUFFICIENT</h2></Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>Linux OS, git, Javascript, NodeJS, Unreal Engine 4, python, C, SQL, LaTeX, AIML, Adobe Flash, English, Chinese, HTML, CSS, PHP</Panel.Body>
                </Panel>
                <Panel bsStyle="warning">
                  <Panel.Heading>
                    <Panel.Title><h3>TRIED</h3></Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>C++, noSQL, Automated Machine Learning, Unreal Engine 4</Panel.Body>
                </Panel>
                <Panel>
                  <Panel.Heading>
                    <Panel.Title><h4>BASIC</h4></Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>MATLAB, German</Panel.Body>
                </Panel>
                </Tab.Pane>

                <Tab.Pane eventKey="portfolios">
                <br/>
                <Panel bsStyle="success">
                  <Panel.Heading>
                    <Panel.Title><h1>Daphne's satisfied portfolio</h1></Panel.Title>
                    <Panel.Title>Passionate in the field of automated machine learning and/or data-mining.</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                  <ListGroup>
                    <ListGroupItem href="https://www.linkedin.com/in/daphne-won-57299343">Daphne's LinkedIn</ListGroupItem>
                    <ListGroupItem href="https://github.com/tharain">Daphne's main github</ListGroupItem>
                    <ListGroupItem href="https://github.com/daphne-jr">Daphne's 2nd github</ListGroupItem>
                    <ListGroupItem href="https://github.com/JeanKoh/Voxsam">Game Development Project [UI/AI] ( Completed with B+ )</ListGroupItem>
                    <ListGroupItem href="https://github.com/nus-mtp/lecture-note-2.0">Media Project [self proposed - Lecture Note 2.0] [Database] ( Completed with A )</ListGroupItem>
                    <ListGroupItem href="https://github.com/tharain/jsAIMLInterpreter">AIML to NodeJS (Self project) github link ( ONGOING )</ListGroupItem>
                    <ListGroupItem href="https://github.com/CS2103JAN2016-W15-2J/main">Simple Task To-Do List Software</ListGroupItem>
                  </ListGroup>
                  </Panel.Body>
                </Panel>
                </Tab.Pane>

                <Tab.Pane eventKey="work">
                  <br/>
                  <Panel bsStyle="success" id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                      <img id="shopeelogo" src={shopeelogo} alt="shopee logo"/>
                      <Panel.Title toggle><h3>Shopee Regional Business Intelligence Full Stack Developer</h3></Panel.Title>
                      <Panel.Title>Jan 2018 - current</Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                    <Panel.Body>
                      <div className="left">Shopee is an e-commerce business in south-east asia + Taiwan under SEA (or formally known as Garena).</div>
                      <div className="left">Daphne works as a Full-stack Developer under Data Engineer Team
                      working on Open-Source project to develop data-visualisation tools:</div>
                      <li>Front-end: React JS</li>
                      <li>Back-end: Flask (Python)</li>
                      <li>Virtual Machine</li>
                      <li>Analyse proxy logs with Python</li>
                      <li>Follow software engineering principles</li>
                    </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                  <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                      <img id="hplogo" src={hplogo} alt="hp logo"/>
                      <Panel.Title toggle><h3>HP Inc. (Intern)</h3></Panel.Title>
                      <Panel.Title>May 2017 - August 2017</Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                    <Panel.Body>
                      <li>Facilitated data collection for missing data and data-visualization with VBA</li>
                      <li>Full Stack developer in Java Software and MS SQL to develop a UI to script HTML/CSS/JavaScript</li>
                      <li>Taught basic coding</li>
                    </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                  <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                      <img id="astarlogo" src={astarlogo} alt="astar logo"/>
                      <Panel.Title toggle><h3>Singapore Institute of Manufacturing Technology (Intern)</h3></Panel.Title>
                      <Panel.Title>May 2016 - July 2016</Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                    <Panel.Body>
                      <li>Project Title: A Waste-To-Resource Matching Engine to Support the Planning of Industrial Symbiosis</li>
                      <li>Created a relational database using VBA on multiple Excel workbooks to support a masters student research and simulation of software</li>
                      <li>Discuss, research and planning of database from scratch to support the Industrial Symbiosis Project</li>
                    </Panel.Body>
                    </Panel.Collapse>
                  </Panel>
                </Tab.Pane>

                <Tab.Pane eventKey="education">
                <br/>
                <Panel bsStyle="success" id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title><h3>National University of Singapore</h3></Panel.Title>
                    <Panel.Title>2014 - 2018</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                  <li>Bachelor of Computer Science with Honours in Computer Science</li>
                  <li>Focus Area: Artificial Intelligence and Computer Graphics with Games</li>
                  <li>Admitted to dean's list in AY2016/17 Semester 2</li>
                  </Panel.Body>
                </Panel>
                <Panel>
                  <Panel.Heading>
                    <Panel.Title><h3>Nanyang Polytechnic</h3></Panel.Title>
                    <Panel.Title>2011 - 2014</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                  <li>Diploma in Chemical & Pharmaceutical Technology Aka Chemical Engineering (GPA 3.75)</li>
                  <li>Completed Diploma-Plus in Calculus concurrent with diploma modules</li>
                  <li>Completed 2 semesters of optional elective in German (A1) concurrent with diploma modules</li>
                  <li>Awarded 'A' for Co-Curricular Activities</li>
                  <li>Admitted to 3 semesters of directors list</li>
                  </Panel.Body>
                </Panel>
                <Panel>
                  <Panel.Heading>
                    <Panel.Title><h3>Nanyang Academy of Fine Arts</h3></Panel.Title>
                    <Panel.Title>2005 - 2010</Panel.Title>
                  </Panel.Heading>
                  <Panel.Body>
                  <li>Part-Time course in Visual Arts (Unfortunate there is no certificate to show as it is just part-time course of leisure purpose)</li>
                  </Panel.Body>
                </Panel>
                </Tab.Pane>

                <Tab.Pane eventKey="achievements">
                <br/>
                <Panel bsStyle="success" id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle><h3>Animus Application</h3></Panel.Title>
                    <Panel.Title>2017-ongoing</Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                    <li>Media Coverage:<br/>
                    [ http://www.channelnewsasia.com/news/singapore/want-to-track-down-otters-in-singapore-this-app-might-help-9076288 ]</li>
                    <li>self-initiated project with group of friends</li>
                    </Panel.Body>
                </Panel.Collapse>
                </Panel>

                <Panel bsStyle="info" id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle><h3>Top 6 - NUS Data Science Student Challenge (2017 Hackathon)</h3></Panel.Title>
                    <Panel.Title>2017</Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                  <Panel.Body>
                  <li>Group of 3 project to extract real data from a graph image, targeted for students, researchers and business analysts to interpret research papers and business papers.</li>
                  </Panel.Body>
                  </Panel.Collapse>
                </Panel>

                <Panel bsStyle="info" id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle><h3>2nd place in 10th STEPS - CS3284 Media Technology Project</h3></Panel.Title>
                    <Panel.Title>2017</Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                  <Panel.Body>
                  <li>Exhibition in school</li>
                  </Panel.Body>
                  </Panel.Collapse>
                </Panel>

                <Panel bsStyle="info" id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle><h3>Year 1 Summer Orbital Project</h3></Panel.Title>
                    <Panel.Title>2015</Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                  <Panel.Body>
                  <li>Pair-work independent Project Gemini (Intermediate)</li>
                  <li>Schedule Comparator aimed for NUS students to collaborate free time to meetup or do project using NUSMods API.</li>
                  </Panel.Body>
                  </Panel.Collapse>
                </Panel>

                <Panel bsStyle="info" id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle><h3>Inter Schools Splash Awards (Animation)</h3></Panel.Title>
                    <Panel.Title>2009 - First Runner Up (Individual)</Panel.Title>
                    <Panel.Title>2007 - Second Runner Up (Group)</Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                  <Panel.Body>
                  <li>Self-made music + Adobe Flash Animation</li>
                  </Panel.Body>
                  </Panel.Collapse>
                </Panel>

                <Panel id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle><h3>Research - Final Year Project</h3></Panel.Title>
                    <Panel.Title>Oct 2013 - Mar 2014</Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                  <Panel.Body>
                  <li>Project Title: Utilisation of Wastewater for bioleaching of heavy metals from Incineration Bottom Ash by Heterotroph Microorganisms</li>
                  <li>Individual Work</li>
                  <li>Funded Research</li>
                  </Panel.Body>
                  </Panel.Collapse>
                </Panel>
                </Tab.Pane>

              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default App;
