<script lang="ts">
    import { onMount } from "svelte";

    function getRandomString(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    onMount(() => {
        previousSpeed = speed;

        // Duplicating words set
        const duplicateSet = document.querySelector(`.${id} > .ticker-set`).cloneNode(true);
        document.querySelector(`.${id}`).appendChild(duplicateSet);
        
        // Starting animation interval
        animateFrame();
    });

    function animateFrame() {
        const ticker = document.querySelector(`.${id}`);
        const firstSet = document.querySelector(`.${id} > .ticker-set`);

        // Animating this frame
        position += (speed / 2);

        // @ts-ignore
        if (position > firstSet?.offsetWidth) {
            ticker.appendChild(firstSet);
            position = 0;
        };

        // @ts-ignore
        firstSet.style.marginLeft = -position + "px";

        // Animating next frame with timeout of speed
        setTimeout(animateFrame, speed);
    };

    // Variables
    let position = 0;
    let previousSpeed;
    const id = `ticker-${getRandomString(5)}`;

    // Generating random speed for each ticker line
    export let color = "bg-yellow-400";
    export let words = [];
    export let speed;
</script>

<div class="{ id } w-[200vw] relative { color } m-[0.25rem] flex overflow-hidden">
    <div class="ticker-set flex items-center py-2">
        { #each words as word }
            <a href="#" class="mx-0.5 px-2 py-0.5 rounded-2xl transition ease-in-out duration-300 hover:bg-slate-50">
                <p class="font-medium whitespace-nowrap">{ word }</p>
            </a>
        { /each }
    </div>
</div>