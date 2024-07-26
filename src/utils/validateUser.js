const userRules = {
  name: /\S+/,
  email: /\w+@\w+\.\w+/,
  description: /\S+/,
  image: /./,
};

export default function validateUser(user) {
  const userKeys = Object.keys(user);
  return userKeys.every((key) => userRules[key].test(user[key]));
}
