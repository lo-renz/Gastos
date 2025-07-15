export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (fullName) => {
  return fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
};
