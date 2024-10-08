import StoreProvider from "@/redux-config/StoreProvider";
import {ReduxTodoList} from "@/components/duong/redux-todo-list";

const DuongTodoListPage = () => {
  return <StoreProvider>
    <ReduxTodoList />
  </StoreProvider>
}

export default DuongTodoListPage