import { IntegrationJob } from ".";

export class ExampleJob implements IntegrationJob {
  constructor() {}

  async runJob(payload: any) {
    console.log("Example:runJob", payload);
  }
}
