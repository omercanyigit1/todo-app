import React from 'react';
import {Button, Input, Header, Container, ContainerItem} from "../../../components/styled";

const SignInPage = (props) => {

    function handleClick() {
        alert('working...');
    }

    return (
        <Container>
            <ContainerItem full column center>
                <Header mb="20px">Login to your account</Header>
                <Input placeholder={"Username"} type="text" />
                <Input placeholder={"First Name"} type="text" />
                <Input placeholder={"Last Name"} type="text" />
                <Button primary>Login</Button>
            </ContainerItem>
        </Container>
    );
};

export default SignInPage;