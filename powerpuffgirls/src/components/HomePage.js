import React, { Component } from 'react';
import { getshowlist } from '../actions/actions'; 
import { connect } from 'react-redux';
import ShowListPage from './ShowListPage'; 
import {showName} from '../constants'

class HomePage extends Component{

    componentDidMount(){
        this.props.getshowlist(showName);
    }

    render(){
        return(
            <React.Fragment>
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
