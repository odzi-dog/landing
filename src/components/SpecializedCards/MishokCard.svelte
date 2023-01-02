<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import TickerLine from "./TickerLine.svelte";

    onMount(() => {
        lines = lines.map((line) => {
            const speed = getRandomNumber();
            return {
                ...line,
                originalSpeed: speed,
                speed: speed,
            };
        });

        wasSpeedUpdated = true;
    });

    // Helper functions
    function getRandomNumber(): number {
        return Math.random() * (max - min) + min
    };

    // Minimal and maximum ticker speed
    const max = 0.8;
    const min = 0.2;

    let wasSpeedUpdated = false;

    let lines: Array<{
        color: string,
        words: Array<string>,
        speed: number,
    }> = [
        {
            color: "bg-yellow-400",
            words: ["cute dogs", "милі собачки", "кішечки", "тварини", "animals", "cats", "meow"],
        },
        {
            color: "bg-purple-400",
            words: ["programming", "computers", "технології", "технологічні новини", "політика", "russo-ukraine war", "новини світу"],
        },
        {
            color: "bg-blue-400",
            words: ["games", "entertainment", "розваги", "memes", "war memes", "funny videos", "україномовні стендапи", "ютуб-шоу"],
        }
    ].map((line) => ({ ...line, speed: 0 }));
</script>

<!-- Background -->
<div class="w-full md:w-1/3 relative after:content-[''] after:block after:pb-[100%]">
    <div class="absolute p-0.25 w-full h-full z-5">
        <div class="rounded-2xl w-full h-full bg-slate-50 flex items-center justify-end group overflow-hidden">
            <!-- Mishok logotype -->
            <div class="absolute transition ease-in-out duration-300 top-0 w-full p-4 md:px-4 md:py-2 lg:p-6 flex items-center group-hover:opacity-0">
                <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/shopping-bags_1f6cd-fe0f.png" class="w-8" alt="Mishok Bag Emoji">
                <h1 class="text-xl text-black ml-1.5 font-medium">mishok</h1>
            </div>

            <div class="transition ease-in-out duration-300 scale-150 w-full -rotate-45 group-hover:rotate-0 group-hover:scale-[250%] group-hover:opacity-100 opacity-90">
                { #if wasSpeedUpdated }
                    { #each lines as line }
                        <TickerLine color={line.color} words={line.words} speed={line.speed} />
                    { /each }
                { /if }
            </div>

        </div>
    </div>
</div>