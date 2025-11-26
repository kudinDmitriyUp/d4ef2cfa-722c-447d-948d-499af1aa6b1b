"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import AboutMetric from '@/components/sections/about/AboutMetric';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Rocket, TrendingUp, Users, Target, Globe, Lightbulb, Zap, Wallet, Brain, Cpu, Leaf, Heart, Linkedin, Twitter, Star, HelpCircle } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="TechFund"
          button={{
            text: "Get In Touch",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Investing in Italy's Tech Future"
          description="We back visionary founders building the next generation of transformative technology companies across Europe's most dynamic startup ecosystem."
          tag="Venture Capital"
          tagIcon={Rocket}
          buttons={[
            {
              text: "View Portfolio",
              href: "#portfolio"
            },
            {
              text: "For Founders",
              href: "contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123126584-oqxqayhh.jpg"
          imageAlt="Venture capital investors in boardroom meeting"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <AboutMetric
          title="Empowering the Next Generation of Italian Tech Innovators with Strategic Capital and Deep Industry Expertise"
          metrics={[
            {
              icon: TrendingUp,
              label: "Total AUM",
              value: "€250M+"
            },
            {
              icon: Users,
              label: "Portfolio Companies",
              value: "35+"
            },
            {
              icon: Target,
              label: "Average Return",
              value: "4.2x"
            },
            {
              icon: Globe,
              label: "Countries Invested",
              value: "12"
            }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <FeatureCardTwo
          title="Investment Focus Areas"
          description="We concentrate our expertise and capital in sectors where Italian innovation excels and global demand is strongest"
          tag="Our Expertise"
          tagIcon={Lightbulb}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Enterprise SaaS",
              description: "Next-generation software solutions for global B2B markets with sustainable recurring revenue models",
              icon: Zap
            },
            {
              title: "FinTech & Web3",
              description: "Digital financial services and blockchain technologies transforming payments, lending, and asset management",
              icon: Wallet
            },
            {
              title: "AI & Machine Learning",
              description: "Artificial intelligence applications driving automation and intelligence across industries",
              icon: Brain
            },
            {
              title: "Deep Tech",
              description: "Hardware, semiconductors, and advanced materials solving fundamental scientific challenges",
              icon: Cpu
            },
            {
              title: "Climate Tech",
              description: "Sustainable technology solutions addressing environmental challenges and climate change",
              icon: Leaf
            },
            {
              title: "Health Tech",
              description: "Digital health and biotech innovations improving medical outcomes and patient experience",
              icon: Heart
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree
          title="Meet Our Team"
          description="Experienced investors and operators with a track record of building and scaling successful technology companies"
          tag="Leadership"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          members={[
            {
              id: "1",
              name: "Marco Rossini",
              role: "Founder & Managing Partner",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123130029-63uaa7il.jpg",
              imageAlt: "Marco Rossini",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            },
            {
              id: "2",
              name: "Giulia Martini",
              role: "Partner, Enterprise SaaS",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123130701-eqs52y9m.jpg",
              imageAlt: "Giulia Martini",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            },
            {
              id: "3",
              name: "Alessandro Ferrari",
              role: "Partner, Deep Tech & AI",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123131671-2x8rkwgr.jpg",
              imageAlt: "Alessandro Ferrari",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            },
            {
              id: "4",
              name: "Francesca Rossi",
              role: "Partner, Operations & Growth",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123132516-nt2a5o87.jpg",
              imageAlt: "Francesca Rossi",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="What Our Founders Say"
          description="Hear from entrepreneurs and CEOs who have partnered with us to build and scale their vision"
          tag="Success Stories"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Andrea Colombo",
              role: "CEO & Founder",
              company: "NextGen AI Solutions",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123133472-8kyos1tk.jpg",
              imageAlt: "Andrea Colombo"
            },
            {
              id: "2",
              name: "Sofia Benedetti",
              role: "Co-Founder",
              company: "FinFlow Payments",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123134212-cgisnwfq.jpg",
              imageAlt: "Sofia Benedetti"
            },
            {
              id: "3",
              name: "Marco Sartori",
              role: "CEO",
              company: "CloudSync Systems",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123134950-icwp0brv.jpg",
              imageAlt: "Marco Sartori"
            },
            {
              id: "4",
              name: "Elena Rossi",
              role: "Founder",
              company: "GreenTech Innovations",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123135715-nu80y98q.jpg",
              imageAlt: "Elena Rossi"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about investing with us and our process for founders"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          mediaPosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123136495-dn11fnh4.jpg"
          imageAlt="TechFund team in discussion"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What stage of companies do you invest in?",
              content: "We typically invest in Series A and Series B rounds, targeting companies with proven product-market fit and strong founding teams. We occasionally lead seed rounds for exceptional founders we know."
            },
            {
              id: "2",
              title: "What is your typical check size?",
              content: "Our standard tickets range from €1M to €10M depending on the round and our conviction level. We're flexible and can structure co-investment arrangements for larger rounds."
            },
            {
              id: "3",
              title: "How long is your investment timeline?",
              content: "We invest with a 7-10 year horizon, aligned with typical venture fund lifecycles. We support our portfolio companies through multiple rounds and are committed long-term partners."
            },
            {
              id: "4",
              title: "Do you offer support beyond capital?",
              content: "Absolutely. Our team brings operational expertise, industry connections, and business development support. We actively help with hiring, partnerships, and strategy execution."
            },
            {
              id: "5",
              title: "Are you open to international founders?",
              content: "Yes, we invest globally but focus on companies with Italian connections or those building for European markets. We're building a pan-European network of founders and operators."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          title="Ready to Transform Your Vision Into Reality"
          description="Whether you're a founder seeking investment or a limited partner exploring opportunities, we'd love to hear from you. Reach out and let's discuss how we can collaborate to build something extraordinary."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764123137245-xfebvm0n.jpg"
          imageAlt="Professional partnership handshake"
          mediaPosition="right"
          inputPlaceholder="your@email.com"
          buttonText="Send Message"
          termsText="We respect your privacy and will respond within 2 business days. Your information is secure with us."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="TechFund"
          copyrightText="© 2025 TechFund. All rights reserved. Based in Milan, Italy."
          columns={[
            {
              title: "Fund",
              items: [
                {
                  label: "About Us",
                  href: "#about"
                },
                {
                  label: "Portfolio",
                  href: "#portfolio"
                },
                {
                  label: "Team",
                  href: "#team"
                }
              ]
            },
            {
              title: "For Founders",
              items: [
                {
                  label: "Investment Process",
                  href: "#faq"
                },
                {
                  label: "Apply Now",
                  href: "#contact"
                },
                {
                  label: "Resources",
                  href: "#"
                }
              ]
            },
            {
              title: "Legal",
              items: [
                {
                  label: "Privacy Policy",
                  href: "#"
                },
                {
                  label: "Terms of Service",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "#contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}