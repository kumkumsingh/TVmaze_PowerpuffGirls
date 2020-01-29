import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import SeasonsListPage from './SeasonsListPage';

export default function ShowDetailPage(props){
    console.log("props:",props.detail)
    console.log("image url:", props.detail.image)
    return(
        <React.Fragment>
                <h2>{props.detail.name}</h2>
                {props.detail.image && <img src={props.detail.image.original} width='200px' height='300px'></img>}
                <div>{ ReactHtmlParser(props.detail.summary) }</div>
                {props.detail.id && <SeasonsListPage id={props.detail.id} />}
        </React.Fragment>
    )
}