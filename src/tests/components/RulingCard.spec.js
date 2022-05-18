import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import RulingCard from '../../components/RulingCard.vue'

describe('RulingCard.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(RulingCard, {
      props: {
        name: "Kanye West",
        description: "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
        category: "entertainment",
        picture: "kanye.png",
        lastUpdated: "2020-03-10T23:08:57.892Z",
        votes: {
          "positive": 23,
          "negative": 36
        }
      }
    })
    expect(wrapper.text()).toContain('Kanye West')
    expect(wrapper.text()).toContain('Entertainment')
  })
})