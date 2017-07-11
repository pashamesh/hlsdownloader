import HLSDownloader from 'hlsdownloader' // Using ES2015 module
// var HLSDownloader = require('hlsdownloader').downloader //using commonJS module

const params = {
  playlistURL: 'http://example.com/hls/playlist.m3u8', // change it
  headers: {
    'Authorization': 'Basic hashstring'
  },
  destination: '/tmp' // change it
}
const downloader = new HLSDownloader(params)
downloader.startDownload((err, msg) => err ? console.log(err) : console.log(msg))
