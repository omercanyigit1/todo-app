import React, {useState, useEffect} from 'react';
import {Button, Input, Header, Container, ContainerItem} from "../../../components/styled";
import {connect} from "react-redux";
import {postSignIn} from "../../../appRedux/actions";
import {Redirect} from "react-router-dom";

const SignInPage = (props) => {
    const [username, setUserName] = useState('');
    const [lastname, setLastName] = useState('');
    const [name, setName] = useState('');
    const {postSignIn, fireStore, firebase, isEmpty} = props;

    function handleClick(e) {
        e.preventDefault();

        let data = {
            username: username,
            name: name,
            lastname: lastname
        }

        postSignIn(data);
    }

    useEffect(() => {

    }, [fireStore, firebase])

    function handleOnChangeUsername(e) {
        setUserName(e.target.value);
    }

    function handleOnChangeName(e) {
        setName(e.target.value);
    }

    function handleOnChangeLastName(e) {
        setLastName(e.target.value);
    }

    if(isEmpty === false) {
        return (
            <Redirect to={'/'} />
        )
    }

    return (
        <Container>
            <ContainerItem width={"320px"} full column center>
                <Header mb="20px">Login to your account</Header>
                <Input placeholder={"Username"} type="text" onChange={handleOnChangeUsername} />
                <Input placeholder={"First Name"} type="text" onChange={handleOnChangeName} />
                <Input placeholder={"Last Name"} type="text" onChange={handleOnChangeLastName} />
                <Button width={"100%"} primary disabled={!username && !name && !lastname} onClick={handleClick}>Login</Button>
            </ContainerItem>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        user: state.auth.user,
        isEmpty: state.firebase.auth.isEmpty
    }
}

export default connect(mapStateToProps, {postSignIn})(SignInPage);