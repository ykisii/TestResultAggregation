import * as XLSX from "https://cdn.sheetjs.com/xlsx-0.18.3/package/xlsx.mjs";
import { TestSource } from "./test_source.ts";
import { CellLocations } from "./cell_locations.ts";

export class XlsxFile implements TestSource {
  protected wb: any;
  protected locations: CellLocations;

  constructor() {
    this.wb = null;
    this.locations = {no:'', type:'', date:'', result:''};
  }

  open(filepath: string): void {
    const u8: Uint8Array = Deno.readFileSync(filepath);
    this.wb = XLSX.read(u8);
  }
  analyze(): void {
    if (!this.wb) throw new Error("file has not opend.");
  }
  getData() {
    throw new Error("Method not implemented.");
  }
  setLocations(locations: CellLocations) {
    this.locations = locations;
  }
}
