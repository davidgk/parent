export class Ping {

  constructor(public myGreeting:string){

  }
  static createFromJson(json: any): Ping {
    return new Ping(json.myGreeting);
  }

}
