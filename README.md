
# YT Player

![version](https://img.shields.io/github/manifest-json/v/Natjo/ytPlayer)  

  
## Parameters
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| cta | HTMLElement | - |  |


## Methods & Properties
| Methods | Description |
| ------ | ------ |
| ytPlayer.onReady() | Fire when yt script loaded and player ready |
| ytPlayer.onEnd() | Fire at the end of video |

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
    onEnd() {
        video.setAttribute("aria-hidden", true);
    },
    onReady() {
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
```html
<button class="videoPlayer-cta" aria-controls="popin-id" data-video-id="id">open</button>
<div class="videoPlayer" id="popin-id" aria-modal="true" aria-hidden="true">
    <div class="box">
        <header>
			<button class="btn-close">close</button>
        </header>				
        <picture class="posterframe">
            <img width="1131" height="636" src="data:image/gif;base64,R0lGODlhNQReAtUzANrc29vd3Nnb2tze3f7+/tja2f39/f///+Tm5eDi4fr6+vz9/Pz8/N7g39/h4Ofp6PX19eHi4ujq6fv8/Pf4993f3vb29vj4+O/w7/Hy8fHy8uzt7N/g3+jp6PHx8fDx8PLz8vLy8vr7+t/g4OLk4/f4+Ozt7e3u7ufo5+Pk5PDx8fT19fPz8/j5+OPk4+vs7PT09Obn5uDh4f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgMTE2LjE2NDc2NiwgMjAyMS8wMi8xOS0yMzoxMDowNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkY4NzU5MDNDN0NCMTFFQkEzQkI4RDgwRjZGQThEMkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkY4NzU5MDJDN0NCMTFFQkEzQkI4RDgwRjZGQThEMkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIwMjAgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IkZDNTQyM0NGRTcwNzE0RTM5QTA4Nzc3NzI3MkJDNjIwIiBzdFJlZjpkb2N1bWVudElEPSJGQzU0MjNDRkU3MDcxNEUzOUEwODc3NzcyNzJCQzYyMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAADMALAAAAAA1BF4CAAb/wJlwSCwaj8ikcslsOp/QqHRKrVqv2Kx2y+16v+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/wADChxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fP/59AgwodSrSo0aNIkypdyrSp06dQo0qdSrWq1atYs2rdyrWr169gw4odS7as2bNo06pdy7at27dw48qdS7eu3bt48+rdy7ev37+AAwseTLiw4cOIEytezLix48eQI0ueTLmy5cuYM2vezLmz58+gQ4seTbq06dOoU6tezbq169ewY8ueTbu27du4c+vezbu379/AgwsfTry48ePIkytfzry58+fQo0ufTr269evYs2vfzr279+/gw4sfT768+fPo06tfz769+/fw48ufT7++/fv48+vfz7+///8ABijggAQWaOCBCCao4IIMNujggxBGKOGEFFZo4YUYZqjhhhx26P/hhyCGKOKIJJZo4okopqjiiiy26OKLMMYo44w01mjjjTjmqOOOPPbo449ABinkkEQWaeSRSCap5JJMNunkk1BGKeWUVFZp5ZVYZqnlllx26eWXYIYp5phklmnmmWimqeaabLbp5ptwxinnnHTWaeedeOap55589unnn4AGKuighBZq6KGIJqrooow26uijkEYq6aSUVmrppZhmqummnHbq6aeghirqqKSWauqpqKaq6qqsturqq7DGKuustNZq66245qrrrrz26uuvwAYr7LDEFmvsscgmq+yyzDbr7LPQRivttNRWa+212Gar7bbcduvtt+CGK+645JZr7rnopqv/7rrstuvuu/DGK++89NZr77345qvvvvz26++/AAcs8MAEF2zwwQgnrPDCDDfs8MMQRyzxxBRXbPHFGGes8cYcd+zxxyCHLPLIJJds8skop6zyyiy37PLLMMcs88w016wsAQQYsMACDNgc1wE4G8DABAq0YEEIJjyAAAI+w0UABTBogMEGEqSQgAMDABCAAE2/dcAJCTQwwNYBBDA22V2/9UEDAQAAgABmV0B2AGm7RUEEbbtt9tkADFB3WwwgMIAAAhRgtt5u/80WAQ+8LYDWZW+duOJrvaD1433D3TfdlKuVgQOFS0545J2rtcIIWcON+dsAlJ7WBXizTngBbxfg/zpaCpDg9uyEu9367WYZIEECFQwwAAcyuBADCh0Ab9YBIkAAggoesABBCQpMsIDz3Hfv/ffghy/++OSXb/756Kev/vrst+/++/DHL//89Ndv//3456///vz37///AAygAAdIwAIa8IAITKACF8jABjrwgRCMoAQnSMEKWvCCGMygBjfIwQ568IMgDKEIR0jCEprwhChMoQpXyMIWuvCFMIyhDGdIwxra8IY4zKEOd8jDHvrwh0AMohCHSMQiGvGISEyiEpfIxCY68YlQjKIUp0jFKlrxiljMoha3yMUuevGLYAyjGMdIxjKa8YxoTKMa18jGNrrxjXCMoxznSMc62v/xjnjMox73yMc++vGPgAykIAdJyEIa8pCITKQiF8nIRjrykZCMpCQnSclKWvKSmMykJjfJyU568pOgDKUoR0nKUprylKhMpSpXycpWuvKVsIylLGdJy1ra8pa4zKUud8nLXvryl8AMpjCHScxiGvOYyEymMpfJzGY685nQjKY0p0nNalrzmtjMpja3yc1uevOb4AynOMdJznKa85zoTKc618nOdrrznfCMpzznSc962vOe+MynPvfJz376858ADahAB0rQghr0oAhNqEIXytCGOvShEI2oRCdK0Ypa9KIYzahGN8rRjnr0oyANqUhHStKSmvSkKE2pSlfK0pa69KUmMI2pTGdK05ra9KY4zalOd8rTnvr0p0ANqlCHStSiGvWoSDVXEAAAOw==" alt="">
        </picture>
        <div class="player" id="player-id"></div>
    </div>
</div>
```

#### javascript
```javascript
import ytPlayer from "../../modules/ytPlayer/ytPlayer.js";

const cta = el.querySelector(".videoPlayer-cta");
const btn_close = el.querySelector(".btn-close");
let popinVideo;

const yt = new ytPlayer(cta, {
    onEnd() {
        popinVideo.setAttribute("aria-hidden", true);
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
.videoPlayer-cta{
    opacity: 0;
    justify-self: start;
}
.videoPlayer {
    position: relative;
    display: flex;
    transition: opacity 0.4s ease 0.2s;
    background: rgba(0,0,0,.5);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
    visibility: hidden;
    opacity: 0;
    
    .box{
        display: grid;
        grid-auto-rows: auto;
        margin: auto;  
    }
    header{
        grid-column: 1;
        grid-row: 1;
        height: 67px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        background-color: #fff;
        padding: 0 30px;
        border-radius: 20px 20px 0 0;
    }
    .btn-close{
        .icon{
            fill: var(--color-5);
        }
    }
    .player {
        grid-column: 1;
        grid-row: 2;
        z-index: 0;
        background: #000;
        opacity: 0;
        transition: opacity 0.4s ease 0.2s;
    }
    .posterframe{
        grid-column: 1;
        grid-row: 2;
        opacity: 0;
        width:100%;
        max-width: 800px;
        height: auto;
    
        img{
            width: 100%;
            height: auto;
        }
    }
    iframe {
        width: 100%;
        height: 100%;
        grid-column: 1;
        grid-row: 2;
    }
        
    &[aria-hidden=false]{
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
        padding: var(--ctr-margin);
        box-sizing: border-box;
    
        .player {
            opacity: 1;
        }
    }
}
```

## Demo
[See codepen demo](https://codepen.io/natjo/pen/NmMzNd?editors=0011)


