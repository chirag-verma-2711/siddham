import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],

  // ✅ REQUIRED FOR VERCEL
  base: '/',

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'vaul@1.1.2': 'vaul',
      'sonner@2.0.3': 'sonner',
      'recharts@2.15.2': 'recharts',
      'react-resizable-panels@2.1.7': 'react-resizable-panels',
      'react-hook-form@7.55.0': 'react-hook-form',
      'react-day-picker@8.10.1': 'react-day-picker',
      'next-themes@0.4.6': 'next-themes',
      'lucide-react@0.487.0': 'lucide-react',
      'input-otp@1.4.2': 'input-otp',

      // ✅ KEEP ALL FIGMA ASSETS
      'figma:asset/fc105f95e8e33c113708e478efd14f226115501e.png': path.resolve(__dirname, './src/assets/fc105f95e8e33c113708e478efd14f226115501e.png'),
      'figma:asset/fb40f4553e53d7ed0cb4e22c1998041d5226b73b.png': path.resolve(__dirname, './src/assets/fb40f4553e53d7ed0cb4e22c1998041d5226b73b.png'),
      'figma:asset/6MasalaBowls_silver.webp': path.resolve(__dirname, './src/assets/6MasalaBowls_silver.webp'),
      'figma:asset/PoojaSilverBox.webp': path.resolve(__dirname, './src/assets/PoojaSilverBox.webp'),
      'figma:asset/9addbddb2954fb069acf287e8265005d4f3557ce.png': path.resolve(__dirname, './src/assets/9addbddb2954fb069acf287e8265005d4f3557ce.png'),
      'figma:asset/9940d9157251b62be37c770d8620ca1f0d850ad1.png': path.resolve(__dirname, './src/assets/9940d9157251b62be37c770d8620ca1f0d850ad1.png'),
      'figma:asset/97ccf64244679b25415f338d4bdde58cb18e000b.png': path.resolve(__dirname, './src/assets/97ccf64244679b25415f338d4bdde58cb18e000b.png'),
      'figma:asset/94039e0715ada18c250d12be5241df6434324f58.png': path.resolve(__dirname, './src/assets/94039e0715ada18c250d12be5241df6434324f58.png'),
      'figma:asset/72fd3216672b3f71fb1ba3533a68e60262886a6b.png': path.resolve(__dirname, './src/assets/72fd3216672b3f71fb1ba3533a68e60262886a6b.png'),
      'figma:asset/5b8a162295fdb3671fb90892665aed62c800a6e9.png': path.resolve(__dirname, './src/assets/5b8a162295fdb3671fb90892665aed62c800a6e9.png'),
      'figma:asset/533557484b5de1a2757a6da45041ce1ef8dea154.png': path.resolve(__dirname, './src/assets/533557484b5de1a2757a6da45041ce1ef8dea154.png'),
      'figma:asset/46f7468268dc4910cc1671a5d6957250ae4f881b.png': path.resolve(__dirname, './src/assets/46f7468268dc4910cc1671a5d6957250ae4f881b.png'),
      'figma:asset/43ca7df0df32d72680a9aa14e61ddbf303836314.png': path.resolve(__dirname, './src/assets/43ca7df0df32d72680a9aa14e61ddbf303836314.png'),
      'figma:asset/3b18af72beb1d361403d456a15c314b6ac1fa9a9.png': path.resolve(__dirname, './src/assets/3b18af72beb1d361403d456a15c314b6ac1fa9a9.png'),
      'figma:asset/1ee64264d81ccf0c2b3f71fd438da13cd409d985.png': path.resolve(__dirname, './src/assets/1ee64264d81ccf0c2b3f71fd438da13cd409d985.png'),
      'figma:asset/nineMasalaBowls.webp': path.resolve(__dirname, './src/assets/nineMasalaBowls.webp'),

      '@': path.resolve(__dirname, './src'),
    },
  },

  build: {
    target: 'esnext',

    // ✅ CHANGE ONLY THIS
    outDir: 'dist',
  },

  server: {
    port: 3000,
    open: true,
  },
});
