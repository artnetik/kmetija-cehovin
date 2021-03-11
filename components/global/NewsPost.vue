<template>
  <div class="post">
    <Naslov>{{ title }}</Naslov>

    <div class="photo mt-2">
      <div class="date">
        <div class="day">
          {{ day }}
        </div>
        <div class="month">
          {{ month }}
        </div>
      </div>
      <PostImage :src="photo" :alt="title" />
    </div>
    <div class="text-container">
      <slot />
    </div>

    <div class="hr" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String
    },
    photo: {
      default: '',
      type: String
    },
    date: {
      default: '',
      type: String
    }
  },
  computed: {
    day () {
      const day = new Date(this.date)
      return day.toLocaleString('default', { day: 'numeric' })
    },
    month () {
      const month = new Date(this.date)
      return month.toLocaleString('default', { month: 'short' })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/styles/variables';

.post {
  padding: 1rem;
  margin: 0 auto;
  max-width: 1000px;

  &:first-of-type {
    margin-top: 3rem;
  }

  .responsive-margin {
    margin: 0;
  }
}

.photo {
  position: relative;
}

.date {
  position: absolute;
  padding: 10px;
  top: 0;
  right: 0;
  background-color: $secondary;
  color: $white;
  text-align: center;
  font-weight: bold;

  .day {
    font-family: 'Caveat Brush', cursive;
    font-weight: normal;
    font-size: 40px;
  }
}

.hr {
  height: 2px;
  background-color: rgba($secondary, 0.5);
  margin: 1rem auto;
}
</style>
