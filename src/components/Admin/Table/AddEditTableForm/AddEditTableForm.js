import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTable } from "../../../../hooks";
import "./AddEditTableForm.scss";

export function AddEditTableForm(props) {
  const { onClose, onRefetch, table } = props;
  const { addTables, updateTables } = useTable();
  const formik = useFormik({
    initialValues: initialValues(table),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      if (table) await updateTables (table.id, formValue);
      else await addTables(formValue);

      onRefetch();
      onClose();
    },
  });
  return (
    <Form className="add-edit-table-form" onSubmit={formik.handleSubmit}>
      <Form.Input 
        min="1"
        name="number"
        type="number"
        placeholder="Numero de Mesa"
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.errors.number}
      />
      <Button
        type="submit"
        primary
        fluid
        content={table ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}
function initialValues(data) {
  return {
    number: data?.number || "",
  };
}
function validationSchema() {
  return {
  /**#validar numeros negativos*/
    number: Yup.number().required(true),
  };
}