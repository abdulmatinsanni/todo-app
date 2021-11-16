import { Fragment } from "react";
import { Link } from "react-router-dom";

const ListTask = () => {
  return (
    <Fragment>
      <div className="flex flex-row justify-between items-center">
        <h1 className="font-medium text-2xl">Tasks Board</h1>

        <Link
          to="/create"
          className="inline-flex items-center bg-blue-500 text-base text-white font-normal py-2 px-5 rounded-md hover:bg-blue-600 focus:outline-none transition ease-in-out duration-300"
        >
          Add new task
        </Link>
      </div>

      <div className="mt-5">
        {[...Array(10)].map((item) => (
          <div className="bg-white p-4 rounded mt-4 shadow-sm">
            <div className="p-4 border-l-4 border-yellow-100 rounded">
              <h1 className="font-medium text-base text-gray-600">
                Front-end web framework must be React. We believe that anyone
                familiar with a component-based framework can complete this task
                in React also.
              </h1>
              <div className="mt-2 space-x-2">
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
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ListTask;
