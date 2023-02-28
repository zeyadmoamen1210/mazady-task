
import { ref } from '@nuxtjs/composition-api';

export default function(context) {
    if(!context) console.error("Context is required in fetch compititors !");
    const favSellers = ref([]);

    async function getFavSellers(filters = {}, onSuccess = null, onError = null, onLoadingFinished = null) {
        setTimeout(async () => {
            try {
                favSellers.value = [
                    {
                        name: 'احمد محمد السيد على',
                        address: 'السعودية , الرياض'
                    },
                    {
                        name: 'احمد محمد السيد على',
                        address: 'السعودية , الرياض'
                    },
                    {
                        name: 'احمد محمد السيد على',
                        address: 'السعودية , الرياض'
                    },
                    {
                        name: 'احمد محمد السيد على',
                        address: 'السعودية , الرياض'
                    },
                ];
                onSuccess ? onSuccess() : null;
            } catch(err) {
                onError ? onError(err) : null;
            } finally {
                onLoadingFinished ? onLoadingFinished() : null;
            }
        }, 1000)
    }

    return {
        favSellers,
        getFavSellers
    }
}