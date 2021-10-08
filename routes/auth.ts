import passport from "passport";
import { Router } from "express";

const router = Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/");
  }
);
router.get("/auth/current-user", (req, res) => {
  res.send(req.user);
});

router.get("/auth/logout", (req, res) => {
  req.logOut();
  req.session = null;
  res.clearCookie("resume-auth", { path: "/" });
  res.redirect("/");
});

export default router;
