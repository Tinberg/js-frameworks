import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormValues } from "../../types/FormValues";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../../schemas/ContactValidation";
import { Alert } from "react-bootstrap";

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize the form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(contactSchema),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Data:", data);
    reset();
    setIsSubmitted(true);
  };

  return (
    <div className="container my-5">
      <h1>Contact Us</h1>
      {isSubmitted && (
        <Alert variant="success" role="alert">
          Your message has been sent!
        </Alert>
      )}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Full Name Field */}
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name *
          </label>
          <input
            type="text"
            id="fullName"
            className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
            {...register("fullName")}
          />
          {errors.fullName && (
            <div className="invalid-feedback">{errors.fullName.message}</div>
          )}
        </div>

        {/* Subject Field */}
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            className={`form-control ${errors.subject ? "is-invalid" : ""}`}
            {...register("subject")}
          />
          {errors.subject && (
            <div className="invalid-feedback">{errors.subject.message}</div>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        {/* Body Field */}
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Body *
          </label>
          <textarea
            id="body"
            className={`form-control ${errors.body ? "is-invalid" : ""}`}
            rows={5}
            {...register("body")}
          />
          {errors.body && (
            <div className="invalid-feedback">{errors.body.message}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
