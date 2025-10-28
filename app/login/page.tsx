import Image from "next/image";
import LoginCard from "../../components/login/loginCard";
export default function LoginPage() {
  return (
    <main className="flex flex-col min-h-screen">    
      <div className="flex-1 content-center justify-items-center">
          <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-md">
            <LoginCard/>
          </div>
      </div>
   </main>
  );
}
