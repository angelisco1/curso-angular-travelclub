export interface IVendeHumos {
  id           : number,
  nombre       : string,
  descripcion  : string,
  avatar       : number,
  votos        : string,
  // addFactura   : (factura: any) => void
}

export class VendeHumos {
// export class VendeHumos implements IVendeHumos {
  public constructor(
    public nombre : string,
    public descripcion  : string,
    public avatar   : string,
    public votos : number,
    public id     : number|null = null,
  ){}


  // addFactura(f: any) {
  //   this.pedido.factura = f
  // }
}

// new VendeHumos('', '', '', 5)