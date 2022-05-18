import { describe, it, expect } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import HomeView from '../../views/HomeView.vue';
import HeaderItem from '../../components/HeaderItem.vue'
import BannerTop from '../../components/BannerTop.vue'
import BannerBottom from '../../components/BannerBottom.vue'
import FooterItem from '../../components/FooterItem.vue'
import RulingItem from '../../components/RulingItem.vue'

describe('HomeView.vue', () => {
  it('Main components exists', async () => {
    const wrapper = shallowMount(HomeView)
    expect(wrapper.findComponent(HeaderItem).exists()).toBe(true)
    expect(wrapper.findComponent(BannerTop).exists()).toBe(true)
    expect(wrapper.findComponent(BannerBottom).exists()).toBe(true)
    expect(wrapper.findComponent(FooterItem).exists()).toBe(true)
    expect(wrapper.findComponent(RulingItem).exists()).toBe(true)
  })
})