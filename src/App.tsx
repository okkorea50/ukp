import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from './firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';

// ─── Types ───────────────────────────────────────────────────
interface SubMenu {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  href: string;
  subs: SubMenu[];
}

// ─── Menu Data ───────────────────────────────────────────────
const MENUS: MenuItem[] = [
  {
    label: '소개',
    href: '#introduce',
    subs: [
      { label: '국제교류처 소개', href: '#introduce' },
      { label: '조직도', href: '#org' },
      { label: '연혁', href: '#history' },
    ],
  },
  {
    label: '사업안내',
    href: '#business',
    subs: [
      { label: '해외교류', href: '#exchange' },
      { label: '교환학생', href: '#exchange-student' },
      { label: '어학연수', href: '#language' },
      { label: '글로벌 현장학습', href: '#global' },
      { label: '유학생 입학', href: '#admission' },
    ],
  },
  {
    label: 'International Student',
    href: '#international',
    subs: [
      { label: 'Admission Information', href: '#admission-info' },
      { label: 'Notice', href: '#notice' },
      { label: 'PR Brochure', href: '#brochure' },
      { label: 'PR Video', href: '#pr-video' },
    ],
  },
  {
    label: '커뮤니티',
    href: '#community',
    subs: [
      { label: '공지사항', href: '#notice-board' },
      { label: '뉴스', href: '#news' },
      { label: '포토갤러리', href: '#gallery' },
      { label: '영상갤러리', href: '#vod' },
      { label: '프로그램일정', href: '#program' },
    ],
  },
];

const QUICK_LINKS = [
  { icon: '🌏', label: '해외교류', href: '#exchange' },
  { icon: '🎓', label: '교환학생', href: '#exchange-student' },
  { icon: '🏫', label: 'KIT한국어학당', href: '#korean' },
  { icon: '📚', label: '글로벌 현장학습', href: '#global' },
  { icon: '✈️', label: '어학연수', href: '#language' },
  { icon: '📝', label: '유학생 입학', href: '#admission' },
];

const NOTICES = [
  { title: '2026년 전문대학 글로벌 현장학습사업 참여학생 모집', date: '2026.01.22' },
  { title: '2025년 글로벌 리더 육성 프로그램(일본) 공고', date: '2025.11.17' },
  { title: '경남정보대학교 한국어학당 한국어강사 채용 공고', date: '2025.11.05' },
  { title: '2025년 글로벌 리더 육성 프로그램(호주) 선발 결과', date: '2025.05.29' },
];

const NEWS = [
  { title: "'외국인 유학생' 맞춤식 학습지원 프로그램 눈길", date: '2024.11.19' },
  { title: '지역 6개 기업과 "지역정주형 유학생 취업 협약" 체결', date: '2024.10.22' },
  { title: '유학생과 함께하는 한글날 행사', date: '2024.10.08' },
  { title: 'STS로보테크와 유학생 취업 업무협약 체결', date: '2024.09.13' },
];

const GALLERY_PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', caption: '베트남 수인목화빈대학 방문' },
  { src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', caption: '국제 교류 세미나' },
  { src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80', caption: '가을 FUN 피크닉' },
  { src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&q=80', caption: '유학생 진로 탐색 세미나' },
];

// ─── App Component ───────────────────────────────────────────
export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return unsub;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e) {
      console.error('Login failed:', e);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ═══════════════ Top Utility Bar ═══════════════ */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 h-12 flex items-center justify-between">
          {/* Left: School link */}
          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-gray-300 text-xs text-gray-600 hover:bg-gray-50 transition"
          >
            <span className="w-5 h-5 rounded-full bg-[#C1121F] text-white flex items-center justify-center text-[10px] font-bold">K</span>
            경남정보대학교 메인
          </a>

          {/* Center: Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-[#003049] font-bold text-2xl tracking-tight">KIT.</span>
            <span className="text-[#003049] font-semibold text-lg">국제교류처</span>
          </a>

          {/* Right: Login & Info */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {user ? (
              <div className="flex items-center gap-3">
                <img
                  src={user.photoURL || ''}
                  alt=""
                  className="w-7 h-7 rounded-full border border-gray-200"
                />
                <span className="text-xs text-gray-700 hidden sm:inline">{user.displayName}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 hover:text-[#C1121F] transition cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M18 12H9m0 0l3-3m-3 3l3 3" />
                  </svg>
                  로그아웃
                </button>
              </div>
            ) : (
              <button
                onClick={handleLogin}
                className="flex items-center gap-1 hover:text-[#003049] transition cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                </svg>
                로그인
              </button>
            )}
            <a href="#" className="flex items-center gap-1 hover:text-[#003049] transition">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              입학정보
            </a>
          </div>
        </div>
      </div>

      {/* ═══════════════ Table Navigation Menu ═══════════════ */}
      <nav className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
        {/* Desktop Menu */}
        <div className="hidden md:block bg-white border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto">
            <div
              className="grid grid-cols-4"
              onMouseLeave={() => setActiveMenu(null)}
            >
              {MENUS.map((menu, i) => (
                <div
                  key={i}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(i)}
                >
                  <a
                    href={menu.href}
                    className={`block text-center py-5 text-[15px] font-medium border-r border-gray-100 last:border-0 transition-all
                      ${activeMenu === i
                        ? 'bg-[#003049] text-white'
                        : 'text-gray-700 hover:text-[#003049]'
                      }`}
                  >
                    {menu.label}
                  </a>

                  {/* Dropdown */}
                  {activeMenu === i && (
                    <div className="absolute top-full left-0 w-full bg-white border border-t-0 border-gray-200 shadow-lg z-50">
                      {menu.subs.map((sub, j) => (
                        <a
                          key={j}
                          href={sub.href}
                          className="block px-6 py-3 text-sm text-gray-600 hover:bg-[#FDF0D5] hover:text-[#780000] transition-colors border-b border-gray-50 last:border-0"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden bg-[#003049] px-4 h-14 flex items-center justify-between">
          <span className="text-white font-semibold">메뉴</span>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg max-h-[70vh] overflow-y-auto">
            {MENUS.map((menu, i) => (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => setActiveMenu(activeMenu === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-sm font-medium text-gray-700 cursor-pointer"
                >
                  {menu.label}
                  <svg className={`w-4 h-4 transition-transform ${activeMenu === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeMenu === i && (
                  <div className="bg-gray-50">
                    {menu.subs.map((sub, j) => (
                      <a key={j} href={sub.href} className="block px-8 py-3 text-sm text-gray-600 hover:text-[#C1121F]">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* ═══════════════ Hero Banner ═══════════════ */}
      <section className="relative h-[350px] md:h-[420px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&q=80"
          alt="Students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center md:justify-end md:pr-24">
          <div className="text-center md:text-right">
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              품어라 세계를!
            </h1>
            <p className="text-xl md:text-3xl text-white/90 mt-2 font-light drop-shadow-md">
              더 큰 내일 향한 발걸음
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════ Quick Links Grid ═══════════════ */}
      <section className="max-w-[1200px] mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
          {QUICK_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="flex items-center gap-3 px-6 py-5 border-r border-b border-gray-100 last:border-r-0 hover:bg-[#FDF0D5] transition-colors group"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-[#780000] transition-colors">
                {link.label}
              </span>
            </a>
          ))}
          {/* CTA Card */}
          <a
            href="#admission-info"
            className="col-span-2 md:col-span-1 md:row-span-2 bg-[#780000] text-white flex items-center justify-center p-8 hover:bg-[#9A0000] transition-colors group"
          >
            <div className="text-center">
              <svg className="w-10 h-10 mx-auto mb-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <p className="text-sm font-semibold leading-relaxed">
                Admission information<br />for international students
              </p>
              <span className="inline-block mt-2 text-xs opacity-70 group-hover:opacity-100 transition">→ 자세히 보기</span>
            </div>
          </a>
        </div>
      </section>

      {/* ═══════════════ Photo Gallery ═══════════════ */}
      <section className="mt-16 bg-gray-800 py-12">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
            {GALLERY_PHOTOS.map((photo, i) => (
              <div key={i} className="relative group overflow-hidden aspect-[4/3]">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ News & Notices ═══════════════ */}
      <section className="py-16 bg-[#FDF0D5]/30">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            {/* 공지사항 */}
            <div>
              <div className="flex items-center justify-between mb-6 border-b-2 border-[#003049] pb-3">
                <h2 className="text-xl font-bold text-[#003049]">공지사항</h2>
                <a href="#notice-board" className="text-gray-400 hover:text-[#C1121F] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </a>
              </div>
              {/* Featured */}
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-800 mb-1 hover:text-[#C1121F] cursor-pointer transition">
                  {NOTICES[0].title}
                </h3>
                <p className="text-xs text-gray-400">{NOTICES[0].date}</p>
              </div>
              {/* List */}
              <ul className="space-y-3">
                {NOTICES.slice(1).map((n, i) => (
                  <li key={i} className="flex items-center justify-between text-sm group cursor-pointer">
                    <span className="text-gray-600 group-hover:text-[#C1121F] transition truncate pr-4">
                      · {n.title}
                    </span>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{n.date}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 센터뉴스 */}
            <div>
              <div className="flex items-center justify-between mb-6 border-b-2 border-[#003049] pb-3">
                <h2 className="text-xl font-bold text-[#003049]">센터뉴스 · News</h2>
                <a href="#news" className="text-gray-400 hover:text-[#C1121F] transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </a>
              </div>
              <div className="mb-4">
                <h3 className="text-base font-semibold text-gray-800 mb-1 hover:text-[#C1121F] cursor-pointer transition">
                  {NEWS[0].title}
                </h3>
                <p className="text-xs text-gray-400">{NEWS[0].date}</p>
              </div>
              <ul className="space-y-3">
                {NEWS.slice(1).map((n, i) => (
                  <li key={i} className="flex items-center justify-between text-sm group cursor-pointer">
                    <span className="text-gray-600 group-hover:text-[#C1121F] transition truncate pr-4">
                      · {n.title}
                    </span>
                    <span className="text-xs text-gray-400 whitespace-nowrap">{n.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ Footer ═══════════════ */}
      <footer className="bg-[#003049] text-gray-300 pt-10 pb-6">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded flex items-center justify-center">
                <span className="text-[#003049] font-bold text-xl">KIT.</span>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">경남정보대학교</p>
                <p className="text-xs text-gray-400">Kyungnam College of Information & Technology</p>
              </div>
            </div>

            {/* Quick Footer Links */}
            <div className="flex flex-wrap gap-4 text-xs">
              <a href="#" className="hover:text-white transition">캠퍼스맵</a>
              <a href="#" className="text-[#C1121F] font-semibold hover:text-white transition">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition">개인정보공시</a>
              <a href="#" className="hover:text-white transition">영상정보처리기기 운영 · 관리 방침</a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 text-xs text-gray-500 flex flex-col md:flex-row justify-between gap-2">
            <p>(우) 47011 부산광역시 사상구 주례로 45 경남정보대학교 미래관 1층 국제교류처 TEL (051) 320-1480 FAX (051) 328-9551</p>
            <p>Copyright (c) 2019 Kyungnam College of Information & Technology. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
