<template>
    <div class="app-navbar bg-white">
        <div class="grid grid-cols-3 gap-2 p-3 container mx-auto"> 
            <div class="col-span-2">
                <div class="flex hidden sm:flex gap-1">
                    <el-select class="max-w-xs app-navbar__input" placeholder="اختر نوع البحث" v-model="searchValue.type">
                        <el-option 
                            v-for="(type, index) in searchTypes"
                            :key="index"
                            :label="type.label"
                            :value="type.value"
                        ></el-option>
                    </el-select>
                    <div class="flex gap-1 flex-1">
                        <el-input class="app-navbar__input" placeholder="ابحث هنا" v-model="searchValue.query"></el-input>
                        <el-button type="primary" icon="el-icon-search"></el-button>
                    </div>
                </div>
                <div class="sm:hidden">
                    <el-button type="text">
                        <i class="el-icon-menu"></i>
                    </el-button>
                </div>
            </div>
            <div class="text-end flex items-center">
                <div class="flex-1">
                    <img class="inline-block" src="@/assets/imgs/logo.png" alt="">
                </div>
            </div>
        </div>
        <div class="bg-gradient-to-r from-primary-lighten to-primary-darken">
            <div class="grid grid-cols-3 gap-2 p-3 container mx-auto"> 
                <div class="col-span-2 ">
                    <div class="hidden sm:flex text-white">
                        <ul class="flex gap-8">
                            <li v-for="(item, index) in menuList" :key="index">
                                <router-link class="text-md" :to="item.link">
                                    {{ item.nameAr }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="text-end flex items-center">
                    <div class="flex-1 text-white">
                        <div class="flex gap-3 justify-end">
                            <el-button class="p-0" type="text">
                                <img src="@/assets/imgs/price_change.svg" alt="">
                            </el-button>
                            <button class="p-0" type="text">
                                <img src="@/assets/imgs/notifications.svg" alt="">
                            </button>
                            <button class="p-0" type="text">
                                <img src="@/assets/imgs/favorite_black.svg" alt="">
                            </button>
                            <div class="hidden sm:block">
                                <el-dropdown @command="handleCommand">
                                    <span class="el-dropdown-link">
                                        <div class="relative bg-secondary p-1 pr-3 pl-3 rounded-full text-white font-bold">
                                            <div class="flex gap-2">
                                                <span> {{ lang == 'arabic' ? 'عربية' : 'إنجليزي' }} </span>
                                                <img src="@/assets/imgs/previous.svg" alt="">
                                            </div>
                                            <img class="absolute right-0 top-0 mix-blend-hard-light opacity-30" src="@/assets/imgs/Rectangle-2.svg" alt="">
                                            <img class="absolute left-0 bottom-0 mix-blend-hard-light opacity-30" src="@/assets/imgs/Rectangle-1.svg" alt="">
                                        </div>
                                    </span>
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item command="arabic">عربية</el-dropdown-item>
                                        <el-dropdown-item command="english">إنجليزي</el-dropdown-item>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api';
import { useMenuList } from '@/composables/MenuList';
export default {
    setup(props, {root}) {

        const searchTypes = ref([
            {label: "مزاد مباشر مُتعدد", value: "1"},
            {label: "البحث يالإسم", value: "2"},
            {label: "البحث عن الأشخاص", value: "3"},
        ]);

        const searchValue = ref({});
        const lang = ref('arabic');

        const { menuList } = useMenuList();

        const handleCommand = (command) => {
            console.log(command)
            lang.value = command;
        }

        return {
            searchValue,
            searchTypes,
            menuList,
            lang,
            handleCommand
        }
    }
}
</script> 