import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'


describe('Item', () => {
  test('render Item', () => {
    const wrapper = shallowMount(Item);
    debugger;
    expect(wrapper.text()).toContain('item')
  })
  // 練習一：渲染 hello
  test('hello', () =>{
    const wrapper = shallowMount(Item);
    expect(wrapper.text()).toContain('Hello')  //! 大小寫 sensitive
  })
})