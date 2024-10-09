"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignInDialog } from "@/components/SignInDialog";

export function Navbar() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search functionality to be implemented");
  };

  return (
    <nav className="bg-white bg-opacity-90 p-4 sticky top-0 z-10 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text">
          JTL Fund
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Discover</Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Start a Project</Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input type="search" placeholder="Search projects..." className="w-64 pr-10" />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full"
              onClick={handleSearch}
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="outline" size="icon" className="rounded-full md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <Button 
            className="hidden md:inline-flex bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </Button>
        </div>
      </div>
      <SignInDialog open={showSignIn} onOpenChange={setShowSignIn} />
    </nav>
  );
}