import { SafePipePipe } from '../Core/safe-pipe.pipe';

describe('SafePipePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipePipe();
    expect(pipe).toBeTruthy();
  });
});
