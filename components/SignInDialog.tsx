"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignInDialog({ open, onOpenChange }) {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the sign-in or sign-up logic
    console.log("Form submitted");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px] w-full bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 p-6 rounded-2xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 text-transparent bg-clip-text mb-2">
            {isSignIn ? "Welcome Back" : "Join JTL Fund"}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {isSignIn ? "Enter your credentials to access your account" : "Create a new account to join JTL Fund"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <Input id="email" placeholder="Enter your email" className="w-full max-w-[350px]" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
              <Input id="password" type="password" placeholder="Enter your password" className="w-full max-w-[350px]" />
            </div>
          </div>
          <DialogFooter className="flex flex-col items-center space-y-4 mt-6">
            <Button type="submit" className="w-full max-w-[350px] bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold rounded-full hover:from-pink-600 hover:to-indigo-600 transition-all py-2">
              {isSignIn ? "Sign In" : "Sign Up"}
            </Button>
            {isSignIn && (
              <Button variant="link" className="text-sm text-indigo-600 hover:text-indigo-800">
                Forgot password?
              </Button>
            )}
            <Button 
              type="button"
              variant="link" 
              className="text-sm text-indigo-600 hover:text-indigo-800"
              onClick={() => setIsSignIn(!isSignIn)}
            >
              {isSignIn ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}