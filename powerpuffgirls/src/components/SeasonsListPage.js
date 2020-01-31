import React, { Component } from 'react';
import { getseason, getepisodelist } from '../actions/actions';
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


class SeasonsListPage extends Component{

    componentDidMount(){
        console.log("season", this.props.id)
        this.props.getseason(this.props.id)
    }


    handleClickOpen = (seasonid) => {
        console.log("seasonid",seasonid)
        this.props.getepisodelist(seasonid)
    }

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

const mapStateToProps = (state) => {
    return{
        seasons: state.seasonList,
        episodes: state.episodeList
    }
}

export default connect(mapStateToProps, { getseason, getepisodelist })(withStyles(useStyles)(SeasonsListPage))