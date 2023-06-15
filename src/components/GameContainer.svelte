<script lang="ts">
    export let title: string, 
            description: string;
</script>

<div class="game-container">
    <div class="game-thumbnail">
        <div class="play-button">
            
        </div>
    </div>
    <div class="game-description">
        <h2>{ title }</h2>
        <h3>{ description }</h3>
    </div>


</div>

<style lang="scss">
    .game-container {
        flex: 0 0 24%;
        margin: .5% calc(.5% - 1px);
        text-align: center;
        border: 1px solid #42515F;
        border-radius: 10px;

        @media screen and (max-width: 1024px) {
            flex: 0 0 48%;
        }

        .game-thumbnail {
            min-height: 180px;
            background-color: #F4F5F6;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            position: relative;
            z-index: 1;

            .play-button {
                width: 60px;
                height: 60px;
                bottom: -35px;
                left: calc(50% - 30px);
                position: absolute;
                background-color: #fff;
                border-radius: 100%;
                background: url('/images/play.svg') no-repeat center center, #fff;
                background-size: 65%;
                transition: all .1s;

                &:hover {
                    background-size: 75%;
                    cursor: pointer;
                }
            }
        }

        .game-description {
            min-height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 2;

            h2 {
                font-size: 1rem;
                line-height: 1.5rem;
            }

            h3 {
                font-size: .75rem;
                line-height: 1.125rem;
                color: #42515F;
            }
        }
    }

</style>