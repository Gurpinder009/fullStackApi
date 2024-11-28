import express from "express";
import jwt from "jsonwebtoken";

export const adminRouter = express.Router();

function verifyJsonToken(req, res, next) {
  let rawToken = req.headers.authorization;
  let token = rawToken.split(" ")[1];
  try {
    if (jwt.verify(token, process.env.SECRET_KEY)) {
      next();
    }
  } catch (ex) {
    res.status(401).json({ error: "bad request" });
  }
}

adminRouter.post("/login", (req, res) => {
  let { userName, password } = req.body;
  if (process.env.ADMIN_USERNAME === userName) {
    if (process.env.ADMIN_PASSWORD === password) {
      let token = jwt.sign(
        {
          userName: process.env.ADMIN_USERNAME,
          password: process.env.ADMIN_PASSWORD,
        },
        process.env.SECRET_KEY
      );
      res.status(200).json({ token: token });
    } else {
      res.status(401).json({ error: "invalide password" });
    }
  } else {
    res.status(401).json({ error: "invalid user name" });
  }
});

adminRouter.get(
  "/",

  verifyJsonToken,

  (req, res) => {
    res.status(200).json("this is working fine");
  }
);
