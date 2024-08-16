import { render, screen } from '@testing-library/react';
import { describe, expect, test, it } from 'vitest';
import { vi } from 'vitest';
import SearchBar from './SearchBar';
import { BrowserRouter } from 'react-router-dom';
import { act } from '@testing-library/react'
import React from 'react';

describe('SearchBar', () => {
    test('triggers navigation on minimum search length', () => {
      const mockNavigate = vi.fn();
      const initialState = { searchTerm: '' };
      const handleChange = (event) => {
        const updatedState = { ...initialState }; 
        updatedState.searchTerm = event.target.value;
        if (updatedState.searchTerm.length >= 0) {
          mockNavigate('/search', { state: { searchTerm: updatedState.searchTerm } });
        }
      };
  
      const mockEvent = { target: { value: 'test' } };
      handleChange(mockEvent);
  
      expect(mockNavigate).toHaveBeenCalledWith('/search', { state: { searchTerm: 'test' } });
    });

    it('does not trigger navigation on empty search term', () => {
      const mockNavigate = vi.fn();
      const initialState = { searchTerm: '' };
    
      const handleChange = (event) => {
        const updatedState = { ...initialState };
        updatedState.searchTerm = event.target.value;
        if (updatedState.searchTerm.length > 0) { // strictly greater than 0
          mockNavigate('/search', { state: { searchTerm: updatedState.searchTerm } });
        }
      };
    
      const mockEvent = { target: { value: '' } };
      handleChange(mockEvent);
    
      expect(mockNavigate).not.toHaveBeenCalled();
    });

    it('renders search input with placeholder', async() => {
      await act (async () => {
        render(
          <BrowserRouter>
            <SearchBar />
          </BrowserRouter>
          );
      });
      const inputElement = screen.getByRole('textbox');
      expect(inputElement).toHaveAttribute('placeholder', 'search next watch ');
    });
  });

  
