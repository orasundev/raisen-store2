import { ThemeColorToggle } from "@/components/theme-color-toggle";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import Image from "next/image";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "next-themes";
//import { useEffect, useState } from "react";
import MenuBar from "@/components/shared/menubar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const HomePage = async () => {
  await delay(5000);

  return (
    <>
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
