const onLoad = function() {
	CustomEase.create('Mo', '0.64, 0.04, 0.35, 1');

	let timelineLoad = new TimelineMax({ paused: true })
		.set(document.querySelector('#animation-cover'), { display: 'none' })
		// .set(document.querySelector('.underlay'), { opacity: 0 })
		.add(function() {
			for (let i = 0; i < 10; i++) {
				TweenMax.set(document.getElementsByClassName('underlay__row')[i], { opacity: 0 })
			}
		})
		// .set(document.getElementsByClassName('underlay__row')[0], { opacity: 0 })
		.set(document.querySelector('.content__title__english__content'), { yPercent: 100 })
		.set(document.querySelector('.content__title__korean__content'), { yPercent: 200 })
		.set(document.getElementsByClassName('content__group__line__content')[0], { yPercent: 100 })
		.set(document.getElementsByClassName('content__group__line__content')[1], { yPercent: 100 })
		.set(document.getElementsByClassName('content__group__line__content')[2], { yPercent: 100 })
		.set(document.getElementsByClassName('content__group__line__content')[3], { yPercent: 100 })
		.set(document.getElementsByClassName('content__group__line__content')[4], { yPercent: 100 })
		.set(document.getElementsByClassName('content__group__line__content')[5], { yPercent: 100 })
		.set(document.getElementsByClassName('content__group__line__content')[6], { yPercent: 100 })
		.set(document.getElementsByClassName('content__group__line__content')[7], { yPercent: 100 })
		.set(document.getElementsByClassName('content__group__line__content')[8], { yPercent: 100 })
		// .set(document.getElementsByClassName('content__group__line__content')[9], { yPercent: 100 })
		// .set(document.getElementsByClassName('content__group__line__content')[10], { yPercent: 100 })
		// .set(document.getElementsByClassName('content__group__line__content')[8], { yPercent: 100 })
		.to(document.querySelector('.content__title__english__content'), 0.8, { ease: 'Mo', yPercent: 0 })
		.to(document.querySelector('.content__title__korean__content'), 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.7')
		.to(document.getElementsByClassName('content__group__line__content')[0], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.7')
		.to(document.getElementsByClassName('content__group__line__content')[1], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.7')
		.to(document.getElementsByClassName('content__group__line__content')[2], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.7')
		.to(document.getElementsByClassName('content__group__line__content')[3], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.7')
		.to(document.getElementsByClassName('content__group__line__content')[4], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.775')
		.to(document.getElementsByClassName('content__group__line__content')[5], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.775')
		.to(document.getElementsByClassName('content__group__line__content')[6], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.775')
		.to(document.getElementsByClassName('content__group__line__content')[7], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.775')
		.to(document.getElementsByClassName('content__group__line__content')[8], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.775')
		// .to(document.getElementsByClassName('content__group__line__content')[9], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.775')
		// .to(document.getElementsByClassName('content__group__line__content')[10], 0.8, { ease: 'Mo', yPercent: 0 }, '-=0.775');
		// .to(document.querySelector('.underlay'), 0.8, { ease: 'Mo', opacity: 1 }, '-=0.775');

	let timelineUnderlay = new TimelineMax({ paused: true })
		.to({}, 0.45, {})
		.to(document.getElementsByClassName('underlay__row')[4], 0.8, { ease: 'Mo', opacity: 0.52 })
		.to(document.getElementsByClassName('underlay__row--flipped')[0], 0.8, { ease: 'Mo', opacity: 0.52 }, '-=0.8')
		.to(document.getElementsByClassName('underlay__row')[3], 0.8, { ease: 'Mo', opacity: 0.64 }, '-=0.75')
		.to(document.getElementsByClassName('underlay__row--flipped')[1], 0.8, { ease: 'Mo', opacity: 0.64 }, '-=0.75')
		.to(document.getElementsByClassName('underlay__row')[2], 0.8, { ease: 'Mo', opacity: 0.76 }, '-=0.75')
		.to(document.getElementsByClassName('underlay__row--flipped')[2], 0.8, { ease: 'Mo', opacity: 0.76 }, '-=0.75')
		.to(document.getElementsByClassName('underlay__row')[1], 0.8, { ease: 'Mo', opacity: 0.88 }, '-=0.75')
		.to(document.getElementsByClassName('underlay__row--flipped')[3], 0.8, { ease: 'Mo', opacity: 0.88 }, '-=0.75')
		.to(document.getElementsByClassName('underlay__row')[0], 0.8, { ease: 'Mo', opacity: 1 }, '-=0.75')
		.to(document.getElementsByClassName('underlay__row--flipped')[4], 0.8, { ease: 'Mo', opacity: 1 }, '-=0.75');
	

	timelineLoad.play();
	timelineUnderlay.play();
};

if (
	document.readyState === 'complete' ||
	(document.readyState !== 'loading' && !document.documentElement.doScroll)
) {
	onLoad();
} else {
	document.addEventListener('DOMContentLoaded', onLoad);
}
