export default  {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '.next/'],
    setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
      },    
  };
