const videoMap = {
    'infant_title': '1_The_Infant.mp4',
    'schoolboy_title': '2_The_Schoolboy.mp4',
    'lover_title': '3_The_Lover.mp4',
    'soldier_title': '4_The_Soldier.mp4',
    'justice_title': '5_The_Justice.mp4',
    'sixth_title': '6_Sixth_Age.mp4',
    'death_title': '7_Death.mp4'
};


const popup = document.getElementById('popupOverlay');
const video = document.getElementById('videoFrame');
const videoSource = document.getElementById('videoSource');
const closeBtn = document.getElementById('closeBtn');

Object.keys(videoMap).forEach(id => {
    const element = document.getElementById(id);
    element.style.cursor ='pointer';
    element.addEventListener('click',() => {
        openPopup(videoMap[id]);
    });
});

function openPopup(src){
    videoSource.src = src;
    video.load();
    popup.classList.add('active'); 
}

function closePopup(){
    popup.classList.remove('active');
    video.pause();
    videoSource.src = "";
}

closeBtn.addEventListener('click' , closePopup);
