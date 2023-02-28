<template>
  <div class="grid grid-cols-12 gap-2 p-3 container mx-auto">
      <div class="col-span-12 sm:col-span-8 ">
        <HomeHeaderGalary class="mb-5" />
        <HomeSendToPurchaser class="mb-5" />
        <HomeAuctionDetails class="mb-5"></HomeAuctionDetails>
        <HomeProductDetails class="mb-5"></HomeProductDetails>
        <HomeShippingAndFollow class="mb-5"></HomeShippingAndFollow>
        <HomeRates class="mb-5"></HomeRates>
        <HomeSimilarProducts class="mb-5"></HomeSimilarProducts>
      </div>
      <div class="sm:col-span-4 col-span-12">
        <HomeLastAuction></HomeLastAuction>
        <HomeCompititors class="mb-5"></HomeCompititors>
        <HomeAuctionValues class="mb-5"></HomeAuctionValues>
        <HomeFavAuction class="mb-5"></HomeFavAuction>
        <HomeFavSellers class="mb-5"></HomeFavSellers>
      </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  setup(props, {root}) {
    
  }
}
</script>
