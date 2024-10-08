import StoreProvider from "@/redux-config/StoreProvider";
import {TodoList} from "@/components/oanh/redux/todo-list";
const TodoListPage =()=>{
    return <StoreProvider >
        <TodoList />
    </StoreProvider>
}
export  default TodoListPage