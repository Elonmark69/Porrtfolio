// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const data = require('./data.json');

export default (req, res) => {
  res.status(200).json(data);
};
