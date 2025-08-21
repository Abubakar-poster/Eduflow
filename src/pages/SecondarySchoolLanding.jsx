import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Check, Users, BookOpen, DollarSign, BarChart3, 
  Smartphone, Shield, ArrowRight, Play, Star, Award, 
  TrendingUp, Clock, Globe, ChevronRight, Quote, 
  Building, GraduationCap, UserCheck, Calendar, CheckCircle2,
  Zap, Target, Briefcase, Phone, Mail, MapPin
} from 'lucide-react';

const SchoolManagementLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoading, setIsLoading] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleButtonClick = (buttonId) => {
    setIsLoading(prev => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setIsLoading(prev => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  const features = [
    {
      icon: <Users className="w-7 h-7 text-white" />,
      title: "Advanced Student Information System",
      description: "Comprehensive student management with academic tracking, behavioral monitoring, medical records, and seamless family communication integration.",
      benefits: ["Real-time academic progress tracking", "Automated report generation", "Enhanced parent engagement portal"]
    },
    {
      icon: <UserCheck className="w-7 h-7 text-white" />,
      title: "Human Resources Excellence", 
      description: "Complete staff lifecycle management including strategic recruitment, performance evaluation, professional development pathways, and payroll integration.",
      benefits: ["Advanced performance analytics", "Intelligent scheduling automation", "Comprehensive compliance tracking"]
    },
    {
      icon: <GraduationCap className="w-7 h-7 text-white" />,
      title: "Curriculum & Assessment Engine",
      description: "Standards-aligned curriculum planning, sophisticated assessment creation, integrated gradebook management, and comprehensive learning outcome analytics.",
      benefits: ["National standards alignment", "Automated assessment grading", "Detailed learning analytics"]
    },
    {
      icon: <DollarSign className="w-7 h-7 text-white" />,
      title: "Financial Management Suite",
      description: "Complete financial oversight including strategic budgeting, automated fee collection, expense tracking, financial reporting, and audit compliance.",
      benefits: ["Advanced budget forecasting", "Automated billing systems", "Regulatory compliance reports"]
    },
    {
      icon: <Calendar className="w-7 h-7 text-white" />,
      title: "Operations & Communication Hub",
      description: "Centralized communication platform with multi-channel messaging, comprehensive event management, and strategic stakeholder engagement tools.",
      benefits: ["Multi-channel communication", "Advanced event coordination", "Emergency notification systems"]
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-white" />,
      title: "Business Intelligence Platform",
      description: "Advanced analytics and reporting with predictive insights, comprehensive performance dashboards, and data-driven decision support systems.",
      benefits: ["Predictive analytics engine", "Custom dashboard creation", "Detailed ROI tracking"]
    }
  ];

  const pricingPlans = [
    {
      name: "Professional",
      price: "₦149,000",
      originalPrice: "₦199,000",
      period: "per month",
      description: "Comprehensive solution for growing educational institutions",
      features: [
        "Support for up to 1,000 students",
        "Complete Student Information System",
        "Advanced financial management suite",
        "Comprehensive staff management system",
        "Parent and student portals",
        "Native mobile applications",
        "Advanced reporting and analytics",
        "Third-party API integrations",
        "Priority email support",
        "Professional training and onboarding"
      ],
      popular: false,
      ctaText: "Start 30-Day Free Trial",
      savings: "Save ₦50,000/month"
    },
    {
      name: "Enterprise",
      price: "₦299,000",
      originalPrice: "₦399,000",
      period: "per month",
      description: "Advanced solution for large educational institutions",
      features: [
        "Unlimited students and staff",
        "Multi-campus management system",
        "Custom workflow automation",
        "Advanced business intelligence",
        "White-label customization",
        "Enterprise third-party integrations",
        "Dedicated account manager",
        "24/7 priority phone support",
        "On-site implementation training",
        "Regular compliance and security audits"
      ],
      popular: true,
      ctaText: "Schedule Executive Consultation",
      savings: "Save ₦100,000/month"
    },
    {
      name: "Education District",
      price: "Custom Pricing",
      originalPrice: null,
      period: "",
      description: "Scalable solution for district-wide deployment",
      features: [
        "Unlimited educational institutions",
        "District-wide analytics and reporting",
        "Custom feature development",
        "Enterprise security compliance",
        "Dedicated cloud infrastructure",
        "Professional services team",
        "Strategic consulting services",
        "Executive-level support",
        "Custom SLA agreements",
        "Full regulatory compliance support"
      ],
      popular: false,
      ctaText: "Contact Sales Team",
      savings: "Volume pricing available"
    }
  ];

  const teamMembers = [
    {
      name: "Mr Abubakar Abdulkarim Aliyu",
      role: "Chief Technology Officer",
      education: "PhD Computer Science, MIT",
      experience: "15+ years EdTech leadership",
      bio: "Former CTO at leading EdTech companies. Specialized in scalable educational platforms and advanced data architecture.",
      image: "https://files.fm/u/6nnjnn2vuh",
      expertise: ["System Architecture", " Software development", "EdTech Strategy"]
    },
    {
      name: " Hassan Musa ", 
      role: "Lead Software Architect",
      education: "MS Software Engineering, Stanford",
      experience: "12+ years enterprise development",
      bio: "Expert in microservices architecture and cloud-native solutions. Previously at Google and Microsoft.",
      image: "INSERT_TEAM_MEMBER_2_IMAGE_URL_HERE",
      expertise: ["Microservices", "Cloud Architecture", "Enterprise Security"]
    },
    {
      name: " Salisu Sani",
      role: "Senior Full-Stack Engineer", 
      education: "BS Computer Science, UC Berkeley",
      experience: "10+ years full-stack development",
      bio: "Specialized in React, Node.js, and modern web technologies. Expert in user experience optimization and performance.",
      image: "INSERT_TEAM_MEMBER_3_IMAGE_URL_HERE",
      expertise: ["React/Node.js", "UX Engineering", "Performance Optimization"]
    },
    {
      name: " Abdullahi Hassan",
      role: "DevOps & Infrastructure Lead",
      education: "MS Information Systems, Carnegie Mellon",
      experience: "8+ years cloud infrastructure",
      bio: "AWS certified solutions architect ensuring 99.99% uptime and enterprise-grade security compliance.",
      image: "INSERT_TEAM_MEMBER_4_IMAGE_URL_HERE",
      expertise: ["AWS/Azure", "Kubernetes", "Security Compliance"]
    },
    {
      name: " Sani Salisu",
      role: "Mobile Development Lead",
      education: "BS Computer Engineering, Georgia Tech",
      experience: "9+ years mobile development",
      bio: "Cross-platform mobile expert with expertise in React Native and native iOS/Android development.",
      image: "INSERT_TEAM_MEMBER_5_IMAGE_URL_HERE",
      expertise: ["React Native", "iOS/Android", "Mobile UX"]
    },
    {
      name: " Isiyaku Abdullahi",
      role: "Quality Assurance Director",
      education: "MS Software Quality, ASU",
      experience: "11+ years QA leadership",
      bio: "Ensures enterprise-grade quality through automated testing, security auditing, and comprehensive compliance validation.",
      image: "INSERT_TEAM_MEMBER_6_IMAGE_URL_HERE",
      expertise: ["Test Automation", "Security Auditing", "Compliance"]
    }
  ];

  const testimonials = [
    {
      quote: "EduPro transformed our district's operations completely. We've achieved a 40% improvement in administrative efficiency and significantly enhanced parent engagement across all campuses.",
      author: "Dr. Sarah Williams",
      title: "Superintendent, Metro School District",
      company: "1,200+ students across 5 campuses",
      rating: 8
    },
    {
      quote: "The financial management module alone has saved us over ₦12 million annually through automated processes and superior budget oversight capabilities.",
      author: "Mark Johnson",
      title: "Chief Financial Officer, Excellence Academy",
      company: "Private K-12 Institution",
      rating: 7
    },
    {
      quote: "Implementation was seamless, and the return on investment was evident within the first semester. Our teachers love the integrated gradebook and assessment system.",
      author: "Lisa Chen",
      title: "Principal, Innovation High School",
      company: "800+ students",
      rating: 9
    }
  ];

  const stats = [
    { number: "500+", label: "Educational Institutions", icon: <Building className="w-6 h-6" /> },
    { number: "250K+", label: "Active Students", icon: <Users className="w-6 h-6" /> },
    { number: "99.99%", label: "System Uptime", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Enterprise Support", icon: <Clock className="w-6 h-6" /> }
  ];

  const certifications = [
    "SOC 2 Type II Certified",
    "FERPA Compliant",
    "GDPR Ready",
    "ISO 27001 Certified"
  ];

  const FeatureCard = ({ feature, index }) => (
    <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-700 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
          {feature.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            {feature.description}
          </p>
          <ul className="space-y-3">
            {feature.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const PricingCard = ({ plan, index }) => (
    <div className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 transform hover:-translate-y-2 ${
      plan.popular ? 'border-blue-300 ring-4 ring-blue-50 scale-105' : 'border-gray-100 hover:border-blue-200'
    }`}>
      {plan.popular && (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white px-8 py-3 rounded-full text-sm font-bold flex items-center shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            Most Popular Choice
          </div>
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>
        <div className="flex items-baseline mb-2">
          {plan.price === "Custom Pricing" ? (
            <span className="text-4xl font-bold text-gray-900">Custom</span>
          ) : (
            <>
              <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-500 ml-2 text-lg">{plan.period}</span>
            </>
          )}
        </div>
        {plan.originalPrice && (
          <div className="flex items-center space-x-3 mb-3">
            <span className="text-lg text-gray-400 line-through">
              {plan.originalPrice}
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              {plan.savings}
            </span>
          </div>
        )}
        <p className="text-gray-600 leading-relaxed">{plan.description}</p>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-gray-600">
            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
            <span className="text-sm leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <button 
        onClick={() => handleButtonClick(`pricing-${index}`)}
        disabled={isLoading[`pricing-${index}`]}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${
          plan.popular
            ? 'bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white hover:shadow-xl shadow-lg'
            : 'bg-gray-50 text-gray-900 hover:bg-gray-100 border-2 border-gray-200 hover:border-gray-300'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {isLoading[`pricing-${index}`] ? 'Processing Request...' : plan.ctaText}
      </button>
    </div>
  );

  const TeamMember = ({ member, index }) => (
    <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <div className="flex items-start space-x-6">
        <div className="flex-shrink-0">
          <div className="w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-md">
            <img 
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiIGZpbGw9IiNmM2Y0ZjYiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSI4MCIgcj0iMzAiIGZpbGw9IiM5Y2EzYWYiLz48ZWxsaXBzZSBjeD0iMTAwIiBjeT0iMTQwIiByeD0iNDAiIHJ5PSIzMCIgZmlsbD0iIzljYTNhZiIvPjwvc3ZnPg==`;
              }}
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {member.name}
          </h3>
          <p className="text-blue-600 font-semibold text-sm mb-3">
            {member.role}
          </p>
          <div className="space-y-1 text-xs text-gray-500 mb-4">
            <div className="font-medium">{member.education}</div>
            <div>{member.experience}</div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {member.bio}
          </p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const TestimonialCard = ({ testimonial, index }) => (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1">
      <div className="flex items-start mb-6">
        <Quote className="w-10 h-10 text-blue-200 mr-4 flex-shrink-0" />
        <div className="flex-1">
          <div className="flex mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
            "{testimonial.quote}"
          </p>
        </div>
      </div>
      <div className="border-t border-gray-100 pt-6">
        <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
        <div className="text-blue-600 text-sm font-semibold">{testimonial.title}</div>
        <div className="text-gray-500 text-sm">{testimonial.company}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">EduPro</span>
                <span className="ml-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-semibold">Enterprise</span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              {['Features', 'Pricing', 'Team', 'Testimonials', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 font-semibold transition-colors">
                Login
              </button>
              <button 
                onClick={() => handleButtonClick('header-cta')}
                disabled={isLoading['header-cta']}
                className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50"
              >
                {isLoading['header-cta'] ? 'Loading...' : 'Start Free Trial'}
              </button>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-blue-700 text-sm font-bold shadow-md border border-blue-100">
                  <Award className="w-4 h-4 mr-2" />
                  #1 Rated School Management System in Nigeria
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Enterprise-Grade
                  <span className="block bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 bg-clip-text text-transparent">
                    School Management
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Transform your educational institution with our comprehensive, cloud-native platform. Trusted by 500+ schools across Nigeria to streamline operations, enhance learning outcomes, and drive institutional excellence.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleButtonClick('hero-primary')}
                  disabled={isLoading['hero-primary']}
                  className="group bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-50 shadow-lg"
                >
                  {isLoading['hero-primary'] ? 'Starting Trial...' : 'Start 30-Day Free Trial'}
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-xl font-bold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-sm">
                  <Play className="w-6 h-6 mr-3" />
                  Watch Demo
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center space-y-3 bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center justify-center text-blue-600 mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="INSERT_YOUR_HERO_IMAGE_URL_HERE"
                  alt="EduPro Dashboard"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y5ZmFmYjtzdG9wLW9wYWNpdHk6MSIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlZmY2ZmY7c3RvcC1vcGFjaXR5OjEiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9InVybCgjZ3JhZGllbnQpIiByeD0iMTYiLz48cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSI1MjAiIGhlaWdodD0iMzIwIiBmaWxsPSJ3aGl0ZSIgcng9IjgiLz48cGF0aCBkPSJNNjAgODBIMTgwVjEyMEg2MFoiIGZpbGw9IiMzYjgyZjYiLz48cGF0aCBkPSJNMjAwIDgwSDMyMFYxMjBIMjAwWiIgZmlsbD0iIzkzYzVmZCIvPjxwYXRoIGQ9Ik0zNDAgODBINDYwVjEyMEgzNDBaIiBmaWxsPSIjZGJlYWZlIi8+PHBhdGggZD0iTTYwIDE0MEgzMDBWMjgwSDYwWiIgZmlsbD0iI2Y5ZmFmYiIvPjxwYXRoIGQ9Ik0zMjAgMTQwSDU0MFYyMDBIMzIwWiIgZmlsbD0iIzNiODJmNiIvPjxwYXRoIGQ9Ik0zMjAgMjIwSDU0MFYyODBIMzIwWiIgZmlsbD0iIzkzYzVmZCIvPjx0ZXh0IHg9IjMwMCIgeT0iMzMwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMzc0MTUxIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iNjAwIj5FZHVQcm8gRW50ZXJwcmlzZSBEYXNoYm9hcmQ8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-2xl blur-3xl opacity-40 -z-10 transform scale-105"></div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-20 pt-10 border-t border-gray-200">
            <div className="flex flex-wrap items-center justify-center gap-12 text-sm text-gray-600">
              <span className="font-bold text-gray-800 text-lg">Trusted & Certified:</span>
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-blue-700 text-sm font-bold mb-6 shadow-md">
              <Zap className="w-4 h-4 mr-2" />
              Comprehensive Platform
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Everything Your Institution Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Integrated modules designed to work seamlessly together, providing complete operational oversight and educational excellence for modern institutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full text-blue-700 text-sm font-bold mb-6">
              <Target className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Trusted by Educational Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how leading educational institutions across Nigeria are transforming their operations and improving outcomes with EduPro.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full text-blue-700 text-sm font-bold mb-6 shadow-md">
              <DollarSign className="w-4 h-4 mr-2" />
              Transparent Pricing
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Investment Plans for Every Institution
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose the solution that fits your needs. All plans include comprehensive implementation support, professional training, and ongoing maintenance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} index={index} />
            ))}
          </div>

          <div className="bg-white rounded-2xl p-10 text-center shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Enterprise Features Included</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-600">
              <div className="flex items-center justify-center space-x-3 bg-gray-50 p-4 rounded-xl">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="font-semibold">99.99% SLA Guarantee</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-gray-50 p-4 rounded-xl">
                <Globe className="w-6 h-6 text-green-500" />
                <span className="font-semibold">Global Data Centers</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-gray-50 p-4 rounded-xl">
                <Clock className="w-6 h-6 text-green-500" />
                <span className="font-semibold">24/7 Expert Support</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-gray-50 p-4 rounded-xl">
                <Award className="w-6 h-6 text-green-500" />
                <span className="font-semibold">Compliance Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 rounded-full text-blue-700 text-sm font-bold mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              Expert Leadership
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">
              Meet Our Engineering Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our team combines deep educational expertise with world-class technology experience from leading institutions and Fortune 500 companies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} member={member} index={index} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-12 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Join Our Growing Team</h3>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                We're always looking for talented engineers, product managers, and education specialists to help shape the future of educational technology in Nigeria and beyond.
              </p>
              <button className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Ready to Transform Your Institution?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Join the growing community of educational institutions across Nigeria leveraging EduPro to streamline operations, improve outcomes, and prepare for the future of education.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button 
              onClick={() => handleButtonClick('cta-primary')}
              disabled={isLoading['cta-primary']}
              className="bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 shadow-lg"
            >
              {isLoading['cta-primary'] ? 'Starting Trial...' : 'Start Free 30-Day Trial'}
            </button>
            <button className="border-2 border-white text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg">
              Schedule Executive Demo
            </button>
          </div>

          <div className="text-blue-200 text-sm">
            <p className="text-lg">No credit card required • Full feature access • Implementation support included</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-3xl font-bold">EduPro</span>
                  <span className="ml-2 px-3 py-1 bg-blue-900 text-blue-300 text-xs rounded-full font-bold">Enterprise</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-8 text-lg">
                The leading cloud-native school management platform trusted by 500+ educational institutions across Nigeria. Empowering educators to focus on what matters most - student success.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+234 (0) 1 234 5678</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">sales@edupro.edu.ng</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300"> Kano State, Nigeria</span>
                </div>
              </div>
              <div className="mt-8 space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span>SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-green-400" />
                  <span>FERPA & GDPR Compliant</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Solutions</h3>
              <div className="space-y-4 text-gray-400">
                <a href="#features" className="block hover:text-blue-400 transition-colors font-medium">Student Information System</a>
                <a href="#features" className="block hover:text-blue-400 transition-colors font-medium">Financial Management</a>
                <a href="#features" className="block hover:text-blue-400 transition-colors font-medium">Human Resources</a>
                <a href="#features" className="block hover:text-blue-400 transition-colors font-medium">Analytics & Reporting</a>
                <a href="#features" className="block hover:text-blue-400 transition-colors font-medium">Mobile Applications</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Resources</h3>
              <div className="space-y-4 text-gray-400">
                <a href="#" className="block hover:text-blue-400 transition-colors font-medium">Implementation Guide</a>
                <a href="#" className="block hover:text-blue-400 transition-colors font-medium">Best Practices</a>
                <a href="#" className="block hover:text-blue-400 transition-colors font-medium">Training Resources</a>
                <a href="#" className="block hover:text-blue-400 transition-colors font-medium">API Documentation</a>
                <a href="#" className="block hover:text-blue-400 transition-colors font-medium">Security Overview</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6">Company</h3>
              <div className="space-y-4 text-gray-400">
                <a href="#team" className="block hover:text-blue-400 transition-colors font-medium">Leadership Team</a>
                <a href="#" className="block hover:text-blue-400 transition-colors font-medium">Careers</a>
                <a href="#" className="block hover:text-blue-400 transition-colors font-medium">Press & Media</a>
                <a href="#" className="block hover:text-blue-400 transition-colors font-medium">Partner Program</a>
                <a href="#contact" className="block hover:text-blue-400 transition-colors font-medium">Contact Sales</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-10">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="text-gray-400">
                © 2025 EduPro Enterprise. All rights reserved.
              </div>
              <div className="flex space-x-8 text-sm text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-colors font-medium">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors font-medium">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors font-medium">Security</a>
                <a href="#" className="hover:text-blue-400 transition-colors font-medium">Compliance</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SchoolManagementLanding;