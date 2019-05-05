export class FP2 {
    constructor(c: BIG | FP2, d?: BIG);

    neg(): void;

    getA(): BIG;

    getB(): BIG;

    inverse(): void;

    mul(v: FP2): void;

    reduce(): void;
}

export class ECPCommon<T> {

    is_infinity(): boolean;

    add(p: T): void;

    mul(a: BIG): T;

}

export class ECP extends ECPCommon<ECP>{

    static generator(): ECP;

    static fromBytes(array: Uint8Array): ECP;

    static mapit(hash: Uint8Array): ECP;

    copy(p: ECP): void;

    neg(): void;

    inf(): void;

    affine(): void;

    getX(): ECP;

    getY(): ECP;

    getS(): boolean;

    sub(p: ECP|ECP2): void;

    getX(): ECP;

    toBytes(destination: Uint8Array, compress: boolean): void;

    equals(p: ECP): boolean;

}

export class ECP2 extends ECPCommon<ECP2>{

    constructor();

    setxy(xi: FP2, yi: FP2): void;

    setx(xi: FP2): void;

    copy(p: ECP2): void;

    getX(): FP2;

    getY(): FP2;

}


export class BIG implements BIG {

    constructor(x: number | BIG);

    static frombytearray(array: Uint8Array, offset: number): BIG;

    static comp(a: BIG, b: BIG): number;

    add(v: BIG): void;

    div(v: BIG): void;

    norm(): void;

    isunity(): boolean;

    tobytearray(array: Uint8Array, offset: number): void;

}

export interface RomField {
    Modulus: Uint8Array;
}

export class CTX {
    public constructor(curve: string);
    public ECP: typeof ECP;
    public ECP2: typeof ECP2;
    public FP2: typeof FP2;
    public BIG: typeof BIG;
    public ROM_FIELD: RomField;
}
