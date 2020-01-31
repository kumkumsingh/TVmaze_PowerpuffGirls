import React, { Component } from 'react';
import { getshowlist } from '../actions/actions'; 
import { connect } from 'react-redux';
import ShowListPage from './ShowListPage'; 
import { showName } from '../constants';
import '../styles/HomePage.css';

 // Initial start of the page where it renders the List of Shows
class HomePage extends Component{

    /*ComponentDidMount() is invoked after a component is mounted
      Calling an action getshowlist() with the showName
    */
    componentDidMount(){
        this.props.getshowlist(showName);
    }

    // renders the page and passes the list of shows as props to the ShowList Component
    render(){
        return(
            <React.Fragment>
                <h3>Welcome</h3>
                <p>Pick a show from the list of shows given below. Click on <b>Watch Now</b> to reveal Seasons</p>
                <ShowListPage shows={this.props.shows} />
            </React.Fragment>
        )
    }
}

// mapStateToProps is used for selectinga part of data from the store. 
// fetching list of shows from the store

const mapStateToProps = (state) => {
    return{
        shows: state.showList
    }
}

// connect() function connects a Component with the redux store
export default connect(mapStateToProps,{ getshowlist })(HomePage)
