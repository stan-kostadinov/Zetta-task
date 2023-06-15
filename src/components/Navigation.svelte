<script lang="ts">
    import { page } from "$app/stores";
    import { goto } from "$app/navigation";
    import { byProvider } from "../stores/filtersStore";
    export let navItems: string[];
    export let isPrimary: boolean = false;
    let activeDeveloperItem: string;

    function getLogoPath(developer: string): string {
        return '/images/developer-logos/' + developer.split(' ')[0].toLowerCase() + '.png';
    }

    function handleChange(newDeveloper: string) {
        byProvider.update((developer) => developer = newDeveloper);
        activeDeveloperItem = newDeveloper;
    }

    $: activeMenuItem = isPrimary 
                        ? $page.url.search ? $page.url.search.replace('?', '') : 'all' 
                        : activeDeveloperItem?.toLowerCase();
</script>

<nav class="main-navigation">
    <ul>
        {#each navItems as navItem}
            <li class:active={activeMenuItem === navItem.toLowerCase()} class={navItem.toLowerCase()}>
                <button on:click={ () => { isPrimary ? goto(navItem !== 'All' ? `?${navItem.toLowerCase()}` : '/') : handleChange(navItem) } }>
                <!-- If it's a secondary navigation render the game developer logos -->
                    {#if !isPrimary}
                        <div class="nav-image-container">
                            <img src={ getLogoPath(navItem) } alt={`${navItem} logo`} />
                        </div>
                    {/if}
                    { navItem }
                    </button>
            </li>
        {/each}
    </ul>
</nav>

<style lang="scss">
// Main color scheme
$primary-color: #0F853D;
$primary-dark-color: #07662C;
$secondary-color: #2B3B4B;
$border-radius: 15px;

.main-navigation {
    display: flex;
    flex: 0 0 100%;
    background-color: $secondary-color;
    margin: 1rem auto;
    border-radius: 15px;

    @media screen and (max-width: 1400px) {
        border-radius: 0;
        ul {
            overflow-y: scroll;
            li {
                &:nth-of-type(1) {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            }
        }
    }

    ul {
        display: flex;
        flex-wrap: nowrap;
        max-width: 99vw;

        li {
            display: flex;
            position: relative;
            border-right: 1px solid #42515F;
            
            &:nth-of-type(1) {
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
            }

            &.active {
                background-color: $primary-color;
            }
            
            &:hover {
                background-color: $primary-color;
            }

            button {
                padding: 1.25rem 1.5rem;
                color: #fff;
                text-decoration: none;
                text-transform: capitalize;
                cursor: pointer;

                .nav-image-container{
                    display: block;
                    margin: .25rem auto;
                    text-align: center;
                    padding: 10px;
                    width: 25px;
                    height: 25px;
                    background-color: $secondary-color;
                    box-shadow: 0px 0px 8px $primary-dark-color;
                    
                }
            }

            &.favorites{
                &::before {
                    content: '';
                    position: absolute;
                    left: 1.3rem;
                    top: calc(50% - 12.5px);
                    width: 25px;
                    height: 25px;
                    background: url('/images/favorites.svg') no-repeat center;
                }
                button {
                    padding-left: calc(1.5rem + 25px);
                }
            }

            &.popular{
                &::before {
                    content: '';
                    position: absolute;
                    left: 1.3rem;
                    top: calc(50% - 12.5px);
                    width: 25px;
                    height: 25px;
                    background: url('/images/popular.svg') no-repeat center;
                }
                button {
                    padding-left: calc(1.5rem + 25px);
                }
            }

            &.new{
                &::before {
                    content: '';
                    position: absolute;
                    left: 1.3rem;
                    top: calc(50% - 12.5px);
                    width: 25px;
                    height: 25px;
                    background: url('/images/new.svg') no-repeat center;
                }
                button {
                    padding-left: calc(1.5rem + 25px);
                }
            }
        }
    }
}
</style>