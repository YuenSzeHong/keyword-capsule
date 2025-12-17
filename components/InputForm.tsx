"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  generateKeywordSchema,
  type GenerateKeywordInput,
} from "@/lib/schemas";
import { generateKeyword } from "@/app/actions";
import { USE_BIRTH_MONTH } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePicker } from "@/components/ui/date-picker";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface InputFormProps {
  onSuccess: (keyword: string, nickname: string) => void;
}

export function InputForm({ onSuccess }: InputFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<GenerateKeywordInput>({
    resolver: zodResolver(generateKeywordSchema),
    defaultValues: {
      nickname: "",
      gender: "unknown",
      birthday: "",
    },
  });

  async function onSubmit(values: GenerateKeywordInput) {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("nickname", values.nickname);
      formData.append("gender", values.gender);
      formData.append("birthday", values.birthday || "");

      const result = await generateKeyword(null, formData);

      if ("error" in result) {
        form.setError("root", { message: result.error });
      } else {
        onSuccess?.(result.keyword, values.nickname);
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nickname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>你的昵称</FormLabel>
              <FormControl>
                <Input
                  placeholder="输入你的昵称"
                  {...field}
                  disabled={isLoading}
                  className="h-12 text-base"
                />
              </FormControl>
              <p className="text-xs text-muted-foreground">
                输入你的昵称来生成年度关键词
              </p>
              <FormMessage />
            </FormItem>
          )}
        />

        {USE_BIRTH_MONTH && (
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem>
                <FormLabel>生日</FormLabel>
                <FormControl>
                  <DatePicker
                    date={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => {
                      field.onChange(
                        date ? date.toISOString().split("T")[0] : ""
                      );
                    }}
                    disabled={isLoading}
                  />
                </FormControl>
                <p className="text-xs text-muted-foreground">选择你的生日</p>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>性别</FormLabel>
              <FormControl>
                <div className="flex gap-6 justify-center">
                  {[
                    { value: "male", emoji: "♂", label: "男" },
                    { value: "female", emoji: "♀", label: "女" },
                    { value: "unknown", emoji: "?", label: "未知" },
                  ].map((option) => {
                    const selected = field.value === option.value;
                    const selectedStylesByValue: Record<string, string> = {
                      male: "border-blue-500 bg-blue-50 ring-4 ring-blue-200 ring-offset-2 ring-offset-white text-blue-600 scale-105 dark:border-blue-400 dark:bg-blue-500/20 dark:ring-blue-900 dark:ring-offset-neutral-950 dark:text-blue-300",
                      female:
                        "border-pink-500 bg-pink-50 ring-4 ring-pink-200 ring-offset-2 ring-offset-white text-pink-600 scale-105 dark:border-pink-400 dark:bg-pink-500/20 dark:ring-pink-900 dark:ring-offset-neutral-950 dark:text-pink-300",
                      unknown:
                        "border-purple-500 bg-purple-50 ring-4 ring-purple-200 ring-offset-2 ring-offset-white text-purple-600 scale-105 dark:border-purple-400 dark:bg-purple-500/20 dark:ring-purple-900 dark:ring-offset-neutral-950 dark:text-purple-300",
                    };
                    const labelColorByValue: Record<string, string> = {
                      male: "text-blue-600 dark:text-blue-300",
                      female: "text-pink-600 dark:text-pink-300",
                      unknown: "text-purple-600 dark:text-purple-300",
                    };
                    return (
                      <div
                        key={option.value}
                        className="flex flex-col items-center gap-2"
                      >
                        <button
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          aria-label={option.label}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              field.onChange(option.value);
                            }
                          }}
                          onClick={() => field.onChange(option.value)}
                          className={`gender-circle w-16 h-16 rounded-full border-2 flex items-center justify-center text-3xl transition-all duration-200 hover:scale-110 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600 shadow-sm ${
                            selected
                              ? selectedStylesByValue[option.value]
                              : "border-gray-300 bg-white hover:border-gray-400 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-neutral-600"
                          }`}
                        >
                          {option.emoji}
                        </button>
                        <span
                          className={`text-sm ${
                            selected
                              ? labelColorByValue[option.value]
                              : "text-gray-600 dark:text-gray-300"
                          }`}
                        >
                          {option.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {form.formState.errors.root && (
          <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
            {form.formState.errors.root.message}
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "生成中..." : "点击查看"}
        </Button>
      </form>
    </FormProvider>
  );
}
