import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import SignedNavbar from "../../components/SignedNavbar";

const HomePage = (props) => {

    return (
       <div>
           <SignedNavbar />
       </div>
   )
};

export default connect(null, {})(HomePage);