import { Navigate, Route, Routes } from "react-router";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from "react";
import PageLoader from "./components/PageLoader";

import { Toaster } from "react-hot-toast";

function App() {
  const { checkAuth, isCheckingAuth, authUser } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <PageLoader />;

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden bg-gradient-to-br from-[#f9f2e5] via-[#fef9f0] to-[#eaf4ef]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,146,60,0.2),transparent_28%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.18),transparent_26%),radial-gradient(circle_at_60%_85%,rgba(244,114,182,0.16),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_35%)]" />
      <div className="pointer-events-none absolute -top-16 -right-8 size-64 rounded-full border border-orange-200/60 bg-orange-100/40 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 size-72 rounded-full border border-emerald-200/50 bg-emerald-100/35 blur-3xl" />

      <div className="relative z-10 w-full flex items-center justify-center">
        <Routes>
          <Route path="/" element={authUser ? <ChatPage /> : <Navigate to={"/login"} />} />
          <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
          <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
        </Routes>
      </div>

      <Toaster />
    </div>
  );
}
export default App;
