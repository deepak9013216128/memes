import connectDB from "../../../middleware/mongodb";
import Meme from "../../../models/meme";

const handler = async (req, res) => {
  await connectDB();
  switch (req.method) {
    case "GET":
      const resultsPerPage = 5;
      const page = req.query.page || 1;
      const type = req.query.type;
      Meme.find({}, ["type", "url"])
        .limit(resultsPerPage)
        .skip(resultsPerPage * (page - 1))
        .then((memes) => res.status(200).json({ data: memes, success: true }))
        .catch((err) => {
          res.status(500).json({ success: false });
        });
      break;
    case "POST":
      console.log("uploading....");
      const { memes } = req.body;
      Meme.insertMany(JSON.parse(memes))
        .then(() => {
          res
            .status(201)
            .json({ success: true, msg: "photo uploaded successfully." });
        })
        .catch((err) => {
          res.status(500).json({ success: false, error: err });
        });
      break;
    default:
      res.status(404).json({ success: false, error: "Not Found" });
      break;
  }
};

export default handler;
