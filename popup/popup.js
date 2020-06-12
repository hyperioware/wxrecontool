class Product{
  name = "";
  units = {temperature: "F", speed: "KT", distance: "M"};
}

class Graphic extends Product{
  type = "";
  northBound = 0;
  southBound = 0;
  westBound = 0;
  eastBound = 0;
}

class Alphanumeric extends Product{
}
