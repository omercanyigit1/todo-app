import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";

const HomePage = (props) => {

    return (
       <div>
           ddd
       </div>
   )
};

const mapStateToProps = (state) => {
    return {
        loading: state.list.loading,
        error: state.list.error,
        list: state.list.list,
        limit: state.list.limit
    }
}

export default connect(mapStateToProps, {})(HomePage);