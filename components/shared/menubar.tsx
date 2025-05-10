"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeColorToggle } from "../theme-color-toggle";
import { ThemeModeToggle } from "../theme-mode-toggle";

export default function MenuBar() {
  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-gray-900 text-white shadow">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64">
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-4">Products</h2>
                <ul className="space-y-2">
                  <li className="hover:text-primary cursor-pointer">Laptops</li>
                  <li className="hover:text-primary cursor-pointer">
                    Smartphones
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Accessories
                  </li>
                  <li className="hover:text-primary cursor-pointer">
                    Software
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
          <span className="font-bold text-xl">MyStore</span>
        </div>

        <div>
          <Button
            variant="outline"
            className="bg-white text-black hover:bg-gray-100"
          >
            Login
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Welcome to the Store</h1>
        <p>Browse our products using the menu.</p>
      </div>
    </div>
  );
}
