import { mount } from '@vue/test-utils'
import { titleMixin } from '../mixins'

describe('titleMixion', () => { 
  test('set document.title using result of title if it is a function', () => {
    const Component = {
      render() {},
      data () {
        return {
          titleValue: 'another asdf title'
        }
      },
      title(){
        return this.titleValue
      },
      mixins: [titleMixin]
    }
    mount(Component)
    expect(document.title).toBe('Vue HN | another asdf title')
  })

  test('does not set document.title if title property does not exist', () => {
    document.title = 'some title'
    const Component = {
      render() {},
      mixins: [titleMixin]
    }
    mount(Component)
    expect(document.title).toBe('some title')
  })
  
 })