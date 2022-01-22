/* eslint-disable */

/**
 * ytPlayer
 * @param {HTMLElement}
 * 
 * @event events
 * @type {object}
 * @property {function} onPlayerEnded
 * @property {function} onPlayerReady
 * 
 * @method play - start the video at the begining
 * 
 */
 function ytPlayer(el, events = {}) {
	const cta = el.querySelector('.ytPlayer-cta');
	const videoId = cta.getAttribute('aria-controls');
	let iframe;
	let player;
	let apiReady = false;

	const play = () => {
		cta.setAttribute('aria-expanded', true);
		iframe.setAttribute('aria-hidden', false);
		player.seekTo(0);
		typeof events.onplay === 'function' && events.onplay();
	}

	const stop = () => {
		cta.setAttribute('aria-expanded', false);
		iframe.setAttribute('aria-hidden', true);
		typeof events.onend === 'function' && events.onend();
	}

	const api = () => {
		if (!document.getElementById('yt_api')) {
			const script = document.createElement('script');
			script.src = 'https://www.youtube.com/iframe_api';
			script.id = 'yt_api';
			script.setAttribute('defer', '');
			document.head.appendChild(script);
			window.onYouTubeIframeAPIReady = () => ready();
		} else {
			ready();
		}
		apiReady = true;
	}

	const onPlayerStateChange = (e) => {
		e.data == YT.PlayerState.ENDED && stop();
	};

	const onPlayerReady = (e) => {
		iframe = cta.parentNode.querySelector('.ytPlayer-iframe');
		play();
	};

	const ready = () => {
		player = new YT.Player(videoId, {
			videoId: videoId,
			playerVars: {
				mute: 1,
				autoplay: 0,
				controls: 1,
				autohide: 1,
				showinfo: 0,
				rel: 0
			},
         events: {
				onReady: onPlayerReady,
				onStateChange: onPlayerStateChange
			}
		});
	};

	 cta.onclick = () => !apiReady ? api() : play();
}

export default ytPlayer;
