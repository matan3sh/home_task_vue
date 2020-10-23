<template>
  <device-list v-if="devices.length > 0" :devices="devices" />
  <loader v-else />
</template>

<script>
import DeviceList from '@/components/DeviceList';
import Loader from '@/components/Loader';
import { fetch } from '@/services';

export default {
  components: { DeviceList, Loader },
  data() {
    return {
      devices: [],
    };
  },
  async created() {
    const devices = await fetch();
    this.devices = devices;
  },
};
</script>

<style></style>
