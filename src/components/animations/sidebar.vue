<template>
    <div class="w-5/12 flex flex-col border-r  mt-4 px-4">
        <div class="flex w-full justify-between">
            <h4 class="text-[#7b7e89] text-xs">Topic</h4>
            <span class="text-xs text-[#cacdd3]">0/300</span>
        </div>
        <div class="mt-2 flex flex-col w-full">
            <div class=" border-[1px] rounded-t-md text-sm font-medium p-2">Copywriting Vs. Content Writing</div>
            <div class="flex justify-between p-2 bg-[#f7fbfe]">
                <p class="text-sm text-[#7f8587] font-normal">Get related results from Google</p>      
                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#705bf6]"></div>
                </label>
            </div>
        </div>
        <div class="mt-2 flex flex-col">
            <label class="text-[#7b7e89] text-xs" for="Language">Language</label>
            <select class="p-2 text-sm border rounded-md mt-2">
                <option value="English">English</option>
                <option value="English">Spanish</option>
                <option value="English">Russian</option>
            </select>
        </div>
        <div class="mt-2 flex flex-col">
            <label class="text-[#7b7e89] text-xs" for="Type">Quality type</label>
            <select class="p-2 text-sm border rounded-md mt-2">
                <option value="English">Highest</option>
                <option value="English">Highest</option>
                <option value="English">Highest</option>
            </select>
        </div>

        <div class="mt-6 p-4 mb-[111px] rounded-md flex justify-between bg-[#f7fbfe]">
            <div>
                <h1 class=" font-normal text-base">Write a title yourself</h1>
                <p class="mt-1  text-xs text-gray-500">If this not selected, then Writesonic will <br>
                indeperdenty offer options whit the titles
                </p>
            </div>
            <div>
                <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
                    <div class="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#705bf6]"></div>
                </label>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
