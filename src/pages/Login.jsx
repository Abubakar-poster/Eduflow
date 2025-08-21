import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  GraduationCap, Users, BookOpen, Shield, Eye, EyeOff, ArrowRight, 
  CheckCircle, AlertCircle, Award, Lock, Mail, Settings, Building,
  TrendingUp, Activity, ChevronRight, Server, Fingerprint
} from 'lucide-react';

// Constants
const AUTHENTICATION_STEPS = {
  ROLE_SELECTION: 1,
  CREDENTIALS: 2,
  AUTHENTICATION: 3
};

const MESSAGE_TYPES = {
  ERROR: 'error',
  SUCCESS: 'success',
  INFO: 'info',
  WARNING: 'warning'
};

const PASSWORD_REQUIREMENTS = {
  MIN_LENGTH: 8,
  MIN_STRENGTH: 2
};

const ANIMATION_CONFIG = {
  PARTICLE_COUNT: 25,
  PARTICLE_SPEED: 0.2,
  CANVAS_OPACITY: 0.03
};

// Default login credentials for demo purposes
const DEFAULT_CREDENTIALS = {
  student: {
    email: 'demo.student@university.edu.ng',
    password: 'Student123!',
    displayName: 'Demo Student'
  },
  faculty: {
    email: 'prof.demo@university.edu.ng',
    password: 'Faculty123!',
    displayName: 'Prof. Demo'
  },
  parent: {
    email: 'parent.demo@gmail.com',
    password: 'Parent123!',
    displayName: 'Demo Parent'
  },
  admin: {
    email: 'admin.demo@university.edu.ng',
    password: 'Admin123!',
    displayName: 'System Admin'
  }
};

// Role configuration
const ROLES_CONFIG = [
  {
    id: 'student',
    name: 'Student Portal',
    icon: GraduationCap,
    description: 'Access comprehensive academic resources and track your educational journey',
    emailDomain: 'student.edu.ng',
    accessLevel: 'Standard Access',
    securityTier: 'standard',
    features: ['Course Management', 'Grade Analytics', 'Digital Library', 'Assignment Hub'],
    gradient: 'from-blue-600 to-blue-700'
  },
  {
    id: 'faculty',
    name: 'Faculty Dashboard',
    icon: BookOpen,
    description: 'Comprehensive teaching management with advanced analytics',
    emailDomain: 'faculty.edu.ng',
    accessLevel: 'Faculty Access',
    securityTier: 'enhanced',
    features: ['Class Management', 'Assessment Tools', 'Analytics Suite', 'Grade Center'],
    gradient: 'from-emerald-600 to-emerald-700'
  },
  {
    id: 'parent',
    name: 'Parent Portal',
    icon: Users,
    description: 'Monitor academic progress and stay connected with education',
    emailDomain: 'parent.com',
    accessLevel: 'Guardian Access',
    securityTier: 'standard',
    features: ['Progress Monitoring', 'Communication', 'Event Calendar', 'Financial Overview'],
    gradient: 'from-purple-600 to-purple-700'
  },
  {
    id: 'admin',
    name: 'Admin Console',
    icon: Settings,
    description: 'Enterprise-grade administrative control and system oversight',
    emailDomain: 'admin.edu.ng',
    accessLevel: 'Administrative Access',
    securityTier: 'enterprise',
    features: ['System Administration', 'User Management', 'Analytics', 'Security Center'],
    gradient: 'from-slate-700 to-slate-800'
  }
];

const SYSTEM_METRICS = [
  { 
    id: 'status',
    label: 'System Status', 
    value: 'Operational', 
    icon: Server,
    status: 'success',
    detail: '99.99% Uptime'
  },
  { 
    id: 'institutions',
    label: 'Active Institutions', 
    value: '850+', 
    icon: Building,
    status: 'info',
    detail: 'Globally Trusted'
  },
  { 
    id: 'security',
    label: 'Security Certification', 
    value: 'SOC 2 Type II', 
    icon: Shield,
    status: 'success',
    detail: 'Enterprise Grade'
  }
];

const COMPLIANCE_FEATURES = [
  { name: 'FERPA Compliant', status: 'verified' },
  { name: 'GDPR Ready', status: 'verified' },
  { name: 'SOC 2 Type II', status: 'certified' },
  { name: '24/7 Support', status: 'available' }
];

// Custom hooks
const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return currentTime;
};

const useAnimatedCanvas = (canvasRef) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    const particles = Array.from({ length: ANIMATION_CONFIG.PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      dx: (Math.random() - 0.5) * ANIMATION_CONFIG.PARTICLE_SPEED,
      dy: (Math.random() - 0.5) * ANIMATION_CONFIG.PARTICLE_SPEED,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.1
    }));
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.dx;
        particle.y += particle.dy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;
        
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity * ANIMATION_CONFIG.CANVAS_OPACITY})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);
};

const useMessageTimer = (message, setMessage) => {
  useEffect(() => {
    if (!message.text) return;
    
    const timer = setTimeout(() => {
      setMessage({ type: '', text: '' });
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [message.text, setMessage]);
};

// Utility functions
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const calculatePasswordStrength = (password) => {
  const checks = [
    password.length >= PASSWORD_REQUIREMENTS.MIN_LENGTH,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password),
    /[!@#$%^&*(),.?":{}|<>]/.test(password)
  ];
  
  return checks.filter(Boolean).length;
};

const getPasswordStrengthLabel = (strength) => {
  const labels = ['Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];
  return labels[strength] || 'Very Weak';
};

const getPasswordStrengthColor = (strength) => {
  const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];
  return colors[strength] || 'bg-red-500';
};

// Components
const SystemStatusBar = ({ currentTime }) => (
  <div className="flex items-center justify-between mb-12">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      <span className="text-sm font-medium text-green-300">System Operational</span>
    </div>
    <time className="text-sm font-medium text-slate-300">
      {currentTime.toLocaleTimeString('en-NG', { 
        hour12: false, 
        timeZone: 'Africa/Lagos' 
      })} WAT
    </time>
  </div>
);

const BrandHeader = () => (
  <div className="mb-16">
    <div className="flex items-center mb-6">
      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
        <GraduationCap className="w-7 h-7 text-white" />
      </div>
      <div className="ml-4">
        <h1 className="text-3xl font-black tracking-tight text-white">EduPro</h1>
        <div className="flex items-center mt-1">
          <Award className="w-4 h-4 mr-2 text-yellow-400" />
          <span className="text-sm font-semibold text-yellow-200">Enterprise Edition</span>
        </div>
      </div>
    </div>
    <p className="text-lg text-blue-100 leading-relaxed max-w-md">
      Next-generation school management platform trusted by educational institutions worldwide.
    </p>
  </div>
);

const SystemMetrics = ({ metrics }) => (
  <div className="space-y-6">
    <h3 className="text-sm font-bold text-white/80 uppercase tracking-wider">
      System Overview
    </h3>
    <div className="space-y-4">
      {metrics.map((metric) => {
        const IconComponent = metric.icon;
        const statusColors = {
          success: 'bg-green-500/20 text-green-300',
          info: 'bg-blue-500/20 text-blue-300',
          warning: 'bg-yellow-500/20 text-yellow-300'
        };
        
        return (
          <div key={metric.id} className="flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${statusColors[metric.status]}`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-white">{metric.value}</div>
                <div className="text-sm text-blue-200">{metric.label}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-blue-300">{metric.detail}</div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const ComplianceSection = ({ features }) => (
  <div className="pt-6 border-t border-white/10">
    <h4 className="text-sm font-bold text-white/80 mb-4">Security & Compliance</h4>
    <div className="grid grid-cols-2 gap-3">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center justify-between text-sm">
          <span className="text-blue-200">{feature.name}</span>
          <div className={`w-2 h-2 rounded-full ${
            ['verified', 'certified'].includes(feature.status) ? 'bg-green-400' : 'bg-blue-400'
          }`} />
        </div>
      ))}
    </div>
  </div>
);

const ProgressSteps = ({ activeStep }) => (
  <div className="flex items-center justify-center mb-12">
    <div className="flex items-center space-x-4">
      {[1, 2, 3].map((step) => (
        <React.Fragment key={step}>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            activeStep >= step
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-slate-200 text-slate-500'
          }`}>
            {activeStep > step ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 3 && (
            <div className={`w-8 h-0.5 transition-all duration-300 ${
              activeStep > step ? 'bg-blue-600' : 'bg-slate-200'
            }`} />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const MessageAlert = ({ message }) => {
  if (!message.text) return null;

  const messageConfig = {
    [MESSAGE_TYPES.ERROR]: {
      bg: 'bg-red-50 border-red-200',
      text: 'text-red-800',
      icon: AlertCircle
    },
    [MESSAGE_TYPES.SUCCESS]: {
      bg: 'bg-green-50 border-green-200',
      text: 'text-green-800',
      icon: CheckCircle
    },
    [MESSAGE_TYPES.INFO]: {
      bg: 'bg-blue-50 border-blue-200',
      text: 'text-blue-800',
      icon: Activity
    },
    [MESSAGE_TYPES.WARNING]: {
      bg: 'bg-yellow-50 border-yellow-200',
      text: 'text-yellow-800',
      icon: AlertCircle
    }
  };

  const config = messageConfig[message.type];
  if (!config) return null;

  const IconComponent = config.icon;

  return (
    <div className={`mb-8 p-4 rounded-lg flex items-start space-x-3 border ${config.bg} ${config.text}`}>
      <IconComponent className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="text-sm font-medium">{message.text}</div>
    </div>
  );
};

const DefaultLoginButton = ({ role, onUseDefault, disabled }) => {
  const credentials = DEFAULT_CREDENTIALS[role.id];
  if (!credentials) return null;

  return (
    <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="text-sm font-medium text-slate-700">Quick Demo Access</div>
          <div className="text-xs text-slate-500 mt-1">
            {credentials.displayName} ({credentials.email})
          </div>
        </div>
        <button
          type="button"
          onClick={() => onUseDefault(credentials)}
          disabled={disabled}
          className="px-3 py-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Use Demo
        </button>
      </div>
    </div>
  );
};

const RoleCard = ({ role, isSelected, onSelect, disabled }) => {
  const IconComponent = role.icon;
  
  return (
    <button
      onClick={() => onSelect(role.id)}
      disabled={disabled}
      className="p-4 border-2 border-slate-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 text-left group disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${role.gradient} text-white`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <div className="font-semibold text-slate-900 group-hover:text-blue-700">
              {role.name}
            </div>
            <div className="text-sm text-slate-500">{role.accessLevel}</div>
          </div>
        </div>
        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
      </div>
    </button>
  );
};

const SelectedRoleDisplay = ({ role, onChangeRole, disabled }) => {
  const IconComponent = role.icon;
  
  return (
    <div className="mb-8 p-4 bg-slate-50 rounded-lg border border-slate-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${role.gradient} text-white`}>
            <IconComponent className="w-6 h-6" />
          </div>
          <div>
            <div className="font-semibold text-slate-900">{role.name}</div>
            <div className="text-sm text-slate-500">{role.accessLevel}</div>
          </div>
        </div>
        <button
          onClick={onChangeRole}
          disabled={disabled}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Change
        </button>
      </div>
    </div>
  );
};

const PasswordStrengthIndicator = ({ password }) => {
  const strength = calculatePasswordStrength(password);
  const label = getPasswordStrengthLabel(strength);
  const color = getPasswordStrengthColor(strength);
  
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-xs text-slate-500">Password Strength</span>
        <span className={`text-xs font-medium ${
          strength >= 3 ? 'text-green-600' : 
          strength >= 2 ? 'text-yellow-600' : 'text-red-600'
        }`}>
          {label}
        </span>
      </div>
      <div className="flex space-x-1">
        {Array.from({ length: 5 }, (_, level) => (
          <div
            key={level}
            className={`h-1 flex-1 rounded-full transition-all duration-300 ${
              strength > level ? color : 'bg-slate-200'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Main component
const EduProEnterpriseLogin = () => {
  // State management
  const [selectedRoleId, setSelectedRoleId] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    twoFactor: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [activeStep, setActiveStep] = useState(AUTHENTICATION_STEPS.ROLE_SELECTION);
  
  // Refs and custom hooks
  const canvasRef = useRef(null);
  const currentTime = useCurrentTime();
  
  useAnimatedCanvas(canvasRef);
  useMessageTimer(message, setMessage);
  
  // Memoized values
  const selectedRole = useMemo(() => 
    ROLES_CONFIG.find(role => role.id === selectedRoleId), 
    [selectedRoleId]
  );
  
  const passwordStrength = useMemo(() => 
    calculatePasswordStrength(formData.password), 
    [formData.password]
  );
  
  const isFormValid = useMemo(() => 
    selectedRoleId && 
    validateEmail(formData.email) && 
    passwordStrength >= PASSWORD_REQUIREMENTS.MIN_STRENGTH,
    [selectedRoleId, formData.email, passwordStrength]
  );
  
  // Event handlers
  const handleRoleSelect = useCallback((roleId) => {
    setSelectedRoleId(roleId);
    setFormData(prev => ({ ...prev, email: '', password: '' }));
    setMessage({ type: '', text: '' });
    setActiveStep(AUTHENTICATION_STEPS.CREDENTIALS);
  }, []);
  
  const handleChangeRole = useCallback(() => {
    setSelectedRoleId('');
    setActiveStep(AUTHENTICATION_STEPS.ROLE_SELECTION);
    setFormData({ email: '', password: '', rememberMe: false, twoFactor: false });
  }, []);
  
  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  const handleUseDefaultCredentials = useCallback((credentials) => {
    setFormData(prev => ({
      ...prev,
      email: credentials.email,
      password: credentials.password
    }));
    setMessage({ 
      type: MESSAGE_TYPES.WARNING, 
      text: `Demo credentials loaded for ${credentials.displayName}. Click "Sign In Securely" to continue.` 
    });
  }, []);
  
  const handleSubmit = useCallback(async () => {
    // Validation
    if (!selectedRoleId) {
      setMessage({ type: MESSAGE_TYPES.ERROR, text: 'Please select your access role to continue.' });
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setMessage({ type: MESSAGE_TYPES.ERROR, text: 'Please enter a valid email address.' });
      return;
    }
    
    if (passwordStrength < PASSWORD_REQUIREMENTS.MIN_STRENGTH) {
      setMessage({ type: MESSAGE_TYPES.ERROR, text: 'Password must meet minimum security requirements.' });
      return;
    }
    
    // Authentication simulation
    setIsLoading(true);
    setMessage({ type: MESSAGE_TYPES.INFO, text: 'Authenticating with enterprise security protocols...' });
    setActiveStep(AUTHENTICATION_STEPS.AUTHENTICATION);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setMessage({ 
        type: MESSAGE_TYPES.SUCCESS, 
        text: `Welcome to EduPro ${selectedRole.name}. Redirecting to your dashboard...` 
      });
      
      // Reset after success
      setTimeout(() => {
        setIsLoading(false);
        setActiveStep(AUTHENTICATION_STEPS.ROLE_SELECTION);
        setSelectedRoleId('');
        setFormData({ email: '', password: '', rememberMe: false, twoFactor: false });
        setMessage({ type: '', text: '' });
      }, 2000);
      
    } catch (error) {
      setMessage({ type: MESSAGE_TYPES.ERROR, text: 'Authentication failed. Please try again.' });
      setIsLoading(false);
    }
  }, [selectedRoleId, formData.email, passwordStrength, selectedRole]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="min-h-screen flex">
        {/* Left Panel - Brand & System Information */}
        <aside className="hidden lg:flex lg:w-5/12 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-20"
            aria-hidden="true"
          />
          
          <div className="relative z-10 flex flex-col justify-between p-12 text-white">
            <div>
              <SystemStatusBar currentTime={currentTime} />
              <BrandHeader />
            </div>
            
            <div className="space-y-6">
              <SystemMetrics metrics={SYSTEM_METRICS} />
              <ComplianceSection features={COMPLIANCE_FEATURES} />
            </div>
          </div>
        </aside>

        {/* Right Panel - Authentication Form */}
        <main className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <ProgressSteps activeStep={activeStep} />
            
            <header className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-3">
                Welcome to EduPro
              </h2>
              <p className="text-lg text-slate-600">
                Sign in to your institutional dashboard
              </p>
            </header>

            <MessageAlert message={message} />

            {/* Role Selection */}
            {!selectedRoleId && (
              <section className="space-y-4 mb-8">
                <label className="block text-sm font-semibold text-slate-700 mb-4">
                  Select Your Access Portal
                </label>
                <div className="grid grid-cols-1 gap-3" role="group" aria-labelledby="role-selection">
                  {ROLES_CONFIG.map((role) => (
                    <RoleCard
                      key={role.id}
                      role={role}
                      isSelected={selectedRoleId === role.id}
                      onSelect={handleRoleSelect}
                      disabled={isLoading}
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Selected Role & Authentication Form */}
            {selectedRoleId && selectedRole && (
              <>
                <SelectedRoleDisplay 
                  role={selectedRole}
                  onChangeRole={handleChangeRole}
                  disabled={isLoading}
                />

                <DefaultLoginButton 
                  role={selectedRole}
                  onUseDefault={handleUseDefaultCredentials}
                  disabled={isLoading}
                />

                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={`name@${selectedRole.emailDomain}`}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 bg-white"
                        required
                        disabled={isLoading}
                        autoComplete="email"
                      />
                      {validateEmail(formData.email) && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-semibold text-slate-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Enter your password"
                        className="w-full pl-10 pr-12 py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 bg-white"
                        required
                        disabled={isLoading}
                        autoComplete="current-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:text-slate-600"
                        disabled={isLoading}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    
                    {formData.password && (
                      <PasswordStrengthIndicator password={formData.password} />
                    )}
                  </div>

                  {/* Security Options */}
                  <fieldset className="space-y-3">
                    <legend className="sr-only">Security Options</legend>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="rememberMe"
                        checked={formData.rememberMe}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-blue-600 bg-white border-slate-300 rounded focus:ring-blue-500 focus:ring-2"
                        disabled={isLoading}
                      />
                      <span className="text-sm text-slate-700">Keep me signed in for 30