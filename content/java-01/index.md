---
emoji: 🧢
title: 자바 기초 요점정리
date: '2024-04-04 23:00:00'
author: 심우진
tags: java
categories: study
---

## 👋 간단한 자바 소개

자바 프로그램은 한 개 이상의 클래스(class)로 구성됩니다.
클래스는 한 개 이상의 필드(변수)나 메소드(명령문)로 구성됩니다.
자바의 모든 명령문은 반드시 세미콜론(;)으로 끝나야 합니다.
문자코드는 .java 파일이고 기계코드는 .class 파일 입니다.
javac 파일명.java 명령어로 컴파일하여 .class파일을 생성할 수 있습니다.

```java
class Test {
    int field1;
    String field2;

    public void method1() {
        System.out.println("자바 프로그래밍!!"); // 자바에서의 출력 명령어
        }
}        
```


**Main( )메소드**
자바 프로그램이 실행되면 맨 먼저 main() 메소드를 찾아 그 안의 모든 명령문을 차례대로 실행합니다.
따라서 하나의 자바 프로그램에는 main() 메소드를 가지는 클래스가 반드시 하나는 존재해야 합니다.

```java
[선언방법]
public static void main(String[] args){}
```


## 🚀 변수와 상수

변수란 데이터(data)를 저장하기 위해 프로그램에 의해 이름을 할당받은 메모리 공간을 의미합니다.

```java
[선언방법]
int num;

System.out.println(num); // 오류 발생
num = 20;                // 변수의 초기화
System.out.println(num); // 20

[응용방법]
int num1, num2;                  // 같은 타입의 변수를 동시에 선언함.
double num3 = 3.14;              // 선언과 동시에 초기화함.
double num4 = 1.23, num5 = 4.56; // 같은 타입의 변수를 동시에 선언하면서 초기화함.
```

상수는 변수와 마찬가지로 이름을 가지고 있는 메모리 공간입니다.
이러한 상수는 선언과 동시에 반드시 초기화해야 합니다.

```java
[선언방법]
final int AGES = 30;
```

## 🦖 추가예정
추후 추가예정


```toc

```
