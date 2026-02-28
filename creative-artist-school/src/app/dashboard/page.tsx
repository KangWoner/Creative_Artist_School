"use client";

import { useState } from "react";
import { Send, Upload, UserPlus, Users, Trophy } from "lucide-react";

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  // Gemini API를 모방하는 프론트엔드 함수 (실제로는 API Route 호출 예정)
  const handleAnalyze = async () => {
    setLoading(true);
    // API 호출을 시뮬레이션
    setTimeout(() => {
      setAnalysisResult({
        summary: "이번 수업에서는 학생이 수채화 기법을 사용하여 풍경을 표현했습니다. 색상 혼합에 대한 이해도가 전반적으로 상승했습니다.",
        progress_analysis: "이전 달의 '정물화' 작품에 비해 붓 터치가 훨씬 대담해지고, 빛과 그림자의 대비를 표현하는 능력이 30% 이상 향상되었습니다.",
        custom_advice: "가정에서도 아이가 다양한 색채를 자유롭게 섞어보는 놀이를 할 수 있도록 격려해주세요. 특히 따뜻한 색과 차가운 색의 조화를 칭찬해주시면 좋습니다.",
        recommended_focus: "다음 수업에서는 원근법을 활용한 공간감 표현에 집중할 예정입니다."
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* 헤더 부분 */}
        <header className="flex justify-between items-center pb-4 border-b border-gray-200">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">강사 대시보드</h1>
            <p className="text-sm text-gray-500 mt-1">담당 반(3인 1조) 학생 관리 및 피드백 작성</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <UserPlus size={18} />
            <span>새 학생 등록</span>
          </button>
        </header>

        {/* 3인 1조 그룹반 관리 카드 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4 text-blue-800">
            <Users size={24} />
            <h2 className="text-xl font-semibold">창의 1반 (오후 3시 그룹)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['김민수 (초3)', '이서연 (초4)', '박지훈 (초3)'].map((student, idx) => (
              <div key={idx} className="border border-gray-200 p-4 rounded-lg bg-gray-50 flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center font-bold text-xl mb-3">
                  {student[0]}
                </div>
                <h3 className="font-medium text-gray-800">{student}</h3>
                <p className="text-xs text-gray-500 mt-1">출석: 10/12 | 주 2회 구독</p>
                <button className="mt-3 text-sm text-blue-600 border border-blue-200 bg-white px-3 py-1 rounded hover:bg-blue-50">
                  수업 내용 작성
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 수업 피드백 및 AI 분석 작성 폼 */}
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
            <Upload size={20} className="text-green-600" />
            수업 결과 및 피드백 (김민수 학생)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 입력 폼 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">오늘의 작품 업로드</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 cursor-pointer">
                  <Upload size={28} className="mb-2" />
                  <span className="text-sm">클릭하여 이미지 업로드</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">강사 메모 (AI 분석용)</label>
                <textarea
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  rows={4}
                  placeholder="수업 중 학생의 특징, 사용한 기법, 감정 상태 등을 간단히 적어주세요."
                  defaultValue="수채화로 바다 풍경을 그림. 색 섞는 것을 재밌어하고 붓 터치가 과감해짐."
                ></textarea>
              </div>
              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "AI 분석 중..." : "AI 조언 생성하기 (Gemini)"}
              </button>
            </div>

            {/* AI 분석 결과 출력 */}
            <div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100 flex flex-col h-full">
              <h3 className="font-semibold text-blue-900 mb-4 border-b border-blue-200 pb-2">
                🤖 AI 발전 과정 분석 및 학부모 조언
              </h3>

              {!analysisResult && !loading && (
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
                  좌측에서 메모를 작성하고 AI 조언을 생성해보세요.
                </div>
              )}

              {loading && (
                <div className="flex-1 flex items-center justify-center text-blue-500 animate-pulse">
                  Gemini API가 학생의 발전 과정을 분석하고 있습니다...
                </div>
              )}

              {analysisResult && (
                <div className="space-y-4 text-sm text-gray-700 flex-1">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <strong className="block text-indigo-700 mb-1">📝 요약</strong>
                    {analysisResult.summary}
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <strong className="block text-green-700 mb-1">📈 발전 분석</strong>
                    {analysisResult.progress_analysis}
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <strong className="block text-orange-700 mb-1">💡 학부모 맞춤 조언</strong>
                    {analysisResult.custom_advice}
                  </div>
                  <div className="bg-white p-3 rounded shadow-sm">
                    <strong className="block text-blue-700 mb-1">🎯 다음 목표</strong>
                    {analysisResult.recommended_focus}
                  </div>
                  <button className="mt-4 w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                    <Send size={16} />
                    <span>학부모에게 전송 및 저장</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 공모전 추천 시스템 (원장/강사 뷰) */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm border border-indigo-100 mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-indigo-900 flex items-center gap-2">
              <Trophy size={24} className="text-yellow-500" />
              최근 맞춤형 공모전 추천 (초등부)
            </h2>
            <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full font-medium">AI 자동 검색</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between border border-indigo-50">
            <div>
              <h3 className="font-bold text-gray-800 text-lg">제20회 전국 어린이 환경 미술대회</h3>
              <p className="text-sm text-gray-600 mt-1">대상: 초등 1~6학년 | 기한: 2024.11.30까지</p>
              <p className="text-xs text-gray-500 mt-1">추천 사유: 자연과 풍경 묘사에 뛰어난 현재 그룹반 학생들에게 적합합니다.</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-sm bg-indigo-600 text-white rounded hover:bg-indigo-700 transition font-medium">
                홈페이지 팝업으로 수락(Accept)
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
