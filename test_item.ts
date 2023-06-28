export type TestType = 'Normal' | 'SubNormal' | 'Abnormal';
export type TestResult = 'OK' | 'NG' | 'NA' | 'NT';
  
export class TestItem {
  #no: number;
  #type: TestType; 
  #date: string;
  #result: TestResult;

  constructor(no: number, type: TestType, date: string, result: TestResult) {
    this.#no = no;
    this.#type = type;
    this.#result = result;
    this.#date = date;
  }

  get no(): number {
    return this.#no;
  }

  get type(): TestType {
    return this.#type;
  }

  get result(): TestResult {
    return this.#result;
  }

  get date(): string {
    return this.#date;
  }
}