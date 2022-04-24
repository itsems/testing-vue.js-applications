import { shallowMount } from '@vue/test-utils'
import Modal from '../Modal.vue'

describe('Modal', () => {
  test('emits on-close when button is click', () => {
    const wrapper = shallowMount(Modal)
    wrapper.find('button').trigger('click')
    expect(wrapper.emitted('close-modal')).toHaveLength(1)
  })
})