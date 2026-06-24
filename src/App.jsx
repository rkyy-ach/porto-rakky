import React from 'react';
import { useState, useEffect, useRef } from 'react';
import "/gambar/xpboost.png";
import "/gambar/yogort.png";
import "/gambar/canva.png";
import "/gambar/skilvul js.png";
import "/gambar/skilvul react.png";
import "/gambar/DSC08987.JPG";
import "/gambar/DSC08990.JPG";
import "/gambar/IMG_2138.JPG";
import "/gambar/IMG_2146.JPG";
import "/gambar/IMG_2164.JPG";
import "/gambar/DSC00130.JPG";

// Komponen Pembungkus Animasi biar gampang dan anti-error
function ScrollAnimate({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
}

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) { 
        setShowNavbar(false);
      } else { 
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    /* Menambahkan id="home" agar menu Home di bawah bisa berfungsi dengan benar */
    <div id="home" className="bg-neutral-900 text-white font-sans min-h-screen selection:bg-red-600 selection:text-white scroll-smooth">
      
     {/* NAVBAR DENGAN EFEK SEMBUNYI/TIMBUL */}
      <nav className={`bg-black text-white px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="text-xl font-black tracking-wider">
          Rakky<span className="text-gray-400">Achmad</span>
        </div>
        <div className="flex gap-6 text-sm font-bold">
          <a href="#experience" className="hover:underline">My Experience</a>
          <a href="#projects" className="hover:underline">Completed Projects</a>
        </div>
      </nav>

      {/* HERO SECTION */}
<header className="relative h-screen w-full flex flex-col justify-center items-center text-white px-4 md:px-8 box-border overflow-hidden">
  
  {/* Background Image dengan Overlay Gelap */}
  <div className="absolute inset-0 z-0">
    <img 
      src="/gambar/DSC00130.JPG" 
      alt="Rakky Achmad" 
      className="w-full h-full object-cover brightness-[0.25]" 
    />
  </div>
  
  {/* Konten Utama (Diturunkan sedikit agar pas di tengah) */}
  <div className="relative z-10 flex flex-col justify-center items-center text-center max-w-4xl mx-auto mt-12 md:mt-16">
    
    {/* Tulisan Kecil "PORTFOLIO" */}
    <p className="text-xs md:text-sm font-semibold tracking-[0.4em] text-neutral-400 uppercase mb-3">
      Portfolio
    </p>

    {/* Nama Besar */}
   <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-none drop-shadow-md bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-700 bg-clip-text text-transparent">
  Rakky Achmad <br className="block md:hidden" /> Baihaqi
</h1>
    
    {/* Quote/Kutipan */}
    <div className="mt-6 mb-8 max-w-xl px-4">
      <p className="text-base md:text-lg text-neutral-300 italic font-normal leading-relaxed">
        "Hanya dicari saat yang lain tidak bisa diandalkan. <br className="hidden md:block" /> Sungguh sebuah kehormatan yang semu."
      </p>
    </div>

    {/* Tombol Aksi */}
    <div className="flex flex-row gap-4 w-auto justify-center">
      <a 
        href="#contact" 
        className="bg-neutral-900/80 hover:bg-neutral-800/90 text-white text-sm md:text-base font-medium py-3 px-6 md:px-8 rounded-lg flex items-center justify-center gap-2 transition-all backdrop-blur-sm border border-neutral-800"
      >
        Contact <span className="text-xs md:text-sm text-blue-400">↗</span>
      </a>
      <a 
        href="#about" 
        className="bg-neutral-900/80 hover:bg-neutral-800/90 text-white text-sm md:text-base font-medium py-3 px-6 md:px-8 rounded-lg flex items-center justify-center gap-2 transition-all backdrop-blur-sm border border-neutral-800"
      >
        About me <span className="text-xs md:text-sm text-blue-400">↗</span>
      </a>
    </div>

  </div>
</header>

      {/* ABOUT ME SECTION (DIKASIH ANIMASI) */}
      <ScrollAnimate>
        <section id="about" className="md:h-screen bg-gradient-to-b from-white via-gray-950 to-black p-8 mb-30 md:p-12 text-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl md:text-9xl font-black tracking-tighter mb-4 uppercase">ABOUT ME</h2>
              <p className="text-xl font-bold mb-2">Hello!, I'm Rakky!</p>
              <p className="text-sm text-red-100 leading-relaxed max-w-xl">
                lahir di Jambi, 7 Desember 2009. Sebagai anak terakhir dari 4 bersaudara, saat ini saya memegang takhta sebagai satu-satunya yang masih setia di bangku sekolah, sementara semua abang saya sudah sibuk mencari nafkah.

Hobi saya sebenarnya olahraga dan masak (meski tingkat keberhasilan masakan masih fluktuatif). Namun, kalau bicara soal bakat, dunia konten visual adalah tempat kreativitas saya benar-benar menyala.

Di samping itu, saya sangat bersyukur dan bahagia bisa menjalani keseharian sebagai Santri di Pondok Tahfizh Plus Abu Dzar. Fokus menghafal Al-Qur'an, sambil pelan-pelan merakit masa depan di industri kreatif. Salam kenal!
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-end">
              <div className="w-full max-w-xs aspect-[4/5] bg-black shadow-xl overflow-hidden">
                <img 
                  src="/gambar/IMG_2164.JPG" 
                  alt="Photography" 
                  className="w-full h-full object-cover grayscale brightness-90"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* MY EXPERIENCE SECTION (DIKASIH ANIMASI) */}
      <ScrollAnimate>
        <section id="experience" className="p-8 mb-30 md:p-12 max-w-6xl mx-auto">
          <h2 className="text-7xl font-black mb-6 uppercase tracking-tight">
            <span className="text-gray-600 text-1xl font-bold mb-1 lowercase normal-case tracking-normal">my</span>
            EXPERIENCE
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-neutral-800 p-4 shadow-md group hover:border-gray-700 transition-all">
              <div className="w-full aspect-[4/3] bg-neutral-800 overflow-hidden mb-4">
                <img src="/gambar/IMG_2138.JPG" alt="Photography" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
              </div>
              <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tighter leading-none">PHOTOGRAPHY.</h3>
            </div>

            <div className="bg-white border border-neutral-800 p-4 shadow-md group hover:border-gray-700 transition-all">
              <div className="w-full aspect-[4/3] bg-neutral-800 overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=500" alt="Coding" className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300" />
              </div>
              <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tighter leading-none">CODING.</h3>
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* PERFORMANCE SECTION (PAS SATU LAYAR - TIDAK KEPOTONG) */}
<ScrollAnimate>
  <section id="performance" className="py-12 md:py-16 max-w-6xl mx-auto px-4 box-border">
    {/* Judul Section */}
    <h2 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter bg-gradient-to-r from-gray-400 to-gray-950 bg-clip-text text-transparent">
  PERFORMANCE
</h2>
    
    {/* Kontainer Utama */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-950 p-6 text-black shadow-lg rounded-sm w-full box-border">
      
      {/* Sisi Kiri (Kompetisi & Sertifikat) */}
      <div className="md:col-span-2 flex flex-col gap-6">
        
        {/* Gambar Utama Diperkecil Aspek Rasionya agar Sertifikat Aman */}
        <div className="relative bg-neutral-200 aspect-[21/9] w-full overflow-hidden rounded-sm shadow-md">
          <img src="/gambar/DSC08987.JPG" alt="Competition" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-white text-xs md:text-sm">
            Won the <span className='font-bold'>Creative Video Competition</span> 
          </div>
        </div>
        
        {/* Dua Gambar Sertifikat (Tampil Utuh) */}
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-neutral-200 aspect-[4/3] w-full overflow-hidden rounded-sm shadow-md border border-neutral-300">
            <img src="/gambar/skilvul js.png" alt="Detail 1" className="w-full h-full object-contain bg-white" />
          </div>
          <div className="bg-neutral-200 aspect-[4/3] w-full overflow-hidden rounded-sm shadow-md border border-neutral-300">
            <img src="/gambar/skilvul react.png" alt="Detail 2" className="w-full h-full object-contain bg-white" />
          </div>
        </div>

      </div>

      {/* Sisi Kanan (Foto Profil Vertikal Menangkap Kamera) */}
      <div className="bg-neutral-300 aspect-[3/4] md:aspect-auto w-full overflow-hidden  rounded-sm shadow-md">
        <img src="/gambar/IMG_2146.JPG" alt="Vertical Profile" className="w-full h-full object-cover grayscale brightness-90" />
      </div>

    </div>
  </section>
</ScrollAnimate>

      {/* COMPLETED PROJECTS SECTION (DIKASIH ANIMASI) */}
      <ScrollAnimate>
        <section id="projects" className="p-8 md:p-12 bg-neutral-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-7xl font-black text-center mb-8 uppercase tracking-tight text-white">
  COMPLETED <span className="bg-gradient-to-r from-gray-800 to-gray-400 bg-clip-text text-transparent">PROJECTS</span>
</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Project 1 - XPBoost Roadmap */}
              <div className="bg-gradient-to-b from-gray-500 to-gray-900 p-6 flex flex-col items-center text-center rounded-sm shadow-xl">
                <div className="w-full aspect-[16/9] bg-sky-900 mb-4 rounded-sm border border-sky-400/30 overflow-hidden shadow-inner relative group">
                  <img 
                    src="/gambar/xpboost.png" 
                    alt="Screenshot Website XPBoost Roadmap" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <span className="text-sky-300 text-lg font-black tracking-widest uppercase quotes shadow-md">xpboost</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">XPBoost Roadmap</h3>
                <p className="text-xs text-white leading-relaxed mb-6">
                  XPBoost adalah platform berbasis roadmap interaktif yang dirancang untuk memandu proses pembelajaran Anda langkah demi langkah. Temukan jalur belajar yang terstruktur, tingkatkan kompetensi Anda, dan capai target profesional secara lebih efisien.
                </p>
                
                <a 
                  href="https://xpboost-adz.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto bg-white hover:bg-neutral-200 text-gray-900 font-black text-xs px-6 py-2 rounded-sm shadow uppercase tracking-widest transition-all inline-block text-center"
                >
                  click
                </a>
              </div>

              {/* Project 2 - YO!gort */}
              <div className="bg-gradient-to-b from-gray-500 to-gray-800 p-6 flex flex-col items-center text-center rounded-sm shadow-xl ">
                <div className="w-full aspect-[16/9] bg-amber-50 mb-4 rounded-sm border border-amber-200 overflow-hidden shadow-inner relative group">
                  <img 
                    src="/gambar/yogort.png" 
                    alt="Screenshot Website YO!gort" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-amber-300 text-lg font-black tracking-widest uppercase quotes shadow-md">yo!gort</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">YO!gort</h3>
                <p className="text-xs text-white leading-relaxed mb-6">
                  YO!gort menyajikan produk yogurt premium berkualitas tinggi yang dibuat dari bahan-bahan alami pilihan. Kami berkomitmen untuk menghadirkan kelezatan yang autentik sekaligus nutrisi terbaik demi mendukung gaya hidup sehat Anda setiap hari.
                </p>
                
                <a 
                  href="https://yo-gort.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto bg-white hover:bg-neutral-200 text-gray-900 font-black text-xs px-6 py-2 rounded-sm shadow uppercase tracking-widest transition-all inline-block text-center"
                >
                  click
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimate>

      {/* FOOTER & CONTACT (FULL SCREEN & FULL WIDTH) */}
      <ScrollAnimate>
        <footer id="contact" className="h-screen w-full bg-gray-800 text-neutral-800 flex flex-col justify-between border-t-8 ">
          
          <div className="flex-1 flex flex-row justify-between items-start w-full px-12 md:px-24 pt-24 pb-12 box-border">
            
            {/* BAGIAN KIRI: Navigasi (Tautan di-update agar aktif menuju id section) */}
            <div className="flex flex-col gap-2 text-left">
              <h3 className="text-white font-medium italic text-base md:text-lg tracking-wide">Navigation</h3>
              <ul className="flex flex-col gap-4 font-normal text-white italic text-base md:text-lg">
                <li><a href="#home" className="hover:text-red-600 transition-colors">Home</a></li>
                <li><a href="#performance" className="hover:text-red-600 transition-colors">Performance</a></li>
                <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* BAGIAN KANAN: Email */}
            <div className="flex flex-col gap-1 text-left max-w-md md:max-w-xl">
              <span className="text-white   font-medium italic text-base md:text-lg tracking-wide">Email:</span>
              <p className="text-white italic text-lg md:text-2xl font-normal break-all tracking-tight">
                rakkyachmadbaihaqibaihaqi@gmail.com
              </p>
            </div>

          </div>

          {/* BAGIAN BAWAH: Garis pembatas, Sosial Media, dan Copyright */}
          <div className="w-full flex flex-col items-center">
            
            <div className="w-[85%] border-t border-neutral-300 my-4"></div>

            <div className="w-[85%] flex flex-row justify-start items-center gap-6 pb-12 px-2">
              <p className="font-normal italic text-2xl md:text-3xl text-white tracking-wide mr-4">Contact Me:</p>
              <div className="flex gap-6 text-white">
                <a href="https://www.instagram.com/rakkyachmdd/" target='_blank' rel="noreferrer" className="hover:text-red-600 hover:scale-110 transition-all">
                  <svg className="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                </a>
                <a href="https://www.linkedin.com/in/rakky-achmad-baihaqi-ba2940377/" target='_blank' rel="noreferrer" className="hover:text-red-600 hover:scale-110 transition-all">
                  <svg className="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="https://github.com/rkyy-ach" target='_blank' rel="noreferrer" className="hover:text-red-600 hover:scale-110 transition-all">
                  <svg className="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                <a href="https://wa.me/6282377058348" target='_blank' rel="noreferrer" className="hover:text-red-600 hover:scale-110 transition-all" title="Chat on WhatsApp">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 2.197c-5.406 0-9.807 4.403-9.807 9.81 0 1.721.447 3.336 1.233 4.755l-1.312 4.791 4.901-1.286c1.386.755 2.969 1.186 4.652 1.186 5.409 0 9.809-4.403 9.809-9.81 0-5.407-4.4-9.81-9.809-9.81zm5.529 13.84c-.247.699-1.245 1.28-1.722 1.343-.456.06-1.046.119-3.149-.699-2.71-1.035-4.326-3.711-4.462-3.893-.135-.183-1.025-1.36-1.025-2.592 0-1.232.643-1.84.87-2.087.23-.248.5-.31.667-.31h.528c.168 0 .389.015.568.404.183.404.618 1.517.672 1.627.055.111.093.24.016.389-.077.151-.115.247-.23.37-.115.123-.243.275-.346.371-.112.115-.23.24-.099.467.132.227.587 1.115 1.292 1.748.911.817 1.671 1.071 1.908 1.186.236.115.378.097.519-.06.142-.158.607-.704.771-.944.162-.24.325-.202.541-.123.216.079 1.37.645 1.605.762.237.119.394.176.453.276.06.098.06.57-.187 1.269z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="w-full bg-gray-900 text-white text-[10px] md:text-xs text-center py-4 font-mono tracking-widest uppercase font-bold m-0 border-none">
              © 2026 RAKKY ACHMAD. ALL RIGHTS RESERVED.
            </div>

          </div>

        </footer>
      </ScrollAnimate>
    </div>
  );
}

export default App;