import { shallowMount } from '@vue/test-utils'
import Form from '../Form.vue'

describe('Form', () => {
  test('emits form-submitted when form is submitted', () => {
    const wrapper = shallowMount(Form)
    wrapper.find('button').trigger('submit')
    expect(wrapper.emitted('form-submitted')).toHaveLength(1)
  })
})