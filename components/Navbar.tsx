"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import { useState } from "react";

export function NavbarDemo() {
    const {user, signOut}=useAuth();
    const handleLogout=async ()=>{
        await signOut();
        redirect("/signin");
    }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full !bg-white">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" className="!text-black">Welcome! {user?.user_metadata.name}</NavbarButton>
            <NavbarButton variant="secondary" className="!bg-black !p-1.3 !text-white" onClick={handleLogout}>Logout</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            className="!bg-black"
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex w-full flex-col gap-4 !text-white !bg-black">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Welcome! {user?.user_metadata.name}
              </NavbarButton>
                <NavbarButton
                  variant="primary"
                  className="w-full"
                  onClick={handleLogout}
                  >
                  Logout
                </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* <DummyContent /> */}

      {/* Navbar */}
    </div>
  );
}

