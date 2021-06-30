import slugify from "slugify";
import _ from "lodash";
import { normalizeWhiteSpaces } from "normalize-text";

export const getText = (text: string) => {
  // 1 normalize text
  let t = normalizeWhiteSpaces(text);

  // 2 remove caracters
  const caracters = ["“", "”", "...", "..", ";"];
  for (const c of caracters) t = t.replaceAll(c, "");

  t = t.replaceAll(". ", ".&#32;");
  t = t.replaceAll("? ", "?&#32;");
  t = t.replaceAll("! ", "!&#32;");

  return t;
};

export const getSentences = (text: string) => {
  // const sentences = text.split(/(\?\s)|(\.\s)|(!\s)|(\."\s)|(\.”\s)/g);
  const sentences = text.split("&#32;");

  const filteredS = sentences.filter(
    (s) => s !== undefined && s !== ". " && s.length > 15
  );

  const uniq = _.uniqBy(filteredS, (item) => item);

  const orderedSentences = uniq.sort((a, b) => a.length - b.length);

  return orderedSentences;
};

type Word = {
  word: string;
  count: number;
  examples: string[];
};
export const getWords = (text: string, sentences: string[]) => {
  const countWords = _.countBy(text.split(" "));

  const words: Word[] = Object.entries(countWords).map((item) => {
    const word = {
      word: item[0],
      count: item[1],
      examples: [],
    };
    return word;
  });

  const wordsOrdered = _.orderBy(words, ["count"], ["desc"]);

  const examples = [...sentences];

  const wordsWithExamples = wordsOrdered.map((item) => {
    const newItem = { ...item };

    for (let i = 1; i <= 5; i++) {
      const index = examples.findIndex((e) => {
        const lower = e.toLowerCase();
        return lower.includes(item.word.toLowerCase());
      });
      if (index !== -1) newItem.examples.push(...examples.splice(index, 1));
    }

    return newItem;
  });

  // console.log(wordsWithExamples);
  return wordsWithExamples;
};

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
