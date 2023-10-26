const yup = require('yup');

const schemaUser = yup.object({
  name: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  password: yup.string().trim().required(),
  gender: yup.string().trim().oneOf(['male', 'female']).required(),
});

module.exports.schemaUser = schemaUser;