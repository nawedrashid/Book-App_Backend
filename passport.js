const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require("passport")
const {User} = require('./Model/userModel');

const GOOGLE_CLIENT_ID = "132178163602-oinlca79ebpackmgj81s6l72034rp7fj.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID:     GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
  },
  async(request, accessToken, refreshToken, profile, done) => {
    const currentUser = await User.findOne({googleID: profile.id})
        if(currentUser){
            console.log('user is: ', currentUser);
            done(null, currentUser);
        } else {
            const newUser = new User({
                googleID: profile.id,
                username: profile.displayName
            })
            await newUser.save()
                console.log('created new user: ', newUser);
                done(null, newUser);
        }
})
);

passport.serializeUser((user, done)=>{
    done(null,user._id)
})

passport.deserializeUser(async(_id, done)=>{
  const user = await User.findById(_id)
        done(null, user);

})

