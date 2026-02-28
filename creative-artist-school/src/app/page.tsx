import Link from "next/link";
import { LogIn, Palette, Trophy, Calendar } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

      {/* 팝업 배너 (원장이 승인한 공모전 시뮬레이션) */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 px-4 shadow-md relative z-50">
        <p className="text-sm md:text-base font-semibold flex justify-center items-center gap-2">
          <Trophy size={18} className="text-yellow-400" />
          [공지] 제20회 전국 어린이 환경 미술대회 안내 (원장님 추천)
          <span className="bg-yellow-400 text-blue-900 px-2 py-0.5 rounded-full text-xs ml-2 cursor-pointer hover:bg-yellow-300">
            상세보기
          </span>
        </p>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Palette className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Creative Artist School</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition">
                <LogIn className="h-5 w-5 mr-1" />
                로그인 / 학생관리
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 lg:py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Learning by Doing</span>
          창의적 예술가를 이룹니다
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mb-10">
          학생의 작품을 저장하고, 발전 과정을 AI로 분석하여 학부모님께 생생하게 전달합니다.
          초등학교 저학년부터 중학생까지, 3명 기준 소수정예 맞춤 지도를 경험하세요.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/dashboard" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition shadow-lg shadow-blue-200">
            강사 / 원장님 접속
          </Link>
          <Link href="/login" className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border-2 border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition">
            학부모님 로그인
          </Link>
        </div>

        {/* 핵심 기능 안내 */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="p-3 bg-blue-100 rounded-full mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">3인 1조 밀착 지도</h3>
            <p className="text-gray-500 text-sm">학생 개개인의 진도와 출결, 구독(수강) 사항을 철저하게 관리하고 맞춤형 지도를 제공합니다.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="p-3 bg-indigo-100 rounded-full mb-4">
              <Palette className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">AI 기반 발전과정 분석</h3>
            <p className="text-gray-500 text-sm">매 수업마다 학생의 작품을 아카이빙하고, 첨단 AI(Gemini) 분석을 통해 학부모님께 섬세한 피드백을 전달합니다.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="p-3 bg-yellow-100 rounded-full mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">맞춤형 공모전 매칭</h3>
            <p className="text-gray-500 text-sm">학생 수준에 적절한 최근 공모전을 자동으로 검색하고, 원장님의 추천으로 홈페이지에 안내해 동기를 부여합니다.</p>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Creative Artist School. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
