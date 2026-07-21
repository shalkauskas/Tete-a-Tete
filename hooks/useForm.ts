import { ChangeEvent, useState } from "react";

export const useForm = <T extends Record<string, string>>(
  initialValues: T
) => {
  const [values, setValues] = useState<T>(initialValues);

  return {
    values,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
    reset: () => setValues(initialValues),
  };
};
