import React, {useState, useEffect} from 'react';
import {Button, Input, Header, Container, ContainerItem} from "../../../components/styled";
import {connect} from "react-redux";
import {postSignIn} from "../../../appRedux/actions";

const SignInPage = (props) => {
    const [email, setEmail] = useState('');
    const [lastname, setLastName] = useState('');
    const [name, setName] = useState('');
    const {postSignIn, fireStore, firebase} = props;

    function handleClick(e) {
        e.preventDefault();

        let data = {
            email: email,
            name: name,
            lastname: lastname
        }

        postSignIn(data);
    }

    useEffect(() => {

    }, [fireStore, firebase])

    function handleOnChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleOnChangeName(e) {
        setName(e.target.value);
    }

    function handleOnChangeLastName(e) {
        setLastName(e.target.value);
    }

    return (
        <Container>
            <ContainerItem width={"320px"} full column center>
                <Header mb="20px">Login to your account</Header>
                <Input placeholder={"Username"} type="text" onChange={handleOnChangeEmail} />
                <Input placeholder={"First Name"} type="text" onChange={handleOnChangeName} />
                <Input placeholder={"Last Name"} type="text" onChange={handleOnChangeLastName} />
                <Button primary onClick={handleClick}>Login</Button>
            </ContainerItem>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {postSignIn})(SignInPage);