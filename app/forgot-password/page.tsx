"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { api } from "@/lib/api";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleResetPassword = async () => {
    if (!email) {
      setMessage("Please enter your email address.");
      return;
    }

    setIsLoading(true);
    try {
      // Replace with your actual API endpoint for password reset
      const resetResponse = await api.fetch.auth.resetPassword({
        email,
      });

      if (resetResponse.success) {
        setMessage("Password reset email sent! Check your inbox.");
      } else {
        setMessage(resetResponse.response?.message || "Failed to send reset email.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:p-4">
      <Card className="w-full h-full sm:h-auto sm:max-w-sm sm:mx-auto border-0 sm:border shadow-none sm:shadow-sm rounded-none sm:rounded-lg">
        <CardHeader className="text-center pt-8 sm:pt-6">
          <CardTitle className="text-2xl">Reset Password</CardTitle>
          <CardDescription>
            Enter your email address and we'll send you a link to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 pb-8 sm:px-6 sm:pb-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            {message && (
              <p className={`text-sm ${message.includes("sent") ? "text-green-500" : "text-red-500"}`}>
                {message}
              </p>
            )}
            
            <Button 
              type="submit" 
              className="w-full" 
              onClick={handleResetPassword}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Reset Link"}
            </Button>
            
            <div className="text-center text-sm">
              Remember your password?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Back to Login
              </Link>
            </div>
            
            <div className="text-center text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}