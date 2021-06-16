import Phaser from 'phaser'

import { TitleScreen } from '../consts/SceneKeys'

export default class GameOver extends Phaser.Scene{
    /**
     * 
     * @param {{leftScore: number, rightScore:number}} data 
     */
    create(data){
        let titleText = "Game Over"
        if(data.leftScore > data.rightScore){
            //Player won
            titleText = 'Yon Win'
        }

        this.add.text(400,200, titleText, {
            fontFamily:'"Press Start 2P',
            fontSize: 38
        })
        .setOrigin(0.5, 0.5)

        this.add.text(400, 300, 'press space to continue', {
            fontFamily:'Roboto',
            fontSize: 20
        })
        .setOrigin(0.5, 0.5)

        this.input.keyboard.once('keydown-SPACE', ()=>{
            this.scene.start(TitleScreen)
        })

    }
}