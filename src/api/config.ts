export const getHostUrl = () => {
  if (import.meta.env.PUBLIC_NODE_ENV === "production")
    return "https://production.com";
  else if (import.meta.env.PUBLIC_NODE_ENV === "staging")
    return "https://staging.com";

  return "https://uat.com";
};
