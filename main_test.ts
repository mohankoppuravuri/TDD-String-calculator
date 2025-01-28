import { assertEquals, assertThrows } from "@std/assert";
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

Deno.test("Test 7", function addTest() {
  assertEquals(add("1\n2,3"), 6);
});

Deno.test("Test 8", function addTest() {
  assertEquals(add("//;\n1;2"), 3);
});

Deno.test("Test 9", function addTest() {
  assertThrows(
    () => {
      add("-1");
    },
    Error,
    `negative numbers not allowed -1`
  );
});

Deno.test("Test 9", function addTest() {
  assertThrows(
    () => {
      add("-1,-3,-4");
    },
    Error,
    `negative numbers not allowed -1, -3, -4`
  );
});

Deno.test("Test 10", function addTest() {
  assertEquals(add("1, 1001"), 1);
});

Deno.test("Test 11", function addTest() {
  assertEquals(add("//[***]\n1***2***3"), 6);
});

Deno.test("Test 12", function addTest() {
  assertEquals(add("//[*][%]\n1*2%3"), 6);
  assertEquals(add("//[**][*%]\n1**2*%3"), 6);
});

Deno.test("Test 13: Multiply numbers when delimiter is *", function addTest() {
  assertEquals(add("//*\n3*2"), 6);
});
