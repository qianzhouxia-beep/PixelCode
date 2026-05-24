import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Menu,
  X,
  Upload,
  Sparkles,
} from 'lucide-react';

const navItems = ['功能', '定价', '文档', '关于'];

const fadeUp = (i: number) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

interface HeroSectionProps {
  onStart: () => void;
}

function HeroSection({ onStart }: HeroSectionProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        fontFamily: 'var(--font-body)',
        color: 'var(--color-text)',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #0f0c29 0%, #1a1a3e 50%, #24243e 100%)',
        }}
      />
      
      {/* Subtle Overlay */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <img
              src="/pixelcode-logo.png"
              alt="PixelCode"
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
              PixelCode
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-white/70 transition-opacity duration-300 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={onStart}
              className="rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:brightness-110"
              style={{
                background: '#7342E2',
              }}
            >
              <Sparkles size={16} className="inline mr-1" />
              开始使用
            </button>

            <button
              className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:brightness-95"
              style={{
                background: '#F2F2EE',
                color: '#192837',
              }}
            >
              登录
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center text-white md:hidden"
            aria-label="Open Menu"
          >
            <Menu size={28} strokeWidth={2.1} />
          </button>
        </nav>

        {/* Hero Content */}
        <div
          className="mx-auto w-full max-w-[1280px] px-5 sm:px-8"
          style={{
            paddingTop: 'clamp(40px, 8vw, 72px)',
          }}
        >
          <div className="max-w-[560px]">
            {/* Heading */}
            <motion.h1
              variants={fadeUp(0)}
              initial="hidden"
              animate="visible"
              className="mb-6 font-bold text-white"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.65rem, 5vw, 3rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.01em',
              }}
            >
              截图转代码，{' '}
              <span className="inline-flex items-center gap-2">
                <Upload
                  size={24}
                  style={{
                    position: 'relative',
                    top: '-2px',
                  }}
                />
                AI
              </span>{' '}
              驱动{' '}
              <Sparkles
                size={24}
                className="inline-block text-violet-400"
                style={{
                  position: 'relative',
                  top: '-2px',
                }}
              />
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp(1)}
              initial="hidden"
              animate="visible"
              className="max-w-[560px] text-white/65"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                lineHeight: 1.65,
              }}
            >
              上传截图或设计稿，PixelCode 自动生成高质量前端代码。
              支持 HTML/Tailwind/React/Vue，中文优化，批量处理。
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp(2)}
              initial="hidden"
              animate="visible"
              className="mt-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  filter: 'brightness(1.1)',
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={onStart}
                className="flex min-w-[210px] items-center justify-between gap-8 rounded-full text-white"
                style={{
                  background: '#7342E2',
                  padding: '17px 24px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  boxShadow: '0 4px 24px rgba(115,66,226,0.28)',
                }}
              >
                <span>上传截图开始</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40"
              style={{
                background: 'rgba(25,40,55,0.35)',
                backdropFilter: 'blur(4px)',
              }}
            />

            {/* Sheet */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-50 flex h-[100dvh] flex-col"
              style={{
                width: 'min(88vw, 360px)',
                background: '#1a1a3e',
                boxShadow: '-12px 0 48px rgba(0,0,0,0.3)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/pixelcode-logo.png"
                    alt="PixelCode"
                    className="h-8 w-auto"
                  />
                  <span className="text-lg font-bold text-white">PixelCode</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center text-white"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-white/10" />

              {/* Nav */}
              <div className="flex flex-1 flex-col px-6 py-8">
                <div className="flex flex-col gap-6">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item}
                      href="#"
                      initial={{ opacity: 0, x: 24 }}
                      animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.18 + i * 0.07,
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      className="text-[1.05rem] font-medium text-white"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>

                {/* Bottom CTAs */}
                <div className="mt-auto flex flex-col gap-3 pt-10">
                  <button
                    onClick={() => { setMobileOpen(false); onStart(); }}
                    className="rounded-full px-5 py-3 text-sm font-medium text-white"
                    style={{
                      background: '#7342E2',
                    }}
                  >
                    <Sparkles size={16} className="inline mr-1" />
                    开始使用
                  </button>

                  <button
                    className="rounded-full px-5 py-3 text-sm font-medium"
                    style={{
                      background: '#F2F2EE',
                      color: '#192837',
                    }}
                  >
                    登录
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export { HeroSection };
