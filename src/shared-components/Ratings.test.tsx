import * as React from 'react';
import { render, screen } from '@testing-library/react';

import Ratings from './Ratings';

describe('Render default 5 star ratings', () => {
  it('renders 5 diamonds', async () => {
    render(<Ratings defaultValue={'5'} />);
    const fullDiamond = await screen.findAllByAltText(/full rating/);
    expect(fullDiamond.length).toBe(5);
    const halfDiamond = await screen.queryAllByAltText(/half rating/); // use query to find null/falsy values
    expect(halfDiamond.length).toBe(0);
  });
  it('renders 4.5 diamonds', async () => {
    render(<Ratings defaultValue={'4.5'} />);
    const fullDiamond = await screen.findAllByAltText(/full rating/);
    expect(fullDiamond.length).toBe(4);
    const halfDiamond = await screen.findAllByAltText(/half rating/);
    expect(halfDiamond.length).toBe(1);
  });
  it('renders 0.5 diamonds', async () => {
    render(<Ratings defaultValue={'0.5'} />);
    const fullDiamond = await screen.queryAllByAltText(/full rating/);
    expect(fullDiamond.length).toBe(0);
    const halfDiamond = await screen.findAllByAltText(/half rating/);
    expect(halfDiamond.length).toBe(1);
  });
});

describe('Renders up to 10 star ratings', () => {
  it('renders 10 diamonds', async () => {
    render(<Ratings defaultValue={'10'} maxRating={10} />);
    const fullDiamond = await screen.findAllByAltText(/full rating/);
    expect(fullDiamond.length).toBe(10);
    const halfDiamond = await screen.queryAllByAltText(/half rating/); // use query to find null/falsy values
    expect(halfDiamond.length).toBe(0);
  });
  it('renders 8 diamonds', async () => {
    render(<Ratings defaultValue={'8'} maxRating={10} />);
    const fullDiamond = await screen.findAllByAltText(/full rating/);
    expect(fullDiamond.length).toBe(8);
    const halfDiamond = await screen.queryAllByAltText(/half rating/); // use query to find null/falsy values
    expect(halfDiamond.length).toBe(0);
  });
  it('renders 4.5 diamonds', async () => {
    render(<Ratings defaultValue={'4.5'} maxRating={10} />);
    const fullDiamond = await screen.findAllByAltText(/full rating/);
    expect(fullDiamond.length).toBe(4);
    const halfDiamond = await screen.findAllByAltText(/half rating/);
    expect(halfDiamond.length).toBe(1);
  });
  it('renders 0.5 diamonds', async () => {
    render(<Ratings defaultValue={'0.5'} maxRating={10} />);
    const fullDiamond = await screen.queryAllByAltText(/full rating/);
    expect(fullDiamond.length).toBe(0);
    const halfDiamond = await screen.findAllByAltText(/half rating/);
    expect(halfDiamond.length).toBe(1);
  });
});

describe('edge cases', () => {
  it('renders value that is over the max rating allowed as max allowed value', async () => {
    render(<Ratings defaultValue={'10'} maxRating={5} />);
    const fullDiamond = await screen.findAllByAltText(/full rating/);
    expect(fullDiamond.length).toBe(5);
    const halfDiamond = await screen.queryAllByAltText(/half rating/); // use query to find null/falsy values
    expect(halfDiamond.length).toBe(0);
  });
  it('renders value that is 0 as no diamond', async () => {
    render(<Ratings defaultValue={'0'} maxRating={5} />);
    const fullDiamond = await screen.queryAllByAltText(/full rating/); // use query to find null/falsy values
    expect(fullDiamond.length).toBe(0);
    const halfDiamond = await screen.queryAllByAltText(/half rating/); // use query to find null/falsy values
    expect(halfDiamond.length).toBe(0);
  });
  it('handles negative values as no diamond', async () => {
    render(<Ratings defaultValue={'-17'} maxRating={5} />);
    const fullDiamond = await screen.queryAllByAltText(/full rating/); // use query to find null/falsy values
    expect(fullDiamond.length).toBe(0);
    const halfDiamond = await screen.queryAllByAltText(/half rating/); // use query to find null/falsy values
    expect(halfDiamond.length).toBe(0);
  });
  it('renders null as no diamond', async () => {
    render(<Ratings defaultValue={''} maxRating={5} />);
    const fullDiamond = await screen.queryAllByAltText(/full rating/); // use query to find null/falsy values
    expect(fullDiamond.length).toBe(0);
    const halfDiamond = await screen.queryAllByAltText(/half rating/); // use query to find null/falsy values
    expect(halfDiamond.length).toBe(0);
  });
  it('renders negative max rating as no diamond', async () => {
    render(<Ratings defaultValue={'7'} maxRating={-2} />);
    const fullDiamond = await screen.queryAllByAltText(/full rating/); // use query to find null/falsy values
    expect(fullDiamond.length).toBe(0);
    const halfDiamond = await screen.queryAllByAltText(/half rating/); // use query to find null/falsy values
    expect(halfDiamond.length).toBe(0);
  });
});
