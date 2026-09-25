import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import klyroLogo from "@/assets/Klyro-brand-pack/LOGO.svg";

export const FooterSection: React.FC = () => {
  return (
    <footer className="pt-24 bg-klyro-canvas/50 border-t border-klyro-mist/60 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Giant Headline CTA */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-[56px] md:text-[96px] lg:text-[120px] font-bold tracking-tighter text-klyro-dark leading-[1.05] flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span>Built for teams</span>
            {/* Inline Avatars */}
            <div className="flex items-center -space-x-4 mx-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-klyro-canvas relative z-30 object-cover"
                alt="team"
              />
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
                className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-klyro-canvas relative z-20 object-cover"
                alt="team"
              />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop"
                className="w-12 h-12 md:w-20 md:h-20 rounded-full border-4 border-klyro-canvas relative z-10 object-cover"
                alt="team"
              />
            </div>
            <span>that move</span>
            <span className="bg-gradient-to-r from-klyro-blue to-klyro-turquoise bg-clip-text text-transparent pb-2">
              fast.
            </span>
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Link
              to="/register"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-pill bg-klyro-blue text-white text-base font-semibold shadow-klyro-glow hover:bg-[#4338ca] hover:-translate-y-0.5 transition-all duration-200">
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-pill border-2 border-klyro-mist text-klyro-dark text-base font-semibold hover:border-klyro-dark transition-all duration-200">
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1.5 opacity-60" />
            </Link>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-16 border-t border-klyro-mist/60">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src={klyroLogo} alt="Klyro" className="h-8 w-auto" />
              <span className="text-xl font-bold tracking-tight text-klyro-dark">
                Klyro.
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-klyro-dark mb-4">Use case</h4>
            <ul className="space-y-3 text-sm text-klyro-slate">
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Design & Creative
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-klyro-dark mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-klyro-slate">
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Kanban Boards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Automations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-klyro-dark mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-klyro-slate">
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-klyro-dark mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-klyro-slate">
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  API Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-klyro-blue">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom */}
        <div className="py-6 border-t border-klyro-mist flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-klyro-slate">
          <p>© 2026 Klyro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-klyro-dark">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-klyro-dark">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
