const course_nav = ['Top Rated', 'Development', 'Design', 'Music', 'Marketing', 'Business', 'Photography'];

const courses = [
  {
    assest: "assets/1.png",
    id: 1,
    title: "Artificial Intelligence",
    desc: "Modern Artificial Intelligence with zero coding",
    author: "Jhon David",
    stars: "⭐⭐⭐⭐⭐",
    rating: 4.9,
    price: "$ 49.99",
  },
  {
    assest: "assets/2.png",
    id: 2,
    title: "UX/UI Designing",
    desc: "Figma UX/UI Design essentials",
    author: "Danial Walter Scott",
    stars: "⭐⭐⭐⭐⭐",
    rating: 4.9,
    price: "$ 49.99",
  },
  {
    assest: "assets/3.png",
    id: 3,
    title: "UX/UI Designing",
    desc: "Complete figma mega course: UX/UI Design Beginner to Expert",
    author: "Kaleb Kingston",
    stars: "⭐⭐⭐⭐⭐",
    rating: 4.9,
    price: "$ 49.99",
  },
  {
    assest: "assets/4.png",
    id: 4,
    title: "Web Development",
    desc: "The Complete 2022 Fullstack Web Developer Course",
    author: "Mark Lassoff",
    stars: "⭐⭐⭐⭐⭐",
    rating: 4.9,
    price: "$ 49.99",
  },
  {
    assest: "assets/5.png",
    id: 5,
    title: "Web Development",
    desc: "Javascript for beginners",
    author: "Jhon David",
    stars: "⭐⭐⭐⭐⭐",
    rating: 4.9,
    price: "$ 49.99",
  },
  {
    assest: "assets/6.png",
    id: 6,
    title: "Digital Marketing",
    desc: "Digital Advertising and Marketing 101: The Complete...",
    author: "Ben Silverstain",
    stars: "⭐⭐⭐⭐⭐",
    rating: 4.9,
    price: "$ 49.99",
  },
  {
    assest: "assets/7.png",
    id: 7,
    title: "Digital Marketing",
    desc: "Mega Digital Marketing Course: 12 Courses in 1",
    author: "Phil Ebiner",
    stars: "⭐⭐⭐⭐⭐",
    rating: 4.9,
    price: "$ 49.99",
  },
  {
    assest: "assets/1.png",
    id: 8,
    title: "UX/UI Designing",
    desc: "User Experience Design Essentials",
    author: "Jacob Murphy",
    stars: "⭐⭐⭐⭐⭐",
    rating: 4.9,
    price: "$ 49.99",
  },
];

const features = [
    {
        id:1,
        asset: "assets/key-alt.png",
        title: "Life Time Access",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed reprehenderit facere eveniet tempora soluta nesciunt aspernatur quisquam dolore eaque tempore, porro molestiae, ipsa ratione excepturi incidunt maiores laborum optio."
    },
    {
        id:2,
        asset: "assets/monitor-alt-4.png",
        title: "Online Classes",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed reprehenderit facere eveniet tempora soluta nesciunt aspernatur quisquam dolore eaque tempore, porro molestiae, ipsa ratione excepturi incidunt maiores laborum optio."
    },
    {
        id:3,
        asset: "assets/tabler_certificate.png",
        title: "Get Certificate",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed reprehenderit facere eveniet tempora soluta nesciunt aspernatur quisquam dolore eaque tempore, porro molestiae, ipsa ratione excepturi incidunt maiores laborum optio."
    },
    {
        id:4,
        asset: "assets/user.png",
        title: "Expert Trainers",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed reprehenderit facere eveniet tempora soluta nesciunt aspernatur quisquam dolore eaque tempore, porro molestiae, ipsa ratione excepturi incidunt maiores laborum optio."
    },
    {
        id:5,
        asset: "assets/badge-check.png",
        title: "Great Result",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed reprehenderit facere eveniet tempora soluta nesciunt aspernatur quisquam dolore eaque tempore, porro molestiae, ipsa ratione excepturi incidunt maiores laborum optio."
    },
    {
        id:6,
        asset: "assets/badge-dollar.png",
        title: "Best Price",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sed reprehenderit facere eveniet tempora soluta nesciunt aspernatur quisquam dolore eaque tempore, porro molestiae, ipsa ratione excepturi incidunt maiores laborum optio."
    }
]


const articles = [
    {
        id: 1,
        asset: "assets/news-1.png",
        logo: "assets/grid.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "Web Development",
        calender: "assets/calendar-alt.png",
        date: "20-12-2022",
        read_more: "Read more",
        right_arrow: "assets/arrow-right.png"

    },
    {
        id: 2,
        asset: "assets/news-2.png",
        logo: "assets/grid.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "Business",
        calender: "assets/calendar-alt.png",
        date: "20-12-2022",
        read_more: "Read more",
        right_arrow: "assets/arrow-right.png"

    },
    {
        id: 3,
        asset: "assets/news-3.png",
        logo: "assets/grid.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        title: "Technology",
        calender: "assets/calendar-alt.png",
        date: "20-12-2022",
        read_more: "Read more",
        right_arrow: "assets/arrow-right.png"

    }
]



const courseList = document.getElementById('courseList');

course_nav.forEach(course => {
  const li = document.createElement('li');
  li.textContent = course;
  courseList.appendChild(li);
});


const courseGrid = document.getElementById("courseGrid");

courses.forEach(course => {
  const card = document.createElement("div");
  card.className = "course-card";
  card.innerHTML = `
    <img src="${course.assest}" alt="${course.title}">
    <div class="course-info">
      <button>${course.title}</button>
      <p id="course-card-desc">${course.desc}</p>
      <p class="author">By ${course.author}</p>
      <p class="stars">${course.stars} (${course.rating})</p>
      <div class="price-buy">
        <p class="price">${course.price}</p>
        <button class="price-buy-button">Buy now</button>
      </div>
    </div>
  `;
  courseGrid.appendChild(card);
});

const featureGrid = document.getElementById("featureGrid");

features.forEach(feature => {
    const card = document.createElement("div");
    card.classList = "feature-card";
    card.innerHTML = `
    <div class="feature-card-container">
        <img src="${feature.asset}" alt="${feature.title}">
        <p id="feature-card-title">${feature.title}</P>
        <p id="feature-card-desc">${feature.desc}</p>
    </div>
    `;
    featureGrid.appendChild(card)
})


const articleGrid = document.getElementById("articleGrid");

articles.forEach(article => {
    const card = document.createElement("div");
    card.className = "article-card";
    card.innerHTML = `
        <img class="article-main-img" src="${article.asset}" alt="${article.title}">
        <div class="article-logo-title"> 
            <img class="article-logo" src="${article.logo}" alt="${article.title}">
            <p class="article-title">${article.title}</p>
        </div>
        <div class="article-desc">${article.desc}</div>
        <div class="article-footer">
            <div class="article-footer-left"> 
                <img class="calendar-icon" src="${article.calender}" alt="calendar">
                <p class="article-date">${article.date}</p>
            </div>
            <div class="article-footer-right"> 
                <p class="article-read-more">${article.read_more}</p>
                <img class="arrow-icon" src="${article.right_arrow}" alt="arrow">
            </div>
        </div>
    `;
    articleGrid.appendChild(card);
});
