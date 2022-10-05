const carItems = [
  {
    name: {
      make: "TOYOTA",
      model: "CAMRY",
    },
    commonName: "2011 Toyota Camry",
    year: 2011,
    trim: "SE SEDAN 4D",
    driveTrain: "FWD",
    tranmission: "AUTOMATIC",
    engine: "4-CYL, 2.5 LITER",
    mileage: " 185,568",
    doors: 4,
    exteriorColor: "SILVER",
    interiorColor: "-",
    vin: "4T1BF3EK7BU142419",
    stockNo: 142419,
    price: 7000,
    images: [
      "https://i.im.ge/2022/08/30/OAZ4pC.ford.jpg",
      "https://imagescf.dealercenter.net/1920/1080/202202-87ad906587c744688f4b91566d010d62.jpg",
    ],
  },
  {
    name: {
      make: "CHEVROLET",
      model: "SUBURBAN 1500",
    },
    commonName: "2003 Chevrolet Suburban",
    year: 2003,
    trim: "LT SPORT UTILITY 4D",
    driveTrain: "2WD",
    tranmission: "AUTOMATIC",
    engine: "V8, FFV, 5.3 LITER",
    mileage: " 210,102",
    doors: 4,
    exteriorColor: "SILVER",
    interiorColor: "-",
    vin: "3GNEC16Z43G237168",
    stockNo: 237168,
    price: 4000,
    images: [
      "https://imagescf.dealercenter.net/1920/1080/202110-95c66d9e375e46abb3188356da19b5ef.jpg",
      "https://imagescf.dealercenter.net/1920/1080/202110-6ba231b3bfb54dfc96a3f6fddd64ad5b.jpg",
    ],
  },
  {
    name: {
      make: "CHEVROLET",
      model: "MALIBU",
    },
    commonName: "2011 Chevrolet Malibu",
    year: 2011,
    trim: "LT SEDAN 4D",
    driveTrain: "FWD",
    tranmission: "AUTOMATIC",
    engine: "4-CYL, 2.4 LITER",
    mileage: " 149,888",
    doors: 4,
    exteriorColor: "BLACK",
    interiorColor: "-",
    vin: "1G1ZC5E14BF139313",
    stockNo: 237168,
    price: 5000,
    images: [
      "https://imagescf.dealercenter.net/1920/1080/202112-0f0628e1733f4670ab72ba63ed975c2c.jpg",
      "https://imagescf.dealercenter.net/1920/1080/202112-4d903d3b3cbd4329bb343a7588f0359e.jpg",
    ],
  },
  {
    name: {
      make: "LEXUS",
      model: "ES",
    },
    commonName: "2004 Lexus Es",
    year: 2004,
    trim: "ES 330 SEDAN 4D",
    driveTrain: "FWD",
    tranmission: "AUTOMATIC",
    engine: "V6, 3.3 LITER",
    mileage: "193,245",
    doors: 4,
    exteriorColor: "GRAY",
    interiorColor: "-",
    vin: "JTHBA30G645001617",
    stockNo: "001617",
    price: 4199,
    images: [
      "https://imagescf.dealercenter.net/1920/1080/202102-d7b2ec123df343cd9eadbdac149783f0.jpg",
    ],
  },
  {
    name: {
      make: "SATURN",
      model: "AURA",
    },
    commonName: "2008 Saturn Aura",
    year: 2008,
    trim: "-",
    driveTrain: "-",
    tranmission: "-",
    engine: "-",
    mileage: "194,509",
    doors: "-",
    exteriorColor: "BLACK",
    interiorColor: "-",
    vin: "1G8ZV57778F113309",
    stockNo: 113309,
    price: 2999,
    images: [
      "https://imagescf.dealercenter.net/1920/1080/202102-d7b2ec123df343cd9eadbdac149783f0.jpg",
    ],
  },
  {
    name: {
      make: "CHRYSLER",
      model: "200",
    },
    commonName: "2014 CHRYSLER 200",
    year: 2014,
    trim: "LIMITED SEDAN 4D",
    driveTrain: "FWD",
    tranmission: "AUTOMATIC",
    engine: "V6, FLEX FUEL, 3.6 LITER",
    mileage: " 137,410",
    doors: 4,
    exteriorColor: "BLACK",
    interiorColor: "BLACK",
    vin: "1C3CCBCG9EN150681",
    stockNo: 150681,
    price: 5200,
    images: [
      "https://imagescf.dealercenter.net/1920/1080/202202-d24a5ef996f042228a8ecaad1589ad22.jpg",
      "https://imagescf.dealercenter.net/1920/1080/202202-7aab713936f84d8fb57bc3ea6c48017a.jpg",
    ],
  },
  {
    name: {
      make: "ACURA",
      model: "MDX",
    },
    commonName: "2007 ACURA MDX",
    year: 2007,
    trim: "SPORT UTILITY 4D",
    driveTrain: "AWD",
    tranmission: "AUTOMATIC",
    engine: "V6, VTEC, 3.7 LITER",
    mileage: " 114,897",
    doors: 4,
    exteriorColor: "WHITE",
    interiorColor: "-",
    vin: "2HNYD28257H509008",
    stockNo: 509008,
    price: 6499,
    images: [
      "https://imagescf.dealercenter.net/1920/1080/202102-d7b2ec123df343cd9eadbdac149783f0.jpg",
    ],
  },
  {
    name: {
      make: "FORD",
      model: "F150 SUPER CAB",
    },
    commonName: "2004 FORD F150 SUPER CAB",
    year: 2004,
    trim: "XLT PICKUP 4D 5 1/2 FT",
    driveTrain: "2WD",
    tranmission: "AUTOMATIC",
    engine: "V8, 5.4 LITER",
    mileage: " 152,655",
    doors: 4,
    exteriorColor: "BLUE",
    interiorColor: "-",
    vin: "1FTPX12514FA32726",
    stockNo: "A32726",
    price: 7000,
    images: [
      "https://i.im.ge/2022/08/30/OAZ4pC.ford.jpg",
      "https://imagescf.dealercenter.net/1920/1080/202202-87ad906587c744688f4b91566d010d62.jpg",
    ],
  },
];
import { client } from "./client";

export function getAllCarsId() {
  return carItems.map((cars) => {
    return {
      params: {
        id: cars.commonName.toLowerCase(),
      },
    };
  });
}
export function getAllCarsData(id) {
  const cars = carItems.filter((car) => car.commonName.toLowerCase() === id);
  return {
    id,
    cars,
  };
}
export function getAllCars() {
  return carItems;
}
