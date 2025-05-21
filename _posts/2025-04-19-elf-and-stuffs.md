---
layout: post
title: ELF and Stuffs
date: 2025-04-19
description: ELF and Related Tools
tags: cpp 
categories: Programming
thumbnail: assets/img/elf_stuffs/thumbnail.png
featured: true
---

#### NOTE: WIP

ELF stands for Executable and Linkable file format. It's a standard file format for 
executables, object files, shared library files etc. in linux and unix-like systems. 
So, its important to keep a bit of an idea what the elf file holds. 

ELF-file is made up of ELF-Header, followed by file-data.

In the ELF-Header, there are a lot of information that helps 
determine what type of elf file it is, how the data is formated, 
and about other parts in the file. 

Now, before going into the details of file-data, lets learn two terms: 

- Section: It is the smallest contiguous part in the ELF file. It can be 
relocated and linkers use information of different sections to combine different
parts of the program.

- Segments: Segments may contain one or more sections. It contains information 
about how the program should be loaded and run. 

Now, file-data is mostly composed of different Sections, such as: .rodata (read-only data)
, .text (asm code) etc. The `Section Header Table` lists all the sections along with their 
address, offset, size and other informations. 

Then there is `Program Header Table`. It contains different segments. Segments describe 
how different sections should be loaded and run the ELF. The linker uses information of 
the Program Header Table to link files and then make it run-able.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/elf_stuffs/elf_file_format.jpg" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

<div class="caption">
    Different parts ELF-File
</div>

Now, to disect the ELF-file, tools like `obj-dump`, `readelf`, `xxd` can be helpful. 

`readelf` is useful for showing the headers and tables in the elf-file. It cannot show the contents.

To see the contents in each sections, we can use `obj-dump`. 

`xxd` helps by directly dumping the content of the elf-file in hex-format. 

But, if you just want to disect a program, without going through the hassle's of obj-dump and stuffs, 
[compiler explorer](https://godbolt.org/) can be used. 

About ELF file format: 
1. [wikipedia](https://en.wikipedia.org/wiki/Executable_and_Linkable_Format)
1. [Blog by ByteHackr](https://dev.to/bytehackr/understanding-the-basics-of-elf-files-on-linux-61c#:~:text=The%20Executable%20and%20Linkable%20Format,and%20how%20to%20analyze%20them.)
1. [StackOverflow Discussion](https://stackoverflow.com/questions/16812574/elf-files-what-is-a-section-and-why-do-we-need-it)