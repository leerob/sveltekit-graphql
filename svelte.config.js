import vercel from '@sveltejs/adapter-vercel';

const config = {
  kit: {
    adapter: vercel(),
    target: '#svelte',
  },
};

export default config;
