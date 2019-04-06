export enum VirusId {
  virusA = "virusA",
  virusB = "virusB",
  virusC = "virusC",
  virusD = "virusD",
  virusE = "virusE",
  virusF = "virusF",
  virusG = "virusG",
  virusH = "virusH"
}

export interface IVirus {
  isShow: boolean;
}

export interface IViruses {
  virusA: IVirus;
  virusB: IVirus;
  virusC: IVirus;
  virusD: IVirus;
  virusE: IVirus;
  virusF: IVirus;
  virusG: IVirus;
  virusH: IVirus;
}
