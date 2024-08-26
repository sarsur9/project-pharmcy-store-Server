import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const stripe = Stripe(
  "sk_test_51PluRQIKm3oxgWygXpas6BkEj5lWOaXLfD8w17V6zSgL6mRzztAErAT46TqKM73X00pd6RVChQaatPVEJBsB8ATh003n8BpUC3"
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