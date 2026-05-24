import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  Sparkles,
  Code2,
  Zap,
  ArrowRight,
  Menu,
  X,
  CheckCircle
} from 'lucide-react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const sheetVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const navLinks = [
  { label: '功能', href: '#features' },
  { label: '定价', href: '#pricing' },
  { label: '文档', href: '#docs' },
];

interface HeroSectionProps {
  onStart: () => void;
}

function HeroSection({ onStart }: HeroSectionProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full min-h-screen font-body text-text overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#1a1a3e] to-[#24243e]">
      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(115,66,226,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(115,66,226,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <img
            src="/pixelcode-logo.png"
            alt="PixelCode"
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
          <span className="text-xl font-bold text-white tracking-tight">PixelCode</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onStart}
            className="bg-accent text-white rounded-full px-5 py-2.5 font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Sparkles size={16} />
            开始使用
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            <motion.div
              variants={sheetVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed right-0 top-0 w-[min(88vw,360px)] h-[100dvh] bg-[#1a1a3e] shadow-[-12px_0_48px_rgba(0,0,0,0.3)] z-50 p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <img src="/pixelcode-logo.png" alt="PixelCode" className="h-7" />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={24} className="text-white" />
                </button>
              </div>
              <div className="w-full h-[1px] bg-white/10 mb-6" />
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.18 + i * 0.07, duration: 0.4 }}
                    className="text-lg font-medium py-2 text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-8">
                <button
                  onClick={() => { setMobileMenuOpen(false); onStart(); }}
                  className="bg-accent text-white rounded-full px-5 py-3 font-medium w-full flex items-center justify-center gap-2"
                >
                  <Sparkles size={18} />
                  开始使用
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-[clamp(40px,8vw,72px)] pb-20">
        <div className="max-w-[640px]">
          <motion.h1
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0 }}
            className="font-heading text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white mb-6"
          >
            截图转代码，{' '}
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              AI 驱动
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="text-[clamp(0.95rem,2.5vw,1.15rem)] leading-[1.7] text-white/65 max-w-[520px] mb-10"
          >
            上传截图或设计稿，PixelCode 自动生成高质量前端代码。
            支持 HTML/Tailwind/React/Vue，中文优化，批量处理。
          </motion.p>

          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.30 }}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.04, filter: 'brightness(1.1)' }}
              whileTap={{ scale: 0.96 }}
              onClick={onStart}
              className="bg-accent text-white rounded-full py-[17px] px-7 font-semibold text-[clamp(0.9rem,2vw,1rem)] shadow-[0_4px_32px_rgba(115,66,226,0.35)] min-w-[200px] flex items-center justify-between gap-3"
            >
              <Upload size={20} />
              上传截图开始
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.45 }}
            className="flex flex-wrap items-center gap-3 mt-12"
          >
            {[
              { icon: Zap, text: '秒级生成' },
              { icon: Code2, text: '多框架支持' },
              { icon: CheckCircle, text: '中文优化' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-xs font-medium"
              >
                <item.icon size={13} className="text-violet-400" />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { HeroSection };
