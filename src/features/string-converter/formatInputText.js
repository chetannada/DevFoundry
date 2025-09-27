const formatValue = (str, type) => {
  if (type === "Title Case")
    return str.replace(
      /\w\S*/g,
      word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    );

  if (type === "Sentence Case") return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  if (type === "Inverse Case")
    return str
      .split("")
      .map(char => (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()))
      .join("");

  if (type === "Reverse Case") return str.split("").reverse().join("");

  if (type === "Lower Case") return str.toLowerCase();

  if (type === "Upper Case") return str.toUpperCase();

  if (type === "Camel Case")
    return str
      .toLowerCase()
      .split(/[\s-_]+/)
      .map((word, i) => (i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
      .join("");

  if (type === "Pascal Case")
    return str
      .toLowerCase()
      .split(/[\s-_]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");

  if (type === "Snake Case")
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[\W_]+/g, " ")
      .toLowerCase()
      .split(/\s+/)
      .join("_");

  if (type === "Kebab Case")
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[\W_]+/g, " ")
      .toLowerCase()
      .split(/\s+/)
      .join("-");

  if (type === "Dot Case")
    return str
      .replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join(".");

  if (type === "Train Case")
    return str
      .replace(/\W+/g, " ")
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
      .join("-");

  if (type === "Constant Case")
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[\W_]+/g, " ")
      .toUpperCase()
      .split(/\s+/)
      .join("_");

  if (type === "Path Case")
    return str
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[\W_]+/g, " ")
      .toLowerCase()
      .split(/\s+/)
      .join("/");
};

const formatInputText = str => {
  const formats = [
    "Title Case",
    "Sentence Case",
    "Inverse Case",
    "Reverse Case",
    "Lower Case",
    "Upper Case",
    "Camel Case",
    "Pascal Case",
    "Snake Case",
    "Kebab Case",
    "Dot Case",
    "Train Case",
    "Constant Case",
    "Path Case",
  ];

  return formats.map(title => ({
    title,
    value: str ? formatValue(str.trim(), title) : str,
  }));
};

export default formatInputText;
