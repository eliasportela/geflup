<template>
	<div class="w3-text-teal">
    <top-bar>
    </top-bar>
		<container>
      <vue-chart
        :data="chartData"
        :options="{scales: {yAxes: [{ticks: {beginAtZero: true}}]}}"
        :update-config="{duration: 800, easing: 'easeOutBounce'}"
        type="bar"
      />
		</container>
	</div>
</template>

<script>
import Container from '../components/commons/Container.vue'
import TopBar from './commons/TopBar.vue';

export default {
	components:{TopBar,Container},
		data(){
			return{
        chartData: {
          labels: ['January', 'February'],
          datasets: [
            {
              label: 'GitHub Commits',
              backgroundColor: '#f87979',
              data: [40, 20]
            }
          ]
        }
			}
		},
		methods:{

		}
	}
</script>

<style scoped>


</style>
