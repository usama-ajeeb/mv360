import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const InputWithLabel = ({ selected, error, onChange }) => {
  const formik = useFormik({
    initialValues: {
      title: selected ? selected : "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required!"),
    }),
    onSubmit: (values) => {
      onChange(values);
    },
  });
  return (
    <div className="has-text-dark input-with-label w-516">
      <main className="is-flex is-flex-direction-column is-family-secondary">
        <label htmlFor="title" className="is-size-5 mb-3 ls-1 ls-1">
          Title<span className="is-size-6 ml-1">(max 100 characters)</span>
        </label>
        <input
          type="text"
          value={selected ? selected : ""}
          placeholder={selected ? selected : ""}
          onInput={formik.handleSubmit}
          {...formik.getFieldProps("title")}
          className="pl-2 has-background-white is-full-width"
        />
        {formik.touched.title && formik.errors.title ? (
          <div className="has-text-danger mt-1">{formik.errors.title}</div>
        ) : null}
        {selected === "" && error && !formik.errors.title ? (
          <div className="has-text-danger mt-1">This is required</div>
        ) : null}
      </main>
    </div>
  );
};
export default InputWithLabel;
