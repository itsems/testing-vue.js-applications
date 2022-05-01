import Vuex from 'vuex'
import { createLocalVue } from '@vue/test-utils'
import cloneDeep from 'lodash.clonedeep'
import flushPromises from 'flush-promises'
import storeConfig from '../store-config'
import { fetchListData } from '../../api/api'
import Router from 'vue-router'
import { sync } from 'vuex-router-sync'
import routerConfig from '../../router/router-config'

jest.mock('../../api/api')

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Router)

const store = new Vuex.Store(storeConfig)
const router = new Router(routerConfig)
sync(store, router)

function createItems () {
  const arr = new Array(22)
  return arr.fill().map((item, i) => ({ id: `a${i}`, name: 'item' }))
}

describe('store-config', () => {
  test('calling fetchListData with the type returns top 20 displayItems from displayItems getter', async () => {
    // expect.assertions(1)
    const items = createItems()
    const clonedStoreConfig = cloneDeep(storeConfig)
    const store = new Vuex.Store(clonedStoreConfig)
    const type = 'top'
    fetchListData.mockImplementation((calledType) => {
      return calledType === type
        ? Promise.resolve(items)
        : Promise.resolve()
    })
    store.dispatch('fetchListData', { type })
    await flushPromises()
    expect(store.getters.displayItems).toEqual(items.slice(0, 20))
  })
})
