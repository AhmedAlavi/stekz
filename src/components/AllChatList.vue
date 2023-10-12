<template>
    <div>
        <b-row class="bg-white py-2 align-items-center border-bottom">
            <b-col class="align-items-center">
                <b-input-group >
                    <template #prepend>
                        <b-input-group-text>
                            <i class="fas fa-search ps-2"></i>
                        </b-input-group-text>
                    </template>
                    <b-form-input class="text-sm" v-model="searchText" placeholder="Search or start a new chat"></b-form-input>
                </b-input-group>
            </b-col>
            <b-col cols="1">
                <i class="fas fa-bars ml-2 mr-0"></i>
            </b-col>
        </b-row>
        <div class="chat-list-wrapper">
            <ChatCard v-for="user in getFilteredUSers" :key="user.id" :user="user" @updateChat="updateSelectedChat(user)" />
        </div>
    </div>
</template>

<script>
import ChatCard from '@/components/ChatCard.vue'
import axios from 'axios'
import { apiUrl } from '@/api/api'
export default {
    name: 'AllChatList',
    components: {
        ChatCard
    },
    data() {
        return {
            userList:[],
            searchText:null,
        }
    },
    created() {
        this.getUserList()
    },
    computed: {
        getFilteredUSers() {
            if(!this.searchText || this.searchText === null) return this.userList
            else {
                const searchText = this.searchText.toLowerCase()
                return this.userList.filter(user => 
                    user.first_name.toLowerCase().includes(searchText)
                )
            }
        }
    },
    methods: {
        async getUserList() {
            try {
                const res = await axios.get(`${apiUrl}/v2/users?size=20`)
                console.log(res)
                if(res && res.status === 200) {
                    this.userList = res.data
                }
            } catch(err) {
                console.log(err)
            }
        },
        updateSelectedChat(user) {
            this.$emit('updateChat',user)
        }
        
    },
}
</script>

<style lang="scss" scoped>

.input-group {    
    .form-control,
    .input-group-text {
        height: 2.1em;
        border: none;
        background-color: #f0f2f5;
        font-size: .8em;
        padding: 1.5em .5em;
    }

    .form-control {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
}
.fa-search,
.fa-bars{
    color: #54656f;
    font-size: 1em;
}

</style>