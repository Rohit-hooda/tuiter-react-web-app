import Nav from "../../nav";
import '../../index.css';
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./conditional-output";
import TodoItem from "./todo/todo-item";
import TodoList from "./todo/todo-list";

function Assignment6() {
    return (
        <div>
            <Nav/>
            <h1>Assignment 6</h1>
            <Styles/>
            <Classes/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>

        </div>
    );
}

export default Assignment6;