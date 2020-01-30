import React, { Component } from 'react';
import { getshowlist } from '../actions/actions'; 
import { connect } from 'react-redux';
import ShowListPage from './ShowListPage'; 
import {showName} from '../constants';
import '../styles/HomePage.css'

class HomePage extends Component{

    componentDidMount(){
        this.props.getshowlist(showName);
    }

    render(){
        return(
            <React.Fragment>
                <h3>Welcome !!!</h3>
                <p> These are the available list of shows </p>
                <p> Have a look at the shows !!! </p>
                <p> Click on View link to view the details of the show  </p>
                <ShowListPage shows={this.props.shows} />
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        shows: state.showList
    }
}

export default connect(mapStateToProps,{ getshowlist })(HomePage)
