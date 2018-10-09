<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-layout
            v-if="item.heading"
            :key="item.heading"
            row
            align-center
          >
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
            >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="grey darken-4"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">
          <img src="../../static/img/icon_subasta_toolbar.png" class="logo-toolbar">
        </span>
        <v-toolbar-side-icon @click.stop="drawer = !drawer" style="bottom: 15px"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <h3>{{ this.user }}</h3>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
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
                  <div>{{ auction.description }}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Bet</v-btn>
                <v-label>Última apuesta
                  <v-label>${{ auction.price }}</v-label>
                </v-label>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </v-container>
    </v-content>
    <v-btn
      fab
      bottom
      right
      color="grey darken-4"
      dark
      fixed
      @click="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title
          class="grey lighten-4 py-4 title"
        >
          Nueva Subasta
        </v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-avatar size="40px" class="mr-3">
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  placeholder="Name"
                ></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                prepend-icon="business"
                placeholder="Company"
              ></v-text-field>
            </v-flex>
            <v-flex xs6>
              <v-text-field
                placeholder="Job title"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="mail"
                placeholder="Email"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                type="tel"
                prepend-icon="phone"
                placeholder="(000) 000 - 0000"
                mask="phone"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-icon="notes"
                placeholder="Notes"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-btn flat color="primary">More</v-btn>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'Home',
  props: {
    source: {
      type: String
    },
    user: {
      type: String,
      required: false,
      default: 'Usuario'
    }
  },
  data () {
    return {
      dialog: false,
      drawer: null,
      auctionList: [
        { title: 'Subasta 1', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 2', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 3', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 4', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 5', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 6', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 7', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 8', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 9', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' },
        { title: 'Subasta 10', description: 'descripcion de la subasta', price: 500, image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg' }
      ],
      items: [
        { icon: 'contacts', text: 'Contacts' },
        { icon: 'history', text: 'Frequently contacted' },
        { icon: 'content_copy', text: 'Duplicates' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'add', text: 'Create label' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' }
          ]
        },
        { icon: 'settings', text: 'Settings' },
        { icon: 'chat_bubble', text: 'Send feedback' },
        { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'App downloads' },
        { icon: 'keyboard', text: 'Go to the old version' }
      ]
    }
  },
  created () {
    console.log(this.user)
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
    padding-top: 500px;
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
