import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import SignedNavbar from "../../components/SignedNavbar";
import {
    ButtonIcon,
    Container,
    ContainerItem,
    Header,
    Input,
    TaskStyle,
    TextError,
    TextPurple
} from "../../components/styled";
import {addTask, removeTask, fetchTask, updateTask} from "../../appRedux/actions";

const HomePage = (props) => {
    const [value, setValue] = useState('');
    const [editTask, setEditTask] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const {loading, error, tasks, addTask, fetchTask, removeTask, updateTask} = props;

    useEffect(() => {
        fetchTask();
    }, [])

    function handleAddTask(e) {
        if (e.key === 'Enter') {
            addTask(value);
        }
    }

    function handleEditTask(item, value) {
        updateTask(item, value);
    }

    function handleRemoveTask(item) {
        removeTask(item);
    }

    function handleOnChange(e) {
        setValue(e.target.value);
    }

    function handleOnChangeTask(e) {
        setEditTask(e.target.value);
    }

    return (
        <Container>
            <SignedNavbar/>
            <ContainerItem width={"620px"} mb={"50px"} column center>
                {error && <TextError>Error- {error}</TextError>}
                <Input placeholder={"Type a task and press Enter to add"} onKeyPress={handleAddTask}
                       onChange={handleOnChange}/>
                <Header>Tasks</Header>
                {loading && <p>Loading...</p>}
                {tasks.length < 1 && <TextPurple>:( <br/> There is no task yet!</TextPurple>}
                {!loading && tasks && tasks.map((item, index) => {
                    return (
                        <TaskStyle key={`list-item-${item.id}`}>
                            <Input placeholder={"Type a task and press Enter to add"} defaultValue={item.task}
                                   onKeyPress={(e) => {
                                       if(e.key === 'Enter') {
                                           handleEditTask(item, editTask)
                                       }
                                   }}
                                   onChange={handleOnChangeTask}
                            />
                            <ButtonIcon onClick={() => {
                                handleRemoveTask(item);
                            }}>X</ButtonIcon>
                        </TaskStyle>
                    )
                }).reverse()}
            </ContainerItem>
        </Container>
    )
};

const mapStateToProps = (state) => {
    return {
        loading: state.list.loading,
        error: state.list.error,
        tasks: state.list.tasks
    }
}

export default connect(mapStateToProps, {addTask, fetchTask, removeTask, updateTask})(HomePage);