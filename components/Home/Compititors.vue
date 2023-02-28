<template>
    <div class="p-3 bg-white shadow-card">
        <h6 class="text-xl	font-bold mb-3">المتنافسون</h6>
        <div>
            <div class="flex justify-between gap-3 flex-wrap flex-col">
                <div class="flex justify-between gap-2 flex-wrap" v-for="(user, index) in compititorsList" :key="index">
                    <div class="flex gap-2 flex-wrap">
                        <div><img  src="@/assets/imgs/user-img.png" alt=""></div>
                        <div>
                            <h6 class="font-semibold"> {{ user.name }} </h6>
                            <span> {{ user.date | timeFormat }} </span>
                        </div>
                    </div>
                    <div>
                        <span class="text-base font-bold p-1 pr-3 pl-3 text-secondary rounded bg-secondary-light"> +{{ user.profit }} </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useGetCompititorsList } from '@/composables/Compititors';
import { useHandleResponse } from '@/composables/Helpers';
export default {
  setup(props, {root}) {
    const { compititorsList, getCompititorsList } = useGetCompititorsList(root);
    const { startLoading, onError, closeLoading } = useHandleResponse();

    startLoading();
    getCompititorsList(null, null, onError, closeLoading);

    return {
        compititorsList
    }
  }
}
</script>