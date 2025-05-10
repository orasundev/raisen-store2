"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64">
        <nav className="space-y-2">
          <a href="/" className="block px-2 py-1 hover:bg-muted rounded">
            Dashboard
          </a>
          <a
            href="/settings"
            className="block px-2 py-1 hover:bg-muted rounded"
          >
            Settings
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
