function buildDefaultMessage(condition, expected, current) {
  return `Expect that ${expected} ${condition} ${current}`;
}

export {
  buildDefaultMessage
};

