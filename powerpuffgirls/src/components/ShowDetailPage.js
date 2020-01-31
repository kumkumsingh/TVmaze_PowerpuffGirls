import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser'; //A utility for comverting HTML Strings into React Components
import SeasonsListPage from './SeasonsListPage';
import { connect } from 'react-redux';
import { getshowdetail } from '../actions/actions';
import '../styles/DetailPage.css';

// Renders the details of the show
class ShowDetailPage extends Component{

    /*
      ComponentDidMount() is invoked after a component is mounted
      Calling an action getshowdetail with the show id
    */
    componentDidMount(){
        this.props.getshowdetail(Number(this.props.match.params.id))
    }

    //renders name, image and summary and passes the show id to Seasons List Page
    render(){
        return(
            <React.Fragment>
                <div className='detail'>
                    <h2>{this.props.detail.name}</h2>
                    <div className='image'>
                        {this.props.detail.image && <img src={this.props.detail.image.original} alt='Not Available'></img>}
                    </div>
                    <div className='summary'>
                        { ReactHtmlParser(this.props.detail.summary) }
                    </div>
                </div>
               {this.props.detail.id && <SeasonsListPage id={Number(this.props.match.params.id)} />}
            </React.Fragment>
        )
    }
}

// mapStateToProps is used for selecting part of data from the store. 
// fetching show details from the store
const mapStateToProps = (state) => {
    return{
        detail : state.showDetails
    }
}

// connect() function connects a Component with the redux store
export default connect(mapStateToProps, { getshowdetail })(ShowDetailPage)