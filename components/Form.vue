<template>
    <div  :class="[!showDataTable ? 'mx-auto max-w-2xl' : null]">
        <el-form v-if="!showDataTable" :model="formData" ref="formRef">
            <el-form-item prop="category" :rules="[{required: true, message: 'This field is required'}]">
                <label class="block font-semibold" for="category">الأقسام</label>
                <el-select class="w-full" clearable value-key="id" @change="getSubCategories()" filterable placeholder="أختر قسم" v-model="formData.category">
                    <el-option
                        v-for="cat in categories"
                        :key="cat.id"
                        :label="cat.name"
                        :value="cat"
                    ></el-option>
                </el-select>
            </el-form-item>
            <span>00</span>
            <el-form-item prop="subCategory" :rules="[{required: true, message: 'This field is required'}]">
                <label class="block font-semibold" for="subCategory">الأقسام الفرعية</label>
                <el-select value-key="id" @change="getProperties" class="w-full" filterable placeholder="أختر قسم فرعي" v-model="formData.subCategory">
                    <el-option
                        v-for="cat in subCategories"
                        :key="cat.id"
                        :label="cat.name"
                        :value="cat"
                    ></el-option>
                </el-select>
            </el-form-item>

            <span>00</span>
            <el-form-item prop="property" :rules="[{required: true, message: 'This field is required'}]">
                <label class="block font-semibold" for="property">العناصر</label>
                <el-select value-key="id" @change="getPropertyTypes" v-loading="propertiesLoading" class="w-full" filterable placeholder="أختر عنصر" v-model="formData.property">
                    <el-option
                        v-for="pro in properties"
                        :key="pro.id"
                        :label="pro.name"
                        :value="pro"
                    ></el-option>
                    <el-option v-if="subCategories.length > 0" label="other" :value="{id: 'other', name: 'other'}">
                    </el-option>
                </el-select>
            </el-form-item>
            

            
            <el-form-item v-if="formData.property&&formData.property.id === 'other'" prop="writedProperty" :rules="[{required: true, message: 'this field is required'}]">
                <el-input v-model="formData.writedProperty" placeholder=" العنصر"></el-input>
            </el-form-item>

            <div v-if="types.length > 0">
                <el-form-item 
                    v-for="filterType in types" 
                    :key="filterType.id" 
                    :prop="filterType['slug']" 
                    :rules="[{required: true, message: 'This field is required'}]"
                >
                    <label class="block font-semibold" for="property">{{ filterType['slug'] }}</label>
                    <el-select class="w-full" filterable placeholder="أختر عنصر" v-model="formData[filterType['slug']]">
                        <el-option
                            v-for="pro in filterType.options"
                            :key="pro.id"
                            :label="pro.name"
                            :value="pro.slug"
                        ></el-option>
                    </el-select>
                </el-form-item>
            </div>

            <el-button @click="submitValidateForm" type="primary">
                Submit
            </el-button>
        </el-form>

        <div v-else>
            <table class="w-full even-border">
                <tr v-for="(propsKey, index) in Object.keys(formData)" :key="index">
                    <td class="title-td-classes">
                        {{ propsKey | upperCase }}
                    </td>
                    <td class="value-td-classes" v-if="formData[propsKey]">
                        <span v-if="formData[propsKey] && formData[propsKey].name"> {{ formData[propsKey].name }} </span>
                        <span v-else> 
                            {{ formData[propsKey] }} 
                        </span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api';
import { useGetCategories, useGetProperties, useGetPropTypes } from '@/composables/Categories';
import { useHandleResponse } from '@/composables/Helpers';

export default {
    setup(props, {root}) {
        const formData = ref({
            property: null,
            category: null,
            subCategory: null,
            writedProperty: null
        });
        //.
        const formRef = ref(null);

        const { startLoading, onError, closeLoading } = useHandleResponse();
        const { categories, getCategories } = useGetCategories(root);

        const subCategories = ref([]);

        const deletePropertyTypesFromFormData = () => {
            for(let i in formData.value) {
                if(i != 'category' && i != 'subCategory' && i != 'property' && i != 'writedProperty') {
                    delete formData.value[i];
                }
            }
        }

        const getSubCategories = () => {
            subCategories.value = [];
            formData.value.subCategory = null;
            formData.value.property = null;
            formData.value.writedProperty = '';
            deletePropertyTypesFromFormData();

            types.value = [];
            if(formData.value?.category) {
                subCategories.value = formData.value?.category?.children;
            }
        }

        

        startLoading();
        getCategories(null, null, onError, closeLoading);

        const propertiesLoading = ref(false);
        const { properties, getSubCategoryProperties } = useGetProperties(root);
        const getProperties = () => {
            formData.value.property = null;
            formData.value.writedProperty = '';
            types.value = [];
            deletePropertyTypesFromFormData();

            if(formData.value?.subCategory?.id) {
                propertiesLoading.value = true;
                getSubCategoryProperties(formData.value?.subCategory?.id, null, null, onError, () => {
                    propertiesLoading.value = false;
                });
            }
        }


        const { types, getPropTypes } = useGetPropTypes(root);
        const getPropertyTypes = () => {
            // reset some values
            types.value = [];
            formData.value.writedProperty = '';
            deletePropertyTypesFromFormData();

            // get property types
            if(formData.value.property?.id && formData.value?.property?.name != 'other') {
                getPropTypes(formData.value.property?.id, null, null, onError, closeLoading)
            }
        }

        const showDataTable = ref(false);
        const submitValidateForm = () => {
            formRef.value?.validate((valid) => {
                if(valid) {
                    if(!formData.value.writedProperty) {
                        delete formData.value.writedProperty
                    }
                    showDataTable.value = true;
                }
            })
        }

        return {
            formData,
            formRef,
            categories,
            subCategories,
            getSubCategories,
            getProperties,
            properties,
            propertiesLoading,
            getPropertyTypes,
            types,
            submitValidateForm,
            showDataTable
        }
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