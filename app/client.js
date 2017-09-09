const vData = {
    playlists: [
        {name: 'chillin`', description: 'Playlist meant to be listened to while chillin` ;)', img: '--bg: url("./assets/chillin-bg.jpeg")',
    list: [
        ''
    ]},
        {name: 'chillin`', description: 'Playlist meant to be listened to while chillin` ;)', img: '--bg: url("./assets/chillin-bg.jpeg")',
    list: [
        ''
    ]},
        {name: 'chillin`', description: 'Playlist meant to be listened to while chillin` ;)', img: '--bg: url("./assets/chillin-bg.jpeg")',
    list: [
        ''
    ]}
    ],
    track: ''
};
async function getPlaylists(){
    let data = await(await fetch('../Tracks/playLists.json'));
    return JSON.stringify(data);
}

async function getTracks(){
    await fetch('../Tracks/tracksList.json',)
        .then((resp))
}








const vm = new Vue({

    el: '.main',
    data: vData,
    methods: {

    },
    computed: {

    }

});