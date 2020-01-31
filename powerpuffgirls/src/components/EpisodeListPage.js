import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paginator from 'react-hooks-paginator';
import '../styles/EpisodeListPage.css';

// List all the episodes in a paginated format
export default function EpisodeListPage(props) {
    const pageLimit = 5 ; // the number of items in page
    const [offset, setOffset] = useState(0); // initializing the offset
    const [currentPage, setCurrentPage] = useState(1); // initializing the currentPage Number
    const [currentData, setCurrentData] = useState([]); // Initializing the data 
    
    /*
      useEffect() is a concept in hooks which is similar to ComponentDidMount().
      Setting the data based on the offset.
    */
    useEffect(() => {
        if(!props.episodes) return 
            setCurrentData(props.episodes.slice(offset, offset + pageLimit));
    }, [offset, props.episodes]);
    
    // renders list of episodes and provides a link to the episodes.
    // Paginator is used for pagination.
    return (
        <React.Fragment>
            {props.episodes && currentData.map((episode,index) => {
               return <ul className='list' key={index}>
                        <li key={index}>
                            <Link to={`/episode/${episode.id}`}>
                                {episode.name}
                            </Link>
                        </li>
                    </ul>

            })}

            <div>
                {props.episodes && <Paginator
                    totalRecords={props.episodes.length}
                    pageLimit={pageLimit}
                    pageNeighbours={1}
                    setOffset={setOffset}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />}
            </div>
        </React.Fragment>
    )
}


