import { shallowMount } from '@vue/test-utils'
import App from '../App.vue'
import Modal from '../components/Modal.vue'

describe('App.vue', () => {
  test('hides Modal when Modal emits close-modal', async () => {
    const wrapper = shallowMount(App)
    await wrapper.findComponent(Modal).vm.$emit('close-modal')
    expect(wrapper.findComponent(Modal).exists()).toBeFalsy()
  })
})
