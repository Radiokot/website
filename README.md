# Oleg's website
This is [my website](https://radiokot.com.ua) built with Jekyll. It came to replace the [pure one](https://github.com/Radiokot/website-pure), all the styles and layouts are left intact.

## Notes for the future me
- Large files, like books, must be manually placed under the "files" directory on the server
- Install the [recommended VS Code extensions](https://code.visualstudio.com/docs/editor/extension-marketplace#_recommended-extensions)
- To allow CI user SSH login, set the password with `passwd` and don't forget to set the shell in the `/etc/passwd` file instead of `/usr/sbin/nologin`
- If encountered `rsync - protocol version mismatch -- is your shell clean`, see the previous note

### CI variables, defined in GitHub env secrets
|Name|Meaning|
|-|-|
|`HOSTNAME`|Server hostname for SSH connection|
|`DEPLOYMENT_PATH`|Absolute path on the server for the contents to be rsynced|
|`WEB_USER_NAME`|User on the server with access to `DEPLOYMENT_PATH`|
|`WEB_USER_KEY`|The corresponding user SSH key – PKCS#8 encoded, in PEM text format (`-----BEGIN RSA PRIVATE KEY-----`)|


<img src="assets/img/og-image.jpg" width="400" />
