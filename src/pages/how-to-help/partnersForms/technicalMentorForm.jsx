import React, { useCallback, useEffect, useMemo } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

/* ── Inline SVG icons for each expertise option ── */
const ExpertiseIcons = {
  Law: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v1.5M12 21v-1.5M6.75 6.75l1.06 1.06M16.19 16.19l1.06 1.06M3 12h1.5M21 12h-1.5M6.75 17.25l1.06-1.06M16.19 7.81l1.06-1.06"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a5.25 5.25 0 0 1 0 10.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 12 12 4.5l4.5 7.5H7.5Z"
      />
    </svg>
  ),
  Finance: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
      />
    </svg>
  ),
  Health: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  ),
  Other: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
};

const TechnicalMentorForm = ({ isOpen, onClose }) => {
  const validationSchema = useMemo(
    () =>
      Yup.object({
        fullName: Yup.string().trim().required("Full name is required"),
        phoneNumber: Yup.string().trim().required("Phone number is required"),
        email: Yup.string()
          .trim()
          .email("Invalid email")
          .required("Email is required"),
        linkedin: Yup.string().trim().url("Invalid URL").nullable(),
        areaOfExpertise: Yup.string()
          .oneOf(["Law", "Finance", "Health", "Other"])
          .required("Select an area of expertise"),
      }),
    [],
  );

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const expertiseOptions = [
    { key: "Law", label: "Law" },
    { key: "Finance", label: "Finance" },
    { key: "Health", label: "Health" },
    { key: "Other", label: "Other" },
  ];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
      {/* ── Dark backdrop ── */}
      <div
        className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
        onClick={onClose}
      />

      {/* ── Close button — top-right of viewport ── */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-60 text-brand-cream-100 hover:opacity-70 transition-opacity cursor-pointer"
        aria-label="Close modal"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* ── Content wrapper — includes card + security links ── */}
      <div className="relative z-55 w-full max-w-[1000px] flex flex-col md:flex-row items-end justify-center gap-6 animate-[modalIn_0.25s_ease-out]">
        {/* ── White card ── */}
        <div className="w-full max-w-[720px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
          {/* ── Fixed header ── */}
          <div className="px-5 md:px-10 pt-6 md:pt-8 pb-4 md:pb-5 border-b border-brand-dark-200/30 shrink-0">
            <h2 className="text-lg md:text-2xl font-bold font-primary text-brand-dark">
              Join the Technical Mentorship
            </h2>
            <p className="mt-1 text-xs md:text-sm font-secondary text-brand-dark-400 max-w-md">
              Lend your expertise to build the infrastructure of a movement.
            </p>
          </div>

          {/* ── Scrollable form body ── */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 md:px-10 py-5 md:py-7">
            <Formik
              initialValues={{
                fullName: "",
                phoneNumber: "",
                email: "",
                linkedin: "",
                areaOfExpertise: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  console.log("Technical mentor application:", values);
                  resetForm();
                  onClose();
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
              }) => (
                <form onSubmit={handleSubmit}>
                  {/* ── Section: Professional Details ── */}
                  <div className="flex items-center gap-2.5 text-brand-dark-400">
                    <span className="w-5 h-5 grid place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[18px] h-[18px]"
                      >
                        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.42 0-8 2-8 4.5A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5C20 16 16.42 14 12 14Z" />
                      </svg>
                    </span>
                    <span className="text-xs md:text-sm font-primary font-semibold text-brand-dark uppercase tracking-wide">
                      Professional Details
                    </span>
                  </div>
                  <div className="mt-3 h-px bg-brand-dark-200/30" />

                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-primary font-semibold text-brand-dark mb-1.5">
                        Full Name
                      </label>
                      <input
                        name="fullName"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                        className="w-full rounded-lg border border-brand-dark-200/60 bg-brand-cream-100/30 px-4 py-2.5 text-sm font-secondary text-brand-dark placeholder:text-brand-dark-300 focus:outline-none focus:ring-2 focus:ring-brand-lilac/40 focus:border-brand-lilac transition-all"
                      />
                      {touched.fullName && errors.fullName && (
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-primary font-semibold text-brand-dark mb-1.5">
                        Phone number
                      </label>
                      <input
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your mobile number"
                        className="w-full rounded-lg border border-brand-dark-200/60 bg-brand-cream-100/30 px-4 py-2.5 text-sm font-secondary text-brand-dark placeholder:text-brand-dark-300 focus:outline-none focus:ring-2 focus:ring-brand-lilac/40 focus:border-brand-lilac transition-all"
                      />
                      {touched.phoneNumber && errors.phoneNumber && (
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-primary font-semibold text-brand-dark mb-1.5">
                        Email Address
                      </label>
                      <input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="email@email.com"
                        className="w-full rounded-lg border border-brand-dark-200/60 bg-brand-cream-100/30 px-4 py-2.5 text-sm font-secondary text-brand-dark placeholder:text-brand-dark-300 focus:outline-none focus:ring-2 focus:ring-brand-lilac/40 focus:border-brand-lilac transition-all"
                      />
                      {touched.email && errors.email && (
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* LinkedIn */}
                    <div>
                      <label className="block text-xs font-primary font-semibold text-brand-dark mb-1.5">
                        LinkedIn profile
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-dark-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M10.59 13.41a1 1 0 0 0 0 1.41l.59.59a1 1 0 0 0 1.41 0l3.3-3.3a1 1 0 0 0 0-1.41l-.59-.59a1 1 0 0 0-1.41 0l-3.3 3.3Z" />
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm5.66 9.66-3.3 3.3a3 3 0 0 1-4.24 0l-.59-.59a3 3 0 0 1 0-4.24l3.3-3.3a3 3 0 0 1 4.24 0l.59.59a3 3 0 0 1 0 4.24Z" />
                          </svg>
                        </span>
                        <input
                          name="linkedin"
                          value={values.linkedin}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="linkedin.com/in/..."
                          className="w-full rounded-lg border border-brand-dark-200/60 bg-brand-cream-100/30 pl-10 pr-4 py-2.5 text-sm font-secondary text-brand-dark placeholder:text-brand-dark-300 focus:outline-none focus:ring-2 focus:ring-brand-lilac/40 focus:border-brand-lilac transition-all"
                        />
                      </div>
                      {touched.linkedin && errors.linkedin && (
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700">
                          {errors.linkedin}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ── Section: Area of Expertise ── */}
                  <div className="mt-8 flex items-center gap-2.5 text-brand-dark-400">
                    <span className="w-5 h-5 grid place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[18px] h-[18px]"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 2.5L18.5 9H14Z" />
                      </svg>
                    </span>
                    <span className="text-xs md:text-sm font-primary font-semibold text-brand-dark uppercase tracking-wide">
                      Area of Expertise
                    </span>
                  </div>
                  <div className="mt-3 h-px bg-brand-dark-200/30" />

                  <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
                    {expertiseOptions.map((opt) => {
                      const active = values.areaOfExpertise === opt.key;
                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() =>
                            setFieldValue("areaOfExpertise", opt.key)
                          }
                          className={`group relative h-20 md:h-[88px] rounded-xl border-2 flex flex-col items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                            active
                              ? "border-brand-lilac bg-brand-lilac-100/60 shadow-sm shadow-brand-lilac/20"
                              : "border-brand-dark-200/40 bg-white hover:border-brand-lilac-300 hover:bg-brand-lilac-100/20"
                          }`}
                        >
                          <span
                            className={`transition-colors duration-200 ${
                              active
                                ? "text-brand-lilac-700"
                                : "text-brand-dark-300 group-hover:text-brand-lilac"
                            }`}
                          >
                            {ExpertiseIcons[opt.key]}
                          </span>
                          <span
                            className={`text-xs font-primary font-semibold transition-colors duration-200 ${
                              active
                                ? "text-brand-lilac-700"
                                : "text-brand-dark"
                            }`}
                          >
                            {opt.label}
                          </span>
                          {/* Active indicator dot */}
                          {active && (
                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-brand-lilac animate-[fadeIn_0.15s_ease-out]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {touched.areaOfExpertise && errors.areaOfExpertise && (
                    <p className="mt-2 text-xs font-secondary text-brand-pink-700">
                      {errors.areaOfExpertise}
                    </p>
                  )}

                  {/* ── Submit ── */}
                  <div className="mt-8 md:mt-10 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-lilac hover:bg-brand-lilac-700 active:scale-[0.97] text-white font-primary font-semibold text-xs md:text-sm tracking-widest uppercase px-8 py-3.5 rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-md shadow-brand-lilac/25 hover:shadow-lg hover:shadow-brand-lilac/30"
                    >
                      SUBMIT FORM
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>

        {/* ── Security links — to the right, bottom-aligned with form ── */}
        <div className="hidden md:flex flex-col items-end gap-2 pb-2 shrink-0">
          <p className="flex items-center gap-2 text-sm text-brand-cream-100/70 hover:text-brand-cream-100 hover:underline transition-all cursor-help whitespace-nowrap">
            Is my information secure
            <span className="w-5 h-5 rounded-full bg-brand-cream-100/30 text-brand-cream-100 text-[10px] font-bold grid place-items-center">
              ?
            </span>
          </p>
          <p className="flex items-center gap-2 text-sm text-brand-cream-100/70 hover:text-brand-cream-100 hover:underline transition-all cursor-help whitespace-nowrap">
            Can I delete my form details
            <span className="w-5 h-5 rounded-full bg-brand-cream-100/30 text-brand-cream-100 text-[10px] font-bold grid place-items-center">
              ?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalMentorForm;
