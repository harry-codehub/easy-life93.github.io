"use client";

import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import toast from "react-hot-toast";
import type { IconType } from "react-icons";
import { BsArrowRight } from "react-icons/bs";
import { RiLinkedinLine, RiMailLine, RiMapPinLine } from "react-icons/ri";

import {
  CONTACT_RECAPTCHA_ACTION,
  isValidContactEmail,
  isValidContactMessage,
  isValidContactName,
  isValidContactSubject,
  type ContactFormFields,
} from "@/lib/contact";
import { profile } from "@/lib/profile";
import { fadeIn } from "@/variants";

const FIELD_VALIDATORS: Record<
  keyof ContactFormFields,
  (value: string) => boolean
> = {
  name: isValidContactName,
  email: isValidContactEmail,
  subject: isValidContactSubject,
  message: isValidContactMessage,
};

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const hasAttemptedSubmit = useRef(false);

  const [form, setForm] = useState<ContactFormFields>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    const el = messageRef.current;
    if (!el) return;

    el.style.overflowY = "hidden";
    el.style.height = "auto";

    const nextHeight = el.scrollHeight;
    const maxHeight = Number.parseFloat(getComputedStyle(el).maxHeight);

    if (Number.isFinite(maxHeight) && nextHeight >= maxHeight) {
      el.style.height = `${maxHeight}px`;
      el.style.overflowY = "auto";
      return;
    }

    el.style.height = `${nextHeight}px`;
  }, [form.message]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as keyof ContactFormFields;
    const value = e.target.value;

    setForm((prev) => ({ ...prev, [field]: value }));

    if (!hasAttemptedSubmit.current) return;

    const isInvalid = !FIELD_VALIDATORS[field](value);
    setFieldErrors((prev) =>
      prev[field] === isInvalid ? prev : { ...prev, [field]: isInvalid },
    );
  };

  const validateForm = () => {
    hasAttemptedSubmit.current = true;

    const nextErrors = {
      name: !isValidContactName(form.name),
      email: !isValidContactEmail(form.email),
      subject: !isValidContactSubject(form.subject),
      message: !isValidContactMessage(form.message),
    };

    setFieldErrors(nextErrors);

    return (
      !nextErrors.name &&
      !nextErrors.email &&
      !nextErrors.subject &&
      !nextErrors.message
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!executeRecaptcha) {
      toast.error("reCAPTCHA is not ready. Please try again.");
      return;
    }

    setIsLoading(true);

    try {
      const recaptchaToken = await executeRecaptcha(CONTACT_RECAPTCHA_ACTION);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          recaptchaToken,
        }),
      });

      const data = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        toast.error(data?.error ?? "Something went wrong!");
        return;
      }

      toast.success("Thank you. I will get back to you ASAP.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFieldErrors({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
      onSubmit={handleSubmit}
      autoComplete="off"
      autoCapitalize="off"
      noValidate
    >
      <div className="flex gap-x-6 w-full">
        <div className="flex-1 min-w-0">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input"
            value={form.name}
            onChange={handleChange}
            disabled={isLoading}
            aria-disabled={isLoading}
            maxLength={200}
            aria-invalid={fieldErrors.name}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
          />
          {fieldErrors.name && (
            <p id="name-error" className="mt-1 text-left text-sm text-accent" role="alert">
              Invalid Name
            </p>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            className="input"
            value={form.email}
            onChange={handleChange}
            disabled={isLoading}
            aria-disabled={isLoading}
            maxLength={100}
            aria-invalid={fieldErrors.email}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
          />
          {fieldErrors.email && (
            <p id="email-error" className="mt-1 text-left text-sm text-accent" role="alert">
              Invalid E-mail
            </p>
          )}
        </div>
      </div>
      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="input"
          value={form.subject}
          onChange={handleChange}
          disabled={isLoading}
          aria-disabled={isLoading}
          maxLength={200}
          aria-invalid={fieldErrors.subject}
          aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
        />
        {fieldErrors.subject && (
          <p id="subject-error" className="mt-1 text-left text-sm text-accent" role="alert">
            Invalid Subject
          </p>
        )}
      </div>
      <div>
        <textarea
          ref={messageRef}
          name="message"
          placeholder="Message..."
          className="textarea"
          rows={4}
          value={form.message}
          onChange={handleChange}
          disabled={isLoading}
          aria-disabled={isLoading}
          maxLength={500}
          aria-invalid={fieldErrors.message}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" className="mt-1 text-left text-sm text-accent" role="alert">
            Invalid Message
          </p>
        )}
      </div>
      <button
        type="submit"
        className="btn rounded-full border border-white/50 max-w-42.5 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:pointer-events-none"
        disabled={isLoading}
        aria-disabled={isLoading}
      >
        <span
          className={
            isLoading
              ? ""
              : "group-hover:translate-y-[-120%] group-hover:opacity-0 transition-all duration-500"
          }
        >
          {isLoading ? "Sending..." : "Let's talk"}
        </span>

        {!isLoading && (
          <BsArrowRight
            className="translate-y-[-120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
            aria-hidden
          />
        )}
      </button>
      <p className="mt-3 text-xs text-white/40">
        This site is protected by reCAPTCHA.
      </p>
    </motion.form>
  );
};

const contactLinks: {
  label: string;
  value: string;
  href?: string;
  Icon: IconType;
}[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: RiMailLine,
  },
  {
    label: "LinkedIn",
    value: "harold-johnson",
    href: profile.linkedin,
    Icon: RiLinkedinLine,
  },
  {
    label: "Location",
    value: profile.location,
    Icon: RiMapPinLine,
  },
];

const Contact = () => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <div className="h-full bg-primary/30 overflow-y-auto">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center min-h-full">
        <div className="flex flex-col w-full max-w-175">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center max-w-125 mx-auto mb-10"
          >
            Open to AI evaluation, model testing, prompt review and quality
            assurance roles, as well as software and systems consulting.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.35)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          >
            {contactLinks.map((item) => {
              const content = (
                <>
                  <item.Icon className="text-2xl text-accent shrink-0" aria-hidden />
                  <div className="min-w-0 text-left">
                    <div className="text-[11px] uppercase tracking-[0.15em] text-white/40">
                      {item.label}
                    </div>
                    <div className="text-sm truncate">{item.value}</div>
                  </div>
                </>
              );
              const className =
                "flex items-center gap-x-3 rounded-lg border border-white/10 bg-[rgba(65,47,123,0.15)] px-4 py-3 transition-all duration-300";

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className={`${className} hover:border-accent hover:bg-[rgba(89,65,169,0.15)]`}
                >
                  {content}
                </a>
              ) : (
                <div key={item.label} className={className}>
                  {content}
                </div>
              );
            })}
          </motion.div>

          {siteKey ? (
            <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
              <ContactForm />
            </GoogleReCaptchaProvider>
          ) : (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex justify-center"
            >
              <a
                href={`mailto:${profile.email}`}
                className="btn rounded-full border border-white/50 px-8 transition-all duration-300 flex items-center justify-center gap-x-3 hover:border-accent hover:text-accent"
              >
                Send me an email
                <BsArrowRight className="text-[22px]" aria-hidden />
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
