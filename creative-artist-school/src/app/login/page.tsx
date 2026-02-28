"use client";

import { signIn } from "next-auth/react";
import { LogIn, BookOpen } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div className="text-center">
          <BookOpen className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
            Creative Artist School
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            학부모 및 교사용 로그인
          </p>
        </div>
        <div className="mt-8 space-y-4">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="group relative flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LogIn className="h-5 w-5 text-gray-400 group-hover:text-blue-500" aria-hidden="true" />
            </span>
            Google 계정으로 로그인
          </button>

          <button
            onClick={() => signIn("kakao", { callbackUrl: "/dashboard" })}
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#FEE500] px-4 py-3 text-sm font-medium text-black hover:bg-[#FDD800] focus:outline-none focus:ring-2 focus:ring-[#FDD800] focus:ring-offset-2 transition-colors duration-200"
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
             <LogIn className="h-5 w-5 text-black opacity-70" aria-hidden="true" />
            </span>
            카카오톡 계정으로 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
