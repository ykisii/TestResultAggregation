import { IntegrationTest } from "./integration_test.ts"
import { SampleTest } from "./sample_test.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const it = new IntegrationTest(Deno.today);
  const test = new SampleTest('./files/sample_test.xlsx');
  it.startAnalyze(test);
}
