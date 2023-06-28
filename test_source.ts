export interface TestSource {
  open(source: string): void;
  analyze(): void;
  getData(): any;
}