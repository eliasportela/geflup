<template>
	<div class="w3-text-white">
    <top-bar home="true" voltar=""></top-bar>
    <div id="map"></div>
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
		}
	},
  beforeCreate() {
    document.getElementById("body").classList.add("home");
    
  }
}
</script>

