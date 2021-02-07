import { useForm } from "@formspree/react";
import LongTextInput from "./LongTextInput";
import TextInput from "./TextInput";
import Label from "./Label";

const Contact = () => {
  const [formState, formSubmit] = useForm("contact");

  return (
    <>
      <h1 className="text-2xl font-bold">Contact Us</h1>
      <form className="w-96 mx-auto" onSubmit={formSubmit}>
        <Label for="name">Name</Label>
        <TextInput name="name" />
        <Label for="email">Email</Label>
        <TextInput name="email" />
        <Label for="message">Message</Label>
        <LongTextInput name="message" />
        <button
          className="rounded border shadow bg-green-200 p-2 m-2 font-semibold disabled:opacity-50"
          disabled={formState.submitting || formState.succeeded}
          type="submit"
        >
          Send Message
        </button>
        {formState.succeeded ? <p>Thank you for your message!</p> : <></>}
      </form>
    </>
  );
};

export default Contact;
