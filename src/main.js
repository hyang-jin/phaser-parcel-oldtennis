import Phaser, { GameObjects } from 'phaser'

import Preload from './scenes/Preload'
import TitleScreen from './scenes/TitleScreen'
import Game from './scenes/Game'
import GameBackground from './scenes/GameBackground'
import GameOver from './scenes/GameOver'

import * as SceneKeys from './consts/SceneKeys'

const config = {
    width:800,
    height:500,
    // backgroundColor:"#616161",
    type:Phaser.AUTO,
    physics:{
        default:'arcade',
        arcade:{
            gravity: {y:0},
            debug:true
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add(SceneKeys.Preload, Preload)
game.scene.add(SceneKeys.TitleScreen, TitleScreen)
game.scene.add(SceneKeys.Game, Game)
game.scene.add(SceneKeys.GameBackground, GameBackground)
game.scene.add(SceneKeys.GameOver, GameOver)

game.scene.start(SceneKeys.Preload)
// game.scene.start(SceneKeys.Game)