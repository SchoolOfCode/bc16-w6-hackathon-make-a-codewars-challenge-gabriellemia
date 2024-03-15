import { test, expect } from "vitest";
import makeHawaiianPizza from "./main.js";

test("list of ingredients should return 1", function () {
  const ingredients = ["dough", "pineapple", "ham", "pineapple", "ham", "ham"];
  const expected = 1;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("list of pizza ingredients should return 2", function () {
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

test("Doggo ate all the ham to return 0", function () {
  const ingredients = ["pineapple", "dough", "dough", "pineapple", "dough", "pineapple", "pineapple", "dough"];
  const expected = 0;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("Mixed list of ingredients to return 4", function () {
  const ingredients = [
    "dough",
    "cheese",
    "ham",
    "ham",
    "olives",
    "jalapenos",
    "dough",
    "pineapple",
    "dough",
    "ham",
    "pineapple",
    "mushrooms",
    "dough",
    "ham",
    "ham",
    "dough",
    "pineapple",
    "dough",
    "tuna",
    "ham",
    "pineapple",
    "dough",
    "ham",
    "anchovies",
    "ham",
    "dough",
    "pineapple",
    "olives",
    "pepper",
    "dough",
    "ham",
    "pineapple",
    "dough",
    "ham",
    "ham",
    "dough",
    "tomato",
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

test("list with flour should return 2", function () {
  const ingredients = [
    "pineapple",
    "flour",
    "ham",
    "ham",
    "pineapple",
    "ham",
    "pineapple",
    "ham",
    "pineapple",
    "ham",
    "ham",
    "dough",
    "ham",
  ];
  const expected = 2;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});

test("list with flour and dough should return 6", function () {
  const ingredients = [
    "pineapple",
    "flour",
    "ham",
    "ham",
    "pineapple",
    "flour",
    "ham",
    "pineapple",
    "ham",
    "pineapple",
    "ham",
    "ham",
    "dough",
    "ham",
    "pineapple",
    "pineapple",
    "ham",
    "ham",
    "dough",
    "ham",
    "pineapple",
    "pineapple",
    "ham",
    "pineapple",
    "ham",
    "pineapple",
    "ham",
    "ham",
    "ham",
    "pineapple",
    "ham",
    "pineapple",
    "ham",
    "ham",
  ];
  const expected = 6;
  const actual = makeHawaiianPizza(ingredients);
  expect(actual).toBe(expected);
});
