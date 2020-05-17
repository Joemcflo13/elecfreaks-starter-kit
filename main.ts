/// <reference no-default-lib="true"/>
//% weight=12 color=#b22222 icon="\uf120"
namespace starterkit {
    /**
     * sets true so you can put stuff into IF statments
     */
    //% weight=96
    //% blockId=starterkitbutton block="Button P1"
    export function button(P1 = 1): Boolean {
        true
        return true
    }

    /**
     * the setup for a button
     */
    //% weight=75
    //% blockId=starterkitbuttonsetup block="Button setup P1"
    export function buttonsetup(): void {
        pins.P1; PinPullMode.PullUp
    }

    /**
     * sets the rgb lights to any color
     */
    //% weight=34
    //% buttonId=starterkitrgb block="set P0 $red |  set P1 $green |  set P2 $blue"
    //% red.min=0 red.max=1 green.min=0 green.max=1 blue.min=0 blue.max=1
    export function rgb(red: number, green: number, blue: number): void {
        
    }

    /**
     * uses the trimpot to plot the screen with P0
     */
    //% buttonId=starterkittrimpot button="trimpot"
    export function trimpot(): void {
        
    }

    /**
     * selflock switch onstart
     */
    //% blockId=starterkitbuswi block="self-lock switch up"
    export function buswi(): void {
        
    }
}