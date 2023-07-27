<script setup lang="ts">
  // import { useDark, useToggle } from '@vueuse/core'
  import BaseIcon from './BaseIcon.vue'

  const isDark = useDark()
  const toggleDark = useToggle(isDark)

  const iconName = computed(() =>
    isDark.value
      ? 'i-material-symbols-dark-mode-outline'
      : 'i-material-symbols-light-mode-outline'
  )

  const absolutePositionClass = computed(() =>
    isDark.value ? 'left-[1px]' : 'left-[20px]'
  )
</script>
<template>
  <BaseSwitch :default-checked="isDark" @toggle="toggleDark">
    <template #bg-icon>
      <BaseIcon
        class="absolute bg-gray-200 inline-block z-10"
        :class="absolutePositionClass"
        :name="iconName"
      />
    </template>
  </BaseSwitch>
</template>
<style scoped></style>
