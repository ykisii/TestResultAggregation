import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { SampleTest } from "./sample_test.ts";

Deno.test("Read no 1", () => {
  const test = new SampleTest('./files/sample_test.xlsx');
  test.analyze();
});