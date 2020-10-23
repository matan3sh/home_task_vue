<template>
  <div class="card" style="width: 18rem;">
    <img
      class="card-img-top"
      src="https://lh3.googleusercontent.com/proxy/tNp6pJ-w5tdCxlQQQMnvBsC5VlsUqCoFDnBl_j5IVxrzAM6pxQFviBTgkrLLv-B2DdIlg-mKNaQ7nggNLTYR6LXQ4lRXxXiDsDD7mp8rt2zvT_OPYt0uqsxl0jUl_egGknz0joktN9oXumpJCcpQdAIJbVcRUnJxPmi5Z490k4xCsw0xexrs5C10K5Hz5JwydSUa3nw4LCmgDFRx"
      alt="device"
    />
    <div class="card-body">
      <h5 class="card-title">{{ device?.info?.name }}</h5>
      <p class="card-text">{{ device?.info?.location }}</p>
      <router-link
        :to="{ name: 'detailsPage', params: { id: device?.macAddress } }"
        class="btn btn-primary"
        >View</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    device: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style></style>
