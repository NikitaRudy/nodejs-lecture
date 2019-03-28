function log(message) {
  const now = new Date();
  console.log(now.toUTCString(), ' ::::::::::: ', message);
}

module.exports = {
  log
}