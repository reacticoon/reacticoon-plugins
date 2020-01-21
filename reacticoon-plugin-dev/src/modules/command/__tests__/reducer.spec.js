import { handleCommandSuccess } from "../reducer";

describe("handleCommandSuccess", () => {
  it("SUCCESS", () => {
    const action = {
      data: {
        command: "COMMAND",
        id: "_"
      },
      response: {
        test: true
      }
    };
    const state = handleCommandSuccess({}, action);
    expect(state.toJS()).toEqual({
      COMMAND: {
        _: {
          test: true
        }
      }
    });
  });
});
