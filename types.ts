import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  price?: string;
}

export interface DogTip {
  title: string;
  content: string;
}