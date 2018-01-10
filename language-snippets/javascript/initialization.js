// node: const Octokit = require('octokit')
// browser: <script src="https://cdn.github.com/octokit/javascript/octokit-1.2.3.js"></script>
const github = new Octokit({
    // optional
  timeout: 5000,
  host: 'github.my-GHE-enabled-company.com', // should be api.github.com for GitHub
  pathPrefix: '/api/v3', // for some GHEs; none for GitHub
  protocol: 'https',
  port: 9898,
  proxy: '<proxyUrl>',
  ca: 'whatever',
  headers: {
    'accept': 'application/vnd.github.something-custom',
    'cookie': 'something custom',
    'user-agent': 'something custom'
  },
  requestMedia: 'application/vnd.github.something-custom',
  rejectUnauthorized: false, // default: true
  family: 6
})
;
