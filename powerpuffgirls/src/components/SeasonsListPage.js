import React, { Component } from 'react';
import { getseason, getepisodelist } from '../actions/actions';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import EpisodeListPage from './EpisodeListPage';

class SeasonsListPage extends Component{

    state = {
        setOpen: false,

    }

    componentDidMount(){
        this.props.getseason(this.props.id)
    }


    handleClickOpen = (seasonid) => {
        this.setState({
            setOpen: true
        })
        this.props.getepisodelist(seasonid)
    }

    render(){
        return(
            <React.Fragment>
               {this.props.seasons && this.props.seasons.map((season, index) => {
                   return <React.Fragment>
                                <Button variant="outlined" color="primary" onClick={() => this.handleClickOpen(season.id)}>
                                    Season {index+1}
                                </Button>
                                
                            </React.Fragment>
                   
               })}
              <EpisodeListPage />
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        seasons: state.seasonList
    }
}

export default connect(mapStateToProps, { getseason, getepisodelist })(SeasonsListPage)