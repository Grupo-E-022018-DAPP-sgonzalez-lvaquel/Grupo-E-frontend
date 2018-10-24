<template lang="html" v-if="this.showhtml">
  <v-content class="content">
    <div class="flex-container">
      <div class="flex-row-container" v-for="auction in this.getSubastas" :key="auction.title">
        <v-card>
          <v-img
            :src="auction.image"
            aspect-ratio="2.75"
          ></v-img>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ auction.title }}</h3>
              <router-link :to="{ name: 'DetalleApuesta', params: {subasta: auction} }" class="router">
                <v-btn color="grey darken-4" style="color: #fff">Detalle</v-btn>
              </router-link>
              <div>{{ auction.description }}</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn flat color="orange">Apostar</v-btn>
            <v-label>Última apuesta
              <v-label>${{ auction.price }}</v-label>
            </v-label>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-content>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      showhtml: false
    }
  },
  computed: {
    ...mapGetters(['getSubastas'])
  },
  methods: {
  },
  created () {
    console.log(this.getSubastas)
    this.showhtml = true
  }
}
</script>
<style scoped>
  .flex-container {
    display: flex;
    position: absolute;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  .flex-row-container {
    display: flex;
    position: relative;
    width: 25%;
    justify-content:space-between;
    margin-bottom: 30px;
    margin-right: 10px;
  }
</style>
