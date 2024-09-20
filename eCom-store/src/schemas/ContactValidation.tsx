import * as yup from "yup";

export const contactSchema = yup.object().shape({
  fullName: yup
    .string()
    .required("Full name is required")
    .min(3, "Full name must be at least 3 characters"),
  subject: yup
    .string()
    .required("Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Must be a valid email address"),
  body: yup
    .string()
    .required("Body is required")
    .min(3, "Body must be at least 3 characters"),
});
