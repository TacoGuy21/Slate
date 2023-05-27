<h1>Rhodium<h2>Fast, Light, Capable.</h2><h3>Successor to <a target="_blank" href="https://github.com/ludicrousdevelopment/palladium">Palladium</a><h3>Secondary Proxy to <a target="_blank" href="https://github.com/titaniumnetwork-dev/corrosion">Corrosion</a> and <a target="_blank" href="https://github.com/binary-person/womginx">Womginx</a></h1>

`index.js`
```js
var req=require,
  server=req("http").Server(),
  proxy=new(req("./"))({title:"Rhodium",server:server});proxy.init();server.on("request",(e,r)=>(e.url.startsWith(proxy.prefix)?proxy.request(e,r):r.end(req("fs").readFileSync("./index.html")))).listen(80);
```

`config`
```json
{
  "userAgent": "fx", // Firefox userAgent Spoof
  "prefix": "/service/", // Proxy Prefix
  "wss": true, // WebSocket Server
  "corrosion": [false, {}], // Corrosion Dual-Server
  "title": "Rhodium", // Page Title on Proxied Pages
  "server": http.Server(), // Your Http Server
  "encode": "xor" // Encoding for Proxy URLS
}
```
[userAgent](#userAgent)

[prefix](#prefix)

[wss](#wss)

[corrosion](#corrosion)

[title](#title)

[server](#server)

[encode](#encode)

<div id="userAgent">
  <h1>UserAgent Spoofing</h1>
  <h3>Spoof Your Browser Details</h3>
  <h2>Configuration</h2>
</div>

### Warning: This Can Affect Some Complicated Websites, No Specific Examples
```js
"fx": Firefox
"gl": Chrome
"sf": Safari
"ed": Edge
"op": Opera
"mofx": Firefox Mobile
"mogl": Chrome Mobile
"mosf": Safari Mobile
"moed": Edge Mobile
"moop": Opera Mobile
// You can also use your own custom one: "epic userAgent name"
```
<div id="prefix">
  <h1>Prefix</h1>
  <h3>Choose Your Instance's Prefix</h3>
  <h2>Configuration</h2>
</div>

```js
"/service/": Default Prefix
// Use Any Custom Prefix, make sure it starts and ends with "/"

// Proxy Gateway: "/prefix/gateway?url=https://url.com"
// Proxy Inject File: "/prefix/index"
// Proxy URL: "/prefix/encoded_url"
```
<div id="wss">
  <h1>Websocket Server</h1>
  <h3>Allow Websocket Connections Through Your Proxy Server</h3>
  <h2>Configuration</h2>
</div>

```js
"true": Default Setting

// You MUST Add Your HTTP Server to allow the Websocket Server to work
```
<div id="corrosion">
  <h1>Corrosion Integration</h1>
  <h3>You Cannot Have Two WS Servers on one HTTP Server</h3>
  <h2>Configuration</h2>
</div>

```js
"[true, CorrosionInstance]": Setting when you have a Corrosion server
"[false, {}]" No Corrosion Server
}
```
<div id="title">
  <h1>Title</h1>
  <h3>Page Title on Proxied Pages</h3>
  <h2>Configuration</h2>
</div>

```js
"Service": Default Setting
// You Can set it to any string or number
```
<div id="server">
  <h1>Server</h1>
  <h3>REQUIRED for WS Support</h3>
  <h2>Configuration</h2>
</div>

```js
"http.Server()": HTTP Server, Default Setting when no specified server to prevent errors

//This example will NOT work with Websockets, it will simply prevent errors
```
<div id="encode">
  <h1>Encoding</h1>
  <h3>Encode Request Links</h3>
  <h2>Configuration</h2>
</div>

```js
"xor": Default Setting

//XOR: "https://discord.com/" into "hvtrs8%2F-dksaopd%2Ccmm%2F"
//Plain: "https://discord.com/" into "https://discord.com/"
//B64: "https://discord.com/" into ""
```