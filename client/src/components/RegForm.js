import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import "../Pages/form.css"



const RegForm = () => {

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();

  };



  const [nazov, setNazov] = useState("");
  const [heslo, setHeslo] = useState("");

  Axios.defaults.withCredentials = true;

    
  const create =  () => {
  Axios.post('http://localhost:3001/create',
    {
      nazov: values.nazov,
      heslo: values.heslo,
    }).then((response) => {
      console.log(response);
    })
  }

    const {values,errors, handleChange, handleBlur, handleSubmit, touched, isSubmitting} = useFormik({
    initialValues: {
      nazov: "",
      heslo: "",
    },
    validationSchema: basicSchema,
    onSubmit
    });

    console.log(errors);

return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="text">Nazov druziny</label>
        <input 
        value={values.nazov}
        onChange={handleChange}
        id="nazov"
        type="text"
        placeholder="Zadaj nazov druziny"
        onBlur={handleBlur}
        
        className={errors.nazov && touched.nazov ? "input-error" : ""}
         />
         {errors.nazov && touched.nazov && <p className="error">{errors.nazov}</p>}


         <label htmlFor="text">Heslo</label>
        <input 
        value={values.heslo}
        onChange={handleChange}
        id="heslo"
        type="password"
        placeholder="Zadaj heslo"
        onBlur={handleBlur}
        
        className={errors.heslo && touched.heslo ? "input-error" : ""}
         />
         {errors.heslo && touched.heslo && <p className="error">{errors.heslo}</p>}



        <button disabled={isSubmitting} onClick={create} type="submit">Submit</button>

      </form>
    );
  };
  export default RegForm;