// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Refer to Github to see all the projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/registry.jsonresume.org/attheratefayez";
          },
        },{id: "post-std-string-and-std-string-view-in-cpp",
        
          title: "std::string and std::string_view in cpp",
        
        description: "A brief discussion on c-style string, std::string, std::string_view and Short String Optimization (SSO)",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/strings-in-cpp/";
          
        },
      },{id: "post-elf-and-stuffs",
        
          title: "ELF and Stuffs",
        
        description: "ELF and Related Tools",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/elf-and-stuffs/";
          
        },
      },{id: "post-constraints-and-concepts-in-c",
        
          title: "Constraints and Concepts in C++",
        
        description: "A basic discussion on Concepts in C++",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/concepts-in-cpp/";
          
        },
      },{id: "post-demystifying-dds",
        
          title: "Demystifying DDS",
        
        description: "A very rough explaination of how DDS works.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/dds-ros/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-drawing-with-fourier-series",
          title: 'Drawing with Fourier Series',
          description: "Signal decomposition and reconstruction using DFT and Complex Fourier Series.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_drawing_with_fourier_series/";
            },},{id: "projects-path-sync",
          title: 'Path Sync',
          description: "This project visualizes and somewhat analyzes the performance of different path finding algorithms. It can currently solve SAPF and MAPF problems and show the results.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_path_sync/";
            },},{id: "projects-guessdigitnn",
          title: 'GuessDigitNN',
          description: "A simple app that tries to guess what number is drawn on the canvas. Under the hood is a CNN trained on MNIST dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_guessDigitNN/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%61%69%7A%75%72%72%61%68%6D%61%6E.%66%61%79%65%7A@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/attheratefayez", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/faizurrahmanfayez", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
