

$(".lightgallery-items").lightGallery({
	selector: '.lightgallery-item',
	download: false,
    zoom: false,
	pause:2000
}); 

$(".lightgallery-video").lightGallery({
	videoMaxWidth:'1200px',
    selector: 'this',
	download: false,
    zoom: false,
	autoplay: false,
	youtubePlayerParams: { modestbranding: 1, showinfo: 0, controls: 1, autoplay: 1 },
	vimeoPlayerParams: { autoplay:1, badge:0, title:0, byline:0 }
});

$(".lightgallery-iframe").lightGallery({
    selector: 'this',
	download: false,
    zoom: false,
	autoplay: false,		
	iframeMaxWidth: '80%'
});	


