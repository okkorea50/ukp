/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

// Declaration for the custom element to avoid TypeScript errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        icon: string;
        width?: string | number;
        'stroke-width'?: string | number;
      };
    }
  }
}

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-600 antialiased selection:bg-indigo-900 selection:text-white font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
        <div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-indigo-950 text-white flex items-center justify-center rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="font-serif text-xl font-medium tracking-tighter">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-semibold text-indigo-950 tracking-tight leading-none">GIET</span>
              <span className="text-[0.65rem] uppercase tracking-widest text-slate-500 font-medium">University</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors">학문</a>
            <a href="#" className="hover:text-indigo-900 transition-colors text-sm font-medium text-slate-600">입학</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors">연구</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors">캠퍼스 라이프</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-900 transition-colors">취업</a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex text-slate-500 hover:text-indigo-900 transition-colors cursor-pointer">
              <iconify-icon icon="solar:magnifer-linear" width="22" stroke-width="1.5"></iconify-icon>
            </button>
            <a href="#" className="bg-indigo-950 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-indigo-900 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group">
              지원하기
              <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform" stroke-width="1.5"></iconify-icon>
            </a>
            <button className="lg:hidden text-slate-800 cursor-pointer">
              <iconify-icon icon="solar:hamburger-menu-linear" width="24" stroke-width="1.5"></iconify-icon>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2886&auto=format&fit=crop" alt="Campus Architecture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-indigo-950/80 mix-blend-multiply"></div>
          <div className="bg-gradient-to-t from-indigo-950 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full mt-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-amber-300 text-xs font-medium uppercase tracking-wider mb-6 animate-fade-in-up">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
            2024-25 신입생 모집 중
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-tight mb-6 font-serif">
            혁신가를 빚다. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic font-serif">미래를 힘 있게.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            인도 중심부에서 학문적 우수성, 최첨단 연구, 글로벌 리더십 기술을 육성하는 최고의 기관입니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-950 rounded-full font-medium text-sm hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
              프로그램 살펴보기
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium text-sm hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2 group">
              <iconify-icon icon="solar:play-circle-linear" width="20" stroke-width="1.5"></iconify-icon>
              가상 투어
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <iconify-icon icon="solar:mouse-minimalistic-linear" width="20" stroke-width="1.5"></iconify-icon>
        </div>
      </header>

      {/* Key Statistics / Trust Bar */}
      <section className="bg-white border-b border-slate-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center md:text-left border-r border-slate-100 last:border-0">
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-indigo-950 mb-1">96%</h3>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">취업률</p>
        </div>
        <div className="text-center md:text-left border-r border-slate-100 last:border-0">
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-indigo-950 mb-1">50+</h3>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">특허 출원</p>
        </div>
        <div className="text-center md:text-left border-r border-slate-100 last:border-0">
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-indigo-950 mb-1">25Cr</h3>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">연구 지원금</p>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl md:text-4xl font-serif font-medium text-indigo-950 mb-1">100+</h3>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">기업 파트너</p>
        </div>
      </section>

      {/* Academics Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-2 block">학문</span>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 tracking-tight">우수 학부</h2>
              <p className="mt-4 text-slate-500 max-w-md font-light">다양한 분야에서 차세대 리더를 양성하기 위한 맞춤형 융합 학습을 제공합니다.</p>
            </div>
            <a href="#" className="text-indigo-900 text-sm font-medium hover:text-amber-600 transition-colors flex items-center gap-1 group">
              모든 프로그램 보기 
              <iconify-icon icon="solar:arrow-right-linear" class="group-hover:translate-x-1 transition-transform" stroke-width="1.5"></iconify-icon>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <a href="#" className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 relative overflow-hidden">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-900 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:monitor-smartphone-linear" width="24" stroke-width="1.5"></iconify-icon>
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">공학 및 기술</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">컴퓨터 과학, AI & ML, 토목, 기계 및 전자 공학.</p>
              <span className="inline-flex items-center text-xs font-medium text-indigo-900 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                강의 계획서 보기 <iconify-icon icon="solar:arrow-right-linear" class="ml-1"></iconify-icon>
              </span>
            </a>

            {/* Card 2 */}
            <a href="#" className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 relative overflow-hidden">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-900 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:graph-up-linear" width="24" stroke-width="1.5"></iconify-icon>
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">경영학</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">MBA, BBA, 그리고 재무, 마케팅, HR 전문 프로그램.</p>
              <span className="inline-flex items-center text-xs font-medium text-indigo-900 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                강의 계획서 보기 <iconify-icon icon="solar:arrow-right-linear" class="ml-1"></iconify-icon>
              </span>
            </a>

            {/* Card 3 */}
            <a href="#" className="group bg-white p-8 rounded-xl border border-slate-200 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-900/5 transition-all duration-300 relative overflow-hidden">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-indigo-900 group-hover:text-white transition-colors">
                <iconify-icon icon="solar:test-tube-minimalistic-linear" width="24" stroke-width="1.5"></iconify-icon>
              </div>
              <h3 className="text-xl font-serif font-medium text-slate-900 mb-3 group-hover:text-indigo-900 transition-colors">농업 및 과학</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">첨단 농업 관행, 생명 공학 및 순수 과학.</p>
              <span className="inline-flex items-center text-xs font-medium text-indigo-900 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                강의 계획서 보기 <iconify-icon icon="solar:arrow-right-linear" class="ml-1"></iconify-icon>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Research & Innovation Highlight (Dark Mode) */}
      <section className="py-24 bg-indigo-950 text-white relative overflow-hidden">
        {/* Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-900/50 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-amber-500"></span>
                <span className="text-amber-500 text-xs font-bold tracking-widest uppercase">연구 및 혁신</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight mb-6 leading-tight">
                <span className="italic text-slate-300">발견</span>을 통해 미래를 개척합니다.
              </h2>
              <p className="text-indigo-200 text-lg font-light mb-8 max-w-lg">
                15개 이상의 첨단 연구 센터가 재생 에너지부터 AI 윤리까지 글로벌 과제를 해결하고 있습니다. 호기심이 영향력을 만나는 커뮤니티에 참여하세요.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" class="text-amber-500 mt-1" width="20"></iconify-icon>
                  <span className="text-sm text-slate-200">스타트업을 위한 최첨단 인큐베이션 센터</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" class="text-amber-500 mt-1" width="20"></iconify-icon>
                  <span className="text-sm text-slate-200">DRDO 및 ISRO와의 협력 프로젝트</span>
                </li>
                <li className="flex items-start gap-3">
                  <iconify-icon icon="solar:check-circle-linear" class="text-amber-500 mt-1" width="20"></iconify-icon>
                  <span className="text-sm text-slate-200">우수 학자를 위한 전용 박사 펠로우십</span>
                </li>
              </ul>

              <a href="#" className="inline-flex items-center gap-2 text-white border-b border-amber-500 pb-1 hover:text-amber-400 transition-colors">
                연구 생태계 살펴보기
                <iconify-icon icon="solar:arrow-right-linear" stroke-width="1.5"></iconify-icon>
              </a>
            </div>

            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-indigo-600 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition duration-500"></div>
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop" alt="Lab Research" className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px] grayscale group-hover:grayscale-0 transition duration-700" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-amber-300 uppercase tracking-widest mb-1">최신 혁신</p>
                    <p className="text-white font-medium">지속 가능한 에너지 저장 솔루션</p>
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-950">
                    <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placements & Connect */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-indigo-600 text-xs font-bold tracking-widest uppercase mb-2 block">취업 성과</span>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 tracking-tight">캠퍼스에서 기업으로</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Highlight Box */}
            <div className="col-span-1 bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col justify-center text-center">
              <div className="inline-block mx-auto mb-4 p-3 bg-amber-100 rounded-full text-amber-600">
                <iconify-icon icon="solar:crown-star-linear" width="32" stroke-width="1.5"></iconify-icon>
              </div>
              <h3 className="text-5xl font-serif font-medium text-slate-900 mb-2">₹42 LPA</h3>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wide">최고 연봉 제안</p>
            </div>

            {/* Recruiters Grid */}
            <div className="col-span-1 lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
               {/* Recruiter Logos (Using text representation for style matching without external SVG assets issues) */}
               <div className="flex items-center justify-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <span className="font-sans font-bold text-lg tracking-tight text-blue-600">Google</span>
               </div>
               <div className="flex items-center justify-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <span className="font-serif font-bold text-lg tracking-tight text-slate-900">Amazon</span>
               </div>
               <div className="flex items-center justify-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <span className="font-sans font-bold text-lg tracking-tight text-blue-800">TCS</span>
               </div>
               <div className="flex items-center justify-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <span className="font-sans font-bold text-lg tracking-tight text-indigo-600">Infosys</span>
               </div>
               <div className="flex items-center justify-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <span className="font-sans font-bold text-lg tracking-tight text-orange-600">Wipro</span>
               </div>
               <div className="flex items-center justify-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <span className="font-sans font-bold text-lg tracking-tight text-blue-500">Capgemini</span>
               </div>
               <div className="flex items-center justify-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <span className="font-sans font-bold text-lg tracking-tight text-red-600">Accenture</span>
               </div>
               <div className="flex items-center justify-center p-6 border border-slate-100 rounded-xl hover:shadow-md transition bg-white grayscale hover:grayscale-0 opacity-70 hover:opacity-100">
                <span className="font-sans font-bold text-lg tracking-tight text-emerald-600">Deloitte</span>
               </div>
            </div>
          </div>
          
          <div className="text-center">
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 border border-slate-200 px-6 py-3 rounded-full hover:bg-slate-50 transition">
              2024년 취업 보고서 보기
              <iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon>
            </a>
          </div>
        </div>
      </section>

      {/* Campus Life Gallery */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-serif font-medium text-slate-900 tracking-tight">GIET에서의 생활</h2>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition text-slate-600 cursor-pointer">
                <iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
              </button>
              <button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-md transition text-slate-600 cursor-pointer">
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Student Event" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-medium mb-1">연례 문화 축제</h3>
                <p className="text-sm text-white/80">다양성과 재능을 기념합니다.</p>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=2874&auto=format&fit=crop" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Library" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
              <div className="absolute bottom-4 left-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                <p className="text-sm font-medium">중앙 도서관</p>
              </div>
            </div>
            <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Sports" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
              <div className="absolute bottom-4 left-4 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300">
                <p className="text-sm font-medium">스포츠 단지</p>
              </div>
            </div>
            <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-2xl">
              <img src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=2874&auto=format&fit=crop" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" alt="Tech Lab" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-medium mb-1">혁신 허브</h3>
                <p className="text-sm text-white/80">아이디어가 현실이 되는 곳.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Happenings */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
           <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-4">
            <h2 className="text-3xl font-serif font-medium text-slate-900 tracking-tight">대학 소식</h2>
            <a href="#" className="text-indigo-600 text-sm font-medium hover:text-indigo-800">아카이브 보기</a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Convocation" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-600">행사</span>
                <span className="text-xs text-slate-400">2023년 10월 24일</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 group-hover:text-indigo-800 transition-colors leading-snug mb-2">
                제25회 학위수여식: 학문적 우수성을 기념하며
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2">K. Sivan 박사를 주빈으로 모시고 1,200명 학생들의 졸업을 축하했습니다.</p>
            </article>

            {/* News Item 2 */}
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Workshop" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600">학술</span>
                <span className="text-xs text-slate-400">2023년 10월 18일</span>
              </div>
              <h3 className="text-lg font-medium text-slate-900 group-hover:text-indigo-800 transition-colors leading-snug mb-2">
                지속 가능한 발전을 위한 국제 컨퍼런스
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2">15개국 대표단이 모여 미래 지속 가능성 목표를 논의했습니다.</p>
            </article>

            {/* Notice Board Style */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-6">
              <h3 className="font-serif text-xl text-indigo-950 mb-6 flex items-center gap-2">
                <iconify-icon icon="solar:bell-bing-linear" class="text-amber-500"></iconify-icon>
                최신 공지
              </h3>
              <ul className="space-y-4">
                <li className="pb-4 border-b border-slate-200 last:border-0">
                  <a href="#" className="block group">
                    <span className="text-[10px] text-slate-400 font-medium">11월 01일</span>
                    <p className="text-sm text-slate-700 font-medium group-hover:text-indigo-600 transition">가을 학기 시험 일정 발표</p>
                  </a>
                </li>
                <li className="pb-4 border-b border-slate-200 last:border-0">
                  <a href="#" className="block group">
                    <span className="text-[10px] text-slate-400 font-medium">10월 28일</span>
                    <p className="text-sm text-slate-700 font-medium group-hover:text-indigo-600 transition">2024년 박사 과정 모집</p>
                  </a>
                </li>
                <li className="pb-4 last:border-0">
                  <a href="#" className="block group">
                    <span className="text-[10px] text-slate-400 font-medium">10월 25일</span>
                    <p className="text-sm text-slate-700 font-medium group-hover:text-indigo-600 transition">동계 인턴십 모집: 등록</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-950 text-slate-300 pt-20 pb-10 border-t border-indigo-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-white text-indigo-950 flex items-center justify-center rounded shadow-lg">
                  <span className="font-serif text-lg font-bold">G</span>
                </div>
                <span className="font-serif text-xl text-white tracking-tight">GIET University</span>
              </div>
              <p className="text-sm leading-relaxed text-indigo-200/80 mb-6 pr-8">
                Gunupur, Odisha, India - 765022.<br />
                국가와 세계에 봉사할 수 있는 지식, 기술, 가치를 갖춘 학생들을 양성합니다.
              </p>
              <div className="flex gap-x-4 gap-y-4">
                <a href="#" className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                  <iconify-icon icon="solar:facebook-linear" width="16"></iconify-icon>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                  <iconify-icon icon="solar:twitter-linear" width="16"></iconify-icon>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                  <iconify-icon icon="solar:instagram-linear" width="16"></iconify-icon>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-indigo-900 flex items-center justify-center text-white hover:bg-amber-500 transition-colors">
                  <iconify-icon icon="solar:linkedin-linear" width="16"></iconify-icon>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">학문</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">프로그램</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">학과</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">학사 일정</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">입학</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-amber-400 transition-colors">지원 방법</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">장학금</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">등록금</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-medium mb-6 text-sm uppercase tracking-wider">소식 받기</h4>
              <p className="text-xs text-indigo-200 mb-4">최신 소식을 받아보시려면 뉴스레터를 구독하세요.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="이메일 주소" className="bg-indigo-900/50 border border-indigo-800 rounded-lg px-4 py-2 text-sm text-white w-full focus:outline-none focus:border-amber-500 transition-colors placeholder-indigo-400" />
                <button className="bg-amber-500 text-indigo-950 px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-400 transition-colors">
                  구독
                </button>
              </form>
              <div className="mt-8 flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Accreditation Placeholders */}
                <div className="h-8 border border-white/30 rounded px-2 flex items-center text-xs font-bold text-white">NAAC 'A+'</div>
                <div className="h-8 border border-white/30 rounded px-2 flex items-center text-xs font-bold text-white">NBA</div>
                <div className="h-8 border border-white/30 rounded px-2 flex items-center text-xs font-bold text-white">UGC</div>
              </div>
            </div>
          </div>

          <div className="border-t border-indigo-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-indigo-300">
            <p>© 2024 GIET University. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">개인정보 처리방침</a>
              <a href="#" className="hover:text-white">이용약관</a>
              <a href="#" className="hover:text-white">사이트맵</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
