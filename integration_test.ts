import { TestItem } from "./test_item.ts";
import { TestSource } from "./test_source.ts";

export class IntegrationTest {
  #name: string;
  #count: number;
  #successes: number;
  #errors: number;
  #notAvailables: number;
  #items: Array<TestItem>;
  
  constructor(name: string) {
    this.#name = name? name:"-";
    this.#count = 0;
    this.#successes = 0;
    this.#errors = 0;
    this.#notAvailables = 0;
    this.#items = new Array<TestItem>();
  }

  get count(): number {
    return this.#items.length;
  }

  startAnalyze(test: TestSource) {
    if (!test) throw new Error("TestSource is invlalid");

    try {
      test.analyze();
    } catch (e) {
      console.log(e);
    }
  }
}