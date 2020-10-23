<template>
  <div>
    <device-item
      :device="device"
      v-for="device in devices"
      :key="device.macAddress"
    />
  </div>
</template>

<script>
import DeviceItem from '@/components/DeviceItem';

export default {
  components: { DeviceItem },
  props: {
    devices: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
}
</style>
