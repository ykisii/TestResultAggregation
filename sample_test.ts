import { XlsxFile } from "./mod.ts"

export class SampleTest extends XlsxFile {
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
}