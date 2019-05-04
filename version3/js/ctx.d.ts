export class ECP {

    generator(): ECP;

    fromBytes(array: Uint8Array): ECP;

    mapit(hash: Uint8Array): ECP;

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

    toBytes(destination: Uint8Array, compress: boolean): void;

    equals(p: ECP): boolean;

}

export class ECP2 {

}

export class BIG {

    frombytearray(array: Uint8Array, offset: number);

}

export class CTX {
    public constructor(curve: string);

    public ECP: ECP;
    public BIG: BIG;
}
