import { shallowMount } from '@vue/test-utils'
import getVueJestConfig from 'vue-jest/lib/get-vue-jest-config'
import Form from '../Form.vue'

describe('Form', () => {
  test('emits form-submitted when form is submitted', () => {
    const wrapper = shallowMount(Form, {
      mocks: { axios: { post: jest.fn() }}
    })
    wrapper.find('button').trigger('submit')
    expect(wrapper.emitted('form-submitted')).toHaveLength(1)
  })

  test('sends post req with email on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, {
      mocks: {
        axios
      }
    })
    const input = wrapper.find('input[type="email"]')
    input.setValue('email@gmail.com')
    wrapper.find('button').trigger('submit')
    const url = 'http://demo7437963.mockable.io/validate'
    const expectedData = expect.objectContaining({
      email: 'email@gmail.com'
    })
    expect(axios.post).toHaveBeenCalledWith(url, expectedData)
  })

  test('sends post req with enterCompetition checkbox value on submit', () => {
    const axios = {
      post: jest.fn()
    }
    const wrapper = shallowMount(Form, {
      mocks: { axios }
    })
    const url = 'http://demo7437963.mockable.io/validate'
    wrapper.find('input[value="no"]').setChecked()
    wrapper.find('button').trigger('submit')

    expect(axios.post).toHaveBeenCalledWith(url, expect.objectContaining({
      enterCompetition: false
    }))
  })
})