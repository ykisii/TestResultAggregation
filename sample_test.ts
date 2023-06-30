import { CellLocation } from "./cell_location.ts";
import { XlsxFile } from "./mod.ts"

export type LocationsFormat = {
    no: CellLocation,
    type: CellLocation,
    result: CellLocation
} | undefined;

export class SampleTest extends XlsxFile {
  //private locations: CellLocation;
  #locations: LocationsFormat;

  set locations(locations: LocationsFormat) {
    this.#locations = structuredClone(locations);
  }

  constructor(filepath: string) {
    super();
    super.open(filepath);
    this.#locations = undefined;
  }

  analyze(): void {
    super.analyze();
    console.log(this.wb);
    const v = this.wb.Sheets['Sheet1']['A3'].v;
    console.log(v); 
  }
}