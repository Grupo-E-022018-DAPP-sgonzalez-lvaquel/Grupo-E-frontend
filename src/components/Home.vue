<template lang="html">
    <layout>
      <div class="flex-container">
        <div class="flex-row-container" v-for="auction in this.auctionList" :key="auction.title">
          <v-card>
            <v-img
              :src="auction.image"
              aspect-ratio="2.75"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ auction.title }}</h3>
                <router-link :to="{ name: 'DetalleApuesta', params: {subasta: auction} }">
                  <v-btn flat color="default">Detalle</v-btn>
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
    </layout>
</template>

<script>
export default {
  data () {
    return {
      auctionList: [
        { title: 'Subasta 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 4', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 5', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 6', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 7', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 8', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 9', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 10', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 11', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 12', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 13', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 14', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' },
        { title: 'Subasta 15', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in', price: 500, image: 'https://cdn.20m.es/img2/recortes/2011/03/05/11652-600-338.jpg' }
      ]
    }
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
