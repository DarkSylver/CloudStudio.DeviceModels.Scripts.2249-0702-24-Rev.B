function parseUplink(device, payload) {
    var parsed = JSON.parse(payload.asString());
    env.log(parsed);
    

    if (parsed[0] && parsed[0].payload && parsed[0].payload.variables) {
        var variables = parsed[0].payload.variables;

        var e1 = device.endpoints.byAddress("1");
        var e2 = device.endpoints.byAddress("2"); 
        var e3 = device.endpoints.byAddress("3"); 
        var e4 = device.endpoints.byAddress("4"); 
        var e5 = device.endpoints.byAddress("5"); 
        var e6 = device.endpoints.byAddress("6"); 
        var e7 = device.endpoints.byAddress("7"); 
        var e8 = device.endpoints.byAddress("8"); 
        var e9 = device.endpoints.byAddress("9"); 
        var e10 = device.endpoints.byAddress("10"); 
        var e11 = device.endpoints.byAddress("11"); 
        var e12 = device.endpoints.byAddress("12"); 
        var e13 = device.endpoints.byAddress("13"); 
        var e14 = device.endpoints.byAddress("14"); 
        var e15 = device.endpoints.byAddress("15"); 
        var e16 = device.endpoints.byAddress("16"); 
        var e17 = device.endpoints.byAddress("17"); 
        var e18 = device.endpoints.byAddress("18"); 
        var e19 = device.endpoints.byAddress("19"); 
        var e20 = device.endpoints.byAddress("20"); 
        var e21 = device.endpoints.byAddress("21"); 
        var e22 = device.endpoints.byAddress("22"); 
        var e23 = device.endpoints.byAddress("23");
        var e24 = device.endpoints.byAddress("24");
        var e25 = device.endpoints.byAddress("25");
        var e26 = device.endpoints.byAddress("26");
        var e27 = device.endpoints.byAddress("27");
        var e28 = device.endpoints.byAddress("28");
        var e29 = device.endpoints.byAddress("29");
        var e30 = device.endpoints.byAddress("30");
        var e31 = device.endpoints.byAddress("31");
        var e32 = device.endpoints.byAddress("32");
        var e33 = device.endpoints.byAddress("33");
        var e34 = device.endpoints.byAddress("34");
        var e35 = device.endpoints.byAddress("35");
        var e36 = device.endpoints.byAddress("36");
        var e37 = device.endpoints.byAddress("37");
        var e38 = device.endpoints.byAddress("38");
        var e39 = device.endpoints.byAddress("39");
        var e40 = device.endpoints.byAddress("40");
        var e41 = device.endpoints.byAddress("41");

        env.log(variables[0]);

        //Temperaturas

        if (variables[0] != null && e1 != null) {
            e1.updateTemperatureSensorStatus(variables[0].m1);
        }
        if (variables[0] != null && e2 != null) {
            e2.updateTemperatureSensorStatus(variables[0].m2);
        }
        if (variables[0] != null && e3 != null) {
            e3.updateTemperatureSensorStatus(variables[0].m3);
        }
        if (variables[0] != null && e4 != null) {
            e4.updateTemperatureSensorStatus(variables[0].m4);
        }
        if (variables[0] != null && e5 != null) {
            e5.updateTemperatureSensorStatus(variables[0].m5);
        }
        if (variables[0] != null && e6 != null) {
            e6.updateTemperatureSensorStatus(variables[0].m6);
        }
        if (variables[0] != null && e7 != null) {
            e7.updateTemperatureSensorStatus(variables[0].m7);
        }
        if (variables[0] != null && e8 != null) {
            e8.updateTemperatureSensorStatus(variables[0].m8);
        }
        if (variables[0] != null && e9 != null) {
            e9.updateTemperatureSensorStatus(variables[0].m9);
        }
        if (variables[0] != null && e10 != null) {
            e10.updateTemperatureSensorStatus(variables[0].m10);
        }
        if (variables[0] != null && e11 != null) {
            e11.updateGenericSensorStatus(variables[0].m11);
        }


        //MP

       if (variables[0] != null && e12 != null) {
            e12.updateGenericSensorStatus(variables[0].m12);
        }

        if (variables[0] != null && e13 != null) {
            e13.updateGenericSensorStatus(variables[0].m13);
        }
        if (variables[0] != null && e14 != null) {
            e14.updateGenericSensorStatus(variables[0].m14);
        } 
        if (variables[0] != null && e15 != null) {
            e15.updateGenericSensorStatus(variables[0].m15);
        }
        if (variables[0] != null && e16 != null) {
            e16.updateGenericSensorStatus(variables[0].m16);
        }
        if (variables[0] != null && e17 != null) {
            e17.updateGenericSensorStatus(variables[0].m17);
        } //
        if (variables[0] != null && e18 != null) {
            e18.updateGenericSensorStatus(variables[0].m18);
        }
        if (variables[0] != null && e19 != null) {
            e19.updateGenericSensorStatus(variables[0].m19);
        }
        if (variables[0] != null && e20 != null) {
            e20.updateGenericSensorStatus(variables[0].m20);
        }//
        if (variables[0] != null && e21 != null) {
            e21.updateGenericSensorStatus(variables[0].m21);
        }
        if (variables[0] != null && e22 != null) {
            e22.updateGenericSensorStatus(variables[0].m22);
        }
        if (variables[0] != null && e23 != null) {
            e23.updateGenericSensorStatus(variables[0].m23);
        }
        if (variables[0] != null && e24 != null) {
            e24.updateGenericSensorStatus(variables[0].m24);
        }
        if (variables[0] != null && e25 != null) {
            e25.updateGenericSensorStatus(variables[0].m25);
        }
        if (variables[0] != null && e26 != null) {
            e26.updateGenericSensorStatus(variables[0].m26);
        }
        if (variables[0] != null && e27 != null) {
            e27.updateGenericSensorStatus(variables[0].m27);
        }
        if (variables[0] != null && e28 != null) {
            e28.updateGenericSensorStatus(variables[0].m28);
        }
        if (variables[0] != null && e29 != null) {
            e29.updateGenericSensorStatus(variables[0].m29);
        }  
        if (variables[0] != null && e30 != null) {
            e30.updateGenericSensorStatus(variables[0].m30);
        } 

        if (variables[0] != null && e31 != null) {
            e31.updateGenericSensorStatus(variables[0].m31);  
        }
        if (variables[0] != null && e32 != null) {
            e32.updateGenericSensorStatus(variables[0].m32);  
        }
        if (variables[0] != null && e33 != null) {
            e33.updateGenericSensorStatus(variables[0].m33);  
        }
        if (variables[0] != null && e34 != null) {
            e34.updateGenericSensorStatus(variables[0].m34);  
        }
        if (variables[0] != null && e35 != null) {
            e35.updateGenericSensorStatus(variables[0].m35);  
        }
        if (variables[0] != null && e36 != null) {
            e36.updateGenericSensorStatus(variables[0].m36);  
        }
        if (variables[0] != null && e37 != null) {
            e37.updateGenericSensorStatus(variables[0].m37);  
        }
        if (variables[0] != null && e38 != null) {
            e38.updateGenericSensorStatus(variables[0].m38);  
        }
        if (variables[0] != null && e39 != null) {
            e39.updateGenericSensorStatus(variables[0].m39);  
        }
        if (variables[0] != null && e40 != null) {
            e40.updateTemperatureSensorStatus(variables[0].m40);  
        }
        if (variables[0] != null && e41 != null) {
            e41.updateTemperatureSensorStatus(variables[0].m41);  
        }

    }



    

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// Esta función permite convertir un comando de la plataforma en un
	// payload que pueda enviarse al dispositivo.
	// Más información en https://wiki.cloud.studio/page/200

	// Los parámetros de esta función, son:
	// - device: objeto representando el dispositivo al cual se enviará el comando.
	// - endpoint: objeto endpoint representando el endpoint al que se enviará el 
	//   comando. Puede ser null si el comando se envía al dispositivo, y no a 
	//   un endpoint individual dentro del dispositivo.
	// - command: objeto que contiene el comando que se debe enviar. Más
	//   información en https://wiki.cloud.studio/page/1195.

	// Este ejemplo está escrito asumiendo un dispositivo que contiene un único 
	// endpoint, de tipo appliance, que se puede encender, apagar y alternar. 
	// Se asume que se debe enviar un solo byte en el payload, que indica el tipo 
	// de operación.

/*
	 payload.port = 25; 	 	 // Este dispositivo recibe comandos en el puerto LoRaWAN 25 
	 payload.buildResult = downlinkBuildResult.ok; 

	 switch (command.type) { 
	 	 case commandType.onOff: 
	 	 	 switch (command.onOff.type) { 
	 	 	 	 case onOffCommandType.turnOn: 
	 	 	 	 	 payload.setAsBytes([30]); 	 	 // El comando 30 indica "encender" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.turnOff: 
	 	 	 	 	 payload.setAsBytes([31]); 	 	 // El comando 31 indica "apagar" 
	 	 	 	 	 break; 
	 	 	 	 case onOffCommandType.toggle: 
	 	 	 	 	 payload.setAsBytes([32]); 	 	 // El comando 32 indica "alternar" 
	 	 	 	 	 break; 
	 	 	 	 default: 
	 	 	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 	 	 break; 
	 	 	 } 
	 	 	 break; 
	 	 default: 
	 	 	 payload.buildResult = downlinkBuildResult.unsupported; 
	 	 	 break; 
	 }
*/

}