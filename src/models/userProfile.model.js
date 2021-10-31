const mongoose = require('mongoose');

const userProfileSchema = mongoose.Schema({
  profile: {
    type: String,
    default: 'demo.png',
  },
  dob: {
    type: Date,
  },
  linkedin: {
    type: String,
  },
  github: {
    type: String,
  },
  tagline: {
    type: String,
    default: 'Member of CSI Dypiemr',
  },
  about: {
    type: String,
  },
  portfolioLink: {
    type: String,
  },
  position: {
    type: String,
    default: 'Member',
  },
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
