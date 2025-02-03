export interface Product {
    id: number;
    name: string;
    category: "electrical" | "mechanical";
    type:
    ""
      | "all"
      | "lighting"
      | "power"
      | "control"
      | "measurement"
      | "motors"
      | "pipes"
      | "belts"
      | "mounting"
      | "health"
      | "valve"
      | "cable";
    image: string;
    sale?: number;
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Lightings",
      category: "electrical",
      type: "lighting",
      image: "./FloodLight.png",
      sale: 20,
    },
    {
      id: 2,
      name: "Ionizer",
      category: "electrical",
      type: "power",
      image: "./Ionizer.png",
      sale: 25,
    },
    {
      id: 3,
      name: "Motor",
      category: "mechanical",
      type: "motors",
      image: "./Motor.png",
    },
    {
      id: 4,
      name: "Boiler Mounting",
      category: "mechanical",
      type: "mounting",
      image: "BoilerMountings.png",
      sale: 20,
    },
    {
      id: 5,
      name: "Water Meter",
      category: "electrical",
      type: "measurement",
      image: "./WaterMeter.png",
      sale: 20,
    },
    // {
    //   id: 6,
    //   name: "V Belts",
    //   category: "mechanical",
    //   type: "belts",
    //   image: "./Vbelt.png",
    //   sale: 20,
    // },
    {
      id: 7,
      name: "Capacitors",
      category: "electrical",
      type: "power",
      image: "./Capacitors.png",
      sale: 40,
    },
    {
      id: 8,
      name: "Pvc, Upvc Pipes",
      category: "mechanical",
      type: "pipes",
      image: "./PvcPipes.png",
    },
    {
      id: 9,
      name: "Shycocan Virus killer",
      category: "electrical",
      type: "health",
      image: "./VirusKiller.png",
    },
    {
      id: 10,
      name: "Electrical Switch Gears and Control Gears",
      category: "electrical",
      type: "power",
      image: "./SwitchGears.png",
    },
  
    {
      id: 11,
      name: "Electrical Transformers",
      category: "electrical",
      type: "power",
      image: "./Transformer.png",
    },
    {
      id: 12,
      name: "Electrical Wires and Cables",
      category: "electrical",
      type: "cable",
      image: "./ElectricalWire.png",
    },
    {
      id: 13,
      name: "Instrumentation Cable",
      category: "electrical",
      type: "cable",
      image: "./IntrumentationCable.png",
    },
    {
      id: 14,
      name: "Rubber Cable",
      category: "electrical",
      type: "cable",
      image: "./Cables.png",
    },
    {
      id: 15,
      name: "LT/HT Cables",
      category: "electrical",
      type: "cable",
      image: "./LtCable.png",
    },
    {
      id: 16,
      name: "Welding Rods & Equipments",
      category: "mechanical",
      type: "mounting",
      image: "./WeldingRods.png",
    },
  
    {
      id: 17,
      name: "MS, SS, GI Hide Pipes",
      category: "mechanical",
      type: "pipes",
      image: "./MsPipes.png",
    },
  
    {
      id: 18,
      name: "Pulp Valve",
      category: "mechanical",
      type: "valve",
      image: "./BoilerMountings.png",
    },
    {
      id: 19,
      name: "Sluice Valve",
      category: "mechanical",
      type: "valve",
      image: "./SluiceValve.png",
    },
    {
      id: 20,
      name: "IBR & Non IBR Valve and Boiler Mounting",
      category: "mechanical",
      type: "valve",
      image: "./IbrValve.png",
    },
    {
      id: 21,
      name: "Pump & Mono Blocks",
      category: "mechanical",
      type: "control",
      image: "./MonoBlocks.png",
    },
    {
      id: 22,
      name: "Rotary Gear",
      category: "mechanical",
      type: "control",
      image: "./RotatoryGear.png",
    },
    // {
    //   id: 23,
    //   name: "CI Water Meter",
    //   category: "mechanical",
    //   type: "measurement",
    //   image: "./WaterMeter.png",
    // },
    {
      id: 24,
      name: "Pneumatic & Hydraulic Goods",
      category: "mechanical",
      type: "control",
      image: "./HydrolicGoods.png",
    },
    {
      id: 25,
      name: "Flexible Hydraulic Hose",
      category: "mechanical",
      type: "pipes",
      image: "./Hose.png"
    },
    {
      id: 26,
      name: "Dryer Steam Range",
      category: "mechanical",
      type: "control",
      image: "./Dryer.jpg"
    },
    {
      id: 27,
      name: "Steam Rotary Joints",
      category: "mechanical",
      type: "control",
      image: "./SteamRotary.jpg"
    },
    {
      id: 28,
      name: "SS, MS, PVC, & GI Flanges",
      category: "mechanical",
      type: "mounting",
      image: "./Flanges.png"
    },
    {
      id: 29,
      name: "GI, PVC, MS, & SS Fitting Elbow, Tee, Socket, Reducer",
      category: "mechanical",
      type: "pipes",
      image: "./Reducer.png"
    },
    {
      id: 30,
      name: "SS, MS, PVC & GI Bends",
      category: "mechanical",
      type: "pipes",
      image: "./Bends.png"
    },
    {
      id: 31,
      name: "SS202, 304, 304L Sheet Bar, Flat, Rod",
      category: "mechanical",
      type: "mounting",
      image: "./Sheet.png"
    },
    {
      id: 32,
      name: "HDPE Pipes and Fittings",
      category: "mechanical",
      type: "pipes",
      image: "./Fitting.png"
    },
    {
      id: 33,
      name: "Impellers & Sleeve CI & SS",
      category: "mechanical",
      type: "motors",
      image: "./Impellers.png"
    },
    {
      id: 34,
      name: "Perforated Sheets Jaali (MS & SS)",
      category: "mechanical",
      type: "mounting",
      image: "Jaali.png"
    },
    {
      id: 35,
      name: "Pulley",
      category: "mechanical",
      type: "belts",
      image: "Pulley.png"
    },
    {
      id: 36,
      name: "Spare for Centicleaner",
      category: "mechanical",
      type: "",
      image: "./Centicleaner.png"
    },
    {
      id: 37,
      name: "Doctor Blades",
      category: "mechanical",
      type: "control",
      image: "./Blades.png"
    },
    {
      id: 38,
      name: "Spare for Rewinders",
      category: "mechanical",
      type: "control",
      image: "./Rewinders.jpeg"
    },
    {
      id: 39,
      name: "Bearing Housing",
      category: "mechanical",
      type: "mounting",
      image: "./Bearing.png"
    },
    {
      id: 40,
      name: "Spare for Showers",
      category: "mechanical",
      type: "pipes",
      image: "./Shower.png"
    },
    {
      id: 41,
      name: "Flexible Pipes",
      category: "mechanical",
      type: "pipes",
      image: "./FlexiblePipes.png"
    },
    {
      id: 42,
      name: "Tyre Star Gear",
      category: "mechanical",
      type: "motors",
      image: "./Tyre.jpg"
    },
    {
      id: 43,
      name: "Couplings",
      category: "mechanical",
      type: "control",
      image: "./Coupling.jpg"
    },
    {
      id: 44,
      name: "Bearing",
      category: "mechanical",
      type: "mounting",
      image: "./Bearings.png"
    },
    {
      id: 45,
      name: "V Belts",
      category: "mechanical",
      type: "belts",
      image: "./Vbelt.png"
    },
    {
      id: 46,
      name: "Bearing Sleeves, Locknuts & Lock Washer",
      category: "mechanical",
      type: "mounting",
      image: "./BearingSleeve.png"
    },
    {
      id: 47,
      name: "PPR Fittings",
      category: "mechanical",
      type: "pipes",
      image: "PprFitting.png"
    },
    {
      id: 48,
      name: "Wire Rope",
      category: "mechanical",
      type: "cable",
      image: "./WireRopes.png"
    },
    {
      id: 49,
      name: "Air Bellows",
      category: "mechanical",
      type: "control",
      image: "./AirBellow.png"
    },
    {
      id: 50,
      name: "Turbo Ventilators",
      category: "mechanical",
      type: "health",
      image: "./Ventilator.jpeg"
    },
    {
      id: 51,
      name: "Conduit Pipes and Fittings",
      category: "electrical",
      type: "pipes",
      image: "./ConduitPipes.png"
    },
    {
      id: 52,
      name: "PVC, UPVC, CPVC Pipe and Fittings",
      category: "mechanical",
      type: "pipes",
      image: "./PvcPipes.png"
    },
    {
      id: 53,
      name: "Dosing Pump",
      category: "mechanical",
      type: "control",
      image: "./DosingPump.png"
    }
  ];
  