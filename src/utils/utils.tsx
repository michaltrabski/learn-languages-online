import slugify from "slugify";
// import _ from "lodash";
// import { normalizeWhiteSpaces } from "normalize-text";

export const to = (slug: string) => `/${slug}`;

export const makeSlug = (text: string | null) => {
  if (!text) return "";

  return slugify(text, {
    replacement: "-", // replace spaces with replacement character, defaults to `-`
    remove: /[*+~.?!,()'"!:@]/g, // remove characters that match regex, defaults to `undefined`
    lower: true, // convert to lower case, defaults to `false`
    strict: false, // strip special characters except replacement, defaults to `false`
    locale: "vi", // language code of the locale to use
  });
};

// export const getText = (text: string) => {
//   // 1 normalize text
//   let t = normalizeWhiteSpaces(text);

//   // 2 remove caracters
//   const caracters = ["“", "”", "...", "..", ";"];
//   for (const c of caracters) t = t.replaceAll(c, "");

//   t = t.replaceAll(". ", ".&#32;");
//   t = t.replaceAll("? ", "?&#32;");
//   t = t.replaceAll("! ", "!&#32;");

//   return t;
// };

// export const getSentences = (text: string) => {
//   const sentences = text.split("&#32;");

//   const filteredS = sentences.filter(
//     (s) => s !== undefined && s !== ". " && s.length > 15
//   );

//   const uniq = _.uniqBy(filteredS, (item) => item);

//   const orderedSentences = uniq.sort((a, b) => a.length - b.length);

//   return orderedSentences;
// };

// type Word = {
//   word: string;
//   count: number;
//   examples: string[];
// };
// export const getWords = (text: string, sentences: string[]) => {
//   const countWords = _.countBy(text.split(" "));

//   const words: Word[] = Object.entries(countWords).map((item) => {
//     const word = {
//       word: item[0],
//       count: item[1],
//       examples: [],
//     };

//     return word;
//   });

//   const wordsOrdered = _.orderBy(words, ["count"], ["desc"]);

//   const first1000words = wordsOrdered.slice(0, 1000).map((w) => w.word);

//   const examples = createExamplesArray(sentences, first1000words);
//   console.log("examples", examples.length);

//   const wordsWithExamples = wordsOrdered.map((item) => {
//     const newItem = { ...item };
//     // console.log(1, newItem);

//     for (let i = 1; i <= 5; i++) {
//       const index = examples.findIndex((example) => {
//         const exampleLowerCase = example
//           .toLowerCase()
//           .replaceAll(".", "")
//           .replaceAll("?", "")
//           .replaceAll("!", "");

//         // console.log(
//         //   "XXXXX =",
//         //   exampleLowerCase.split(" "),
//         //   item.word.toLowerCase(),
//         //   exampleLowerCase.split(" ").includes(item.word.toLowerCase())
//         // );
//         return exampleLowerCase.split(" ").includes(item.word.toLowerCase());
//       });
//       if (index !== -1) newItem.examples.push(...examples.splice(index, 1));
//     }

//     return newItem;
//   });

//   return wordsWithExamples;
// };

// const createExamplesArray = (sentences: string[], first1000words: string[]) => {
//   const examples = [...sentences];
//   // console.log("examples", examples);

//   const easyExamples = examples.filter((item) => check(item, first1000words)); // examples that contains only words from "first1000words"
//   // console.log("easyExamples", easyExamples);

//   const result = _.uniqBy([...easyExamples, ...examples], (item) => item);

//   return result;
// };

// const check = (sentence: string, first1000words: string[]) => {
//   const wordsArr = sentence
//     .toLowerCase()
//     .replaceAll(".", "")
//     .replaceAll("?", "")
//     .replaceAll("!", "")
//     .split(" ");

//   // console.log("words =", wordsArr, first1000words);
//   for (let i = 0; i < wordsArr.length; i++) {
//     if (!first1000words.includes(wordsArr[i])) return false;
//   }
//   return true;
// };
