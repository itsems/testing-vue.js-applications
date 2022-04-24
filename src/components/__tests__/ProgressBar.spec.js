import { shallowMount } from '@vue/test-utils'
import ProgressBar from '../ProgressBar.vue'

describe('ProgressBar.vue', () => {

  beforeEach(() => {
    jest.useFakeTimers('legacy');
  })
 
  test('style 一開始是0%', () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('start() call 之後 bar 要出現', async () => {
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).toContain('hidden')
    await wrapper.vm.start()
    expect(wrapper.classes()).not.toContain('hidden')
  })

  test('finish() call 之後 bar 的寬度變成 100', async () => {
    const wrapper = shallowMount(ProgressBar)
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(wrapper.element.style.width).toBe('100%')
  })
  
  test('finish() call 之後 bar 隱藏', async () => {
    const wrapper = shallowMount(ProgressBar)
    await wrapper.vm.start()
    await wrapper.vm.finish()
    expect(wrapper.classes()).toContain('hidden')
  })

  test('start() call 的時候 width 要 reset 至 0', async () => {
    const wrapper = shallowMount(ProgressBar);
    await wrapper.vm.finish();
    await wrapper.vm.start();
    expect(wrapper.element.style.width).toBe('0%')
  })

  test('start() call 之後每100ms增加 width 1%', async () => {
    const wrapper = shallowMount(ProgressBar);
    wrapper.vm.start();
    // runTimerstoTime() 用法已棄用
    await jest.advanceTimersByTime(100); // 過 100ms
    expect(wrapper.element.style.width).toBe('1%')
    await jest.advanceTimersByTime(900); // 再過 900ms = 1s
    expect(wrapper.element.style.width).toBe('10%')
    await jest.advanceTimersByTime(4000); // 再過 4000ms = 5s
    expect(wrapper.element.style.width).toBe('50%')
  })

  test('finish() call 之後清掉 timer', () => {
    jest.spyOn(window, 'clearInterval')
    setInterval.mockReturnValue(123)
    const wrapper = shallowMount(ProgressBar)
    wrapper.vm.start()
    wrapper.vm.finish()
    expect(window.clearInterval).toHaveBeenCalledWith(123)
  })

  test('練習：fail被call之後bar多了error class', async () => {
    expect.assertions(2)
    const wrapper = shallowMount(ProgressBar)
    expect(wrapper.classes()).not.toContain('error')
    await wrapper.vm.fail();
    expect(wrapper.classes()).toContain('error')
  })

  test('練習：fail call之後，width是不是100?', async () => {
    const wrapper = shallowMount(ProgressBar)
    await wrapper.vm.fail()
    expect(wrapper.element.style.width).toBe('100%')
  })



})


