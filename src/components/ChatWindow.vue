<template>
    <div class="wrapper" v-if="selectedUser">
        <b-row class="p-2 px-1 align-items-center justify-content-between">
            <b-col class="text-start col-3 col-md-2 col-lg-2 d-flex align-items-center">
                <img class="user-avatar" :src="selectedUser.avatar" width="100%" alt="">
                <p class="mb-0 px-3">
                    {{selectedUser.first_name}}
                </p>
            </b-col>
            <b-col class="col-4 col-md-3 col-lg-2 col-xl-1 d-flex align-items-center justify-content-between">
                <div>
                    <i class="fas fa-search ps-2"></i>
                </div>
                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret offset="-150">
                    <template #button-content>
                        <i v-b-tooltip.hover.bottomleft="'Menu'" class="fas fa-ellipsis-v"></i>
                    </template>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here</b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-row>
        <b-row class="chat-ground">
            <b-col>
            </b-col>
        </b-row>
        <b-row class="py-3">
            <b-col>
                <b-form-input class="text-sm" placeholder="Type a Message"></b-form-input>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name:'ChatWindow',
    props: {
        selectedUser: {
            type: Object,
            default:null,
        }
    },
}
</script>

<style lang="scss">
.chat-ground {
    height: calc(100vh - 12.5em);
    background: url('../assets/bg.jpg') repeat;
    background-size: 500px;
}
</style>