# Babul Keyer

Group Members

[Amanuel Yihune  - UGR/8408/13 - Sec 1](https://github.com/amanyih) <br/>
[Elisur Freyesus - UGR/8806/13 - Sec 4](https://github.com/elizura) <br/>
[Merwan Juneydi  - UGR/0816/13 - Sec 2](https://github.com/Merwan-J) <br/>
[Natnael Abebaw  - UGR/7747/13 - Sec 1](https://github.com/natttygoog) <br/>
[Rahel Solomon   - UGR/9946/13 - Sec 3](https://github.com/ritasol) <br/>



# Github Workflow Steps
1. ***Clone*** the repository if you don't have it already (this tends to get more difficult as the project grows and the file size grows)
2. If you already had the project locally, perform a `git pull` on the main branch
3. Create and checkout to a new branch from the main. You can use `git checkout -b branch-name`, which is a shorter alternative for `git branch branch-name` followed by `git checkout branch-name`
4. The branch naming convention should follow the pattern `name.feature-name`. (eg. `nati.login`, `merwan.contact`)
5. If you already have a branch and wish to continue working on it, use ***Rebase*** to bring in changes from the main branch. Use the command `git rebase main` if you are on your branch or `git rebase main branch-name` from anywhere to rebase your branch ***onto*** the main
6. Pulling from main into your branch (same as merging the main into your branch) could have similar results but using rebase from the main makes a more linear version control history as it basically pretends like whatever you committed on your branch happened ***After*** the changes in the main wheather they actually happend after or before
7. Once your branch is rebased and upto date, make the changes you wish to make and stage and commit your changes. Make sure to remember if you need to add any files into the `.gitignore` before committing
8. The commit messages should be Present Tense Imparative Sentences (eg. "Create README.md", "Update the Login Page"). Imagine the phrase ***"This commit is made to..."*** before your commit message (eg. "This commit is made to `Create README.md`"). In addition to an imparetive statement, include a tag for what the commit is about in square braces. So a full commit message could look something like - `[backend
9. ] Update Login Page`. And make sure a commit is as small as can be explained in one statement.
10. Once the commits are made, push the local changes to github using `git push`. If you have made a rebase however, you may need to push forcefully cause you could get some weird conflicts otherwise. So use `git push --force` instead.
11. Once the changes are pushed to remote, go to github and create a pull request. for a few minutes after you made a push, GitHub presents a big `Make Pull Request` button for your branch to make it easy for you. In any case, you can go to the branches list and find an option to create one for your branch.
12. When creating a pull request, make sure to add atleast one reviewer (either your team leader or someone who maybe understand what you did better).
13. If the reviewer leaves some comments, address those issues and make a commit for it and push it. However, make sure to pull in the main branch and rebase onto the main branch (Step 5) to get updates that other people added in the meantime whenever you want to make changes, make a push, or before you merge.
14. If the reviewer approves the pull request, you can now merge it to the main branch. Github offers you the option to merge the pull request. If you choose the `Squash and Merge` option, it allows you to group together your multiple smaller commits into one commit message with the others listed as a description.
15. Once you have merged a branch, make sure to rebase again to get updates from the main if you intend to keep working on it. Otherwise try to delete it as soon as you can. It is better and easier to recreate the branch again later if you need it.

# If you have any other questions, feel free to look it up, ask your team leads or really anyone else. Thank You.
