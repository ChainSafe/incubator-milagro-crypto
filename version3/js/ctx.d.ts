export enum Curves {
    BLS381 = 'BLS381',
}

export class ECP {

    static generator(): ECP;

    static fromBytes(array: Uint8Array): ECP;

    static mapit(hash: Uint8Array): ECP;

    is_infinity(): boolean;

    copy(p: ECP): void;

    neg(): void;

    inf(): void;

    affine(): void;

    getX(): ECP;

    getY(): ECP;

    getS(): boolean;

    add(p: ECP|ECP2): void;

    sub(p: ECP|ECP2): void;

    mul(a: BIG): ECP;

    getX(): ECP;

    toBytes(): Uint8Array;

    equals(p: ECP): boolean;

}

export class ECP2 {

}

export class BIG {

    frombytearray(array: Uint8Array, offset: number);

}

export class CTX {
    public constructor(curve: Curves);

    public ECP: ECP;
    public BIG: BIG;
}
