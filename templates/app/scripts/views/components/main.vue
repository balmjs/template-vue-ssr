<template>
  <div class="main">
    <div v-if="list.length" class="main-wrapper">
      <my-list v-for="item in list" :key="item.id" :item="item"></my-list>
    </div>
    <p v-else>No Body</p>
  </div>
</template>

<script>
import MyList from '@/views/components/list';
import { mapActions } from 'vuex';

export default {
  components: {
    MyList
  },
  data() {
    return {
      list: []
    };
  },
  beforeMount() {
    console.log('fetch data by client');
    this.getList().then(res => {
      this.list = res;
    });
  },
  // NOTE: for SPA
  // mounted() {
  //   console.log('fetch data by client');
  //   this.$store.dispatch('getNav');
  // },
  // NOTE: for SSR
  asyncData({ store }) {
    console.log('fetch data by server');
    return store.dispatch('getNav');
  },
  methods: {
    ...mapActions(['getList'])
  }
};
</script>

<style lang="less">
.main {
  max-width: 960px;
  margin: 0 auto;
  overflow: hidden;
  .main-wrapper {
    margin-top: 5.6rem;
    border-radius: 2px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
}
</style>
