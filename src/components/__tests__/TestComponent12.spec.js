import { shallowMount } from '@vue/test-utils'
import Component from '../TestComponent12.vue'

describe('chapter-12 練習題', () => { 
  test('為此元件寫一個快照測試', () => { 
    const wrapper = shallowMount(Component)
    expect(wrapper.element).toMatchSnapshot()
   })
 })