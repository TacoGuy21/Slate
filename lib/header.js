function Header(ctx) {
  return {
    request(request, response) {
      var headers = Object.assign({}, request.headers)
      delete headers['host']
      delete headers['accept-encoding']
      delete headers['x-forwarded-for']
      delete headers['x-replit-user-id']
      delete headers['x-replit-user-name']
      delete headers['x-replit-user-roles']
      delete headers['x-replit-user-teams']
      delete headers['x-forwarded-proto']
      //request.headers['host'] = new URL(ctx.encoding.decode(request.url.replace(ctx.prefix, ''))).hostname
      headers['origin'] = new URL(ctx.encoding.decode(request.url.replace(ctx.prefix, ''))).origin
      headers['referrer'] = new URL(ctx.encoding.decode(request.url.replace(ctx.prefix, ''))).href
      if (ctx.userAgent) request.headers['user-agent'] = ctx.userAgent
      return headers
    },
    response(request, response) {
      var headers = Object.assign({}, response.headers)
      var cont = ctx
      cont.Url = new URL(ctx.encoding.decode(request.url.replace(ctx.prefix, '')))
      Object.entries(headers).forEach(([name, value]) => {
        if (name=='Location'||name=='location') {
          headers[name] = ctx.url.encode(value, cont)
        }
        if (name=='Refresh'||name=='refresh') {
          headers[name] = value.split(';')[0] + ' ; ' + value.split(';')[1]
        }
      });
      [
        'content-length',
        'content-security-policy',
        'content-security-policy-report-only',
        'strict-transport-security',
        'x-frame-options',
        'x-content-type-options',
      ].forEach(name => delete headers[name]);
      // if (ctx.cors==true) headers['access-control-allow-origin'] = '*'
      return headers
    }
  }
}

module.exports = Header