import { CellLocation } from "./cell_location.ts";
import { XlsxFile } from "./mod.ts"

export class SampleTest extends XlsxFile {
  //private locations: CellLocation;

  constructor(filepath: string) {
    super();
    super.open(filepath);
  }
  analyze(): void {
    super.analyze();
    console.log(this.wb);
    const v = this.wb.Sheets['Sheet1']['A3'].v;
    console.log(v); 
  }
  /*
  setLocations(locations: CellLocation) {
    this.locations = locations;
  }
  */
}