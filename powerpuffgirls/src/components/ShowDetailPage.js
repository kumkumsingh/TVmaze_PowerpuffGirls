import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function ShowDetailPage(props){
    console.log("props:",props.detail)
    console.log("image url:", props.detail.image)
    let summary = props.detail.summary
    console.log(summary)
    return(
        <React.Fragment>
                <h2>{props.detail.name}</h2>
                {props.detail.image && <img src={props.detail.image.original} width='200px' height='300px'></img>}
                <div>{ ReactHtmlParser(props.detail.summary) }</div>
               
        </React.Fragment>
    )
}