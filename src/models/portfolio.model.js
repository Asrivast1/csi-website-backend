const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  source: {
    type: String,
  },
  live: {
    type: String,
  },
  description: {
    type: String,
  },
  workedOn: [{ type: String }],
});

const experienceSchema = mongoose.Schema({
  companyName: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  workedOn: [{ type: String }],
});

const educationSchema = mongoose.Schema({
  institute: {
    type: String,
  },
  course: {
    type: String,
  },
  score: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  notables: [{ type: String }],
});

const portfolioSchema = mongoose.Schema({
  projects: [projectSchema],
  experience: [experienceSchema],
  education: [educationSchema],
  skills: [{ type: String }],
  certificates: [{ type: String }],
  csiCertificates: [{ type: String }],
  interest: [{ type: String }],
  socials: [
    {
      name: {
        type: String,
      },
      link: {
        type: String,
      },
    },
  ],
  achevements: [{ type: String }],
  hobbies: [{ type: String }],
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
