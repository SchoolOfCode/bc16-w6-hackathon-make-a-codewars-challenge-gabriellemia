import { test, expect } from "vitest";
import makeHawaiianPizza from "./main.js";

test("list of ingredients should return 1", function () {
  const ingredients = ["dough", "pineapple", "ham", "pineapple", "ham", "ham"];
  const expected = 1;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("list of pizza ingredients should return 3", function () {
  const ingredients = [
    "pineapple",
    "ham",
    "ham",
    "pineapple",
    "ham",
    "dough",
    "pineapple",
    "ham",
    "ham",
    "pineapple",
    "ham",
    "dough",
    "pineapple",
    "ham",
    "ham",
    "pineapple",
    "ham",
    "dough",
  ];
  const expected = 3;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("list of pizza ingredients should return 2", function () {
  const ingredients = [
    "pineapple",
    "olives",
    "ham",
    "dough",
    "tomato",
    "ham",
    "pineapple",
    "ham",
    "dough",
    "ham",
    "tomato",
    "ham",
    "cheese",
    "pineapple",
    "ham",
    "dough",
    "pineapple",
    "ham",
    "tomato",
    "cheese",
    "pineapple",
    "dough",
  ];
  const expected = 2;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("non-Hawaiian ingredients to return 0", function () {
  const ingredients = ["tomato", "cheese", "mushrooms", "jalapenos", "cheese", "cheese", "tomoato", "pepperoni"];
  const expected = 0;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("Hugi ate all the ham to return 0", function () {
  const ingredients = ["pineapple", "dough", "dough", "pineapple", "dough", "pineapple", "pineapple", "dough"];
  const expected = 0;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("list of ingredients to return 4", function () {
  const ingredients = [
    "dough",
    "ham",
    "ham",
    "dough",
    "pineapple",
    "dough",
    "ham",
    "pineapple",
    "dough",
    "ham",
    "ham",
    "dough",
    "pineapple",
    "dough",
    "ham",
    "pineapple",
    "dough",
    "ham",
    "ham",
    "dough",
    "pineapple",
    "dough",
    "ham",
    "pineapple",
    "dough",
    "ham",
    "ham",
    "dough",
    "pineapple",
    "dough",
    "ham",
    "pineapple",
  ];
  const expected = 4;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("Empty array should return 0", function () {
  const ingredients = [];
  const expected = 0;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});
