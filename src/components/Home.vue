<template>
	<div class="w3-text-white">
    <top-bar voltar="">
    </top-bar>
    <div>
      <GmapMap
               :center="{lat:-20.55, lng:-47.41}"
               :zoom="12"
               map-type-id="terrain"
               style="width: 100%; height: 100vh">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          :icon="icon"
          :label="m.label"
          @click="showDetalhes(index)"
        />
      </GmapMap>
    </div>
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
      icon: {
        url: "./static/imgs/placeholder.svg",
        size: { width: 60, height: 60, f: "px", b: "px" },
        scaledSize: { width: 60, height: 60, f: "px", b: "px" },
        labelOrigin: {x: 25, y: -15}
      },
		  markers: [
		    {
		      position: {
            lat: -20.520566,
            lng: -47.436430
          },
          label: {
            text: "UPA ANITA",
            align: "right"
          }
        },
        {
          position: {
            lat: -20.573940,
            lng: -47.377560
          },
          label: {
            text: "UPA AEROPORTO",
          }
        },
        {
          position: {
            lat: -20.508871,
            lng: -47.399667
          },
          label: {
            text: "PRONTO SOCORRO"
          }
        },
      ]
		}
	},
  methods: {
    showDetalhes(id){
      alert(id);
    }
  }
}
</script>

