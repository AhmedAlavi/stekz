<template>
    <b-row class="chat-card align-items-center justify-content-between px-2 py-3 px-1" @click="updateChatWindow">
        <b-col cols="2" class="text-start">
            <img class="user-avatar" :src="user.avatar" width="100%" alt="">
        </b-col>
        <b-col>
            <p class="text-md text-start fs-5 mb-0">
                {{user.first_name}}
            </p>
            <p class="text-start text-sm mb-0">
                Last message
            </p>
        </b-col>
        <b-col cols="4" class="text-end">
            <p class="text-mini text-secondary mb-0">
                10.39 Pm
            </p>
            <p class="text-sm text-secondary mb-0">
                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret offset="-130" >
                <template #button-content >
                <i v-b-tooltip.hover.bottomleft="'Menu'" class="fas fa-chevron-down text-secondary"></i>
                </template>
                <b-dropdown-item v-for="(item,index) in dropsownItems" :key="index" href="#">
                    {{item}}
                </b-dropdown-item>
            </b-dropdown>
            </p>
        </b-col>
    </b-row>
</template>

<script>
export default {
    name: 'ChatCard',
    props: {
        user: {
            type: Object,
            default:null,
        }
    },
    data() {
        return {
            dropsownItems: [
                'Archive Chat',
                'Mute Notification',
                'Exit Group',
                'Pin Chat',
                'Mark as unread'
            ]
        }
    },
    
    methods: {
        updateChatWindow() {
            this.$emit('updateChat')
        }
    }
}
</script>

<style lang="scss">
.dropdown-toggle {
    padding: 0 !important;
}
</style>