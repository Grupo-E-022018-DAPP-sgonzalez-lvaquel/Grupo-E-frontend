<template lang="html">
  <v-content>
      <hr/>
      <v-layout>
        <v-flex xs8>
          <v-container>
            <v-layout>
              <v-flex xs7>
                <h1>{{ this.subasta.title }}</h1>
              </v-flex>
              <v-flex xs1>
                <span>Finaliza en: 19hs.</span>
              </v-flex>
            </v-layout>
          </v-container>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        </v-flex>
        <v-flex xs4 class="price-info">
          <div class="price-info-item">
            <span>Tramo actual - n° 15</span>
            <h2>${{ this.subasta.price }}</h2>
          </div>
          <hr/>
          <div class="price-info-item">
            <span>Tramo n°16
              <h3>$300</h3>
            </span>
            <v-btn color='black'>
              <label style="color: white">Realizar Oferta</label>
            </v-btn>
          </div>
          <hr/>
          <div class="price-info-item">
            <h3>Cantidad de postores</h3>
            <h5>250 postores en la subasta</h5>
          </div>
          <hr>
          <div>
            <h3>Avance de la subasta</h3>
            <h5>user1 Tramo 14 16/10/2018 11:00hs.</h5>
            <h5>user2 Tramo 14 16/10/2018 11:00hs.</h5>
            <h5>user3 Tramo 14 16/10/2018 11:00hs.</h5>
            <h5>user4 Tramo 14 16/10/2018 11:00hs.</h5>
            <h5>user5 Tramo 14 16/10/2018 11:00hs.</h5>
          </div>
        </v-flex>
      </v-layout>
  </v-content>
</template>

<script>
export default {
  props: {
    subasta: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="css">
</style>
