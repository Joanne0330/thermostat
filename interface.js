$(document).ready(function() {
    var thermostat = new Thermostat();
    updateTemperature();
    

    $('#temperature-up').click(function() {
        thermostat.up();
        updateTemperature();
    });

    $('#temperature-down').click(function() { 
        thermostat.down();
        updateTemperature(); 
    });

    $('#temperature-reset').click(function() {
        thermostat.resetTemperature();
        updateTemperature();
    });

    $('#powersaving-on').click(function() {
        thermostat.turnOnSavingMode();
        $('#power-saving-status').text('on')
        updateTemperature();
        
    });

    $('#powersaving-off').click(function() {
        thermostat.turnoffSavingMode();
        $('#power-saving-status').text('off')
        updateTemperature();
        
    });

    function updateTemperature() {
        $('#temperature').text('Current temperature set to: ' + thermostat._temperature + ' degrees');
        $('#temperature').attr('class', thermostat.energyUsage());
    };
});

// $(document).ready(function() {
//     $("#temperature-reset").click(function(){
//         alert("The paragraph was clicked.");
//     });
//     });
// 