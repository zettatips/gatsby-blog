import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { form, fieldErrors, formErrors } from "./contact-form.module.css"
import Container from './container'

import * as styles from './article-preview.module.css'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xayvbywq')

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>
  }

  return (
    <Container>
    <h1>Contact Me</h1>
    <form className={form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError
        className={fieldErrors}
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
      <ValidationError
        className={fieldErrors}
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError className={formErrors} errors={state.errors} />
    </form>
    </Container>
  )
}