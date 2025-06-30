"use client";

import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { Menu, X, MoveRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  href?: string;
  description?: string;
  items?: SubNavItem[];
  isHomePageLink?: boolean;
  dropdownCta?: {
    text: string;
    href: string;
  };
}

interface SubNavItem {
  title: string;
  href: string;
  isHashLink?: boolean;
}

const homePageSections: SubNavItem[] = [
  { title: "Welcome", href: "#hero", isHashLink: true },
  { title: "About (Section)", href: "#about", isHashLink: true },
  { title: "Services", href: "#services", isHashLink: true },
  { title: "Testimonials", href: "#testimonials", isHashLink: true },
  { title: "Achievements", href: "#achievements", isHashLink: true },
  { title: "Events", href: "#events", isHashLink: true },
  { title: "Collaborations", href: "#collaborations", isHashLink: true },
  { title: "Gallery", href: "#gallery", isHashLink: true },
];

const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
    isHomePageLink: true,
    description: "Navigate to different sections of our homepage.",
    items: homePageSections,
    dropdownCta: { text: "Explore Homepage", href: "/" },
  },
  {
    title: "About",
    description: "Learn more about Neeti Varta, our mission, and our insights.",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Neeti Kaushal", href: "/neeti-kaushal" },
      { title: "Neeti Sahayak", href: "/neeti-sahayak" },
      { title: "Careers", href: "/careers" },
    ],
    dropdownCta: { text: "Discover Our Story", href: "/about" },
  },
  {
    title: "Programs",
    description:
      "Explore our diverse range of educational and engagement programs.",
    items: [
      { title: "Courses", href: "/courses" },
      { title: "Events", href: "/events" },
      { title: "Blogs", href: "/comming-soon" },
    ],
    dropdownCta: { text: "View All Programs", href: "/courses" },
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const DropdownLinkItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { isHashLink?: boolean }
>(({ className, title, href, isHashLink, ...props }, ref) => {
  const commonClasses =
    "flex items-center justify-between w-full p-3 text-sm font-medium rounded-md no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-sans";
  const content = (
    <>
      <span>{title}</span>
      <MoveRight className="w-4 h-4 text-muted-foreground" />
    </>
  );
  if (isHashLink) {
    return (
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn(commonClasses, className)}
          {...props}
        >
          {content}
        </a>
      </NavigationMenuLink>
    );
  }
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href || "#"}
        ref={ref}
        className={cn(commonClasses, className)}
        {...props}
      >
        {content}
      </Link>
    </NavigationMenuLink>
  );
});
DropdownLinkItem.displayName = "DropdownLinkItem";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null
  );

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const useTransparentHeader = isHomePage && !isScrolled;

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
  };

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerActualHeight =
        (document.querySelector("header > div") as HTMLElement)
          ?.offsetHeight || (window.innerWidth < 640 ? 60 : 70);
      const headerOffset = headerActualHeight + (window.innerWidth < 640 ? 20 : 40);

      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (
    href: string,
    isHashLink?: boolean,
    isMobile = false
  ) => {
    if (isHashLink) {
      if (window.location.pathname === "/" || href.startsWith("/#")) {
        const hash = href.includes("#")
          ? href.substring(href.indexOf("#"))
          : "";
        if (hash) smoothScrollTo(hash);
      } else {
        window.location.href = `/${
          href.startsWith("#") ? href : "#" + href.split("#")[1]
        }`;
      }
    }
    if (isMobile) {
      setIsMobileMenuOpen(false);
      setOpenMobileSubmenu(null);
    }
  };

  const toggleMobileSubmenu = (title: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === title ? null : title);
  };

  const headerBaseTextColor =
    useTransparentHeader
      ? "text-white dark:text-gray-50"
      : "text-gray-900 dark:text-gray-100";
  const navLinkBaseTextColor =
    useTransparentHeader
      ? "text-white dark:text-gray-200"
      : "text-gray-700 dark:text-gray-300";

  const navLinkHoverFocusBg =
    useTransparentHeader
      ? "hover:bg-white/10 dark:hover:bg-white/20 focus:bg-white/10 dark:focus:bg-white/20"
      : "hover:bg-gray-100/50 dark:hover:bg-slate-800/50 focus:bg-gray-100/50 dark:focus:bg-slate-800/50";

  const navLinkOpenBg =
    useTransparentHeader
      ? "data-[state=open]:bg-white/15 dark:data-[state=open]:bg-white/25"
      : "data-[state=open]:bg-gray-100/60 dark:data-[state=open]:bg-slate-800/60";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4">
      <div
        className={cn(
          "container mx-auto max-w-7xl min-h-[60px] sm:h-16 flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-4 md:px-6 lg:px-8",
          "rounded-xl transition-all duration-300 ease-in-out",
          useTransparentHeader
            ? "bg-transparent dark:bg-transparent backdrop-blur-none shadow-none border border-transparent"
            : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-white/20 dark:border-slate-800/30"
        )}
      >
        {/* Logo */}
        <div className="flex-shrink-0 max-w-[140px] sm:max-w-[180px] md:max-w-none">
          <Link
            href="/"
            className={cn(
              "font-sora text-lg sm:text-xl font-bold hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-300 block",
              headerBaseTextColor
            )}
            onClick={() => handleNavLinkClick("/", true, isMobileMenuOpen)}
          >
            <div className="flex flex-col text-center leading-tight">
              <div className="text-bas sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight">Neeti Varta</div>
              <span className="text-[8px] sm:text-sm font-normal leading-tight opacity-90">Institute of Policy Research Pvt. Ltd.</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Menu - Centered */}
        <div className="hidden lg:flex flex-grow justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items && item.items.length > 0 ? (
                    <>
                      <NavigationMenuTrigger
                        className={cn(
                          "font-sans text-sm font-medium hover:text-brand-orange dark:hover:text-brand-orange bg-transparent px-3 py-2",
                          navLinkBaseTextColor,
                          navLinkHoverFocusBg,
                          navLinkOpenBg
                        )}
                        onClick={() =>
                          item.isHomePageLink &&
                          item.href &&
                          handleNavLinkClick(item.href, true)
                        }
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-6 w-[500px] dark:bg-[#1e293b] lg:w-[550px] grid lg:grid-cols-2 gap-x-8">
                          <div className="flex flex-col justify-between space-y-4 pb-6 lg:pb-0 lg:pr-4">
                            <div>
                              <h3 className="text-lg font-semibold font-sora text-gray-900 dark:text-gray-100">
                                {item.title}
                              </h3>
                              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 font-sans">
                                {item.description}
                              </p>
                            </div>
                            {item.dropdownCta && (
                              <Button
                                asChild
                                size="sm"
                                className="w-full lg:w-auto font-sans bg-brand-orange hover:bg-brand-orange/90 text-white mt-4"
                              >
                                <Link href={item.dropdownCta.href}>
                                  {item.dropdownCta.text}
                                </Link>
                              </Button>
                            )}
                          </div>
                          <ul className="space-y-1">
                            {item.items.map((subItem) => (
                              <li key={subItem.title}>
                                <DropdownLinkItem
                                  className="dark:hover:bg-[#2d394d]"
                                  title={subItem.title}
                                  href={subItem.href}
                                  isHashLink={subItem.isHashLink}
                                  onClick={() =>
                                    handleNavLinkClick(
                                      subItem.href,
                                      subItem.isHashLink
                                    )
                                  }
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href || "#"} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "font-sans text-sm font-medium hover:text-brand-orange dark:hover:text-brand-orange bg-transparent px-3 py-2",
                          navLinkBaseTextColor,
                          navLinkHoverFocusBg
                        )}
                        onClick={() =>
                          item.href &&
                          handleNavLinkClick(item.href, item.isHomePageLink)
                        }
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Action Buttons & Mobile Menu Toggle - Right Aligned */}
        <div className="flex-shrink-0 flex items-center gap-1 sm:gap-2">
          <ModeToggle
            className={cn(
              "h-8 w-8 sm:h-9 sm:w-9",
              useTransparentHeader
                ? "bg-transparent text-white dark:text-gray-200 border-0 hover:text-white border-white/30 hover:bg-white/10 dark:hover:border-white/50 dark:hover:bg-white/10"
                : "text-gray-700 dark:text-gray-300 bg-transparent border-0 border-gray-300 dark:bg-transparent dark:border-slate-700 hover:bg-gray-100/50 dark:hover:bg-slate-800/50"
            )}
          />
          <Button
            variant="outline"
            asChild
            size="sm"
            className={cn(
              "font-sans text-xs sm:text-sm hidden sm:flex h-8 sm:h-9 px-2 sm:px-3",
              useTransparentHeader
                ? "border-white/50 bg-transparent text-white dark:text-gray-200 hover:bg-white/10 hover:border-white hover:text-white dark:hover:text-gray-50"
                : "border-gray-300 dark:border-slate-700 text-gray-700 dark:bg-transparent dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-gray-100"
            )}
          >
            <Link href="/comming-soon">Login</Link>
          </Button>
          {/* "Get Started" Button Removed */}
          {/* <Button
            asChild
            size="sm"
            className="font-sans text-xs sm:text-sm hidden sm:inline-flex bg-brand-blue hover:bg-brand-blue/90 text-white"
          >
            <Link href="/register">Get Started</Link>
          </Button> */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              className={cn(
                "hover:bg-opacity-50",
                useTransparentHeader
                  ? "text-white dark:text-gray-200 hover:bg-white/10"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-800"
              )}
            >
              {isMobileMenuOpen ? (
                <X className={cn("w-5 h-5 sm:w-6 sm:h-6", 
                  useTransparentHeader
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300"
                )} />
              ) : (
                <Menu className={cn("w-5 h-5 sm:w-6 sm:h-6",
                  useTransparentHeader
                    ? "text-white"
                    : "text-gray-700 dark:text-gray-300"
                )} />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%+0.25rem)] sm:top-[calc(100%+0.5rem)] left-2 right-2 sm:left-4 sm:right-4 rounded-xl shadow-xl border border-white/20 dark:border-slate-800/30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md max-h-[calc(100vh-6rem)] sm:max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="container mx-auto py-3 sm:py-4 px-3 sm:px-4 flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Fragment key={item.title}>
                {item.items && item.items.length > 0 ? (
                  <div>
                    <button
                      className="flex justify-between items-center w-full py-2.5 sm:py-3 font-sora text-sm sm:text-md text-gray-800 dark:text-gray-200 hover:text-brand-orange dark:hover:text-brand-orange"
                      onClick={() => toggleMobileSubmenu(item.title)}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 sm:w-5 sm:h-5 transition-transform",
                          openMobileSubmenu === item.title && "rotate-180"
                        )}
                      />
                    </button>
                    {openMobileSubmenu === item.title && (
                      <div className="pl-3 sm:pl-4 pt-2 pb-2 border-l border-gray-200 dark:border-slate-700 ml-1 sm:ml-2 space-y-1">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="flex justify-between items-center py-2 sm:py-2.5 font-sans text-sm text-gray-700 dark:text-gray-300 hover:text-brand-orange dark:hover:text-brand-orange"
                            onClick={() =>
                              handleNavLinkClick(
                                subItem.href,
                                subItem.isHashLink,
                                true
                              )
                            }
                          >
                            <span>{subItem.title}</span>
                            <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="flex justify-between items-center py-2.5 sm:py-3 font-sora text-sm sm:text-md text-gray-800 dark:text-gray-200 hover:text-brand-orange dark:hover:text-brand-orange"
                    onClick={() =>
                      handleNavLinkClick(
                        item.href || "#",
                        item.isHomePageLink,
                        true
                      )
                    }
                  >
                    <span>{item.title}</span>
                    <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                  </Link>
                )}
              </Fragment>
            ))}
            <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-gray-200 dark:border-slate-700 space-y-2">
              <Button
                variant="outline"
                asChild
                className="w-full font-sans text-sm h-10 dark:border-slate-700 hover:bg-gray-100/50 dark:hover:bg-slate-800/50 dark:hover:text-gray-100"
              >
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
              </Button>
              {/* "Get Started" Button Removed from mobile menu */}
              {/* <Button asChild className="w-full font-sans text-sm bg-brand-blue hover:bg-brand-blue/90 text-white">
                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
