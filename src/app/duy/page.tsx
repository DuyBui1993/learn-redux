import {ReduxTodoList} from "@/components/duy/redux-todo-list";
import StoreProvider from "@/redux-config/StoreProvider";

const DuyTodoListPage = () => {
  return <StoreProvider>
    <ReduxTodoList />
  </StoreProvider>
}

export default DuyTodoListPage