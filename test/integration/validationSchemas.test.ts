import { describe, expect, test } from "@jest/globals";
import supertest from "supertest";
import { server } from "../../src/server";

describe("validation suite", () => {
  test("create developer schema validation", async () => {
    const result = await supertest(server)
      .post("/api/v1/testValidation")
      .set("Accept", "application/json")
      .send({
        descriptions: "adsad",
      });

    expect(result.statusCode).toBe(400);
    expect(
      result.body.errors?.find(({ path }) => path === "descriptions")
    ).toBeTruthy();
  });
});
