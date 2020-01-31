import React, { Component } from 'react';
import { getseasons, getepisodelist } from '../actions/actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import EpisodeListPage from './EpisodeListPage';
import { withStyles } from '@material-ui/core/styles';
import '../styles/SeasonsListPage.css';

const useStyles = theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  });


// List all the seasons 
class SeasonsListPage extends Component{

    /*
      ComponentDidMount() is invoked after a component is mounted
      Calling an action getseasons with the show id
    */
    componentDidMount(){
        this.props.getseasons(this.props.id)
    }

    // handle click event of the button
    // Calling the list of episode by passing season id 
    handleClickOpen = (seasonid) => {
        this.props.getepisodelist(seasonid)
    }

    // renders list of seasons
    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
               <p>Click on a season to view episodes</p>
               <p>Click on a episode name to view the details</p>
               <div className='container'>
               {this.props.seasons && this.props.seasons.map((season, index) => {
                   return  <div className={classes.root} key={index}>
                            <Button variant='contained' color='primary' onClick={() => this.handleClickOpen(season.id)}>
                                 Season {index+1}
                            </Button>
                           </div>
                            
               })}
              </div>
              <EpisodeListPage episodes={this.props.episodes}/>
            </React.Fragment>
            
        )
    }
}

// mapStateToProps is used for selecting part of data from the store. 
// fetching season list and episode list from the store

const mapStateToProps = (state) => {
    return{
        seasons: state.seasonList,
        episodes: state.episodeList
    }
}

// connect() function connects a Component with the redux store
// withStyles is used to make styles available for Class Componenet when using materialUI
export default connect(mapStateToProps, { getseasons, getepisodelist })(withStyles(useStyles)(SeasonsListPage))