namespace starterkit {
    /**
     * reacts with P1
     */
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

}