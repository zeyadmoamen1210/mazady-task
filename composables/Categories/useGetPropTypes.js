import { ref } from '@nuxtjs/composition-api';
export default function(context) {
    if(!context) console.error("Context is required!");
    const types = ref([]);

    async function getPropTypes(optionId, filters = {}, onSuccess = null, onError = null, onLoadingFinished = null) {
        if(!optionId) console.error("optionId is required");
        try {
            const res = await context.$axios.get(`/get-options-child/${optionId}`);
            types.value = res.data?.data;
            onSuccess ? onSuccess() : null;
        } catch(err) {
            onError ? onError(err) : null;
        } finally {
            onLoadingFinished ? onLoadingFinished() : null;
        }
    }

    return {
        types,
        getPropTypes
    }
}