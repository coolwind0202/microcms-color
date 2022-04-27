module.exports = {
  plugins: {
    "posthtml-expressions": {
      locals: {
        SERVICE_ID: process.env.SERVICE_ID
      }
    }
  }
};