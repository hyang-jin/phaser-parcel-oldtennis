import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import {TitleScreen} from '../consts/SceneKeys'
import * as AudioKeys from '../consts/AudioKeys'

export default class Preload extends Phaser.Scene{
    
    preload(){
        this.load.addFile(new WebFontFile(this.load, [
            'Press Start 2P',
            'Lato',
            'Roboto',
            'Viaoda Libre'
        ]))

        this.load.audio(AudioKeys.PongBeep, 'assets/ping_pong_8bit_beeep.wav')
        this.load.audio(AudioKeys.PongPlop, 'assets/ping_pong_8bit_plop.wav')

    }

    create(){
        this.scene.start(TitleScreen)
    }
}
