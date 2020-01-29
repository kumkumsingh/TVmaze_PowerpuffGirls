import React, { Component } from 'react';
import { getshow } from '../actions/actions'; 
import { connect } from 'react-redux';
import ShowDetailPage from './ShowDetailPage'; 

class HomePage extends Component{

    componentDidMount(){
        this.props.getshow();
    }

    render(){
        return(
            <React.Fragment>
                <ShowDetailPage detail={this.props.details} />
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        details: state.showDetail
    }
}

export default connect(mapStateToProps,{ getshow })(HomePage)
