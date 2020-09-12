const useSpy = jest.fn();
const listenSpy = jest.fn();
jest.mock('../src/routes/routes')
jest.doMock('express', () => {
  return () => ({
    use: useSpy,
    listen: listenSpy,
    
  })
});

describe('Testing app.ts', () => {
  test('should call use fn', () => {
    require('../src/app');
    expect(useSpy).toHaveBeenCalled();
  });

  test('should call listen fn', () => {
    require('../src/app');
    expect(listenSpy).toHaveBeenCalled();
  });
});