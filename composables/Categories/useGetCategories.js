import { ref } from '@nuxtjs/composition-api';
export default function(context) {
    if(!context) console.error("Context is required!");
    const categories = ref([]);

    async function getCategories(filters = {}, onSuccess = null, onError = null, onLoadingFinished = null) {
        try {
            const res = await context.$axios.get(`/get_all_cats`);
            categories.value = res.data?.data?.categories;
            onSuccess ? onSuccess() : null;
        } catch(err) {
            onError ? onError(err) : null;
        } finally {
            onLoadingFinished ? onLoadingFinished() : null;
        }
    }

    return {
        categories,
        getCategories
    }
}