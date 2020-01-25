import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {Link} from 'react-router-dom';

export default function ShowDetailPage(props){
    console.log("props:",props.detail)
    console.log("image url:", props.detail.image)
    let episode = props.episode
    console.log("episode List",episode)
    return(
        <React.Fragment>
                <h2>{props.detail.name}</h2>
                {props.detail.image && <img src={props.detail.image.original} width='200px' height='300px'></img>}
                <div>{ ReactHtmlParser(props.detail.summary) }</div>
                {props.episode && props.episode.map(episode => {
                   return <li key={episode.id} >
                             <Link to={`/episode/${episode.id}`}>{episode.name}</Link> 
                          </li>
                })}
        </React.Fragment>
    )
}