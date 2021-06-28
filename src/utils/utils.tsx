import slugify from "slugify";
import _ from "lodash";

export const to = (slug: string) => `/en-pl/${slug}`;

export const slug = (text: string) => {
  return slugify(text, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.?!,()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
  });
};

export const getSentences = (text: string) => {
  const sentences = text.split(/(\?\s)|(\.\s)|(!\s)|(\."\s)|(\.”\s)/g);

  const filteredSentences = sentences.filter(
    (s) => s !== undefined && s !== ". "
  );

  return filteredSentences;
};

type Word = {
  word: string;
  count: number;
  examples: string[];
};
export const getWords = (text: string, sentences: string[]) => {
  const countWords = _.countBy(text.split(" "));
  const words: Word[] = Object.entries(countWords).map((item) => {
    const word = { word: item[0], count: item[1], examples: [] };
    return word;
  });

  const wordsOrdered = _.orderBy(words, ["count"], ["desc"]);

  // find examples for each words
  const examples = [...sentences];
  // console.log(wordsOrdered[0]);
  console.log(examples.length);
  const wordsWithExamples = wordsOrdered.slice(0, 1000000).map((item) => {
    const newItem = { ...item };
    // console.log(item.word);
    const exampleIndex = examples.findIndex((example) =>
      example.includes(item.word)
    );
    if (exampleIndex !== -1) {
      // console.log("exampleIndex", exampleIndex);
      const x = examples.splice(exampleIndex, 1);
      // console.log("x", ...x);
      newItem.examples.push(...x);
    }

    return newItem;
  });

  // console.log(wordsWithExamples);
  return wordsWithExamples;
};
