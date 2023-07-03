import { CellLocation } from "./cell_location.ts";
import { IntegrationTest } from "./integration_test.ts";
import { XlsxFile } from "./mod.ts"

export type LocationsFormat = {
    sheetName: string,
    no: CellLocation,
    type: CellLocation,
    result: CellLocation
};

export class SampleTest extends XlsxFile {
  //private locations: CellLocation;
  #locations: Array<LocationsFormat>;

  set locations(locations: Array<LocationsFormat>) {
    this.#locations = structuredClone(locations);
  }

  constructor(testName: string, filepath: string) {
    super();
    super.open(filepath);
    this.#locations = new Array<LocationsFormat>;
  }

  analyze(): void {
    super.analyze();
  }

  getData() {
    super.getData();

  }
}