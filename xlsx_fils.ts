import * as XLSX from "https://cdn.sheetjs.com/xlsx-0.18.3/package/xlsx.mjs";
import { TestSource } from "./test_source.ts";
import { TestItem } from "./test_item.ts";

export class XlsxFile implements TestSource {
  protected wb: any;
  protected items: Array<TestItem>;

  constructor() {
    this.wb = null;
  }

  open(filepath: string): void {
    const u8: Uint8Array = Deno.readFileSync(filepath);
    this.wb = XLSX.read(u8);
    this.items = new Array<TestItem>(); 
  }
  analyze(): void {
    if (!this.wb) throw new Error("file has not opend.");
  }
  getData() {
    throw new Error("Method not implemented.");
  }
}
