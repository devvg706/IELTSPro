import React, { useState } from "react";
import { BookOpen, Mic, FileText, Bot, Star, Menu, X, ArrowRight } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { Marquee } from "@/components/ui/marquee";
import { SpinningText } from "@/components/ui/spinning-text";
import { MorphingText } from "@/components/ui/morphing-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import TestimonialCard from "@/components/common/TestimonialCard";
import AccordionBar from "./components/common/AccordionBar";
import FloatingCubes from "./components/common/FloatingCubes";
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Header Component ---
  const Header = () => (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-lg z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          <span className="text-blue-400">IELTS</span>Pro
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Courses</a>
          <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Mock Tests</a>
          <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20">
            Sign Up
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/80 backdrop-blur-lg py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Courses</a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Mock Tests</a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Pricing</a>
            <a href="#" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/20">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </header>
  );

  // --- Hero Section ---
  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white overflow-hidden pt-20">
      <Particles className="absolute inset-0 z-0" quantity={300} ease={100} />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900 to-slate-900 z-10"></div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Achieve Your Dream Score in{" "}
              <span className="text-blue-400">
                <MorphingText texts={["Reading", "Listening", "Speaking", "Writing"]} />
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl">
              Unlock your potential with our AI-powered platform, personalized feedback, and expert-guided courses. Your journey to IELTS success starts here.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/30 overflow-hidden">
                <span className="absolute h-0 w-0 rounded-full bg-blue-400 transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
                <span className="relative flex items-center gap-2">
                  Start Free Trial <ArrowRight size={20} />
                </span>
              </button>
            </div>
          </div>
          {/* SpinningText with NumberTicker */}
          <div className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0 relative">
  <div className="relative flex justify-center items-center">
    {/* Spinning Text */}
    <SpinningText
      className="
        text-[clamp(24px,6vw,60px)] 
        md:text-[clamp(28px,4vw,50px)] 
        lg:text-[clamp(32px,3vw,40px)]
      "
    >
      BAND-SCORE-GUARANTEED-•-
    </SpinningText>

    {/* Number Ticker in the middle */}
    <div className="absolute flex justify-center items-center">
      <NumberTicker
        value={9}
        duration={1.5}
        startValue={4}
        className="
          text-[clamp(28px,8vw,72px)] 
          md:text-[clamp(32px,6vw,64px)] 
          lg:text-[clamp(36px,5vw,56px)]
          font-extrabold text-blue-400 drop-shadow-lg
        "
      />
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );

  // --- Neon Gradient Card ---
  const NeonGradientCard = ({ icon, title, description }) => (
    <div className="relative p-6 bg-slate-800/50 rounded-2xl overflow-hidden group border border-slate-700 hover:border-transparent transition-all duration-300">
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_180deg_at_50%_50%,#2a8af6_0%,#a855f7_50%,#2a8af6_100%)] animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative z-10 bg-slate-900 rounded-xl h-full p-6 flex flex-col items-center text-center">
        <div className="bg-slate-800 p-4 rounded-full mb-4 text-blue-400">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );

  // --- Animate Sections ---
  // --- Top Mentors Section ---
const mentors = [
  {
    name: "Dr. Ananya Rao",
    subject: "IELTS Expert • Writing",
    avatar: "https://i.pravatar.cc/150?img=11",
    available: true,
  },
  {
    name: "Michael Johnson",
    subject: "IELTS Expert • Speaking",
    avatar: "https://i.pravatar.cc/150?img=12",
    available: true,
  },
  {
    name: "Sophia Kim",
    subject: "IELTS Expert • Listening",
    avatar: "https://i.pravatar.cc/150?img=13",
    available: true,
  },
  {
    name: "Raj Patel",
    subject: "IELTS Expert • Reading",
    avatar: "https://i.pravatar.cc/150?img=14",
    available: false,
  },
];

const TopMentorsSection = () => (
  <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Meet Our <span className="text-blue-400">Top Mentors</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Available <span className="text-blue-400 font-semibold">24/7</span> for doubt solving and personalized guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="relative group rounded-2xl bg-slate-800/40 backdrop-blur-xl border border-slate-700 
                       hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 
                       transition-all duration-500 overflow-hidden"
          >
            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 p-6 flex flex-col items-center text-center">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-24 h-24 rounded-full border-4 border-slate-700 group-hover:border-blue-400 transition-all duration-500"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">{mentor.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{mentor.subject}</p>

              {/* Availability Badge */}
              <span
                className={`mt-3 px-3 py-1 rounded-full text-xs font-medium 
                ${mentor.available ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
              >
                {mentor.available ? "Available Now" : "Offline"}
              </span>

              {/* Button */}
              <button className="mt-5 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg font-semibold 
                                 hover:bg-blue-600 transition-all duration-300">
                Ask Doubt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);


  // --- Features Section ---
  const features = [
    { icon: <Mic size={32} />, title: "Live Speaking Practice", description: "Practice with our AI or join live sessions with certified trainers to improve your fluency and confidence." },
    { icon: <FileText size={32} />, title: "AI-Powered Mock Tests", description: "Get instant, detailed feedback on all four modules. Our AI simulates the real test environment." },
    { icon: <Bot size={32} />, title: "Personalized Study Plans", description: "Receive a custom study plan based on your diagnostic test, targeting your specific weaknesses." },
    { icon: <BookOpen size={32} />, title: "Extensive Material Library", description: "Access thousands of practice questions, video lessons, and expert articles anytime, anywhere." },
  ];

  const FeaturesSection = () => (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Why Choose <span className="text-blue-400">IELTS</span>Pro?
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            We provide a comprehensive and modern approach to IELTS preparation, ensuring you have the tools to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <NeonGradientCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );

  // --- Testimonials Section ---
  const testimonials = [
    { name: "Priya Sharma", score: "8.5", review: "The AI feedback on my writing tasks was a game-changer. I saw a huge improvement in just a few weeks!", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Johnathan Lee", score: "8.0", review: "IELTSPro's mock tests are incredibly realistic. It felt like I had already taken the test on the actual day.", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Fatima Al-Sayed", score: "7.5", review: "The speaking practice sessions boosted my confidence so much. The tutors were patient and very helpful.", avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Alex Chen", score: "9.0", review: "Absolutely brilliant platform. The resources are vast and the personalized plan kept me on track.", avatar: "https://i.pravatar.cc/150?img=4" },
    { name: "Maria Garcia", score: "8.0", review: "I loved the flexibility. I could study whenever I wanted, and the mobile app is fantastic.", avatar: "https://i.pravatar.cc/150?img=5" },
  ];

  

  const TestimonialsSection = () => (
    <section className="py-20 bg-slate-900 overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Success Stories from Our Students</h2>
          <p className="text-slate-400 mt-4">See how IELTSPro has helped students from around the world achieve their dreams.</p>
        </div>
        <Marquee speed={30}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
      </div>
    </section>
  );

  // --- Footer Section ---
  const Footer = () => (
    <footer className="bg-slate-950 text-slate-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              <span className="text-blue-400">IELTS</span>Pro
            </h3>
            <p>Your ultimate partner for IELTS success. Join us and turn your study abroad dreams into reality.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Courses</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contact Info</h4>
            <p className="mb-2">123 Learning Lane, Education City, 11221</p>
            <p className="mb-2">Email: support@ieltspro.com</p>
            <p>Phone:+91 9669798867</p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} IELTSPro. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="bg-slate-900 min-h-screen">
      <style>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <FloatingCubes/>
        <TopMentorsSection />
        <TestimonialsSection />
        <AccordionBar/>
        
      </main>
      <Footer />
    </div>
  );
}
