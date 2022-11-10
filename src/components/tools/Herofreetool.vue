<template>
    <div class="hero-free-tool h-14 mt-6 mb-5 relative  flex overflow-hidden w-full  gap-4">
        <div class="track-horizontal animate-horizontal absolute flex gap-4 ">
            <div class="hero-marquee-inner flex  items-center justify-center gap-8">
                <div v-for="logo in logos" :key="logo.id" class=" w-28 flex mx-auto flex-col justify-center items-center auto-cols-fr">
                    <img class="max-w-full h-10 inline-block align-middle"  :src="logo.imgURL" alt="">
                </div>
                <div class="hero-marquee-inner flex  items-center justify-center gap-8">
                <div v-for="logo in logos" :key="logo.id" class="w-28 flex mx-auto flex-col justify-center items-center auto-cols-fr">
                    <img class="max-w-full h-10 inline-block align-middle"  :src="logo.imgURL" alt="">
                </div>
            </div>
            <div class="hero-marquee-inner flex  items-center justify-center gap-8">
                <div v-for="logo in logos" :key="logo.id" class="w-28 flex mx-auto flex-col justify-center items-center auto-cols-fr">
                    <img class="max-w-full h-10 inline-block align-middle"  :src="logo.imgURL" alt="">
                </div>
            </div>
            </div>
        </div>     
    </div>
    <div class="flex max-w-6xl mx-auto mb-20 justify-center auto-cols-fr gap-4 ">
        <img src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/63528404d6a20363f34d0580_AIWritingAssistant_MomentumLeader_Leader.svg" loading="lazy" alt="moodle logo" class=" w-24">
        <img src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/63528404d6a203b6404d0581_AIWritingAssistant_Leader_Small-Business_Leader.svg" loading="lazy" alt="moodle logo" class="w-24">
        <img src="https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635284040d7c320eb2cafd27_AIWritingAssistant_HighPerformer_Mid-Market_HighPerformer.svg" loading="lazy" alt="moodle logo" class="w-24">
    </div>
</template>
<script>
export default {
    data() {
        return {
            logos:[
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635a1e47989f0f3acaa92d88_meesho.svg'},
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635a1e46dfb493d4360789b5_rakuten.svg'},
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635a1e47c66f9d253b3f40f7_spotify.svg'},
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635a1e47989f0f3acaa92d88_meesho.svg'},
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6071645c9de_new-logo-5.svg'},
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/627a1045a798e6364f45c9dc_new-logo-6.svg'},
                { imgURL: '	https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635a1e4772a155a43cdddbcd_genesys.svg'},
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635a1e473f3edcefc9920d54_harvard.svg'},
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635a1e4771ea333a90b01f33_marriot.svg'},
                { imgURL: 'https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/635a1e49ccf682080d68f466_vodafone.svg'},
            ]
        }
    },
}
</script>
