# YT Player

![version](https://img.shields.io/github/manifest-json/v/Natjo/ytPlayer)

## Parameters

| Parameter | Type        | Default | Description |
| --------- | ----------- | ------- | ----------- |
| cta       | HTMLElement | -       |             |

## Methods & Properties

| Methods            | Description                                 |
| ------------------ | ------------------------------------------- |
| ytPlayer.onReady() | Fire when yt script loaded and player ready |
| ytPlayer.onEnd()   | Fire at the end of video                    |

## Events

| Name | Arguments | Description                     |
| ---- | --------- | ------------------------------- |
| play | -         | Start the video at the begining |

## Usage

### No popin

Click on posterframe to start video over it.
Ratio depend of posterframe img

#### html

```html
<div class="ytPlayer">
    <button class="ytPlayer-cta" aria-expanded="false" aria-controls="kA78LV2DIP8" aria-label="Play video">Play</button>
    <picture>
        <source srcset="https://picsum.photos/id/722/1600/900" type="image/jpg">
        <img src="https://picsum.photos/id/722/1600/900" aria-hidden="true" alt="" loading="lazy">
    </picture>
    <div class="ytPlayer-iframe" id="kA78LV2DIP8" aria-hidden="true"></div>
</div>
```

#### Javascript

```javascript
import ytPlayer from "../../modules/ytPlayer/ytPlayer.js";

ytPlayer(document.querySelector(".ytPlayer"));
```

## Demo

[See codepen demo](https://codepen.io/natjo/pen/OJpGdBY?editors=1010)

### Popin
TODO

Open popin and start video.
Display posterframe at the end.
Ratio depend of image.
In this exemple it's 16/9

#### html

```html
<button class="videoPlayer-cta" aria-controls="popin-kA78LV2DIP8" data-video-id="kA78LV2DIP8">open</button>
<div class="videoPlayer" id="popin-kA78LV2DIP8" aria-modal="true" aria-hidden="true">
    <div class="box">
        <header>
            <button class="btn-close">close</button>
        </header>
        <div class="content">
            <picture class="posterframe">
                <img width="1600" height="900" src="https://picsum.photos/id/722/1600/900" alt="" />
            </picture>
            <div class="player" id="player-kA78LV2DIP8"></div>
        </div>
    </div>
</div>
```

#### javascript

```javascript
const videoPlayer = document.querySelector(".videoPlayer");
const btn_close = videoPlayer.querySelector(".btn-close");
const posterframe = videoPlayer.querySelector(".posterframe");

const cta = document.querySelector(".videoPlayer-cta");
let popinVideo;

const yt = new ytPlayer(cta, {
    onEnd() {
        videoPlayer.classList.add("ended");
        posterframe.onclick = () => {
            videoPlayer.classList.remove("ended");
            yt.play();
        };
    },
    onReady() {
        popinVideo = document.getElementById(cta.getAttribute("aria-controls"));
        cta.onclick = () => {
            yt.play();
            popinVideo.setAttribute("aria-hidden", false);
        };

        btn_close.onclick = () => {
            popinVideo.setAttribute("aria-hidden", true);
        };
    }
});
```

#### css

```css
.videoPlayer {
    position: relative;
    display: flex;
    transition: opacity 0.4s ease 0.2s;
    background: rgba(0, 0, 0, 0.5);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    visibility: hidden;
    opacity: 0;

    .box {
        margin: auto;
    }
    header {
        height: 67px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #fff;
        padding: 0 30px;
        border-radius: 20px 20px 0 0;
    }
    .content {
        position: relative;
    }
    .player {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background: #000;
        opacity: 0;
        transition: opacity 0.4s ease 0.2s;
    }
    picture {
        width: 100%;
        max-width: 800px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;

        &:after {
            content: "play";
            position: absolute;
        }
    }
    img {
        display: block;
        width: 100%;
        height: auto;
    }
    &.ended {
        iframe {
            display: none;
        }
    }

    &[aria-hidden="false"] {
        clip: auto;
        width: 100%;
        height: 100vh;
        margin: 0;
        overflow: visible;
        visibility: visible;
        position: fixed;
        z-index: 2000;
        top: 0;
        left: 0;
        opacity: 1;
        padding: 40px;
        box-sizing: border-box;

        .player {
            opacity: 1;
        }
    }
}
```

## Demo

[See codepen demo](https://codepen.io/natjo/pen/mdWgoyg?editors=1010)
