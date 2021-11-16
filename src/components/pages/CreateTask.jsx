import ButtonSpinnerSvg from "components/shared/ButtonSpinnerSvg";
import TextArea from "components/shared/forms/TextArea";
import TextInput from "components/shared/forms/TextInput";
import { Field, Form, Formik } from "formik";
import produce from "immer";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { FiCheck } from "react-icons/fi";

const CreateTask = () => {
  const [state, setState] = useState({
    isSubmitting: false,
    submitError: null,
  });

  const initialValues = {
    title: "",
    description: "",
  };

  const validationSchema = yup.object().shape({
    title: yup.string().label("Title").required(),
    description: yup.string().label("Description").email().required(),
  });

  const clearSubmitError = () => {
    setState(
      produce((draft) => {
        draft.submitError = null;
      })
    );
  };

  const handleSubmitForm = async (formValues, formikHelpers) => {
    clearSubmitError();
    formikHelpers.resetForm();
  };

  return (
    <Fragment>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-3 font-medium text-base">
          <Link
            to="/tasks"
            className="text-gray-500 hover:text-gray-400 transition ease-in-out duration-300"
          >
            Tasks
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">Create a task</span>
        </div>
      </div>

      <div className="mt-10">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmitForm}
        >
          {({ handleSubmit, isValid }) => {
            return (
              <Form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                  <Field
                    component={TextInput}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter task title here..."
                  />
                </div>

                <div className="flex flex-col mt-4">
                  <Field
                    component={TextArea}
                    name="description"
                    id="description"
                    placeholder="Enter task description here..."
                  />
                </div>

                <div className="flex flex-row mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center bg-blue-500 text-base text-white font-normal py-2 px-5 rounded-md hover:bg-blue-600 focus:outline-none transition ease-in-out duration-300"
                    disabled={!isValid}
                  >
                    {!state.isSubmitting ? (
                      <FiCheck className="text-xl" />
                    ) : (
                      <ButtonSpinnerSvg />
                    )}
                    <span className="ml-2">Create task</span>
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Fragment>
  );
};

export default CreateTask;
