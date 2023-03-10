var loading = document.querySelector('.loading')
var local = JSON.parse(localStorage.getItem('PLAY_LIST'))
if(local == null){
    local = []
}
window.addEventListener('load', function () {
    loading.style.display = 'none'
    rangeMusic.value = 0

    local.forEach(function(item){
        var img = item.srcImg
        var musicLocal = item.srcMusic
        var titleLocal = item.title
        var newMusicList = document.createElement('list')
        var playListMusic = document.querySelector('.list-music .list')
        newMusicList.innerHTML = renderList(titleLocal, musicLocal, img)
        playListMusic.append(newMusicList)
        changeMini()
    })
    setCount()
    displayAlert('Website thuộc bản quyền của Crodic Crystal. Do AI làm cho website load rất chậm nên tạm thời sẽ đóng lại để update thêm')
})

var alertBox = document.querySelector('.alert')
var noticeAlert = document.querySelector('.notice-alert')
alertBox.addEventListener('click', function (e) {
    var box = e.target
    if (!noticeAlert.contains(box)) {
        alertBox.style.display = 'none'
    }
})
var dataSearchCollection = [
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/iris.mp3',
        srcImg: './images/iris.jpg',
        title: 'Iris',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/ANIMA.mp3',
        srcImg: './images/kirito.jpg',
        title: 'ANIMA',
        voice: 'ReoNA'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/Courage.mp3',
        srcImg: './images/asuna.jpg',
        title: 'Courage',
        voice: 'Haruka Tomatsu'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/Cynthia No Hikari.mp3',
        srcImg: './images/CynthiaSong.jpg',
        title: 'Cynthia No Hikari',
        voice: 'Eri Aoi'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/Ignite.mp3',
        srcImg: './images/sinon.webp',
        title: 'Ignite',
        voice: 'Eri Aoi'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/resister.mp3',
        srcImg: './images/eugeo.jpg',
        title: 'Resister',
        voice: 'Eri Aoi'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/SAO_OS.mp3',
        srcImg: './images/SAO_OS.jpg',
        title: 'Longing',
        voice: 'Yuna (AI SAO)'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/SAO_UB.mp3',
        srcImg: './images/SAO_UB.webp',
        title: 'Gyakkyou Spectrum',
        voice: 'ASCA'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/Unlasting.mp3',
        srcImg: './images/alice.jpg',
        title: 'Unlasting',
        voice: 'LiSA'
    },
    {
        collection: './images/collectionSAO.jpg',
        topic: 'Sword Art Online',
        srcMusic: './music/VITA.mp3',
        srcImg: './images/SAO_UB.webp',
        title: 'VITA',
        voice: 'ReoNA'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/honkai.mp3',
        srcImg: './images/honkai.jpg',
        title: 'TRUE',
        voice: 'Hoàng Linh'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Moon Halo.mp3',
        srcImg: './images/kiana.png',
        title: 'Moon Halo',
        voice: 'Hanser'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/honkai.mp3',
        srcImg: './images/mobius.jpg',
        title: 'Regression',
        voice: 'Ayanga'
    },
    {
        collection: './music/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Rubia.mp3',
        srcImg: './images/rubia.jpg',
        title: 'Rubia',
        voice: 'Châu Thâm'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Reunio.mp3',
        srcImg: './images/sivelWing.jpg',
        title: 'Reunio',
        voice: 'Trùng Phùng'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Dual-Ego.mp3',
        srcImg: './images/raiden.jpg',
        title: 'Dual Ego',
        voice: 'Sa Dingding'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Starfall.mp3',
        srcImg: './images/kevin.webp',
        title: 'Star Fall',
        voice: 'TIA RAY'
    },
    {
        collection: './images/shadowgardenSong.jpg',
        topic: 'Shadow Garden',
        srcMusic: './music/shadow.mp3',
        srcImg: './images/shadowgardenSong.jpg',
        title: 'HIGHEST',
        voice: 'OxT'
    },
    {
        collection: './images/collection86.jpg',
        topic: '86',
        srcMusic: './music/86.mp3',
        srcImg: './images/86.webp',
        title: 'Kyoukaisen',
        voice: 'amazarashi'
    },
    {
        collection: './images/collectionCounter.webp',
        topic: 'Counter Side',
        srcMusic: './music/shadowofmemory.mp3',
        srcImg: './images/shadowMemory.png',
        title: 'Shadow Of Memory',
        voice: 'Bside OST'
    },
    {
        collection: './images/collectionCounter.webp',
        topic: 'Counter Side',
        srcMusic: './music/redbreeze.mp3',
        srcImg: './images/redBreezeSong.jpg',
        title: 'Red Breeze',
        voice: 'Nana Mizuki'
    },
    {
        collection: './images/collectionCounter.webp',
        topic: 'Counter Side',
        srcMusic: './music/Life Begins As Gone.mp3',
        srcImg: './images/rising.jpg',
        title: 'Life Begins As Gone',
        voice: 'Game OST'
    },
    {
        collection: './images/collectionCounter.webp',
        topic: 'Counter Side',
        srcMusic: './music/House Of The Rising Sun.mp3',
        srcImg: './images/house.jpg',
        title: 'House Of The Rising Sun',
        voice: 'Game OST'
    },
    {
        collection: './images/collectionRezero.jpg',
        topic: 'Re:zero',
        srcMusic: './music/realize.mp3',
        srcImg: './images/rezero.jpg',
        title: 'Realize',
        voice: 'Konomi Suzuki'
    },
    {
        collection: './images/collection86.jpg',
        topic: '86',
        srcMusic: './music/avid.mp3',
        srcImg: './images/avid.jpg',
        title: 'Avid',
        voice: 'Hiroyuki Sawano & Mizuki'
    },
    {
        collection: './images/collection86.jpg',
        topic: '86',
        srcMusic: './music/SawanoHiroyukinZk.mp3',
        srcImg: './images/aka86.jpg',
        title: 'SawanoHiroyukinZk',
        voice: 'Mizuki'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Azur Lane',
        srcMusic: './music/graphite.mp3',
        srcImg: './images/GraphiteSong.jpg',
        title: 'Graphite/Diamond',
        voice: 'May'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Accel World',
        srcMusic: './music/AccelWorld.mp3',
        srcImg: './images/accelworld.jpg',
        title: 'Unfinshes',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Rewrite',
        srcMusic: './music/phylosophy.mp3',
        srcImg: './images/PhylosophySong.jpg',
        title: 'Phylosophy',
        voice: 'Game OST'
    },
    {
        collection: './images/collectionFate.jpg',
        topic: 'Fate',
        srcMusic: './music/Phantom Joke.mp3',
        srcImg: './images/cosmos.jpg',
        title: 'Phantom Joke',
        voice: 'Eir Aoi'
    },
    {
        collection: './images/collectionFate.jpg',
        topic: 'Fate',
        srcMusic: './music/Cosmos in the Losbelt Maaya Sakamoto.mp3',
        srcImg: './images/cosmos.jpg',
        title: 'Cosmos in the Losbelt',
        voice: 'Maaya Sakamoto'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'King Raid',
        srcMusic: './music/eclipse.mp3',
        srcImg: './images/EclipseSong.jpg',
        title: 'Eclipse',
        voice: 'DreamCath'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Chaos Child',
        srcMusic: './music/Chaochild.mp3',
        srcImg: './images/chaochild.jpg',
        title: 'Uncontrollable',
        voice: 'いとうかなこ'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Classroom of the elite',
        srcMusic: './music/classroom.mp3',
        srcImg: './images/classroom.jpg',
        title: 'Dancing in the game',
        voice: 'ZAQ'
    },
    {
        collection: './images/collectionHonkai.jpg',
        topic: 'Honkai',
        srcMusic: './music/Cyberangel.mp3',
        srcImg: './images/cyber-honkai.jpg',
        title: 'Cyberangel',
        voice: 'Hanser'
    },
    {
        collection: './images/collectionFairy.jpg',
        topic: 'Fairy Tail',
        srcMusic: './music/fairytail.mp3',
        srcImg: './images/FairySong.jpg',
        title: 'Ashita Wo Narase',
        voice: 'Kavka Shishido'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'Naruto',
        srcMusic: './music/naruto.mp3',
        srcImg: './images/narutoSong.jpg',
        title: 'Opening 21',
        voice: 'Kadokawa'
    },
    {
        collection: './images/honkai.jpg',
        topic: 'One Piece',
        srcMusic: './music/onepiece.mp3',
        srcImg: './images/onePieceSong.jpg',
        title: 'Fight Together',
        voice: 'Kadokawa'
    },

]

var play = document.querySelector('.control-music .play-pause')
var list = document.querySelector('.list-music i')
var contentList = document.querySelector('.list-music .list')
var music = document.querySelector('.control-music .music-source audio')
var imgRotate = document.querySelector('.system-play_music img')
var indexMusic = 0

var itemsPlay = document.querySelectorAll('.content-items .play')
itemsPlay.forEach(function (items) {
    items.addEventListener('click', function () {
        var musicSource = items.parentElement
        var listMusic = document.querySelector('.list-music .list')

        var srcMusic = musicSource.querySelector('.music-source audio').src
        var nameMusic = musicSource.querySelector('.description span').innerHTML
        var imgMusicInTopic = musicSource.querySelector('.content-items img').src
        var newMusicList = document.createElement('list')
        music.src = srcMusic
        displayTimer() //reset Screen
        changeImgControl(musicSource) //Change image in control music
        newMusicList.innerHTML = renderList(nameMusic, srcMusic, imgMusicInTopic)

        var checkMusicInList = document.querySelectorAll('.list list') //Select tới nơi chứa từng list Music
        for (var i = 0; i < checkMusicInList.length; i++) { //Duyệt qua từng Music trong list
            var nameInList = document.querySelectorAll('list .disk .description span') //Lấy ra tên music
            if (nameInList[i].innerHTML == nameMusic) { //So sánh tên Music với Music đang thêm vào. Nếu trùng thì phát lại và dừng chương trình
                displayAlert('Bài nhạc đã tồn tại trong play list. Không thể thêm được nữa !!!')
                isPlay = true
                playPauseMusic()
                return
            }
        }
        checkActiveMusic(newMusicList)
        listMusic.append(newMusicList)

        var listMusicAfterAdd = document.querySelectorAll('.list-music .list list')
        indexMusic = listMusicAfterAdd.length - 1
        changeMini()

        if (isPlay == true) {
            isPlay = false
        }
        checkPlay(imgMusicInTopic)
        if(isInfinity == false){
            infinity.click()
        }
        displayTimer()
    })
})

//Infinity and Repeart
isInfinity = false
isRepeart = false
var infinity = document.querySelector('.infinity i')
var repeart = document.querySelector('.random i')

infinity.addEventListener('click', function () {
    if (isInfinity == false) {
        statusControl(true)
    } else if (isInfinity == true) {
        statusControl(false)
    }
})
repeart.addEventListener('click', function () {
    if (isRepeart == false) {
        statusControl(false)
    } else if (isRepeart == true) {
        statusControl(true)
    }
})

// When End Music
music.addEventListener('ended', endedSong)

//Next And Prev
var nextMusic = document.querySelector('.next i')
var prevMusic = document.querySelector('.prev i')
nextMusic.addEventListener('click', function () {
    changeMusic('next')
})
prevMusic.addEventListener('click', function () {
    changeMusic('prev')
})

//Hide/Unhide List Music
isHide = true
list.addEventListener("click", function () {
    if (isHide == true) {
        contentList.style.display = 'flex'
        isHide = false
    } else if (isHide == false) {
        contentList.style.display = 'none'
        isHide = true
    }
})

//Play/Pause Music
isPlay = false
play.addEventListener('click', playPauseMusic)

//Change Timer and Range Music
var rangeMusic = document.querySelector('.range input')
rangeMusic.addEventListener("change", moveRange)

//Hide/UnHide volume button and Down/Up Volume when hand range
var buttonVolume = document.querySelector('.volume i')
var volumeMusic = document.querySelector('.volume input')
volumeMusic.value = 99
buttonVolume.addEventListener('click', function () {
    setTimeout(function () {
        volumeMusic.style.display = 'none'
    }, 10000)
    volumeMusic.style.display = 'block'
})
volumeMusic.addEventListener('change', function () {
    music.volume = volumeMusic.value / 100
    var changeIcon = document.querySelector('.volume i')
    if (music.volume == 0) {
        changeIcon.classList.remove('fa-volume-high')
        changeIcon.classList.add('fa-volume-xmark')
    } else if (music.volume > 0) {
        changeIcon.classList.remove('fa-volume-xmark')
        changeIcon.classList.add('fa-volume-high')
    } else if (music.volume > 0.9) {
        displayAlert('Nghe Nhạc với âm lượng cao sẽ ảnh hưởng tới thính giác của bạn. Hãy cân nhắc trước khi thực hiện hành động này')
    }
})

//Delete Music
var count
var btnDelete = document.querySelector('.delete-music span')
var imgMusicSystem = document.querySelector('.system-play_music img')
var titleMusicSystem = document.querySelector('.system-play_music .title-music span')
btnDelete.addEventListener('click', function () {
    count = 0
    playPauseMusic()
    var listMusicOnMini = document.querySelectorAll('.list list')
    listMusicOnMini.forEach(function (music) {
        music.remove()
    })
    if(music.play()!==undefined){
        music.play().then(_ =>{
            music.removeAttribute('src')
            music.src = '' //src sẽ trả về link của chính trang web này
        })
        .catch(err=>{
            return
        })
    }
    imgMusicSystem.src = './images/disk.png'
    imgMusicSystem.classList.remove('active-rotate-img')
    titleMusicSystem.innerText = "Chưa có Play List"
    rangeMusic.value = 0
    localStorage.removeItem('PLAY_LIST')
    local = []
    displayTimer()
})

//Search Data and Controls

var searchInput = document.querySelector('form#search input')
var modalSearch = document.querySelector('.modal-search')

searchInput.addEventListener('keyup', function () {
    modalSearch.style.display = 'flex'
    var data = dataSearchCollection.filter(function (item) {
        var title = item.title.toLowerCase()
        var searchValue = searchInput.value.toLowerCase()
        if (searchInput.value == '') {
            return false
        }
        if (!title.includes(searchValue)) {
            return false
        }
        return true
    })
    renderSearch(data)

    var musicSearch = document.querySelectorAll('.modal-search .item-search')
    musicSearch.forEach(function (item) {
        item.addEventListener('click', function () {
            var data = this.querySelector('div')
            var dataTitle = this.querySelector('p').innerHTML
            var dataMusic = data.dataset.music
            var dataImage = data.dataset.avatar
            var newMusicList = document.createElement('list')
            var playListMusic = document.querySelector('.list-music .list')
            newMusicList.innerHTML = renderList(dataTitle, dataMusic, dataImage)

            var checkMusicInList = document.querySelectorAll('.list list') //Select tới nơi chứa từng list Music
            for (var i = 0; i < checkMusicInList.length; i++) { //Duyệt qua từng Music trong list
                var nameInList = document.querySelectorAll('list .disk .description span') //Lấy ra tên music
                if (nameInList[i].innerHTML == dataTitle) { //So sánh tên Music với Music đang thêm vào. Nếu trùng thì phát lại và dừng chương trình
                    displayAlert('Bài nhạc đã tồn tại trong play list. Không thể thêm được nữa !!!')
                    isPlay = true
                    playPauseMusic()
                    return
                }
            }

            checkActiveMusic(newMusicList)
            playListMusic.append(newMusicList)

            var playMusicInSystemAudio = document.querySelector('.control-music .music-source audio')
            var playMusicInSystemImg = document.querySelector('.img-music_control img')
            var playMusicInSystemTitle = document.querySelector('.img-music_control .title-music span')
            playMusicInSystemImg.src = dataImage
            playMusicInSystemAudio.src = dataMusic
            playMusicInSystemTitle.innerHTML = dataTitle

            checkPlay(dataImage)
            var listMusicAfterAdd = document.querySelectorAll('.list-music .list list')
            indexMusic = listMusicAfterAdd.length - 1
            changeMini()
        })
        if (isPlay == true) {
            isPlay = false
        }
        if(isInfinity == false){
            infinity.click()
        }
        displayTimer()
    })
})

//Hide Box Search when click on container
var container = document.querySelector('#container')
container.addEventListener('click', function (e) {
    var thisBox = e.target
    if (!modalSearch.contains(thisBox)) {
        modalSearch.style.display = 'none'
        searchInput.value = ''
    }
})

var dataCollectionRender = []

var renderHonkai = renderCollection(dataSearchCollection,'Honkai')
var renderSAO = renderCollection(dataSearchCollection,'Sword Art Online')
var renderCounter = renderCollection(dataSearchCollection,'Counter Side')
var renderFate = renderCollection(dataSearchCollection,'Fate')
var renderFairy = renderCollection(dataSearchCollection,'Fairy Tail')
var render86 = renderCollection(dataSearchCollection,'86')
var renderShadow = renderCollection(dataSearchCollection,'Shadow Garden')




var renderResult = dataCollectionRender.map(function (item) {
    return `<div class='collection-item'>
      <img src='${item[0].collection}'>
      <div class='click-me'>Thêm Danh Sách</div>
      <div class='data-collection' style='display:none;' data-collection='${item[0].topic}'></div>
      <div class='name-playlist'>
        <p> Anime: ${item[0].topic}</p>
        <p> Số bài: <b style='color:red;'>${item.length}</b></p>
      </div>
    </div>`
})

var renderHTML = renderResult.join(' ')
var wrapperCollection = document.querySelector('.collection .owl-carousel')
wrapperCollection.innerHTML = renderHTML


//Render Play List in Mini List
var collectionList = document.querySelectorAll('.collection-item')
collectionList.forEach(function (collect) {
    collect.addEventListener('click', function () {
        var dataCollection = this.querySelector('.data-collection').dataset.collection
        var find = dataSearchCollection.filter(function (list) {
            if (list.topic == dataCollection) {
                return true
            } else {
                return false
            }
        })
        var renderHTMLOnList = find.map(function (listItem) {
            return `<list><div class="disk" style='display:flex;'>
        <i class="fa-solid fa-compact-disc"></i>
        <div class='description' style='margin-left:0.5em;'>
            <span>${listItem.title}</span>
        </div>
        </div>
        <div class="status" style='display:none;'>
        <section>
            <div class="loader loader-7">
            <div class="line line1"></div>
            <div class="line line2"></div>
            <div class="line line3"></div>
            </div>
        </section>
        </div>
        <div class='music-source'>
        <audio src='${listItem.srcMusic}'></audio>
        </div>
        <div class='display-img' style='display:none;'>
        <img src='${listItem.srcImg}' class='change'>
        </div></list>`;
        })

        var finishRender = renderHTMLOnList.join(' ')
        var playList = document.querySelector('.list-music .list')
        var crePlayList = document.createElement('div')
        crePlayList.className = 'list-playlist'
        crePlayList.innerHTML = finishRender
        playList.append(crePlayList)
        displayAlert(`Đã thêm Play List => ${dataCollection} <= vào danh sách phát. Vui lòng vào Danh sách kiểm tra`)

        var srcInList = document.querySelectorAll('.list list')
        srcInList.forEach(function (src, index) {
            src.addEventListener('click', function () {
                var src1 = this.querySelector('audio')
                music.src = src1.src
                indexMusic = index
                checkActiveMusic(src)
                checkPlay(src)
            })
        })

        if(isInfinity == false){
            infinity.click()
        }
        displayTimer()
    })
})



//Save list on Localstorage

var save = document.querySelector('.save-music span')

save.addEventListener('click',function(){
    if(count>0){
        displayAlert('Vui Lòng Reset lại PlayList trước khi thêm bài hát mới')
        return
    }else{
        var listMusicHaveAdd = document.querySelectorAll('.list-music .list list')
        if(listMusicHaveAdd.length > 0){
            count ++
            listMusicHaveAdd.forEach(function(item){
                var localImg = item.querySelector('.display-img img').src
                var localMusic = item.querySelector('.music-source audio').src
                var localTitle = item.querySelector('.disk .description span').innerHTML
                
                var dataLocal = {
                    srcImg: localImg,
                    srcMusic: localMusic,
                    title: localTitle
                }
                local.push(dataLocal)
                localStorage.setItem('PLAY_LIST',JSON.stringify(local))
            })
            displayAlert('Bạn đã ghi nhớ Play List. Lần vào web tiếp theo Play List sẽ tự động thêm vào danh sách')
        }else{
            displayAlert('Play List đang trống. Không thể thêm')
            return
        }
    }
})



//CallBack funtion:

function setCount (){
    var checkList = document.querySelectorAll('.list-music .list list')
    if(checkList.length == 0){
        count = 0
    }else{
        count = 1
    }
}

//Render Collection
function renderCollection(data,collection){
    var filter = data.filter(function(topicFilter){
        if(topicFilter.topic == collection){
            return true
        }else{
            return false
        }
    })
    return dataCollectionRender.push(filter)
}

//Change music on Mini List
function changeMini() {
    //Change music on List Mini
    var srcInList = document.querySelectorAll('.list list')
    srcInList.forEach(function (src, index) {
        src.addEventListener('click', function () {
            var src1 = this.querySelector('audio')
            music.src = src1.src
            indexMusic = index
            checkActiveMusic(src)
            checkPlay(src)
        })
    })
}

//Render List Mini and check to append List
function renderListOnAppend(title) {
    var checkMusicInList = document.querySelectorAll('.list list') //Select tới nơi chứa từng list Music
    for (var i = 0; i < checkMusicInList.length; i++) { //Duyệt qua từng Music trong list
        var nameInList = document.querySelectorAll('list .disk .description span') //Lấy ra tên music
        if (nameInList[i].innerHTML == title) { //So sánh tên Music với Music đang thêm vào. Nếu trùng thì phát lại và dừng chương trình
            displayAlert('Bài nhạc đã tồn tại trong play list. Không thể thêm được nữa !!!')
            isPlay = true
            playPauseMusic()
            return
        }
    }
}


//Render List
function renderList(name, music, img) {
    return `<div class="disk" style='display:flex;'>
    <i class="fa-solid fa-compact-disc"></i>
    <div class='description' style='margin-left:0.5em;'>
        <span>${name}</span>
    </div>
    </div>
    <div class="status" style='display:none;'>
        <section>
        <div class="loader loader-7">
        <div class="line line1"></div>
        <div class="line line2"></div>
        <div class="line line3"></div>
        </div>
        </section>
    </div>
    <div class='music-source'>
    <audio src='${music}'></audio>
    </div>
    <div class='display-img' style='display:none;'>
    <img src='${img}' class='change'>
    </div>`;
}

//Check Play
function checkPlay(list) {
    var playPromise = music.play()
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            isPlay = false
            playPauseMusic()
            changeImgControl(list)
        })
            .catch(error => {
                return
            })
    }
}

//Check Active
function checkActiveMusic(link) {
    var checkActive = document.querySelector('.list list .status.active-music')
    if (checkActive == null) {
        link.querySelector('.status').classList.add('active-music')
    } else {
        checkActive.classList.remove('active-music')
        link.querySelector('.status').classList.add('active-music')
    }
}

//Check infinity or Random
function statusControl(status) {
    if (status == true) {
        isInfinity = true
        infinity.style.color = 'red'
        isRepeart = false
        repeart.style.color = 'black'
    } else if (status == false) {
        isInfinity = false
        infinity.style.color = 'black'
        isRepeart = true
        repeart.style.color = 'red'
    }
}

//Check End Music
function endedSong() {
    var listMusicAfterEnded = document.querySelectorAll('.list-music .list list')
    if (isInfinity == true) {
        changeMusic('next')
    } else if (isRepeart == true) {
        indexMusic = Math.floor(Math.random() * (listMusicAfterEnded.length))
        changeMusic('next')
    } else if (infinity == false || isRepeart == false) {
        isPlay = true
        playPauseMusic()
    }
}

//Change Img
function changeImgControl(musicSrc) {
    var imgMusic = document.querySelector('.img-music_control img')
    var titleMusic = document.querySelector('.img-music_control .title-music span')
    imgMusic.src = musicSrc.querySelector('img.change').src
    titleMusic.innerHTML = musicSrc.querySelector('.description span').innerHTML
}

//Change infomation in System Music When Click Next or Prev
function changeInfomationOnNextOrPrev(number) {
    var imagesMusicInList = document.querySelectorAll('.list list .display-img img')
    var titleMusicInList = document.querySelectorAll('.list list .disk span')
    var imagesMusicInControler = document.querySelector('.img-music_control img')
    var titleMusicInControler = document.querySelector('.title-music span')
    imagesMusicInControler.src = imagesMusicInList[number].src
    titleMusicInControler.innerHTML = titleMusicInList[number].innerHTML
}

//Change Music in System When Click Next or Prev
function changeMusic(direction) {
    if (music.src == location.href) {
        return
    }
    if (music.play() !== undefined) {
        music.play().then(_ => {
            var arrayMusic = document.querySelectorAll('.list list .music-source audio')
            if (direction === 'next') {
                indexMusic++
                if (indexMusic > arrayMusic.length - 1) {
                    indexMusic = 0
                }
                changeInfomationOnNextOrPrev(indexMusic)
                isPlay = false
            } else if (direction === 'prev') {
                indexMusic--
                if (indexMusic < 0) {
                    indexMusic = arrayMusic.length - 1
                }
                changeInfomationOnNextOrPrev(indexMusic)
                isPlay = false
            }
            music.load()
            music.src = arrayMusic[indexMusic].src
            var ParentMusic = arrayMusic[indexMusic].parentElement.parentElement
            checkActiveMusic(ParentMusic)
            playPauseMusic()
        })
            .catch(error => {
                return
            })
    }
}

//Play/Pause
function playPauseMusic() {
    if (music.src == location.href) {
        return
    }
    if (isPlay == false) {
        if (music.play() !== undefined) {
            music.play().then(_ => {
                music.play()
                play.innerHTML = '<i class="fa-solid fa-pause" title="Tạm Dừng"></i>'
                isPlay = true
                imgRotate.classList.add('active-rotate_img')
                timer = setInterval(displayTimer, 500)
            })
                .catch(error => {
                    return
                })
        }
    }
    else if (isPlay == true) {
        if (music.play() !== undefined) {
            music.play().then(_ => {
                music.pause()
                play.innerHTML = '<i class="fa-solid fa-play"></i>'
                isPlay = false
                imgRotate.classList.remove('active-rotate_img')
                clearInterval(timer)
            })
                .catch(error => {
                    return
                })
        }
    }
}

//Display Alert when error
function displayAlert(notice) {
    var alert = document.querySelector('.alert .notice-alert .content-alert')
    var displayAlert = document.querySelector('.alert')
    var buttonDisplay = displayAlert.querySelector('.button-alert .select')
    alert.innerHTML = notice
    displayAlert.style.display = 'flex'
    buttonDisplay.addEventListener('click', function () {
        displayAlert.style.display = 'none'
    })
}

//Reset Screen value in Music Range
function displayTimer() {
    var { duration, currentTime } = music
    var endMusic = document.querySelector('.range .started')
    var startMusic = document.querySelector('.range .ended')
    endMusic.textContent = formatTimer(currentTime)
    rangeMusic.max = duration
    rangeMusic.value = currentTime

    if (!duration) {
        startMusic.textContent = '00:00'
    } else {
        startMusic.textContent = formatTimer(duration)
    }
}

//Format Timer Start/End on music
function formatTimer(number) {
    var minutes = Math.floor(number / 60) //Phút = max/60 và làm tròn xuống
    var seconds = Math.floor(number - minutes * 60) //Giây = số phút * 60 rồi trừ cho max
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
}

//Move Range when Music Range is change
function moveRange() {
    music.currentTime = rangeMusic.value //Thời gian chạy = giá trị value của range
}

//Render Data Search
function renderSearch(data) {
    var renderHTML = data.map(function (item) {
        return `<div class="item-search">
        <i class="fa-brands fa-searchengin"></i>
        <p>${item.title}</p>
        <div style='display: none;' data-music='${item.srcMusic}' data-avatar='${item.srcImg}'></div>
    </div>`
    })
    if (renderHTML.length == 0) {
        modalSearch.innerHTML = `<div class="item-search fail">
        <i class="fa-solid fa-circle-exclamation"></i>
        <p>Không tìm thấy kết quả</p>
    </div>`
    } else {
        var newData = renderHTML.join(' ')
        modalSearch.innerHTML = newData
    }
}