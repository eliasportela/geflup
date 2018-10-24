<template>
	<div class="w3-top" :class="{'w3-metro-dark-blue':!home}">
		<div class="w3-bar" :class="{'w3-metro-dark-blue':menu}">
      <button class="w3-bar-item w3-button" @click="abrirMenu">
        <i class="fa" :class="fa"></i>
      </button>
      <router-link to="/" class="w3-bar-item w3-button title" v-show="!voltar"></router-link>
      <a class="w3-bar-item w3-button" v-show="voltar" @click="voltarHistory">
        <i class="fa fa-chevron-left"></i>
      </a>
		</div>
    <nav class="w3-sidebar w3-bar-block w3-card w3-white" v-show="menu">
		  <router-link :to="'/estados'" class="w3-bar-item" @click.native="abrirMenu">
        UPAS
		  </router-link>
      <router-link :to="'/voluntarios'" class="w3-bar-item"@click.native="abrirMenu">
        NGA
      </router-link>
      <router-link :to="'/sobre-nos'" class="w3-bar-item"@click.native="abrirMenu">
		  	FLUXO DE ATENDIMENTO
      </router-link>
      <router-link :to="'/login'" class="w3-bar-item"@click.native="abrirMenu">
        AJUDA
      </router-link>
      <router-link :to="'/login'" class="w3-bar-item"@click.native="abrirMenu">
		  	SOBRE
      </router-link>
		</nav>
	</div>
</template>

<script>
	export default {
    props: {
      voltar: String,
      home: String
    },
		data(){
			return{
				menu: false,
				fa: 'fa-bars'
			}
		},
		methods:{
			abrirMenu(){
				this.menu = !this.menu;
				this.menu === true ? this.fa = 'fa-times' : this.fa = 'fa-bars'
			},
			voltarHistory(){
        window.history.back();
      }
		}
	}
</script>


<style>
i{
	font-size: 1.5em;
}
.title {
	font-weight: bold;
  line-height: 26px;
}
.w3-bar {
  padding: 6px 8px;
}
</style>
