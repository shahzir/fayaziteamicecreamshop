
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'Flavor' | 'Cone' | 'Cup' | 'Family Pack';
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface OrderFormData {
  customerName: string;
  phoneNumber: string;
  address: string;
}
