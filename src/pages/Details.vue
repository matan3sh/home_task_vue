<template>
  <device-details :device="device" v-if="device !== null" />
  <loader v-else />
</template>

<script>
import DeviceDetails from '@/components/DeviceDetails';
import Loader from '@/components/Loader';
import { fetch } from '@/services';

export default {
  components: { DeviceDetails, Loader },
  data() {
    return {
      device: null,
    };
  },
  async created() {
    const device = await fetch();
    this.device = device[0];
  },
};
</script>

<style></style>
