import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'


describe('Item', () => {
  test('render Item', () => {
    const wrapper = shallowMount(Item);
    debugger;
    expect(wrapper.text()).toContain('item')
  })
})