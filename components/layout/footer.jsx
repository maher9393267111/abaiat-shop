import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaSnapchat ,
   FaTiktok ,
 
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useRouter } from "next/router";

const navigation = {
  mainEn: [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "SmartCard", href: "/smartcard" },
    { name: "Prices", href: "/prices" },
    { name: "AboutUs", href: "/aboutus" },

    { name: "ContactUs", href: "/contact" },
  ],

  mainAr: [
    {
      name: "الرئسية",
      href: "/",
    },
    {
      name: "المينيو الالكتروني",
      href: "/menu",
    },

    {
      name: "البطاقة الذكية",
      href: "/smartcard",
    },

    {
      name: "الاسعار",
      href: "/prices",
    },
    {
      name: "من نحن ",
      href: "/aboutus",
    },

    {
      name: "اتصل بنا",
      href: "/contact",
    },
  ],





  social: [
    {
      name: "Tiktok",
      href: "https://www.tiktok.com/@noura.tekstil?_t=8kfgtaJPBPa&_r=1",
      icon: (props) => <FaTiktok{...props} />,
    },
    // {
    //   name: "Facebook",
    //   href: "https://www.facebook.com/profile.php?id=61554600908983",
    //   icon: (props) => <FaFacebook {...props} />,
    // },
 
    {
      name: "Whatsapp",
      href: "https://wtspee.com/905550252552",
      icon: (props) => <FaWhatsapp {...props} />,
    },
    // {
    //   name: "Linkden",
    //   href: "",
    //   icon: (props) => <FaLinkedin {...props} />,
    // },
    

    {
      name: "Snapchat",
      href: "https://www.snapchat.com/add/mkahbbaz2?share_id=BGdyKsJNReqNNo8a-2-bhQ&locale=ar_TR@numbers=latn",
      icon: (props) => <FaSnapchat {...props} />,
    },

    {
      name: "Instagram",
      href: "https://instagram.com/noura_tekstil?igshid=YmMyMTA2M2Y=",
      icon: (props) => <FaInstagram {...props} />,
    },

    {
      name: "Location",
      href: "https://maps.app.goo.gl/aXBAwVCTtc8xjY2Y6?g_st=iwb",
      icon: (props) => <FaLocationDot {...props} />,
    },
  ],
};

const Footer = () => {
  const { locale } = useRouter();

  const currentNavs = locale === "ar" ? navigation.mainAr : navigation.mainEn;

  return (
    <footer className="bg-white englishfont">
      <div className="max-w-8xl mx-auto md:pt-10 pt-4  pb-10 px-4 overflow-hidden sm:px-6 lg:px-8">
        {/* <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {currentNavs.map((item) => (
            <div key={item.name} className="px-5">
              <Link
                className="text-base text-gray-500 hover:text-gray-900"
                href={item.href}
              >
                {item.name}
              </Link>
            </div>
          ))}
        </nav> */}


        <div className="mt-8 flex justify-center gap-6">
          {navigation.social.map((item) => (
            <a
            target="_blank"
              key={item.name}
              href={item.href}
              className="text-primary hover:text-primary"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon
                className="h-8 w-8  text-purpl-100 text-gold    "
                aria-hidden="true"
              />
            </a>
          ))}


                    {/* <a 
                    
                    href="https://maps.app.goo.gl/hvgzitchHdTduCF38?share"
                    
                    class="h-8 w-8  text-purpl-100 text-gold" target="_blank" rel="noopener noreferrer"><FaFacebook  /></a> */}
                




        </div>

{/* 
        <p className="text-center  arabic  mt-6 text-gray-400 shimmer text-2xl font-semibold">
           

     
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
