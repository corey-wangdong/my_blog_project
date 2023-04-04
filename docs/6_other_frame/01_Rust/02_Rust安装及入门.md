---
sidebar_position: 1
---

# 2. Rust安装及入门
> 使用 Rustup（推荐）

# 打开终端，输入以下命令进行安装
```shell
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## 出现以下信息需要选择安装方式：选择默认即可
```
1) Proceed with installation (default)
2) Customize installation
3) Cancel installation
>
```

## 完成出现以下提示
```shell
To configure your current shell, run:
source "$HOME/.cargo/env"
```

## 按照上面的提示执行命令
```shell
source "$HOME/.cargo/env"
```

## 判断是否安装成功
```shell
rustc --version
```

# 常用命令
> rustup update ：来更新Rust版本

> rustup self uninstall : 卸载rustup及Rust工具链

> rustc --version:检查Rust是否被正确安装，
如果一切正常，在命令输出就会看到格式为「最新稳定版本的版本号」、「当前版本的hash」、「版本的提交日期」
rustc 1.64.0 (a55dd71d5 2022-09-19)

> rustup doc: 在浏览器中打开在安装工具再执行过程中在本地生成的「离线文档」

# 输出 Hello,Rust
## 1. 创建文件夹及第一个Hello,Rust项目
## 2. 创建 main.rs文件
```rs
fn main() {
  println!("hello, Rust");
}
```

## 3. 运行 rustc main.rs
```shell
rustc main.rs
```
## 4. 运行之后可以看到出现了一个编译之后的文件 main
> 输入 ./main 可以看到输出了 "hello, Rust"
```shell
./main
```

# 分析
## 1. 这里的main函数比较特殊：当你运行一个「可执行」Rust程序时，所有的代码都会从这个「入口函数」开始运行。

# Rust构建工具:Cargo
> Cargo是Rust工具链中「内置」的构建系统及「包管理器」

> 如果是通过我们以上的命令来安装Rust，那么Cargo就已经被附带在了当前的Rust工具链里。

## 查看是否安装成功
```shell
cargo --version
```

## 用Cargo 创建一个项目
```shell
cargo new hello_cargo
cd hello_cargo
```

# 使用Cargo构建和运行项目
```shell
cargo build
```
> 「首次使用」命令cargo build构建的时候，它会在「项目根目录」下创建一个名为Cargo.lock的新文件，这个文件记录了「当前项目所有依赖库的具体版本号」。「不要手动编辑其中的内容，Cargo可以帮助你自动维护它」。

## cargo run命令依次完成「编译」和「执行」任务。
```shell
cargo run
```

> Cargo提供了一个叫做cargo check的命令，用来「快速检查当前代码是否可以通过编译」，而不需要花费额外的时间去真正生成可执行程序。

# 以Release 模式进行构建
> 当准备好发布自己的项目时，可以使用命令cargo build --release在「优化模式」构建并生成可执行程序。它生成的可执行文件会被放置在target/release目录下，而不是之前的target/debug目录下。

> 这种模式会以更长的编译时间为代价来优化代码，从而使代码拥有更好的「运行时性能」。