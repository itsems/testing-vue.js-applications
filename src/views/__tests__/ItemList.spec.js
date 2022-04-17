import { shallowMount } from '@vue/test-utils'
import ItemList from '../ItemList.vue'
import Item from '../../components/Item.vue'

describe('ItemList.vue', () =>{
  test('render an Item for each item in window.items', () =>{
    window.items = [{},{},{}]
    const wrapper = shallowMount(ItemList)
    expect(wrapper.findAllComponents(Item)).toHaveLength(window.items.length)
  })
})