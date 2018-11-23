function isObject(object) {
  return object
    && typeof object === 'object'
    && object.constructor === Object;
}

function format(string, ...args) {
  let a = string;

  args.forEach((k, i) => {
    let arg = '';

    if (typeof args[i] === 'function') {
      arg = args[i].name;
    } else {
      arg = args[i].toString();
    }

    a = a.replace(new RegExp(`\\{${i}}`, 'g'), arg);
  });

  return a;
}

export {
  isObject,
  format,
};
