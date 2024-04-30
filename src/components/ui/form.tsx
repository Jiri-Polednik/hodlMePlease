"use client";

import React, { useState, FormEvent } from "react";
import Image from "next/image";
import AnimatedInput from "@components/ui/animatedInput";
import AnimatedTextArea from "@components/ui/animatedTextArea";
import Button from "@components/ui/button";
import { useTranslations } from "next-intl";
import { useModal } from "@context/ModalContext";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  consent: boolean;
};

const Form = () => {
  const { variant } = useModal();

  const t = useTranslations(
    `Modal.${variant === "contact" ? "ContactForm" : "DemoForm"}`,
  );

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [target.name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // TODO: handle form submission here
  };

  const backgroundColor = variant === "contact" ? "bg-orange" : "bg-violet";

  return (
    <div
      className="container mx-auto bg-white rounded-2xl shadow-md overflow-hidden max-w-xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className={`${backgroundColor} flex justify-center p-3`}>
        <Image src="/logo-white.svg" alt="logo" width={200} height={50} />
      </div>

      <div className={"pt-6 pb-4"}>
        <p className="text-2xl font-bold text-center">{t("Title")}</p>
        <div className="pt-3">
          <p className="text-bold text-center">{t("Intro")}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        <AnimatedInput
          id="name"
          name="name"
          placeholder={t("NamePlaceholder")}
          value={formData.name}
          onChange={handleChange}
        />
        <AnimatedInput
          id="email"
          name="email"
          placeholder={t("EmailPlaceholder")}
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <AnimatedInput
          id="phone"
          name="phone"
          placeholder={t("PhonePlaceholder")}
          type="tel"
          value={formData.phone}
          onChange={handleChange}
        />
        <AnimatedTextArea
          id="message"
          name="message"
          placeholder={t("MessagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
        <div className={"flex justify-between"}>
          <div className="flex items-start my-auto">
            <div className="flex items-center h-5">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded cursor-pointer"
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="consent"
                className="font-medium text-gray-700 cursor-pointer"
              >
                {t("ConsentLabel")}
              </label>
            </div>
          </div>
          <div>
            <Button>{t("SubmitButton")}</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
