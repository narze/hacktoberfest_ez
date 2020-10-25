const greetingSentences = (
  prefixName: "Mr" | "Ms",
  name: string,
  lastname: string,
  greetingWord: string
) => {
  return `${greetingWord} ${prefixName}. ${name} ${lastname}`;
};
