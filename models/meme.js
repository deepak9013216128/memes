const mongoose = require("mongoose");

const memeSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.Meme || mongoose.model("Meme", memeSchema);
