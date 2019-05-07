export class FP12 {

    constructor(d: number | FP12, e?: number, f?: number);

    public mul(other: FP12): void;

    public equals(other: FP12): boolean;
}

export class PAIR {

    public ate(p1: ECP2, q1: ECP): FP12;

    public fexp(p: FP12): FP12;
}

export class FP2 {
    constructor(c: BIG | FP2, d?: BIG);

    neg(): void;

    getA(): BIG;

    getB(): BIG;

    inverse(): void;

    mul(v: FP2): void;

    reduce(): void;
}

export class FP {
    constructor(c: FP | BIG | number);

    redc(): BIG;

    neg(): void;
}

export class ECPCommon<T> {

    is_infinity(): boolean;

    add(p: T): void;

    mul(a: BIG): T;

    equals(p: T): boolean;

}

export class ECP extends ECPCommon<ECP>{

    static generator(): ECP;

    static fromBytes(array: Uint8Array): ECP;

    static mapit(hash: Uint8Array): ECP;

    setxy(x: BIG, y: BIG): void;

    setx(x: BIG): void;

    copy(p: ECP): void;

    neg(): void;

    inf(): void;

    affine(): void;

    getX(): BIG;

    getY(): BIG;

    getS(): boolean;

    sub(p: ECP|ECP2): void;

    getX(): ECP;

    toBytes(destination: Uint8Array, compress: boolean): void;

}

export class ECP2 extends ECPCommon<ECP2>{

    constructor();

    setxy(xi: FP2, yi: FP2): void;

    setx(xi: FP2): void;

    copy(p: ECP2): void;

    getX(): FP2;

    getY(): FP2;

    affine(): void;

}


export class BIG implements BIG {

    constructor(x: number | BIG);

    static frombytearray(array: Uint8Array, offset: number): BIG;

    static comp(a: BIG, b: BIG): number;

    add(v: BIG): void;

    div(v: BIG): void;

    norm(): void;

    isunity(): boolean;

    iszilch(): boolean;

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
    public FP12: typeof FP12;
    public FP: typeof FP;
    public PAIR: PAIR;
    public BIG: typeof BIG;
    public ROM_FIELD: RomField;
}
