import Routes from "../src/routes/routes";
import ServiceContext from "../src/utils/serviceContext";

describe("Parse - service", () => {
  it("expect return post", async () => {
    const servicecontext = new ServiceContext();
    const app: any = {
      route: jest.fn((name) => {
        let post = new Post();
        return post;
      }),
    };
    class Post {
      constructor() {}
      post(params: any) {}
    }

    const service = new Routes(app, servicecontext);
    // expect(JSON.stringify(result)).toBe();
  });
});
