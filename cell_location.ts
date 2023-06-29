export class CellLocation {
  //value locations of excel cell
  #row: number;
  #column: string;
  readonly #originRow: number;
  readonly #originColumn: string;
  #dispName: string;

  constructor(column: string, row:number) {
    this.#column = column;
    this.#row = row;
    this.#originColumn = this.#column;
    this.#originRow = this.#row;
    this.#dispName = this.#column + this.#row;
  }

  get dispName(): string {
    return this.dispName;
  }

  moveToOrigin() {
    [this.#column, this.#row] = [this.#originColumn, this.#originRow];
  }

  moveDown() {
    this.#row++;
    this.setDispName();
  }

  moveUp() {
    this.#row = this.#row <= 0 ? 0 : this.#row-1;
  }

  private setDispName() {
    this.#dispName = this.#column + this.#row;
  }
}
