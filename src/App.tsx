/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import learningAiImg from "./assets/images/learning_ai.png";
import writingAiImg from "./assets/images/writing_ai.png";
import speakingAiImg from "./assets/images/speaking_ai.png";
import courseEnglishBasic from "./assets/images/course_english_basic.png";
import courseEnglishLostRoots from "./assets/images/course_english_lost_roots.png";
import courseEnglishIelts from "./assets/images/course_english_ielts.png";
import courseEnglishMemory from "./assets/images/course_english_memory.png";
import courseEnglishGrammar from "./assets/images/course_english_grammar.png";
import courseChineseYct from "./assets/images/course_chinese_yct.png";
import courseChineseHsk from "./assets/images/course_chinese_hsk.png";
import parentHoaiThuImg from "./assets/images/parent_hoai_thu.png";
import parentPhuongThanhImg from "./assets/images/parent_phuong_thanh.png";
import parentKhanhVuImg from "./assets/images/parent_khanh_vu.png";
import parentNguyenThaoImg from "./assets/images/parent_nguyen_thao.png";
import parentHienTranImg from "./assets/images/parent_hien_tran.png";
import parentThanhHuongImg from "./assets/images/parent_thanh_huong.png";
import studentMinhAnhImg from "./assets/images/student_minh_anh.png";
import studentDucAnhImg from "./assets/images/student_duc_anh.png";
import studentThuyLinhImg from "./assets/images/student_thuy_linh.png";
import studentHoangNamImg from "./assets/images/student_hoang_nam.png";
import studentBaoNgocImg from "./assets/images/student_bao_ngoc.png";
import studentQuangHuyImg from "./assets/images/student_quang_huy.png";
import { 
  Menu, 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  ArrowRight, 
  MapPin, 
  Phone, 
  Star,
  Sparkles,
  Brain,
  PenTool,
  MicVocal,
  Cpu,
  User,
  Smartphone,
  CheckCircle2,
  BookOpen,
  Headphones,
  Languages,
  Zap,
  Award,
  Target,
  Users,
  TrendingUp,
  FileCheck,
  MessageCircle,
  X,
  ChevronRight,
  Clock,
  Shield,
  Quote,
  ThumbsUp,
  ChevronLeft,
  Facebook
} from "lucide-react";

export default function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1 }
  };

  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCourseTab, setActiveCourseTab] = useState("all");
  const [activeResourceTab, setActiveResourceTab] = useState("all");

  const menuItems = [
    { id: "home", label: "Trang chủ" },
    { id: "about", label: "Giới thiệu" },
    { id: "courses", label: "Khóa học" },
    { id: "tai-lieu-hoc-tap", label: "Công nghệ AI" },
    { id: "tai-nguyen-hoc-tap", label: "Tài nguyên học tập" },
    { id: "testimonials", label: "Phản hồi" },
    { id: "register", label: "Liên hệ" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection("register");
        return;
      }

      const scrollPosition = window.scrollY + 120;
      
      const sections = ["home", "about", "courses", "tai-lieu-hoc-tap", "tai-nguyen-hoc-tap", "testimonials", "register"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Counter = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        let animationFrame: number;

        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          setCount(Math.floor(progress * end));
          if (progress < 1) {
            animationFrame = requestAnimationFrame(step);
          }
        };

        animationFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrame);
      }
    }, [isInView, end, duration]);

    return <span ref={nodeRef}>{count}{suffix}</span>;
  };

  const logoUrl = "https://i.postimg.cc/3xcLr6w5/logo.png";
  const msTrangUrl = "https://i.postimg.cc/bvDJXXKx/9c190c05-ac35-4c80-b144-92dc773b98f9.png";
  const msTrangOriginalUrl = "https://i.postimg.cc/m22cnG51/2a-Obo-Qcp4Apwp4z-W0i-KUxhn-YKTtjx-CRAq-Osj-SAAy.jpg";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-red-100 w-full sticky top-0 z-50 shadow-sm">
        <div className="flex justify-between items-center w-full px-6 h-20 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("home")}>
            <img 
              src={logoUrl} 
              alt="Trung Tâm Ngoại Ngữ Pallas Logo" 
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-sm border-2 border-primary/20"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col leading-none">
              <span className="font-lexend text-lg md:text-xl font-bold text-primary">Trung Tâm Ngoại Ngữ Pallas</span>
            </div>
          </div>
          
          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-on-surface-variant hover:text-primary transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 items-center">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-bold text-sm transition-colors cursor-pointer pb-1 ${
                  activeSection === item.id 
                    ? "text-primary border-b-2 border-primary" 
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection("register")}
              className="flex items-center gap-2 text-sm font-bold text-white bg-primary hover:bg-secondary px-5 py-2.5 rounded-full cursor-pointer shadow-md shadow-primary/20 hover:shadow-lg transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" />
              0979.2222.10
            </button>
          </nav>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-red-100 px-6 py-4 flex flex-col gap-3 shadow-lg"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left font-bold text-sm py-2 px-3 rounded-xl transition-all ${
                  activeSection === item.id 
                    ? "bg-red-50 text-primary border-l-4 border-primary pl-4" 
                    : "text-on-surface-variant hover:text-primary hover:bg-red-50/50"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href="tel:0979222210"
              className="flex items-center justify-center gap-2 font-bold text-sm py-3 px-4 rounded-xl bg-primary text-white mt-2"
            >
              <Phone className="w-4 h-4" />
              Gọi ngay: 0979.2222.10
            </a>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="relative w-full min-h-[85vh] md:min-h-[700px] overflow-hidden flex items-center scroll-mt-20">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-[#5C0A0F]">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container/10 rounded-full blur-3xl"></div>
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0" style={{backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "50px 50px"}}></div>
          </div>
          
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left content */}
              <div 
                className="flex-1 flex flex-col gap-6 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-4 py-2 rounded-full w-fit mx-auto lg:mx-0 border border-white/20">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Trung Tâm Ngoại Ngữ Pallas - Hải Phòng</span>
                </div>
                
                <h1 className="font-lexend text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Xây nền từ móng,<br />
                  <span className="text-yellow-300">chinh phục đỉnh cao</span>
                </h1>
                
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Đồng hành cùng học sinh trên hành trình chinh phục tiếng Anh và Tiếng Trung, mở rộng tri thức và nuôi dưỡng những ước mơ hoài bão trong tương lai.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                  <button 
                    onClick={() => scrollToSection("register")}
                    className="bg-white text-primary text-sm md:text-base font-bold py-4 px-8 md:px-10 rounded-2xl shadow-lg shadow-black/20 hover:shadow-xl hover:bg-yellow-50 transition-all active:scale-95 cursor-pointer flex items-center gap-2 group"
                  >
                    Nhận tư vấn miễn phí
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a 
                    href="tel:0979222210"
                    className="flex items-center gap-2 text-white/90 hover:text-white font-bold text-sm transition-colors"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    0979.2222.10
                  </a>
                </div>

                {/* Quick stats */}
                <div className="flex gap-6 md:gap-10 items-center justify-center lg:justify-start mt-4">
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-lexend text-2xl md:text-3xl font-bold text-white">2+</span>
                    <span className="text-[10px] md:text-xs text-white/60 font-semibold uppercase tracking-wider">Cơ sở</span>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-lexend text-2xl md:text-3xl font-bold text-white">10+</span>
                    <span className="text-[10px] md:text-xs text-white/60 font-semibold uppercase tracking-wider">Năm kinh nghiệm</span>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div className="flex flex-col items-center lg:items-start">
                    <span className="font-lexend text-2xl md:text-3xl font-bold text-white">2000+</span>
                    <span className="text-[10px] md:text-xs text-white/60 font-semibold uppercase tracking-wider">Học viên</span>
                  </div>
                </div>
              </div>

              {/* Right - Ms Trang photo */}
              <div 
                className="flex-shrink-0 relative"
              >
                <div className="max-w-[480px] md:max-w-[550px] lg:max-w-[600px] rounded-[3rem] overflow-hidden border-4 border-white/20 shadow-2xl relative bg-white/10">
                  <img 
                    src={msTrangUrl}
                    alt="Phan Trang - Trung Tâm Ngoại Ngữ Pallas"
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating sparkle */}
                <div className="absolute -top-3 -right-3 bg-yellow-400 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section - What students face */}
        <section className="py-16 md:py-24 px-6 bg-white scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary/3 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl"></div>
          
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center text-center mb-12">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase bg-red-50 px-5 py-2 rounded-full border border-red-100">
                <MessageCircle className="w-4 h-4" />
                Bạn có đang gặp phải?
              </span>
              <h2 className="font-lexend text-2xl md:text-4xl text-on-surface font-bold leading-tight max-w-3xl">
                Những <span className="text-primary">khó khăn thường gặp</span> khi học ngoại ngữ
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Problems grid */}
              <motion.div 
                variants={stagger}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {[
                  { icon: "😰", text: "Mất gốc ngoại ngữ, không biết bắt đầu học từ đâu" },
                  { icon: "😔", text: "Thiếu động lực, mất phương hướng trong việc học" },
                  { icon: "📋", text: "Không có lộ trình học rõ ràng, hiệu quả" },
                  { icon: "📉", text: "Thi nhiều lần nhưng không cải thiện được điểm số" },
                  { icon: "🗣️", text: "Nghe – Đọc tốt nhưng lại không Nói được" },
                  { icon: "📝", text: "Khó khăn trong việc hiểu và sử dụng ngữ pháp" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className="bg-red-50/60 hover:bg-red-50 p-5 rounded-2xl border border-red-100/60 hover:border-primary/30 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default group"
                  >
                    <span className="text-2xl shrink-0 group-hover:scale-110 transition-transform">{item.icon}</span>
                    <p className="text-sm font-semibold text-on-surface leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Ms Trang photo */}
              <motion.div 
                {...fadeInUp}
                className="lg:col-span-5 flex flex-col items-center gap-6"
              >
                <div className="relative">
                  <div className="w-full max-w-[320px] md:max-w-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white/10">
                    <img 
                      src="https://i.postimg.cc/nhY8C3BN/5a09882e-6f71-46e8-8a9d-6bec491e613e.png"
                      alt="Phan Trang - Giáo viên Trung Tâm Ngoại Ngữ Pallas"
                      className="w-full h-auto block"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  {/* Decorative dots */}
                  <div className="absolute -top-4 -right-4 grid grid-cols-3 gap-1.5 opacity-30">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl px-6 py-4 text-white text-center shadow-lg">
                  <p className="font-bold text-sm">Pallas thấu hiểu bạn!</p>
                  <p className="text-xs text-white/80 mt-1">Mỗi học viên đều được đồng hành bằng một lộ trình phù hợp</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Pallas Section */}
        <section id="about" className="py-16 md:py-24 px-6 bg-gradient-to-b from-red-50/50 to-white scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center text-center mb-12">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase bg-red-50 px-5 py-2 rounded-full border border-red-100">
                <Star className="w-4 h-4 fill-primary/30" />
                Về chúng tôi
              </span>
              <h2 className="font-lexend text-2xl md:text-4xl lg:text-5xl text-on-surface font-bold leading-tight">
                Trung Tâm Ngoại Ngữ <span className="text-primary">Pallas</span>
              </h2>
              <div className="h-1.5 w-20 bg-primary rounded-full"></div>
            </motion.div>

            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Left: Text content */}
              <motion.div 
                {...fadeInUp}
                className="flex-1 flex flex-col gap-6 text-on-surface-variant leading-relaxed text-base md:text-[17px]"
              >
                <p className="font-semibold text-on-surface text-lg md:text-xl">
                  Trung Tâm Ngoại Ngữ Pallas được xây dựng với sứ mệnh đồng hành cùng học sinh trên hành trình chinh phục ngoại ngữ. Hiện tại, Pallas đang phát triển mạnh mẽ chương trình Tiếng Anh, đồng thời mở rộng đào tạo Tiếng Trung và sẽ tiếp tục triển khai thêm nhiều ngôn ngữ khác trong tương lai.
                </p>
                <p>
                  Với <strong className="text-primary">2 cơ sở đang hoạt động</strong>, Pallas luôn kiên định với triết lý giáo dục: <strong className="text-primary">lấy học sinh làm trung tâm, lấy chất lượng làm trọng tâm</strong>. Chúng tôi tin rằng mỗi học sinh đều có tiềm năng riêng, và nhiệm vụ của giáo dục không chỉ là truyền đạt kiến thức, mà còn là đánh thức sự tự tin, khơi dậy khát vọng và giúp các con từng bước trưởng thành.
                </p>
                <p>
                  Tại Pallas, ngoại ngữ không chỉ là một môn học. Mỗi giờ học là một hành trình để các con được lắng nghe, được khích lệ, được khám phá bản thân và phát triển toàn diện. Chúng tôi không chỉ giúp học sinh cải thiện điểm số, xây dựng nền tảng ngôn ngữ vững chắc, mà còn rèn luyện <strong className="text-secondary">kỹ năng giao tiếp, tư duy chủ động, tinh thần vượt khó</strong> và khả năng tự tin thể hiện mình.
                </p>
                
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl border-l-4 border-primary">
                  <p className="italic font-semibold text-primary/90 leading-relaxed">
                    "Pallas – nơi tri thức được trao truyền, ước mơ được nuôi dưỡng và những thế hệ học sinh được chắp cánh vươn xa."
                  </p>
                </div>
              </motion.div>

              {/* Right: Highlight cards */}
              <motion.div 
                {...fadeInUp}
                className="w-full lg:w-[420px] flex flex-col gap-5 shrink-0"
              >
                {[
                  { icon: Heart, title: "Tận tâm", desc: "Đội ngũ giáo viên giàu kinh nghiệm, luôn đặt sự tiến bộ của học sinh lên hàng đầu.", color: "bg-red-50 border-red-100" },
                  { icon: Target, title: "Lộ trình cá nhân hóa", desc: "Mỗi học viên được đồng hành bằng một lộ trình phù hợp với trình độ và mục tiêu.", color: "bg-amber-50 border-amber-100" },
                  { icon: ShieldCheck, title: "Chất lượng đảm bảo", desc: "Không chỉ dạy bằng kiến thức mà còn dạy bằng tình yêu thương và trách nhiệm.", color: "bg-emerald-50 border-emerald-100" },
                  { icon: Languages, title: "Đa ngôn ngữ", desc: "Phát triển mạnh Tiếng Anh, đang mở rộng Tiếng Trung và sẽ triển khai thêm nhiều ngôn ngữ khác.", color: "bg-blue-50 border-blue-100" }
                ].map((item, i) => (
                  <div key={i} className={`flex items-start gap-4 p-5 rounded-2xl border ${item.color} hover:shadow-lg transition-all duration-300`}>
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-sm">{item.title}</h4>
                      <p className="text-xs text-on-surface-variant leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Ms Trang & Courses Intro Section */}
        <section className="py-12 md:py-16 px-6 bg-white scroll-mt-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col gap-10 relative z-10">
            {/* Section Header */}
            <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center text-center">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase bg-red-50 px-5 py-2 rounded-full border border-red-100">
                <Award className="w-4 h-4" />
                Trung Tâm Ngoại Ngữ Pallas
              </span>
              <h2 className="font-lexend text-3xl md:text-5xl text-on-surface font-bold tracking-tight">
                Cô <span className="text-primary">Phan Trang</span> là người sáng lập và là CEO của Trung tâm
              </h2>
              <p className="text-on-surface-variant max-w-2xl leading-relaxed mt-2">
                Với tâm huyết khơi dậy niềm đam mê học hỏi, Cô Phan Trang định hướng Pallas trở thành bệ phóng ngoại ngữ toàn diện. Khởi đầu từ thế mạnh vượt trội trong đào tạo Tiếng Anh, Pallas đang bứt phá phát triển Tiếng Trung chất lượng cao và hướng tới hệ sinh thái đa ngôn ngữ chuẩn quốc tế.
              </p>
              <div className="h-1.5 w-24 bg-primary rounded-full mt-1"></div>
            </motion.div>

            {/* Ms Trang + Courses Intro Card */}
            <motion.div 
              {...fadeInUp}
              className="bg-gradient-to-br from-white via-white to-red-50/50 rounded-[2.5rem] border border-red-100/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Photo */}
                <div className="w-full lg:w-1/3 relative group">
                  <div className="aspect-[3/4] lg:aspect-auto lg:h-full max-h-[600px] overflow-hidden">
                    <img 
                      src={msTrangOriginalUrl} 
                      alt="Phan Trang - Sáng lập Trung Tâm Ngoại Ngữ Pallas" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#5C0A0F]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/10"></div>
                  </div>
                  {/* Badge overlay on mobile */}
                  <div className="absolute bottom-6 left-6 lg:hidden">
                    <span className="bg-primary text-white text-xs font-extrabold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      Phan Trang
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/3 p-8 md:p-12 flex flex-col justify-center gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="hidden lg:inline-flex bg-primary/10 text-primary text-sm font-black uppercase tracking-widest px-5 py-2.5 rounded-xl w-fit border border-primary/15">
                      ★ Sáng lập & CEO – TRUNG TÂM NGOẠI NGỮ PALLAS
                    </span>
                    <h3 className="font-lexend text-3xl md:text-4xl font-black text-on-surface leading-tight">
                      Phan Trang
                    </h3>
                    <p className="text-base md:text-lg text-on-surface-variant font-medium leading-relaxed max-w-lg">
                      Là người sáng lập và trực tiếp điều hành Trung tâm, tôi luôn kiên định với sứ mệnh mang đến môi trường giáo dục ngoại ngữ bài bản. Tại Pallas, chương trình Tiếng Anh đã khẳng định vị thế vững vàng, song hành cùng sự phát triển mạnh mẽ của bộ môn Tiếng Trung mới ra mắt, hướng tới tương lai triển khai thêm nhiều ngôn ngữ khác nhằm mang lại hành trang đa ngôn ngữ toàn diện nhất cho thế hệ trẻ.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 bg-red-50/50 p-4 rounded-2xl border border-red-100/40">
                      <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <BookOpen className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-black text-on-surface uppercase tracking-wide">Đa dạng chương trình đào tạo</span>
                        <p className="text-xs md:text-sm font-semibold text-on-surface-variant mt-0.5">Từ Tiếng Anh cơ bản cho trẻ 4 tuổi đến luyện thi IELTS, Cambridge – phù hợp với mọi mục tiêu và lứa tuổi.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-red-50/50 p-4 rounded-2xl border border-red-100/40">
                      <div className="w-8 h-8 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <TrendingUp className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm font-black text-on-surface uppercase tracking-wide">Lộ trình cá nhân hóa – tiến bộ rõ rệt</span>
                        <p className="text-xs md:text-sm font-semibold text-on-surface-variant mt-0.5">Kiểm tra đầu vào miễn phí, xếp lớp phù hợp trình độ. Theo dõi sát sao và báo cáo tiến độ định kỳ cho phụ huynh.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-red-50/50 p-4 rounded-2xl border border-red-100/40">
                      <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                        <Brain className="w-4 h-4 text-amber-600" />
                      </div>
                      <div>
                        <span className="text-sm font-black text-on-surface uppercase tracking-wide">Phương pháp học hiệu quả & sáng tạo</span>
                        <p className="text-xs md:text-sm font-semibold text-on-surface-variant mt-0.5">Kết hợp giữa kỹ thuật siêu trí nhớ, luyện phản xạ giao tiếp và hệ thống hóa ngữ pháp giúp học nhanh – nhớ lâu – tự tin sử dụng.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10 mt-2">
                    <p className="italic text-base md:text-lg font-semibold text-primary leading-relaxed">
                      "Mỗi học sinh đều có một tiềm năng riêng. Nhiệm vụ của chúng tôi là đánh thức tiềm năng ấy, giúp các em tự tin làm chủ ngoại ngữ và sẵn sàng mở cánh cửa bước tới tương lai."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Bar */}
            <motion.div 
              {...fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-gradient-to-r from-primary via-secondary to-[#5C0A0F] rounded-3xl p-8 md:p-10 text-center shadow-xl"
            >
              <div className="flex flex-col gap-1">
                <div className="font-lexend text-3xl md:text-4xl font-black text-yellow-300"><Counter end={10} />+</div>
                <div className="text-[10px] md:text-xs uppercase font-bold text-white/60 tracking-widest">Năm kinh nghiệm</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-lexend text-3xl md:text-4xl font-black text-yellow-300"><Counter end={2000} />+</div>
                <div className="text-[10px] md:text-xs uppercase font-bold text-white/60 tracking-widest">Học viên thành công</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-lexend text-3xl md:text-4xl font-black text-yellow-300"><Counter end={2} /></div>
                <div className="text-[10px] md:text-xs uppercase font-bold text-white/60 tracking-widest">Cơ sở hoạt động</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-lexend text-3xl md:text-4xl font-black text-white">100%</div>
                <div className="text-[10px] md:text-xs uppercase font-bold text-white/60 tracking-widest">Tâm huyết & trách nhiệm</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-12 md:py-16 px-6 bg-gradient-to-b from-red-50/30 to-white scroll-mt-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            
            {/* Header */}
            <motion.div {...fadeInUp} className="flex flex-col gap-3 items-center text-center">
              <span className="text-primary font-extrabold text-sm tracking-widest uppercase bg-red-50 px-4 py-1.5 rounded-full border border-red-100">
                TUYỂN SINH CÁC LỚP HỌC
              </span>
              <h2 className="font-lexend text-xl sm:text-2xl md:text-3xl lg:text-4xl text-on-surface font-black leading-snug tracking-tight max-w-4xl text-center">
                Chương trình đào tạo tại <span className="text-primary">Pallas</span>
              </h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mt-2"></div>
              <p className="text-on-surface-variant max-w-2xl text-sm leading-relaxed mt-2">
                Trung Tâm Ngoại Ngữ Pallas cung cấp đa dạng các chương trình đào tạo Tiếng Anh và Tiếng Trung phù hợp với mọi độ tuổi và trình độ, giúp học viên tự tin chinh phục mục tiêu của mình.
              </p>
            </motion.div>

            {/* Category Tabs */}
            <div className="flex justify-center gap-3 md:gap-4 mb-4 flex-wrap">
              {[
                { id: "all", label: "Tất cả khóa học", emoji: "🌐" },
                { id: "english", label: "Khóa học Tiếng Anh", emoji: "🇬🇧" },
                { id: "chinese", label: "Khóa học Tiếng Trung", emoji: "🇨🇳" }
              ].map((tab) => {
                const isActive = activeCourseTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCourseTab(tab.id)}
                    className="relative px-5 py-2.5 rounded-full font-lexend font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 border border-outline-variant/20 shadow-sm bg-white overflow-hidden"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCourseTabIndicator"
                        className="absolute inset-0 bg-primary -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="text-base">{tab.emoji}</span>
                    <span className={isActive ? "text-white" : "text-on-surface-variant hover:text-primary"}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Course Cards */}
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                { 
                  emoji: "📚", 
                  title: "Tiếng Anh cơ bản", 
                  age: "Từ 4 đến 18 tuổi",
                  tagline: "Xây nền tảng vững chắc",
                  desc: "Phát triển đồng đều 4 kỹ năng Nghe – Nói – Đọc – Viết theo từng cấp độ. Giúp học sinh xây dựng nền tảng ngôn ngữ vững chắc, tự tin giao tiếp và đạt kết quả cao ở trường.",
                  color: "from-red-500 to-rose-600",
                  category: "english",
                  image: courseEnglishBasic
                },
                { 
                  emoji: "🚀", 
                  title: "Cấp tốc cho HS mất gốc", 
                  age: "Mọi lứa tuổi",
                  tagline: "Lấy lại nền tảng nhanh chóng",
                  desc: "Khóa học đặc biệt dành cho học sinh mất gốc, giúp các em xây dựng lại kiến thức từ nền móng với lộ trình cá nhân hóa và sự đồng hành tận tâm của giáo viên.",
                  color: "from-orange-500 to-red-500",
                  category: "english",
                  image: courseEnglishLostRoots
                },
                { 
                  emoji: "🎓", 
                  title: "Luyện chứng chỉ CAMBRIDGE, IELTS", 
                  age: "Theo trình độ",
                  tagline: "Chinh phục chứng chỉ quốc tế",
                  desc: "Chương trình chuẩn quốc tế, lộ trình bài bản giúp học viên tự tin đạt điểm số mục tiêu trong các kỳ thi chứng chỉ Cambridge và IELTS.",
                  color: "from-blue-600 to-indigo-600",
                  category: "english",
                  image: courseEnglishIelts
                },
                { 
                  emoji: "🧠", 
                  title: "Siêu trí nhớ 1000 từ", 
                  age: "1 khóa học",
                  tagline: "Phương pháp ghi nhớ đặc biệt",
                  desc: "Ứng dụng kỹ thuật ghi nhớ khoa học giúp học viên nắm vững 1000 từ vựng chỉ trong 1 khóa. Từ vựng vững – giao tiếp tự tin – làm bài tốt hơn.",
                  color: "from-purple-500 to-violet-600",
                  category: "english",
                  image: courseEnglishMemory
                },
                { 
                  emoji: "📖", 
                  title: "Ngữ pháp phổ thông cấp 1, 2, 3", 
                  age: "Tiểu học – THPT",
                  tagline: "Nắm chắc ngữ pháp chuẩn",
                  desc: "Hệ thống hóa kiến thức ngữ pháp từ cơ bản đến nâng cao, bám sát chương trình SGK mới. Giúp học sinh hiểu sâu, nhớ lâu, làm bài thi đạt điểm cao.",
                  color: "from-emerald-500 to-teal-600",
                  category: "english",
                  image: courseEnglishGrammar
                },
                { 
                  emoji: "🇨🇳", 
                  title: "Tiếng Trung cơ bản YCT", 
                  age: "Tiểu học – THCS",
                  tagline: "Nền tảng Tiếng Trung cho trẻ em",
                  desc: "Chương trình Tiếng Trung theo chuẩn YCT (Youth Chinese Test) từ YCT 1 đến YCT 6. Học phát âm chuẩn, làm quen và viết chữ Hán cơ bản, luyện nghe – nói – đọc – viết theo chủ đề gần gũi.",
                  color: "from-red-600 to-amber-500",
                  category: "chinese",
                  image: courseChineseYct
                },
                { 
                  emoji: "📜", 
                  title: "Tiếng Trung HSK", 
                  age: "THCS, THPT & Người lớn",
                  tagline: "Chinh phục chứng chỉ HSK",
                  desc: "Dành cho học sinh THCS, THPT, sinh viên và người đi làm. Xây dựng vốn từ vựng và ngữ pháp nền tảng, phát triển đồng đều 4 kỹ năng Nghe – Nói – Đọc – Viết, hướng tới chứng chỉ HSK quốc tế.",
                  color: "from-rose-600 to-red-700",
                  category: "chinese",
                  image: courseChineseHsk
                },
              ].filter(course => activeCourseTab === "all" || course.category === activeCourseTab).map((course, i) => (
                <motion.div 
                  key={i}
                  layout
                  variants={fadeInUp}
                  className="bg-white p-0 rounded-[2rem] border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col overflow-hidden group"
                >
                  {/* Image Banner */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    
                    {/* Emoji Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-sm font-bold w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg border border-black/5">
                      <span className="text-xl">{course.emoji}</span>
                    </div>

                    {/* Age Badge */}
                    <div className="absolute top-4 right-4 bg-primary/95 backdrop-blur-sm text-[10px] uppercase tracking-widest font-black text-white px-3 py-1.5 rounded-full shadow-lg border border-white/20">
                      {course.age}
                    </div>

                    {/* Course Title and Tagline */}
                    <div className="absolute bottom-4 left-6 right-6">
                      <p className="text-[10px] text-yellow-300 font-black uppercase tracking-wider mb-0.5">{course.tagline}</p>
                      <h3 className="font-lexend font-black text-lg text-white leading-tight">{course.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col gap-3 flex-grow justify-between">
                    <p className="text-sm text-on-surface-variant font-medium leading-relaxed flex-grow">
                      {course.desc}
                    </p>
                    <button 
                      onClick={() => scrollToSection("register")}
                      className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all mt-3 cursor-pointer w-fit"
                    >
                      Đăng ký ngay <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Why Pallas Section */}
            <motion.div {...fadeInUp} className="mt-8">
              <div className="flex flex-col gap-4 items-center text-center mb-10">
                <h3 className="font-lexend text-2xl md:text-3xl font-bold text-on-surface">
                  Tại sao nên học ngoại ngữ tại <span className="text-primary">Pallas</span>?
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    icon: Users, 
                    title: "Đội ngũ giảng viên trình độ cao", 
                    desc: "Giáo viên tận tâm, giàu kinh nghiệm chuyên môn, luôn đặt sự tiến bộ của học sinh lên hàng đầu. Dạy bằng kiến thức, tình yêu thương và trách nhiệm.",
                    color: "bg-blue-50 border-blue-200"
                  },
                  { 
                    icon: FileCheck, 
                    title: "Giáo trình thiết kế độc quyền", 
                    desc: "Chương trình đào tạo được xây dựng chuyên biệt, phù hợp từng cấp độ. Kết hợp giáo trình chuẩn quốc tế với nội dung tối ưu cho học sinh Việt Nam.",
                    color: "bg-emerald-50 border-emerald-200"
                  },
                  { 
                    icon: Shield, 
                    title: "Quản lý chất lượng", 
                    desc: "Theo dõi sát sao tiến độ học tập, báo cáo định kỳ cho phụ huynh. Cam kết kiểm tra đầu vào miễn phí để xếp lớp phù hợp nhất.",
                    color: "bg-amber-50 border-amber-200"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeInUp}
                    className={`${item.color} p-8 rounded-3xl border flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-lexend font-bold text-on-surface text-lg">{item.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enrollment Info Box */}
            <motion.div 
              {...fadeInUp}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] border-2 border-primary/20 shadow-lg flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="bg-primary text-white font-extrabold uppercase text-[10px] tracking-wider px-4 py-1.5 rounded-full animate-bounce">
                    📢 Thông tin tuyển sinh
                  </span>
                </div>
                <h3 className="font-lexend text-xl md:text-2xl font-bold text-on-surface">Đăng ký ngay để nhận ưu đãi!</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {[
                    "Lộ trình học rõ ràng, phù hợp từng độ tuổi",
                    "Giáo viên theo sát, quan tâm học sinh",
                    "Học chắc – hiểu sâu – tiến bộ bền vững",
                    "Kiểm tra đầu vào MIỄN PHÍ 100%"
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 bg-red-50/50 p-3 rounded-xl border border-red-100/40">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs shrink-0">✓</span>
                      <span className="text-xs font-bold text-on-surface">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0 flex flex-col gap-4 items-center bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white min-w-[240px] shadow-xl">
                <Phone className="w-8 h-8" />
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-wider text-white/70">Hotline tư vấn</p>
                  <p className="text-2xl font-black mt-1">0979.2222.10</p>
                </div>
                <a 
                  href="tel:0979222210"
                  className="bg-white text-primary font-bold text-sm py-3 px-6 rounded-xl hover:bg-yellow-50 transition-colors w-full text-center"
                >
                  Gọi ngay
                </a>
              </div>
            </motion.div>

          </div>
        </section>
        {/* AI Smart Learning Section */}
        <section id="tai-lieu-hoc-tap" className="py-20 px-6 relative overflow-hidden scroll-mt-20">
          {/* Decorative AI Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full border border-primary/20">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">Công nghệ AI tiên phong</span>
              </div>
              <h2 className="font-lexend text-3xl md:text-5xl text-on-surface font-bold tracking-tight">
                Ứng dụng công nghệ độc quyền <br className="hidden md:block" /> chỉ có tại <span className="text-primary">Trung Tâm Ngoại Ngữ Pallas</span>
              </h2>
              <p className="text-on-surface-variant max-w-2xl leading-relaxed">
                Trải nghiệm hệ sinh thái học tập hiện đại, giúp tối ưu hóa thời gian và nâng cao hiệu quả kỹ năng ngoại ngữ vượt trội.
              </p>
            </motion.div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { 
                  icon: Brain, 
                  title: "Learning", 
                  image: learningAiImg,
                  desc: "Kho tài liệu thông minh & lộ trình cá nhân hóa từ AI giúp bạn nắm bắt kiến thức nhanh hơn 3 lần.",
                  color: "bg-red-600",
                  shadow: "shadow-red-500/30",
                  link: "https://mstranglearning.vercel.app/"
                },
                { 
                  icon: PenTool, 
                  title: "Writing", 
                  image: writingAiImg,
                  desc: "Chấm chữa bài viết AI ngay lập tức, sửa lỗi ngữ pháp và gợi ý cách dùng từ nâng cao.",
                  color: "bg-amber-600",
                  shadow: "shadow-amber-500/30",
                  link: "https://mstrangwriting.vercel.app/"
                },
                { 
                  icon: MicVocal, 
                  title: "Speaking", 
                  image: speakingAiImg,
                  desc: "Luyện phát âm chuẩn bản ngữ với AI, nhận phản hồi chi tiết về ngữ điệu và độ trôi chảy.",
                  color: "bg-emerald-600",
                  shadow: "shadow-emerald-500/30",
                  link: "https://mstrangspeak.vercel.app/"
                }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link || undefined}
                  target={item.link ? "_blank" : undefined}
                  rel={item.link ? "noopener noreferrer" : undefined}
                  variants={fadeInUp}
                  whileHover={{ y: -12 }}
                  className="group relative bg-white rounded-[2rem] shadow-level-1 hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-outline-variant/20 block"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={item.image} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg ${item.shadow} pointer-events-none`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                    
                    {item.link ? (
                      <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all uppercase tracking-widest">
                        Kết nối AI ngay <ArrowRight className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all uppercase tracking-widest opacity-60">
                        Sắp ra mắt <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Special AI Bonus Section: AI Buddy Speaking */}
        <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              {...fadeInUp}
              className="bg-white rounded-[4rem] p-8 md:p-16 shadow-2xl border-4 border-primary/10 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              
              <div className="w-full md:w-1/3 flex justify-center order-2 md:order-1 relative">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=800" 
                    alt="AI Buddy Illustration"
                    className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-[3rem] shadow-2xl border-8 border-white"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-4 rounded-full shadow-lg border-4 border-white">
                    <Sparkles className="w-8 h-8 text-primary shadow-sm" />
                  </div>
                </motion.div>
              </div>

              <div className="w-full md:w-2/3 flex flex-col gap-6 order-1 md:order-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-secondary-container text-primary px-4 py-2 rounded-full w-fit mx-auto md:mx-0">
                  <Star className="w-5 h-5 fill-primary" />
                  <span className="text-sm font-bold uppercase tracking-widest">Tính năng đặc biệt</span>
                </div>
                <h2 className="font-lexend text-3xl md:text-5xl font-bold text-on-surface leading-tight">
                  Tự tin giao tiếp cùng <br className="hidden md:block" /> <span className="text-primary italic">AI Buddy</span> miễn phí!
                </h2>
                <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                  Bạn lo lắng khi nói tiếng Anh? Đừng sợ! Hãy luyện tập cùng người bạn AI siêu thông minh và ngộ nghĩnh này mỗi ngày để phản xạ nói tự nhiên, lưu loát hơn mỗi ngày. 
                </p>
                <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
                  <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-2xl border border-red-100 text-sm font-bold text-primary">
                    <CheckCircle2 className="w-4 h-4" /> Hoàn toàn miễn phí
                  </div>
                  <div className="flex items-center gap-2 bg-red-50 px-4 py-2 rounded-2xl border border-red-100 text-sm font-bold text-primary">
                    <Zap className="w-4 h-4" /> Phản hồi 1-1 tức thì
                  </div>
                </div>
                <a 
                  href="https://app.sesame.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 bg-primary text-white font-bold py-5 px-10 rounded-2xl self-center md:self-start shadow-xl shadow-primary/30 hover:bg-secondary hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center gap-3 text-lg group"
                >
                  Bắt đầu luyện nói ngay <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Learning Resources Section */}
        <section id="tai-nguyen-hoc-tap" className="py-24 px-6 bg-white overflow-hidden scroll-mt-20">
          <div className="max-w-7xl mx-auto flex flex-col gap-16">
            <motion.div {...fadeInUp} className="flex flex-col gap-4 text-center items-center">
              <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Tăng tốc kỹ năng</span>
              <h2 className="font-lexend text-3xl md:text-5xl text-on-surface font-bold">
                Tài nguyên <span className="text-primary">Học tập Miễn phí</span>
              </h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mb-4"></div>
              <p className="text-on-surface-variant max-w-3xl text-lg leading-relaxed text-center">
                Khám phá kho tàng kiến thức khổng lồ được Trung Tâm Ngoại Ngữ Pallas tuyển chọn kỹ lưỡng, giúp bạn tự tin làm chủ ngoại ngữ mỗi ngày.
              </p>
            </motion.div>

            {/* Resources Category Tabs */}
            <div className="flex justify-center gap-3 md:gap-4 mb-4 flex-wrap">
              {[
                { id: "all", label: "Tất cả tài nguyên", emoji: "🌐" },
                { id: "english", label: "Tài liệu Tiếng Anh", emoji: "🇬🇧" },
                { id: "chinese", label: "Tài liệu Tiếng Trung", emoji: "🇨🇳" }
              ].map((tab) => {
                const isActive = activeResourceTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveResourceTab(tab.id)}
                    className="relative px-5 py-2.5 rounded-full font-lexend font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer flex items-center gap-2 border border-outline-variant/20 shadow-sm bg-white overflow-hidden"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeResourceTabIndicator"
                        className="absolute inset-0 bg-primary -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="text-base">{tab.emoji}</span>
                    <span className={isActive ? "text-white" : "text-on-surface-variant hover:text-primary"}>
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              {[
                { 
                  title: "TÀI LIỆU ÔN LUYỆN CAMBRIDGE", 
                  subtitle: "Tổng hợp đề thi, học liệu & hướng dẫn chuẩn quốc tế",
                  link: "https://www.cambridgeenglish.org/educators-organisations/resources-for-teachers/", 
                  image: "https://i.postimg.cc/WzCpbp3L/tai-xuong-(4).jpg",
                  color: "bg-blue-600",
                  icon: BookOpen,
                  category: "english"
                },
                { 
                  title: "READING A-Z KIDS", 
                  subtitle: "Bộ sách nổi tiếng đầy đủ học liệu ôn luyện",
                  link: "https://drive.google.com/drive/folders/1CPnjizRBjQ5PEUhAzSwDKq-ZTZcJ_q6r?usp=sharing", 
                  image: "https://i.postimg.cc/3JGH8VRH/tai-xuong.jpg",
                  color: "bg-amber-600",
                  icon: BookOpen,
                  category: "english"
                },
                { 
                  title: "BỘ TRUYỆN NỔI TIẾNG LITTLE FOX", 
                  subtitle: "Luyện nghe & đọc qua các câu chuyện hoạt họa sinh động",
                  link: "https://www.tienganhchotreem.com/", 
                  image: "https://i.postimg.cc/FsywKs1n/tai-xuong-(3).jpg",
                  color: "bg-amber-500",
                  icon: BookOpen,
                  category: "english"
                },
                { 
                  title: "MỎ VÀNG MIỄN PHÍ GIÚP BẠN LUYỆN LISTENING - READING - SPEAKING - VOCABULARY MỖI NGÀY", 
                  link: "https://newsinlevels.com/", 
                  image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800",
                  color: "bg-amber-500",
                  icon: Sparkles,
                  category: "english"
                },
                { 
                  title: "Web đọc sách MIỄN PHÍ hay không tưởng", 
                  link: "https://readalong.google.com/book/GLOBAL_sw_24768", 
                  image: "https://images.unsplash.com/photo-1512820790803-73c7e9cb5531?auto=format&fit=crop&q=80&w=800",
                  color: "bg-blue-500",
                  icon: BookOpen,
                  category: "english"
                },
                { 
                  title: "WEBSITE LUYỆN CHÉP CHÍNH TẢ & LUYỆN ĐỌC TIẾNG ANH RẤT HAY CHO NGƯỜI MỚI BẮT ĐẦU", 
                  link: "https://breakingnewsenglish.com/", 
                  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
                  color: "bg-emerald-500",
                  icon: PenTool,
                  category: "english"
                },
                { 
                  title: "LUYỆN FULL 4 KỸ NĂNG", 
                  link: "https://www.eslfast.com/", 
                  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
                  color: "bg-rose-500",
                  icon: Zap,
                  category: "english"
                },
                { 
                  title: "LUYỆN ĐỌC TIẾNG ANH TỪ A1 ĐẾN C1", 
                  subtitle: "Luyện shadowing đầy đủ level từ A1 đến C1",
                  link: "https://shadowingenglish.com", 
                  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
                  color: "bg-purple-500",
                  icon: Headphones,
                  category: "english"
                },
                { 
                  title: "KHO LUYỆN WRITING TỪ A1 ĐẾN C1", 
                  subtitle: "Phát triển kỹ năng viết chuẩn xác & tự tin",
                  link: "https://test-english.com/writing/", 
                  image: "https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&q=80&w=800",
                  color: "bg-cyan-500",
                  icon: PenTool,
                  category: "english"
                },
                { 
                  title: "HỌC GIAO TIẾP TỪ A ĐẾN Z", 
                  link: "https://luyengiaotiep.com", 
                  image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
                  color: "bg-indigo-500",
                  icon: MessageCircle,
                  category: "english"
                },
                { 
                  title: "LUYỆN NGHE CHÉP CHÍNH TẢ HÀNG NGÀY", 
                  subtitle: "Daily Dictation Exercises - Phương pháp hiệu quả nhất",
                  link: "https://dailydictation.com/exercises", 
                  image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800",
                  color: "bg-teal-500",
                  icon: Headphones,
                  category: "english"
                },
                { 
                  title: "KHO TÀN NGUYÊN LUYỆN NGHE CỰC LỚN", 
                  subtitle: "Từ A1 → C1 - Hàng ngàn bài nghe miễn phí",
                  link: "https://elllo.org/", 
                  image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800",
                  color: "bg-orange-500",
                  icon: Headphones,
                  category: "english"
                },
                { 
                  title: "LUYỆN VIẾT CHỮ HÁN - TIẾNG TRUNG", 
                  subtitle: "Công cụ luyện viết chữ Hán trực tuyến",
                  link: "https://hanzicozy.vercel.app/", 
                  image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=800",
                  color: "bg-red-600",
                  icon: PenTool,
                  category: "chinese"
                },
                { 
                  title: "HỌC TIẾNG TRUNG QUA TRUYỆN SINH ĐỘNG", 
                  subtitle: "Little Fox Chinese - Mọi trình độ",
                  link: "https://chinese.littlefox.com/en", 
                  image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&q=80&w=800",
                  color: "bg-amber-600",
                  icon: BookOpen,
                  category: "chinese"
                },
                { 
                  title: "LUYỆN ĐỌC TIẾNG TRUNG - MANDARIN BEAN", 
                  subtitle: "Bài đọc từ sơ cấp đến nâng cao",
                  link: "https://mandarinbean.com/all-lessons/", 
                  image: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&q=80&w=800",
                  color: "bg-rose-500",
                  icon: BookOpen,
                  category: "chinese"
                }
              ].filter(res => activeResourceTab === "all" || res.category === activeResourceTab).map((res, i) => (
                <motion.a
                  key={i}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="group flex flex-col bg-surface rounded-[2.5rem] shadow-level-1 hover:shadow-2xl transition-all duration-500 border border-outline-variant/10 overflow-hidden"
                >
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img 
                      src={res.image} 
                      alt={res.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className={`absolute top-6 left-6 w-14 h-14 ${res.color} rounded-2xl flex items-center justify-center text-white shadow-xl border-4 border-white/20`}>
                      <res.icon className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col gap-4 flex-grow">
                    <h3 className="font-lexend text-base md:text-lg font-bold text-on-surface leading-snug group-hover:text-primary transition-colors line-clamp-3">
                      {res.title}
                    </h3>
                    {'subtitle' in res && (
                      <p className="text-xs font-bold text-primary uppercase tracking-widest -mt-2">
                        {res.subtitle}
                      </p>
                    )}
                    <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-4 transition-all uppercase tracking-widest pt-4">
                      Truy cập ngay <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Parent Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-28 px-6 relative overflow-hidden scroll-mt-20">
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-white to-orange-50/50"></div>
          <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl"></div>
          {/* Decorative quote marks */}
          <div className="absolute top-20 right-20 text-primary/[0.03] hidden lg:block">
            <Quote className="w-64 h-64" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-14">
            {/* Section Header */}
            <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center text-center">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase bg-red-50 px-5 py-2 rounded-full border border-red-100">
                <ThumbsUp className="w-4 h-4" />
                Phản hồi từ phụ huynh
              </span>
              <h2 className="font-lexend text-3xl md:text-5xl text-on-surface font-bold tracking-tight leading-tight">
                Phụ huynh <span className="text-primary">nói gì</span> về chúng tôi?
              </h2>
              <p className="text-on-surface-variant max-w-2xl leading-relaxed text-base md:text-lg">
                Hàng trăm phụ huynh đã tin tưởng gửi gắm con em tại Trung Tâm Ngoại Ngữ Pallas. Đây là những chia sẻ chân thật nhất từ chính các gia đình.
              </p>
              <div className="h-1.5 w-24 bg-primary rounded-full"></div>
            </motion.div>

            {/* Testimonials Grid */}
            <motion.div 
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {[
                {
                  name: "Chị Hoài Thu",
                  role: "Phụ huynh học sinh lớp 5",
                  avatar: parentHoaiThuImg,
                  rating: 5,
                  highlight: "Đạt giải cao từ cấp trường đến cấp tỉnh",
                  content: "Học cô Trang con em mới được như ngày hôm nay. Mới lớp 3 bắt đầu làm quen với cô, vậy mà trong 2 năm qua con đều đạt giải cao từ cấp trường, thị xã đến cấp tỉnh. Bây giờ con đã được giấy xác nhận hoàn thành tốt kỳ thi Quốc gia. Các phụ huynh lên tham khảo và cho con học nhé!",
                  tag: "⭐ Đóng góp nổi bật",
                  color: "from-rose-500/10 to-pink-500/10",
                  borderColor: "border-rose-200/60"
                },
                {
                  name: "Chị Phương Thanh",
                  role: "Phụ huynh học sinh THCS",
                  avatar: parentPhuongThanhImg,
                  rating: 5,
                  highlight: "Hiệu quả học tập vượt trội",
                  content: "Trước con em học ở đây cực hiệu quả. Từ một đứa sợ tiếng Anh, giờ con tự tin nói và làm bài tốt hẳn lên. Cô Trang rất tận tâm, luôn theo sát từng học sinh. Phương pháp dạy vui mà chất, con đi học về toàn kể chuyện ở lớp. Cảm ơn cô Trang nhiều lắm ạ!",
                  tag: "🌟 Người đóng góp đang lên",
                  color: "from-amber-500/10 to-orange-500/10",
                  borderColor: "border-amber-200/60"
                },
                {
                  name: "Chị Khánh Vũ",
                  role: "Phụ huynh 2 con học tại Pallas",
                  avatar: parentKhanhVuImg,
                  rating: 5,
                  highlight: "Gửi gắm cả 2 con học cùng cô",
                  content: "Hai đứa nhà em đều học với cô Trang. Bé lớn từ khi học ở đây điểm tiếng Anh luôn dẫn đầu lớp, thi HSG huyện đạt giải nhì. Em bé nhỏ mới 5 tuổi nhưng đã biết phát âm chuẩn và thuộc rất nhiều từ vựng. Cô dạy theo phương pháp siêu trí nhớ nên con nhớ rất lâu, không bị quên.",
                  tag: "💖 Phụ huynh trung thành",
                  color: "from-blue-500/10 to-indigo-500/10",
                  borderColor: "border-blue-200/60"
                },
                {
                  name: "Chị Nguyễn Thảo",
                  role: "Phụ huynh học sinh lớp 7",
                  avatar: parentNguyenThaoImg,
                  rating: 5,
                  highlight: "Mong cô mở thêm lớp mới",
                  content: "Tha thiết, mong mỏi cô Trang mở thêm lớp ở Hải Phòng. Con em trước đây mất gốc tiếng Anh, điểm số rất thấp. Từ khi được cô Trang kèm theo lộ trình riêng, chỉ sau 4 tháng con đã lên điểm rõ rệt, từ 4-5 điểm lên 8-9 điểm liên tục. Con giờ rất thích học tiếng Anh!",
                  tag: "❤️ Phản hồi nhiệt tình",
                  color: "from-purple-500/10 to-violet-500/10",
                  borderColor: "border-purple-200/60"
                },
                {
                  name: "Chị Hiền Trần",
                  role: "Phụ huynh học sinh tiểu học",
                  avatar: parentHienTranImg,
                  rating: 5,
                  highlight: "Giá như ở gần để cho con học",
                  content: "Giá như cô ở gần thì tốt biết mấy! Em theo dõi page cô Trang lâu rồi, thấy phương pháp dạy rất hay, bài bản và khoa học. Các bé học ở đây đều tiến bộ rõ ràng. Nhiều phụ huynh khác cũng chia sẻ rất tích cực. Em ước gì cô mở thêm cơ sở để con em được học.",
                  tag: "💝 Người theo dõi",
                  color: "from-emerald-500/10 to-teal-500/10",
                  borderColor: "border-emerald-200/60"
                },
                {
                  name: "Chị Thanh Hương",
                  role: "Phụ huynh học sinh lớp 8",
                  avatar: parentThanhHuongImg,
                  rating: 5,
                  highlight: "Tiến bộ vượt bậc về giao tiếp",
                  content: "Trước đây con nhà mình rất lười nói tiếng Anh vì sợ sai. Được bạn giới thiệu qua lớp của cô Trang, sau một kỳ học con tiến bộ rõ rệt. Giờ con tự tin nói chuyện với người nước ngoài, phát âm cực kỳ tự nhiên. Phương pháp giảng dạy của cô rất truyền cảm hứng.",
                  tag: "✨ Phụ huynh tích cực",
                  color: "from-cyan-500/10 to-blue-500/10",
                  borderColor: "border-cyan-200/60"
                }
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`relative bg-gradient-to-br ${testimonial.color} backdrop-blur-sm rounded-[2rem] border ${testimonial.borderColor} p-7 md:p-8 flex flex-col gap-5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  {/* Quote decoration */}
                  <div className="absolute top-5 right-5 text-primary/10 group-hover:text-primary/20 transition-colors">
                    <Quote className="w-10 h-10" />
                  </div>

                  {/* Tag badge */}
                  <span className="text-[11px] font-bold text-primary/80 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full w-fit border border-primary/10 shadow-sm">
                    {testimonial.tag}
                  </span>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Highlight badge */}
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-primary/10 shadow-sm">
                    <p className="text-xs font-black text-primary uppercase tracking-wide flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {testimonial.highlight}
                    </p>
                  </div>

                  {/* Content */}
                  <p className="text-sm text-on-surface/80 leading-relaxed flex-grow italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-3 border-t border-black/5">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-md border-2 border-white ring-2 ring-primary/10 shrink-0">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface text-sm">{testimonial.name}</h4>
                      <p className="text-[11px] text-on-surface-variant font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social proof stats bar */}
            <motion.div 
              {...fadeInUp}
              className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-red-100/30 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 flex-1">
                <div className="flex flex-col items-center gap-1">
                  <div className="font-lexend text-3xl md:text-4xl font-black text-primary"><Counter end={98} suffix="%" /></div>
                  <p className="text-[10px] md:text-xs text-on-surface-variant font-bold uppercase tracking-wider text-center">Phụ huynh hài lòng</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-red-100"></div>
                <div className="flex flex-col items-center gap-1">
                  <div className="font-lexend text-3xl md:text-4xl font-black text-primary"><Counter end={500} suffix="+" /></div>
                  <p className="text-[10px] md:text-xs text-on-surface-variant font-bold uppercase tracking-wider text-center">Đánh giá 5 sao</p>
                </div>
                <div className="hidden md:block w-px h-12 bg-red-100"></div>
                <div className="flex flex-col items-center gap-1">
                  <div className="font-lexend text-3xl md:text-4xl font-black text-primary"><Counter end={85} suffix="%" /></div>
                  <p className="text-[10px] md:text-xs text-on-surface-variant font-bold uppercase tracking-wider text-center">Học sinh đạt giải</p>
                </div>
              </div>
              <button 
                onClick={() => scrollToSection("register")}
                className="bg-primary text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-primary/20 hover:bg-secondary hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2 group cursor-pointer whitespace-nowrap"
              >
                Đăng ký học ngay
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Student Results Section */}
        <section className="py-20 md:py-28 px-6 bg-white relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-yellow-100/40 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-primary/5 to-transparent rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

          <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-14">
            {/* Section Header */}
            <motion.div {...fadeInUp} className="flex flex-col gap-4 items-center text-center">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm tracking-widest uppercase bg-red-50 px-5 py-2 rounded-full border border-red-100">
                <Award className="w-4 h-4" />
                Thành tích học sinh
              </span>
              <h2 className="font-lexend text-3xl md:text-5xl text-on-surface font-bold tracking-tight leading-tight">
                Kết quả <span className="text-primary">thực tế</span> từ học sinh
              </h2>
              <p className="text-on-surface-variant max-w-2xl leading-relaxed text-base md:text-lg">
                Những con số biết nói – minh chứng rõ ràng nhất cho chất lượng đào tạo tại Trung Tâm Ngoại Ngữ Pallas.
              </p>
              <div className="h-1.5 w-24 bg-primary rounded-full"></div>
            </motion.div>

            {/* Student Result Cards */}
            <motion.div
              variants={stagger}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {[
                {
                  name: "Minh Anh",
                  grade: "Lớp 5 – Tiểu học",
                  avatar: studentMinhAnhImg,
                  achievement: "🏆 Giải Nhất HSG cấp Thị xã",
                  quote: "Con rất thích học ở đây vì cô dạy dễ hiểu lắm! Từ khi học cô Trang, con đã đạt giải Nhất HSG tiếng Anh cấp thị xã và được chọn đi thi cấp tỉnh.",
                  scoreBefore: 6.5,
                  scoreAfter: 9.8,
                  duration: "2 năm",
                  badgeColor: "bg-yellow-400",
                  cardGradient: "from-yellow-50 to-amber-50/50",
                  borderColor: "border-yellow-200/60"
                },
                {
                  name: "Đức Anh",
                  grade: "Lớp 7 – THCS",
                  avatar: studentDucAnhImg,
                  achievement: "📈 Từ mất gốc lên Top 3 lớp",
                  quote: "Trước em sợ tiếng Anh nhất, toàn bị điểm kém. Học cô Trang 4 tháng em đã lên điểm rõ rệt. Giờ em luôn trong Top 3 của lớp và tự tin phát biểu bằng tiếng Anh.",
                  scoreBefore: 3.5,
                  scoreAfter: 8.5,
                  duration: "4 tháng",
                  badgeColor: "bg-emerald-500",
                  cardGradient: "from-emerald-50 to-green-50/50",
                  borderColor: "border-emerald-200/60"
                },
                {
                  name: "Thuỳ Linh",
                  grade: "Lớp 9 – THCS",
                  avatar: studentThuyLinhImg,
                  achievement: "🎓 Đạt chứng chỉ Cambridge B1",
                  quote: "Nhờ cô Trang em đã đạt chứng chỉ Cambridge B1 Preliminary ngay từ lớp 9. Cô dạy rất bài bản, từ ngữ pháp đến kỹ năng nghe nói đều được rèn kỹ. Em tự tin khi vào cấp 3.",
                  scoreBefore: 5.0,
                  scoreAfter: 9.0,
                  duration: "1.5 năm",
                  badgeColor: "bg-blue-500",
                  cardGradient: "from-blue-50 to-indigo-50/50",
                  borderColor: "border-blue-200/60"
                },
                {
                  name: "Hoàng Nam",
                  grade: "Lớp 10 – THPT",
                  avatar: studentHoangNamImg,
                  achievement: "🥈 Giải Nhì HSG cấp Tỉnh",
                  quote: "Em đã đạt giải Nhì kỳ thi HSG tiếng Anh cấp tỉnh. Phương pháp siêu trí nhớ của cô giúp em nhớ từ vựng rất nhanh. Bây giờ em đang chuẩn bị thi IELTS với mục tiêu 6.5+.",
                  scoreBefore: 7.0,
                  scoreAfter: 9.5,
                  duration: "1 năm",
                  badgeColor: "bg-purple-500",
                  cardGradient: "from-purple-50 to-violet-50/50",
                  borderColor: "border-purple-200/60"
                },
                {
                  name: "Bảo Ngọc",
                  grade: "Lớp 3 – Tiểu học",
                  avatar: studentBaoNgocImg,
                  achievement: "⭐ Phát âm chuẩn từ năm 8 tuổi",
                  quote: "Con rất thích đi học tiếng Anh! Cô Trang dạy con hát, chơi trò chơi bằng tiếng Anh nên con nhớ nhanh lắm. Con đã thuộc hơn 500 từ vựng và phát âm được cô khen.",
                  scoreBefore: 0,
                  scoreAfter: 9.0,
                  duration: "1 năm",
                  badgeColor: "bg-pink-500",
                  cardGradient: "from-pink-50 to-rose-50/50",
                  borderColor: "border-pink-200/60"
                },
                {
                  name: "Quang Huy",
                  grade: "Lớp 6 – THCS",
                  avatar: studentQuangHuyImg,
                  achievement: "🏅 Hoàn thành xuất sắc thi Quốc gia",
                  quote: "Em được giấy xác nhận hoàn thành tốt kỳ thi cấp Quốc gia nhờ nền tảng tiếng Anh vững chắc từ cô Trang. Từ cấp trường đến cấp tỉnh em đều đạt giải. Em tự hào lắm ạ!",
                  scoreBefore: 5.5,
                  scoreAfter: 9.7,
                  duration: "2 năm",
                  badgeColor: "bg-red-500",
                  cardGradient: "from-red-50 to-orange-50/50",
                  borderColor: "border-red-200/60"
                }
              ].map((student, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className={`bg-gradient-to-br ${student.cardGradient} rounded-[2rem] border ${student.borderColor} overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col`}
                >
                  {/* Top: Avatar + Info */}
                  <div className="p-6 pb-4 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-2 ring-primary/10 shrink-0">
                      <img src={student.avatar} alt={student.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-lexend font-bold text-on-surface text-base truncate">{student.name}</h4>
                      <p className="text-xs text-on-surface-variant font-medium">{student.grade}</p>
                      <p className="text-xs text-on-surface-variant/60 font-medium flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" /> Học tại Pallas: {student.duration}
                      </p>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="px-6">
                    <div className={`${student.badgeColor} text-white text-xs font-black uppercase tracking-wide px-4 py-2.5 rounded-xl text-center shadow-md`}>
                      {student.achievement}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="px-6 pt-4 flex-grow">
                    <p className="text-sm text-on-surface/75 leading-relaxed italic">
                      "{student.quote}"
                    </p>
                  </div>

                  {/* Score Progress */}
                  <div className="p-6 pt-4">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-black/5 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">Điểm tiến bộ</span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                          +{(student.scoreAfter - student.scoreBefore).toFixed(1)} điểm
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <span className="text-lg font-black text-on-surface-variant/40">{student.scoreBefore > 0 ? student.scoreBefore : '—'}</span>
                          <span className="text-[9px] font-bold text-on-surface-variant/40 uppercase">Trước</span>
                        </div>
                        <div className="flex-1 relative h-2 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: `${(student.scoreBefore / 10) * 100}%` }}
                            whileInView={{ width: `${(student.scoreAfter / 10) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                            className={`absolute inset-y-0 left-0 ${student.badgeColor} rounded-full`}
                          />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-lg font-black text-primary">{student.scoreAfter}</span>
                          <span className="text-[9px] font-bold text-primary uppercase">Sau</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Banner */}
            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-r from-primary via-secondary to-[#5C0A0F] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-2xl"></div>
              <div className="flex flex-col gap-3 text-center md:text-left relative z-10">
                <h3 className="font-lexend text-2xl md:text-3xl font-bold text-white leading-tight">
                  Con bạn cũng sẽ đạt kết quả tuyệt vời như vậy!
                </h3>
                <p className="text-white/70 text-sm md:text-base max-w-xl">
                  Đăng ký kiểm tra đầu vào MIỄN PHÍ ngay hôm nay để nhận lộ trình học cá nhân hóa cho con.
                </p>
              </div>
              <button
                onClick={() => scrollToSection("register")}
                className="bg-white text-primary font-bold py-4 px-10 rounded-2xl shadow-xl hover:bg-yellow-50 hover:-translate-y-1 transition-all active:scale-95 flex items-center gap-2 group cursor-pointer whitespace-nowrap shrink-0 relative z-10"
              >
                Đăng ký ngay
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </section>

      </main>

      {/* Registration Section */}
      <section id="register" className="py-16 md:py-20 px-6 bg-red-50/30 scroll-mt-20">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeInUp} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-red-100/30 relative overflow-hidden">
            <div className="absolute top-8 right-8 text-primary/10">
              <Sparkles className="w-16 h-16" />
            </div>
            
            <div className="flex flex-col lg:flex-row gap-10 relative z-10">
              {/* Left: Form */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <h3 className="font-lexend text-2xl md:text-3xl font-bold text-on-surface">Để lại thông tin tư vấn</h3>
                  <p className="text-on-surface-variant text-sm italic">Nhận lộ trình cá nhân hóa và ưu đãi học phí đặc biệt ngay hôm nay.</p>
                  <div className="h-1.5 w-20 bg-primary rounded-full mt-2"></div>
                </div>

                <form className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2 group">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest px-1">Họ và tên</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                      <input className="w-full rounded-2xl border border-red-100 focus:border-primary focus:ring-4 focus:ring-primary/5 bg-white py-4 pl-12 pr-4 outline-none transition-all" placeholder="Nguyễn Văn A" type="text" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 group">
                    <label className="text-xs font-bold text-primary uppercase tracking-widest px-1">Số điện thoại</label>
                    <div className="relative">
                      <Smartphone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/40 group-focus-within:text-primary transition-colors" />
                      <input className="w-full rounded-2xl border border-red-100 focus:border-primary focus:ring-4 focus:ring-primary/5 bg-white py-4 pl-12 pr-4 outline-none transition-all" placeholder="09xx xxx xxx" type="tel" />
                    </div>
                  </div>
                  <button className="bg-primary text-white font-bold py-5 rounded-2xl w-full shadow-xl shadow-primary/30 hover:bg-secondary hover:-translate-y-1 transition-all active:scale-[0.98] flex items-center justify-center gap-3 cursor-pointer" type="submit">
                    Nhận tư vấn miễn phí <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* Right: Contact info */}
              <div className="lg:w-[340px] flex flex-col gap-5 bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white shadow-xl shrink-0">
                <div className="flex items-center gap-3 mb-2">
                  <img 
                    src={logoUrl} 
                    alt="Pallas Logo" 
                    className="w-12 h-12 rounded-full border-2 border-white/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-lexend font-bold text-lg">TRUNG TÂM NGOẠI NGỮ PALLAS</h4>
                    <p className="text-xs text-white/70 font-semibold">Trung Tâm Đào Tạo Tiếng Anh & Tiếng Trung Hàng Đầu</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">CS1</p>
                      <p className="text-sm font-bold leading-relaxed">SN 31 ngõ 77 Nguyễn Trãi, Phường Kinh Môn, TP Hải Phòng</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">CS2</p>
                      <p className="text-sm font-bold leading-relaxed">SN 347 Đường Vũ Mạnh Hùng, Phường Nhị Chiểu, TP Hải Phòng</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">Hotline</p>
                      <p className="text-lg font-black">0979.2222.10</p>
                    </div>
                  </div>

                  <a 
                    href="https://www.facebook.com/profile.php?id=61572690107644" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Facebook className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-white/60 font-bold">Fanpage</p>
                      <p className="text-sm font-bold">Trung Tâm Ngoại Ngữ Pallas</p>
                    </div>
                  </a>
                </div>

                <div className="mt-auto pt-4 border-t border-white/15">
                  <p className="text-xs text-white/60 font-semibold italic text-center">
                    "Xây nền từ móng, chinh phục đỉnh cao"
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gradient-to-b from-[#5C0A0F] to-[#3D0509] text-white pt-20 pb-12 px-6 scroll-mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
          
          {/* Column 1: Logo & Tagline */}
          <motion.div {...fadeInUp} className="flex flex-col items-center md:items-start gap-4">
            <div className="w-28 h-28 bg-white rounded-[2rem] p-3 border-4 border-yellow-400/50 flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src={logoUrl} 
                alt="Trung Tâm Ngoại Ngữ Pallas Logo" 
                className="w-full h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left mt-2">
              <h2 className="font-lexend text-2xl font-bold text-yellow-300 tracking-wider uppercase">TRUNG TÂM NGOẠI NGỮ PALLAS</h2>
              <p className="text-xs font-bold text-white/50 uppercase tracking-widest">Đồng hành cùng học sinh chinh phục tri thức</p>
              <p className="text-sm italic font-medium text-white/80 mt-1">"Xây nền từ móng, chinh phục đỉnh cao"</p>
            </div>
          </motion.div>

          {/* Column 2: Contact Information */}
          <motion.div {...fadeInUp} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 pb-2">
              <h3 className="font-lexend text-xl font-bold text-yellow-300 uppercase tracking-widest">Liên hệ</h3>
              <div className="h-0.5 w-full bg-white/10 relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-yellow-400"></div>
              </div>
            </div>
            
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3 group">
                <span className="shrink-0 p-1.5 rounded-lg bg-yellow-400/20 text-yellow-300">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-1">Cơ sở 1</p>
                  <p className="text-sm font-bold leading-relaxed group-hover:text-yellow-300 transition-colors">
                    SN 31 ngõ 77 Nguyễn Trãi, Phường Kinh Môn, TP Hải Phòng
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 group">
                <span className="shrink-0 p-1.5 rounded-lg bg-yellow-400/20 text-yellow-300">
                  <MapPin className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/40 font-bold mb-1">Cơ sở 2</p>
                  <p className="text-sm font-bold leading-relaxed group-hover:text-yellow-300 transition-colors">
                    SN 347 Đường Vũ Mạnh Hùng, Phường Nhị Chiểu, TP Hải Phòng
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <span className="shrink-0 p-1.5 rounded-lg bg-yellow-400/20 text-yellow-300">
                  <Phone className="w-5 h-5" />
                </span>
                <p className="text-sm font-bold group-hover:text-yellow-300 transition-colors">
                  Hotline: 0979.2222.10
                </p>
              </div>

              <a 
                href="https://www.facebook.com/profile.php?id=61572690107644" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <span className="shrink-0 p-1.5 rounded-lg bg-yellow-400/20 text-yellow-300">
                  <Facebook className="w-5 h-5" />
                </span>
                <p className="text-sm font-bold group-hover:text-yellow-300 transition-colors">
                  Fanpage: Trung Tâm Ngoại Ngữ Pallas
                </p>
              </a>
            </div>
          </motion.div>

          {/* Column 3: Slogan Box */}
          <motion.div {...fadeInUp} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 pb-2">
              <h3 className="font-lexend text-xl font-bold text-yellow-300 uppercase tracking-widest">Sứ mệnh</h3>
              <div className="h-0.5 w-full bg-white/10 relative">
                <div className="absolute left-0 top-0 h-full w-12 bg-yellow-400"></div>
              </div>
            </div>

            <div className="bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col gap-4 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
              <p className="text-lg italic font-bold text-white relative z-10 leading-relaxed">
                "Xây nền từ móng, chinh phục đỉnh cao"
              </p>
              <p className="text-sm font-semibold text-white/70 relative z-10 leading-relaxed">
                Pallas không chỉ là nơi học tập, mà còn là nơi các con được nuôi dưỡng ước mơ, bồi đắp khát vọng và phát triển từ kiến thức đến kỹ năng sống.
              </p>
              <div className="flex items-center gap-2 mt-2 relative z-10">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-yellow-400/50">
                  <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <span className="text-xs font-bold text-yellow-300 uppercase tracking-widest">Trung Tâm Ngoại Ngữ Pallas</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40">
          <p>© 2026 Trung Tâm Ngoại Ngữ Pallas. Đồng hành cùng học sinh chinh phục tri thức.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition-colors">Điều khoản dịch vụ</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
