module.exports.initializeConfig = () => {
  return {
    PORT: process.env.PORT || 4000,
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
  };
};