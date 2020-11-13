export const extensionRegex = /(?:\.([^.]+))?$/;
export const fileTypes = {
  html: "mdi-language-html5",
  c: "mdi-language-c",
  cpp: "mdi-language-cpp",
  js: "mdi-nodejs",
  json: "mdi-code-json",
  md: "mdi-language-markdown",
  pdf: "mdi-file-pdf",
  png: "mdi-file-image",
  txt: "mdi-file-document-outline",
  autotest: "mdi-cog",
  autotest2: "mdi-cog",
  zadaca: "mdi-arrow-top-right-thick"
};
export const getCategoryColor = category => {
  if (category === "Easy") {
    return "blue lighten-4";
  } else if (category === "Moderate") {
    return "green lighten-4";
  } else if (category === "Hard") {
    return "red lighten-4";
  }
  return "";
}