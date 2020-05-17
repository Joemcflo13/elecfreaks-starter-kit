/// <reference no-default-lib="true"/>
//% weight=12 color=#002050 icon="\uf140
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
    //% blockId=starterkitbuttonsetup block="Button setup P1"
    export function buttonsetup(): void {
        pins.P1; PinPullMode.PullUp
    }
    /**
     * uses the trimpot to plot the screen
     */
    //% buttonId=starterkittrimpot button="trimpot P0"
    export function trimpot(): void {
        led.plotBarGraph(
            pins.analogReadPin(AnalogPin.P0),
            1023
        )
    }
    /**
     * sets the rgb lights to any color
     */
    //% buttonId=starterkitrgb block="set P0 $red | set P1 $green | set P2 $blue"
    //% red.min=0 red.max=1 green.min=0 green.max=1 blue.min=0 blue.max=1
    export function rgb(red: number, green: number, blue: number): void {
        
    }
}