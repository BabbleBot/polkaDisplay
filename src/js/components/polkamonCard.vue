<template>
	<div class="polkamonCard" v-on:click="toggleDetails" :class="{ displayed: withDetails}">
		<div class="card" :class="[classes.propertiesDirection]">
			<img :src="image" alt="Polkamon">
			<div class="properties">
				<p class="property" v-for="(prop, propKey) in properties" :key="prop.name">
					<span class=name>{{propKey}}:</span>
					<span class="value">{{prop.value}}</span>
					<span class=probability v-if="prop.probability">{{prop.probability*100}}%</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		props: {
			polkamonId: {
				type: String,
				required: true,
			},
		},

		data() {
			return {
				boosterId: null,
				edition: null,

				"name": null,
				"image": null,
				"animation_url": null,
				"background_color": null,
				"description": null,

				"txHash": null,
				"randomNumber": null,
				"external_url": null,

				"properties": {},

				"withDetails": false,
				"error": null,
				"classes": {
					"propertiesDirection": 'vertical',
				}
			};
		},

		mounted() { this.getPolkamonInfo() },

		methods:{
			// Toggle the visibility of the polkamon's random properties
			'toggleDetails': function(){
				this.showDetails=!this.withDetails;
			},

			togglePropertiesDirection: function(){
				this.classes.propertiesDirection = this.classes.propertiesDirection == 'vertical' ? 'horizontal' : 'vertical';
			},

			// Fetch the polkamon's data
			'getPolkamonInfo': function(){
				axios({
					url: 'https://meta.polkamon.com/meta',
					method: 'get',
					params:{ id: this.polkamonId },
					dataType: 'json'
				})
				.then( res => {
					this.boosterId = res.data.boosterId;
					this.edition = res.data.edition;

					this.name = res.data.name;
					this.image = res.data.image;
					this.animation_url = res.data.animation_url;
					this.background_color = res.data.background_color;
					this.description = res.data.description;

					this.txHash = res.data.txHash;
					this.randomNumber = res.data.randomNumber;
					this.external_url = res.data.external_url;

					res.data.attributes.forEach(att => {
						this.properties[att.trait_type] = {
							'value': att.value,
							'probability': res.data.initialProbabilities[att.trait_type.toLowerCase()],
						}
					});
				})
				.catch(error => {
					this.error = "Impossible to get any information about this polkamon";
				});
			},
		}
  }
</script>

<style lang="scss" scoped>
 /**
 	flip card?
 */
$cardHeight: 300px;
$cardWidth: $cardHeight*4/5;
$propertiesBoxRatio: 50%;
$propertiesFontSize: ($cardHeight/450px)*1vw;

.polkamonCard {
	position: relative;
  background-color: transparent;
  width: $cardWidth;
  height: $cardHeight;
  perspective: 1000px;

	&.withDetails{
		.horizontal .properties {
			transform: translateX(+100%)
		}

		.vertical .properties {
			transform: translateY(+100%)
		}
	}

	.card {
		position: absolute;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s;
		transform-style: preserve-3d;

		img{
			position: absolute;
			left: 0;
			z-index:1;
			height: 100%;
			width: 100%;
			overflow: hidden;
			object-fit: cover;
			border-radius: 25px;
		}

		.properties {
			position: absolute;
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 10px 25px;
			-webkit-backface-visibility: hidden; /* Safari */
			backface-visibility: hidden;
			transition-duration: 0.5s;

			.property{
				display: flex;
				flex-flow: row wrap;
				justify-content: space-between;
				width: 100%;
				margin: 0;
				text-align: left;
				font-size: ($propertiesFontSize);

				.name{
					flex: 0 1 100%
				}
			}
		}

		/* Style the back side */
		.flip-card-back {
			background-color: dodgerblue;
			color: white;
			transform: rotateY(180deg);
		}
	}
}
</style>