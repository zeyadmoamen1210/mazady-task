import { ref } from '@nuxtjs/composition-api';
export default function(context) {
    if(!context) console.error("Context is required!");
    const properties = ref([]);

    async function getSubCategoryProperties(subCatId, filters = {}, onSuccess = null, onError = null, onLoadingFinished = null) {
        if(!subCatId) console.error("subCatId is required");
        try {
            const res = await context.$axios.get(`/properties`, {params: {cat: subCatId}});
            properties.value = res.data?.data;
            onSuccess ? onSuccess() : null;
        } catch(err) {
            onError ? onError(err) : null;
        } finally {
            onLoadingFinished ? onLoadingFinished() : null;
        }
    }

    return {
        properties,
        getSubCategoryProperties
    }
}