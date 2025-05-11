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
import sampleData from "@/db/sample-data";
import ProductList from "@/components/products/product-list";

export const metadata: Metadata = {
  title: "Home",
};
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const HomePage = async () => {
  await delay(5000);
  //console.log(sampleData);
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Latest Arrivals."
        limit={4}
      />
    </>
  );
};

export default HomePage;
