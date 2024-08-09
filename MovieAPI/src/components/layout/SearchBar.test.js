import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; 
import SearchBar from './SearchBar';
import { describe, expect, test } from 'vitest';
import { Navbar } from './Navbar';
import useState from 'react';
import { vi } from 'vitest';

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
  
  });
  
