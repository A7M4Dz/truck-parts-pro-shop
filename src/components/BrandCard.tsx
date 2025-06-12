
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BrandCardProps {
  name: string;
  description: string;
  logo?: string;
  onLearnMore?: () => void;
  language: 'en' | 'ar';
}

const BrandCard: React.FC<BrandCardProps> = ({ name, description, logo, onLearnMore, language }) => {
  return (
    <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 card-hover">
      <CardContent className="pt-6">
        <div className="h-20 flex items-center justify-center mb-6">
          {logo ? (
            <img src={logo} alt={name} className="h-16 object-contain" />
          ) : (
            <div className="text-4xl font-bold text-primary brand-logo">{name}</div>
          )}
        </div>
        <h3 className="text-xl font-semibold mb-3">{name}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {onLearnMore && (
          <Button variant="outline" onClick={onLearnMore} className="w-full">
            {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default BrandCard;
