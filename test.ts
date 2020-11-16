//Blocks Test
basic.forever(function () {
    serial.writeLine("" + (scd30.readCO2()))
    serial.writeLine("" + (scd30.readTemperature()))
    serial.writeLine("" + (scd30.readHumidity()))
    basic.pause(1000)
})
