<template>
    <div class="send-to-purchaser p-3 bg-white shadow-card">
        <div class="flex gap-1 items-center">
            <img src="@/assets/imgs/box.png" alt="">
            <h6 class="text-2xl	font-bold mb-0">منتجات متشابهه</h6>
        </div>

        <swiper ref="mySwiper" :options="swipperOptions">
            <swiper-slide v-for="x in 4" :key="x">
                <div>
                    <div class="relative">
                        <img class="w-full h-full max-h-30 rounded-md w-30" src="@/assets/imgs/car-bmw.jpg" alt="">
                        <el-button type="text" class="absolute bottom-2.5 right-minus-11 p-0 m-0">
                            <img src="@/assets/imgs/auction-icon.png" alt="">
                        </el-button>

                        <el-button type="text" class="absolute top-1 right-1 p-0 m-0">
                            <img src="@/assets/imgs/fav-icon.png" alt="">
                        </el-button>

                        <div class="absolute bottom-2 left-2">
                            <div class="flex gap-1">
                                <div class="relative">
                                    <img  src="@/assets/imgs/countdown-bg.svg" />
                                    <div class="absolute top-1/2 left-1/2 transform-x-minus-50 gap-0.5  text-white flex flex-col items-center justify-center">
                                        <h6 class="font-bold text-lg">50</h6>
                                        <span class="text-xxs font-thin	">دقيقة</span>
                                    </div>
                                </div>

                                <div class="relative">
                                    <img  src="@/assets/imgs/countdown-bg.svg" />
                                    <div class="absolute top-1/2 left-1/2 transform-x-minus-50 gap-0.5 text-white flex flex-col items-center justify-center">
                                        <h6 class="font-bold text-lg">12</h6>
                                        <span class="text-xxs font-thin	">ساعة</span>
                                    </div>
                                </div>

                                <div class="relative">
                                    <img  src="@/assets/imgs/countdown-bg.svg" />
                                    <div class="absolute top-1/2 left-1/2 transform-x-minus-50 gap-0.5 text-white flex flex-col items-center justify-center">
                                        <h6 class="font-bold text-lg">30</h6>
                                        <span class="text-xxs font-thin" >يوم</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <h6 class="font-semibold text-sm mt-2">
                        سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة
                    </h6>
                    <div class="flex gap-3 flex-wrap justify-between mt-2">
                        <div class="flex gap-2 items-center">
                            <img src="@/assets/imgs/money.svg" alt="">
                            <h6>بداية المزاد</h6>
                        </div>
                        <div>
                            <span class="font-bold text-lg text-primary-mauve"> {{ 200 | priceFormat }} </span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import {ref} from '@nuxtjs/composition-api';
export default {
    setup(props, {root}) {
        const swipperOptions = ref({
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            loop: false,
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
            breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        });

        return {
            swipperOptions
        }
    }
}
</script>