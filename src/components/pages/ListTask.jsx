import { useDispatch } from "react-redux";
import { showNotification } from "state/actions/notification";

const ListTask = () => {
  const dispatch = useDispatch();

  return (
    <div className="listTask">
      <h1>List Task</h1>
      <p>List all task</p>

      <button
        type="button"
        onClick={() => dispatch(showNotification({ message: "Hello there!" }))}
      >
        Add Task
      </button>
    </div>
  );
};

export default ListTask;
