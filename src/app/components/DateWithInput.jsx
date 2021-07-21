import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const DateWithInput = ({ label, property }) => {
  const formik = useFormik({
    initialValues: {
      date: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Date is required!"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="date-with-input is-family-secondary">
      <label className="has-text-dark is-size-5 ls-1 ">
        {label ? label : "Effective Date"}
      </label>
      <div>
        <input
          type="date"
          max="3000-12-31"
          onInput={formik.handleSubmit}
          {...formik.getFieldProps("date")}
          className="has-background-white has-text-dark is-size-5 mt-2"
        />
        {formik.touched.date && formik.errors.date ? (
          <div>{formik.errors.date}</div>
        ) : null}
      </div>
    </div>
  );
};
export default DateWithInput;
