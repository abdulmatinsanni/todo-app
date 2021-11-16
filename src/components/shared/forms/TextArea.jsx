import { Fragment } from "react";

const TextArea = ({ field, form: { touched, errors }, ...props }) => {
  const hasError = touched[field.name] && errors[field.name];

  return (
    <Fragment>
      <textarea
        name={field.name}
        value={field.value}
        onChange={field.onChange}
        onBlur={field.onBlur}
        rows="5"
        className="appearance-none w-100 py-4 px-5 rounded text-base bg-white border border-gray-200 text-gray-600 focus:border-teal-500 focus:outline-none transition ease-in-out duration-300"
        {...props}
      />
      {hasError && (
        <span className="text-red-600 text-sm mt-1 animate-fade-in-down">
          {errors[field.name]}
        </span>
      )}
    </Fragment>
  );
};

export default TextArea;
