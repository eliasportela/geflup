<template>
	<div class="w3-text-white">
    <top-bar>
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
          <GmapInfoWindow :opened="index === 0">
            <div class="w3-center bold blue">
              Clique para visualizar
            </div>
          </GmapInfoWindow>
        </GmapMarker>
      </GmapMap>
    </div>

    <div class="w3-modal" style="padding-top: 20%" :class="{'show':show}">
      <div class="w3-modal-content w3-round">
        <div class="w3-container w3-metro-dark-blue" style="padding: 12px" @click="show=false">
          <span class="bold">{{upas[indiceUpa].nome}}</span>
          <a href="javascript:" class="w3-right">
            <i class="fa fa-times"></i>
          </a>
        </div>
        <div class="w3-container w3-padding-16 w3-white">
          <div class="w3-center w3-border-bottom w3-margin-bottom">
            <div class="w3-padding-large w3-metro-dark-blue">
              <span class="w3-xlarge bold">{{upas[indiceUpa].qtd}}</span><br>
              <span class="w3-small">PESSOAS NA FILA</span>
            </div>
            <div class="w3-padding w3-border-left w3-border-right bold blue" @click="detalhesUpa(indiceUpa)">DETALHES</div>
          </div>
          <div class="w3-padding w3-cell-row w3-border-bottom">
            <div class="w3-cell w3-cell-middle" style="width: 15%">
              <i class="fa fa-map blue"></i>
            </div>
            <div class="w3-cell w3-cell-middle">
              {{upas[indiceUpa].endereco}}
            </div>
          </div>
          <div class="w3-padding w3-cell-row">
            <div class="w3-cell w3-cell-middle" style="width: 15%">
              <i class="fa fa-map blue"></i>
            </div>
            <div class="w3-cell">
              {{upas[indiceUpa].bairro}}
            </div>
          </div>
          <button class="w3-margin-top w3-button w3-block w3-metro-dark-blue">VISUALIZAR ROTA</button>
          <div class="w3-margin-top">Ultima atualização: 12:45</div>
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
          endereco: "R. Antônio Jose Oliveira",
          bairro: "Vila Nova",
          qtd: 50
        },
        {
          nome: "UPA Aeroporto",
          endereco: "R. Jeronimo Alves",
          bairro: "Aeroporto",
          qtd: 40
        },
        {
          nome: "Pronto Socorro",
          endereco: "R. Joaquim da Silva",
          bairro: "Centro",
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
            text: "UPA ANITA"
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
    },
    detalhesUpa(id){
      this.$router.push('/upa/' + id)
    }
  }
}
</script>
