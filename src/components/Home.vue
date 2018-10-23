<template>
	<div class="w3-text-white">
    <top-bar home="true" voltar=""></top-bar>
    <GmapMap ref="mapRef"
      :center="{lat:-20.54, lng:-47.39}"
      :zoom="13"
      map-type-id="terrain"
      style="width: 100%; height: 100vh"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
	</div>
</template>

<script>

import Container from "./commons/Container.vue"
import TopBar from './commons/TopBar.vue'

export default {
	components:{Container,TopBar},
	name: 'Home',
	data () {
		return {
		  markers: [
		    {
          position: {
            lat: -20.568004,
            lng: -47.368246
          }

        },
        {
          position: {
            lat: -20.568004,
            lng: -47.402921
          }

        }
      ]
		}
	},
  created() {
    document.getElementById("body").classList.add("home");
  }
}
</script>

