<template>
  <div class="polkamonList">
    <polkamon-card
      v-for="(polkamonID, index) in polkamonIDs" :key="`polkamon-${index}`"
      :polkamonId="polkamonID"
      class="polkamonList-item"
    ></polkamon-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        RawWalletID: "0x73Ae00E4D8FDa98D248b5591D2631Be84A492C5d",
        polkamonIDs: [],
        error: null,
      }
    },

    computed: {
      walletID: function(){
        return this.RawWalletID.toLowerCase();
      }
    },

    mounted() {
      this.getPolkamonList();
    },

    methods: {
      getPolkamonList: function(){
        axios({
					url: 'https://meta.polkamon.com/.netlify/functions/ids-get',
					method: 'get',
					params:{ 'address': this.walletID },
					dataType: 'json'
				})
				.then( res => {
          if(res.data.address != this.walletID) {
            this.error = "Something went wrong, data received for a different wallet.";
            return;
          }

          this.polkamonIDs = res.data.ids;
				})
				.catch(error => {
					this.error = "Impossible to get any information about this wallet";
				});
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "@css/colors.scss";

  .polkamonList{
    background-color: $color-background-secondary;
    padding: 30px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    /** Align last row to grid in flex */
    &::after {
      content: "";
      flex: auto;
    }

    .polkamonList-item{
      margin: 15px 10px;
    }
  }
</style>