module.exports = {
  NAME: 'This is from the Shared Package',
  logIt: (appName, ...rest) => {
    console.log(
      'Running this from:',
      arguments[1].main.filename,
      '\n=>',
      appName + ':',
      ...rest,
    );
  },
};
