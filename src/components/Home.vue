<template>
	<div class="w3-text-white">
    <top-bar voltar="">
    </top-bar>
    <div>
      <GmapMap
         :center="{lat:-20.53, lng:-47.41}"
         :zoom="12.3"
         map-type-id="terrain"
         style="width: 100%; height: 100vh">
        <GmapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :icon="icon"
          :label="m.label"
          @click="showDetalhes(index)">
          <GmapInfoWindow content="testes">
            <div class="w3-center w3-text-black">
              Pacientes: <b>{{upas[index].qtd}}</b>
            </div>
          </GmapInfoWindow>
        </GmapMarker>
      </GmapMap>
    </div>

    <div class="w3-modal" style="padding-top: 40%" :class="{'show':show}">
      <div class="w3-modal-content w3-round">
        <div class="w3-container w3-metro-dark-blue" style="padding: 12px">
          <span>{{upas[indiceUpa].nome}}</span>
          <a href="javascript:" class="w3-right" @click="show=false">
            <i class="fa fa-times"></i>
          </a>
        </div>
        <div class="w3-container w3-padding-16 w3-white">
          {{upas[indiceUpa].qtd}}
        </div>
      </div>
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
		  indiceUpa: 0,
		  upas:[
        {
          nome: "UPA Anita",
          endereco: "R. Teste do teste",
          qtd: 50
        },
        {
          nome: "UPA Aeroporto",
          endereco: "R. Teste do teste",
          qtd: 40
        },
        {
          nome: "Pronto Socorro",
          endereco: "R. Teste do teste",
          qtd: 20
        }
      ],
		  show: false,
      icon: {
        url: "./static/imgs/placeholder.svg",
        size: { width: 60, height: 60, f: "px", b: "px" },
        scaledSize: { width: 60, height: 60, f: "px", b: "px" },
        labelOrigin: {x: 30, y: 75}
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
      this.show = true;
      this.indiceUpa = id;
    }
  }
}
</script>
<style>
  .show {
    display: block;
  }
</style>

