import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'WHIPFLIP',
        description: "WhipFlip revolutionizes car selling with AI-driven damage detection, fair pricing, and a streamlined transaction HUB for an efficient online marketplace.",
        tools: ['Express', 'Next.js', 'MongoDB', 'MySql', 'Redis', 'AWS SES', 'AWS S3', 'Node Mailer', 'EC2', 'PM2', 'Nginx'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'ISRA',
        description: 'ISRA enables easy booking for stylists/pet groomers, with real-time confirmation, service comparison, and user reviews.',
        tools: ['React.js', 'Nest.js', "Google Maps", "Redis", "MySQL", 'TypeScript', "AWS S3", "Firebase", "Stripe", 'Replicate AI',],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'CASHDOCS',
        description: 'CashDocs streamlines doctor-patient interactions with secure registration, appointment booking, payment handling, and advanced search functionalities for optimal healthcare access.',
        tools: ['React.js', 'Nest.js', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'GOGO WASH',
        description: "Gogowash revolutionizes car wash scheduling with seamless online booking, tailored services, hassle-free payments, and real-time tracking, enhancing customer satisfaction and industry standards.",
        tools: ['Express', 'MongoDB', 'AWS SES', 'AWS S3', 'Node Mailer', 'EC2', 'PM2', 'Nginx'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Backend Developer',
    },
    {
        id: 5,
        name: 'L-CARD',
        description: "L-Card stands out as a leading digital business card management app, offering innovative features such as design suite, paper card scanner, QR code, video sharing, and analytics, honored as a top 3 Emerging Mobile App for Business at GMASA.",
        tools: ['React.js', 'Next.js'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Frontend Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },