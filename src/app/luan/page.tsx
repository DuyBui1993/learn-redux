import StoreProvider from "@/redux-config/StoreProvider";
import {ReduxTodoList} from "@/components/luan/redux-todo-list";

const TodoListPage = () => {
    return <StoreProvider>
        <ReduxTodoList/>
    </StoreProvider>
}

export default TodoListPage