import { Module5Module } from './module5.module';

describe('Module5Module', () => {
  let module5Module: Module5Module;

  beforeEach(() => {
    module5Module = new Module5Module();
  });

  it('should create an instance', () => {
    expect(module5Module).toBeTruthy();
  });
});
