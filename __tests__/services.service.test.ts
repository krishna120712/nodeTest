import Services from "../src/services/service";
import ServiceContext from "../src/utils/serviceContext";
const servicecontext = new ServiceContext();
const service = new Services(servicecontext);
describe("Parse - service", () => {
  it("expect return post", async () => {
    let result = await service.post("JOHN0000MICHAEL0009994567", "v1");
    expect(JSON.stringify(result)).toBe(
      '{"firstName":"JOHN0000","lastName":"MICHAEL000","clientId":"9994567"}'
    );
  });
  it("expect return pathvariable", async () => {
    let result = await service.getPathVariable("/api/v2/parse");
    expect(JSON.stringify(result)).toBe('"v2"');
  });
});
