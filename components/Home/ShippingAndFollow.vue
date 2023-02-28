<template>
    <div class="send-to-purchaser p-3 bg-white shadow-card">
        <h6 class="text-2xl	font-bold mb-2">الشحن و المتابعة</h6>
        <swiper ref="mySwiper" :options="swipperOptions">
            <swiper-slide v-for="x in 4" :key="x">
                <div class="bg-shippingbg bg-cover bg-center bg-no-repeat p-4 border border-grey-light rounded-md	">
                    <table class="w-full">
                        <tr>
                            <td> الكمية</td>
                            <td class="text-secondary-orange text-center">100</td>
                        </tr>
                        <tr>
                            <td> الوزن</td>
                            <td class="text-secondary-orange text-center">20كج</td>
                        </tr>
                        <tr>
                            <td> الطول</td>
                            <td class="text-secondary-orange text-center">100سم</td>
                        </tr>
                        <tr>
                            <td> الارتفاع</td>
                            <td class="text-secondary-orange text-center">100سم</td>
                        </tr>
                        <tr>
                            <td> العرض</td>
                            <td class="text-secondary-orange text-center">100سم</td>
                        </tr>
                    </table>
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
              spaceBetween: 10
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10
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