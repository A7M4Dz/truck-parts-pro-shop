
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: 'en' | 'ar';
  onToggle: () => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onToggle }) => {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onToggle}
      className="flex items-center gap-2 hover:bg-accent transition-colors"
    >
      <Globe className="h-4 w-4" />
      {currentLanguage === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};

export default LanguageToggle;
