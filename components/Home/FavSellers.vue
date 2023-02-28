<template>
    <div class="p-3 bg-white shadow-card">
        <h6 class="text-xl	font-bold mb-3">البائعين المُفضلين</h6>
        <div>
            <div class="flex gap-3 flex-wrap flex-col">
                <div class="flex gap-2 items-center flex-wrap" v-for="(user, index) in favSellers" :key="index">
                    <div class="relative">
                        <img src="@/assets/imgs/user-2.png" alt="">
                        <img class="absolute bottom-0 left-0" src="@/assets/imgs/fav-icon.png" alt="">
                    </div>
                    <div>
                        <h6 class="font-bold text-medium"> {{ user.name }} </h6>
                        <span> {{ user.address }} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useGetFavSellers } from '@/composables/OurSellers';
import { useHandleResponse } from '@/composables/Helpers';
export default {
  setup(props, {root}) {
    const { favSellers, getFavSellers } = useGetFavSellers(root);
    const { startLoading, onError, closeLoading } = useHandleResponse();

    startLoading();
    getFavSellers(null, null, onError, closeLoading);

    return {
        favSellers
    }
  }
}
</script>