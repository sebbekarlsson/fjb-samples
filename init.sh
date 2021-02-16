# This file simply goes into every directory and runs `yarn install`

path=$(pwd)

for dir in ./*/
do
    dir=${dir%*/}      # remove the trailing "/"
    dir=${dir##*/}
    echo $dir
    cd $dir && yarn install ; cd $path
done
