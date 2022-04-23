import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar.vue', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  })
 
  test('initializes with 0% width', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('displays the bar when start is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
    await wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('hidden')
  })

  test('sets the bar to 100% width when finish is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(wrapper.element.style.width).toBe('100%')
  })
  
  test('hides the bar when finish is called', async () => {
    const wrapper = shallowMount(ProgressBar)
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(wrapper.classes()).toContain('hidden')
  })

  test('resets to 0% width when start is called', async () => {
    const wrapper = shallowMount(ProgressBar);
    await wrapper.vm.finish();
    await wrapper.vm.start();
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('increase width by 1% every 100ms after start call', async () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.start();
    await jest.runTimersToTime(100); // 過 100ms
    expect(wrapper.element.style.width).toBe('1%')
    await jest.runTimersToTime(900); // 再過 900ms = 1s
    expect(wrapper.element.style.width).toBe('10%')
    await jest.runTimersToTime(4000); // 再過 4000ms = 5s
    expect(wrapper.element.style.width).toBe('50%')
  })

  test('clears timer when finish is called', () => {
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue(123)
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start();
    wrapper.vm.finish()
    expect(window.clearInterval).toHaveBeenCalledWith(123)
  })

})


