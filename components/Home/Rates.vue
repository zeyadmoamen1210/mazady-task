<template>
    <div class="p-3 bg-white shadow-card px-5">
        <div class="flex gap-2 flex-wrap justify-between items-center mb-3">
            <h6 class="text-xl font-bold">التقيمات</h6>
            <el-button type="text" >
                <span class="flex gap-1 items-center">
                    <img src="@/assets/imgs/add_black_24dp.svg" alt="">
                    <span class="font-bold text-primary-pink">
                        أضف تقيم
                    </span>
                </span>
            </el-button>
        </div>

        <div v-for="x in 5" :key="x" class="mb-4">
            <div  class="flex gap-2 flex-wrap items-center justify-between flex-col md:flex-row">
                <div class="flex gap-2 flex-wrap items-center">
                    <div>
                        <img src="@/assets/imgs/large-user-img.png" alt="">
                    </div>
                    <div>
                        <h6>Ahmed Reda</h6>
                        <p class="block mb-2">السيارة مطابقة للمواصفات و السعر الفوري خاص بها مناسب جدا بلا بخس</p>
                        <el-button type="text" class="p-0 ">
                            <span class="flex gap-1 items-center">
                                <span>
                                    <img src="@/assets/imgs/flag_black_24dp.svg" alt="">
                                </span>
                                <h6 class="font-semibold text-primary-pink">ابلاغ</h6>
                            </span>
                        </el-button>
                    </div>
                </div>
                <div class="flex flex-wrap flex-col items-center flex-1 md:flex-auto md:items-end justify-between gap-7">
                    <div class="relative">
                        <img src="@/assets/imgs/star-icon.svg" alt="">
                        <span class="font-semibold absolute left-1/2 top-1/2 transform-x-minus-50 px-0"> 4</span>
                    </div>
                    <h6 class="text-sm">
                        <span>{{ new Date() | dateFormat }} , </span>
                        <span>
                            {{ new Date() | timeFormat }}
                        </span>
                        
                    </h6>
                </div>
            </div>
            <el-divider v-if="x != 5"></el-divider>
        </div>
    </div>
</template>

<script>
export default {
    setup(props, {root}) {

    }
}
</script>