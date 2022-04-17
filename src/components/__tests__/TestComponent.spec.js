import { shallowMount } from '@vue/test-utils'
import Parent from '../TestComponent.vue'
import Child from '../Child.vue'


describe('test props', () => {
  // chapter-3 練習 2
  test('test child props', () => {
    const wrapper = shallowMount(Parent);
    const child = wrapper.findComponent(Child);
    const asdf = 'asdf'
    expect(child.props().testProp).toBe(asdf)
  })
  // chapter-3 練習 2 解答
  // test('reders Child', () => {
  //   const wrapper = shallowMount(Parent);
  //   expect(wrapper.findComponent(Child).props().testProp).toBe('asdf')
  // })

  
  // chapter-3 練習 3
  test('a href link', () => {
    const link = 'https://google.com'
    const wrapper = shallowMount(Parent);
    expect(wrapper.findComponent('a').attributes().href).toBe(link)
  })
  // chapter-3 練習 3 解答
  // test('renders a tag with correct href', () => {
  //   const wrapper = shallowMount(Parent);
  //   expect(wrapper.findComponent('a').attributes().href).toBe('https://google.com')
  // })
  
  // chapter-3 練習 4
  test('p color', () => {
    const correctColor = 'tomato';
    const wrapper = shallowMount(Parent);
    expect(wrapper.findComponent('p').element.style.color).toBe(correctColor)
  })
  // chapter-3 練習 4 解答
  // test('renders p tag with correct style', () => {
  //   const wrapper = shallowMount(Parent);
  //   expect(wrapper.findComponent('p').element.style.color).toBe('tomato')
  // })

})