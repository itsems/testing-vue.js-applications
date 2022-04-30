import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import flushPromise from 'flush-promises'
import ItemList from '../ItemList.vue'
import Item from '../../components/Item.vue'
// import { fetchListData } from '../../api/api'

const localVue = createLocalVue()
localVue.use(Vuex)

// jest.mock('../../api/api.js')

describe('ItemList.vue', () =>{
  let storeOptions
  let store

  beforeEach(() => {
    storeOptions = {
      getters: {
        displayItems: jest.fn()
      },
      actions: {
        fetchListData: jest.fn(() => Promise.resolve())
      }
    }
    store = new Vuex.Store(storeOptions)
  })


  test('renders an Item with data for each item in window.items', async () => {
    // expect.assertions(4)
    const $bar = {
      start: () => {},
      finish: () => {}
    }
    const items = [{}, {}, {}]
    storeOptions.getters.displayItems.mockReturnValue(items)
    const wrapper = shallowMount(ItemList, {
      mocks: {$bar},
      localVue,
      store
    })

    const Items = wrapper.findAllComponents(Item)
    expect(Items).toHaveLength(items.length)

    Items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.vm.item).toBe(items[i])

    })
  })

  // test('renders an Item with data for each item', async () =>{
  //   expect.assertions(4)
  //   const $bar = {
  //     start: () => {},
  //     finish: () => {}
  //   }
  //   const items = [{id: 1}, {id:2}, {id:3}]
  //   fetchListData.mockResolvedValueOnce(items)
  //   const wrapper = shallowMount(ItemList, {mocks: {$bar}})
  //   await flushPromise()
  //   const Items = wrapper.findAllComponents(Item)
  //   expect(Items).toHaveLength(items.length)
  //   Items.wrappers.forEach((wrapper, i) => {
  //     expect(wrapper.vm.item).toBe(items[i])
  //   })
  // })

  // test('calls $bar start on load', () =>{
  //   const $bar = {
  //     start: jest.fn(),
  //     finish: () => {}
  //   }
  //   shallowMount(ItemList, {mocks: { $bar }})
  //   expect($bar.start).toHaveBeenCalledTimes(1);
  // })

  // test('calls $bar.finish when load is successful', async () => {
  //   expect.assertions(1)
  //   const $bar = {
  //     start: () => {},
  //     finish: jest.fn()
  //   }
  //   shallowMount(ItemList, {mocks: {$bar}})
  //   await flushPromises()

  //   expect($bar.finish).toHaveBeenCalled()
  // })

  // test('calls $bar.fail when load unsuccessful', async () => {
  //   expect.assertions(1)
  //   const $bar = {
  //     start: () => {},
  //     fail: jest.fn()
  //   }
  //   // fetchListData.mockRejectedValueOnce()
  //   fetchListData.mockImplementationOnce(() => Promise.reject())
  //   shallowMount(ItemList, {mocks: {$bar}})
  //   await flushPromises()
  //   expect ($bar.fail).toHaveBeenCalled()
  // })
})