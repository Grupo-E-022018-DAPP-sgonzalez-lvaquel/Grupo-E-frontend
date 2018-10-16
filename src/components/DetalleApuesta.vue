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
        <v-toolbar-side-icon @click.stop="drawer = !drawer" style="bottom: 15px"><span class="lnr lnr-menu icon"></span></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="lnr lnr-magnifier icon"
        label="Buscar"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <h3>Usuario</h3>
      <v-btn icon>
        <span class="lnr lnr-alarm icon"></span>
      </v-btn>
      <v-btn icon>
        <span class="lnr lnr-user icon"></span>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <hr/>
        <v-layout>
          <v-flex xs8>
            <v-container>
              <v-layout>
                <v-flex xs7>
                  <h1>Subasta 1</h1>
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
              <h2>$280</h2>
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
  name: 'DetalleApuesta',
  props: {
    source: {
      type: String
    },
    subasta: {
      type: Object
    }
  },
  data () {
    return {
      dialog: false,
      drawer: null,
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
    console.log(this.subasta.title)
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
