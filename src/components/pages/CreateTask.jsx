import ButtonSpinnerSvg from "components/shared/ButtonSpinnerSvg";
import TextArea from "components/shared/forms/TextArea";
import TextInput from "components/shared/forms/TextInput";
import { Field, Form, Formik } from "formik";
import produce from "immer";
import { Fragment, useState } from "react";
import * as yup from "yup";

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
        <h1 className="font-medium text-2xl">Create new task</h1>
      </div>

      <div className="mt-5">
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
                    {state.isSubmitting && <ButtonSpinnerSvg />}
                    Create task
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
