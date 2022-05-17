import { computed, onMounted, onUnmounted, ref } from "vue"
import moment from "moment";

export function useBreakpoints() {
  let windowWidth = ref(window.innerWidth)

  const onWidthChange = () => windowWidth.value = window.innerWidth
  onMounted(() => window.addEventListener('resize', onWidthChange))
  onUnmounted(() => window.removeEventListener('resize', onWidthChange))

  const type = computed(() => {
    if (windowWidth.value < 768) return 'xs'
    if (windowWidth.value >= 768 && windowWidth.value < 1100) return 'md'
    if (windowWidth.value >= 1100) return 'lg'
    return null; // This is an unreachable line, simply to keep eslint happy.
  })

  const width = computed(() => windowWidth.value)

  return { width, type }
}

export function useSplitString(name, number) {
  if (name.length > number) {
    return name.substring(number, length) + "...";
  }
  return name;
}

export function percentage(partialValue, totalValue) {
  const number = (100 * partialValue) / totalValue;
  return Math.round(number * 10) / 10
}

export function dateToToday(date) {
  return moment(date).fromNow();
}

export function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}