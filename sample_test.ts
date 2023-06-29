import { CellLocations } from "./cell_locations.ts";
import { XlsxFile } from "./mod.ts"

export class SampleTest extends XlsxFile {
  private locations: CellLocations;

  constructor(filepath: string) {
    super();
    super.open(filepath);
    this.locations = {no:'', type:'', date:'', result:''};
  }
  analyze(): void {
    super.analyze();
    console.log(this.wb);
    const v = this.wb.Sheets['Sheet1']['A3'].v;
    console.log(v); 
  }
  setLocations(locations: CellLocations) {
    this.locations = locations;
  }
}