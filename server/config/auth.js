import passport from 'passport';
import Facebook from 'passport-facebook';
import env from 'dotenv';
import callback from '../utils/auth';

env.config();
const FacebookStrategy = Facebook.Strategy;

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use('facebook', new FacebookStrategy({
  clientID: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  profileFields: ['id', 'displayName', 'photos'],
  callbackURL: '/api/auth/facebook/callback',
  proxy: true
}, callback ));