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
    return this.#dispName;
  }

  moveToOrigin() {
    [this.#column, this.#row] = [this.#originColumn, this.#originRow];
    this.setDispName();
  }

  moveDown() {
    this.#row++;
    this.setDispName();
  }

  moveUp() {
    this.#row = this.#row <= 1 ? 1 : this.#row-1;
    this.setDispName();
  }

  moveRight() {
    this.#column = String.fromCharCode(this.#column.charCodeAt(0) + 1);
    this.setDispName();
  }

  moveLeft() {
    const column =  this.#column.charCodeAt(0) - 1;
    this.#column = column <= 'A'.charCodeAt(0)? 'A': String.fromCharCode(column);
    this.setDispName();
  }

  private setDispName() {
    this.#dispName = this.#column + this.#row;
  }
}
