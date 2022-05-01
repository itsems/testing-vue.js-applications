import { shallowMount } from "@vue/test-utils";
import Component from "../PracticeComponent.vue";

describe("chapter-10 練習題", () => {
  test("元件是否有帶入 $route.path 呼叫 injectedMethod?", () => {
    const $route = { path: "/some/path" };
    const injectedMethod = jest.fn();

    shallowMount(Component, {
      mocks: {
        $route,
        injectedMethod,
      },
    });
    expect(injectedMethod).toHaveBeenCalledWith($route.path);
  });
});
