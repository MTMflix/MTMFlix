import { describe, it } from 'vitest';

describe('initial test', () => {
    it('initial true check', async() => {
        const running = true;
        expect(running).toBe(true);
    });
});