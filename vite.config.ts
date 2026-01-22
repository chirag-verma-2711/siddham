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
      'figma:asset/twoTierLunch.jpg': path.resolve(__dirname, './src/assets/twoTierLunch.jpg'),
      'figma:asset/fb40f4553e53d7ed0cb4e22c1998041d5226b73b.jpg': path.resolve(__dirname, './src/assets/fb40f4553e53d7ed0cb4e22c1998041d5226b73b.jpg'),
      'figma:asset/6MasalaBowls_silver.webp': path.resolve(__dirname, './src/assets/6MasalaBowls_silver.webp'),
      'figma:asset/PoojaSilverBox.webp': path.resolve(__dirname, './src/assets/PoojaSilverBox.webp'),
      'figma:asset/SindoorDryFruit_glass.jpg': path.resolve(__dirname, './src/assets/SindoorDryFruit_glass.jpg'),
      'figma:asset/SindoorDryFruit_silver.jpg': path.resolve(__dirname, './src/assets/SindoorDryFruit_silver.jpg'),
      'figma:asset/nineMasalaBowls_silver.jpg': path.resolve(__dirname, './src/assets/nineMasalaBowls_silver.jpg'),
      'figma:asset/SquareTiffin.jpg': path.resolve(__dirname, './src/assets/SquareTiffin.jpg'),
      'figma:asset/SquareCanisterSet.jpg': path.resolve(__dirname, './src/assets/SquareCanisterSet.jpg'),
      'figma:asset/threeTiffinKingTrio.jpg': path.resolve(__dirname, './src/assets/threeTiffinKingTrio.jpg'),
      'figma:asset/5b8a162295fdb3671fb90892665aed62c800a6e9.png': path.resolve(__dirname, './src/assets/5b8a162295fdb3671fb90892665aed62c800a6e9.png'),
      'figma:asset/533557484b5de1a2757a6da45041ce1ef8dea154.jpg': path.resolve(__dirname, './src/assets/533557484b5de1a2757a6da45041ce1ef8dea154.jpg'),
      'figma:asset/46f7468268dc4910cc1671a5d6957250ae4f881b.png': path.resolve(__dirname, './src/assets/46f7468268dc4910cc1671a5d6957250ae4f881b.png'),

      'figma:asset/icon_fotter.png': path.resolve(__dirname, './src/assets/icon_fotter.png'),

      'figma:asset/43ca7df0df32d72680a9aa14e61ddbf303836314.jpg': path.resolve(__dirname, './src/assets/43ca7df0df32d72680a9aa14e61ddbf303836314.jpg'),
      'figma:asset/3b18af72beb1d361403d456a15c314b6ac1fa9a9.webp': path.resolve(__dirname, './src/assets/3b18af72beb1d361403d456a15c314b6ac1fa9a9.webp'),
      'figma:asset/fourCompartment_glass.jpg': path.resolve(__dirname, './src/assets/fourCompartment_glass.jpg'),
      'figma:asset/fourCompartment_silver.jpg': path.resolve(__dirname, './src/assets/fourCompartment_silver.jpg'),
      'figma:asset/nineMasalaBowls.webp': path.resolve(__dirname, './src/assets/nineMasalaBowls.webp'),
      'figma:asset/sixMasalaBowls.jpg': path.resolve(__dirname, './src/assets/sixMasalaBowls.jpg'),

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
