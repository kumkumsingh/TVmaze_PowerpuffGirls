import React, { Component } from 'react'
import { getepisodedetail } from '../actions/actions';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser'; //A utility for comverting HTML Strings into React Components
import '../styles/DetailPage.css';

// Displays the details of the episodes.
class EpisodeDetailpage extends Component{

    /*ComponentDidMount() is invoked after a component is mounted
      Calling an action getEpisodeDetail with the episode id
    */
    componentDidMount(){
        this.props.getepisodedetail(Number(this.props.match.params.id))
    }


    // rendering the name, image and summary of the episodes
    render(){
        return(
            <React.Fragment>
                <div className='detail'>
                    {this.props.episodeDetails && <h2>{this.props.episodeDetails.name}</h2>}
                    <div className='image'>
                        {this.props.episodeDetails.image && <img src={this.props.episodeDetails.image.original} alt='Not Available'></img>} 
                    </div>
                    <div className='summary'>
                        { ReactHtmlParser(this.props.episodeDetails.summary) }
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// mapStateToProps is used for selecting part of data from the store. 
// fetching episode details from the store

const mapStateToProps = (state) => {
    return{
        episodeDetails: state.episodeDetails
    }
}

// connect() function connects a Component with the redux store
export default connect(mapStateToProps,{ getepisodedetail })(EpisodeDetailpage)