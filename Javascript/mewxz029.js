const replaceAlphaNumericOnly = (raw) => {
  const replaced = raw.replace(/[^A-z0-9]+/g, '')
  return replaced
}

console.log(replaceAlphaNumericOnly('H!๓e*l))l@o'))