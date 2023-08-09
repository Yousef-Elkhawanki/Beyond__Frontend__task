import Joi from "joi";

function handle_form(useData) {
  const scheme = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    email: Joi.string().email({
      tlds: { allow: ["com", "net"] },
    }),
    phone: Joi.string()
      .pattern(new RegExp("^01(1||2||0||5)[0-9]{8}$"))
      .required(),
    bugdet: Joi.number().required(),
    message: Joi.string().min(5).max(100).required(),
  });
  return scheme.validate(useData, { abortEarly: false });
  // console.log(scheme.validate(useData, { abortEarly: false }));
}

export default handle_form;
