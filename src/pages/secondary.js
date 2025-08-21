import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Users,
  Award,
  Play,
  ChevronRight,
  Menu,
  X,
  Star,
  Calendar,
  Clock,
  Check,
  ArrowRight,
  Target,
  Eye,
  Heart,
  Shield,
  Zap,
  Globe,
  MessageSquare,
  BarChart3,
  FileText,
  Video,
  Smartphone,
  Cloud,
  Lock,
  HeadphonesIcon,
  TrendingUp,
  Users2,
  BookMarked,
  Lightbulb,
  Rocket,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

// Router simulation for artifact environment
const Router = ({ children }) => children;
const Route = ({ path, element, exact }) => element;
const Routes = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(
    window.location.hash || "#home"
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const routes = {
    "#home": <HomePage />,
    "#features": <FeaturesPage />,
    "#pricing": <PricingPage />,
    "#about": <AboutPage />,
    "#contact": <ContactPage />,
  };

  return routes[currentPath] || <HomePage />;
};

const Link = ({ to, children, className, onClick }) => (
  <a
    href={to}
    className={className}
    onClick={(e) => {
      e.preventDefault();
      window.location.hash = to;
      if (onClick) onClick();
    }}
  >
    {children}
  </a>
);

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(
    window.location.hash || "#home"
  );
  const navigate = useNavigate();

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "Features", path: "#features" },
    { name: "Pricing", path: "#pricing" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              EduFlow
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-200 ${
                  currentPath === item.path
                    ? "text-pink-600"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="#login"
              className="text-pink-600 hover:text-pink-700 font-medium transition-colors"
            >
              Sign In
            </Link>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              DEMO
            </button>
           
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 transition-colors ${
                  currentPath === item.path
                    ? "text-pink-600"
                    : "text-gray-400 hover:text-pink-600"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t">
              <Link
                to="#login"
                className="block py-2 text-pink-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-full mt-2">
                DEMO
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">EduFlow</span>
          </div>
          <p className="text-gray-400">
            Empowering education through innovative technology solutions.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link
                to="#features"
                className="hover:text-white transition-colors"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="#pricing"
                className="hover:text-white transition-colors"
              >
                Pricing
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Security
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Updates
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <Link
                to="#contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Training
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="#about" className="hover:text-white transition-colors">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} EduFlow. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Home Page Component
const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "John Smith",
      role: "Computer Science Teacher",
      content:
        "This platform has revolutionized how I teach. My students are more engaged than ever!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "High School Principal",
      content:
        "The analytics and reporting features help us track student progress effectively.",
      rating: 5,
    },
    {
      name: "Michael Brown",
      role: "Grade 10 Student",
      content:
        "I love how interactive the lessons are. Learning has become so much fun!",
      rating: 5,
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Students" },
    { number: "2K+", label: "Educators" },
    { number: "500+", label: "Schools" },
    { number: "98%", label: "Success Rate" },
  ];

  const quickFeatures = [
    {
      icon: BookOpen,
      title: "Interactive Lessons",
      description: "Engage students with multimedia content and activities",
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Foster teamwork with discussion forums and group projects",
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Monitor student performance with detailed analytics",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
                Learning Experience
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              EduFlow is the modern learning management system that empowers
              educators and engages students with interactive content, smart
              analytics, and seamless collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#pricing"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                Start Free Trial
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-pink-300 transition-all duration-200 flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose EduFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the key features that make learning engaging and
              effective
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="#features"
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-semibold"
            >
              View All Features
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by educators and students worldwide
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-12">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-6">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Classroom?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join thousands of educators who are already using EduFlow to create
            engaging learning experiences.
          </p>
          <Link
            to="#pricing"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-block"
          >
            Start Your Free Trial Today
          </Link>
        </div>
      </section>
    </div>
  );
};

// Features Page Component
const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Features", icon: Globe },
    { id: "teaching", name: "Teaching", icon: BookOpen },
    { id: "collaboration", name: "Collaboration", icon: Users },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "management", name: "Management", icon: Shield },
  ];

  const features = [
    {
      category: "teaching",
      icon: BookOpen,
      title: "Interactive Lessons",
      description:
        "Create engaging multimedia lessons with videos, animations, and interactive elements.",
      benefits: [
        "Drag-and-drop lesson builder",
        "Rich media support",
        "Interactive quizzes",
        "Real-time engagement tracking",
      ],
    },
    {
      category: "teaching",
      icon: Video,
      title: "Live Virtual Classrooms",
      description:
        "Host live sessions with video conferencing, screen sharing, and real-time collaboration.",
      benefits: [
        "HD video streaming",
        "Screen sharing",
        "Virtual whiteboards",
        "Session recording",
      ],
    },
    {
      category: "collaboration",
      icon: Users,
      title: "Discussion Forums",
      description:
        "Foster meaningful discussions with threaded conversations and peer-to-peer learning.",
      benefits: [
        "Threaded discussions",
        "Peer moderation",
        "File sharing",
        "Mobile notifications",
      ],
    },
    {
      category: "collaboration",
      icon: MessageSquare,
      title: "Group Projects",
      description:
        "Facilitate teamwork with collaborative workspaces and project management tools.",
      benefits: [
        "Shared workspaces",
        "Task assignment",
        "Progress tracking",
        "Version control",
      ],
    },
    {
      category: "analytics",
      icon: BarChart3,
      title: "Learning Analytics",
      description:
        "Track student progress with detailed insights and performance metrics.",
      benefits: [
        "Performance dashboards",
        "Learning path analysis",
        "Predictive insights",
        "Custom reports",
      ],
    },
    {
      category: "analytics",
      icon: TrendingUp,
      title: "Assessment Tools",
      description:
        "Create and grade assessments with automated scoring and detailed feedback.",
      benefits: [
        "Auto-grading",
        "Plagiarism detection",
        "Rubric-based scoring",
        "Detailed feedback",
      ],
    },
    {
      category: "management",
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "Automated timetables and assignment deadlines that sync across all devices.",
      benefits: [
        "Auto-scheduling",
        "Conflict detection",
        "Calendar integration",
        "Reminder notifications",
      ],
    },
    {
      category: "management",
      icon: Shield,
      title: "Security & Privacy",
      description:
        "Enterprise-grade security with GDPR compliance and data protection.",
      benefits: [
        "End-to-end encryption",
        "GDPR compliance",
        "Role-based access",
        "Audit trails",
      ],
    },
    {
      category: "teaching",
      icon: Smartphone,
      title: "Mobile Learning",
      description:
        "Access learning materials anywhere with our responsive mobile platform.",
      benefits: [
        "Native mobile apps",
        "Offline access",
        "Push notifications",
        "Mobile-optimized content",
      ],
    },
    {
      category: "management",
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Reliable cloud hosting with 99.9% uptime and automatic backups.",
      benefits: [
        "99.9% uptime",
        "Auto-scaling",
        "Daily backups",
        "CDN acceleration",
      ],
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((feature) => feature.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
                Modern Education
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create engaging learning experiences, track
              progress, and foster collaboration in one comprehensive platform.
            </p>
          </div>

          {/* Feature Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-200 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Experience All Features with a Free Trial
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Try EduFlow risk-free for 30 days and see how it transforms your
            teaching experience.
          </p>
          <Link
            to="#pricing"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
};

// Pricing Page Component
const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual educators getting started",
      price: { monthly: 19, annual: 15 },
      features: [
        "Up to 20 students",
        "Basic lesson builder",
        "Discussion forums",
        "Basic analytics",
        "Email support",
        "Mobile app access",
        "5GB storage",
      ],
      popular: false,
      color: "gray",
    },
    {
      name: "Professional",
      description: "Ideal for active educators and small schools",
      price: { monthly: 49, annual: 39 },
      features: [
        "Up to 300 students",
        "Advanced lesson builder",
        "Advanced analytics",
        "Priority support",
        "Mobile app access",
        "50GB storage",
        "Custom branding",
        "Assessment tools",
      ],
      popular: true,
      color: "pink",
    },
    {
      name: "Enterprise",
      description: "Comprehensive solution for large institutions",
      price: { monthly: 99, annual: 79 },
      features: [
        "Unlimited students",
        "Full feature access",
        "Custom integrations",
        "Live virtual classrooms",
        "Advanced security",
        "Dedicated support",
        "White-label solution",
        "Unlimited storage",
        "Custom training",
        "API access",
        "SLA guarantee",
      ],
      popular: false,
      color: "purple",
    },
  ];

  const faqs = [
    {
      question: "Can I change my plan at any time?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, all plans come with a 30-day free trial. No credit card required to start.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, Paystack, and bank transfers for enterprise plans.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use enterprise-grade encryption and comply with GDPR, COPPA, and other privacy regulations.",
    },
    {
      question: "Do you offer discounts for educational institutions?",
      answer:
        "Yes, we offer special pricing for schools aand institutions. Contact our sales team for a custom quote.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent block">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your educational needs. All plans
              include a 30-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span
                className={`font-medium ${
                  !isAnnual ? "text-pink-600" : "text-gray-500"
                }`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  isAnnual ? "bg-pink-600" : "bg-gray-300"
                }`}
              >
                <div
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    isAnnual ? "transform translate-x-8" : ""
                  }`}
                />
              </button>
              <span
                className={`font-medium ${
                  isAnnual ? "text-pink-600" : "text-gray-500"
                }`}
              >
                Annual
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-pink-500 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /month {isAnnual && "billed annually"}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
                      plan.popular
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg transform hover:scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Start Free Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Compare All Features
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">
                    Starter
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">
                    Professional
                  </th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Student Capacity",
                    starter: "50",
                    professional: "200",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Storage",
                    starter: "5GB",
                    professional: "50GB",
                    enterprise: "Unlimited",
                  },
                  {
                    feature: "Live Virtual Classrooms",
                    starter: "✗",
                    professional: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Advanced Analytics",
                    starter: "✗",
                    professional: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "Custom Branding",
                    starter: "✗",
                    professional: "✓",
                    enterprise: "✓",
                  },
                  {
                    feature: "API Access",
                    starter: "✗",
                    professional: "✗",
                    enterprise: "✓",
                  },
                  {
                    feature: "White-label Solution",
                    starter: "✗",
                    professional: "✗",
                    enterprise: "✓",
                  },
                  {
                    feature: "Priority Support",
                    starter: "✗",
                    professional: "✓",
                    enterprise: "✓",
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-6 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">
                      {row.starter}
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">
                      {row.professional}
                    </td>
                    <td className="text-center py-4 px-6 text-gray-600">
                      {row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join thousands of educators who trust EduFlow for their teaching
            needs.
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200">
            Start Your Free Trial
          </button>
        </div>
      </section>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  const team = [
    {
      name: " Musa Dauda",
      role: "CEO & Co-Founder",
      image: "👨‍💻", 
      bio: "Former educator with 15 years of teaching experience, passionate about transforming education through technology.",
    },
    {
      name: " Abubakar Adam ",
      role: "CTO & Co-Founder",
      image: "👨‍💻",
      bio: "Tech innovator with expertise in educational technology and scalable platform development.",
    },
    {
      name: " Isiyaku Isiyaku Ibrahim ",
      role: "Head of Product",
      image: "👨‍💻",
      bio: "UX expert focused on creating intuitive learning experiences that engage students and empower educators.",
    },
    {
      name: " Abubakar Abdulkarim ",
      role: "Lead Developer",
      image: "👨‍💻",
      bio: "Full-stack developer specializing in educational platforms and learning management systems.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Student-Centered",
      description:
        "Every decision we make is focused on improving student learning outcomes and engagement.",
    },
    {
      icon: Heart,
      title: "Educator Empowerment",
      description:
        "We believe in giving educators the tools they need to inspire and teach effectively.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We continuously innovate to stay ahead of educational trends and technology.",
    },
    {
      icon: Users2,
      title: "Community",
      description:
        "Building a supportive community of educators, students, and lifelong learners.",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Students Served" },
    { number: "2,000+", label: "Educators" },
    { number: "500+", label: "Schools" },
    { number: "10+", label: "Countries" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                EduFlow
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize education by making learning
              more engaging, accessible, and effective for students and
              educators worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower educators with innovative technology that transforms
                traditional learning into engaging, interactive experiences. We
                believe every student deserves access to quality education that
                adapts to their unique learning style.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                A world where technology seamlessly integrates with education to
                create personalized, engaging learning experiences that prepare
                students for success in the digital age while maintaining the
                human connection that's essential to learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600">
              Making a difference in education worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate educators and technologists working together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="text-xl leading-relaxed mb-8">
              EduFlow was born from a simple observation: traditional education
              methods weren't keeping pace with how students learn in the
              digital age. Our founders, Sarah and Michael, met at an education
              technology conference in 2020, where they discovered their shared
              passion for transforming learning experiences.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Sarah, a veteran educator with 15 years of classroom experience,
              had witnessed firsthand the challenges teachers face in engaging
              students with traditional methods. Michael, a seasoned technology
              leader, had the technical expertise to build solutions that could
              scale globally while maintaining the personal touch that makes
              learning effective.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Together, they envisioned a platform that would bridge the gap
              between technology and pedagogy, creating tools that enhance
              rather than replace the human elements of education. After months
              of research, user interviews, and prototype development, EduFlow
              was launched in early 2021.
            </p>

            <p className="text-lg leading-relaxed">
              Today, EduFlow serves over 50,000 students and 2,000 educators
              across 50 countries, but our mission remains the same: to make
              learning more engaging, accessible, and effective for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Be part of the education revolution. Start transforming your
            classroom today.
          </p>
          <Link
            to="#pricing"
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully! We'll get back to you soon.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["support@eduflow.com", "sales@eduflow.com"],
      description: "Get in touch for support or sales inquiries",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+234 111 123-4567", "+234 211 123-4568"],
      description: "Available Monday-Friday, 9AM-6PM EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Education Street", "Tech City, TC 12345"],
      description: "Our headquarters in the heart of Tech City",
    },
    {
      icon: HeadphonesIcon,
      title: "Live Chat",
      details: ["Available 24/7", "Instant support"],
      description: "Chat with our support team in real-time",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can start using EduFlow immediately with our 30-day free trial. No credit card required.",
    },
    {
      question: "Do you offer training and onboarding?",
      answer:
        "Yes! We provide comprehensive training materials, webinars, and dedicated onboarding support.",
    },
    {
      question: "Can I integrate EduFlow with my existing systems?",
      answer:
        "EduFlow integrates with popular LMS platforms, Google Workspace, Microsoft 365, and many other tools.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer email support for all users, priority support for Professional plans, and dedicated support for Enterprise customers.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about EduFlow? We're here to help! Reach out to our
              team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <div className="mb-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-pink-600 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="sales">Sales Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about EduFlow
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="#home" element={<HomePage />} />
            <Route path="#features" element={<FeaturesPage />} />
            <Route path="#pricing" element={<PricingPage />} />
            <Route path="#about" element={<AboutPage />} />
            <Route path="#contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
