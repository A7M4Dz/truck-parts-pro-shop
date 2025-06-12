
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  iconColor?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ 
  icon: Icon, 
  title, 
  value, 
  href, 
  iconColor = 'text-primary' 
}) => {
  const content = (
    <Card className="text-center p-6 card-hover">
      <CardContent className="pt-6">
        <Icon className={`h-12 w-12 ${iconColor} mx-auto mb-4`} />
        <h3 className="font-semibold mb-2">{title}</h3>
        <div className={href ? "text-primary hover:underline cursor-pointer" : "text-muted-foreground"}>
          {value}
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default ContactCard;
