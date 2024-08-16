import React from "react";
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import TopRatedDetails from './TopRatedDetails';
import { BrowserRouter } from 'react-router-dom';

// Mock data for testing
const mockMovieDetails = {
    id: 1,
    title: 'Movie 1',
    poster_path: 'poster1.jpg',
    release_date: '2023-01-01',
    overview: 'A short movie description',
};

global.fetch = vi.fn(() => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ok: true,
                json: () => Promise.resolve(mockMovieDetails),
            });
        }, 100);
    })
);

describe('TopRatedDetails', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });


    it('renders movie details when data is available', async () => {
        
        await act(async () => {
            render(
                <BrowserRouter>
                    <TopRatedDetails />
                </BrowserRouter>
            )
        });
        

        expect(await screen.findByText(mockMovieDetails.title)).toBeInTheDocument();
        expect(screen.getByText(`Release Date: ${mockMovieDetails.release_date}`)).toBeInTheDocument();
        expect(screen.getByText(mockMovieDetails.overview)).toBeInTheDocument();

        const posterImage = screen.getByRole('img');
        expect(posterImage).toHaveAttribute('src', `https://image.tmdb.org/t/p/w500${mockMovieDetails.poster_path}`);
        
    });

    it('renders a loading message while fetching data', async () => {
        await act(async () => {
            render(
                <BrowserRouter>
                    <TopRatedDetails />
                </BrowserRouter>
            );
        })

        

        expect(screen.getByText('Loading movie details...')).toBeInTheDocument();
    });
});
