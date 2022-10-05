export default {
  name: "car",
  title: "Car",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "make",
      title: "Make",
      type: "string",
    },
    {
      name: "model",
      title: "Model",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "trim",
      title: "Trim",
      type: "string",
    },
    {
      name: "drivetrain",
      title: "Drive Train",
      type: "string",
    },
    {
      name: "transimission",
      title: "Transmission",
      type: "string",
    },
    {
      name: "engine",
      title: "Engine",
      type: "string",
    },
    {
      name: "mileage",
      title: "Mileage",
      type: "string",
    },
    {
      name: "doors",
      title: "Doors",
      type: "number",
    },
    {
      name: "exteriorColor",
      title: "Exterior Color",
      type: "string",
    },
    {
      name: "interiorColor",
      title: "Interior Color",
      type: "string",
    },
    {
      name: "vin",
      title: "Vin",
      type: "string",
    },
    {
      name: "stocknumber",
      title: "Stock Number",
      type: "number",
    },
  ],
};
