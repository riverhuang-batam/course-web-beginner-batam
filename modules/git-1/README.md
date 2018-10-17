# Git 1

---

## Git

Git is source code management and used mostly by developers to manage their projects and collaborate with others.

### Installation

```sh
# on ubuntu
sudo apt install git tig
# on mac
brew install git tig
```

## Commands

Some basic Git commands are

`config`, `init`, `clone`, `add`, `commit`, `push`, `pull`

Firstly after we installed Git in our computer, we should `config` it first with our name and email.

```sh
$ git config --global user.name "Your Full Name"
$ git config --global user.email "yourname@gmail.com"
```

We can initialize a new repo in an existing folder.

```sh
git init
```

We would like to create a new file, then add it into our repo.

```sh
$ ls
README.md
index.html

$ git add README.md index.html
```

Then commit them with a message

```sh
$ git commit -m "Create README and HTML page"
```

---

## GitHub

[GitHub](https://github.com) is the most popular platform to publish and collaborate on Git repositories.

The followings are getting started step to use GitHub.

1.  Register for a new user account
2.  Create repository on GitHub with name `my-portfolio`
3. Create new repository on our laptop in terminal / cmd with this command
```sh
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/yourusername/my-portfolio.git
git push-u origin master
```

or already existing repo in laptop

```sh
$ git remote add origin git@github.com:yourusername/my-portfolio.git
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