import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import SeasonsListPage from './SeasonsListPage';
import { connect } from 'react-redux';
import { getshowdetail } from '../actions/actions';
import '../styles/DetailPage.css'

class ShowDetailPage extends Component{
    componentDidMount(){
        this.props.getshowdetail(Number(this.props.match.params.id))
    }

    render(){
        console.log("hello",this.props.detail)
        return(
            <React.Fragment>
               <h2>{this.props.detail.name}</h2>
               {this.props.detail.image && <img src={this.props.detail.image.original} alt='Not Available'></img>}
               <div className="summary">
                 { ReactHtmlParser(this.props.detail.summary) }
               </div>
               {this.props.detail.id && <SeasonsListPage id={Number(this.props.match.params.id)} />}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        detail : state.showDetails
    }
}

export default connect(mapStateToProps, { getshowdetail })(ShowDetailPage)