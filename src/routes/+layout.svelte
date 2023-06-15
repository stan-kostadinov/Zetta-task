<script lang="ts">
    import Navigation from "../components/Navigation.svelte";
    import { setContext } from "svelte";

    export let data;
    setContext('games-data', data.games);
    
    const navItems = ['All', 'Favorites', 'Popular', 'New'];

    function getFilterNavItems(): string[] {
        const filteredItems: string[] = [];

        data.games.forEach(game => {
            if(!filteredItems.includes(game.developer)) {
                filteredItems.push(game.developer)
            }
        })

        return filteredItems
    }
</script>
<header class="container">
    <Navigation isPrimary={true} { navItems } />
    
    <Navigation navItems={ getFilterNavItems() } />
</header>
<main class="container">
    <slot />
</main>

<style lang="scss">
    .container {
        display: flex;
        max-width: 1440px;
        margin: 0 auto;
        flex-wrap: wrap;
    }
</style>