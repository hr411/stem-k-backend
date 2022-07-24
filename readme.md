github 은 main 브랜치를 사용하고, heroku 는 master 브랜치를 사용한다.

수정된 소스는 github 의 main 브랜치로 머지 후 heroku 의 master 브랜치로 머지한다.

# main 에서 수정하기

1. main branch 소스수정
1. commit : 커밋전에 main 브랜치 임을 확인할 것
1. main branch push
    ```bash
    # main branch 에서
    $ git push
    ```

# heroku 의 master 브랜치에 push 방법

1. master checkout
    ```bash
    # main branch 에서
    $ git checkout master 
    ```
1. merge main
    ```bash
    # master branch 에서
    $ git merge --no-ff main
    ```
1. master push
    ```bash
    # master branch 에서
    $ git push heroku master
    ```