import mongoose from "mongoose";

const jewellerySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
});

const JewelleryModel = mongoose.model("jewelleries", jewellerySchema);
export default JewelleryModel;
