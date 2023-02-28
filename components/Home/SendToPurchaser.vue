<template>
    <div class="send-to-purchaser p-3 bg-white shadow-card">
        <h6 class="text-2xl	font-bold mb-2">إرسال رسالة إلي البائع</h6>
        <span class="block text-medium font-medium">
            يمكنك في وقت البث المباشر ارسال رسالة الى البائع للاستفسار 
        </span>
        <div class="flex gap-2 flex-wrow mt-4">
            <el-input v-model="message" class="send-to-purchaser__input" placeholder="اكتب سؤالك"></el-input>
            <button class="w-11 text-center rounded-full bg-gradient-to-r from-primary-lighten to-primary-darken">
                <img class="m-auto block" src="@/assets/imgs/send-icon.svg" alt="">
            </button>
        </div>
    </div>
</template>

<script>
import {ref} from '@nuxtjs/composition-api';

export default {
    setup(props, {root}) {
        const message = ref('');
        return {
            message
        }
    }
}
</script>