# Git 1

---

## Git

Git is source code management & used mostly by developers to manage their projects and collaborate with others.

### Installation

```sh
# on ubuntu
sudo apt-get install git
```
if have problem / not detect git
```sh
sudo add-apt-repository ppa:git-core/ppa
```

on windows go to [here](https://git-scm.com/download/win)

## first time

we should `config` first with our name and email. This for as information on git about who you are.

```sh
$ git config --global user.name "Your Full Name"
$ git config --global user.email "yourname@example.com"
```

## GitHub

[GitHub](https://github.com) is the most popular platform to publish and collaborate on Git repositories.

The followings are getting started step to use GitHub.

1.  Register for a new user account
2.  Create repository on GitHub with name `my-profile-web`
3. Create new repository on our laptop in terminal / cmd with this command
```sh
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/yourusername/my-profile-web.git
git push-u origin master
```

or already existing repo in laptop

```sh
$ git remote add origin git@github.com:yourusername/my-profile-web.git
$ git push -u origin master
```

When we want to push any changes later on, just use push right away.

```sh
$ git push
```

To get updates, pull it.

```sh
$ git pull
```

---

## VS Code Source Control extension
you can do git command by using Source Control.
to do that.
* click `Source Control` icon. it will show you a list files are currently changed.
* give a message on `message box`.
* press checklist. all selected files changed is already commit to push (save to git server).
![](./assets/vs-code-version-control.png)
* click `...` button then click `push` item, to send commit files to git server.
![](./assets/vs-code-push.png)