import app from "./index.js";
import {test} from '@jest/globals';

describe("GET /api/products", () => {
  test("should return a list of products", async () => {
    const response = await app.get("/api/products");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: { apple: 5, bananas: 4 },
    });
  });
  });
