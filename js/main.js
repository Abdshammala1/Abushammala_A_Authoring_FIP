function displayVideo(video) {
    var video_wrap = video + '_video';
    var video_wraps = document.getElementsByClassName('video_wrap');
    for (var i = 0; i < video_wraps.length; i++) video_wraps[i].style.display = 'none';
    video_wraps = document.getElementsByClassName(video_wrap);
    video_wraps[0].style.display = 'block';
}

function closeVideo() {
    var video_wraps = document.getElementsByClassName('video_wrap');
    for (var i = 0; i < video_wraps.length; i++) video_wraps[i].style.display = 'none';
}