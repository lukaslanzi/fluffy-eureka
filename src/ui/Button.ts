import { Container, Sprite, Texture } from "pixi.js";

export class BGM extends Container {



    private BGMon:Texture
    private BGMoff:Texture
    private callback:Function
    private spr:Sprite

    constructor(BGMon:Texture, BGMoff:Texture, callback:Function)
    {

        super()
        this.BGMon = BGMon
        this.BGMoff = BGMoff
        this.callback = callback


        this.spr = Sprite.from(BGMon)
        this.addChild (this.spr)


        this.spr.interactive = true
        this.spr.on("mousedown" , this.onBGMdown, this)
        this.spr.on("mouseup" , this.onBGMup, this)

        private onBGMdown():void{
            this.callback()
            this.spr.texture = this.BGMoff
        }
        private onBGMup():void{
            console.log ("bgm up" , this)
            this.spr.texture = this.BGMon
        }
    
    }


