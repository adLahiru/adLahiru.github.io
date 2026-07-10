/**
 * EmailJS credentials — create a free account at https://www.emailjs.com,
 * add a Gmail service, and create a template that uses {{name}}, {{email}},
 * and {{message}} (suggested subject: "Portfolio contact from {{name}}").
 * Paste the three IDs below. Until all three are filled in, the contact
 * form's Send button opens a prefilled Gmail compose tab instead.
 */
export const emailJsConfig = {
  serviceId: '',
  templateId: '',
  publicKey: '',
};

export const isEmailJsConfigured = () =>
  Boolean(emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey);
