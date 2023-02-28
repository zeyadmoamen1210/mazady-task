<template>
    <div class="p-3 bg-white shadow-card">
        <h6 class="text-xl font-bold mb-3 mt-2">تفاصيل المنتج</h6>
        <table class="w-full even-border">
            <tr>
                <td class="title-td-classes"> العداد </td>
                <td class="value-td-classes"> 15126 </td>
            </tr>
            <tr>
                <td class="title-td-classes"> رقم الهيكل </td>
                <td class="value-td-classes"> 458896 </td>
            </tr>
            <tr>
                <td class="title-td-classes"> المنشأ </td>
                <td class="value-td-classes"> الصين </td>
            </tr>
            <tr>
                <td class="title-td-classes"> الحالة </td>
                <td class="value-td-classes"> للايجار </td>
            </tr>
            <tr>
                <td class="title-td-classes"> الماركة </td>
                <td class="value-td-classes"> تسلا </td>
            </tr>
            <tr>
                <td class="title-td-classes"> الموديل </td>
                <td class="value-td-classes"> تسلابرو </td>
            </tr>
            <tr>
                <td class="title-td-classes"> سنة الصنع </td>
                <td class="value-td-classes"> 2021 </td>
            </tr>
        </table>
        <div class="px-4 p-2">
            <h6 class="text-secondary font-medium text-medium">الوصف</h6>
            <p>
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص
            </p>
        </div>
    </div>
</template>

<script>
export default {
    setup() {

    }
}
</script>

<style lang="postcss" scoped>
.title-td-classes {
    @apply text-secondary md:w-48 border-l-2 border-secondary-light p-2 px-4;
}

.value-td-classes {
    @apply text-center p-2;
}
</style>