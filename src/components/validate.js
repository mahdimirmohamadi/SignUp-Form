export const validate = (data) => {
  let errors = {};

  if (!data.name.trim()) {
    errors.name = "UserName Required";
  } else {
    delete errors.name;
  }
  if (!data.email) {
    errors.email = "Email Required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email Adress is Invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is Required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm your Password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Passwords Do Not Match!";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "Please Accept our Regulations";
  }
  return errors;
};
