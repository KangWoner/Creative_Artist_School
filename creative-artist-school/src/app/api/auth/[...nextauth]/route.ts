import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "GOOGLE_CLIENT_ID",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "GOOGLE_CLIENT_SECRET",
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID || "KAKAO_CLIENT_ID",
      clientSecret: process.env.KAKAO_CLIENT_SECRET || "KAKAO_CLIENT_SECRET",
    }),
  ],
  pages: {
    signIn: '/login', // 커스텀 로그인 페이지 경로
  },
  callbacks: {
    async session({ session, token }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "default_secret_for_development_only",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
