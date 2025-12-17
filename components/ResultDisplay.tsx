"use client";

import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface ResultDisplayProps {
  keyword: string;
  nickname: string;
  onBack?: () => void;
}

export function ResultDisplay({
  keyword,
  nickname,
  onBack,
}: ResultDisplayProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-900 p-8 border-2 border-dashed border-red-500 dark:border-red-400 rounded-lg">
        <div className="text-center space-y-4">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            根据你的选择，系统为你生成了专属年度关键词：
          </p>
          <p className="text-5xl font-bold text-red-500 dark:text-red-400">
            {keyword}
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            快分享给你的朋友们看看吧！
          </p>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          onClick={onBack}
          variant="outline"
          className="flex-1 text-gray-600 dark:text-gray-300 border-gray-400 dark:border-neutral-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
        >
          返回重新测试
        </Button>
        <GradientButton
          className="flex-1"
          onClick={() =>
            window.open("https://github.com/YuenSzeHong", "_blank")
          }
        >
          <GitHubLogoIcon className="h-4 w-4 mr-2" />
          访问我的 GitHub
        </GradientButton>
      </div>
    </div>
  );
}
