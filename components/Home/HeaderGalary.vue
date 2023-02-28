<template>
    <div class="flex gap-2">
        <div class="flex gap-2 flex-col items-center justify-start">
            <el-button type="text" class="p-0">
                <i class="text-lg font-bold el-icon-arrow-up"></i>
            </el-button>
            <div v-for="x in 5" :key="x">
                <img class="cursor-pointer" src="@/assets/imgs/70782355_964775460532132_2751270695932526592_n.png" alt="">
            </div>
            <el-button type="text" class="p-0">
                <i class="text-lg font-bold el-icon-arrow-down"></i>
            </el-button>
        </div>    
        
        <div  class="md:flex-1 bg-white shadow-card">
            <div>
                <img class="max-h-96 w-full rounded-md" src="@/assets/imgs/car-bmw.jpg" alt="">
            </div>   
            <div class="px-3 pb-3">
                <div class="py-3 px-2 flex flex-wrap gap-x-4 items-center pb-0">
                    <div class="flex gap-1 flex-wrap items-center">
                        <div>
                            <img src="@/assets/imgs/seller.png" alt="">
                        </div>
                        <div>
                            <h6>زياد مؤمن</h6>
                            <span>+966598398</span>
                        </div>
                    </div>
                    <div class="flex gap-1">
                        <img v-for="x in 3" src="@/assets/imgs/yellow-star.svg" alt="">
                        <img v-for="x in 5 - 3" src="@/assets/imgs/grey-star.svg" alt="">
                    </div>
                </div>
                <div>
                    <h6 class="text-dark font-semibold mt-2">شراء مجموعة من السيارات من موديلات1990</h6>
                    <span class="mb-2">code 1234</span>

                    <div class="mt-2 flex flex-wrap items-center justify-between gap-2">
                        <div class="flex flex-wrap gap-3">
                            <span class="text-primary bg-primary-light px-3 py-1 rounded-md	">+1000</span>
                            <span class="text-primary bg-primary-light px-3 py-1 rounded-md	">+1010</span>
                            <span class="text-primary bg-primary-light px-3 py-1 rounded-md	">+1020</span>
                        </div>
                        <div class="flex gap-2 items-center">
                            <div>
                                <el-input placeholder="اكتب المبلغ"></el-input>
                            </div>
                            <div>
                                <button class="rounded px-5 py-1.5 text-center text-white font-lg bg-gradient-to-r from-primary-lighten to-primary-darken">
                                    تأكيد
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import {ref} from '@nuxtjs/composition-api';    
export default {
    setup() {
        

    }
}
</script>


<style lang="scss" scoped>

</style>