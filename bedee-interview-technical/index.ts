export type Input = string[];
export type Output = string;

function findLongestCommonPrefix(input: Input): Output {
  if (input.length === 0) return '';

  let prefix = input[0];

  for (let i = 1; i < input.length; i++) {
    while (input[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === '') return '';
    }
  }

  return prefix;
}

export default findLongestCommonPrefix;