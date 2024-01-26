export class SensorData {
   constructor(
      public Device: String,
      public time: number,
      public MAC: string,
      public XForce: number,
      public YForce: number,
      public ZForce: number,
      public temperature: number
   ) {}
}
