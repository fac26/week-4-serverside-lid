function sanitize(unsafe) {
  return unsafe.replace(/</g, '&lt;');
}


function validation(message) {
  if (message) {
      return `<span style="color: red">${message}</span>`;
  } else {
      return '';
  }
}

module.exports = { sanitize, validation }