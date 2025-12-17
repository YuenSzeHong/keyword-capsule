"use client";

import { useState } from "react";
import { InputForm } from "@/components/InputForm";
import { ResultDisplay } from "@/components/ResultDisplay";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KeywordResult {
  keyword: string;
  nickname: string;
}

export default function Home() {
  const [result, setResult] = useState<KeywordResult | null>(null);

  return (
    <main className="min-h-screen flex items-center justify-center p-5 bg-white dark:bg-neutral-950">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-end mb-4">
          <ThemeSwitcher />
        </div>
        <h1 className="text-5xl font-bold text-gray-800 dark:text-gray-100 mb-10 drop-shadow-sm text-center">
          你的年度关键词
        </h1>
        {result ? (
          <ResultDisplay
            keyword={result.keyword}
            nickname={result.nickname}
            onBack={() => setResult(null)}
          />
        ) : (
          <InputForm
            onSuccess={(keyword, nickname) =>
              setResult({
                keyword,
                nickname,
              })
            }
          />
        )}
      </div>
    </main>
  );
}
