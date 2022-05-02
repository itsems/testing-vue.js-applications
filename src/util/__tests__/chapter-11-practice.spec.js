import { shallowMount } from "@vue/test-utils";
import { testMixin, capitalize } from "../chapter-11-practice";

describe("chapter-11 練習題", () => {
  test("練習一：calls myMethod beforeMount", () => {

    const Component = {
      template: '<div></div>',
      methods: {
        myMethod: jest.fn()
      },
      mixins: [testMixin]
    }
    shallowMount(Component)
    expect(Component.methods.myMethod).toHaveBeenCalled();
  });
  test("練習二：寫一個能通過以下測試的 filter", () => {
    expect(capitalize("test")).toBe("Test");
  });
});
