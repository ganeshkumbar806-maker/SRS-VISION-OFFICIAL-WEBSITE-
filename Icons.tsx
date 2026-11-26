import type React from "react";
import {
  ArrowUpRight, Menu, X, Code2, PanelsTopLeft, PenTool, Palette, Video,
  Share2, Sparkles, CheckCircle2, Globe2, Users, Target, Lightbulb,
  Mail, Phone, MapPin, Instagram, Linkedin, Github, ChevronRight,
  LayoutDashboard, FolderKanban, CalendarDays, MessageSquare, Settings,
  Bell, Search, Plus, TrendingUp, Clock3, CircleHelp, LogOut, BriefcaseBusiness
} from "lucide-react";

export const iconMap: Record<string, React.ComponentType<{size?: number; className?: string}>> = {
  code: Code2, layout: PanelsTopLeft, pen: PenTool, palette: Palette, video: Video, share: Share2
};

export {
  ArrowUpRight, Menu, X, Code2, PanelsTopLeft, PenTool, Palette, Video,
  Share2, Sparkles, CheckCircle2, Globe2, Users, Target, Lightbulb,
  Mail, Phone, MapPin, Instagram, Linkedin, Github, ChevronRight,
  LayoutDashboard, FolderKanban, CalendarDays, MessageSquare, Settings,
  Bell, Search, Plus, TrendingUp, Clock3, CircleHelp, LogOut, BriefcaseBusiness
};