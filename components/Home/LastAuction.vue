<template>
    <div class="p-3 bg-white shadow-card">
        <div class="flex justify-between text-white bg-dark p-2 rounded">
            <h6>تاريخ البث</h6>
            <span class="text-bold text-lg"> {{ lastAuction.livedAt | dateFormat }} </span>
        </div>
        <div class="mt-2 flex gap-2 flex-wrap">
            <div class="flex flex-1 flex-col items-center gap-1 text-white bg-tertiary p-2 pt-3 pb-3 rounded">
                <h6>القيمة الحالية للمزاد</h6>
                <span class="text-bold text-3xl	"> {{ lastAuction.currentValue | priceFormat }} </span>
            </div>
            <div class="flex flex-1 items-center flex-col gap-1 text-tertiary bg-tertiary-light p-2 pt-3 pb-3 rounded">
                <h6>القيمة الحالية بعد الضريبة</h6>
                <span class="text-bold text-3xl	"> {{ lastAuction.valueAfterAuction | priceFormat }} </span>
            </div>
        </div>
    </div>  
</template>

<script>
import { useGetLastAuction } from '@/composables/Auctions';
import { useHandleResponse } from '@/composables/Helpers';
export default {
  setup(props, {root}) {
    const { lastAuction, getLastAuction } = useGetLastAuction(root);
    const { startLoading, onError, closeLoading } = useHandleResponse();

    startLoading();
    getLastAuction(null, null, onError, closeLoading);

    return {
      lastAuction
    }
  }
}
</script>