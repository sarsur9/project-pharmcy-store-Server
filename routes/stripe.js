import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const stripe = Stripe(
  "pk_test_51PluRQIKm3oxgWygISEtvjfiQGFSnMuFrHcbQueLHgK4UwuhzbF3ohk2tbOq998t9tqZI64O7vnYMUT16ZAUZXBD00ddJj75yu"
);
router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
        console.log(stripeErr);

      } else {
        res.status(200).json(stripeRes);
        console.log(res);

      }
    }
  );
});
export default router;