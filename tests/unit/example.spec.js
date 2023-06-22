import { shallowMount } from '@vue/test-utils'
import FormularData from '@/components/FormularData.vue'

describe('FormularData.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(FormularData, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
