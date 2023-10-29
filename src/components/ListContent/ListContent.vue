<template>
    <section class="container list-content">
        <h2 class="list-content__title">
            {{ type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}
        </h2>
        <div class="list-content__wrapper">
            <ListItem v-for="item, index in content" :key="index" :item="item" :title="type"/>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    type: String
})
import ListItem from './ListItem.vue';
import { usePopular } from "../../store/popular.js";
import { computed, ref } from "vue";

const popularStore = usePopular();
let currentPage = ref(1);
popularStore.getPopular(props.type, currentPage.value);
const content = computed(()=> props.type == 'movie' ? popularStore.moviesList : popularStore.tvsList);
console.log(content);

</script>

<style lang="scss">

</style>