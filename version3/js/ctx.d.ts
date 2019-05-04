export enum Curves {
    BLS381 = 'BLS381',
}

export class ECP {

    static generator(): ECP;

    is_infinity(): boolean;

    mul(a: BIG): ECP;

    getX(): ECP;

    toBytes(): Uint8Array;

}

export class BIG {

    frombytearray(array: Uint8Array, offset: number);

}

export class CTX {
    public constructor(curve: Curves);

    public ECP: ECP;
    public BIG: BIG;
}
