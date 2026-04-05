// src/data/coursesData.js

export const coursesData = [
  {
    id: 1,
    title: 'Master Artificial Intelligence',
    category: 'Technology',
    description: 'Learn AI fundamentals, machine learning, and deep learning from industry experts.',
    duration: '12 weeks',
    level: 'Intermediate',
    rating: 4.8,
    students: 15420,
    resources: 24,
    image: 'https://picsum.photos/seed/ai/400/250',
    instructor: 'Dr. Sarah Chen',
    topics: ['Machine Learning', 'Neural Networks', 'Deep Learning', 'NLP'],
    price: 99,
    resourcesData: {
      videos: [
        { title: 'AI Basics Explained', url: 'https://youtu.be/2ePf9rue1Ao' },
        { title: 'Machine Learning Crash Course', url: 'https://youtu.be/GwIo3gDZCVQ' },
      ],
      articles: [
        { title: 'What is AI? (IBM)', url: 'https://www.ibm.com/cloud/learn/what-is-artificial-intelligence' },
        { title: 'Deep Learning Simplified', url: 'https://www.geeksforgeeks.org/deep-learning-introduction/' },
      ],
      books: [
        { title: 'Deep Learning by Ian Goodfellow', url: 'https://www.deeplearningbook.org/' },
        { title: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/' },
      ]
    }
  },
  {
    id: 2,
    title: 'Professional Photography',
    category: 'Creative',
    description: 'Master composition, lighting, and post-processing techniques for stunning photos.',
    duration: '8 weeks',
    level: 'Beginner',
    rating: 4.9,
    students: 8930,
    resources: 18,
    image: 'https://picsum.photos/seed/photo/400/250',
    instructor: 'Mark Thompson',
    topics: ['Composition', 'Lighting', 'Editing', 'Portrait Photography'],
    price: 79,
    resourcesData: {
      videos: [
        { title: 'Photography Tutorial for Beginners', url: 'https://youtu.be/7dJbn-k3jyo' },
        { title: 'Lighting for Photography', url: 'https://youtu.be/O7jzAjV7iKk' },
      ],
      articles: [
        { title: 'Guide to Composition', url: 'https://www.photographytalk.com/beginner-photography-tips' },
        { title: 'Portrait Photography Tips', url: 'https://expertphotography.com/portrait-photography-tips/' },
      ],
      books: [
        { title: 'Understanding Exposure', url: 'https://www.goodreads.com/book/show/141423.Understanding_Exposure' },
        { title: 'The Digital Photography Book', url: 'https://www.amazon.com/Digital-Photography-Book-Part-World/dp/0133856886/' },
      ]
    }
  },
  {
    id: 3,
    title: 'Business Strategy & Growth',
    category: 'Business',
    description: 'Strategic planning, market analysis, and scaling businesses effectively.',
    duration: '10 weeks',
    level: 'Advanced',
    rating: 4.7,
    students: 12450,
    resources: 20,
    image: 'https://picsum.photos/seed/business/400/250',
    instructor: 'Jennifer Martinez',
    topics: ['Strategy', 'Growth Hacking', 'Market Analysis', 'Leadership'],
    price: 129,
    resourcesData: {
      videos: [
        { title: 'Business Strategy for Beginners', url: 'https://youtu.be/bSYdx35Ut6k' },
        { title: 'Scaling a Startup', url: 'https://youtu.be/T1PaNU6F_fY' },
      ],
      articles: [
        { title: 'Growth Hacking Essentials', url: 'https://www.shopify.com/blog/growth-hacking' },
        { title: 'Effective Business Leadership', url: 'https://www.inc.com/guides/leadership.html' },
      ],
      books: [
        { title: 'Good to Great', url: 'https://www.amazon.com/Good-Great-Some-Companies-Others/dp/0066620996' },
        { title: 'The Lean Startup', url: 'https://theleanstartup.com/book' },
      ]
    }
  },
  {
    id: 4,
    title: 'Full Stack Web Development',
    category: 'Technology',
    description: 'Build modern web applications with React, Node.js, and databases.',
    duration: '16 weeks',
    level: 'Intermediate',
    rating: 4.9,
    students: 21340,
    resources: 32,
    image: 'https://picsum.photos/seed/webdev/400/250',
    instructor: 'Alex Johnson',
    topics: ['React', 'Node.js', 'MongoDB', 'API Development'],
    price: 149,
    resourcesData: {
      videos: [
        { title: 'React Full Course', url: 'https://youtu.be/bMknfKXIFA8' },
        { title: 'Node.js Tutorial for Beginners', url: 'https://youtu.be/TlB_eWDSMt4' },
      ],
      articles: [
        { title: 'React Official Docs', url: 'https://react.dev/' },
        { title: 'Node.js Guides', url: 'https://nodejs.dev/en/learn/' },
      ],
      books: [
        { title: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' },
        { title: 'MongoDB: The Definitive Guide', url: 'https://www.oreilly.com/library/view/mongodb-the-definitive/9781491954454/' },
      ]
    }
  },
  {
    id: 5,
    title: 'Digital Marketing Mastery',
    category: 'Business',
    description: 'SEO, social media, content marketing, and analytics for digital success.',
    duration: '6 weeks',
    level: 'Beginner',
    rating: 4.6,
    students: 9870,
    resources: 15,
    image: 'https://picsum.photos/seed/marketing/400/250',
    instructor: 'Emma Davis',
    topics: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
    price: 69,
    resourcesData: {
      videos: [
        { title: 'SEO for Beginners', url: 'https://youtu.be/8AZ8GqW5iak' },
        { title: 'Digital Marketing Full Course', url: 'https://youtu.be/f1R5YUg3ibo' },
      ],
      articles: [
        { title: 'Content Strategy Guide', url: 'https://contentmarketinginstitute.com/' },
        { title: 'Google Analytics Basics', url: 'https://support.google.com/analytics/answer/1008015?hl=en' },
      ],
      books: [
        { title: 'This Is Marketing by Seth Godin', url: 'https://www.amazon.com/This-Marketing-Cant-Until-Learn/dp/0525540830' },
        { title: 'Digital Marketing For Dummies', url: 'https://www.amazon.com/Digital-Marketing-Dummies-Business-Personal/dp/1119660497' },
      ]
    }
  },
  {
    id: 7,
    title: 'Docker & Jenkins DevOps Pipeline',
    category: 'DevOps',
    description: 'Master Docker containerization and run Jenkins CI/CD pipelines inside Docker containers for automated deployments.',
    duration: '10 weeks',
    level: 'Intermediate',
    rating: 4.8,
    students: 13750,
    resources: 26,
    image: 'https://picsum.photos/seed/docker/400/250',
    instructor: 'Raj Patel',
    topics: ['Docker', 'Docker Compose', 'Jenkins in Docker', 'CI/CD Pipelines', 'Container Orchestration'],
    price: 119,
    resourcesData: {
      videos: [
        { title: 'Docker Full Course for Beginners', url: 'https://youtu.be/3c-iBn73dDE' },
        { title: 'Jenkins Tutorial for Beginners', url: 'https://youtu.be/6YZvp2GwT0A' },
        { title: 'Run Jenkins inside Docker', url: 'https://youtu.be/pMO26j2OUME' },
        { title: 'Docker Compose Crash Course', url: 'https://youtu.be/Qw9zlE3t8Ko' },
      ],
      articles: [
        { title: 'Docker Official Docs', url: 'https://docs.docker.com/get-started/' },
        { title: 'Jenkins in Docker – Official Guide', url: 'https://www.jenkins.io/doc/book/installing/docker/' },
        { title: 'CI/CD with Jenkins & Docker', url: 'https://www.digitalocean.com/community/tutorials/how-to-automate-jenkins-setup-with-docker-and-jenkins-configuration-as-code' },
      ],
      books: [
        { title: 'Docker Deep Dive by Nigel Poulton', url: 'https://www.amazon.com/Docker-Deep-Dive-Nigel-Poulton/dp/1521822808' },
        { title: 'Continuous Delivery with Docker and Jenkins', url: 'https://www.packtpub.com/product/continuous-delivery-with-docker-and-jenkins/9781787125230' },
      ]
    }
  },
  {
    id: 6,
    title: 'UX/UI Design Fundamentals',
    category: 'Creative',
    description: 'Create beautiful, user-friendly interfaces with modern design principles.',
    duration: '9 weeks',
    level: 'Beginner',
    rating: 4.8,
    students: 11230,
    resources: 22,
    image: 'https://picsum.photos/seed/uxui/400/250',
    instructor: 'David Lee',
    topics: ['User Research', 'Wireframing', 'Prototyping', 'Figma'],
    price: 89,
    resourcesData: {
      videos: [
        { title: 'UX/UI Crash Course', url: 'https://youtu.be/_XH16m2w_qw' },
        { title: 'Figma for Beginners', url: 'https://youtu.be/ftkF2aRIzJU' },
      ],
      articles: [
        { title: 'Design Thinking 101', url: 'https://www.ideou.com/blogs/inspiration/what-is-design-thinking' },
        { title: 'UX Principles', url: 'https://www.nngroup.com/articles/ten-usability-heuristics/' },
      ],
      books: [
        { title: 'Don’t Make Me Think', url: 'https://www.sensible.com/dmm.html' },
        { title: 'The Design of Everyday Things', url: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654' },
      ]
    }
  },
];

export const myJourneyData = [
  {
    id: 1,
    courseId: 1,
    title: 'Master Artificial Intelligence',
    progress: 65,
    completedLessons: 16,
    totalLessons: 24,
    lastAccessed: '2 hours ago',
    nextLesson: 'Deep Learning Fundamentals',
    image: 'https://picsum.photos/seed/ai/400/250',
    timeSpent: '24 hours',
    category: 'Technology'
  },
  {
    id: 2,
    courseId: 4,
    title: 'Full Stack Web Development',
    progress: 40,
    completedLessons: 13,
    totalLessons: 32,
    lastAccessed: '1 day ago',
    nextLesson: 'Building REST APIs',
    image: 'https://picsum.photos/seed/webdev/400/250',
    timeSpent: '18 hours',
    category: 'Technology'
  },
  {
    id: 3,
    courseId: 2,
    title: 'Professional Photography',
    progress: 25,
    completedLessons: 5,
    totalLessons: 18,
    lastAccessed: '3 days ago',
    nextLesson: 'Understanding Aperture',
    image: 'https://picsum.photos/seed/photo/400/250',
    timeSpent: '8 hours',
    category: 'Creative'
  }
];

export const userStats = {
  totalCourses: 3,
  completedCourses: 0,
  totalHours: 50,
  streak: 7,
  certificates: 0,
  rank: 'Advanced Learner'
};
