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
      'figma:asset/twoTierLunch.png': path.resolve(__dirname, './src/assets/twoTierLunch.png'),
      'figma:asset/fb40f4553e53d7ed0cb4e22c1998041d5226b73b.jpg': path.resolve(__dirname, './src/assets/fb40f4553e53d7ed0cb4e22c1998041d5226b73b.jpg'),
      // 'figma:asset/6MasalaBowls_silver.webp': path.resolve(__dirname, './src/assets/6MasalaBowls_silver.webp'),
      'figma:asset/sindoor-masala-dabba-steel-6v.webp': path.resolve(__dirname, './src/assets/sindoor-masala-dabba-steel-6v.webp'),
      'figma:asset/PoojaSilverBox.png': path.resolve(__dirname, './src/assets/PoojaSilverBox.png'),
      'figma:asset/SindoorDryFruit_glass.jpg': path.resolve(__dirname, './src/assets/SindoorDryFruit_glass.jpg'),
      'figma:asset/SindoorDryFruit_silver.jpg': path.resolve(__dirname, './src/assets/SindoorDryFruit_silver.jpg'),
      'figma:asset/sindoor-masala-dabba-steel-9v.jpg': path.resolve(__dirname, './src/assets/sindoor-masala-dabba-steel-9v.jpg'),
      'figma:asset/sindoor-masala-dabba-steel.jpg': path.resolve(__dirname, './src/assets/sindoor-masala-dabba-steel.jpg'),
      'figma:asset/SquareTiffin.jpg': path.resolve(__dirname, './src/assets/SquareTiffin.jpg'),
      'figma:asset/SquareCanisterSet.jpg': path.resolve(__dirname, './src/assets/SquareCanisterSet.jpg'),
      'figma:asset/threeTiffinKingTrio.jpg': path.resolve(__dirname, './src/assets/threeTiffinKingTrio.jpg'),
      'figma:asset/5b8a162295fdb3671fb90892665aed62c800a6e9.png': path.resolve(__dirname, './src/assets/5b8a162295fdb3671fb90892665aed62c800a6e9.png'),
      'figma:asset/533557484b5de1a2757a6da45041ce1ef8dea154.png': path.resolve(__dirname, './src/assets/533557484b5de1a2757a6da45041ce1ef8dea154.png'),
      'figma:asset/ninemasaka-3D.jpg': path.resolve(__dirname, './src/assets/ninemasaka-3D.jpg'),
      'figma:asset/46f7468268dc4910cc1671a5d6957250ae4f881b.png': path.resolve(__dirname, './src/assets/46f7468268dc4910cc1671a5d6957250ae4f881b.png'),

      'figma:asset/icon_fotter.png': path.resolve(__dirname, './src/assets/icon_fotter.png'),

      'figma:asset/43ca7df0df32d72680a9aa14e61ddbf303836314.jpg': path.resolve(__dirname, './src/assets/43ca7df0df32d72680a9aa14e61ddbf303836314.jpg'),
      'figma:asset/3b18af72beb1d361403d456a15c314b6ac1fa9a9.webp': path.resolve(__dirname, './src/assets/3b18af72beb1d361403d456a15c314b6ac1fa9a9.webp'),
      'figma:asset/new-3b18af72beb1d361403d456a15c314b6ac1fa9a9.jpg': path.resolve(__dirname, './src/assets/new-3b18af72beb1d361403d456a15c314b6ac1fa9a9.jpg'),
      'figma:asset/website-bannar.jpg': path.resolve(__dirname, './src/assets/website-bannar.jpg'),
      'figma:asset/fourCompartment_glass.jpg': path.resolve(__dirname, './src/assets/fourCompartment_glass.jpg'),
      'figma:asset/fourCompartment_silver.png': path.resolve(__dirname, './src/assets/fourCompartment_silver.png'),
      'figma:asset/fourCompartment_silverss.jpg': path.resolve(__dirname, './src/assets/fourCompartment_silverss.jpg'),
      'figma:asset/nineMasalaBowls.jpg': path.resolve(__dirname, './src/assets/nineMasalaBowls.jpg'),
      'figma:asset/sindoor-masala-dabba-glass-6v.webp': path.resolve(__dirname, './src/assets/sindoor-masala-dabba-glass-6v.webp'),
      'figma:asset/sindoor-masala-dabba-glass.jpg': path.resolve(__dirname, './src/assets/sindoor-masala-dabba-glass.jpg'),
      'figma:asset/Small300ml.jpg': path.resolve(__dirname, './src/assets/Small300ml.jpg'),
      'figma:asset/Medium350ml.jpg': path.resolve(__dirname, './src/assets/Medium350ml.jpg'),
      'figma:asset/Big400ml.jpg': path.resolve(__dirname, './src/assets/Big400ml.jpg'),
      'figma:asset/new-SquareTiffin.jpg': path.resolve(__dirname, './src/assets/new-SquareTiffin.jpg'),

      'figma:asset/website-bannar-phone-src.jpeg': path.resolve(__dirname, './src/assets/website-bannar-phone-src.jpeg'),


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
