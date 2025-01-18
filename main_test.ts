import { assertEquals } from "@std/assert";
import { add } from "./main.ts";

Deno.test("Test 1", function addTest() {
  assertEquals(add(""), 0);
});

Deno.test("Test 2", function addTest() {
  assertEquals(add("1,2"), 3);
});

Deno.test("Test 3", function addTest() {
  assertEquals(add("0,2"), 2);
});

Deno.test("Test 4", function addTest() {
  assertEquals(add("2"), 2);
});

Deno.test("Test 5", function addTest() {
  assertEquals(add("1"), 1);
});

Deno.test("Test 6", function addTest() {
  assertEquals(add("1,2,3"), 6);
});
