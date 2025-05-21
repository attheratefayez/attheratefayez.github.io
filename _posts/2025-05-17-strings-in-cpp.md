---
layout: post
title: std::string and std::string_view in cpp
date: 2025-05-17
description: A brief discussion on c-style string, std::string, std::string_view and Short String Optimization (SSO)
tags: cpp 
categories: Programming
thumbnail: assets/img/strings_cpp/thumbnail.jpg
featured: true
---

Strings are sequence of characters. This is how C handles string. 
The C-style string (const char*) holds nothing but the sequence of characters.

```c++
const char* name = "First Last";
```

In the above case, 
- the statement is evaluated at compile-time 
- the string-literal ("Hello World") is stored in the .rodata section in the ELF file
- and lastly, a pointer to that location in returned.

Plain old sequence of characters, immutable. No other utilities around it, no nothing.

Then comes std::string type. 

```c++
std::string name = "First Last";
```

In this case, 
- the string-literal is still stored in the .rodata section in the ELF file
- but, under the hood, std::string allocates memory in the heap (SSO is a special case, discussed later) and constructs 
the string using the string-literal 

So, now the string is mutable, memory-safe and it has other utility functions around it. 
Problem with std::string is its heap allocated and heap memory is comparatively slower.

<hr>

### Short String Optimization (SSO)

SSO is an optimization used in std::string in cpp. When the string is short, 
it doesn't allocate any heap memory to create the dynamic string. Rather, 
it stores the string inside the string-object itself, in the stack. This small optimization 
improves performance and prevents memory-fragmentation.

We can take an example and find out about this SSO in action. If we see the address 
of string variable and the address of string.data() close, then we can be sure that 
the string data, and string both are in stack. But, if the difference of two addresses 
are not close, that's an indication that SSO didn't kick-in and the created string is
in the heap.

```c++
int main()
{
    std::string name = "John Wick";
    std::string msg = "Short String Optimization is avoided here.";

    std::cout << "Name       : " << &name << "\n";
    std::cout << "Name.data(): " << static_cast<const void*>(name.c_str()) << std::endl;

    std::cout << "Msg        : " << &msg << "\n";
    std::cout << "Msg.data() : " << static_cast<const void*>(msg.c_str()) << std::endl;

}
```

Output of this code is: 

```code
Name       : 0x7ffe00fd5d20
Name.data(): 0x7ffe00fd5d30

Msg        : 0x7ffe00fd5d00
Msg.data() : 0x30d55eb0
```

We can see SSO was applied for `name` variable, but for `msg` the difference of addresses are huge, 
indicating heap allocation.

<hr>

### std::string_view

`string_view`'s are fancy references to `const char*` type, `character-array` type and `std::string` type.
It can be used to pass a string or a part of string without making a copy. Perhaps, passing a part of the string
without making a copy would be a more appropriate use case of string_view.

Let's think of a function, which takes **first_name** and **last_name** as arguments.

```c++
void do_something(const std::string& first_name, const std::string& last_name);

void do_something(std::string_view first_name, std::string_view last_name);
``` 

And, suppose we have the full name in a variable `std::string name`. In the first case, 
we have to create two different string-object. But, in the second case, we can use string_view, 
on a range of the original string, without creating anymore string-objects.

```c++
std::size_t pos = name.find(" ");
std::string_view first_name_v = std::string_view(name).substr(0, pos);
std::string_view last_name_v =  std::string_view(name).substr(pos+1);

do_something(first_name_v, last_name_v);
```
The following discussions will be helpful: 
- [CppReference](https://en.cppreference.com/w/cpp/string/basic_string_view)
- [Reddit Discussion on string_view](https://www.reddit.com/r/learnprogramming/comments/1bw8ayi/when_to_use_stdstring_and_stdstring_view/)

