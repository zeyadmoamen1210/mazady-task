
import { ref } from '@nuxtjs/composition-api';

export default function(context) {
    if(!context) console.error("Context is required in fetch last auction !");
    const lastAuction = ref({});

    async function getLastAuction(filters = {}, onSuccess = null, onError = null, onLoadingFinished = null) {
        setTimeout(async () => {
            try {
                lastAuction.value = {
                    livedAt: new Date(),
                    currentValue: 5000,
                    valueAfterAuction: 5000,
                }
                onSuccess ? onSuccess() : null;
            } catch(err) {
                onError ? onError(err) : null;
            } finally {
                onLoadingFinished ? onLoadingFinished() : null;
            }
        }, 1000)
    }

    return {
        lastAuction,
        getLastAuction
    }
}