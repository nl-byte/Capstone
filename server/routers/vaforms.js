import { Router } from "express";
import Forms from "../models/Vaforms.js";

const router = Router();

// Create form route
router.post("/", async (request, response) => {
  try {
    const Forms = new Forms(request.body);

    const data = await Forms.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    return response.status(500).json(error.errors);
  }
});
// Get all pizzas route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Forms.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});
router.get("/:id", async (request, response) => {
  try {
    const data = await Forms.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

router.delete("/:id", async (request, response) => {
  try {
    const data = await Forms.findByIdAndRemove(request.params.id, {});

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

// Update a single pizza by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Forms.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          form_name: body.form_name,
          url: body.url,
          title: body.title,
          first_issued: body.first_issued,
          last_revision_on: body.last_revision_on,
          first_issued_on: body.first_issued_on,
          created_at: body.created_at,
          pages: body.created_at,
          sha256: body.sha256,
          valid_pdf: body.valid_pdf,
          form_usage: body.form_usage,
          form_tool_url: body.form_tool_url,
          form_details_url: body.form_details_url,
          form_type: body.form_type,
          language: body.language,
          deleted_at: body.deleted_at,
          related_forms: body.related_forms,
          benefit_categories: [
            { name: body.name, description: body.description }
          ],
          va_form_admin: body.va_form_admin,
          versions: [{ sha256: body.sha256, revision_on: body.revision_on }]
        }
      },
      {
        new: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
export default router;
