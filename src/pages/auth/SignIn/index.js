import React from 'react';
import {Button, Input} from "../../../components/styled";

const SignInPage = (props) => {

    function handleClick() {
        alert('working...');
    }

    return (
        <div>
            <Input placeholder={"type your name"} type="text" />
            <Button primary>Primary Button</Button>
            <Button secondary>Secondary Button</Button>
        </div>
    );
};

export default SignInPage;