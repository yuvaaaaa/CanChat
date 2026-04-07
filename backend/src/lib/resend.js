import { Resend } from "resend";
import { ENV } from "./env.js";

const hasResendApiKey = Boolean(ENV.RESEND_API_KEY);

if (!hasResendApiKey) {
  console.warn("RESEND_API_KEY is missing. Email sending is disabled.");
}

export const resendClient = hasResendApiKey ? new Resend(ENV.RESEND_API_KEY) : null;

export const sender = {
  email: ENV.EMAIL_FROM,
  name: ENV.EMAIL_FROM_NAME,
};

export const isEmailEnabled = hasResendApiKey;
