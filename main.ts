namespace starterkit {
    /**
     * reacts with P2
     */
    //% blockId=starterkitbutton block="Button P2"
    export function button(DigitalPin.P2: 0): Boolean {
            set.true
    }
    /**
     * the setup for a button
     */
    //% blockId=starterkitbuttonsetup block="Button setup P2"
    export function buttonsetup(): void {
        pins.P2; PinPullMode.PullUp
    }

}