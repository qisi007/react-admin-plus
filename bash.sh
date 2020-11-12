git add .

git commit -m "add: todoList"

git pull origin master

git merge master

echo 代码合并完毕,正在推送到远程仓库

sleep 1s

function obtain_git_branch {
  br=`git branch | grep "*"`
  echo ${br/* /}
}
branch=`obtain_git_branch`

echo 当前分支: $branch

sleep 2s

git push --set-upstream origin $branch

echo 代码已推送到远程分支

sleep 1s


npm run fast

echo 已构建完成
