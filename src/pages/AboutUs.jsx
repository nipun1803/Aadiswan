import {
    ChevronDownIcon,
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    PhoneIcon,
    ChevronRightIcon,
    MapPinIcon,
  } from "lucide-react";
  import React from "react";
  import { Button } from "../components/ui/button.jsx";
  import { Card, CardContent } from "../components/ui/card.jsx";
  import { Input } from "../components/ui/input.jsx";
  import { Textarea } from "../components/ui/textarea.jsx";
  
  const navigationItems = [
    { name: "Home", href: "#", active: false },
    { name: "Products", href: "#", hasDropdown: true, active: false },
    { name: "Solutions", href: "#", hasDropdown: true, active: false },
    { name: "About Us", href: "#", active: true },
    { name: "Blog", href: "#", active: false },
    { name: "Contact Us", href: "#", active: false },
  ];
  
  const valueCards = [
    {
      title: "Innovation",
      icon: "/icons/innovation.png",
    },
    {
      title: "Integrity",
      icon: "/icons/integrity.png",
    },
    {
      title: "Collaboration",
      icon: "/icons/Collaboration.png",
    },
    {
      title: "Customer-Centricity",
      icon: "/icons/Customer Centricity.png",
    },
    {
      title: "Sustainability",
      icon: "/icons/Sustainability.png",
    },
  ];
  
  const leadershipTeam = [
    {
      name: "Animesh Singh Chauhan",
      title: "Founder & CEO",
      description:
        "With deep expertise in credit underwriting and technology, he drives the company's mission to deliver innovative, API-integrated credit automation solutions that empower banks, NBFCs, and MSME lenders across India and the Middle East.",
      image: "/Animesh.png",
    },
    {
      name: "Sudhansu Sekhar Mishra",
      title: "Director",
      description:
        "Appointed in 2020, Sudhansu Sekhar Mishra supports AadiSwan's strategic outreach and operations. With a professional background in fintech implementation and business development, he helps drive client-focused innovation and expansion.",
      image: "/Sudhansu.png",
    },
  ];
  
  const presenceLocations = [
    {
      name: "NEW DELHI",
      image: "/locations/New Delhi.png",
    },
    {
      name: "LUCKNOW",
      image: "/locations/Lucknow.png",
    },
    {
      name: "MUMBAI",
      image: "/locations/Mumbai.png",
    },
    {
      name: "ABU DHABI",
      image: "/locations/Abu Dhabi.png",
    },
  ];
  
  const footerLinks = [
    "Home",
    "About Us",
    "Products",
    "Solutions",
    "Careers",
    "Contact Us",
  ];
  
  const footerLocations = [
    {
      name: "NEW DELHI",
      address:
        "105A, 1st Floor, NDM-1, Netaji Subhash Place, Pitampura, Delhi, 110034",
      image: "/locations/New Delhi.png",
    },
    {
      name: "LUCKNOW",
      address:
        "Ground and 4th Floor, Yogiraj Tower, C-47, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010",
      image: "/locations/Lucknow.png",
    },
    {
      name: "MUMBAI",
      address:
        "Modi Business Park, Sai Nagar, Anand Nagar, Thane West, Thane, Maharashtra 400615",
      image: "/locations/Mumbai.png",
    },
    {
      name: "ABU DHABI",
      address:
        "Office No: 208, Room No: 2,. Al Nasar Commercial Center, Najda Street. Abu Dhabi, Abu Dhabi 131416, AE",
      image: "/locations/Abu Dhabi.png",
    },
  ];
  
  export const AboutUs = () => {
    return (
      <div className="bg-white w-full">
        <div className="bg-white w-full relative">
          {/* Hero Section */}
          <section className="w-full h-[614px] relative bg-[url(/about-bg.png)] bg-cover bg-center">
            <div className="absolute inset-0 flex flex-col">
              {/* Navigation */}
              <nav className="flex items-center justify-between px-10 py-[29px]">
                <img
                  className="w-[200px] h-[50px]"
                  alt="Aadiswan logo"
                  src="/AadiSwan Logo.png"
                />
  
                <div className="flex items-center gap-8">
                  {navigationItems.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      {item.active ? (
                        <div className="px-[30px] py-[5px] rounded-[92px] bg-[linear-gradient(180deg,rgba(134,197,255,0.3)_0%,rgba(3,108,188,0.3)_100%)]">
                          <span className="[font-family:'Poppins',Helvetica] font-semibold text-white text-base">
                            {item.name}
                          </span>
                        </div>
                      ) : (
                        <span className="[font-family:'Poppins',Helvetica] font-light text-white text-base">
                          {item.name}
                        </span>
                      )}
                      {item.hasDropdown && (
                        <ChevronDownIcon className="w-6 h-6 text-white" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="tel:+91-9971777097"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition"
                    aria-label="Call us"
                  >
                    <PhoneIcon className="w-5 h-5 text-white" />
                  </a>
                  <a
                    href="mailto:contactus@aadiswan.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 transition"
                    aria-label="Email us"
                  >
                    <MailIcon className="w-5 h-5 text-white" />
                  </a>
                </div>
              </nav>
  
              {/* Hero Content */}
              <div className="flex-1 flex flex-col items-center justify-center px-8">
                <h1 className="w-[771px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[40px] text-center mb-[78px]">
                  Empowering Credit. Enabling Growth.
                </h1>
                <p className="w-[1023px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl text-center">
                  At AadiSwan, we combine technology, expertise, and innovation to
                  transform lending and credit automation for banks, NBFCs, and
                  financial institutions worldwide.
                </p>
              </div>
            </div>
          </section>
  
          {/* Our Story Section */}
          <section className="w-full py-16 bg-[url('/story.png')] bg-cover bg-center">
            <div className="px-[155px]">
              <h2 className="text-center [font-family:'Iceland',Helvetica] font-normal text-[40px] text-[#036cbc] mb-[57px]">
                OUR STORY
              </h2>
  
              <div className="[font-family:'Poppins',Helvetica] font-normal text-[#003660] text-base text-center leading-6 mb-10">
                Founded in 2014, Aadiswan Info Consultants Pvt. Ltd. (CIN:
                U72900UP2014PTC064158) has grown into a pioneering force in
                financial technology. Our journey began with a clear vision: to
                transform the financial industry by delivering innovative,
                reliable, and efficient software solutions that address the
                complex needs of modern banking and finance.
                <br />
                <br />
                At AadiSwan, we specialize in building advanced platforms that
                streamline underwriting, covenant management, document workflows,
                pricing, valuation, and third-party integrations. Our flagship
                product, CredPro, is more than just software — it's a complete
                ecosystem designed to enhance decision-making, ensure compliance,
                and accelerate credit lifecycle automation.
                <br />
                <br />
                What sets us apart is our unique DNA: we are seasoned underwriters
                turned technologists. This rare blend of financial expertise and
                technology allows us to create solutions that are both practically
                relevant and technologically cutting-edge, empowering institutions
                to operate with accuracy, speed, and confidence.
                <br />
                Over the years, we have successfully implemented our solutions
                across India and the Middle East, enabling banks, NBFCs, and
                cooperative lenders to achieve efficiency while staying regulatory
                compliant. As we look ahead, our mission is clear — to expand
                globally and continue leading the seamless integration of
                technology and finance.
              </div>
  
              <div className="flex gap-[30px] justify-center">
                <Card className="w-[550px] h-[250px] bg-white rounded-[15px] border border-[#dde7f5] shadow-[0_8px_24px_rgba(3,108,188,0.08)]">
                  <CardContent className="p-8 text-center">
                    <h3 className="[font-family:'Iceland',Helvetica] font-normal text-[#003660] text-[32px] mb-6">
                      Our Mission
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#423939] text-sm">
                      To empower financial institutions with intelligent,
                      reliable, and policy-driven credit automation platforms that
                      streamline processes, reduce risks, and accelerate
                      decision-making — ensuring faster, compliant, and
                      customer-centric lending experiences.
                    </p>
                  </CardContent>
                </Card>
  
                <Card className="w-[550px] h-[250px] bg-white rounded-[15px] border border-[#dde7f5] shadow-[0_8px_24px_rgba(3,108,188,0.08)]">
                  <CardContent className="p-8 text-center">
                    <h3 className="[font-family:'Iceland',Helvetica] font-normal text-[#003660] text-[32px] mb-6">
                      Our Vision
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#423939] text-sm">
                      To be the global leader in digital credit lifecycle
                      automation, redefining how banks, NBFCs, and financial
                      institutions leverage technology and domain expertise to
                      build a more efficient, transparent, and inclusive financial
                      ecosystem.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
  
          {/* Our Values Section */}
          <section className="py-16">
            <h2 className="text-center [font-family:'Iceland',Helvetica] font-normal text-[40px] text-[#036cbc] mb-16">
              OUR VALUES
            </h2>
  
            <div className="flex justify-center gap-[20px] px-[131px]">
              {valueCards.map((value, index) => (
                <Card
                  key={index}
                  className="w-[219px] h-40 rounded-[30px_5px_30px_5px]"
                >
                  <CardContent className="flex flex-col items-center justify-center h-full p-4">
                    <img
                      className="w-[100px] h-[100px] mb-4"
                      alt={value.title}
                      src={value.icon}
                    />
                    <h3 className="[font-family:'Iceland',Helvetica] font-normal text-[#036cbc] text-2xl text-center leading-7">
                      {value.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
  
          {/* Leadership Section */}
          <section className="py-16">
            <h2 className="text-center [font-family:'Iceland',Helvetica] font-normal text-[40px] text-[#036cbc] mb-8">
              LEADERSHIP
            </h2>
  
            <div className="px-[135px] mb-16">
              <div className="[font-family:'Poppins',Helvetica] font-normal text-[#003660] text-base leading-6">
                <span>
                  At the heart of AadiSwan is a leadership team that blends deep
                  financial expertise with cutting-edge technology innovation.
                  With backgrounds in banking, credit underwriting, risk
                  management, and enterprise technology, our leaders bring decades
                  of experience to drive the company's mission forward.
                  <br />
                  <br />
                </span>
                <span className="font-semibold">Domain-First Expertise</span>
                <span>
                  {" "}
                  – Our leaders are seasoned professionals from the financial
                  sector who understand the real challenges of credit, compliance,
                  and risk management.
                  <br />
                </span>
                <span className="font-semibold">Technology-Driven Vision</span>
                <span>
                  {" "}
                  – With a strong focus on automation, AI, and API ecosystems,
                  they ensure our products remain future-ready and scalable.
                  <br />
                </span>
                <span className="font-semibold">Customer-Centric Approach</span>
                <span>
                  {" "}
                  – The leadership team emphasizes building long-term
                  partnerships, ensuring our solutions deliver measurable value to
                  every client.
                  <br />
                </span>
                <span className="font-semibold">Proven Track Record </span>
                <span>
                  – Under their guidance, AadiSwan has expanded across India and
                  the Middle East, earning trust from banks, NBFCs, and financial
                  institutions.
                  <br />
                  <br />
                  Together, our leadership team is committed to shaping the future
                  of digital lending — enabling financial institutions to
                  transform operations, stay compliant, and deliver superior
                  customer experiences.
                </span>
              </div>
            </div>
  
            <div className="flex gap-[64px] justify-center px-[118px]">
              {leadershipTeam.map((leader, index) => (
                <Card
                  key={index}
                  className="w-[563px] h-[356px] rounded-[15px] bg-white border border-[#dde7f5] shadow-[0_8px_24px_rgba(3,108,188,0.08)]"
                >
                  <CardContent className="flex p-6 h-full">
                    <img
                      className="w-[260px] h-[324px] object-contain"
                      alt="Leading loan"
                      src={leader.image}
                    />
                    <div className="ml-6 flex flex-col">
                      <h3 className="[font-family:'Iceland',Helvetica] font-normal text-[#003660] text-[30px] leading-tight mb-2 whitespace-normal">
                        {leader.name}
                      </h3>
                      <p className="[font-family:'Poppins',Helvetica] font-medium italic text-[#003660] text-lg mb-4">
                        {leader.title}
                      </p>
                      <p className="[font-family:'Poppins',Helvetica] font-normal text-[#003660] text-sm leading-6">
                        {leader.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
  
          {/* Our Presence Section */}
          <section className="py-16">
            <h2 className="text-center [font-family:'Iceland',Helvetica] font-normal text-[40px] text-[#036cbc] mb-16">
              OUR PRESENCE
            </h2>
  
            <div className="flex gap-[10px] justify-center px-[99px]">
              {presenceLocations.map((location, index) => (
                <Card
                  key={index}
                  className="w-[300px] h-[120px] rounded-[10px] border border-[#dde7f5] shadow-[0_8px_24px_rgba(3,108,188,0.08)]"
                >
                  <CardContent className="p-1.5 h-full">
                    <img
                      className="w-[280px] h-[78px] object-cover mb-1"
                      alt="Rectangle"
                      src={location.image}
                    />
                    <h3 className="text-center font-black text-[#003660] text-xl [font-family:'Poppins',Helvetica] flex items-center justify-center gap-2">
                      <MapPinIcon className="w-5 h-5 text-[#003660]" />
                      <span>{location.name}</span>
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
  
          {/* Call to Action */}
          <section className="py-16 text-center">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold italic text-[#003660] text-[40px] mb-16">
              "Join us in shaping the future of credit."
            </h2>
  
            <div className="flex gap-4 justify-center">
              <Button className="h-auto px-[25px] py-2.5 bg-[#1064ae] rounded-[10px] [font-family:'Poppins',Helvetica] font-medium text-white text-lg">
                Book A Demo
              </Button>
              <Button
                variant="outline"
                className="h-auto px-[46px] py-[7px] rounded-[10px] border border-solid border-black [font-family:'Poppins',Helvetica] font-medium text-black text-lg"
              >
                Call Us
              </Button>
            </div>
          </section>
  
          {/* Footer */}
          <footer className="bg-[#232840] rounded-[20px_20px_0px_0px] relative">
            <div className="pt-[19px] pb-0">
              <div className="text-center mb-6">
                <img
                  className="w-[217px] h-[63px] mx-auto"
                  alt="Aadiswan logo"
                  src="/AadiSwan Logo.png"
                />
              </div>
  
              <div className="bg-[#0e1221] px-[70px] py-[27px]">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                  {/* Our Presence */}
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#56aeff] text-xl mb-6">
                      Our Presence
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {footerLocations.map((location, index) => (
                        <Card
                          key={index}
                          className="rounded-[20px_10px_20px_10px] bg-[#0f1221] border border-solid border-[#22263a] w-full"
                        >
                          <CardContent className="p-3">
                            <img
                              className="w-full h-[43px] mb-2 object-cover"
                              alt="Rectangle"
                              src={location.image}
                            />
                            <h4 className="font-black text-[#002168] text-xl text-center [font-family:'Poppins',Helvetica] mb-2">
                              {location.name}
                            </h4>
                            <p className="[font-family:'Poppins',Helvetica] font-normal text-white text-[9px] text-center leading-normal">
                              {location.address}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
  
                  {/* Useful Links */}
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#56aeff] text-xl mb-6">
                      Useful Links
                    </h3>
                    <div className="space-y-1">
                      {footerLinks.map((link, index) => (
                        <div
                          key={index}
                          className="[font-family:'Poppins',Helvetica] font-normal text-white text-base flex items-center gap-2"
                        >
                          <ChevronRightIcon className="w-4 h-4 text-[#56aeff]" />
                          <span>{link}</span>
                        </div>
                      ))}
                    </div>
                  </div>
  
                  {/* Contact Us */}
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#56aeff] text-xl mb-6">
                      Contact Us
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <PhoneIcon className="w-6 h-6 text-white" />
                        <a
                          className="[font-family:'Poppins',Helvetica] font-normal text-white text-base underline"
                          href="tel:+91-9971777097"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          +91-9971777097
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <MailIcon className="w-6 h-6 text-white" />
                        <a
                          className="[font-family:'Poppins',Helvetica] font-normal text-white text-base underline"
                          href="mailto:contactus@aadiswan.com"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          contactus@aadiswan.com
                        </a>
                      </div>
                      <div className="flex gap-2 mt-8">
                        <LinkedinIcon className="w-[30px] h-[30px] text-white" />
                        <InstagramIcon className="w-[30px] h-[30px] text-white" />
                        <FacebookIcon className="w-[30px] h-[30px] text-white" />
                      </div>
                    </div>
                  </div>
  
                  {/* Contact Form */}
                  <div className="space-y-4">
                    <Input
                      placeholder="Name"
                      className="bg-[#0f1221] border border-solid border-[#d3d3d3] text-[#979797] [font-family:'Poppins',Helvetica]"
                    />
                    <Input
                      placeholder="Email"
                      className="bg-[#0f1221] border border-solid border-[#d3d3d3] text-[#979797] [font-family:'Poppins',Helvetica]"
                    />
                    <div className="relative">
                      <Textarea
                        placeholder="Your Message"
                        className="bg-[#0f1221] border border-solid border-[#d3d3d3] text-[#979797] [font-family:'Poppins',Helvetica] min-h-20"
                      />
                      <img
                        className="absolute w-[7px] h-[7px] bottom-2 right-3"
                        alt="Drag"
                        src="/drag.svg"
                      />
                    </div>
                    <Button className="w-full bg-[#007ddc] rounded-lg [font-family:'Poppins',Helvetica] font-normal text-neutral-100 text-base h-auto p-3">
                      Submit
                    </Button>
                  </div>
                </div>
  
                {/* Footer Bottom */}
                <div className="bg-[#03081e] px-0 py-[18px] -mx-[70px]">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 px-[70px]">
                    <div className="[font-family:'Poppins',Helvetica] font-light text-white text-[15px]">
                      ©2025 Aadiswan Info Consultants Pvt. Ltd.
                    </div>
                    <div className="flex gap-[25px]">
                      <div className="[font-family:'Poppins',Helvetica] font-normal text-[#007ddc] text-base underline">
                        Terms of Service
                      </div>
                      <div className="[font-family:'Poppins',Helvetica] font-normal text-[#007ddc] text-base underline">
                        Privacy Policy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  };
  