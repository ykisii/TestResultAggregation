import { assertEquals } from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { SampleTest } from "./sample_test.ts";
import { CellLocation } from "./cell_location.ts";

Deno.test("Read no 1", () => {
  //const test = new SampleTest('./files/sample_test.xlsx');
  //test.analyze();
});

Deno.test("Cell Location: init", () => {
  const location = new CellLocation('A', 1);
  assertEquals(location.dispName, 'A1');
  location.moveDown();
  assertEquals(location.dispName, 'A2');
  location.moveUp();
  location.moveUp();
  assertEquals(location.dispName, 'A1');
});

Deno.test("Cell Location: move down(1000times)", () => {
  const location = new CellLocation('A', 1);
  [...Array(1000)].forEach( (_)=> {
    location.moveDown();
  });
  assertEquals(location.dispName, 'A1001');
});

Deno.test("Cell Location: move origin", () => {
  const location = new CellLocation('A', 1);
  [...Array(1000)].forEach( (_)=> {
    location.moveDown();
  });
  location.moveToOrigin();
  assertEquals(location.dispName, 'A1');
});

Deno.test("Cell Location: move right", () => {
  const location = new CellLocation('A', 1);
  [...Array(10)].forEach( (_)=> {
    location.moveRight();
  });
  assertEquals(location.dispName, 'K1');
  location.moveToOrigin();
  assertEquals(location.dispName, 'A1');
});

Deno.test("Cell Location: move left", () => {
  const location = new CellLocation('K', 1);
  [...Array(10)].forEach( (_)=> {
    location.moveLeft();
  });
  assertEquals(location.dispName, 'A1');
  location.moveToOrigin();
  assertEquals(location.dispName, 'K1');
});