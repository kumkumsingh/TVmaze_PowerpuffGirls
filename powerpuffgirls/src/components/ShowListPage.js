import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowListPage(props){
    return(
        <React.Fragment>
            {props.shows && props.shows.map(show => {
                return <li key={show.show.id}>
                    <Link to={`/show/${show.show.id}`}>
                        {show.show.name}
                    </Link>
                </li>
            })}
        </React.Fragment>
    )
}
