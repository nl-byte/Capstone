import mongoose from "mongoose";

const appVaforms = new mongoose.Schema({
  form_name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  url: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  title: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  first_issued: {
    type: Date,
    required: true
  },

  last_revision_on: {
    type: Date,
    required: true
  },
  first_issued_on: {
    type: Date,
    required: true
  },

  created_at: {
    type: Date,
    required: true
  },

  pages: {
    type: Number,
    required: true
  },
  sha256: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  valid_pdf: {
    type: Boolean,
    required: true
  },

  form_usage: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  form_tool_url: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  form_details_url: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  form_type: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  language: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  deleted_at: {
    type: Date,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  related_forms: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  benefit_categories: [
    {
      type: String,
      required: true,
      validate: /^[A-Za-z0-9 ]*$/
    },
    {
      name: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
      },

      description: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
      }
    }
  ],

  va_form_admin: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },

  versions: [
    {
      type: Boolean,
      required: true,
      validate: /^[A-Za-z0-9 ]*$/
    },
    {
      sha256: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
      },

      revision_on: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
      }
    }
  ]
});

const Forms = mongoose.model("Forms", appVaforms);

export default Forms;
