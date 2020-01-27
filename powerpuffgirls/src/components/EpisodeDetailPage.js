import React, { Component } from 'react';
import { episodedetail } from '../actions/showactions'
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

class EpisodeDetailPage extends Component{

    componentDidMount(){
        this.props.episodedetail(Number(this.props.match.params.id))
    }


    handleEvent = (event) => {
        event.preventDefault();
        this.props.history.push('/')
    }

    render(){
       return(
           <React.Fragment>
              {this.props.episodedetails.map(episode => {
                  return (
                      <React.Fragment>
                            <h3>{episode.name}</h3>
                            {episode.image && <img src={episode.image.medium} />}
                            <div>{ ReactHtmlParser(episode.summary) }</div>
                      </React.Fragment>
                  )
              })}
             <button onClick={this.handleEvent}>Go Back TO Show</button>
           </React.Fragment>
       )
    }
}

const mapStateToProps = (state) => {
    console.log("state", state)
    return{
        episodedetails : state.episodeList
    }
}

export default connect(mapStateToProps, { episodedetail })(EpisodeDetailPage)