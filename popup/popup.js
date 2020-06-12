class Product{
  name = "";
  units = {temperature: "F", speed: "KT", distance: "M"};
  validTime = "";
  baseUrl = "https://weather.af.mil/services/";
}

class Graphic extends Product{
  type = "";
  parameters = {
    "northBound": 0,
    "southBound": 0,
    "eastBound": 0,
    "westBound": 0
  };
}

class Alphanumeric extends Product{
  parameters = {
    "header": "",
    "icao": ""
  };
  rawData = "";
}
