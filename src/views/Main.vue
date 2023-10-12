<template>
    <b-container class="pt-0 px-0 pt-lg-4">
        <b-row>
            <b-col class="px-0 col-12 col-md-5 col-lg-4 pe-0">
                <PrimaryNavigation />
                <AllChatList @updateChat="updateChat" />
            </b-col>
            <b-col class="px-0 col-6 col-md-7 col-lg-8 ps-0 d-none d-md-block">
                <ChatWindow :selectedUser="selectedUserChat" />
            </b-col>
        </b-row>
        <b-sidebar
            v-model="sideBar"
            hide-footer
            width="100%"
            @hide="reset"
            right shadow
            backdrop
            class="p-2 d-md-none"
            no-header-close
        >
        <b-row v-if="selectedUserChat" class="align-items-center pt-2 pb-3">
            <b-col class="col-2">
                <i @click="reset" class="fas fa-chevron-left"></i>
            </b-col>
            <b-col class="text-start col-10 d-flex align-items-center">
                <img class="user-avatar" :src="selectedUserChat.avatar" width="15%" alt="">
                <div class="ms-2">
                    <p class="mb-0 text-left">
                        {{selectedUserChat.first_name}}
                    </p>
                    <p class="text-secondary text-mini text-start mb-0">
                        last seen at 9.33 PM
                    </p>
                </div>
            </b-col>
        </b-row>
        <b-row class="mobile-chat-ground"></b-row>
        <b-row class="py-3">
            <b-col>
                <b-form-input class="text-sm" placeholder="Type a Message"></b-form-input>
            </b-col>
        </b-row>
        </b-sidebar>
    </b-container>
</template>

<script>
import PrimaryNavigation from '@/components/PrimaryNavigation.vue'
import AllChatList from '@/components/AllChatList.vue'
import ChatWindow from '@/components/ChatWindow.vue'
export default {
    name: 'App',
    page: {
        title: "Whatsapp",
        meta: [{ name: "description", content: "Document Log" }],
    },
    components: {
        PrimaryNavigation,
        AllChatList,
        ChatWindow
    },
    data() {
        return {
            selectedUserChat:null,
            sideBar:false,
        }
    },
    methods: {
        reset() {
            this.sideBar = false
        },
        updateChat(user) {
            this.sideBar = true
            this.selectedUserChat = user
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile-chat-ground {
    height: calc(100vh - 9.5em);
    background: url('../assets/bg.jpg') repeat;
    background-size: 500px;
}
</style>