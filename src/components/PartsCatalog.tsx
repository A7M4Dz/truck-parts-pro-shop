
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Package, Wrench, Zap, Disc } from 'lucide-react';

interface Part {
  id: string;
  name: string;
  brand: 'IVECO' | 'MAN' | 'ZF';
  category: string;
  partNumber: string;
  description: string;
  image?: string;
  price?: string;
  availability: 'in-stock' | 'order' | 'out-of-stock';
}

interface PartsCatalogProps {
  language: 'en' | 'ar';
  brand?: 'IVECO' | 'MAN' | 'ZF';
}

const PartsCatalog: React.FC<PartsCatalogProps> = ({ language, brand }) => {
  const content = {
    en: {
      title: 'Parts Catalog',
      categories: {
        engine: 'Engine Parts',
        transmission: 'Transmission',
        brakes: 'Brake System',
        electrical: 'Electrical'
      },
      availability: {
        'in-stock': 'In Stock',
        'order': 'Order',
        'out-of-stock': 'Out of Stock'
      },
      inquire: 'Inquire Now',
      partNumber: 'Part Number'
    },
    ar: {
      title: 'كتالوج القطع',
      categories: {
        engine: 'قطع المحرك',
        transmission: 'ناقل الحركة',
        brakes: 'نظام الفرامل',
        electrical: 'النظام الكهربائي'
      },
      availability: {
        'in-stock': 'متوفر',
        'order': 'طلب خاص',
        'out-of-stock': 'غير متوفر'
      },
      inquire: 'استفسر الآن',
      partNumber: 'رقم القطعة'
    }
  };

  const currentContent = content[language];

  const categoryIcons = {
    engine: Package,
    transmission: Wrench,
    brakes: Disc,
    electrical: Zap
  };

  // Sample parts data - in a real app, this would come from an API or database
  const sampleParts: Part[] = [
    {
      id: '1',
      name: 'Air Filter',
      brand: 'IVECO',
      category: 'engine',
      partNumber: 'IV-AF-001',
      description: 'High-performance air filter for IVECO trucks',
      availability: 'in-stock'
    },
    {
      id: '2',
      name: 'Brake Disc',
      brand: 'MAN',
      category: 'brakes',
      partNumber: 'MAN-BD-205',
      description: 'Premium brake disc for MAN commercial vehicles',
      availability: 'in-stock'
    },
    {
      id: '3',
      name: 'Transmission Oil',
      brand: 'ZF',
      category: 'transmission',
      partNumber: 'ZF-TO-150',
      description: 'ZF approved transmission oil for optimal performance',
      availability: 'order'
    }
  ];

  const filteredParts = brand ? sampleParts.filter(part => part.brand === brand) : sampleParts;

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'in-stock': return 'bg-green-100 text-green-800 border-green-200';
      case 'order': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'out-of-stock': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {currentContent.title}
          {brand && ` - ${brand}`}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part) => {
          const CategoryIcon = categoryIcons[part.category as keyof typeof categoryIcons];
          
          return (
            <Card key={part.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CategoryIcon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{part.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {part.brand}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {part.description}
                  </p>
                  
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-medium">{currentContent.partNumber}:</span>
                    <span className="text-muted-foreground">{part.partNumber}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge className={getAvailabilityColor(part.availability)}>
                      {currentContent.availability[part.availability as keyof typeof currentContent.availability]}
                    </Badge>
                    
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex items-center gap-1"
                      onClick={() => {
                        const message = `Hello, I'm interested in ${part.name} (${part.partNumber}) for ${part.brand}`;
                        window.open(`https://wa.me/966504106845?text=${encodeURIComponent(message)}`, '_blank');
                      }}
                    >
                      <MessageCircle className="h-3 w-3" />
                      {currentContent.inquire}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PartsCatalog;
