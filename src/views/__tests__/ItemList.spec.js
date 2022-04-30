import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import flushPromises from "flush-promises";
import ItemList from "../ItemList.vue";
import Item from "../../components/Item.vue";
// import { fetchListData } from '../../api/api'
import mergeWith from "lodash.mergewith";

const localVue = createLocalVue();
localVue.use(Vuex);

// jest.mock('../../api/api.js')

describe("ItemList.vue", () => {
  function createStore(overrides) {
    const defaultStoreConfig = {
      getters: {
        displayItems: jest.fn(),
      },
      actions: {
        fetchListData: jest.fn(() => Promise.resolve()),
      },
    };
    return new Vuex.Store(mergeWith(defaultStoreConfig, overrides));
  }

  function createWrapper(overrides) {
    const defaultMountingOptions = {
      mocks: {
        $bar: {
          start: jest.fn(),
          finish: jest.fn(),
          fail: jest.fn(),
        },
      },
      localVue,
      store: createStore(),
    };
    return shallowMount(ItemList, mergeWith(defaultMountingOptions, overrides));
  }

  test("renders an Item with data for each item in desplayItems", async () => {
    const items = [{}, {}, {}];
    const store = createStore({
      getters: {
        displayItems: () => items,
      },
    });
    const wrapper = createWrapper({ store });
    const Items = wrapper.findAllComponents(Item);
    expect(Items).toHaveLength(items.length);
    Items.wrappers.forEach((wrapper, i) => {
      expect(wrapper.vm.item).toBe(items[i]);
    });
  });

  test("calls $bar start on load", () => {
    const mocks = {
      $bar: {
        start: jest.fn(),
      },
    };
    createWrapper({ mocks });
    expect(mocks.$bar.start).toHaveBeenCalledTimes(1);
  });

  test("calls $bar.finish when load is successful", async () => {
    expect.assertions(1);
    const mocks = {
      $bar: {
        finish: jest.fn(),
      },
    };
    createWrapper({ mocks })
    await flushPromises();
    expect(mocks.$bar.finish).toHaveBeenCalled();
  });

  test('dispatches fetchListData with top', async ()=> {
    const store = createStore()
    store.dispatch = jest.fn(() => Promise.resolve())
    createWrapper({ store })

    await flushPromises
    expect(store.dispatch).toHaveBeenCalledWith('fetchListData', { type: 'top'})
  })

  test('calls $bar.fail when load unsuccessful', async () => {
    const store = createStore({
      actions: { fetchListData: jest.fn(() => Promise.reject())}
    })
    const mocks = {
      $bar: {
        fail: jest.fn()
      }
    }
    createWrapper({ mocks, store })
    await flushPromises()
    expect(mocks.$bar.fail).toHaveBeenCalled()
  })
});
