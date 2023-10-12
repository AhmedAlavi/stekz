<template>
    <div class="primary-navigation">
        <b-row class="wrapper align-items-center justify-content-between p-2 px-1">
            <b-col cols="2" class="text-start">
                <img src="https://gravatar.com/avatar/506e8cd41919638c2fcbfff4ace4bbed" width="100%" alt="">
            </b-col>
            <b-col></b-col>
            <b-col cols="7" class="d-flex align-items-center justify-content-between">
                <div>
                    <i v-b-tooltip.hover.bottomleft="'Communities'" class="fas fa-users"></i>
                </div>
                <div>
                    <i v-b-tooltip.hover.bottomleft="'Status'" class="fas fa-bullseye"></i>
                </div>
                <div>
                    <i v-b-tooltip.hover.bottomleft="'Channels'" class="fas fa-comment-dots"></i>
                </div>
                <div>
                    <i v-b-tooltip.hover.bottomleft="'New Chat'" class="fas fa-comment-alt"></i>
                </div>
                <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret offset="-150">
                    <template #button-content>
                    <i v-b-tooltip.hover.bottomleft="'Menu'" class="fas fa-ellipsis-v"></i>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item @click.prevent="singOut">Logout</b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-row>
    </div>
</template>

<script>

export default {
    name: 'PrimaryNavigation',
    methods: {
        async singOut() {
            await this.$store.dispatch('auth/LogOut')
            this.$router.push('/login')
        }
    }
}
</script>
