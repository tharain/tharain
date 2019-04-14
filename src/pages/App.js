import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CssBaseLine from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

import {
  Link
} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import ResumePage from 'src/pages/ResumePage.jsx';

import Header from 'src/tharain/Header.jsx';
import Footer from 'src/tharain/Footer.jsx';
import Sidebar from 'src/tharain/Sidebar.jsx';
import Icons from 'src/assets/Icons.jsx';

const propTypes = {
  cssState: PropTypes.string,
  updateCss: PropTypes.func,
}

const defaultProps = {

}

const styles = theme => ({
  chip: {
    background: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.black}`,
    marginRight: 5,
  },
  details: {
    alignItems: 'center',
  },
  detailsCol: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  gridList: {
    height: 450,
    width: '100%',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  flexCol: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  logo: {
    height: 100,
  }
});

const portfolioData = [
   {
     img: 'src/assets/Sashimi.png',
     title: 'Media Project [self proposed - Lecture Note 2.0] [Database] ( Completed with A )',
     author: 'Team Sashimi',
     tooltip: 'Key developer for Database',
     url: 'https://github.com/nus-mtp/sashimi-note',
   },
   {
     img: 'src/assets/game1.gif',
     title: 'Game Development Project [UI/AI] ( Completed with B+ )',
     author: 'Team Voxam',
     tooltip: 'Developed frontpage / save & load',
     url: 'https://github.com/JeanKoh/Voxsam',
   },
   {
     img: '',
     title: 'AIML to NodeJS (Self project) github link ( ONGOING )',
     author: 'Daphne',
     tooltip: 'Ongoing',
     url: 'https://github.com/tharain/jsAIMLInterpreter',
   },
   {
     img: '',
     title: 'Simple Task To-Do List Software',
     author: 'Team xxx',
     tooltip: 'Key developer for Storage',
     url: 'https://github.com/CS2103JAN2016-W15-2J/main'
   }
 ];

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = props.currState || {
      page: 'Skillset',
      content: [
        {
          name: 'Home',
          url: null,
        },
      ]
    };
  }

  renderSkillset() {
    const { classes } = this.props;
    return this.state.page === 'Skillset' ? (
      <React.Fragment>
        <ExpansionPanel defaultExpanded className="skilled">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h1" className="typographyFont">Skilled</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {"Visual Basic for Applications,JavaScript,Java, Microsoft Office (exclude Access),Chinese".split(',').reduce((prev, skill) => {
              prev.push(<Chip key={skill} label={skill} className={classes.chip} />);
              return prev;
            }, [])}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded className="sufficient">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h3" className="typographyFont">Sufficient</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {"Git,NodeJS,Unreal Engine 4,python,C,SQL,LaTeX,AIML,Adobe Flash,English,Chinese,HTML,CSS,Shell Script".split(',').reduce((prev, skill) => {
              prev.push(<Chip key={skill} label={skill} className={classes.chip} />);
              return prev;
            }, [])}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded className="tried">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h5" className="typographyFont">Tried</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {"C++,noSQL,Automated Machine Learning,Unreal Engine 4,Go,Linux OS,PHP".split(',').reduce((prev, skill) => {
              prev.push(<Chip key={skill} label={skill} className={classes.chip} />);
              return prev;
            }, [])}
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded className="basic">
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="caption" className="typographyFont">Basic</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            {"MATLAB,German".split(',').reduce((prev, skill) => {
              prev.push(<Chip key={skill} label={skill} className={classes.chip} />);
              return prev;
            }, [])}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    ) : null
  }

  renderPortfolio() {
    const { classes } = this.props;
    return this.state.page === 'Portfolio' ? (
      <ExpansionPanel defaultExpanded className="paperPaper">
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h3" className="typographyFont">Daphne's satisfied portfolio</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.detailsCol}>
          <Typography variant="h6" className="typographyFont">Passionate in the field of automated machine learning and/or data-mining.</Typography>
          <p />
          <div className="flexHeader">
            <Button
              color="secondary"
              variant="contained"
              className="portfolioButton"
              onClick={() => {
                window.open('https://www.linkedin.com/in/daphne-won-57299343', '_blank');
              }}
            >
              <Icons icon="linkedin" color="inherit"/>
              Daphne's Linkedin
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className="portfolioButton"
              onClick={() => {
                window.open('https://github.com/tharain', '_blank');
              }}
            >
              <Icons icon="github" color="inherit"/>
              Daphne's Main Github
            </Button>
            <Button
              color="secondary"
              variant="contained"
              className="portfolioButton"
              onClick={() => {
                window.open('https://github.com/daphne-jr', '_blank');
              }}
            >
              <Icons icon="github" color="inherit"/>
              Daphne's Second Github
            </Button>
          </div>
          <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList.concat(' paperPaper')}>
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div" className="typographyFont">Projects Highlights</ListSubheader>
              </GridListTile>
              {portfolioData.map(tile => (
                <GridListTile
                  key={tile.title}
                >
                  <img src={tile.img} alt={tile.title} />
                  <GridListTileBar
                    onClick={() => {
                      window.open(tile.url, '_blank');
                    }}
                    className="pointer"
                    title={tile.title}
                    subtitle={<span>by: {tile.author}</span>}
                    actionIcon={
                      <Tooltip
                        title={"Developed frontpage / save & load"}
                        placement="top"
                      >
                        <IconButton className={classes.icon}>
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ) : null;
  }

  renderWork() {
    const { classes } = this.props;
    return this.state.page === 'Work' ? (
      <React.Fragment>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'skilled',
              content: classes.flexCol
            }}
          >
            <img src="src/assets/shopee_logo.svg" alt="shopee logo" className={classes.logo} />
            <br />
            <Typography variant="h5" className="typographyFont">Shopee Regional Business Intelligence Front-End Developer (2019 - Current)</Typography>
            <br />
            <Typography variant="h5" className="typographyFont">Shopee Regional Business Intelligence Full Stack Developer (2018)</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">Jan 2018 - current</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            Shopee is an e-commerce business in south-east asia + Taiwan under SEA (or formally known as Garena).
            <br />
            Daphne works as a Full-stack Developer under Data Engineer Team working on Open-Source project to develop data-visualisation tools:
            <br />
            - Front-end: React JS
            <br />
            - Back-end: Flask (Python)
            <br />
            - Virtual Machine
            <br />
            - Analyse proxy logs with Python
            <br />
            - Follow software engineering principles
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'basic',
              content: classes.flexCol
            }}
          >
            <img src="src/assets/HP_logo.svg" alt="hp logo" className={classes.logo} />
            <br />
            <Typography variant="h5" className="typographyFont">HP Inc. (Intern)</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">May 2017 - August 2017</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Facilitated data collection for missing data and data-visualization with VBA
            <br />
            - Full Stack developer in Java Software and MS SQL to develop a UI to script HTML/CSS/JavaScript
            <br />
            - Taught basic coding
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: "basic",
              content: classes.flexCol
            }}
          >
            <img src="src/assets/astar_logo.svg" alt="astar logo" className={classes.logo} />
            <br />
            <Typography variant="h5" className="typographyFont">Singapore Institute of Manufacturing Technology (Intern)</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">May 2016 - July 2016</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Project Title: A Waste-To-Resource Matching Engine to Support the Planning of Industrial Symbiosis
            <br />
            - Created a relational database using VBA on multiple Excel workbooks to support a masters student research and simulation of software
            <br />
            - Discuss, research and planning of database from scratch to support the Industrial Symbiosis Project
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    ) : null;
  }

  renderEducation() {
    const { classes } = this.props;
    return this.state.page === 'Education' ? (
      <React.Fragment>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'skilled',
              content: classes.flexCol
            }}
          >
            <Typography variant="h3" className="typographyFont">National University of Singapore</Typography>
            <br />
            <Typography variant="h5" className="typographyFont">{`{ Bachelor of Computer Science with Honours in Computer Science }` }</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">2014-2018</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Bachelor of Computer Science with Honours in Computer Science
            <br />
            - Focus Area: Artificial Intelligence and Computer Graphics with Games
            <br />
            - Admitted to dean's list in AY2016/17 Semester 2
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'basic',
              content: classes.flexCol
            }}
          >
            <Typography variant="h5" className="typographyFont">Nanyang Polytechnic</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">2011-2014</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Diploma in Chemical & Pharmaceutical Technology Aka Chemical Engineering (GPA 3.75)
            <br />
            - Completed Diploma-Plus in Calculus concurrent with diploma modules
            <br />
            - Completed 2 semesters of optional elective in German (A1) concurrent with diploma modules
            <br />
            - Awarded 'A' for Co-Curricular Activities
            <br />
            - Admitted to 3 semesters of directors list
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: "basic",
              content: classes.flexCol
            }}
          >
            <Typography variant="h5" className="typographyFont">Nanyang Academy of Fine Arts</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">2005 - 2010</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Part-Time course in Visual Arts (Unfortunate there is no certificate to show as it is just part-time course of leisure purpose)
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    ) : null;
  }

  renderAchievements() {
    const { classes } = this.props;
    return this.state.page === 'Achievements' ? (
      <React.Fragment>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'skilled',
              content: classes.flexCol
            }}
          >
            <Typography variant="h5" className="typographyFont">Animus Application</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">2017-ongoing</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Media Coverage:
            <br />
            - [ http://www.channelnewsasia.com/news/singapore/want-to-track-down-otters-in-singapore-this-app-might-help-9076288 ]
            self-initiated project with group of friends
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'sufficient',
              content: classes.flexCol
            }}
          >
            <Typography variant="h5" className="typographyFont">Top 6 - NUS Data Science Student Challenge</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">2017 Hackathon</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Group of 3 project to extract real data from a graph image, targeted for students, researchers and business analysts to interpret research papers and business papers.
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'sufficient',
              content: classes.flexCol
            }}
          >
            <Typography variant="h5" className="typographyFont">2nd place in 10th STEPS - CS3284 Media Technology Project</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">2017</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Exhibition in School
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'sufficient',
              content: classes.flexCol
            }}
          >
            <Typography variant="h5" className="typographyFont">Year 1 Summer Orbital Project</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">2015</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Pair-work independent Project Gemini (Intermediate)
            <br />
            - Schedule Comparator aimed for NUS students to collaborate free time to meetup or do project using NUSMods API.
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'sufficient',
              content: classes.flexCol
            }}
          >
            <Typography variant="h5" className="typographyFont">Inter Schools Splash Awards (Animation)</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">2007 & 2009</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - 2009 - First Runner Up (Individual)
            <br />
            - 2007 - Second Runner Up (Group)
            <br />
            - Self-made music + Adobe Flash Animation
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            classes={{
              root: 'tried',
              content: classes.flexCol
            }}
          >
            <Typography variant="h5" className="typographyFont">Research - Final Year Project</Typography>
            <br />
            <Typography variant="subtitle2" className="typographyFont">Oct 2013 - Mar 2014</Typography>
          </ExpansionPanelSummary>
          <Divider />
          <ExpansionPanelDetails className={classes.detailsCol.concat(' paperPaper')}>
            - Project Title: Utilisation of Wastewater for bioleaching of heavy metals from Incineration Bottom Ash by Heterotroph Microorganisms
            <br />
            - Individual Work
            <br />
            - Funded Research
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </React.Fragment>
    ) : null;
  }

  render() {
    return (
      <div className="App">
        <CssBaseLine />
        <main className="maxWidth">
          <Header
            content={this.state.content}
            cssState={this.props.cssState}
            updateCss={this.props.updateCss}
            onChange={(page) => {
              let state = undefined;
              if(page === '/') {
                state = {
                  page: 'Skillset',
                  content: [
                    {
                      name: 'Home',
                      url: null,
                    },
                  ]
                };
              } else {
                state = {
                  page: page,
                  content: [
                    {
                      name: 'Home',
                      url: '/',
                    },
                    {
                      name: page,
                      url: null,
                    }
                  ]
                };
              }
              this.setState(state);
              this.props.onChange(state);
            }}
          />
          <Paper className="paper">
            {this.renderSkillset()}
            {this.renderPortfolio()}
            {this.renderWork()}
            {this.renderEducation()}
            {this.renderAchievements()}
          </Paper>
          <Footer />
        </main>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default withStyles(styles)(App);
