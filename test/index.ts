


///  N A T I V E

import assert from "assert";

///  I M P O R T

import Test from "@webb/test";

///  U T I L

import dap from "../dist";
import { handshakeRegex } from "../dist";



///  T E S T

const test = Test("handshake-regex");

test("Returns false when invalid input is supplied", () => {
  /// Blank input is blocked by TypeScript, so no need to test that scenario
  assert.deepStrictEqual(dap("the distributed web will fail"), false);
});

test("Returns false when invalid wallet address  is supplied, using exported function", () => {
  assert.deepStrictEqual(dap("3MWvddmToBWnnPes3L45i1pRQDhPrLdznc"), false);
});

test("Returns true when valid input is supplied", () => {
  assert.deepStrictEqual(dap("hs1q98ddwl2lcpnnzfvvrqad80qu97w0q72cyq2uy3"), true);
});



test("Returns false when invalid input is supplied, using exported function", () => {
  /// Blank input is blocked by TypeScript, so no need to test that scenario
  assert.deepStrictEqual(handshakeRegex("the distributed web will fail"), false);
});

test("Returns false when invalid wallet address  is supplied, using exported function", () => {
  assert.deepStrictEqual(handshakeRegex("3MWvddmToBWnnPes3L45i1pRQDhPrLdznc"), false);
});

test("Returns true when valid input is supplied, using exported function", () => {
  assert.deepStrictEqual(handshakeRegex("hs1q98ddwl2lcpnnzfvvrqad80qu97w0q72cyq2uy3"), true);
});



test.run();
