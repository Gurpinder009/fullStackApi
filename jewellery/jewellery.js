import express from "express";
import JewelleryModel from "../database/jewelleryModel.js";
import verifyJsonToken from "../utilities/verifyToken.js";

export const jwlRouter = express.Router();

jwlRouter.get("/", async (req, res) => {
  try {
    let data = await JewelleryModel.find();
    res.status(200).json(data);
  } catch (ex) {
    res.status(400).json(e);
  }
});

jwlRouter.get("/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let data = await JewelleryModel.findById(id);
    res.status(200).json(data);
  } catch (ex) {
    res.status(400).json(e);
  }
});

jwlRouter.post("/", verifyJsonToken, async (req, res) => {
  try {
    let data = {
      name: "de,p",
      description: "de,p",
      price: 123,
      image: "de,p",
      category: "de,p",
    };
    let result = await JewelleryModel.create(data);
    res.status(200).json(result);
  } catch (ex) {
    res.status(400).json(e);
  }
});

jwlRouter.patch("/:id", verifyJsonToken, async (req, res) => {
  try {
    let { id } = req.params;
    const newData = req.body;
    newData.id = id;

    let result = await JewelleryModel.updateOne(newData);
    res.status(200).json(result);
  } catch (ex) {
    res.status(400).json(e);
  }
});

jwlRouter.delete("/:id", verifyJsonToken, async (req, res) => {
  try {
    let { id } = req.params;

    let result = await JewelleryModel.deleteOne({
      id: id,
    });
    res.status(200).json(result);
  } catch (ex) {
    res.status(400).json(e);
  }
});
