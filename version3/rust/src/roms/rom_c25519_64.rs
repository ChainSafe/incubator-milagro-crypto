/*
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

use c25519::big::NLEN;
use super::super::arch::Chunk;
use types::{ModType, CurveType, CurvePairingType, SexticTwist, SignOfX};

// Base Bits= 56
// Curve25519 Modulus
pub const MODULUS: [Chunk; NLEN] = [
    0xFFFFFFFFFFFFED,
    0xFFFFFFFFFFFFFF,
    0xFFFFFFFFFFFFFF,
    0xFFFFFFFFFFFFFF,
    0x7FFFFFFF,
];
pub const R2MODP: [Chunk; NLEN] = [0xA4000000000000, 0x5, 0x0, 0x0, 0x0];
pub const MCONST: Chunk = 0x13;

// c25519 Curve
pub const CURVE_COF_I: isize = 8;
pub const CURVE_A: isize = 486662;
pub const CURVE_B_I: isize = 0;
pub const CURVE_COF: [Chunk; NLEN] = [0x8, 0x0, 0x0, 0x0, 0x0];
pub const CURVE_B: [Chunk; NLEN] = [0x0, 0x0, 0x0, 0x0, 0x0];
pub const CURVE_ORDER: [Chunk; NLEN] =
    [0x12631A5CF5D3ED, 0xF9DEA2F79CD658, 0x14DE, 0x0, 0x10000000];
pub const CURVE_GX: [Chunk; NLEN] = [0x9, 0x0, 0x0, 0x0, 0x0];
pub const CURVE_GY: [Chunk; NLEN] = [0x0, 0x0, 0x0, 0x0, 0x0];

pub const MODBYTES: usize = 32;
pub const BASEBITS: usize = 56;

pub const MODBITS: usize = 255;
pub const MOD8: usize = 5;
pub const MODTYPE: ModType = ModType::PSEUDO_MERSENNE;
pub const SH: usize = 25;

pub const CURVETYPE: CurveType = CurveType::MONTGOMERY;
pub const CURVE_PAIRING_TYPE: CurvePairingType = CurvePairingType::NOT;
pub const SEXTIC_TWIST: SexticTwist = SexticTwist::NOT;
pub const ATE_BITS: usize = 0;
pub const SIGN_OF_X: SignOfX = SignOfX::NOT;
pub const HASH_TYPE: usize = 32;
pub const AESKEY: usize = 16;
