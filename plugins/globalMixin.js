import Vue from 'vue';

Vue.mixin({
    filters: {
        dateFormat(val) {
            return new Date(val).toLocaleDateString();
        },
        priceFormat(val) {
            const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });
            return formatter.format(val)
        },
        timeFormat(val) {
            return new Date(val).toLocaleTimeString();
        },
        upperCase(val) {
            return val.toUpperCase()
        }
    }
})