// import passport from "passport";
// import { OIDCStrategy } from "passport-azure-ad";
// import { prisma } from "../script.js";

// const strategy = new OIDCStrategy(
//   {
//     identityMetadata: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/v2.0/.well-known/openid-configuration`,
//     clientID: process.env.AZURE_AD_CLIENT_ID,
//     responseType: "code",
//     responseMode: "form_post",
//     redirectUrl: "http://localhost:5000/auth/microsoft/callback",
//     clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
//     allowHttpForRedirectUrl: true,
//     scope: ["profile", "email", "openid"],
//   },
//   async (iss, sub, profile, accessToken, refreshToken, done) => {
//     try {
//       // Microsoft guarantees email or upn
//       const email = profile._json.preferred_username;

//       let user = await prisma.user.findUnique({ where: { email } });
//       if (!user) {
//         user = await prisma.user.create({
//           data: {
//             email,
//             username: profile.displayName || email.split("@")[0],
//             hashedPassword: "", // no local password for MS users
//           },
//         });
//       }

//       return done(null, user);
//     } catch (err) {
//       return done(err, null);
//     }
//   }
// );

// passport.use(strategy);

// export default passport;
