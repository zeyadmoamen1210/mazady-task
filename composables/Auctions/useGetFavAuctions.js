
import { ref } from '@nuxtjs/composition-api';

export default function(context) {
    if(!context) console.error("Context is required in fetch last auction !");
    const favAuctions = ref([]);

    async function getFavAuctions(filters = {}, onSuccess = null, onError = null, onLoadingFinished = null) {
        setTimeout(async () => {
            try {
                favAuctions.value = [
                    {
                        description: "سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة",
                        price: 2000
                    },
                    {
                        description: "سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة",
                        price: 2000
                    },
                    {
                        description: "سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة",
                        price: 2000
                    },
                    {
                        description: "سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة",
                        price: 2000
                    },
                    {
                        description: "سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة سيارة سريعة بى ام دابليو تصنيع  2021 حالته جديدة",
                        price: 2000
                    },
                ]
                onSuccess ? onSuccess() : null;
            } catch(err) {
                onError ? onError(err) : null;
            } finally {
                onLoadingFinished ? onLoadingFinished() : null;
            }
        }, 1000)
    }

    return {
        favAuctions,
        getFavAuctions
    }
}