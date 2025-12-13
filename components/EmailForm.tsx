import React, { useEffect } from 'react';

interface EmailFormProps {
  variant?: 'hero' | 'footer';
}

const EmailForm: React.FC<EmailFormProps> = ({ variant = 'hero' }) => {
  useEffect(() => {
    // Load Typeform script dynamically if not already present
    const scriptSrc = "//embed.typeform.com/next/embed.js";
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className={`w-full flex ${variant === 'hero' ? 'justify-center lg:justify-start' : 'justify-center'}`}>
      <div className="w-full max-w-md">
        <div data-tf-live="01KC8Y1MHTDNF8J3YF7BVX8HS1"></div>
      </div>
    </div>
  );
};

export default React.memo(EmailForm);