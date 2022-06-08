const { getDevPost } = require('../src/index');
const { getMediumPost } = require('../src/index');

describe('getDevPost function', () => {
  it('should be defined', () => {
    expect(getDevPost).toBeDefined();
  });

  it('should return array', async () => {
    const result = await getDevPost({
      user: 'arifszn',
    });

    expect(Array.isArray(result)).toBe(true);
  });

  it('should contain properties', async () => {
    const result = await getDevPost({
      user: 'arifszn',
    });

    expect(result[0]).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        description: expect.any(String),
        thumbnail: expect.any(String),
        link: expect.any(String),
        categories: expect.any(Array),
        publishedAt: expect.any(Date),
      })
    );
  });

  it('should return empty array for empty user', async () => {
    const result = await getDevPost({ user: '' });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('should return empty array for invalid user', async () => {
    const result = await getDevPost({
      user: 'asdsfdsdfsdfsdfsdf-sdfsdfsdfs-sdfsdfsd-123-4234332',
    });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('should throw error for undefined user', () => {
    expect(async () => {
      await getDevPost();
    }).rejects.toThrow(TypeError);
  });
});

describe('getMediumPost function', () => {
  it('should be defined', () => {
    expect(getMediumPost).toBeDefined();
  });

  it('should return array', async () => {
    const result = await getMediumPost({
      user: 'arifszn',
    });

    expect(Array.isArray(result)).toBe(true);
  });

  it('should contain properties', async () => {
    const result = await getMediumPost({
      user: 'arifszn',
    });

    expect(result[0]).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        description: expect.any(String),
        thumbnail: expect.any(String),
        link: expect.any(String),
        categories: expect.any(Array),
        publishedAt: expect.any(Date),
      })
    );
  });

  it('should return empty array for empty user', async () => {
    const result = await getMediumPost({ user: '' });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('should return empty array for invalid user', async () => {
    const result = await getMediumPost({
      user: 'asdsfdsdfsdfsdfsdf-sdfsdfsdfs-sdfsdfsd-123-4234332',
    });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it('should throw error for undefined user', () => {
    expect(async () => {
      await getMediumPost();
    }).rejects.toThrow(TypeError);
  });
});
