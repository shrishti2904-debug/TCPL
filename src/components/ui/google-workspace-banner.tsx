import React from "react";

export function GoogleWorkspaceBanner() {
  return (
    <div className="relative w-full overflow-hidden rounded-[32px] bg-white">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0">
        {/* Blue Shape */}
        <div className="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-[#4285F4] opacity-20 blur-[100px]" />
        
        {/* Red Shape */}
        <div className="absolute -right-20 top-20 h-[300px] w-[300px] rounded-full bg-[#EA4335] opacity-15 blur-[80px]" />
        
        {/* Yellow Shape */}
        <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 translate-y-1/4 rounded-full bg-[#FBBC05] opacity-15 blur-[90px]" />
        
        {/* Green Shape */}
        <div className="absolute bottom-20 right-20 h-[250px] w-[250px] rounded-full bg-[#34A853] opacity-15 blur-[70px]" />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Glassmorphism Overlay Content */}
      <div className="relative z-10 flex min-h-[400px] flex-col items-center justify-center p-8 text-center md:min-h-[500px]">
        <div className="glass-panel relative max-w-3xl overflow-hidden rounded-[32px] border border-white/40 bg-white/60 p-10 shadow-2xl backdrop-blur-xl md:p-16">
          
          {/* Decorative Rings */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[32px]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border-2 border-[#4285F4]/20" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full border-2 border-[#34A853]/20" />
          </div>

          <div className="relative space-y-6">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg">
               {/* Google Workspace Logo Placeholder or Icon */}
               <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22 12H2V12H22Z" fill="none"/>
                 <path d="M21.3333 11.9998L15.9999 6.6665V10.6665H10.6666V6.6665L5.33325 11.9998L10.6666 17.3332V13.3332H15.9999V17.3332L21.3333 11.9998Z" fill="none"/>
                 <g clipPath="url(#clip0)">
                   <path d="M23.47 9.6H17.6V3.73C17.6 2.89 17.23 2.16 16.65 1.65C16.12 1.18 15.43 0.89 14.67 0.89H9.33V9.6H23.47Z" fill="#EA4335"/>
                   <path d="M9.33 0.89V9.6H0.53C0.53 4.8 4.46 0.89 9.33 0.89Z" fill="#FBBC05"/>
                   <path d="M9.33 14.4V23.11C4.46 23.11 0.53 19.2 0.53 14.4H9.33Z" fill="#4285F4"/>
                   <path d="M23.47 14.4H9.33V23.11H14.67C19.52 23.11 23.47 19.2 23.47 14.4Z" fill="#34A853"/>
                 </g>
                 <defs>
                   <clipPath id="clip0">
                     <rect width="24" height="24" fill="white"/>
                   </clipPath>
                 </defs>
               </svg>
            </div>
            
            <div className="space-y-4">
               <h2 className="bg-gradient-to-r from-[#1f1f1f] to-[#5f6368] bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl">
                 Google Workspace
               </h2>
               <p className="mx-auto max-w-lg text-lg font-medium text-[#5f6368]">
                 Everything you need to get anything done, now in one place.
               </p>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              {/* Icons representing apps */}
              {['gmail', 'drive', 'meet', 'calendar'].map((app, i) => (
                <div key={app} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-sm transition-transform hover:scale-110 hover:shadow-md">
                  <div className={`h-2 w-2 rounded-full ${
                    i === 0 ? 'bg-[#EA4335]' : 
                    i === 1 ? 'bg-[#FBBC05]' : 
                    i === 2 ? 'bg-[#34A853]' : 'bg-[#4285F4]'
                  }`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

