import { Router } from "express";
import Forms from "../models/Vaforms.js";

const router = Router();

router.get("/", async (request, response) => ({{
    // Send a GET request to the VA Forms API to retrieve all VA forms
    const { data } = await axios.get('VA_FORMS_API_KEY, { params: request.query });

    response.json(data);
  } catch (error) {
    console.error(error);

    return response.status(500).json(error.errors);
  }
});

// Get a single VA form by ID
router.get("/:id", async (request, response) => {
  try {
    // Send a GET request to the VA Forms API to retrieve a single VA form by ID
    const { data } = await axios.get(`VA_FORMS_API_KEY/${request.params.id}`);

    response.json(data);
  } catch (error) {
    console.error(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
