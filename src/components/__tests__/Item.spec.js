import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'


describe('Item', () => {
  test('render item.url', () => {
    const item = {
      title: 'my title',
      url: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    });
    expect(wrapper.find('a').text()).toBe(item.title)
  })
})