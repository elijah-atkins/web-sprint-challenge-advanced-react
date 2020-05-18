// write your custom hook here to control your checkout form
import { useLocalStorage } from './useLocalStorage'
import React, { useState } from 'react'


export const useForm = (initialState, key, submitLogic) => {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useLocalStorage(initialState, key);

  const handleChanges = e => {

    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  // const handleEmailChanges = e => {
  //   setEmail(e.target.value);
  // };

  const clearForm = () => {
    setValues(initialState);
    setShowSuccessMessage(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setShowSuccessMessage(true);

    // send to api server to update
  };

  return [values, handleChanges, clearForm, handleSubmit, showSuccessMessage];
};
