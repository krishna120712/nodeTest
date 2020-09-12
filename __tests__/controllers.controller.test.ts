import ParseV1 from "../src/controllers/controller";
import ServiceContext from "../src/utils/serviceContext";
// const mockRequest = {
//   body: {
//     firstName: "J",
//     lastName: "Doe",
//     email: "jdoe@abc123.com",
//     password: "Abcd1234",
//     passwordConfirm: "Abcd1234",
//     company: "ABC Inc.",
//   },
// } as unknown as Request;
// const mockRequest = () => {
//   const res = {};
//   return res;
// };
// const mockResponse = () => {
//   const res = {};
//   res.end = jest.fn().mockReturnValue(res);
//   res.json = jest.fn().mockReturnValue(res);
//   return res;
// };

describe("SoundPlayerConsumer", () => {
  it("We can check if the consumer called the class constructor", async () => {
    const se = new ServiceContext();
    const ParseV2 = new ParseV1(se);
    const req: any = {
      get: jest.fn((name) => {
        if (name === 'content-type') return 'text/plain';
      })
    };
    const res: any = {
      json: jest.fn().mockReturnValue('{"firstName":"JOHN0000","lastName":"MICHAEL000","clientId":"9994567"}')
    }
    let result = await ParseV2.post(req , res);
    expect(result).toBe(
      '{"firstName":"JOHN0000","lastName":"MICHAEL000","clientId":"9994567"}'
    );
  });
});
