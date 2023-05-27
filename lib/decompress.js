const zlib = require('zlib')


function Decompress(ctx) {
  return function(res, data) {
    var data
    switch(res.headers['content-encoding']) {
        case 'gzip':
            data = zlib.gunzipSync(Buffer.concat(data));
        break;
        case 'deflate':
            data = zlib.inflateSync(Buffer.concat(data));
        break;
        case 'br':
            data = zlib.brotliDecompressSync(Buffer.concat(data));
        break;
        default: data = Buffer.concat(data); break;
    };
    return data
  }
}

module.exports = Decompress