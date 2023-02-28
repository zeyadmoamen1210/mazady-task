
import { ref } from '@nuxtjs/composition-api';

export default function(context) {
    if(!context) console.error("Context is required in fetch compititors !");
    const compititorsList = ref([]);

    async function getCompititorsList(filters = {}, onSuccess = null, onError = null, onLoadingFinished = null) {
        setTimeout(async () => {
            try {
                compititorsList.value = [
                    {
                        name: 'احمد محمود',
                        date: new Date(),
                        profit: 20,
                        photo: ''
                    },
                    {
                        name: 'زياد مؤمن',
                        date: new Date(),
                        profit: 20,
                        photo: ''
                    },
                    {
                        name: 'خالد احمد',
                        date: new Date(),
                        profit: 20,
                        photo: ''
                    },
                    {
                        name: 'علي احمد',
                        date: new Date(),
                        profit: 20,
                        photo: ''
                    },
                    {
                        name: 'احمد الرائد',
                        date: new Date(),
                        profit: 20,
                        photo: ''
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
        compititorsList,
        getCompititorsList
    }
}