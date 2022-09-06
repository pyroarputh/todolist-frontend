import React from 'react';
import TaskHeader from './componenets/TaskHeader';
import TaskForm from './componenets/TaskFrom';
import TaskList from './componenets/TaskList';

const Home = ({input, setInput, tasks, setTasks}) => {
    return (
        <div className='container-home'>
            <TaskHeader></TaskHeader>
            <TaskForm
                input={input}
                setInput={setInput}
                tasks={tasks}
                setTasks={setTasks}
            ></TaskForm>
            <TaskList
                tasks={tasks}
                setTasks={setTasks}
            ></TaskList>
        </div>
    );
}

export default Home;