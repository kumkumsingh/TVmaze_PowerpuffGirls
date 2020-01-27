import React from 'react';
import {Link} from 'react-router-dom';

export default function EpisodeListPage(props){
    return(
        <React.Fragment>

                {props.episode && props.episode.map(episode => {
                   return <li key={episode.id} >
                             <Link to={`/episode/${episode.id}`}>{episode.name}</Link> 
                          </li>
                })}
        </React.Fragment>
    )
}