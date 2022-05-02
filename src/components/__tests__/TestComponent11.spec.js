import { shallowMount } from "@vue/test-utils";
import Component from "../../components/TestComponent11.vue";


describe("chapter-11 練習題", () => {
  test("練習三：寫一個測試，檢查以下元件中把值轉為大寫的filter是否正常，應該包含一個test-setup.js", () => {
    const wrapper = shallowMount(Component, {
      propsData: { name: 'emma'}
    })
    expect(wrapper.text()).toContain('Emma')
  });
});
