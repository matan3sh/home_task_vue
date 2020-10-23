<template>
  <router-link :to="{ name: 'homePage' }" class="btn btn-outline-primary m-4"
    >Back to Home</router-link
  >
  <div class="detailsPage">
    <div class="details">
      <div class="header">
        <div>
          <h5><span>Name:</span> {{ device?.info?.name }}</h5>
          <h5><span>Location:</span> {{ device?.info?.location }}</h5>
          <h5><span>Address:</span> {{ device?.info?.coords?.address }}</h5>
          <h5>
            <span>Coords:</span> {{ device?.info?.coords?.coords?.lon }},
            {{ device?.info?.coords?.coords?.lat }}
          </h5>
        </div>
      </div>
      <div class="footer">
        <h5 class="badge badge-primary">{{ device?.macAddress }}</h5>
        <h5 class="badge badge-info">{{ device?.lastData?.tz }}</h5>
        <h5 class="badge badge-warning">{{ device?.lastData?.date }}</h5>
      </div>
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

<style scoped>
.detailsPage {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.details {
  display: flex;
  flex-direction: column;
}
.details .footer h5 {
  margin: 5px;
}
.header div h5 {
  font-size: 14px;
}
.header div h5 span {
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 900;
}
</style>
