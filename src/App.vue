<template>
    <div>
        <RouterLink :to="{name: RouteNames.HOME}">
            Go to home page
        </RouterLink>
        <RouterLink :to="{name: RouteNames.AUTH}">
            Go to home auth
        </RouterLink>
    </div>
    <div>
        <RouterView />
    </div>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
import { RouteNames } from '@/consts/route-names.js'

export default {
    components: {
        RouterView,
        RouterLink,
    },
    data: () => ({
        RouteNames,
    }),
}
</script>
