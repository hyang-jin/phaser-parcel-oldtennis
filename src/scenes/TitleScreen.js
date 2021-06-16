import Phaser from 'phaser'
import WebFontFile from './WebFontFile'
import {Game} from '../consts/SceneKeys'
import * as  AudioKeys from '../consts/AudioKeys'

class TitleScreen extends Phaser.Scene
{
    preload()
    {
    }

    create(){
        const title =  this.add.text(400, 250, 'Old School Tennis', {
            fontSize: 30,
            fontFamily: "'Press Start 2P'"
        })
        title.setOrigin(0.5, 0.5)

        this.add.text(400, 300, 'Press Space To Start', {
            fontSize: 15,
            fontFamily: "'Press Start 2P'"
        }).setOrigin(0.5,0.5)

        this.input.keyboard.once('keydown-SPACE', ()=>{
            this.sound.play(AudioKeys.PongBeep)
            this.scene.start(Game)
        })
    }
}

export default TitleScreen