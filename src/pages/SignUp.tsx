import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User, MapPin, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface SignUpFormData {
  username: string;
  location: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpErrors {
  username?: string;
  location?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    location: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<SignUpErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleValidation = () => {
    const newErrors: SignUpErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Password must contain: 1 uppercase, 1 lowercase, 1 number, 1 special character (@$!%*?&)";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (!handleValidation()) {
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Check if email already exists
      const existingUsers = JSON.parse(localStorage.getItem("zenxityUsers") || "[]");
      const emailExists = existingUsers.some((user: any) => user.email === formData.email);

      if (emailExists) {
        toast({
          title: "Sign Up Failed",
          description: "Email already registered. Please use a different email.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Save new user
      const newUser = {
        username: formData.username,
        location: formData.location,
        email: formData.email,
        password: formData.password,
        createdAt: new Date().toISOString(),
      };

      existingUsers.push(newUser);
      localStorage.setItem("zenxityUsers", JSON.stringify(existingUsers));

      // Auto-login
      localStorage.setItem(
        "zenxityAuth",
        JSON.stringify({ email: formData.email, username: formData.username, timestamp: new Date().getTime() })
      );

      toast({
        title: "Account Created!",
        description: `Welcome ${formData.username}! Your account has been created.`,
      });

      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  const handleGoogleSignUp = () => {
    // Simulate Google Sign-Up
    const googleUser = {
      username: "Google User",
      location: "Not specified",
      email: "user@gmail.com",
      password: "googleauth",
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "zenxityAuth",
      JSON.stringify({
        email: googleUser.email,
        username: "Google User",
        provider: "google",
        timestamp: new Date().getTime(),
      })
    );

    toast({
      title: "Sign Up Successful!",
      description: "Signed up with Google. Welcome to Zenxity!",
    });

    navigate("/dashboard");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof SignUpErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#edf2fb] to-white flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Create Account</h1>
            <p className="text-base text-muted-foreground">Join Zenxity to start earning from your land</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
              <div className="relative">
                <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    errors.username ? "border-red-500 focus:border-red-600" : "border-border focus:border-primary"
                  }`}
                />
              </div>
              {errors.username && <p className="text-sm text-red-500 mt-2">{errors.username}</p>}
            </div>

            {/* Location Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Location</label>
              <div className="relative">
                <MapPin size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Salem, Tamil Nadu"
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    errors.location ? "border-red-500 focus:border-red-600" : "border-border focus:border-primary"
                  }`}
                />
              </div>
              {errors.location && <p className="text-sm text-red-500 mt-2">{errors.location}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <div className="relative">
                <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    errors.email ? "border-red-500 focus:border-red-600" : "border-border focus:border-primary"
                  }`}
                />
              </div>
              {errors.email && <p className="text-sm text-red-500 mt-2">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Min 8 chars: Aa1@"
                  className={`w-full pl-12 pr-12 py-3 rounded-xl border-2 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    errors.password ? "border-red-500 focus:border-red-600" : "border-border focus:border-primary"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && <p className="text-sm text-red-500 mt-2">{errors.password}</p>}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Confirm Password</label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Re-enter password"
                  className={`w-full pl-12 pr-12 py-3 rounded-xl border-2 bg-white text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    errors.confirmPassword ? "border-red-500 focus:border-red-600" : "border-border focus:border-primary"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-sm text-red-500 mt-2">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
              <p className="font-medium text-blue-900 mb-2">Password must contain:</p>
              <ul className="text-xs text-blue-800 space-y-1">
                <li>✓ At least 8 characters</li>
                <li>✓ 1 uppercase letter (A-Z)</li>
                <li>✓ 1 lowercase letter (a-z)</li>
                <li>✓ 1 number (0-9)</li>
                <li>✓ 1 special character (@$!%*?&)</li>
              </ul>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed transition-opacity mt-6"
            >
              {isLoading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Google Sign Up */}
          <button
            onClick={handleGoogleSignUp}
            className="w-full py-3 rounded-xl border-2 border-border text-foreground font-semibold text-base hover:bg-secondary transition-colors flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" fill="#4285F4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          {/* Sign In Link */}
          <p className="text-center text-muted-foreground mt-8">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-primary font-semibold hover:underline"
            >
              Sign In
            </button>
          </p>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignUp;
