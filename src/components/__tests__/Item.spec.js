import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'


describe('Item', () => {
  test('render item.url', () => {
    const item = {
      url: 10
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    });
    expect(wrapper.text()).toContain(item.url)
  })
  test('render item.title', () => {
    const item = {
      title: 'my title',
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    });
    expect(wrapper.find('a').text()).toBe(item.title)
  })
  test('renders a link to item.url with item.title as text', () => {
    const item = {
      url: 'https://medium.com/itsems-frontend',
      title: 'My Medium'
    }

    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    const a = wrapper.find('a')
    expect(a.text()).toBe(item.title)
    expect(a.attributes().href).toBe(item.url)

  })
})