git pull origin master

git merge master


function obtain_git_branch {
  br=`git branch | grep "*"`
  echo ${br/* /}
}
branch=`obtain_git_branch`


echo master代码合并完毕，正在提交本地分支代码...

git add .

git commit -m "add: skeleton"

echo 当前版本号: $branch

git push --set-upstream origin $branch

sleep 1s

echo 代码已推送到远程分支

npm run deploy

echo 已构建完成
