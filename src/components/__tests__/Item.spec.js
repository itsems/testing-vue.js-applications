import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'


describe('Item', () => {
  test('renders the hostname', () => {
    const item = {
      url: 'https://some-url.com/with-paths'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    });
    expect(wrapper.text()).toContain('some-url.com')
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

  // chapter-3 練習 1
  test('render item.score & item.author', () => {
    const item = {
      score: 50,
      author: 'emma',
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.score)
    expect(wrapper.text()).toContain(item.author)
  })

  test('renders the time since the last post', () =>{
    const dateNow = jest.spyOn(Date, 'now')
    const dateNowTime = new Date('2018')
    dateNow.mockImplementation(() => dateNowTime)

    const item = {
      time: (dateNowTime / 1000) - 600 //10分鐘前的UNIX
    }
    const wrapper = shallowMount(Item, {
      propsData: {
        item
      }
    })
    dateNow.mockRestore()
    expect(wrapper.text()).toContain('10 minutes ago')
  })

})