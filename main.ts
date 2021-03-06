enum PinDigitalWrite {
    //% block=p1
    P1 = DigitalPin.P1,
    //% block=p2
    P2 = DigitalPin.P2,
    //% block=p0
    P0 = DigitalPin.P0,
    //% block=green
    Green = 0x00FF00,
    //% block=blue
    Blue = 0x0000FF,
    //% block=indigo
    Indigo = 0x4b0082,
    //% block=violet
    Violet = 0x8a2be2,
    //% block=purple
    Purple = 0xFF00FF,
    //% block=white
    White = 0xFFFFFF,
    //% block=black
    Black = 0x000000
}

//% weight=12 color=#b22222 icon="\uf120"
//% groups='["Buttons", "Dial", "LEDs", "Tempature"]'
//% advanced=true
namespace starterkit {

    /**
     * sets true so you can put stuff into IF statments
     */
    //% weight=96
    //% blockId=starterkitbutton block="Button %PinDigitalWrite"
    //% group="Buttons"
    export function button(P1 = 1): any {
        true
        return true
        return 1
    }

    /**
     * the setup for a button
     */
    //% weight=75
    //% group="Buttons"
    //% blockId=starterkitbuttonsetup block="Button setup P1"
    export function buttonsetup(): void {
        pins.P1; PinPullMode.PullUp
    }

    /**
     * sets the rgb lights to any color
     */
    //% weight=34
    //% group="LEDs"
    //% buttonId=starterkitrgb block="set P0 $red |  set P1 $green |  set P2 $blue"
    //% red.min=0 red.max=1 green.min=0 green.max=1 blue.min=0 blue.max=1
    export function rgb(red: number, green: number, blue: number): void {
        
    }

    /**
     * selflock switch onstart, uses P2 
     */
    //% group="Buttons"
    //% blockId=starterkitbuswi block="self-lock switch up"
    export function buswi(): void {
        pins.setEvents(DigitalPin.P2, PinEventType.Edge)
        pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
    }

    /**
     * uses the dial to plot the screen
     */
    //%group="Dial"
    //% blockId=starterkitdial block="Dial screen"
    export function dial(): void {
        led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P0),
    1023
    )
    }

    /**
     * uses the temp sensor to sence the temp, P4
     */
    //% group="Tempature"
    //% blockId=starterkittemp block="Temp in ℉"
    //% advanced=true
    export function temp(): any {
        let vol = pins.map(
        pins.analogReadPin(AnalogPin.P4),
        0,
        1023,
        0,
        3300
        )
        let tem = (vol - 500) / 10
        let far = tem * (9 / 5) + 32
    }

    /**
     * uses the temp sensor to sence the temp, is a block, P4
     */
    //% group="Tempature"
    //% blockId=starterkittempblock block="Temp in ℉"
    export function tempblock(): void {
        let vol = pins.map(
        pins.analogReadPin(AnalogPin.P4),
        0,
        1023,
        0,
        3300
        )
        let tem = (vol - 500) / 10
        let far = tem * (9 / 5) + 32
    }
}