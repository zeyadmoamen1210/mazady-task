<template>
    <div class="p-3 bg-white shadow-card">
        <h6 class="text-xl	font-bold mb-3">المزادات المُفضلة</h6>
        <div>
            <div class="mb-4" v-for="(auction, index) in favAuctions" :key="index">
                <div class="flex gap-3 flex-wrap justify-between">
                    <div class="relative rounded-sm lg:w-36 h-28" style="">
                        <img class="w-full h-full" src="@/assets/imgs/auction-img.png" alt="">
                        <el-button type="text" class="absolute top-1.5 right-1.5 p-0 m-0">
                            <img src="@/assets/imgs/fav-icon.png" alt="">
                        </el-button>
                        <el-button type="text" class="absolute top-1.5 left-1.5 p-0 m-0">
                            <img src="@/assets/imgs/live-now.png" alt="">
                        </el-button>
                        <el-button type="text" class="absolute bottom-1.5 right-minus-11 p-0 m-0">
                            <img src="@/assets/imgs/auction-icon.png" alt="">
                        </el-button>
                    </div>
                    <div class="lg:flex-1">
                        {{ auction.description }}

                        <div class="flex gap-3 flex-wrap justify-between">
                            <div class="flex gap-2 items-center">
                                <img src="@/assets/imgs/money.svg" alt="">
                                <h6>اعلى سعر</h6>
                            </div>
                            <div>
                                <span class="font-bold text-lg text-primary-mauve"> {{ auction.price | priceFormat  }} </span>
                            </div>
                        </div>

                    </div>

                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
import { useGetFavAuctions } from '@/composables/Auctions';
import { useHandleResponse } from '@/composables/Helpers';
export default {
  setup(props, {root}) {
    const { favAuctions, getFavAuctions } = useGetFavAuctions(root);
    const { startLoading, onError, closeLoading } = useHandleResponse();

    startLoading();
    getFavAuctions(null, null, onError, closeLoading);

    return {
        favAuctions
    }
  }
}
</script>