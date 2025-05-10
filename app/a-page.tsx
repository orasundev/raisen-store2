"use client";

import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import Image from "next/image";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* 6. Theme Toggle */}
      <div>
        <h2 className="text-lg font-semibold mb-2">6. Theme Toggle</h2>
        <div className="flex gap-2">
          <ThemeColorToggle />
          <ThemeModeToggle />
        </div>
        {/* 5. Alert */}
        <div>
          <h2 className="text-lg font-semibold mb-2">5. Alert</h2>
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              This is an alert from @shadcn/ui
            </AlertDescription>
          </Alert>
        </div>

        {/* 1. Button */}
        <div>
          <h2 className="text-lg font-semibold mb-2">1. Button</h2>
          <Button variant="default">Click Me</Button>
        </div>

        {/* 2. Card */}
        <div>
          <h2 className="text-lg font-semibold mb-2">2. Card</h2>
          <Card>
            <CardHeader>
              <CardTitle>Shadcn Card</CardTitle>
            </CardHeader>
            <CardContent>This is a basic card using @shadcn/ui</CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
