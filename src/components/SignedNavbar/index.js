import React from 'react';
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {postSignOut} from "../../appRedux/actions";
import {Button, Navbar, NavbarRightItem} from "../styled";

const SignedNavbar = (props) => {
    let history = useHistory();

    const {postSignOut} = props;
    let username = localStorage.getItem('username');

    function handleClick(e) {
        e.preventDefault();
        postSignOut();
        history.push('/signin');
    }

    return (
        <Navbar>
            <NavbarRightItem>
                <span>Welcome {username}</span>
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