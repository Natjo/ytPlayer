
# YT Player

![version](https://img.shields.io/github/manifest-json/v/Natjo/ytPlayer)  

  
## Parameters
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| cta | HTMLElement | - |  |


## Methods & Properties
| Methods | Description |
| ------ | ------ |
| ytPlayer.onPlayerReady() | Fire when yt script loaded and player ready |
| ytPlayer.onPlayerEnded() | Fire at the end of video |

## Events
| Name | Arguments | Description |
| ------ | ------ | ------ |
| play | - | Start the video at the begining |


## Usage
### No popin
Click on posterframe to start video over it.
Ratio depend of posterframe img

#### Javascript
```javascript
import ytPlayer from "../../modules/ytPlayer/ytPlayer.js";

const cta = el.querySelector(".cta");
let video;

const yt = new ytPlayer(cta, {
    onPlayerStateChange() {
        video.setAttribute("aria-hidden", true);
    },
    onPlayerReady() {
        video = el.querySelector('.player');

        cta.onclick = () => {
            yt.play();
            video.setAttribute("aria-hidden", false);
        };
    },
});
```
#### css
```css

```
### Popin
Open popin and start video.
Ratio depend of image.
In this exemple it's 16/9
#### javascript
```javascript
import ytPlayer from "../../modules/ytPlayer/ytPlayer.js";

const cta = el.querySelector(".videoPlayer-cta");
const btn_close = el.querySelector(".btn-close");
let popinVideo;

const yt = new ytPlayer(cta, {
    onPlayerStateChange() {
        popinVideo.setAttribute("aria-hidden", true);
    },
    onPlayerReady() {
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

```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/NmMzNd?editors=0011)


