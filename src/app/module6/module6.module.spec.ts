import { Module6Module } from './module6.module';

describe('Module6Module', () => {
  let module6Module: Module6Module;

  beforeEach(() => {
    module6Module = new Module6Module();
  });

  it('should create an instance', () => {
    expect(module6Module).toBeTruthy();
  });
});
