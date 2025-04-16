function getConfiguration(config) 
{ 
	config.addressLabel = {en: "MAC", es: "MAC"};
}

function getEndpoints(deviceAddress, endpoints)
{
  // Temperaturas 
  endpoints.addEndpoint("1", "Temperatura Agua Caliente Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("2", "Temperatura Agua Fria Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("3", "Temperatura Retorno ACS 1-2", endpointType.temperatureSensor);
  endpoints.addEndpoint("4", "Temperatura Retorno ACS 2-4", endpointType.temperatureSensor);
  endpoints.addEndpoint("5", "Temperatura Acumulador ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("6", "Temperatura Caldera", endpointType.temperatureSensor);
  endpoints.addEndpoint("7", "Temperatura Acumulador Solar", endpointType.temperatureSensor);
  endpoints.addEndpoint("8", "Temperatura Captadores Solares", endpointType.temperatureSensor);
  endpoints.addEndpoint("9", "Temperatura Salida Grifos ACS 1-2", endpointType.temperatureSensor);
  endpoints.addEndpoint("10", "Temperatura Salida Grifos ACS 3-4", endpointType.temperatureSensor);
  var n0 = endpoints.addEndpoint("11", "Concentración Cloro T.Final", endpointType.genericSensor);
  n0.variableTypeId = 1318;

  //Datos MP
  var n1 = endpoints.addEndpoint("12", "Estado B1 Retorno Vestuarios Nuevos", endpointType.genericSensor);
  n1.variableTypeId = 1316;
  var n2 = endpoints.addEndpoint("13", "Estado B1 Retorno Vestuarios Viejos", endpointType.genericSensor);
  n2.variableTypeId = 1316;
  var n3 = endpoints.addEndpoint("14", "Estado B2 Retorno Vestuarios Nuevos", endpointType.genericSensor);
  n3.variableTypeId = 1316;
  var n4 = endpoints.addEndpoint("15", "Estado B2 Retorno Vestuarios Viejos", endpointType.genericSensor);
  n4.variableTypeId = 1316;
  var n5 = endpoints.addEndpoint("16", "Estado Caldera", endpointType.genericSensor);
  n5.variableTypeId = 1316;
  var n6 = endpoints.addEndpoint("17", "Estado B.ACS Primario + Secundario + Válvula", endpointType.genericSensor);
  n6.variableTypeId = 1316;

  //Alarmas
  var n7 = endpoints.addEndpoint("18", "Térmico B1 Primario ACS", endpointType.genericSensor); 
  n7.variableTypeId = 1322;
  var n8 = endpoints.addEndpoint("19", "Térmico B1 Secundario ACS", endpointType.genericSensor); 
  n8.variableTypeId = 1322;
  var n9 = endpoints.addEndpoint("20", "Térmico B1 Retorno ACS", endpointType.genericSensor); 
  n9.variableTypeId = 1322; 
  var n10 = endpoints.addEndpoint("21", "Térmico B2 Retorno ACS", endpointType.genericSensor); 
  n10.variableTypeId = 1322; 
  var n11 = endpoints.addEndpoint("22", "Térmico B3 Retorno ACS", endpointType.genericSensor); 
  n11.variableTypeId = 1322;
  var n12 = endpoints.addEndpoint("23", "Térmico B4 Retorno ACS", endpointType.genericSensor); 
  n12.variableTypeId = 1322;
  var n13 = endpoints.addEndpoint("24", "Térmico B1 Primario Solar", endpointType.genericSensor); 
  n13.variableTypeId = 1322;
  var n14 = endpoints.addEndpoint("25", "Térmico B2 Primario Solar", endpointType.genericSensor); 
  n14.variableTypeId = 1322;
  var n15 = endpoints.addEndpoint("26", "Térmico B1 Secundario Solar", endpointType.genericSensor); 
  n15.variableTypeId = 1322;
  var n16 =  endpoints.addEndpoint("27", "Térmico B2 Secundario Solar", endpointType.genericSensor); 
  n16.variableTypeId = 1322;
  var n17 = endpoints.addEndpoint("28", "Térmico B. Legionella", endpointType.genericSensor); 
  n17.variableTypeId = 1322;
 
  // MP
   var n29 = endpoints.addEndpoint("29", "Estado B1. Primario Solar", endpointType.genericSensor); 
   n29.variableTypeId = 1316;
   var n30 = endpoints.addEndpoint("30", "Estado B2. Primario Solar", endpointType.genericSensor); 
   n30.variableTypeId = 1316;
   var n31 = endpoints.addEndpoint("31", "Estado B1. Secundario Solar", endpointType.genericSensor); 
   n31.variableTypeId = 1316;
   var n32 = endpoints.addEndpoint("32", "Estado B2. Secundario Solar", endpointType.genericSensor); 
   n32.variableTypeId = 1316;

  //Alarmas
  var n33 = endpoints.addEndpoint("33", "Control Baja Temperatura", endpointType.genericSensor); 
  n33.variableTypeId = 1322;

   // MP
   var n34 = endpoints.addEndpoint("34", "Estado B. Legionella", endpointType.genericSensor); 
   n34.variableTypeId = 1316;
   var n35 = endpoints.addEndpoint("35", "Func. por Equilibrado Temperaturas", endpointType.genericSensor); 
   n35.variableTypeId = 1316;
   var n36 = endpoints.addEndpoint("36", "Func. por Alta Temperatura Solar", endpointType.genericSensor); 
   n36.variableTypeId = 1316;
   var n37 = endpoints.addEndpoint("37", "Func. por Ciclo Legionella", endpointType.genericSensor); 
   n37.variableTypeId = 1316;
   var n38 = endpoints.addEndpoint("38", "Func. Disipador 1", endpointType.genericSensor); 
   n38.variableTypeId = 1316;
   var n39 = endpoints.addEndpoint("39", "Func. Disipador 2", endpointType.genericSensor); 
   n39.variableTypeId = 1316;

   // Consignas
  endpoints.addEndpoint("40", "Consigna Salida Grifos ACS", endpointType.temperatureSensor);
  endpoints.addEndpoint("41", "Consigna Acumulador ACS", endpointType.temperatureSensor);
}

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}