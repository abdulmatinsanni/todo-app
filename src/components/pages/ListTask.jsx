import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { showNotification } from "state/actions/notification";

const ListTask = () => {
  const dispatch = useDispatch();

  return (
    <Fragment>
      <button
        type="button"
        className="bg-blue-400"
        onClick={() =>
          dispatch(showNotification("Test notification message triggered"))
        }
      >
        TEST NOTIFICATION
      </button>

      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-3 font-medium text-base">
          <span className="text-gray-500 ">Tasks</span>
        </div>
      </div>

      <div className="mt-10">
        <div className="bg-white p-4 roundedshadow-sm">
          <Link
            to="/tasks/create"
            className="flex flex-row justify-center items-center text-gray-300 hover:text-gray-400 space-x-2 p-4 border-2 border-gray-100 hover:border-gray-200 border-dashed rounded transition ease-in-out duration-300"
          >
            <FiPlus className="text-xl" />
            <span className="text-bas">Create new task</span>
          </Link>
        </div>

        {[...Array(10)].map((item) => (
          <div className="bg-white p-4 rounded mt-4 shadow-sm">
            <div className="p-4 border-l-4 border-yellow-100 rounded">
              <div className="flex flex-row">
                <h1 className="font-medium text-base text-gray-600">
                  Front-end web framework must be React. We believe that anyone
                  familiar with a component-based framework can complete this
                  task in React also.
                </h1>
              </div>

              <div className="flex flex-row justify-between items-center mt-2">
                <div className="space-x-2">
                  <span className="text-xs px-1 py-0.5 rounded bg-blue-100 text-blue-600">
                    Pending
                  </span>

                  <span className="text-xs px-1 py-0.5 rounded bg-yellow-100 text-yellow-600">
                    In Progress
                  </span>

                  <span className="text-xs px-1 py-0.5 rounded bg-green-100 text-green-600">
                    Completed
                  </span>
                </div>

                <div className="flex flex-row justify-center items-center space-x-2">
                  <Link
                    to={`/tasks/edit/${item}`}
                    class="inline-flex justify-center items-center rounded-md border border-gray-200 shadow-sm h-7 w-7 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none"
                  >
                    <FiEdit />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ListTask;
