import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { act } from '@testing-library/react';
import TopRatedList from './TopRatedList';
import { BrowserRouter, useNavigate } from 'react-router-dom';


//Mock data for testing
const mockTopRatedMovies = [
   { id: 1, title: 'Movie 1', poster_path: 'poster1.jpg', vote_average: 9 },
   { id: 2, title: 'Movie 2', poster_path: 'poster2.jpg', vote_average: 8.5 },
];

global.fetch = vi.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({
            results: mockTopRatedMovies,
            total_results: mockTopRatedMovies.length,
        }),
    })
);

describe('TopRatedList', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('renders a list of top=rated movies with average rating above 8', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <TopRatedList />
                </BrowserRouter>
            );
        });

        screen.debug();

        const movieTitles = screen.getAllByAltText(/Movie/i);
        expect(movieTitles).toHaveLength(mockTopRatedMovies.length);

        const movieImages = screen.getAllByRole('img');
        expect(movieImages).toHaveLength(mockTopRatedMovies.length);
    });

    it('renders "Details" button for each movie', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <TopRatedList />
                </BrowserRouter>
            );
        });

        const movieContainers = screen.getAllByTestId('movie-container');
        movieContainers.forEach((container) => {
            const button = within(container).getByRole('button', { name: /Details/i });
            expect(button).not.to.be.null;
        });
    });
});




