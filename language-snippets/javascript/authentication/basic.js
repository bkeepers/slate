octokit.authenticate({
  type: 'basic',
  username: 'octocat',
  password: 'secret'
})

const {data: authenticatedUser} = await octokit.users.get()
;
