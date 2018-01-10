# Rest

## Activity

### checkNotificationThreadSubscription

```shell
curl -XGET https://api.github.com/notifications/threads/:id/subscription
```

```javascript
github.activity.checkNotificationThreadSubscription({ ... })
```

Check to see if the current user is subscribed to a thread.

Name | Type | Description
--- | --- | ---
`id` | string | 

### checkStarringRepo

```shell
curl -XGET https://api.github.com/user/starred/:owner/:repo
```

```javascript
github.activity.checkStarringRepo({ ... })
```

Check if you are starring a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### deleteNotificationThreadSubscription

```shell
curl -XDELETE https://api.github.com/notifications/threads/:id/subscription
```

```javascript
github.activity.deleteNotificationThreadSubscription({ ... })
```

Delete a notification thread subscription.

Name | Type | Description
--- | --- | ---
`id` | string | 

### getEvents

```shell
curl -XGET https://api.github.com/events
```

```javascript
github.activity.getEvents({ ... })
```

List public events

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsForOrg

```shell
curl -XGET https://api.github.com/orgs/:org/events
```

```javascript
github.activity.getEventsForOrg({ ... })
```

List public events for an organization

Name | Type | Description
--- | --- | ---
`org` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsForRepo

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/events
```

```javascript
github.activity.getEventsForRepo({ ... })
```

List repository events

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsForRepoIssues

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/events
```

```javascript
github.activity.getEventsForRepoIssues({ ... })
```

List issue events for a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsForRepoNetwork

```shell
curl -XGET https://api.github.com/networks/:owner/:repo/events
```

```javascript
github.activity.getEventsForRepoNetwork({ ... })
```

List public events for a network of repositories

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsForUser

```shell
curl -XGET https://api.github.com/users/:username/events
```

```javascript
github.activity.getEventsForUser({ ... })
```

List events performed by a user

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsForUserOrg

```shell
curl -XGET https://api.github.com/users/:username/events/orgs/:org
```

```javascript
github.activity.getEventsForUserOrg({ ... })
```

List events for a user's organization

Name | Type | Description
--- | --- | ---
`username` | string | 
`org` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsForUserPublic

```shell
curl -XGET https://api.github.com/users/:username/events/public
```

```javascript
github.activity.getEventsForUserPublic({ ... })
```

List public events performed by a user

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsReceived

```shell
curl -XGET https://api.github.com/users/:username/received_events
```

```javascript
github.activity.getEventsReceived({ ... })
```

List events that a user has received

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsReceivedPublic

```shell
curl -XGET https://api.github.com/users/:username/received_events/public
```

```javascript
github.activity.getEventsReceivedPublic({ ... })
```

List public events that a user has received

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getFeeds

```shell
curl -XGET https://api.github.com/feeds
```

```javascript
github.activity.getFeeds({ ... })
```

Get all feeds available for the authenticated user.


### getNotificationThread

```shell
curl -XGET https://api.github.com/notifications/threads/:id
```

```javascript
github.activity.getNotificationThread({ ... })
```

View a single notification thread.

Name | Type | Description
--- | --- | ---
`id` | string | 

### getNotifications

```shell
curl -XGET https://api.github.com/notifications
```

```javascript
github.activity.getNotifications({ ... })
```

Get all notifications for the current user, grouped by repository.

Name | Type | Description
--- | --- | ---
`[all=false]` | boolean | If true, show notifications marked as read. Default: false
`[participating=false]` | boolean | If true, only shows notifications in which the user is directly participating or mentioned. Default: false
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[before]` | string | Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

### getNotificationsForUser

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/notifications
```

```javascript
github.activity.getNotificationsForUser({ ... })
```

Get all notifications for the given user.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[all=false]` | boolean | If true, show notifications marked as read. Default: false
`[participating=false]` | boolean | If true, only shows notifications in which the user is directly participating or mentioned. Default: false
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[before]` | string | Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.

### getRepoSubscription

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/subscription
```

```javascript
github.activity.getRepoSubscription({ ... })
```

Get a Repository Subscription.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getStargazersForRepo

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/stargazers
```

```javascript
github.activity.getStargazersForRepo({ ... })
```

List Stargazers

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getStarredRepos

```shell
curl -XGET https://api.github.com/user/starred
```

```javascript
github.activity.getStarredRepos({ ... })
```

List repositories being starred by the authenticated user

Name | Type | Description
--- | --- | ---
`[sort=created]` | string=`created`,`updated` | 
`[direction=desc]` | string=`asc`,`desc` | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getStarredReposForUser

```shell
curl -XGET https://api.github.com/users/:username/starred
```

```javascript
github.activity.getStarredReposForUser({ ... })
```

List repositories being starred by a user

Name | Type | Description
--- | --- | ---
`username` | string | 
`[sort=created]` | string=`created`,`updated` | 
`[direction=desc]` | string=`asc`,`desc` | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getWatchedRepos

```shell
curl -XGET https://api.github.com/user/subscriptions
```

```javascript
github.activity.getWatchedRepos({ ... })
```

List repositories being watched by the authenticated user.

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getWatchedReposForUser

```shell
curl -XGET https://api.github.com/users/:username/subscriptions
```

```javascript
github.activity.getWatchedReposForUser({ ... })
```

List repositories being watched by a user.

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getWatchersForRepo

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/subscribers
```

```javascript
github.activity.getWatchersForRepo({ ... })
```

Get watchers for repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### markNotificationThreadAsRead

```shell
curl -XPATCH https://api.github.com/notifications/threads/:id
```

```javascript
github.activity.markNotificationThreadAsRead({ ... })
```

Mark a notification thread as read.

Name | Type | Description
--- | --- | ---
`id` | string | 

### markNotificationsAsRead

```shell
curl -XPUT https://api.github.com/notifications
```

```javascript
github.activity.markNotificationsAsRead({ ... })
```

Mark notifications as read for authenticated user.

Name | Type | Description
--- | --- | ---
`[last_read_at=Time.now]` | string | Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now

### markNotificationsAsReadForRepo

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/notifications
```

```javascript
github.activity.markNotificationsAsReadForRepo({ ... })
```

Mark notifications in a repo as read.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[last_read_at=Time.now]` | string | Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now

### setNotificationThreadSubscription

```shell
curl -XPUT https://api.github.com/notifications/threads/:id/subscription
```

```javascript
github.activity.setNotificationThreadSubscription({ ... })
```

This lets you subscribe or unsubscribe from a conversation. Unsubscribing from a conversation mutes all future notifications (until you comment or get @mentioned once more).

Name | Type | Description
--- | --- | ---
`id` | string | 
`[subscribed]` | boolean | Determines if notifications should be received from this thread
`[ignored]` | boolean | Determines if all notifications should be blocked from this thread

### setRepoSubscription

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/subscription
```

```javascript
github.activity.setRepoSubscription({ ... })
```

Set a Repository Subscription

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[subscribed]` | boolean | Determines if notifications should be received from this repository.
`[ignored]` | boolean | Determines if all notifications should be blocked from this repository.

### starRepo

```shell
curl -XPUT https://api.github.com/user/starred/:owner/:repo
```

```javascript
github.activity.starRepo({ ... })
```

Star a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### unstarRepo

```shell
curl -XDELETE https://api.github.com/user/starred/:owner/:repo
```

```javascript
github.activity.unstarRepo({ ... })
```

Unstar a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### unwatchRepo

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/subscription
```

```javascript
github.activity.unwatchRepo({ ... })
```

Unwatch a repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

## Apps

### addRepoToInstallation

```shell
curl -XPUT https://api.github.com/installations/:installation_id/repositories/:repository_id
```

```javascript
github.apps.addRepoToInstallation({ ... })
```

Add a single repository to an installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`repository_id` | string | 

### checkMarketplaceListingAccount

```shell
curl -XGET https://api.github.com/marketplace_listing/accounts/:id
```

```javascript
github.apps.checkMarketplaceListingAccount({ ... })
```

Check if a GitHub account is associated with any Marketplace listing. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### checkMarketplaceListingStubbedAccount

```shell
curl -XGET https://api.github.com/marketplace_listing/stubbed/accounts/:id
```

```javascript
github.apps.checkMarketplaceListingStubbedAccount({ ... })
```

Check if a stubbed GitHub account is associated with any Marketplace listing. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### createInstallationToken

```shell
curl -XPOST https://api.github.com/installations/:installation_id/access_tokens
```

```javascript
github.apps.createInstallationToken({ ... })
```

Create a new installation token. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`[user_id]` | string | The id of the user for whom the app is acting on behalf of.

### get

```shell
curl -XGET https://api.github.com/app
```

```javascript
github.apps.get({ ... })
```

Get the authenticated GitHub App. (In preview period. See README.)


### getForSlug

```shell
curl -XGET https://api.github.com/apps/:app_slug
```

```javascript
github.apps.getForSlug({ ... })
```

Get a single GitHub App. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`app_slug` | string | The URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., https://github.com/settings/apps/:app_slug).

### getInstallation

```shell
curl -XGET https://api.github.com/app/installations/:installation_id
```

```javascript
github.apps.getInstallation({ ... })
```

Get a single installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 

### getInstallationRepositories

```shell
curl -XGET https://api.github.com/installation/repositories
```

```javascript
github.apps.getInstallationRepositories({ ... })
```

List repositories that are accessible to the authenticated installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[user_id]` | string | The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.

### getInstallations

```shell
curl -XGET https://api.github.com/app/installations
```

```javascript
github.apps.getInstallations({ ... })
```

List the app's installations. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getMarketplaceListingPlanAccounts

```shell
curl -XGET https://api.github.com/marketplace_listing/plans/:id/accounts
```

```javascript
github.apps.getMarketplaceListingPlanAccounts({ ... })
```

List all GitHub accounts (user or organization) on a specific plan. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getMarketplaceListingPlans

```shell
curl -XGET https://api.github.com/marketplace_listing/plans
```

```javascript
github.apps.getMarketplaceListingPlans({ ... })
```

List all plans for your Marketplace listing. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getMarketplaceListingStubbedPlanAccounts

```shell
curl -XGET https://api.github.com/marketplace_listing/stubbed/plans/:id/accounts
```

```javascript
github.apps.getMarketplaceListingStubbedPlanAccounts({ ... })
```

List all GitHub accounts (user or organization) on a specific stubbed plan. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getMarketplaceListingStubbedPlans

```shell
curl -XGET https://api.github.com/marketplace_listing/stubbed/plans
```

```javascript
github.apps.getMarketplaceListingStubbedPlans({ ... })
```

List all stubbed plans for your Marketplace listing. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### removeRepoFromInstallation

```shell
curl -XDELETE https://api.github.com/installations/:installation_id/repositories/:repository_id
```

```javascript
github.apps.removeRepoFromInstallation({ ... })
```

Remove a single repository from an installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`repository_id` | string | 

## Authorization

### check

```shell
curl -XGET https://api.github.com/applications/:client_id/tokens/:access_token
```

```javascript
github.authorization.check({ ... })
```

Check an authorization

Name | Type | Description
--- | --- | ---
`access_token` | string | OAuth token
`[client_id]` | string | The 20 character OAuth app client key for which to create the token.

### create

```shell
curl -XPOST https://api.github.com/authorizations
```

```javascript
github.authorization.create({ ... })
```

Create a new authorization.

Name | Type | Description
--- | --- | ---
`[scopes]` | array | A list of scopes that this authorization is in.
`[note]` | string | A note to remind you what the OAuth token is for.
`[note_url]` | string | A URL to remind you what app the OAuth token is for.
`[client_id]` | string | The 20 character OAuth app client key for which to create the token.
`[client_secret]` | string | The 40 character OAuth app client secret for which to create the token.
`[fingerprint]` | string | A unique string to distinguish an authorization from others created for the same client ID and user.

### delete

```shell
curl -XDELETE https://api.github.com/authorizations/:id
```

```javascript
github.authorization.delete({ ... })
```

Delete an authorization.

Name | Type | Description
--- | --- | ---
`id` | string | 

### deleteGrant

```shell
curl -XDELETE https://api.github.com/applications/grants/:id
```

```javascript
github.authorization.deleteGrant({ ... })
```

Delete a grant.

Name | Type | Description
--- | --- | ---
`id` | string | 

### get

```shell
curl -XGET https://api.github.com/authorizations/:id
```

```javascript
github.authorization.get({ ... })
```

Get a single authorization.

Name | Type | Description
--- | --- | ---
`id` | string | 

### getAll

```shell
curl -XGET https://api.github.com/authorizations
```

```javascript
github.authorization.getAll({ ... })
```

List your authorizations.

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getGrant

```shell
curl -XGET https://api.github.com/applications/grants/:id
```

```javascript
github.authorization.getGrant({ ... })
```

Get a single grant.

Name | Type | Description
--- | --- | ---
`id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getGrants

```shell
curl -XGET https://api.github.com/applications/grants
```

```javascript
github.authorization.getGrants({ ... })
```

List your grants.

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getOrCreateAuthorizationForApp

```shell
curl -XPUT https://api.github.com/authorizations/clients/:client_id
```

```javascript
github.authorization.getOrCreateAuthorizationForApp({ ... })
```

Get or create an authorization for a specific app.

Name | Type | Description
--- | --- | ---
`client_secret` | string | The 40 character OAuth app client secret associated with the client ID specified in the URL.
`[client_id]` | string | The 20 character OAuth app client key for which to create the token.
`[scopes]` | array | A list of scopes that this authorization is in.
`[note]` | string | A note to remind you what the OAuth token is for.
`[note_url]` | string | A URL to remind you what app the OAuth token is for.
`[fingerprint]` | string | A unique string to distinguish an authorization from others created for the same client ID and user.

### getOrCreateAuthorizationForAppAndFingerprint

```shell
curl -XPUT https://api.github.com/authorizations/clients/:client_id/:fingerprint
```

```javascript
github.authorization.getOrCreateAuthorizationForAppAndFingerprint({ ... })
```

Get or create an authorization for a specific app and fingerprint.

Name | Type | Description
--- | --- | ---
`client_secret` | string | The 40 character OAuth app client secret associated with the client ID specified in the URL.
`[client_id]` | string | The 20 character OAuth app client key for which to create the token.
`[fingerprint]` | string | A unique string to distinguish an authorization from others created for the same client ID and user.
`[scopes]` | array | A list of scopes that this authorization is in.
`[note]` | string | A note to remind you what the OAuth token is for.
`[note_url]` | string | A URL to remind you what app the OAuth token is for.

### reset

```shell
curl -XPOST https://api.github.com/applications/:client_id/tokens/:access_token
```

```javascript
github.authorization.reset({ ... })
```

Reset an authorization

Name | Type | Description
--- | --- | ---
`access_token` | string | OAuth token
`[client_id]` | string | The 20 character OAuth app client key for which to create the token.

### revoke

```shell
curl -XDELETE https://api.github.com/applications/:client_id/tokens/:access_token
```

```javascript
github.authorization.revoke({ ... })
```

Revoke an authorization for an application

Name | Type | Description
--- | --- | ---
`access_token` | string | OAuth token
`[client_id]` | string | The 20 character OAuth app client key for which to create the token.

### revokeGrant

```shell
curl -XDELETE https://api.github.com/applications/:client_id/grants/:access_token
```

```javascript
github.authorization.revokeGrant({ ... })
```

Revoke a grant for an application

Name | Type | Description
--- | --- | ---
`access_token` | string | OAuth token
`[client_id]` | string | The 20 character OAuth app client key for which to create the token.

### update

```shell
curl -XPATCH https://api.github.com/authorizations/:id
```

```javascript
github.authorization.update({ ... })
```

Update an existing authorization.

Name | Type | Description
--- | --- | ---
`id` | string | 
`[scopes]` | array | A list of scopes that this authorization is in.
`[add_scopes]` | array | A list of scopes to add to this authorization.
`[remove_scopes]` | array | A list of scopes to remove from this authorization.
`[note]` | string | A note to remind you what the OAuth token is for.
`[note_url]` | string | A URL to remind you what app the OAuth token is for.
`[fingerprint]` | string | A unique string to distinguish an authorization from others created for the same client ID and user.

## Enterprise

### createOrg

```shell
curl -XPOST https://api.github.com/admin/organizations
```

```javascript
github.enterprise.createOrg({ ... })
```

Create an organization

Name | Type | Description
--- | --- | ---
`login` | string | The organization's username.
`admin` | string | The login of the user who will manage this organization.
`[profile_name]` | string | The organization's display name.

### createPreReceiveEnvironment

```shell
curl -XPOST https://api.github.com/admin/pre_receive_environments
```

```javascript
github.enterprise.createPreReceiveEnvironment({ ... })
```

Create a pre-receive environment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`name` | string | The new pre-receive environment's name.
`image_url` | string | URL from which to download a tarball of this environment.

### createPreReceiveHook

```shell
curl -XPOST https://api.github.com/admin/pre-receive-hooks
```

```javascript
github.enterprise.createPreReceiveHook({ ... })
```

Create a pre-receive hook. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`name` | string | The name of the hook.
`script` | string | The script that the hook runs.
`script_repository` | json | The GitHub repository where the script is kept.
`environment` | json | The pre-receive environment where the script is executed.
`[enforcement=disabled]` | string | The state of enforcement for this hook. default: disabled
`[allow_downstream_configuration=false]` | boolean | Whether enforcement can be overridden at the org or repo level. default: false

### deletePreReceiveEnvironment

```shell
curl -XDELETE https://api.github.com/admin/pre_receive_environments/:id
```

```javascript
github.enterprise.deletePreReceiveEnvironment({ ... })
```

Delete a pre-receive environment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### deletePreReceiveHook

```shell
curl -XDELETE https://api.github.com/admin/pre_receive_hooks/:id
```

```javascript
github.enterprise.deletePreReceiveHook({ ... })
```

Delete a pre-receive hook. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### editPreReceiveEnvironment

```shell
curl -XPATCH https://api.github.com/admin/pre_receive_environments/:id
```

```javascript
github.enterprise.editPreReceiveEnvironment({ ... })
```

Create a pre-receive environment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`name` | string | This pre-receive environment's new name.
`image_url` | string | URL from which to download a tarball of this environment.

### editPreReceiveHook

```shell
curl -XPATCH https://api.github.com/admin/pre_receive_hooks/:id
```

```javascript
github.enterprise.editPreReceiveHook({ ... })
```

Edit a pre-receive hook. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`hook` | json | JSON object that contains pre-receive hook info.

### getLicense

```shell
curl -XGET https://api.github.com/enterprise/settings/license
```

```javascript
github.enterprise.getLicense({ ... })
```

Get license information


### getPreReceiveEnvironment

```shell
curl -XGET https://api.github.com/admin/pre-receive-environments/:id
```

```javascript
github.enterprise.getPreReceiveEnvironment({ ... })
```

Get a single pre-receive environment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getPreReceiveEnvironmentDownloadStatus

```shell
curl -XGET https://api.github.com/admin/pre-receive-environments/:id/downloads/latest
```

```javascript
github.enterprise.getPreReceiveEnvironmentDownloadStatus({ ... })
```

Get a pre-receive environment's download status. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getPreReceiveEnvironments

```shell
curl -XGET https://api.github.com/admin/pre_receive_environments
```

```javascript
github.enterprise.getPreReceiveEnvironments({ ... })
```

List pre-receive environments. (In preview period. See README.)


### getPreReceiveHook

```shell
curl -XGET https://api.github.com/admin/pre-receive-hooks/:id
```

```javascript
github.enterprise.getPreReceiveHook({ ... })
```

Get a single pre-receive hook. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getPreReceiveHooks

```shell
curl -XGET https://api.github.com/admin/pre-receive-hooks
```

```javascript
github.enterprise.getPreReceiveHooks({ ... })
```

List pre-receive hooks. (In preview period. See README.)


### queueIndexingJob

```shell
curl -XPOST https://api.github.com/staff/indexing_jobs
```

```javascript
github.enterprise.queueIndexingJob({ ... })
```

Queue an indexing job

Name | Type | Description
--- | --- | ---
`target` | string | A string representing the item to index.

### stats

```shell
curl -XGET https://api.github.com/enterprise/stats/:type
```

```javascript
github.enterprise.stats({ ... })
```

Get statistics.

Name | Type | Description
--- | --- | ---
`type` | string=`issues`,`hooks`,`milestones`,`orgs`,`comments`,`pages`,`users`,`gists`,`pulls`,`repos`,`all` | Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all.

### syncLdapForTeam

```shell
curl -XPOST https://api.github.com/admin/ldap/teams/:team_id/sync
```

```javascript
github.enterprise.syncLdapForTeam({ ... })
```

Sync LDAP mapping for a team.

Name | Type | Description
--- | --- | ---
`team_id` | number | 

### syncLdapForUser

```shell
curl -XPOST https://api.github.com/admin/ldap/users/:username/sync
```

```javascript
github.enterprise.syncLdapForUser({ ... })
```

Sync LDAP mapping for a user.

Name | Type | Description
--- | --- | ---
`username` | string | 

### triggerPreReceiveEnvironmentDownload

```shell
curl -XPOST https://api.github.com/admin/pre_receive_environments/:id/downloads
```

```javascript
github.enterprise.triggerPreReceiveEnvironmentDownload({ ... })
```

Trigger a pre-receive environment download. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### updateLdapForTeam

```shell
curl -XPATCH https://api.github.com/admin/ldap/teams/:team_id/mapping
```

```javascript
github.enterprise.updateLdapForTeam({ ... })
```

Update LDAP mapping for a team.

Name | Type | Description
--- | --- | ---
`team_id` | number | 
`ldap_dn` | string | LDAP DN for user

### updateLdapForUser

```shell
curl -XPATCH https://api.github.com/admin/ldap/users/:username/mapping
```

```javascript
github.enterprise.updateLdapForUser({ ... })
```

Update LDAP mapping for a user.

Name | Type | Description
--- | --- | ---
`username` | string | 
`ldap_dn` | string | LDAP DN for user

## Gists

### checkStar

```shell
curl -XGET https://api.github.com/gists/:id/star
```

```javascript
github.gists.checkStar({ ... })
```

Check if a gist is starred

Name | Type | Description
--- | --- | ---
`id` | string | 

### create

```shell
curl -XPOST https://api.github.com/gists
```

```javascript
github.gists.create({ ... })
```

Create a gist

Name | Type | Description
--- | --- | ---
`files` | json | Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
`public` | boolean | 
`[description]` | string | 

### createComment

```shell
curl -XPOST https://api.github.com/gists/:gist_id/comments
```

```javascript
github.gists.createComment({ ... })
```

Create a comment

Name | Type | Description
--- | --- | ---
`gist_id` | string | Id (SHA1 hash) of the gist.
`body` | string | 

### delete

```shell
curl -XDELETE https://api.github.com/gists/:id
```

```javascript
github.gists.delete({ ... })
```

Delete a gist

Name | Type | Description
--- | --- | ---
`id` | string | 

### deleteComment

```shell
curl -XDELETE https://api.github.com/gists/:gist_id/comments/:id
```

```javascript
github.gists.deleteComment({ ... })
```

Delete a comment

Name | Type | Description
--- | --- | ---
`gist_id` | string | Id (SHA1 hash) of the gist.
`id` | string | 

### edit

```shell
curl -XPATCH https://api.github.com/gists/:id
```

```javascript
github.gists.edit({ ... })
```

Edit a gist

Name | Type | Description
--- | --- | ---
`id` | string | 
`files` | json | Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content'
`[description]` | string | 
`[content]` | string | Updated file contents.
`[filename]` | string | New name for this file.

### editComment

```shell
curl -XPATCH https://api.github.com/gists/:gist_id/comments/:id
```

```javascript
github.gists.editComment({ ... })
```

Edit a comment

Name | Type | Description
--- | --- | ---
`gist_id` | string | Id (SHA1 hash) of the gist.
`id` | string | 
`body` | string | 

### fork

```shell
curl -XPOST https://api.github.com/gists/:id/forks
```

```javascript
github.gists.fork({ ... })
```

Fork a gist

Name | Type | Description
--- | --- | ---
`id` | string | 

### get

```shell
curl -XGET https://api.github.com/gists/:id
```

```javascript
github.gists.get({ ... })
```

Get a single gist

Name | Type | Description
--- | --- | ---
`id` | string | 

### getAll

```shell
curl -XGET https://api.github.com/gists
```

```javascript
github.gists.getAll({ ... })
```

List the authenticated user's gists or if called anonymously, this will return all public gists

Name | Type | Description
--- | --- | ---
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getComment

```shell
curl -XGET https://api.github.com/gists/:gist_id/comments/:id
```

```javascript
github.gists.getComment({ ... })
```

Get a single comment

Name | Type | Description
--- | --- | ---
`gist_id` | string | Id (SHA1 hash) of the gist.
`id` | string | 

### getComments

```shell
curl -XGET https://api.github.com/gists/:gist_id/comments
```

```javascript
github.gists.getComments({ ... })
```

List comments on a gist

Name | Type | Description
--- | --- | ---
`gist_id` | string | Id (SHA1 hash) of the gist.

### getCommits

```shell
curl -XGET https://api.github.com/gists/:id/commits
```

```javascript
github.gists.getCommits({ ... })
```

List gist commits

Name | Type | Description
--- | --- | ---
`id` | string | 

### getForUser

```shell
curl -XGET https://api.github.com/users/:username/gists
```

```javascript
github.gists.getForUser({ ... })
```

List a user's gists

Name | Type | Description
--- | --- | ---
`username` | string | 
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getForks

```shell
curl -XGET https://api.github.com/gists/:id/forks
```

```javascript
github.gists.getForks({ ... })
```

List gist forks

Name | Type | Description
--- | --- | ---
`id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getPublic

```shell
curl -XGET https://api.github.com/gists/public
```

```javascript
github.gists.getPublic({ ... })
```

List all public gists

Name | Type | Description
--- | --- | ---
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ

### getRevision

```shell
curl -XGET https://api.github.com/gists/:id/:sha
```

```javascript
github.gists.getRevision({ ... })
```

Get a specific revision of a gist

Name | Type | Description
--- | --- | ---
`id` | string | 
`sha` | string | 

### getStarred

```shell
curl -XGET https://api.github.com/gists/starred
```

```javascript
github.gists.getStarred({ ... })
```

List the authenticated user's starred gists

Name | Type | Description
--- | --- | ---
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ

### star

```shell
curl -XPUT https://api.github.com/gists/:id/star
```

```javascript
github.gists.star({ ... })
```

Star a gist

Name | Type | Description
--- | --- | ---
`id` | string | 

### unstar

```shell
curl -XDELETE https://api.github.com/gists/:id/star
```

```javascript
github.gists.unstar({ ... })
```

Unstar a gist

Name | Type | Description
--- | --- | ---
`id` | string | 

## Gitdata

### createBlob

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/git/blobs
```

```javascript
github.gitdata.createBlob({ ... })
```

Create a Blob

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`content` | string | 
`encoding` | string | 

### createCommit

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/git/commits
```

```javascript
github.gitdata.createCommit({ ... })
```

Create a Commit

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`message` | string | String of the commit message
`tree` | string | String of the SHA of the tree object this commit points to
`parents` | array | Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided.
`[author]` | json | 
`[committer]` | json | 

### createReference

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/git/refs
```

```javascript
github.gitdata.createReference({ ... })
```

Create a Reference

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`ref` | string | The name of the fully qualified reference (ie: refs/heads/master). If it doesn't start with 'refs' and have at least two slashes, it will be rejected. NOTE: After creating the reference, on calling (get|update|delete)Reference, drop the leading 'refs/' when providing the 'ref' param.
`sha` | string | 

### createTag

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/git/tags
```

```javascript
github.gitdata.createTag({ ... })
```

Create a Tag Object

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`tag` | string | String of the tag
`message` | string | String of the tag message
`object` | string | String of the SHA of the git object this is tagging
`type` | string | String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
`tagger` | json | JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged

### createTree

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/git/trees
```

```javascript
github.gitdata.createTree({ ... })
```

Create a Tree

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`tree` | json | Array of Hash objects (of path, mode, type and sha) specifying a tree structure
`[base_tree]` | string | String of the SHA1 of the tree you want to update with new data

### deleteReference

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/git/refs/:ref
```

```javascript
github.gitdata.deleteReference({ ... })
```

Delete a Reference

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`ref` | string | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.

### getBlob

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/blobs/:sha
```

```javascript
github.gitdata.getBlob({ ... })
```

Get a Blob

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCommit

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/commits/:sha
```

```javascript
github.gitdata.getCommit({ ... })
```

Get a Commit

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 

### getCommitSignatureVerification

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/commits/:sha
```

```javascript
github.gitdata.getCommitSignatureVerification({ ... })
```

Get a Commit Signature Verification. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 

### getReference

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/refs/:ref
```

```javascript
github.gitdata.getReference({ ... })
```

Get a Reference

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`ref` | string | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.

### getReferences

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/refs
```

```javascript
github.gitdata.getReferences({ ... })
```

Get all References

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getTag

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/tags/:sha
```

```javascript
github.gitdata.getTag({ ... })
```

Get a Tag

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 

### getTagSignatureVerification

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/tags/:sha
```

```javascript
github.gitdata.getTagSignatureVerification({ ... })
```

Get a Tag Signature Verification. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 

### getTags

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/refs/tags
```

```javascript
github.gitdata.getTags({ ... })
```

Get all tag References

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getTree

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/git/trees/:sha
```

```javascript
github.gitdata.getTree({ ... })
```

Get a Tree

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 
`[recursive]` | boolean | 

### updateReference

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/git/refs/:ref
```

```javascript
github.gitdata.updateReference({ ... })
```

Update a Reference

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`ref` | string | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.
`sha` | string | 
`[force=false]` | boolean | Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work.

## Integrations

### addRepoToInstallation

```shell
curl -XPUT https://api.github.com/installations/:installation_id/repositories/:repository_id
```

```javascript
github.integrations.addRepoToInstallation({ ... })
```

Add a single repository to an installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`repository_id` | string | 

### createInstallationToken

```shell
curl -XPOST https://api.github.com/installations/:installation_id/access_tokens
```

```javascript
github.integrations.createInstallationToken({ ... })
```

Create a new installation token. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`[user_id]` | string | The id of the user for whom the app is acting on behalf of.

### getInstallationRepositories

```shell
curl -XGET https://api.github.com/installation/repositories
```

```javascript
github.integrations.getInstallationRepositories({ ... })
```

List repositories that are accessible to the authenticated installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[user_id]` | string | The integer ID of a user, to filter results to repositories that are visible to both the installation and the given user.

### getInstallations

```shell
curl -XGET https://api.github.com/app/installations
```

```javascript
github.integrations.getInstallations({ ... })
```

List the app's installations. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### removeRepoFromInstallation

```shell
curl -XDELETE https://api.github.com/installations/:installation_id/repositories/:repository_id
```

```javascript
github.integrations.removeRepoFromInstallation({ ... })
```

Remove a single repository from an installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`repository_id` | string | 

## Issues

### addAssigneesToIssue

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/issues/:number/assignees
```

```javascript
github.issues.addAssigneesToIssue({ ... })
```

Add assignees to an issue.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`assignees` | array | Logins for the users that should be added to the issue.

### addLabels

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/issues/:number/labels
```

```javascript
github.issues.addLabels({ ... })
```

Add labels to an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`labels` | array | 

### checkAssignee

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/assignees/:assignee
```

```javascript
github.issues.checkAssignee({ ... })
```

Check assignee

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`assignee` | string | Login for the user that this issue should be assigned to.

### create

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/issues
```

```javascript
github.issues.create({ ... })
```

Create an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`title` | string | 
`[body]` | string | 
`[assignee]` | string | Login for the user that this issue should be assigned to.
`[milestone]` | number | Milestone to associate this issue with.
`[labels]` | array | Array of strings - Labels to associate with this issue.
`[assignees]` | array | Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.

### createComment

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/issues/:number/comments
```

```javascript
github.issues.createComment({ ... })
```

Create a comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`body` | string | 

### createLabel

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/labels
```

```javascript
github.issues.createLabel({ ... })
```

Create a label

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`name` | string | 
`color` | string | 6 character hex code, without a leading #.

### createMilestone

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/milestones
```

```javascript
github.issues.createMilestone({ ... })
```

Create a milestone

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`title` | string | 
`[state=open]` | string=`open`,`closed`,`all` | 
`[description]` | string | 
`[due_on]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ

### deleteComment

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/issues/comments/:id
```

```javascript
github.issues.deleteComment({ ... })
```

Delete a comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### deleteLabel

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/labels/:name
```

```javascript
github.issues.deleteLabel({ ... })
```

Delete a label

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`name` | string | 

### deleteMilestone

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/milestones/:number
```

```javascript
github.issues.deleteMilestone({ ... })
```

Delete a milestone

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### edit

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/issues/:number
```

```javascript
github.issues.edit({ ... })
```

Edit an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[title]` | string | 
`[body]` | string | 
`[assignee]` | string | Login for the user that this issue should be assigned to.
`[state=open]` | string=`open`,`closed` | open or closed
`[milestone]` | number | Milestone to associate this issue with.
`[labels]` | array | Array of strings - Labels to associate with this issue.
`[assignees]` | array | Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise.

### editComment

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/issues/comments/:id
```

```javascript
github.issues.editComment({ ... })
```

Edit a comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`body` | string | 

### get

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/:number
```

```javascript
github.issues.get({ ... })
```

Get a single issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### getAll

```shell
curl -XGET https://api.github.com/issues
```

```javascript
github.issues.getAll({ ... })
```

List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories

Name | Type | Description
--- | --- | ---
`[filter]` | string=`all`,`assigned`,`created`,`mentioned`,`subscribed` | 
`[state=open]` | string=`open`,`closed`,`all` | open, closed, or all
`[labels]` | string | String list of comma separated Label names. Example: bug,ui,@high
`[sort=created]` | string=`created`,`updated`,`comments` | 
`[direction=desc]` | string=`asc`,`desc` | 
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getAssignees

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/assignees
```

```javascript
github.issues.getAssignees({ ... })
```

List assignees

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getComment

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/comments/:id
```

```javascript
github.issues.getComment({ ... })
```

Get a single comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getComments

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/:number/comments
```

```javascript
github.issues.getComments({ ... })
```

List comments on an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCommentsForRepo

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/comments
```

```javascript
github.issues.getCommentsForRepo({ ... })
```

List comments in a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[sort=created]` | string=`created`,`updated` | 
`[direction=desc]` | string=`asc`,`desc` | 
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEvent

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/events/:id
```

```javascript
github.issues.getEvent({ ... })
```

Get a single event

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getEvents

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/:issue_number/events
```

```javascript
github.issues.getEvents({ ... })
```

List events for an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`issue_number` | number | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsForRepo

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/events
```

```javascript
github.issues.getEventsForRepo({ ... })
```

List events for a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getEventsTimeline

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/:issue_number/timeline
```

```javascript
github.issues.getEventsTimeline({ ... })
```

List events for an issue. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`issue_number` | number | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getForOrg

```shell
curl -XGET https://api.github.com/orgs/:org/issues
```

```javascript
github.issues.getForOrg({ ... })
```

List all issues for a given organization for the authenticated user

Name | Type | Description
--- | --- | ---
`org` | string | 
`[filter]` | string=`all`,`assigned`,`created`,`mentioned`,`subscribed` | 
`[state=open]` | string=`open`,`closed`,`all` | open, closed, or all
`[labels]` | string | String list of comma separated Label names. Example: bug,ui,@high
`[sort=created]` | string=`created`,`updated`,`comments` | 
`[direction=desc]` | string=`asc`,`desc` | 
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getForRepo

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues
```

```javascript
github.issues.getForRepo({ ... })
```

List issues for a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[milestone]` | string | 
`[state=open]` | string=`open`,`closed`,`all` | open, closed, or all
`[assignee]` | string | String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User.
`[creator]` | string | The user that created the issue.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.
`[labels]` | string | String list of comma separated Label names. Example: bug,ui,@high
`[sort=created]` | string=`created`,`updated`,`comments` | 
`[direction=desc]` | string=`asc`,`desc` | 
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[mentioned]` | string | String User login.

### getForUser

```shell
curl -XGET https://api.github.com/user/issues
```

```javascript
github.issues.getForUser({ ... })
```

List all issues across owned and member repositories for the authenticated user

Name | Type | Description
--- | --- | ---
`[filter]` | string=`all`,`assigned`,`created`,`mentioned`,`subscribed` | 
`[state=open]` | string=`open`,`closed`,`all` | open, closed, or all
`[labels]` | string | String list of comma separated Label names. Example: bug,ui,@high
`[sort=created]` | string=`created`,`updated`,`comments` | 
`[direction=desc]` | string=`asc`,`desc` | 
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getIssueLabels

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/:number/labels
```

```javascript
github.issues.getIssueLabels({ ... })
```

List labels on an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### getLabel

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/labels/:name
```

```javascript
github.issues.getLabel({ ... })
```

Get a single label

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`name` | string | 

### getLabels

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/labels
```

```javascript
github.issues.getLabels({ ... })
```

List all labels for this repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getMilestone

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/milestones/:number
```

```javascript
github.issues.getMilestone({ ... })
```

Get a single milestone

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### getMilestoneLabels

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/milestones/:number/labels
```

```javascript
github.issues.getMilestoneLabels({ ... })
```

Get labels for every issue in a milestone

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### getMilestones

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/milestones
```

```javascript
github.issues.getMilestones({ ... })
```

List milestones for a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[state=open]` | string=`open`,`closed`,`all` | 
`[sort=due_on]` | string=`due_on`,`completeness` | due_on, completeness, default: due_on
`[direction=asc]` | string=`asc`,`desc` | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### lock

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/issues/:number/lock
```

```javascript
github.issues.lock({ ... })
```

Users with push access can lock an issue's conversation.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### removeAllLabels

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/issues/:number/labels
```

```javascript
github.issues.removeAllLabels({ ... })
```

Remove all labels from an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### removeAssigneesFromIssue

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/issues/:number/assignees
```

```javascript
github.issues.removeAssigneesFromIssue({ ... })
```

Remove assignees from an issue.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`body` | json | 

### removeLabel

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/issues/:number/labels/:name
```

```javascript
github.issues.removeLabel({ ... })
```

Remove a label from an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`name` | string | 

### replaceAllLabels

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/issues/:number/labels
```

```javascript
github.issues.replaceAllLabels({ ... })
```

Replace all labels for an issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`labels` | array | Sending an empty array ([]) will remove all Labels from the Issue.

### unlock

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/issues/:number/lock
```

```javascript
github.issues.unlock({ ... })
```

Users with push access can unlock an issue's conversation.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### updateLabel

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/labels/:oldname
```

```javascript
github.issues.updateLabel({ ... })
```

Update a label

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`oldname` | string | The old name of the label.
`name` | string | The new name of the label.
`color` | string | 6 character hex code, without a leading #.

### updateMilestone

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/milestones/:number
```

```javascript
github.issues.updateMilestone({ ... })
```

Update a milestone

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`title` | string | 
`[state=open]` | string=`open`,`closed`,`all` | 
`[description]` | string | 
`[due_on]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ

## Migrations

### cancelImport

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/import
```

```javascript
github.migrations.cancelImport({ ... })
```

Cancel an import. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### deleteMigrationArchive

```shell
curl -XDELETE https://api.github.com/orgs/:org/migrations/:id/archive
```

```javascript
github.migrations.deleteMigrationArchive({ ... })
```

Delete a migration archive. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`id` | string | 

### getImportCommitAuthors

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/import/authors
```

```javascript
github.migrations.getImportCommitAuthors({ ... })
```

Get import commit authors. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[since]` | string | Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step.

### getImportProgress

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/import
```

```javascript
github.migrations.getImportProgress({ ... })
```

Get import progress. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getLargeImportFiles

```shell
curl -XGET https://api.github.com/:owner/:name/import/large_files
```

```javascript
github.migrations.getLargeImportFiles({ ... })
```

List files larger than 100MB found during the import. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`name` | string | 

### getMigrationArchiveLink

```shell
curl -XGET https://api.github.com/orgs/:org/migrations/:id/archive
```

```javascript
github.migrations.getMigrationArchiveLink({ ... })
```

Get the URL to a migration archive. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`id` | string | 

### getMigrationStatus

```shell
curl -XGET https://api.github.com/orgs/:org/migrations/:id
```

```javascript
github.migrations.getMigrationStatus({ ... })
```

Get the status of a migration. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`id` | string | 

### getMigrations

```shell
curl -XGET https://api.github.com/orgs/:org/migrations
```

```javascript
github.migrations.getMigrations({ ... })
```

Get a list of migrations. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### mapImportCommitAuthor

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/import/authors/:author_id
```

```javascript
github.migrations.mapImportCommitAuthor({ ... })
```

Map a commit author. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`author_id` | string | The commit author id.
`[email]` | string | The new Git author email.
`[name]` | string | The new Git author name.

### setImportLfsPreference

```shell
curl -XPATCH https://api.github.com/:owner/:name/import/lfs
```

```javascript
github.migrations.setImportLfsPreference({ ... })
```

Set import LFS preference. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`name` | string | 
`use_lfs` | string | Can be one of `opt_in` (large files will be stored using Git LFS) or `opt_out` (large files will be removed during the import).

### startImport

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/import
```

```javascript
github.migrations.startImport({ ... })
```

Start an import. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`vcs_url` | string | The URL of the originating repository.
`[vcs]` | string=`subversion`,`git`,`mercurial`,`tfvc` | The originating VCS type. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
`[vcs_username]` | string | If authentication is required, the username to provide to vcs_url.
`[vcs_password]` | string | If authentication is required, the password to provide to vcs_url.
`[tfvc_project]` | string | For a tfvc import, the name of the project that is being imported.

### startMigration

```shell
curl -XPOST https://api.github.com/orgs/:org/migrations
```

```javascript
github.migrations.startMigration({ ... })
```

Start a migration. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`repositories` | array | A list of arrays indicating which repositories should be migrated.
`[lock_repositories=false]` | boolean | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: false.
`[exclude_attachments=false]` | boolean | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: false.

### unlockRepoLockedForMigration

```shell
curl -XDELETE https://api.github.com/orgs/:org/migrations/:id/repos/:repo_name/lock
```

```javascript
github.migrations.unlockRepoLockedForMigration({ ... })
```

Unlock a repository that was locked for migration. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`id` | string | 
`repo_name` | string | 

### updateImport

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/import
```

```javascript
github.migrations.updateImport({ ... })
```

Update existing import. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

## Misc

### getCodeOfConduct

```shell
curl -XGET https://api.github.com/codes_of_conduct/:key
```

```javascript
github.misc.getCodeOfConduct({ ... })
```

Get an code of conduct. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`key` | string | Ex: contributor_covenant

### getCodesOfConduct

```shell
curl -XGET https://api.github.com/codes_of_conduct
```

```javascript
github.misc.getCodesOfConduct({ ... })
```

List all codes of conduct. (In preview period. See README.)


### getEmojis

```shell
curl -XGET https://api.github.com/emojis
```

```javascript
github.misc.getEmojis({ ... })
```

Lists all the emojis available to use on GitHub.


### getGitignoreTemplate

```shell
curl -XGET https://api.github.com/gitignore/templates/:name
```

```javascript
github.misc.getGitignoreTemplate({ ... })
```

Get a single gitignore template

Name | Type | Description
--- | --- | ---
`name` | string | The name of the .gitignore template to get e.g. 'C'

### getGitignoreTemplates

```shell
curl -XGET https://api.github.com/gitignore/templates
```

```javascript
github.misc.getGitignoreTemplates({ ... })
```

Lists available gitignore templates


### getLicense

```shell
curl -XGET https://api.github.com/licenses/:license
```

```javascript
github.misc.getLicense({ ... })
```

Get an individual license. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`license` | string | Ex: /licenses/mit

### getLicenses

```shell
curl -XGET https://api.github.com/licenses
```

```javascript
github.misc.getLicenses({ ... })
```

List all licenses. (In preview period. See README.)


### getMeta

```shell
curl -XGET https://api.github.com/meta
```

```javascript
github.misc.getMeta({ ... })
```

This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.


### getRateLimit

```shell
curl -XGET https://api.github.com/rate_limit
```

```javascript
github.misc.getRateLimit({ ... })
```

Get your current rate limit status


### getRepoCodeOfConduct

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/community/code_of_conduct
```

```javascript
github.misc.getRepoCodeOfConduct({ ... })
```

Get the contents of a repository's code of conduct. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getRepoLicense

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/license
```

```javascript
github.misc.getRepoLicense({ ... })
```

Get the contents of a repository's license. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### renderMarkdown

```shell
curl -XPOST https://api.github.com/markdown
```

```javascript
github.misc.renderMarkdown({ ... })
```

Render an arbitrary Markdown document

Name | Type | Description
--- | --- | ---
`text` | string | The Markdown text to render
`[mode=markdown]` | string=`markdown`,`gfm` | The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly.
`[context]` | string | The repository context. Only taken into account when rendering as `gfm`

### renderMarkdownRaw

```shell
curl -XPOST https://api.github.com/markdown/raw
```

```javascript
github.misc.renderMarkdownRaw({ ... })
```

Render a Markdown document in raw mode

Name | Type | Description
--- | --- | ---
`data` | string | Raw data to send as the body of the request

## Orgs

### addOrgMembership

```shell
curl -XPUT https://api.github.com/orgs/:org/memberships/:username
```

```javascript
github.orgs.addOrgMembership({ ... })
```

Add or update organization membership

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 
`role=member` | string=`admin`,`member` | The role to give the user in the organization.

### addTeamMembership

```shell
curl -XPUT https://api.github.com/teams/:id/memberships/:username
```

```javascript
github.orgs.addTeamMembership({ ... })
```

Add team membership

Name | Type | Description
--- | --- | ---
`id` | string | 
`username` | string | 
`[role=member]` | string=`member`,`maintainer` | The role that this user should have in the team.

### addTeamRepo

```shell
curl -XPUT https://api.github.com/teams/:id/repos/:org/:repo
```

```javascript
github.orgs.addTeamRepo({ ... })
```

Add team repository

Name | Type | Description
--- | --- | ---
`id` | string | 
`org` | string | 
`repo` | string | 
`[permission]` | string=`pull`,`push`,`admin` | `pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository.

### blockUser

```shell
curl -XPUT https://api.github.com/orgs/:org/blocks/:username
```

```javascript
github.orgs.blockUser({ ... })
```

Block a user. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### checkBlockedUser

```shell
curl -XGET https://api.github.com/orgs/:org/blocks/:username
```

```javascript
github.orgs.checkBlockedUser({ ... })
```

Check whether you've blocked a user. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### checkMembership

```shell
curl -XGET https://api.github.com/orgs/:org/members/:username
```

```javascript
github.orgs.checkMembership({ ... })
```

Check membership

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### checkPublicMembership

```shell
curl -XGET https://api.github.com/orgs/:org/public_members/:username
```

```javascript
github.orgs.checkPublicMembership({ ... })
```

Check public membership

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### checkTeamRepo

```shell
curl -XGET https://api.github.com/teams/:id/repos/:owner/:repo
```

```javascript
github.orgs.checkTeamRepo({ ... })
```

Check if a team manages a repository

Name | Type | Description
--- | --- | ---
`id` | string | 
`owner` | string | 
`repo` | string | 

### concealMembership

```shell
curl -XDELETE https://api.github.com/orgs/:org/public_members/:username
```

```javascript
github.orgs.concealMembership({ ... })
```

Conceal a user's membership

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### convertMemberToOutsideCollaborator

```shell
curl -XPUT https://api.github.com/orgs/:org/outside_collaborators/:username
```

```javascript
github.orgs.convertMemberToOutsideCollaborator({ ... })
```

Convert member to outside collaborator.

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### createHook

```shell
curl -XPOST https://api.github.com/orgs/:org/hooks
```

```javascript
github.orgs.createHook({ ... })
```

Create a hook

Name | Type | Description
--- | --- | ---
`org` | string | 
`name` | string | Must be passed as "web".
`config` | json | Key/value pairs to provide settings for this webhook
`[events=["push"]]` | array | Determines what events the hook is triggered for. Default: ["push"].
`[active]` | boolean | Determines whether the hook is actually triggered on pushes.

### createTeam

```shell
curl -XPOST https://api.github.com/orgs/:org/teams
```

```javascript
github.orgs.createTeam({ ... })
```

Create team

Name | Type | Description
--- | --- | ---
`org` | string | 
`name` | string | 
`[description]` | string | The description of the team.
`[maintainers]` | array | The logins of organization members to add as maintainers of the team.
`[repo_names]` | array | The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
`[privacy=secret]` | string=`secret`,`closed` | The level of privacy this team should have.
`[parent_team_id]` | string | The ID of a team to set as the parent team.

### deleteHook

```shell
curl -XDELETE https://api.github.com/orgs/:org/hooks/:id
```

```javascript
github.orgs.deleteHook({ ... })
```

Delete a hook

Name | Type | Description
--- | --- | ---
`org` | string | 
`id` | string | 

### deleteTeam

```shell
curl -XDELETE https://api.github.com/teams/:id
```

```javascript
github.orgs.deleteTeam({ ... })
```

Delete team

Name | Type | Description
--- | --- | ---
`id` | string | 

### deleteTeamRepo

```shell
curl -XDELETE https://api.github.com/teams/:id/repos/:owner/:repo
```

```javascript
github.orgs.deleteTeamRepo({ ... })
```

Remove team repository

Name | Type | Description
--- | --- | ---
`id` | string | 
`owner` | string | 
`repo` | string | 

### editHook

```shell
curl -XPATCH https://api.github.com/orgs/:org/hooks/:id
```

```javascript
github.orgs.editHook({ ... })
```

Edit a hook

Name | Type | Description
--- | --- | ---
`org` | string | 
`id` | string | 
`config` | json | Key/value pairs to provide settings for this webhook
`[events=["push"]]` | array | Determines what events the hook is triggered for. Default: ["push"].
`[active]` | boolean | Determines whether the hook is actually triggered on pushes.

### editTeam

```shell
curl -XPATCH https://api.github.com/teams/:id
```

```javascript
github.orgs.editTeam({ ... })
```

Edit team

Name | Type | Description
--- | --- | ---
`id` | string | 
`name` | string | 
`[description]` | string | The description of the team.
`[privacy=secret]` | string=`secret`,`closed` | The level of privacy this team should have.
`[parent_team_id]` | string | The ID of a team to set as the parent team.

### get

```shell
curl -XGET https://api.github.com/orgs/:org
```

```javascript
github.orgs.get({ ... })
```

Get an organization

Name | Type | Description
--- | --- | ---
`org` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getAll

```shell
curl -XGET https://api.github.com/organizations
```

```javascript
github.orgs.getAll({ ... })
```

List all organizations

Name | Type | Description
--- | --- | ---
`[since]` | string | The integer ID of the last Organization that you've seen.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getBlockedUsers

```shell
curl -XGET https://api.github.com/orgs/:org/blocks
```

```javascript
github.orgs.getBlockedUsers({ ... })
```

List blocked users. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getChildTeams

```shell
curl -XGET https://api.github.com/teams/:id/teams
```

```javascript
github.orgs.getChildTeams({ ... })
```

List child teams

Name | Type | Description
--- | --- | ---
`id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getForUser

```shell
curl -XGET https://api.github.com/users/:username/orgs
```

```javascript
github.orgs.getForUser({ ... })
```

List public organization memberships for the specified user.

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getHook

```shell
curl -XGET https://api.github.com/orgs/:org/hooks/:id
```

```javascript
github.orgs.getHook({ ... })
```

Get single hook

Name | Type | Description
--- | --- | ---
`org` | string | 
`id` | string | 

### getHooks

```shell
curl -XGET https://api.github.com/orgs/:org/hooks
```

```javascript
github.orgs.getHooks({ ... })
```

List hooks

Name | Type | Description
--- | --- | ---
`org` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getMembers

```shell
curl -XGET https://api.github.com/orgs/:org/members
```

```javascript
github.orgs.getMembers({ ... })
```

Members list

Name | Type | Description
--- | --- | ---
`org` | string | 
`[filter=all]` | string=`all`,`2fa_disabled` | Filter members returned in the list.
`[role=all]` | string=`all`,`admin`,`member` | Filter members returned by their role.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getOrgMembership

```shell
curl -XGET https://api.github.com/orgs/:org/memberships/:username
```

```javascript
github.orgs.getOrgMembership({ ... })
```

Get organization membership

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### getOutsideCollaborators

```shell
curl -XGET https://api.github.com/orgs/:org/outside_collaborators
```

```javascript
github.orgs.getOutsideCollaborators({ ... })
```

List all users who are outside collaborators of an organization.

Name | Type | Description
--- | --- | ---
`org` | string | 
`[filter=all]` | string=`all`,`2fa_disabled` | Filter the list of outside collaborators.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getPendingOrgInvites

```shell
curl -XGET https://api.github.com/orgs/:org/invitations
```

```javascript
github.orgs.getPendingOrgInvites({ ... })
```

List pending organization invites.

Name | Type | Description
--- | --- | ---
`org` | string | 

### getPendingTeamInvites

```shell
curl -XGET https://api.github.com/teams/:id/invitations
```

```javascript
github.orgs.getPendingTeamInvites({ ... })
```

List pending team invitations.

Name | Type | Description
--- | --- | ---
`id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getPublicMembers

```shell
curl -XGET https://api.github.com/orgs/:org/public_members
```

```javascript
github.orgs.getPublicMembers({ ... })
```

Public members list

Name | Type | Description
--- | --- | ---
`org` | string | 

### getTeam

```shell
curl -XGET https://api.github.com/teams/:id
```

```javascript
github.orgs.getTeam({ ... })
```

Get team

Name | Type | Description
--- | --- | ---
`id` | string | 

### getTeamMembers

```shell
curl -XGET https://api.github.com/teams/:id/members
```

```javascript
github.orgs.getTeamMembers({ ... })
```

List team members

Name | Type | Description
--- | --- | ---
`id` | string | 
`[role=all]` | string=`member`,`maintainer`,`all` | Filters members returned by their role in the team.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getTeamMembership

```shell
curl -XGET https://api.github.com/teams/:id/memberships/:username
```

```javascript
github.orgs.getTeamMembership({ ... })
```

Get team membership

Name | Type | Description
--- | --- | ---
`id` | string | 
`username` | string | 

### getTeamRepos

```shell
curl -XGET https://api.github.com/teams/:id/repos
```

```javascript
github.orgs.getTeamRepos({ ... })
```

Get team repos

Name | Type | Description
--- | --- | ---
`id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getTeams

```shell
curl -XGET https://api.github.com/orgs/:org/teams
```

```javascript
github.orgs.getTeams({ ... })
```

List teams

Name | Type | Description
--- | --- | ---
`org` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### pingHook

```shell
curl -XPOST https://api.github.com/orgs/:org/hooks/:id/pings
```

```javascript
github.orgs.pingHook({ ... })
```

Ping a hook

Name | Type | Description
--- | --- | ---
`org` | string | 
`id` | string | 

### publicizeMembership

```shell
curl -XPUT https://api.github.com/orgs/:org/public_members/:username
```

```javascript
github.orgs.publicizeMembership({ ... })
```

Publicize a user's membership

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### removeMember

```shell
curl -XDELETE https://api.github.com/orgs/:org/members/:username
```

```javascript
github.orgs.removeMember({ ... })
```

Remove a member

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### removeOrgMembership

```shell
curl -XDELETE https://api.github.com/orgs/:org/memberships/:username
```

```javascript
github.orgs.removeOrgMembership({ ... })
```

Remove organization membership

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### removeOutsideCollaborator

```shell
curl -XDELETE https://api.github.com/orgs/:org/outside_collaborators/:username
```

```javascript
github.orgs.removeOutsideCollaborator({ ... })
```

Remove outside collaborator.

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### removeTeamMembership

```shell
curl -XDELETE https://api.github.com/teams/:id/memberships/:username
```

```javascript
github.orgs.removeTeamMembership({ ... })
```

Remove team membership

Name | Type | Description
--- | --- | ---
`id` | string | 
`username` | string | 

### unblockUser

```shell
curl -XDELETE https://api.github.com/orgs/:org/blocks/:username
```

```javascript
github.orgs.unblockUser({ ... })
```

Unblock a user. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`username` | string | 

### update

```shell
curl -XPATCH https://api.github.com/orgs/:org
```

```javascript
github.orgs.update({ ... })
```

Edit an organization

Name | Type | Description
--- | --- | ---
`org` | string | 
`[billing_email]` | string | Billing email address. This address is not publicized.
`[company]` | string | The company name.
`[email]` | string | The publicly visible email address.
`[location]` | string | The location.
`[name]` | string | The shorthand name of the company.
`[description]` | string | The description of the company.
`[default_repository_permission=read]` | string=`read`,`write`,`admin`,`none` | Default permission level members have for organization repositories.
`[members_can_create_repositories=true]` | boolean | Toggles ability of non-admin organization members to create repositories.

## Projects

### createOrgProject

```shell
curl -XPOST https://api.github.com/orgs/:org/projects
```

```javascript
github.projects.createOrgProject({ ... })
```

Create an organization project. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`name` | string | 
`[body]` | string | 

### createProjectCard

```shell
curl -XPOST https://api.github.com/projects/columns/:column_id/cards
```

```javascript
github.projects.createProjectCard({ ... })
```

Create a project card. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`column_id` | string | 
`[note]` | string | The note of the card.
`[content_id]` | string | The id of the Issue or Pull Request to associate with this card.
`[content_type]` | string | The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'.

### createProjectColumn

```shell
curl -XPOST https://api.github.com/projects/:project_id/columns
```

```javascript
github.projects.createProjectColumn({ ... })
```

Create a project column. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`project_id` | string | 
`name` | string | 

### createRepoProject

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/projects
```

```javascript
github.projects.createRepoProject({ ... })
```

Create a repository project. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`name` | string | 
`[body]` | string | 

### deleteProject

```shell
curl -XDELETE https://api.github.com/projects/:id
```

```javascript
github.projects.deleteProject({ ... })
```

Delete a project. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### deleteProjectCard

```shell
curl -XDELETE https://api.github.com/projects/columns/cards/:id
```

```javascript
github.projects.deleteProjectCard({ ... })
```

Delete a project card. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### deleteProjectColumn

```shell
curl -XDELETE https://api.github.com/projects/columns/:id
```

```javascript
github.projects.deleteProjectColumn({ ... })
```

Delete a project column. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getOrgProjects

```shell
curl -XGET https://api.github.com/orgs/:org/projects
```

```javascript
github.projects.getOrgProjects({ ... })
```

List organization projects. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`org` | string | 
`[state=open]` | string=`open`,`closed`,`all` | 

### getProject

```shell
curl -XGET https://api.github.com/projects/:id
```

```javascript
github.projects.getProject({ ... })
```

Get a project. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getProjectCard

```shell
curl -XGET https://api.github.com/projects/columns/cards/:id
```

```javascript
github.projects.getProjectCard({ ... })
```

Get project card. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getProjectCards

```shell
curl -XGET https://api.github.com/projects/columns/:column_id/cards
```

```javascript
github.projects.getProjectCards({ ... })
```

List project cards. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`column_id` | string | 

### getProjectColumn

```shell
curl -XGET https://api.github.com/projects/columns/:id
```

```javascript
github.projects.getProjectColumn({ ... })
```

Get a project column. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getProjectColumns

```shell
curl -XGET https://api.github.com/projects/:project_id/columns
```

```javascript
github.projects.getProjectColumns({ ... })
```

List project columns. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`project_id` | string | 

### getRepoProjects

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/projects
```

```javascript
github.projects.getRepoProjects({ ... })
```

List repository projects. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[state=open]` | string=`open`,`closed`,`all` | 

### moveProjectCard

```shell
curl -XPOST https://api.github.com/projects/columns/cards/:id/moves
```

```javascript
github.projects.moveProjectCard({ ... })
```

Move a project card. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`position` | string | Can be one of top, bottom, or after:<card-id>, where <card-id> is the id value of a card in the same project.
`[column_id]` | string | The id value of a column in the same project.

### moveProjectColumn

```shell
curl -XPOST https://api.github.com/projects/columns/:id/moves
```

```javascript
github.projects.moveProjectColumn({ ... })
```

Move a project column. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`position` | string | Can be one of first, last, or after:<column-id>, where <column-id> is the id value of a column in the same project.

### updateProject

```shell
curl -XPATCH https://api.github.com/projects/:id
```

```javascript
github.projects.updateProject({ ... })
```

Update a project. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`name` | string | 
`[body]` | string | 
`[state=open]` | string=`open`,`closed`,`all` | 

### updateProjectCard

```shell
curl -XPATCH https://api.github.com/projects/columns/cards/:id
```

```javascript
github.projects.updateProjectCard({ ... })
```

Update a project card. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`[note]` | string | The note of the card.

### updateProjectColumn

```shell
curl -XPATCH https://api.github.com/projects/columns/:id
```

```javascript
github.projects.updateProjectColumn({ ... })
```

Update a project column. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 
`name` | string | 

## PullRequests

### checkMerged

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number/merge
```

```javascript
github.pullRequests.checkMerged({ ... })
```

Get if a pull request has been merged

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### create

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pulls
```

```javascript
github.pullRequests.create({ ... })
```

Create a pull request

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`title` | string | The title of the pull request.
`head` | string | The branch (or git ref) where your changes are implemented.
`base` | string | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
`[body]` | string | The contents of the pull request.
`[maintainer_can_modify=true]` | boolean | Indicates whether maintainers can modify the pull request.

### createComment

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pulls/:number/comments
```

```javascript
github.pullRequests.createComment({ ... })
```

Create a comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`body` | string | 
`commit_id` | string | Sha of the commit to comment on.
`path` | string | Relative path of the file to comment on.
`position` | number | Column index in the diff to comment on.

### createCommentReply

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pulls/:number/comments
```

```javascript
github.pullRequests.createCommentReply({ ... })
```

Reply to existing pull request comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`body` | string | 
`in_reply_to` | number | The comment id to reply to.

### createFromIssue

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pulls
```

```javascript
github.pullRequests.createFromIssue({ ... })
```

Create a pull request from an existing issue

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`issue` | number | The issue number in this repository to turn into a Pull Request.
`head` | string | The branch (or git ref) where your changes are implemented.
`base` | string | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.

### createReview

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pulls/:number/reviews
```

```javascript
github.pullRequests.createReview({ ... })
```

Create a pull request review.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[commit_id]` | string | Sha of the commit to comment on.
`[body]` | string | The body text of the pull request review.
`[event=PENDING]` | string=`APPROVE`,`REQUEST_CHANGES`,`COMMENT`,`PENDING` | The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state.
`[comments]` | array | An array of draft review comment objects. Draft review comments must include a `path`, `position`, and `body`.

### createReviewRequest

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pulls/:number/requested_reviewers
```

```javascript
github.pullRequests.createReviewRequest({ ... })
```

Create a review request. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[reviewers]` | array | An array of user logins that will be requested.
`[team_reviewers]` | array | An array of team slugs that will be requested.

### deleteComment

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/pulls/comments/:id
```

```javascript
github.pullRequests.deleteComment({ ... })
```

Delete a comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### deletePendingReview

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/pulls/:number/reviews/:id
```

```javascript
github.pullRequests.deletePendingReview({ ... })
```

Delete a pending pull request review.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`id` | string | 

### deleteReviewRequest

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/pulls/:number/requested_reviewers
```

```javascript
github.pullRequests.deleteReviewRequest({ ... })
```

Delete a review request. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[reviewers]` | array | An array of user logins that will be requested.
`[team_reviewers]` | array | An array of team slugs that will be requested.

### dismissReview

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/pulls/:number/reviews/:id/dismissals
```

```javascript
github.pullRequests.dismissReview({ ... })
```

Dismiss a pull request review.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`id` | string | 
`[message]` | string | The message for the pull request review dismissal.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### editComment

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/pulls/comments/:id
```

```javascript
github.pullRequests.editComment({ ... })
```

Edit a comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`body` | string | 

### get

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number
```

```javascript
github.pullRequests.get({ ... })
```

Get a single pull request

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 

### getAll

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls
```

```javascript
github.pullRequests.getAll({ ... })
```

List pull requests

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[state=open]` | string=`open`,`closed`,`all` | 
`[head]` | string | Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format.
`[base]` | string | Filter pulls by base branch name. Example: gh-pages.
`[sort=created]` | string=`created`,`updated`,`popularity`,`long-running` | Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created`
`[direction=desc]` | string=`asc`,`desc` | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getComment

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/comments/:id
```

```javascript
github.pullRequests.getComment({ ... })
```

Get a single comment

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getComments

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number/comments
```

```javascript
github.pullRequests.getComments({ ... })
```

List comments on a pull request

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCommentsForRepo

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/comments
```

```javascript
github.pullRequests.getCommentsForRepo({ ... })
```

List comments in a repository

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[sort=created]` | string=`created`,`updated` | Possible values are: `created`, `updated`, Default: `created`
`[direction=desc]` | string=`asc`,`desc` | 
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCommits

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number/commits
```

```javascript
github.pullRequests.getCommits({ ... })
```

List commits on a pull request

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getFiles

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number/files
```

```javascript
github.pullRequests.getFiles({ ... })
```

List pull requests files

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getReview

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number/reviews/:id
```

```javascript
github.pullRequests.getReview({ ... })
```

Get a single pull request review.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`id` | string | 

### getReviewComments

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number/reviews/:id/comments
```

```javascript
github.pullRequests.getReviewComments({ ... })
```

Get comments for a pull request review.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getReviewRequests

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number/requested_reviewers
```

```javascript
github.pullRequests.getReviewRequests({ ... })
```

List review requests. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getReviews

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/:number/reviews
```

```javascript
github.pullRequests.getReviews({ ... })
```

List reviews on a pull request.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### merge

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/pulls/:number/merge
```

```javascript
github.pullRequests.merge({ ... })
```

Merge a pull request (Merge Button)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[commit_title]` | string | Title for the automatic commit message. (In preview period. See README.)
`[commit_message]` | string | Extra detail to append to automatic commit message.
`[sha]` | string | SHA that pull request head must match to allow merge
`[merge_method=merge]` | string=`merge`,`squash`,`rebase` | Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.)

### submitReview

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pulls/:number/reviews/:id/events
```

```javascript
github.pullRequests.submitReview({ ... })
```

Submit a pull request review.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`id` | string | 
`[body]` | string | The body text of the pull request review.
`[event=PENDING]` | string=`APPROVE`,`REQUEST_CHANGES`,`COMMENT`,`PENDING` | The event to perform on the review upon submission, can be one of APPROVE, REQUEST_CHANGES, or COMMENT. If left blank, the review will be in the PENDING state.

### update

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/pulls/:number
```

```javascript
github.pullRequests.update({ ... })
```

Update a pull request

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[title]` | string | The title of the pull request.
`[body]` | string | The contents of the pull request.
`[state]` | string=`open`,`closed` | open or closed
`[base]` | string | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
`[maintainer_can_modify=true]` | boolean | Indicates whether maintainers can modify the pull request.

## Reactions

### createForCommitComment

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/comments/:id/reactions
```

```javascript
github.reactions.createForCommitComment({ ... })
```

Create reaction for a commit comment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`content` | string=`+1`,`-1`,`laugh`,`confused`,`heart`,`hooray` | The reaction type.

### createForIssue

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/issues/:number/reactions
```

```javascript
github.reactions.createForIssue({ ... })
```

Create reaction for an issue. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`content` | string=`+1`,`-1`,`laugh`,`confused`,`heart`,`hooray` | The reaction type.

### createForIssueComment

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/issues/comments/:id/reactions
```

```javascript
github.reactions.createForIssueComment({ ... })
```

Create reaction for an issue comment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`content` | string=`+1`,`-1`,`laugh`,`confused`,`heart`,`hooray` | The reaction type.

### createForPullRequestReviewComment

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pulls/comments/:id/reactions
```

```javascript
github.reactions.createForPullRequestReviewComment({ ... })
```

Create reaction for a pull request review comment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`content` | string=`+1`,`-1`,`laugh`,`confused`,`heart`,`hooray` | The reaction type.

### delete

```shell
curl -XDELETE https://api.github.com/reactions/:id
```

```javascript
github.reactions.delete({ ... })
```

Delete a reaction. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getForCommitComment

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/comments/:id/reactions
```

```javascript
github.reactions.getForCommitComment({ ... })
```

List reactions for a commit comment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`[content]` | string=`+1`,`-1`,`laugh`,`confused`,`heart`,`hooray` | Indicates which type of reaction to return.

### getForIssue

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/:number/reactions
```

```javascript
github.reactions.getForIssue({ ... })
```

List reactions for an issue. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`number` | number | 
`[content]` | string=`+1`,`-1`,`laugh`,`confused`,`heart`,`hooray` | Indicates which type of reaction to return.

### getForIssueComment

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/issues/comments/:id/reactions
```

```javascript
github.reactions.getForIssueComment({ ... })
```

List reactions for an issue comment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`[content]` | string=`+1`,`-1`,`laugh`,`confused`,`heart`,`hooray` | Indicates which type of reaction to return.

### getForPullRequestReviewComment

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pulls/comments/:id/reactions
```

```javascript
github.reactions.getForPullRequestReviewComment({ ... })
```

List reactions for a pull request review comment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`[content]` | string=`+1`,`-1`,`laugh`,`confused`,`heart`,`hooray` | Indicates which type of reaction to return.

## Repos

### addCollaborator

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/collaborators/:username
```

```javascript
github.repos.addCollaborator({ ... })
```

Add user as a collaborator

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`username` | string | 
`[permission=push]` | string=`pull`,`push`,`admin` | `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository.

### addDeployKey

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/keys
```

```javascript
github.repos.addDeployKey({ ... })
```

Add a new deploy key.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`title` | string | 
`key` | string | 
`[read_only]` | boolean | If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.

### addProtectedBranchAdminEnforcement

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/branches/:branch/protection/enforce_admins
```

```javascript
github.repos.addProtectedBranchAdminEnforcement({ ... })
```

Add admin enforcement of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### addProtectedBranchRequiredStatusChecksContexts

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
```

```javascript
github.repos.addProtectedBranchRequiredStatusChecksContexts({ ... })
```

Add required status checks contexts of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`contexts` | array | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).

### addProtectedBranchTeamRestrictions

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions/teams
```

```javascript
github.repos.addProtectedBranchTeamRestrictions({ ... })
```

Add team restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`teams` | array | An array of team slugs (e.g. justice-league).

### addProtectedBranchUserRestrictions

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions/users
```

```javascript
github.repos.addProtectedBranchUserRestrictions({ ... })
```

Add user restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`users` | array | An array of team slugs (e.g. justice-league).

### checkCollaborator

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/collaborators/:username
```

```javascript
github.repos.checkCollaborator({ ... })
```

Check if user is a collaborator.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`username` | string | 

### compareCommits

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/compare/:base...:head
```

```javascript
github.repos.compareCommits({ ... })
```

Compare two commits.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`base` | string | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
`head` | string | The branch (or git ref) where your changes are implemented.

### create

```shell
curl -XPOST https://api.github.com/user/repos
```

```javascript
github.repos.create({ ... })
```

Create a new repository for the authenticated user.

Name | Type | Description
--- | --- | ---
`name` | string | 
`[allow_rebase_merge=true]` | boolean | Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
`[homepage]` | string | 
`[private=false]` | boolean | True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
`[has_issues=true]` | boolean | True to enable issues for this repository, false to disable them. Default is true.
`[has_projects=true]` | boolean | True to enable projects for this repository, false to disable them. Default is true.
`[has_wiki=true]` | boolean | True to enable the wiki for this repository, false to disable it. Default is true.
`[description]` | string | 
`[auto_init=false]` | boolean | True to create an initial commit with empty README. Default is false
`[gitignore_template]` | string | Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
`[license_template]` | string | Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
`[allow_squash_merge=true]` | boolean | Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
`[allow_merge_commit=true]` | boolean | Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
`[team_id]` | number | The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.

### createCommitComment

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/commits/:sha/comments
```

```javascript
github.repos.createCommitComment({ ... })
```

Create a commit comment.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 
`body` | string | 
`[path]` | string | Relative path of the file to comment on.
`[position]` | number | Line index in the diff to comment on.

### createDeployment

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/deployments
```

```javascript
github.repos.createDeployment({ ... })
```

Create a deployment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`ref` | string | The ref to deploy. This can be a branch, tag, or sha.
`repo` | string | 
`[task=deploy]` | string | The named task to execute. e.g. deploy or deploy:migrations. Default: deploy
`[auto_merge=true]` | boolean | Optional parameter to merge the default branch into the requested ref if it is behind the default branch. Default: true
`[production_environment]` | boolean | Specifies if the given environment is a one that end-users directly interact with. Default: true when environment is `production` and false otherwise. (In preview period. See README.)
`[payload=""]` | string | Optional JSON payload with extra information about the deployment. Default: ""
`[environment=none]` | string | The name of the environment that was deployed to. e.g. staging or production. Default: none.
`[description=""]` | string | Optional short description. Default: ""
`[transient_environment=false]` | boolean | Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: false. (In preview period. See README.)
`[required_contexts]` | array | Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts.

### createDeploymentStatus

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/deployments/:id/statuses
```

```javascript
github.repos.createDeploymentStatus({ ... })
```

Create a deployment status. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`[state]` | string | The state of the status. Can be one of pending, success, error, or failure.
`[target_url=""]` | string | The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: ""
`[log_url=""]` | string | Functionally equivalent to target_url. Default: "". (In preview period. See README.)
`[description=""]` | string | A short description of the status. Default: ""
`[environment_url=""]` | string | URL for accessing the deployment environment. Default: "". (In preview period. See README.)
`[auto_inactive=true]` | boolean | When true the new `inactive` status is added to all other non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. Default: true. (In preview period. See README.)

### createFile

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/contents/:path
```

```javascript
github.repos.createFile({ ... })
```

Create a new file in the given repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`path` | string | The content path.
`message` | string | The commit message.
`content` | string | The new file content, Base64 encoded.
`[branch]` | string | The branch name. If not provided, uses the repository’s default branch (usually master).
`[committer]` | json | 
`[author]` | json | 

### createForOrg

```shell
curl -XPOST https://api.github.com/orgs/:org/repos
```

```javascript
github.repos.createForOrg({ ... })
```

Create a new repository for an organization.

Name | Type | Description
--- | --- | ---
`org` | string | 
`name` | string | 
`[description]` | string | 
`[homepage]` | string | 
`[private=false]` | boolean | True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
`[has_issues=true]` | boolean | True to enable issues for this repository, false to disable them. Default is true.
`[has_projects=true]` | boolean | True to enable projects for this repository, false to disable them. Default is true.
`[allow_rebase_merge=true]` | boolean | Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
`[team_id]` | number | The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
`[auto_init=false]` | boolean | True to create an initial commit with empty README. Default is false
`[gitignore_template]` | string | Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided.
`[license_template]` | string | Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla".
`[allow_squash_merge=true]` | boolean | Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
`[allow_merge_commit=true]` | boolean | Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
`[has_wiki=true]` | boolean | True to enable the wiki for this repository, false to disable it. Default is true.

### createHook

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/hooks
```

```javascript
github.repos.createHook({ ... })
```

Create a hook.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`name` | string | 
`config` | json | A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
`[events=["push"]]` | array | Determines what events the hook is triggered for. Default: `['push']`.
`[active]` | boolean | Determines whether the hook is actually triggered on pushes.

### createRelease

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/releases
```

```javascript
github.repos.createRelease({ ... })
```

Create a release.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`tag_name` | string | String of the tag
`[target_commitish]` | string | Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).
`[name]` | string | 
`[body]` | string | 
`[draft=false]` | boolean | true to create a draft (unpublished) release, false to create a published one. Default: false
`[prerelease=false]` | boolean | true to identify the release as a prerelease. false to identify the release as a full release. Default: false

### createStatus

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/statuses/:sha
```

```javascript
github.repos.createStatus({ ... })
```

Create a status.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 
`state` | string=`pending`,`success`,`error`,`failure` | State of the status - can be one of pending, success, error, or failure.
`[target_url]` | string | Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status.
`[description]` | string | Short description of the status.
`[context]` | string | A string label to differentiate this status from the status of other systems.

### delete

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo
```

```javascript
github.repos.delete({ ... })
```

Delete a repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### deleteAsset

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/releases/assets/:id
```

```javascript
github.repos.deleteAsset({ ... })
```

Delete a release asset.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### deleteCommitComment

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/comments/:id
```

```javascript
github.repos.deleteCommitComment({ ... })
```

Delete a commit comment.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### deleteDeployKey

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/keys/:id
```

```javascript
github.repos.deleteDeployKey({ ... })
```

Remove a deploy key.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### deleteDownload

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/downloads/:id
```

```javascript
github.repos.deleteDownload({ ... })
```

Delete a download.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### deleteFile

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/contents/:path
```

```javascript
github.repos.deleteFile({ ... })
```

Delete a file.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`path` | string | The content path.
`message` | string | The commit message.
`sha` | string | The blob SHA of the file being removed.
`[branch]` | string | The branch name. If not provided, uses the repository’s default branch (usually master).
`[committer]` | json | 
`[author]` | json | 

### deleteHook

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/hooks/:id
```

```javascript
github.repos.deleteHook({ ... })
```

Deleate a hook.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### deleteInvite

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/invitations/:invitation_id
```

```javascript
github.repos.deleteInvite({ ... })
```

Delete a repository invitation.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`invitation_id` | string | 

### deleteRelease

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/releases/:id
```

```javascript
github.repos.deleteRelease({ ... })
```

Delete a release

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### edit

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo
```

```javascript
github.repos.edit({ ... })
```

Update a repo.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`name` | string | 
`repo` | string | 
`[description]` | string | 
`[homepage]` | string | 
`[private=false]` | boolean | True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false.
`[allow_rebase_merge=true]` | boolean | Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.)
`[has_projects=true]` | boolean | True to enable projects for this repository, false to disable them. Default is true.
`[has_wiki=true]` | boolean | True to enable the wiki for this repository, false to disable it. Default is true.
`[default_branch]` | string | Updates the default branch for this repository.
`[allow_squash_merge=true]` | boolean | Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.)
`[allow_merge_commit=true]` | boolean | Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.)
`[has_issues=true]` | boolean | True to enable issues for this repository, false to disable them. Default is true.

### editAsset

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/releases/assets/:id
```

```javascript
github.repos.editAsset({ ... })
```

Edit a release asset.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`name` | string | 
`[label]` | string | An alternate short description of the asset. Used in place of the filename.

### editHook

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/hooks/:id
```

```javascript
github.repos.editHook({ ... })
```

Edit a hook.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`name` | string | 
`config` | json | A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repo. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically.
`[events=["push"]]` | array | Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`.
`[add_events]` | array | Determines a list of events to be added to the list of events that the Hook triggers for.
`[remove_events]` | array | Determines a list of events to be removed from the list of events that the Hook triggers for.
`[active]` | boolean | Determines whether the hook is actually triggered on pushes.

### editRelease

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/releases/:id
```

```javascript
github.repos.editRelease({ ... })
```

Edit a release.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`tag_name` | string | String of the tag
`[target_commitish]` | string | Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master).
`[name]` | string | 
`[body]` | string | 
`[draft=false]` | boolean | true to create a draft (unpublished) release, false to create a published one. Default: false
`[prerelease=false]` | boolean | true to identify the release as a prerelease. false to identify the release as a full release. Default: false

### fork

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/forks
```

```javascript
github.repos.fork({ ... })
```

Create a fork.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[organization]` | string | Optional parameter to specify the organization name if forking into an organization.

### get

```shell
curl -XGET https://api.github.com/repos/:owner/:repo
```

```javascript
github.repos.get({ ... })
```

Get a repo for a user.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getAll

```shell
curl -XGET https://api.github.com/user/repos
```

```javascript
github.repos.getAll({ ... })
```

List your repositories

Name | Type | Description
--- | --- | ---
`[visibility=all]` | string=`all`,`public`,`private` | Can be one of `all`, `public`, or `private`. Default: `all`.
`[affiliation=owner,collaborator,organization_member]` | string | Comma-separated list of values. Can include: `owner`, `collaborator`, `organization_member`.
`[type=all]` | string=`all`,`owner`,`public`,`private`,`member` | Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`.
`[sort=full_name]` | string=`created`,`updated`,`pushed`,`full_name` | Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
`[direction=desc]` | string=`asc`,`desc` | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getAllCommitComments

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/comments
```

```javascript
github.repos.getAllCommitComments({ ... })
```

List commit comments for a repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getArchiveLink

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/:archive_format/:ref
```

```javascript
github.repos.getArchiveLink({ ... })
```

Get archive link.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`archive_format=tarball` | string=`tarball`,`zipball` | Either tarball or zipball, Deafult: tarball.
`[ref]` | string | A valid Git reference. Default: the repository’s default branch (usually master).

### getAsset

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/releases/assets/:id
```

```javascript
github.repos.getAsset({ ... })
```

Get a single release asset.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getAssets

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/releases/:id/assets
```

```javascript
github.repos.getAssets({ ... })
```

List assets for a release.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getBranch

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch
```

```javascript
github.repos.getBranch({ ... })
```

Get branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getBranchProtection

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch/protection
```

```javascript
github.repos.getBranchProtection({ ... })
```

Get branch protection.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getBranches

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches
```

```javascript
github.repos.getBranches({ ... })
```

List branches.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[protected]` | boolean | Set to true to only return protected branches
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getById

```shell
curl -XGET https://api.github.com/repositories/:id
```

```javascript
github.repos.getById({ ... })
```

Get a single repo by id.

Name | Type | Description
--- | --- | ---
`id` | string | 

### getClones

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/traffic/clones
```

```javascript
github.repos.getClones({ ... })
```

Get the total number of clones and breakdown per day or week for the last 14 days.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCollaborators

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/collaborators
```

```javascript
github.repos.getCollaborators({ ... })
```

List collaborators

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[affiliation=all]` | string=`outside`,`all`,`direct` | Filter collaborators returned by their affiliation.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCombinedStatusForRef

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/commits/:ref/status
```

```javascript
github.repos.getCombinedStatusForRef({ ... })
```

Get the combined status for a specific ref.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`ref` | string | Ref to fetch the status for. It can be a SHA, a branch name, or a tag name.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCommit

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/commits/:sha
```

```javascript
github.repos.getCommit({ ... })
```

Get a single commit.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`sha` | string | 

### getCommitComment

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/comments/:id
```

```javascript
github.repos.getCommitComment({ ... })
```

Get a single commit comment.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getCommitComments

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/commits/:ref/comments
```

```javascript
github.repos.getCommitComments({ ... })
```

List comments for a single commit.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`ref` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCommits

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/commits
```

```javascript
github.repos.getCommits({ ... })
```

List commits on a repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[sha]` | string | Sha or branch to start listing commits from.
`[path]` | string | Only commits containing this file path will be returned.
`[author]` | string | GitHub login or email address by which to filter by commit author.
`[since]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[until]` | date | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getCommunityProfileMetrics

```shell
curl -XGET https://api.github.com/repos/:owner/:name/community/profile
```

```javascript
github.repos.getCommunityProfileMetrics({ ... })
```

Retrieve community profile metrics.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`name` | string | 

### getContent

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/contents/:path
```

```javascript
github.repos.getContent({ ... })
```

Get the contents of a file or directory in a repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`path` | string | The content path.
`[ref]` | string | The String name of the Commit/Branch/Tag. Defaults to master.

### getContributors

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/contributors
```

```javascript
github.repos.getContributors({ ... })
```

Get contributors for the specified repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[anon]` | boolean | Set to 1 or true to include anonymous contributors in results.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getDeployKey

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/keys/:id
```

```javascript
github.repos.getDeployKey({ ... })
```

Get a deploy key.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getDeployKeys

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/keys
```

```javascript
github.repos.getDeployKeys({ ... })
```

List deploy keys.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getDeployment

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/deployments/:deployment_id
```

```javascript
github.repos.getDeployment({ ... })
```

Get a single Deployment. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`deployment_id` | string | The deployment id.

### getDeploymentStatus

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/deployments/:id/statuses/:status_id
```

```javascript
github.repos.getDeploymentStatus({ ... })
```

List deployment statuses. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | The Deployment ID to list the statuses from.
`status_id` | string | The Deployment Status ID.

### getDeploymentStatuses

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/deployments/:id/statuses
```

```javascript
github.repos.getDeploymentStatuses({ ... })
```

List deployment statuses. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getDeployments

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/deployments
```

```javascript
github.repos.getDeployments({ ... })
```

List deployments.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[sha=none]` | string | The short or long sha that was recorded at creation time. Default: none.
`[ref=none]` | string | The name of the ref. This can be a branch, tag, or sha. Default: none.
`[task=none]` | string | The name of the task for the deployment. e.g. deploy or deploy:migrations. Default: none.
`[environment=none]` | string | The name of the environment that was deployed to. e.g. staging or production. Default: none.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getDownload

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/downloads/:id
```

```javascript
github.repos.getDownload({ ... })
```

Get a single download.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getDownloads

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/downloads
```

```javascript
github.repos.getDownloads({ ... })
```

List downloads for a repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getForOrg

```shell
curl -XGET https://api.github.com/orgs/:org/repos
```

```javascript
github.repos.getForOrg({ ... })
```

List repositories for the specified org.

Name | Type | Description
--- | --- | ---
`org` | string | 
`[type=all]` | string=`all`,`public`,`private`,`forks`,`sources`,`member` | Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getForUser

```shell
curl -XGET https://api.github.com/users/:username/repos
```

```javascript
github.repos.getForUser({ ... })
```

List public repositories for the specified user.

Name | Type | Description
--- | --- | ---
`username` | string | 
`[type=owner]` | string=`all`,`owner`,`member` | Possible values: `all`, `owner`, `member`. Default: `owner`.
`[sort=full_name]` | string=`created`,`updated`,`pushed`,`full_name` | Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`.
`[direction=desc]` | string=`asc`,`desc` | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getForks

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/forks
```

```javascript
github.repos.getForks({ ... })
```

List forks.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[sort=newest]` | string=`newest`,`oldest`,`stargazers` | Possible values: `newest`, `oldest`, `stargazers`, default: `newest`.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getHook

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/hooks/:id
```

```javascript
github.repos.getHook({ ... })
```

Get single hook.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getHooks

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/hooks
```

```javascript
github.repos.getHooks({ ... })
```

List hooks.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getInvites

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/invitations
```

```javascript
github.repos.getInvites({ ... })
```

List invitations for a repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getLanguages

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/languages
```

```javascript
github.repos.getLanguages({ ... })
```

Get languages for the specified repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getLatestPagesBuild

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pages/builds/latest
```

```javascript
github.repos.getLatestPagesBuild({ ... })
```

Get latest Pages build. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getLatestRelease

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/releases/latest
```

```javascript
github.repos.getLatestRelease({ ... })
```

Get the latest release.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getPages

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pages
```

```javascript
github.repos.getPages({ ... })
```

Get information about a Pages site. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getPagesBuild

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pages/builds/:id
```

```javascript
github.repos.getPagesBuild({ ... })
```

Get a specific Pages build. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getPagesBuilds

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/pages/builds
```

```javascript
github.repos.getPagesBuilds({ ... })
```

List Pages builds. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getPaths

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/traffic/popular/paths
```

```javascript
github.repos.getPaths({ ... })
```

Get the top 10 popular contents over the last 14 days.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getProtectedBranchAdminEnforcement

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch/protection/enforce_admins
```

```javascript
github.repos.getProtectedBranchAdminEnforcement({ ... })
```

Get admin enforcement of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getProtectedBranchPullRequestReviewEnforcement

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
```

```javascript
github.repos.getProtectedBranchPullRequestReviewEnforcement({ ... })
```

Get pull request review enforcement of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getProtectedBranchRequiredStatusChecks

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_status_checks
```

```javascript
github.repos.getProtectedBranchRequiredStatusChecks({ ... })
```

Get required status checks of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getProtectedBranchRequiredStatusChecksContexts

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
```

```javascript
github.repos.getProtectedBranchRequiredStatusChecksContexts({ ... })
```

List required status checks contexts of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getProtectedBranchRestrictions

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions
```

```javascript
github.repos.getProtectedBranchRestrictions({ ... })
```

Get restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getProtectedBranchTeamRestrictions

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions/teams
```

```javascript
github.repos.getProtectedBranchTeamRestrictions({ ... })
```

List team restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getProtectedBranchUserRestrictions

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions/users
```

```javascript
github.repos.getProtectedBranchUserRestrictions({ ... })
```

List user restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getPublic

```shell
curl -XGET https://api.github.com/repositories
```

```javascript
github.repos.getPublic({ ... })
```

List all public repositories

Name | Type | Description
--- | --- | ---
`[since]` | string | The integer ID of the last Repository that you've seen.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getReadme

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/readme
```

```javascript
github.repos.getReadme({ ... })
```

Get the README for the given repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[ref]` | string | The name of the commit/branch/tag. Default: the repository’s default branch (usually master)

### getReferrers

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/traffic/popular/referrers
```

```javascript
github.repos.getReferrers({ ... })
```

Get the top 10 referrers over the last 14 days.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getRelease

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/releases/:id
```

```javascript
github.repos.getRelease({ ... })
```

Get a single release.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### getReleaseByTag

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/releases/tags/:tag
```

```javascript
github.repos.getReleaseByTag({ ... })
```

Get a release by tag name.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`tag` | string | String of the tag

### getReleases

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/releases
```

```javascript
github.repos.getReleases({ ... })
```

List releases for a repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getShaOfCommitRef

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/commits/:ref
```

```javascript
github.repos.getShaOfCommitRef({ ... })
```

Get the SHA-1 of a commit reference.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`ref` | string | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected.

### getStatsCodeFrequency

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/stats/code_frequency
```

```javascript
github.repos.getStatsCodeFrequency({ ... })
```

Get the number of additions and deletions per week.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getStatsCommitActivity

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/stats/commit_activity
```

```javascript
github.repos.getStatsCommitActivity({ ... })
```

Get the last year of commit activity data.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getStatsContributors

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/stats/contributors
```

```javascript
github.repos.getStatsContributors({ ... })
```

Get contributors list with additions, deletions, and commit counts.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getStatsParticipation

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/stats/participation
```

```javascript
github.repos.getStatsParticipation({ ... })
```

Get the weekly commit count for the repository owner and everyone else.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getStatsPunchCard

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/stats/punch_card
```

```javascript
github.repos.getStatsPunchCard({ ... })
```

Get the number of commits per hour in each day.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### getStatuses

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/commits/:ref/statuses
```

```javascript
github.repos.getStatuses({ ... })
```

List statuses for a specfic ref.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`ref` | string | Ref to list the statuses from. It can be a SHA, a branch name, or a tag name.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getTags

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/tags
```

```javascript
github.repos.getTags({ ... })
```

Get tags for the specified repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getTeams

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/teams
```

```javascript
github.repos.getTeams({ ... })
```

Get teams for the specified repository.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getTopics

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/topics
```

```javascript
github.repos.getTopics({ ... })
```

List all topics for a repository. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getViews

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/traffic/views
```

```javascript
github.repos.getViews({ ... })
```

Get the total number of views and breakdown per day or week for the last 14 days.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### merge

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/merges
```

```javascript
github.repos.merge({ ... })
```

Perform a merge.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`base` | string | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repo that requests a merge to a base of another repo.
`head` | string | The branch (or git ref) where your changes are implemented.
`[commit_message]` | string | Commit message to use for the merge commit. If omitted, a default message will be used.

### pingHook

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/hooks/:id/pings
```

```javascript
github.repos.pingHook({ ... })
```

Ping a hook.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### removeBranchProtection

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/branches/:branch/protection
```

```javascript
github.repos.removeBranchProtection({ ... })
```

Remove branch protection.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### removeCollaborator

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/collaborators/:username
```

```javascript
github.repos.removeCollaborator({ ... })
```

Remove user as a collaborator.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`username` | string | 

### removeProtectedBranchAdminEnforcement

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/branches/:branch/protection/enforce_admins
```

```javascript
github.repos.removeProtectedBranchAdminEnforcement({ ... })
```

Remove admin enforcement of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### removeProtectedBranchPullRequestReviewEnforcement

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
```

```javascript
github.repos.removeProtectedBranchPullRequestReviewEnforcement({ ... })
```

Remove pull request review enforcement of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 

### removeProtectedBranchRequiredStatusChecks

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_status_checks
```

```javascript
github.repos.removeProtectedBranchRequiredStatusChecks({ ... })
```

Remove required status checks of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 

### removeProtectedBranchRequiredStatusChecksContexts

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
```

```javascript
github.repos.removeProtectedBranchRequiredStatusChecksContexts({ ... })
```

Remove required status checks contexts of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`contexts` | array | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).

### removeProtectedBranchRestrictions

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions
```

```javascript
github.repos.removeProtectedBranchRestrictions({ ... })
```

Remove restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 

### removeProtectedBranchTeamRestrictions

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions/teams
```

```javascript
github.repos.removeProtectedBranchTeamRestrictions({ ... })
```

Remove team restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`teams` | array | An array of team slugs (e.g. justice-league).

### removeProtectedBranchUserRestrictions

```shell
curl -XDELETE https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions/users
```

```javascript
github.repos.removeProtectedBranchUserRestrictions({ ... })
```

Remove user restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`users` | array | An array of team slugs (e.g. justice-league).

### replaceProtectedBranchRequiredStatusChecksContexts

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
```

```javascript
github.repos.replaceProtectedBranchRequiredStatusChecksContexts({ ... })
```

Replace required status checks contexts of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`contexts` | array | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins).

### replaceProtectedBranchTeamRestrictions

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions/teams
```

```javascript
github.repos.replaceProtectedBranchTeamRestrictions({ ... })
```

Replace team restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`teams` | array | An array of team slugs (e.g. justice-league).

### replaceProtectedBranchUserRestrictions

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/branches/:branch/protection/restrictions/users
```

```javascript
github.repos.replaceProtectedBranchUserRestrictions({ ... })
```

Replace user restrictions of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`users` | array | An array of team slugs (e.g. justice-league).

### replaceTopics

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/topics
```

```javascript
github.repos.replaceTopics({ ... })
```

Replace all topics for a repository. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`names` | array | An array of topics to add to the repository. Pass one or more topics to replace the set of existing topics. Send an empty array ([]) to clear all topics from the repository.

### requestPageBuild

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/pages/builds
```

```javascript
github.repos.requestPageBuild({ ... })
```

Request a page build. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 

### reviewUserPermissionLevel

```shell
curl -XGET https://api.github.com/repos/:owner/:repo/collaborators/:username/permission
```

```javascript
github.repos.reviewUserPermissionLevel({ ... })
```

Review a user's permission level.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`username` | string | 

### testHook

```shell
curl -XPOST https://api.github.com/repos/:owner/:repo/hooks/:id/tests
```

```javascript
github.repos.testHook({ ... })
```

Test a [push] hook.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 

### updateBranchProtection

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/branches/:branch/protection
```

```javascript
github.repos.updateBranchProtection({ ... })
```

Update branch protection.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`required_status_checks` | json | JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. This object can have the value of `null` for disabled.
`required_pull_request_reviews` | json | JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators.
`restrictions` | json | JSON object that contains the following keys: `users` - The list of user logins with push access, `teams` - The list of team slugs with push access. This object can have the value of `null` for disabled.
`enforce_admins` | boolean | Enforces required status checks for repository administrators.
`[dismissal_restrictions]` | json | JSON object that contains the following keys: `users` - The list of user logins with dismissal access, `teams` - The list of team slugs with dismissal access. This object can have the value of `null` for disabled.
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### updateCommitComment

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/comments/:id
```

```javascript
github.repos.updateCommitComment({ ... })
```

Update a commit comment.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`id` | string | 
`body` | string | 

### updateFile

```shell
curl -XPUT https://api.github.com/repos/:owner/:repo/contents/:path
```

```javascript
github.repos.updateFile({ ... })
```

Update a file.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`path` | string | The content path.
`message` | string | The commit message.
`content` | string | The updated file content, Base64 encoded.
`sha` | string | The blob SHA of the file being replaced.
`[branch]` | string | The branch name. If not provided, uses the repository’s default branch (usually master).
`[committer]` | json | 
`[author]` | json | 

### updateInvite

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/invitations/:invitation_id
```

```javascript
github.repos.updateInvite({ ... })
```

Update a repository invitation.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`invitation_id` | string | 
`[permissions]` | string=`read`,`write`,`admin` | The permissions that the associated user will have on the repository.

### updateProtectedBranchPullRequestReviewEnforcement

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
```

```javascript
github.repos.updateProtectedBranchPullRequestReviewEnforcement({ ... })
```

Update pull request review enforcement of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[dismissal_restrictions]` | json | JSON object that contains the following keys: `users` - The list of user logins with dismissal access, `teams` - The list of team slugs with dismissal access. This object can have the value of `null` for disabled.
`[dismiss_stale_reviews]` | boolean | Dismiss approved reviews automatically when a new commit is pushed.
`[require_code_owner_reviews]` | boolean | Blocks merge until code owners have reviewed.

### updateProtectedBranchRequiredStatusChecks

```shell
curl -XPATCH https://api.github.com/repos/:owner/:repo/branches/:branch/protection/required_status_checks
```

```javascript
github.repos.updateProtectedBranchRequiredStatusChecks({ ... })
```

Update required status checks of protected branch.

Name | Type | Description
--- | --- | ---
`owner` | string | 
`repo` | string | 
`branch` | string | 
`[strict]` | boolean | Require branches to be up to date before merging.
`[contexts]` | array | The list of status checks to require in order to merge into this branch.

### uploadAsset

```shell
curl -XPOST https://api.github.com/:url
```

```javascript
github.repos.uploadAsset({ ... })
```

Upload a release asset.

Name | Type | Description
--- | --- | ---
`url` | string | This endpoint makes use of a Hypermedia relation (https://developer.github.com/v3/#hypermedia) to determine which URL to access. This endpoint is provided by a URI template in the release's API response (https://developer.github.com/v3/repos/releases/#get-a-single-release). You need to use an HTTP client which supports SNI (https://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
`file` | object | A file read stream, a String or a Buffer.
`contentType` | string | The content type of the asset. This should be set in the Header. Example: 'application/zip'. For a list of acceptable types, refer this list of media types (https://www.iana.org/assignments/media-types/media-types.xhtml)
`contentLength` | number | File size in bytes.
`name` | string | The file name of the asset. This should be set in a URI query parameter.
`[label]` | string | An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter.

## Search

### code

```shell
curl -XGET https://api.github.com/search/code
```

```javascript
github.search.code({ ... })
```

Search code.

Name | Type | Description
--- | --- | ---
`q` | string | Search Term
`[sort]` | string=`indexed` | The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match.
`[order=desc]` | string=`asc`,`desc` | asc or desc
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### commits

```shell
curl -XGET https://api.github.com/search/commits
```

```javascript
github.search.commits({ ... })
```

Search commits. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`q` | string | Search Term
`[sort]` | string=`author-date`,`committer-date` | The sort field. Can be author-date or committer-date. Default: best match.
`[order=desc]` | string=`asc`,`desc` | asc or desc
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### email

```shell
curl -XGET https://api.github.com/legacy/user/email/:email
```

```javascript
github.search.email({ ... })
```

Search against public email addresses.

Name | Type | Description
--- | --- | ---
`email` | string | The email address

### issues

```shell
curl -XGET https://api.github.com/search/issues
```

```javascript
github.search.issues({ ... })
```

Search issues.

Name | Type | Description
--- | --- | ---
`q` | string | Search Term
`[sort]` | string=`comments`,`created`,`updated` | The sort field. Can be comments, created, or updated. Default: results are sorted by best match.
`[order=desc]` | string=`asc`,`desc` | asc or desc
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### repos

```shell
curl -XGET https://api.github.com/search/repositories
```

```javascript
github.search.repos({ ... })
```

Search repositories.

Name | Type | Description
--- | --- | ---
`q` | string | Search Term
`[sort]` | string=`stars`,`forks`,`updated` | stars, forks, or updated
`[order=desc]` | string=`asc`,`desc` | asc or desc
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### users

```shell
curl -XGET https://api.github.com/search/users
```

```javascript
github.search.users({ ... })
```

Search users.

Name | Type | Description
--- | --- | ---
`q` | string | Search Term
`[sort]` | string=`followers`,`repositories`,`joined` | The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match.
`[order=desc]` | string=`asc`,`desc` | asc or desc
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

## Users

### acceptRepoInvite

```shell
curl -XPATCH https://api.github.com/user/repository_invitations/:invitation_id
```

```javascript
github.users.acceptRepoInvite({ ... })
```

Accept a repository invitation.

Name | Type | Description
--- | --- | ---
`invitation_id` | string | 

### addEmails

```shell
curl -XPOST https://api.github.com/user/emails
```

```javascript
github.users.addEmails({ ... })
```

Add email address(es).

Name | Type | Description
--- | --- | ---
`emails` | array | You can post a single email address or an array of addresses.

### addRepoToInstallation

```shell
curl -XPUT https://api.github.com/user/installations/:installation_id/repositories/:repository_id
```

```javascript
github.users.addRepoToInstallation({ ... })
```

Add a single repository to an installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`repository_id` | string | 

### blockUser

```shell
curl -XPUT https://api.github.com/user/blocks/:username
```

```javascript
github.users.blockUser({ ... })
```

Block a user. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`username` | string | 

### checkBlockedUser

```shell
curl -XGET https://api.github.com/user/blocks/:username
```

```javascript
github.users.checkBlockedUser({ ... })
```

Check whether you've blocked a user. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`username` | string | 

### checkFollowing

```shell
curl -XGET https://api.github.com/user/following/:username
```

```javascript
github.users.checkFollowing({ ... })
```

Check if you are following a user

Name | Type | Description
--- | --- | ---
`username` | string | 

### checkIfOneFollowersOther

```shell
curl -XGET https://api.github.com/users/:username/following/:target_user
```

```javascript
github.users.checkIfOneFollowersOther({ ... })
```

Check if one user follows another

Name | Type | Description
--- | --- | ---
`username` | string | 
`target_user` | string | 

### createGpgKey

```shell
curl -XPOST https://api.github.com/user/gpg_keys
```

```javascript
github.users.createGpgKey({ ... })
```

Create a GPG key. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`armored_public_key` | string | GPG key contents

### createKey

```shell
curl -XPOST https://api.github.com/user/keys
```

```javascript
github.users.createKey({ ... })
```

Create a public key

Name | Type | Description
--- | --- | ---
`title` | string | 
`key` | string | 

### declineRepoInvite

```shell
curl -XDELETE https://api.github.com/user/repository_invitations/:invitation_id
```

```javascript
github.users.declineRepoInvite({ ... })
```

Decline a repository invitation.

Name | Type | Description
--- | --- | ---
`invitation_id` | string | 

### deleteEmails

```shell
curl -XDELETE https://api.github.com/user/emails
```

```javascript
github.users.deleteEmails({ ... })
```

Delete email address(es).

Name | Type | Description
--- | --- | ---
`emails` | array | You can post a single email address or an array of addresses.

### deleteGpgKey

```shell
curl -XDELETE https://api.github.com/user/gpg_keys/:id
```

```javascript
github.users.deleteGpgKey({ ... })
```

Delete a GPG key. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### deleteKey

```shell
curl -XDELETE https://api.github.com/user/keys/:id
```

```javascript
github.users.deleteKey({ ... })
```

Delete a public key

Name | Type | Description
--- | --- | ---
`id` | string | 

### demote

```shell
curl -XDELETE https://api.github.com/users/:username/site_admin
```

```javascript
github.users.demote({ ... })
```

Demote a site administrator to an ordinary user

Name | Type | Description
--- | --- | ---
`username` | string | 

### editOrgMembership

```shell
curl -XPATCH https://api.github.com/user/memberships/orgs/:org
```

```javascript
github.users.editOrgMembership({ ... })
```

Edit your organization membership.

Name | Type | Description
--- | --- | ---
`org` | string | 
`state` | string=`active` | The state that the membership should be in. Only "active" will be accepted.

### followUser

```shell
curl -XPUT https://api.github.com/user/following/:username
```

```javascript
github.users.followUser({ ... })
```

Follow a user

Name | Type | Description
--- | --- | ---
`username` | string | 

### get

```shell
curl -XGET https://api.github.com/user
```

```javascript
github.users.get({ ... })
```

Get the authenticated user


### getAll

```shell
curl -XGET https://api.github.com/users
```

```javascript
github.users.getAll({ ... })
```

Get all users

Name | Type | Description
--- | --- | ---
`[since]` | number | The integer ID of the last User that you’ve seen.

### getBlockedUsers

```shell
curl -XGET https://api.github.com/user/blocks
```

```javascript
github.users.getBlockedUsers({ ... })
```

List blocked users. (In preview period. See README.)


### getById

```shell
curl -XGET https://api.github.com/user/:id
```

```javascript
github.users.getById({ ... })
```

Get a single user by GitHub ID

Name | Type | Description
--- | --- | ---
`id` | string | 

### getEmails

```shell
curl -XGET https://api.github.com/user/emails
```

```javascript
github.users.getEmails({ ... })
```

List email addresses for a user.

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getFollowers

```shell
curl -XGET https://api.github.com/user/followers
```

```javascript
github.users.getFollowers({ ... })
```

List the authenticated user's followers

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getFollowersForUser

```shell
curl -XGET https://api.github.com/users/:username/followers
```

```javascript
github.users.getFollowersForUser({ ... })
```

List a user's followers

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getFollowing

```shell
curl -XGET https://api.github.com/user/following
```

```javascript
github.users.getFollowing({ ... })
```

List who the authenticated user is following

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getFollowingForUser

```shell
curl -XGET https://api.github.com/users/:username/following
```

```javascript
github.users.getFollowingForUser({ ... })
```

List who a user is following

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getForUser

```shell
curl -XGET https://api.github.com/users/:username
```

```javascript
github.users.getForUser({ ... })
```

Get a single user

Name | Type | Description
--- | --- | ---
`username` | string | 

### getGpgKey

```shell
curl -XGET https://api.github.com/user/gpg_keys/:id
```

```javascript
github.users.getGpgKey({ ... })
```

Get a single GPG key. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`id` | string | 

### getGpgKeys

```shell
curl -XGET https://api.github.com/user/gpg_keys
```

```javascript
github.users.getGpgKeys({ ... })
```

List your GPG keys. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getGpgKeysForUser

```shell
curl -XGET https://api.github.com/users/:username/gpg_keys
```

```javascript
github.users.getGpgKeysForUser({ ... })
```

Lists the GPG keys for a user. This information is accessible by anyone. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getInstallationRepos

```shell
curl -XGET https://api.github.com/user/installations/:installation_id/repositories
```

```javascript
github.users.getInstallationRepos({ ... })
```

List repositories accessible to the user for an installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getInstallations

```shell
curl -XGET https://api.github.com/user/installations
```

```javascript
github.users.getInstallations({ ... })
```

List installations. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getKey

```shell
curl -XGET https://api.github.com/user/keys/:id
```

```javascript
github.users.getKey({ ... })
```

Get a single public key

Name | Type | Description
--- | --- | ---
`id` | string | 

### getKeys

```shell
curl -XGET https://api.github.com/user/keys
```

```javascript
github.users.getKeys({ ... })
```

List your public keys

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getKeysForUser

```shell
curl -XGET https://api.github.com/users/:username/keys
```

```javascript
github.users.getKeysForUser({ ... })
```

List public keys for a user

Name | Type | Description
--- | --- | ---
`username` | string | 
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getMarketplacePurchases

```shell
curl -XGET https://api.github.com/user/marketplace_purchases
```

```javascript
github.users.getMarketplacePurchases({ ... })
```

Get a user's Marketplace purchases. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getMarketplaceStubbedPurchases

```shell
curl -XGET https://api.github.com/user/marketplace_purchases/stubbed
```

```javascript
github.users.getMarketplaceStubbedPurchases({ ... })
```

Get a user's stubbed Marketplace purchases. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getOrgMembership

```shell
curl -XGET https://api.github.com/user/memberships/orgs/:org
```

```javascript
github.users.getOrgMembership({ ... })
```

Get your organization membership

Name | Type | Description
--- | --- | ---
`org` | string | 

### getOrgMemberships

```shell
curl -XGET https://api.github.com/user/memberships/orgs
```

```javascript
github.users.getOrgMemberships({ ... })
```

List your organization memberships

Name | Type | Description
--- | --- | ---
`[state]` | string=`active`,`pending` | Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned.

### getOrgs

```shell
curl -XGET https://api.github.com/user/orgs
```

```javascript
github.users.getOrgs({ ... })
```

List organizations for the authenticated user.

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getPublicEmails

```shell
curl -XGET https://api.github.com/user/public_emails
```

```javascript
github.users.getPublicEmails({ ... })
```

List public email addresses for a user.

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### getRepoInvites

```shell
curl -XGET https://api.github.com/user/repository_invitations
```

```javascript
github.users.getRepoInvites({ ... })
```

List a user's repository invitations.


### getTeams

```shell
curl -XGET https://api.github.com/user/teams
```

```javascript
github.users.getTeams({ ... })
```

Get your teams.

Name | Type | Description
--- | --- | ---
`[page]` | number | Page number of the results to fetch.
`[per_page=30]` | number | A custom page size up to 100. Default is 30.

### promote

```shell
curl -XPUT https://api.github.com/users/:username/site_admin
```

```javascript
github.users.promote({ ... })
```

Promote an ordinary user to a site administrator

Name | Type | Description
--- | --- | ---
`username` | string | 

### removeRepoFromInstallation

```shell
curl -XDELETE https://api.github.com/user/installations/:installation_id/repositories/:repository_id
```

```javascript
github.users.removeRepoFromInstallation({ ... })
```

Remove a single repository from an installation. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`installation_id` | string | 
`repository_id` | string | 

### suspend

```shell
curl -XPUT https://api.github.com/users/:username/suspended
```

```javascript
github.users.suspend({ ... })
```

Suspend a user

Name | Type | Description
--- | --- | ---
`username` | string | 

### togglePrimaryEmailVisibility

```shell
curl -XPATCH https://api.github.com/user/email/visibility
```

```javascript
github.users.togglePrimaryEmailVisibility({ ... })
```

Toggle primary email visibility.


### unblockUser

```shell
curl -XDELETE https://api.github.com/user/blocks/:username
```

```javascript
github.users.unblockUser({ ... })
```

Unblock a user. (In preview period. See README.)

Name | Type | Description
--- | --- | ---
`username` | string | 

### unfollowUser

```shell
curl -XDELETE https://api.github.com/user/following/:username
```

```javascript
github.users.unfollowUser({ ... })
```

Unfollow a user

Name | Type | Description
--- | --- | ---
`username` | string | 

### unsuspend

```shell
curl -XDELETE https://api.github.com/users/:username/suspended
```

```javascript
github.users.unsuspend({ ... })
```

Unsuspend a user

Name | Type | Description
--- | --- | ---
`username` | string | 

### update

```shell
curl -XPATCH https://api.github.com/user
```

```javascript
github.users.update({ ... })
```

Update the authenticated user

Name | Type | Description
--- | --- | ---
`[name]` | string | The new name of the user
`[email]` | string | Publicly visible email address.
`[blog]` | string | The new blog URL of the user.
`[company]` | string | The new company of the user.
`[location]` | string | The new location of the user.
`[hireable]` | boolean | The new hiring availability of the user.
`[bio]` | string | The new short biography of the user.
