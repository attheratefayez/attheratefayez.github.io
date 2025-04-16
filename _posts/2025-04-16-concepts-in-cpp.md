---
layout: post
title: Constraints and Concepts in C++
date: 2025-04-16
description: A basic discussion on Concepts in C++
tags: cpp 
categories: code
thumbnail: assets/img/concepts/concept_thumbnail.png
featured: true
---
This explaination of `concepts and constraints` is very basic, just to get an idea of what concepts are in cpp.

Lets start by taking an example function:

```c++
int add(int a, int b)
{
    return a + b;
}
``` 

This function adds two integers and returns the result, simple!

But, now we want add function for `float` and `double` type as well. For that, we can use
**function template** in c++. 

```c++
template<typename T>
T add(T a, T b)
{
    return a + b;
}
```
Now the compiler will generate the overloads of `add()` when necessary. We can do: 

```c++
add(4, 5);       // ok
add(4.3f, 5.8f); // ok
add(3.2, 2.3);   // ok
```

We can also do this as well: 
```c++
add(std::string("some"), std::string("thing")); // ok
```

But, we want to keep the add function mathematical that adds numbers only.
So, we want to put a constraint on function template add() that, it should only create 
overloads for types `int`, `float` and `double`. Lets name this constraint `NumbersOnly`.
This **named set of constraints is called Concepts**. 
In code, it looks like this: 

```c++
// concept NumbersOnly
template<typename T>
concept NumbersOnly = std::is_integral_v<T> || std::is_floating_point_v<T>;

// template function add that uses NumbersOnly constraint
template<typename T>
T add(T a, T b) requires NumbersOnly<T>
{
    return a + b;
}
```

Now, when we do this: 
```c++
add(std::string("some"), std::string("thing")); // error: no matching function for call to `add(string, string)`
```

we get an error: 
```
error: no matching function for call to 'add(string, string)'.
```

This is the use of concepts, putting constraints/requirements on templates.
Every concept is a predicate and evaluated at compile-time. 

<hr>

### Extra

An easier way to do this is: 
```c++
template<typename T>
T add(T a, T b) requires std::is_arithmatic_v<T>
{
    return a + b;
}
```

A more complex way of achieving this, only with `template` and `type_trait` is: 

```c++
template<typename T, 
         typename = std::enable_if<std::is_arithmetic<T>::value>::type>
T add(T a, T b)
{
    return a + b;
}
```
<hr>

More detailed explainations can be found on: 
1. [CppReference](https://en.cppreference.com/w/cpp/language/constraints).
2. [Youtube](https://youtu.be/9C9eTmQqveY?si=LuvaqK9Jg-ZwZ9ZN).
2. [Jason Turner](https://youtu.be/dR64GQb4AGo?si=BDec8sCTRq2Jsaiv).
2. [The Code Hound](https://thecodehound.com/concepts-in-c20/).
