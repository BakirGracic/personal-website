interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Bosnian Registration Plates',
    description: `A simple C++ program to get all possible variations of 3 types of car license plates in Bosnia and Herzegovina. Fun fact - first GitHub repository!`,
    imgSrc: '/static/images/projects/bosnian-registration-plates.png',
    href: 'https://github.com/BakirGracic/registration-plates-of-bosnia-and-herzegovina',
  },
  {
    title: 'Plooxy',
    description: `Connect and thrive with Plooxy - an innovative platform for your digital presence and marketing. With intuitive and simple interface, this platform gives it's users a whole new exprience!`,
    imgSrc: '/static/images/projects/plooxy.jpg',
    href: 'https://plooxy.io',
  },
  {
    title: 'Muslim Prayer Times',
    description: `An extended version of a popular Balkan app for tracking 5 daily prayer times in Muslims`,
    imgSrc: '/static/images/projects/muslim-prayer-times.png',
    href: 'https://plooxy.io',
  },
  {
    title: 'Website View Farming Script',
    description: `Ever wanted to farm view count on GitHub or some other website? You can achieve the same with sending parallel requests to that website with this script`,
    imgSrc: '/static/images/projects/website-view-farming-script.png',
    href: 'https://github.com/BakirGracic/simple-website-views-farming-script',
  },
  {
    title: 'Automatic Windows Font Installer',
    description: `Designers surely have alot of local font files, right? What if you migrate to another device or simply need to reinstall them all? Don't hassle with manually installing them, let this script do all the work!`,
    imgSrc: '/static/images/projects/automatic-windows-font-installer.png',
    href: 'https://github.com/BakirGracic/windows-font-installer',
  },
]

export default projectsData
