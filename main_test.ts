import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test("Test 1", function addTest() {
  assertEquals(add(""), 0);
});
