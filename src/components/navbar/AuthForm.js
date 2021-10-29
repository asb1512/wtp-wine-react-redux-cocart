import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Form, Field } from "react-final-form";

import './AuthForm.css';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 1));
};

const required = (value) => (value ? undefined : "Required");
const composeValidators = (...validators) => (value) =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export default function AuthForm(props) {

  const authFormStyle = useSpring({
    opacity: props.toggle ? 1 : 0
  })

  let formData = {};

  return (
    <animated.div className="auth-container" style={authFormStyle}>
      <h2 className="">LOGIN/REGISTER</h2>
      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form 
            onSubmit={
              handleSubmit
            }
          >

            <Field name="username-email" validate={required}>
              {({ input, meta }) => (
                <div className="auth-group">
                  <label className="auth-label">Username/Email</label>
                  <input {...input} type="text" placeholder="Username/Email" className="auth-input" />
                  {meta.error && meta.touched && <span className="auth-error">{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="password" validate={required}>
              {({ input, meta }) => (
                <div className="auth-group">
                  <label className="auth-label">Password</label>
                  <input {...input} type="password" placeholder="Password" className="auth-input"/>
                  {meta.error && meta.touched && <span className="auth-error">{meta.error}</span>}
                </div>
              )}
            </Field>
            
            <button type="submit" disabled={submitting} className="auth-button">
              Submit
            </button>

          </form>
        )}
      />
    </animated.div>
  );
};