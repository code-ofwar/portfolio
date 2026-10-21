"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { IoMdCloseCircleOutline } from "react-icons/io";

type ContactModalProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const ContactModal = ({ setOpen }: ContactModalProps) => {
  const [state, handleSubmit] = useForm("myekajny");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpen]);

  if (state.succeeded) {
    return (
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-3xl text-primary">
            ✓
          </div>

          <h2 className="mb-2 text-2xl font-bold text-foreground">
            Message Sent!
          </h2>

          <p className="mb-6 text-muted">
            Thank you for reaching out. I’ll get back to you as soon as
            possible.
          </p>

          <button
            type="button"
            onClick={() => setOpen(false)}
            className="w-full rounded-lg bg-primary px-5 py-3 font-semibold text-white transition hover:bg-primary-hover"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-11/12 rounded-lg bg-white p-3 lg:w-2/4"
      >
        <div className="mb-4 flex justify-between">
          <div className="mb-3">
            <h2 className="mb-2 text-2xl font-bold text-foreground">
              Get in Touch
            </h2>

            <p className="text-base leading-6 text-muted">
              Have a question or a project in mind? Feel free to send me a
              message.
            </p>
          </div>
          <IoMdCloseCircleOutline
            onClick={() => setOpen(false)}
            className="cursor-pointer text-3xl text-red-500"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="mb-2 w-full rounded-lg border border-gray-300 bg-white p-2 text-xl text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mb-2 w-full rounded-lg border border-gray-300 bg-white p-2 text-xl text-black"
          />

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            placeholder="Enter your message"
            rows={7}
            required
            className="mb-2 w-full resize-y rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-black outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />

          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          {state.errors && (
            <p className="mb-2 text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={state.submitting}
            className="mb-2 w-full rounded-lg bg-primary p-2 text-xl text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
