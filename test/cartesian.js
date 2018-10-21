import chai from 'chai';
import { isPointInPoly } from '../src/lib/pointsInPoly';

/* To run this unit test, in console:
 * $ npm run test test/cartesian
 */
const expect = chai.expect;

const poly1 = [
  { longitude: 2, latitude: 3 },
  { longitude: 5, latitude: 6 },
  { longitude: 5, latitude: 4 },
  { longitude: 8, latitude: 4 },
  { longitude: 5, latitude: 1 }
];

describe('is point in poly1', () => {
  const poly = poly1;
  it('point not in poly1', () => {
    expect(isPointInPoly({ longitude: 0, latitude: 0 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 2, latitude: 2 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 3, latitude: 5 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 5, latitude: 8 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 6, latitude: 5 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 7, latitude: 2 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 5, latitude: -2 }, poly)).to.equal(false);
  });
  it('point in poly1 - inside', () => {
    expect(isPointInPoly({ longitude: 4, latitude: 4 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 5, latitude: 3 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 4.5, latitude: 4.5 }, poly)).to.equal(true);
  });
  it('point in poly1 - on edge or vertex', () => {
    expect(isPointInPoly({ longitude: 3, latitude: 4 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 2, latitude: 3 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 6, latitude: 4 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 8, latitude: 4 }, poly)).to.equal(true);
    // expect(isPointInPoly({ longitude: 5, latitude: 5 }, poly)).to.equal(true);
  });
});

const poly2 = [
  { longitude: 3, latitude: 2 },
  { longitude: 5, latitude: 4 },
  { longitude: 3, latitude: 6 },
  { longitude: 7, latitude: 5 },
  { longitude: 7, latitude: -2 },
  { longitude: 5, latitude: -3 }
];

describe('is point in poly2', () => {
  const poly = poly2;
  it('point not in poly2', () => {
    expect(isPointInPoly({ longitude: 3, latitude: 3 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 3, latitude: -3 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 2, latitude: 3 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: -5, latitude: 1 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 0, latitude: 0 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 4, latitude: -3 }, poly)).to.equal(false);
  });
  it('point not in poly2 - intersecting vertex', () => {
    expect(isPointInPoly({ longitude: 3, latitude: 4 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 4, latitude: 4 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 4, latitude: -2 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 4, latitude: -3 }, poly)).to.equal(false);
  });
  it('point in poly2 - inside', () => {
    expect(isPointInPoly({ longitude: 4, latitude: 2 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 5, latitude: 5 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 5, latitude: 2 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 5, latitude: 0 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 6, latitude: -2 }, poly)).to.equal(true);
  });
  it('point in poly2 - on edge or vertex', () => {
    expect(isPointInPoly({ longitude: 4, latitude: 5 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 5, latitude: 4 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 7, latitude: 5 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 4, latitude: 3 }, poly)).to.equal(true);
  });
});

const poly3 = [
  { longitude: 1, latitude: 6 },
  { longitude: 4, latitude: 1 },
  { longitude: 7, latitude: 6 },
  { longitude: 7, latitude: 2 },
  { longitude: 4, latitude: -4 }
];

describe('is point in poly3', () => {
  const poly = poly3;
  it('point not in poly3', () => {
    expect(isPointInPoly({ longitude: 4, latitude: 4 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 4, latitude: 6 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 5, latitude: 4 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 3, latitude: -4 }, poly)).to.equal(false);
    expect(isPointInPoly({ longitude: 4, latitude: -5 }, poly)).to.equal(false);
  });
  it('point not in poly3 - edge cases not passing', () => {
    expect(isPointInPoly({ longitude: 4, latitude: 2 }, poly)).to.equal(false);
  });
  it('point in poly3 - inside', () => {
    expect(isPointInPoly({ longitude: 6, latitude: 2 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 4, latitude: -1 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 3, latitude: 2 }, poly)).to.equal(true);
    expect(isPointInPoly({ longitude: 3, latitude: 1 }, poly)).to.equal(true);
  });
  it('point in poly3 - on edge or vertex', () => {
    expect(isPointInPoly({ longitude: 4, latitude: 1 }, poly)).to.equal(true);
    // expect(isPointInPoly({ longitude: 7, latitude: 4 }, poly)).to.equal(true);
  });
});
