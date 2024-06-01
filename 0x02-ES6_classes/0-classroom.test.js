import ClassRoom from './0-classroom';

describe('classRoom', () => {
  it('has maxStudentsSize property', () => {
    expect.assertions(1);
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
