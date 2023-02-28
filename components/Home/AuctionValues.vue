<template>
    <div class="p-3 bg-white shadow-card">
        <div class="flex flex-wrap justify-between items-center p-2 bg-grey-light mb-3" v-for="(value, index) in auctionValues" :key="index">
            <h6> {{ value.title }} </h6>
            <span class="text-xl font-extrabold text-grey"> {{ value.value | priceFormat }} </span>
        </div>
    </div>
</template>

<script>
import { useGetAuctionValues } from '@/composables/Auctions';
import { useHandleResponse } from '@/composables/Helpers';
export default {
  setup(props, {root}) {
    const { auctionValues, getAuctionValues } = useGetAuctionValues(root);
    const { startLoading, onError, closeLoading } = useHandleResponse();

    startLoading();
    getAuctionValues(null, null, onError, closeLoading);

    return {
        auctionValues
    }
  }
}
</script>