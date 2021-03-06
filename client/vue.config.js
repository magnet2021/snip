module.exports = {
  pwa: {
    name: 'snip',
    themeColor: '#8672E8',
    msTileColor: '#8672E8',
    iconPaths: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon.png',
    },
    manifestOptions: {
      // eslint-disable-next-line @typescript-eslint/camelcase
      background_color: '#282b30',
      display: 'minimal-ui',
      icons: [
        {
          src: './img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'any maskable',
        },
        {
          src: './img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
  },
};
