import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {postSignOut} from "../../appRedux/actions";
import {Button, Navbar, NavbarRightItem} from "../styled";

const SignedNavbar = (props) => {
    const {postSignOut} = props;

    function handleClick(e) {
        e.preventDefault();
        postSignOut();
    }

    return (
        <Navbar>
            <NavbarRightItem>
                <span>Welcome Omer</span>
                <Button primary onClick={handleClick}>
                    Log Out
                </Button>
            </NavbarRightItem>
        </Navbar>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        postSignOut: () => dispatch(postSignOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedNavbar);