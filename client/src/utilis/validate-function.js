export const validateName = (value) => {
  let error = "";
  if (value === "") {
    error = "Name is required";
  } else if (value.length < 3) {
    error = "Should be atleast 3 characters long";
  }
  return error;
};

export const validatePassword = (value) => {
  let error = "";
  if (value === "") {
    error = "Password required";
  } else if (value.length < 8) {
    error = "Should be atleast 8 characters";
  }
  return error;
};

export const validateConfirmPassword = (value, Password) => {
  let error = "";
  if (value === "") {
    error = "Confirm password required";
  } else if (value.length < 8) {
    error = "Should be atleast 8 characters";
  } else if (value === Password) {
    error = "Password does not match";
  }
  return error;
};

export const validateEmail = (value) => {
  let error = "";
  if (value === "") {
    error = "Email is required";
  } else if (
    !/^[a-z][a-z0-9._#$%&*]{0,}\@[a-z]{1,}(\.[a-z]{2,}){1,}$/gi.test(value)
  ) {
    error = "Enter a valid email";
  }
  return error;
};
