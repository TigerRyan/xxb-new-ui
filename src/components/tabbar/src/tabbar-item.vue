<template>
    <router-link :to="link" class="xxb-tabbar-item" :class="classes" :style="styles">
        <span class="xxb-tabbar-icon">
            <slot name="icon"></slot>
            <span class="xxb-tabbar-badge">
                <slot name="badge"></slot>
            </span>
            <span class="xxb-tabbar-dot" v-if="dot"></span>
        </span>
        <span class="xxb-tabbar-txt">{{title}}</span>
    </router-link>
</template>

<script>

export default {
    name: 'xxb-tabbar-item',

    props: {
        link: String,
        title: String,
        active: Boolean,
        dot: Boolean
    },

    computed: {
        classes() {
            return this.active ? 'xxb-tabbar-active' : '';
        },

        styles() {
            return {color: this.active ? this.activeColor : this.$parent.color};
        }
    }
}
</script>