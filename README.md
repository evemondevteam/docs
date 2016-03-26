[![Documentation Status](https://readthedocs.org/projects/evemon/badge/?version=stable)](http://evemon.readthedocs.org/en/stable/?badge=stable)
[![Documentation Status](https://readthedocs.org/projects/evemon/badge/?version=latest)](http://evemon.readthedocs.org/en/stable/?badge=latest)

# EVEMon's Documentation #

This project provides the source for [EVEMon's Documentation](http://evemon.readthedocs.org).

***You are highly encouraged to contribute to this project.***

However, before submitting a pull request, please read the **CONTRIBUTING** guidelines, which include information on how to build the docs locally, as well as style guidance.

A list of people that have contributed to this project can be found [here](http://evemon.readthedocs.org/en/stable/about/contributors.html).

# Contributing #

The docs are built using [Sphinx](http://sphinx-doc.org), [reStructuredText](http://sphinx-doc.org/rest.html) and hosted by [ReadTheDocs](http://evemon.readthedocs.org).

## Building the Docs ##

1. Download [python](https://www.python.org/downloads/) version 2.7.x or higher (version 3.x works too).
2. If you are installing on Windows, make sure the Python install directory and the Python scripts directory have been added to the `PATH` environment variable.
For example, if you have installed Python in the `c:\python27` directory, you should add `c:\python27;c:\python27\scripts` to the `PATH` environment variable.
3. Install Sphinx by running the following command on a command prompt.

    ```pip install sphinx```

4. Sphinx, by default, installs also the "ReadTheDocs" custom theme.
If you need to update the installed version, you should run:

    ```pip install -U sphinx_rtd_theme```

5. Clone the docs repo to your local machine.
6. Navigate into the `src` subdirectory.
7. Run `make` (make.bat on Windows, Makefile on Mac/Linux)

    ```make html```

8. The generated docs should be in the `src\build\html` subdirectory.
Open the `index.html` file in your browser to see the generated docs.

## Using `sphinx-autobuild` to view changes locally ##

[sphinx-autobuild](https://github.com/GaretJax/sphinx-autobuild) runs a local web server and automatically refresh whenever changes to the source files are detected.
If `sphinx-autobuild` is not already installed in your lacal machine, install it by running

 ```pip install sphinx-autobuild```

on a command prompt.

1. Navigate into the `src` subdirectory.
2. Run `make` (make.bat on Windows, Makefile on Mac/Linux)
 
    ```make livehtml```

3. Browse to `http://127.0.0.1:8000` to see the locally built documentation. 
4. Hit `^C` to stop the local server.

## Adding Content ##

The documentation follows the [Sphinx Style Guide](http://documentation-style-guide-sphinx.readthedocs.org/en/latest/style-guide.html).

Before adding content, create an issue suggesting your proposed article.

Provide as much details as possible on what the article will be.

If you are to add or modify content to an existing or marks as incomplete article, include the article's header to the issue.

If you are suggesting an article which is not yet documented, provide details on how it would relate to existing documentation.

Follow the documentation's folder structure.

## Contributing process ##

1. Open an Issue by following the **Adding Content** guidelines.
Get approval to write your article.
2. Fork the repo.
3. Create a `branch` for your article.
4. Write your article, following the documentation's folder structure, placing the article in its own folder and any needed images in a `.static` folder located in the same folder as the article.
5. Add your name to the contributors article.
6. Submit a Pull Request from your branch to `master`.
7. Discuss the Pull Request with the EVEMon Dev Team; making any requested updates to your branch.
When we are ready to accept the PR, we will add a :shipit: (`:shipit:`) comment.
8. Before your Pull Request can be accepted make sure to [squash all commits](http://stackoverflow.com/questions/14534397/squash-all-my-commits-into-one-for-github-pull-request) into a single commit message.
Do this in your branch, using the `rebase` git command.
For example, if you want to squash the last 4 commits into a single commit, you would use:

	```git rebase -i HEAD~4```

The `-i` option stands for "interactive" and should open a text editor showing the last N commits, preceded with "pick ".
Change all but the first instance of "pick" to "squash" and save the file and exit the editor.
A more detailed answer is available on [StackOveflow](http://stackoverflow.com/a/6934882).

## Common Pitfalls ##

Below are some common pitfalls you should try to avoid:

- **Don't forget** to submit an issue before starting work on an article.
- **Don't forget** to create a separate branch before working on your article.
- **Don't forget** to squash your commits once your pull request is ready to be accepted.
- **Don't forget** to add your name to the contributors article.
- **Don't update or merge** your branch after you submit your pull request.