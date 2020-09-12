import { mocked } from "ts-jest/utils";
import Parse from "../src/process/parse";
import ServiceContext from "../src/utils/serviceContext";
const servicecontext = new ServiceContext();
const parse = new Parse(servicecontext);
describe("Process - parse", () => {
  it("expect return v1 parse", async () => {
    let result = await parse.processParse("JOHN0000MICHAEL0009994567", "v1");
    expect(JSON.stringify(result)).toBe(
      '{"firstName":"JOHN0000","lastName":"MICHAEL000","clientId":"9994567"}'
    );
  });
  it("expect return v2 parse", async () => {
    let result = await parse.processParse("JOHN0000MICHAEL0009994567", "v2");
    expect(JSON.stringify(result)).toBe(
      '{"firstName":"JOHN","lastName":"MICHAEL","clientId":"999-4567"}'
    );
  });
});
