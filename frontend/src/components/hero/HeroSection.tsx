import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Menu,
  X,
  Upload,
  Sparkles,
  Code2,
  CheckCircle,
  Zap,
  Layers,
  Globe,
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
      ease: "easeInOut",
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
          <div className="flex items-center">
            <img
              src="/pixelcode-logo.png"
              alt="PixelCode"
              className="h-9 w-auto"
            />
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
                  boxShadow: '0 4px 24px rgba(115,66,226,0.35)',
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
                <div className="flex items-center">
                  <img
                    src="/pixelcode-logo.png"
                    alt="PixelCode"
                    className="h-7 w-auto"
                  />
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

      {/* Features Section */}
      <section
        className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8"
        style={{ paddingTop: 'clamp(80px, 10vw, 120px)', paddingBottom: 'clamp(60px, 8vw, 100px)' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 text-center"
        >
          <h2
            className="font-bold text-white"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
            }}
          >
            为什么选择 <span style={{ color: '#7342E2' }}>PixelCode</span>
          </h2>
          <p className="mt-4 text-white/50 text-base max-w-xl mx-auto">
            从截图到生产级代码，只需几秒
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap size={24} />,
              title: '秒级生成',
              desc: '上传截图或设计稿，AI 自动生成高质量前端代码，无需手动编写',
            },
            {
              icon: <Code2 size={24} />,
              title: '多框架支持',
              desc: '支持 HTML/Tailwind、React、Vue 等主流框架，一键切换技术栈',
            },
            {
              icon: <Globe size={24} />,
              title: '中文优化',
              desc: '针对中文设计稿深度优化，排版、字体、间距识别更精准',
            },
            {
              icon: <Layers size={24} />,
              title: '批量处理',
              desc: '多页面批量生成，Design System 统一管理，团队协作高效',
            },
            {
              icon: <CheckCircle size={24} />,
              title: '代码优化',
              desc: '生成代码自动格式化、响应式适配，可直接用于生产环境',
            },
            {
              icon: <Upload size={24} />,
              title: '多模态输入',
              desc: '支持截图、设计稿、视频录制、文字描述等多种输入方式',
            },
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#7342E2]/30 hover:bg-white/[0.06]"
            >
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300"
                style={{
                  background: 'rgba(115, 66, 226, 0.12)',
                  color: '#7342E2',
                }}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2 text-white font-semibold text-base">
                {feature.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] py-10 px-5 sm:px-8">
        <div className="mx-auto max-w-[1280px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/pixelcode-logo.png" alt="PixelCode" className="h-6 w-auto" />
            <span className="text-sm font-medium text-white/40">© 2026 PixelCode</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">文档</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">GitHub</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">隐私政策</a>
            <a href="#" className="text-sm text-white/40 hover:text-white/70 transition-colors">服务条款</a>
          </div>
        </div>
      </footer>
    </section>
  );
}

export { HeroSection };
