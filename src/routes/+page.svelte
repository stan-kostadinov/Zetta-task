<script lang="ts">
    // App
    import { getContext } from 'svelte';
    import { page } from "$app/stores";
    import { byProvider } from '../stores/filtersStore';
    // Types
    import type { IGamesData } from './data';
    // Components
    import GameContainer from '../components/GameContainer.svelte';

    const gamesData: IGamesData[] = getContext('games-data');

    let filteredGamesData: IGamesData[] = gamesData

    function getFilteredGameData(filter: string, query: string) {
        if(!filter && !query) {
            filteredGamesData = gamesData
            return
        }
        
        filteredGamesData = gamesData.filter(game => {
            if(!query) {
                return game.developer === filter
            }
            if(!filter) {
                return game.hasOwnProperty(query)
            }

            return game.developer === filter && game.hasOwnProperty(query)
        })
    }

    let currentProvider: string;
    let pageVar: string

    byProvider.subscribe(value => {
        currentProvider = value
        getFilteredGameData(value, $page.url.search ? $page.url.search.replace('?', '') : '')
    })

    page.subscribe(value => {
        pageVar = value.url.search.replace('?', '')
        getFilteredGameData(currentProvider, pageVar)
    })
    
    
</script>
    
{#each filteredGamesData as item}
    <GameContainer title={item.title} description={item.description} />
{/each}