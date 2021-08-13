import React from 'react';
import {ButtonIcon, Input, TaskStyle} from "../styled";

const TaskComponent = ({item, onClick, onKeyPress, onChange, onRemove, value}) => {
    return (
        <TaskStyle key={`list-item-${item.id}`} onClick={onClick}>
            <Input placeholder={"Type a task and press Enter to add"} value={value}
                   onKeyPress={onKeyPress}
                   onChange={onChange}
            />
            <ButtonIcon onClick={onRemove}>X</ButtonIcon>
        </TaskStyle>
    );
};

export default TaskComponent;