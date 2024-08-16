import { describe, expect, test } from 'vitest';
import { vi } from 'vitest';

function mockMovieList() {
  const setCurrentPageMock = vi.fn();
  const previousPageMock = vi.fn();
  return { currentPage: 1, setCurrentPage: setCurrentPageMock, previousPage: previousPageMock };
}

describe('MovieList', () => {
  test('previous button is disabled on first page', () => {
    const movieList = mockMovieList();

    movieList.previousPage();

    expect(movieList.setCurrentPage).not.toHaveBeenCalled();
  })
})
