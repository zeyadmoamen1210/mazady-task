
import { ref } from '@nuxtjs/composition-api';

export default function(context) {
    if(!context) console.error("Context is required in fetch last auction !");
    const auctionValues = ref([]);

    async function getAuctionValues(filters = {}, onSuccess = null, onError = null, onLoadingFinished = null) {
        setTimeout(async () => {
            try {
                auctionValues.value = [
                    {
                        title: "القيمة الإبتدائية",
                        value: 2000
                    },
                    {
                        title: "القيمة التقريبية",
                        value: 5132
                    },
                    {
                        title: "العربون",
                        value: 4000
                    },
                    {
                        title: "سعر الشراء الفوري",
                        value: 9840
                    },
                    {
                        title: "قيمة زيادة المزاد",
                        value: 2000
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
        auctionValues,
        getAuctionValues
    }
}