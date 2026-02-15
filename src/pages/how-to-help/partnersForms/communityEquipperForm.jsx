import React, { useCallback, useEffect, useMemo } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const CommunityEquipperForm = ({ isOpen, onClose }) => {
  const validationSchema = useMemo(
    () =>
      Yup.object({
        fullName: Yup.string().trim().required("Full name is required"),
        phoneNumber: Yup.string().trim().required("Phone number is required"),
        email: Yup.string()
          .trim()
          .email("Invalid email")
          .required("Email is required"),
        residence: Yup.string()
          .trim()
          .required("Parish or District is required"),
        leadershipConnection: Yup.string().required(
          "Please select your connection to leadership",
        ),
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

  const connectionOptions = [
    { value: "spiritual_leader_wife", label: "Wife of a Spiritual Leader" },
    { value: "regional_leader_wife", label: "Wife of a Regional Leader" },
    { value: "community_leader", label: "Community Leader" },
    { value: "other", label: "Other" },
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

      {/* ── Content wrapper ── */}
      <div className="relative z-55 w-full max-w-[1000px] flex flex-col md:flex-row items-end justify-center gap-6 animate-[modalIn_0.25s_ease-out]">
        {/* ── White card ── */}
        <div className="w-full max-w-[720px] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
          {/* ── Fixed header ── */}
          <div className="px-5 md:px-10 pt-6 md:pt-8 pb-4 md:pb-5 border-b border-brand-dark-200/30 shrink-0">
            <h2 className="text-lg md:text-2xl font-bold font-primary text-brand-dark">
              Join the Equipper Network
            </h2>
            <p className="mt-1 text-xs md:text-sm font-secondary text-brand-dark-400 max-w-sm">
              Mobilising the grassroots to weave one mother’s struggles into a
              collective force.
            </p>
          </div>

          {/* ── Scrollable form body ── */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 md:px-10 py-5 md:py-7">
            <Formik
              initialValues={{
                fullName: "",
                phoneNumber: "",
                email: "",
                residence: "",
                leadershipConnection: "",
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  console.log("Community Equipper application:", values);
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
              }) => (
                <form onSubmit={handleSubmit}>
                  {/* ── Section: Personal Details ── */}
                  <div className="flex items-center gap-2.5 text-brand-dark-400">
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
                      Personal Details
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
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700 font-medium">
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
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700 font-medium">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="md:col-span-2">
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
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700 font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Parish or District */}
                    <div className="md:col-span-2">
                      <label className="block text-xs font-primary font-semibold text-brand-dark mb-1.5">
                        Parish or District of Residence
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-dark-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 3.58-3.14c1.55-1.774 2.46-3.467 2.46-4.961 0-3.73-3.134-6.75-7-6.75s-7 3.02-7 6.75c0 1.494.91 3.187 2.46 4.961a16.971 16.971 0 0 0 3.58 3.14ZM12 15.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <input
                          name="residence"
                          value={values.residence}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="e.g. Makindye Division, Kampala"
                          className="w-full rounded-lg border border-brand-dark-200/60 bg-brand-cream-100/30 pl-10 pr-4 py-2.5 text-sm font-secondary text-brand-dark placeholder:text-brand-dark-300 focus:outline-none focus:ring-2 focus:ring-brand-lilac/40 focus:border-brand-lilac transition-all"
                        />
                      </div>
                      {touched.residence && errors.residence && (
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700 font-medium">
                          {errors.residence}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* ── Section: Leadership Context ── */}
                  <div className="mt-8 flex items-center gap-2.5 text-brand-dark-400">
                    <span className="w-5 h-5 grid place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-[18px] h-[18px]"
                      >
                        <path d="M16.5 7.5a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0ZM6 12.75l.178-.015a.75.75 0 1 1 .512 1.41L6 14.25c-2.43 0-4.5 1.92-4.5 4.5V21a.75.75 0 0 0 1.5 0v-2.25c0-1.602 1.348-3 3-3h.375a.75.75 0 0 1 0 1.5H6a.75.75 0 0 0 0 1.5h.375c.621 0 1.125.504 1.125 1.125V21a.75.75 0 0 0 1.5 0v-1.125c0-1.447-1.178-2.625-2.625-2.625h-.375c-.2 0-.394-.03-.578-.084a2.984 2.984 0 0 0 2.146.909h1.5a.75.75 0 0 0 0-1.5h-1.5a1.488 1.488 0 0 1-1.489-1.343l-.001-.157c0-.18.067-.35.188-.48.121-.131.29-.207.47-.207h3a.75.75 0 0 0 0-1.5h-3a1.984 1.984 0 0 0-1.258.45 6.75 6.75 0 0 1 9.758-5.45.75.75 0 0 1-.75 1.299 5.25 5.25 0 1 0-7.808 4.35 1.954 1.954 0 0 0-1.192-.4H6Z" />
                        <path d="M18.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM21 16.5c-2.43 0-4.5 1.92-4.5 4.5V21a.75.75 0 0 0 1.5 0v-.75a3 3 0 0 1 3-3h.75a.75.75 0 0 0 0-1.5H21Z" />
                      </svg>
                    </span>
                    <span className="text-xs md:text-sm font-primary font-semibold text-brand-dark uppercase tracking-wide">
                      Leadership Context
                    </span>
                  </div>
                  <div className="mt-3 h-px bg-brand-dark-200/30" />

                  <div className="mt-5">
                    <label className="block text-xs font-primary font-semibold text-brand-dark mb-1.5">
                      Connection to Leadership
                    </label>
                    <div className="relative">
                      <select
                        name="leadershipConnection"
                        value={values.leadershipConnection}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="w-full rounded-lg border border-brand-dark-200/60 bg-brand-cream-100/30 px-4 py-2.5 text-sm font-secondary text-brand-dark appearance-none focus:outline-none focus:ring-2 focus:ring-brand-lilac/40 focus:border-brand-lilac transition-all cursor-pointer"
                      >
                        <option value="" disabled>
                          Select your current role/context
                        </option>
                        {connectionOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-dark-300 pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </div>
                    {touched.leadershipConnection &&
                      errors.leadershipConnection && (
                        <p className="mt-1.5 text-xs font-secondary text-brand-pink-700 font-medium">
                          {errors.leadershipConnection}
                        </p>
                      )}
                  </div>

                  {/* ── Submit ── */}
                  <div className="mt-10 flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-lilac hover:bg-brand-lilac-700 active:scale-[0.97] text-white font-primary font-semibold text-xs md:text-sm tracking-widest uppercase px-10 py-3.5 rounded-full transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer shadow-md shadow-brand-lilac/25 hover:shadow-lg hover:shadow-brand-lilac/30"
                    >
                      SUBMIT FORM
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>

        {/* ── Security links (Sidebar) ── */}
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

export default CommunityEquipperForm;
