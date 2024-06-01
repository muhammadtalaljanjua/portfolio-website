const projects = [
  {
    id: 1,
    projectName: "Affiliate Products Store",
    projectImage: "./assets/project-1.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Affiliate Store",
    projectKeyword3: "WooCommerce",
    detailImage: "https://ibb.co/SXTWDbV",
    projectDescription:
      "Explore our Affiliate Products Store, built on WordPress and featuring over 1500 top-rated affiliate products. Specializing in electronics, gaming, and computer accessories, our store offers unbeatable deals and quality items for tech enthusiasts.",
  },
  {
    id: 2,
    projectName: "Digital Agency Website",
    projectImage: "./assets/project-2.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Agency Website",
    projectKeyword3: "Elementor",
    projectDescription:
      "Welcome to our Digital Agency Website, crafted on WordPress to showcase the wide range of digital services offered by our company. From web to digital marketing, we provide comprehensive solutions to help your business thrive online.",
  },
  {
    id: 3,
    projectName: "Hardware Components Store",
    projectImage: "./assets/project-3.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "WooCommerce",
    projectKeyword3: "Elementor",
    projectDescription:
      "Visit our Hardware Components Store, where you'll find a vast selection of quality hardware parts and components. Perfect for DIY enthusiasts and professionals alike, our store offers everything you need to build and upgrade your tech projects.",
  },
  {
    id: 4,
    projectName: "Advocacy Website",
    projectImage: "./assets/project-4.png",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Advocacy Portfolio",
    projectDescription:
      "Join the movement on our Advocacy Website, dedicated to raising awareness and driving change for important social issues. Learn, engage, and take action with resources and information designed to empower and inspire.",
  },
  {
    id: 5,
    projectName: "Solar Solution Services",
    projectImage: "./assets/project-21.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Business Portfolio",
    projectDescription:
      "Discover sustainable energy options with our Solar Solution Services website. We provide comprehensive solar power solutions, from installation to maintenance, helping you harness the power of the sun for a greener future.",
  },
  {
    id: 6,
    projectName: "Women Clothing Store",
    projectImage: "./assets/project-6.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor",
    projectKeyword3: "WooCommerce",
    projectDescription:
      "Step into style with our clothing store for Women. Find the latest trends and timeless pieces in our collection, ensuring you look and feel your best for every occasion. Enjoy shopping with us for fashion that fits your life.",
  },
  {
    id: 7,
    projectName: "Logistics Company Website",
    projectImage: "./assets/project-7.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Logistics",
    projectDescription:
      "Welcome to our Logistics Company Website, your gateway to efficient transportation solutions. Explore our comprehensive services tailored to streamline your supply chain and meet your logistics needs with precision and reliability.",
  },
  {
    id: 8,
    projectName: "Courier Services Website",
    projectImage: "./assets/project-8.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor",
    projectKeyword3: "Courier Services",
    projectDescription:
      "Welcome to our Courier Services Website, your one-stop solution for reliable delivery needs. Explore our streamlined services designed to ensure prompt and secure delivery of your parcels, documents, and packages.",
  },
  {
    id: 9,
    projectName: "Cars Dealing Services",
    projectImage: "./assets/project-9.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Car Dealings",
    projectDescription:
      "Welcome to our Cars Dealing Services Website, your premier destination for automotive excellence. Explore our platform for a wide selection of high-quality vehicles, expert guidance, and seamless transactions.",
  },
  {
    id: 10,
    projectName: "Digital Marketing Services",
    projectImage: "./assets/project-10.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Digital Marketing",
    projectDescription:
      "Welcome to our Digital Marketing Website. Explore our range of services tailored to boost your online presence, drive traffic, and maximize conversions. With expert strategies, we're here to help your business thrive in the digital world.",
  },
  {
    id: 11,
    projectName: "Driving Test Services",
    projectImage: "./assets/project-11.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Driving Test",
    projectDescription:
      "Welcome to our Driving Test Booking Services. Explore our platform for seamless booking experiences tailored to your convenience. With us, scheduling your driving test is simple, efficient, and hassle-free, ensuring you're on the road to success.",
  },
  {
    id: 12,
    projectName: "IT Services Website",
    projectImage: "./assets/project-12.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "IT Services",
    projectDescription:
      "Welcome to our IT Services Website. Explore our comprehensive range of IT solutions designed to meet your business needs. From managed services to cybersecurity, we're here to optimize your technology infrastructure and drive success in the digital age.",
  },
  {
    id: 13,
    projectName: "Furniture Services Website",
    projectImage: "./assets/project-13.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Business Portfolio",
    projectDescription:
      "Welcome to our Furniture Services Website. Explore our wide range of furniture solutions designed to enhance your space. From stylish designs to durable pieces, we're here to provide quality and comfort for every room in your home.",
  },
  {
    id: 14,
    projectName: "Trucking Business Website",
    projectImage: "./assets/project-14.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor",
    projectKeyword3: "Business Portfolio",
    projectDescription:
      "Welcome to our Trucking Business Website. Explore our reliable transportation solutions tailored to meet your logistical needs. From efficient delivery services to expert logistics management, we're here to ensure smooth operations and timely deliveries.",
  },
  {
    id: 15,
    projectName: "Paints & Decoration Services",
    projectImage: "./assets/project-15.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Home Services",
    projectDescription:
      "Welcome to our Paints & Decoration Services website. Explore our comprehensive range of painting and decorating solutions designed to elevate your space. From premium paints to expert design advice, we're here to bring your vision to life with style.",
  },
  {
    id: 16,
    projectName: "Organization For Ecosystem",
    projectImage: "./assets/project-16.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor",
    projectKeyword3: "Organizational Portfolio",
    projectDescription:
      "Welcome to our Organization for Ecosystem website. Explore our initiatives dedicated to preserving and restoring ecosystems worldwide. From conservation projects to community engagement, we're committed to safeguarding the environment for future.",
  },
  {
    id: 17,
    projectName: "Restaurant Website",
    projectImage: "./assets/project-17.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Restaurant",
    projectDescription:
      "Welcome to our Restaurant Website. Explore our culinary delights and inviting ambiance, offering a diverse menu to tantalize your taste buds. From mouthwatering dishes to exceptional service, we're here to create memorable dining experiences for you.",
  },
  {
    id: 18,
    projectName: "Garage Door Services",
    projectImage: "./assets/project-18.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Business Portfolio",
    projectDescription:
      "Welcome to our Garage Door Services website. Explore our comprehensive solutions for all your garage door needs. From installations to repairs, our expert team ensures safety, security, and seamless functionality for your home or business.",
  },
  {
    id: 19,
    projectName: "Eye Care Services",
    projectImage: "./assets/project-19.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor",
    projectKeyword3: "Health Care",
    projectDescription:
      "Welcome to our Eye Care Services website. Explore our comprehensive solutions for your vision needs. From routine exams to advanced treatments, our expert team ensures personalized care for optimal eye health.",
  },
  {
    id: 20,
    projectName: "Photography Portfolio",
    projectImage: "./assets/project-20.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor Pro",
    projectKeyword3: "Photography",
    projectDescription:
      "Welcome to our Photography Portfolio. Explore our captivating imagery and artistic vision. From stunning portraits to breathtaking landscapes, our portfolio showcases the beauty of moments captured by our talented and passionate team.",
  },
  {
    id: 21,
    projectName: "Car Rental Website",
    projectImage: "./assets/project-5.jpg",
    projectKeyword1: "WordPress",
    projectKeyword2: "Elementor",
    projectKeyword3: "Car Rental",
    projectDescription:
      "Welcome to our Car Rental Website. Explore our diverse fleet of vehicles and flexible rental options. From compact cars to spacious SUVs, we provide convenient and reliable transportation solutions tailored to your needs.",
  },
];

export default projects;
