"use client";
import styles from "../styles/Contact.module.scss";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const respose = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.firstName,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await respose.json();

      if (!result.success) {
        throw new Error("Error al enviar email");
      }
      swal("Email sent successfully!", "", "success");
      // Resetear el formulario a su estado inicial
      reset();
    } catch (error) {
      console.error(error);
      swal("Error sending email!", "", "error");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.formContainer}>
        <div className={styles.title}>
          <h2>CONTACT</h2>
          <span></span>
        </div>
        <p className={styles.text}>Have a question or want to work together?</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="firstName"
            placeholder="Name"
            {...register("firstName", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
              maxLength: 15,
            })}
          />
          {errors.firstName?.type === "required" && (
            <span className={styles.formError}>
              This name field is required
            </span>
          )}
          {errors.firstName?.type === "pattern" && (
            <span className={styles.formError}>
              Name can only contain letters
            </span>
          )}
          {errors.firstName?.type === "maxLength" && (
            <span className={styles.formError}>
              The name field must have less than 15 characters
            </span>
          )}

          <input
            name="email"
            placeholder="Enter email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "required" && (
            <span className={styles.formError}>
              The email field is required
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className={styles.formError}>
              The email format is incorrect
            </span>
          )}

          <textarea
            name="message"
            placeholder="Your messege"
            {...register("message", { required: true })}
          />
          {errors.message?.type === "required" && (
            <span className={styles.formError}>Message is required</span>
          )}

          <input
            type="submit"
            value={loading ? "SENDING..." : "SUBMIT"}
            disabled={loading}
            className={styles.inputButton}
          />
        </form>
      </div>
    </section>
  );
}
