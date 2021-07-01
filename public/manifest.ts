import { ManifestOptions } from "webpack-pwa-manifest";
import path from 'path';

const Manifest: ManifestOptions = {
	name: '2021 React',
	short_name: '2021React',
	start_url: '/',
	display: 'standalone',
	orientation: 'portrait',
	background_color: '#121212',
	theme_color: '#61DBFB',
	'theme-color': '#61DBFB',
  description: 'React accelerator',
  icons: [
    {
      src: path.resolve('public/icons/icon.png'),
      destination: 'icons',
      sizes: [48, 96, 128, 192] // multiple sizes
    },
  ]
};

export default Manifest;
