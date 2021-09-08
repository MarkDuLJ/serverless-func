const items = require("../assets/data");

exports.handler = async (e, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
