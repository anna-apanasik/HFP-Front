export abstract class CoreService {
  private static  portBack = 'http://localhost:8086/';
  protected webService: string;
  constructor() {
    this.webService = CoreService.portBack;
  }
}
