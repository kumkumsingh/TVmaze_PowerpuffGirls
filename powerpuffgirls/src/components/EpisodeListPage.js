import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Paginator from 'react-hooks-paginator';
import '../styles/EpisodeListPage.css';

export default function EpisodeListPage(props) {
    const pageLimit = 5    
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    
    useEffect(() => {
        if(!props.episodes) return 
            setCurrentData(props.episodes.slice(offset, offset + pageLimit));
    }, [offset, props.episodes]);
    
    console.log(props.episodes);

    console.log(currentPage)

    return (
        <React.Fragment>
            {props.episodes && currentData.map(episode => {
               return <ul className='list'>
                        <li key={episode.id}>
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


