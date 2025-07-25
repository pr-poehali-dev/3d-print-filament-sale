import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedDiameter, setSelectedDiameter] = useState('');

  const materials = ['PLA', 'ABS', 'PETG', 'TPU', 'WOOD', 'METAL'];
  const colors = ['Красный', 'Синий', 'Зеленый', 'Желтый', 'Черный', 'Белый', 'Оранжевый', 'Фиолетовый'];
  const diameters = ['1.75mm', '3.0mm'];

  const filaments = [
    {
      id: 1,
      name: 'PLA Premium Красный',
      material: 'PLA',
      color: 'Красный',
      diameter: '1.75mm',
      price: 1500,
      image: '/img/c0145229-63e4-46f3-a253-13c6be37aff9.jpg',
      description: 'Высококачественный PLA филамент для точной печати'
    },
    {
      id: 2,
      name: 'ABS Professional Синий',
      material: 'ABS',
      color: 'Синий',
      diameter: '1.75mm',
      price: 1800,
      image: '/img/c0145229-63e4-46f3-a253-13c6be37aff9.jpg',
      description: 'Прочный ABS материал для функциональных деталей'
    },
    {
      id: 3,
      name: 'PETG Crystal Прозрачный',
      material: 'PETG',
      color: 'Прозрачный',
      diameter: '1.75mm',
      price: 2200,
      image: '/img/c0145229-63e4-46f3-a253-13c6be37aff9.jpg',
      description: 'Кристально чистый PETG для прозрачных изделий'
    },
    {
      id: 4,
      name: 'TPU Flex Черный',
      material: 'TPU',
      color: 'Черный',
      diameter: '1.75mm',
      price: 2800,
      image: '/img/c0145229-63e4-46f3-a253-13c6be37aff9.jpg',
      description: 'Гибкий TPU материал для эластичных деталей'
    },
    {
      id: 5,
      name: 'Wood PLA Натуральный',
      material: 'WOOD',
      color: 'Коричневый',
      diameter: '1.75mm',
      price: 2500,
      image: '/img/c0145229-63e4-46f3-a253-13c6be37aff9.jpg',
      description: 'PLA с древесными волокнами для реалистичной текстуры'
    },
    {
      id: 6,
      name: 'Metal PLA Серебристый',
      material: 'METAL',
      color: 'Серебристый',
      diameter: '1.75mm',
      price: 3200,
      image: '/img/c0145229-63e4-46f3-a253-13c6be37aff9.jpg',
      description: 'PLA с металлическим наполнителем'
    }
  ];

  const filteredFilaments = filaments.filter(filament => {
    return (!selectedMaterial || filament.material === selectedMaterial) &&
           (!selectedColor || filament.color === selectedColor) &&
           (!selectedDiameter || filament.diameter === selectedDiameter);
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Box" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-dark-gray">3D FILAMENT STORE</h1>
                <p className="text-sm text-gray-600">Профессиональные материалы для 3D печати</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-dark-gray hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-dark-gray hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-dark-gray hover:text-primary transition-colors">О нас</a>
              <a href="#" className="text-dark-gray hover:text-primary transition-colors">Доставка</a>
              <a href="#" className="text-dark-gray hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Лучшие филаменты для 3D печати</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Широкий выбор качественных материалов для всех типов 3D принтеров. Быстрая доставка по всей России.</p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Icon name="ArrowDown" size={20} className="mr-2" />
            Смотреть каталог
          </Button>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 items-center">
            <h3 className="text-lg font-semibold text-dark-gray mr-4">Фильтры:</h3>
            
            <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Материал" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все материалы</SelectItem>
                {materials.map(material => (
                  <SelectItem key={material} value={material}>{material}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Цвет" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все цвета</SelectItem>
                {colors.map(color => (
                  <SelectItem key={color} value={color}>{color}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDiameter} onValueChange={setSelectedDiameter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Диаметр" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все диаметры</SelectItem>
                {diameters.map(diameter => (
                  <SelectItem key={diameter} value={diameter}>{diameter}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {(selectedMaterial || selectedColor || selectedDiameter) && (
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedMaterial('');
                  setSelectedColor('');
                  setSelectedDiameter('');
                }}
              >
                <Icon name="X" size={16} className="mr-2" />
                Сбросить
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-dark-gray">Каталог филаментов</h3>
            <p className="text-gray-600">Найдено: {filteredFilaments.length} товаров</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFilaments.map(filament => (
              <Card key={filament.id} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <div className="relative">
                  <img 
                    src={filament.image} 
                    alt={filament.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary">
                    {filament.material}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-dark-gray">{filament.name}</CardTitle>
                  <CardDescription>{filament.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{filament.color}</Badge>
                      <Badge variant="outline">{filament.diameter}</Badge>
                    </div>
                    <span className="text-2xl font-bold text-primary">{filament.price}₽</span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Heart" size={16} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Icon name="Eye" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-dark-gray mb-12">Почему выбирают нас</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-dark-gray mb-2">Быстрая доставка</h4>
              <p className="text-gray-600">Доставка по Москве в день заказа, по России за 1-3 дня</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-dark-gray mb-2">Гарантия качества</h4>
              <p className="text-gray-600">Только проверенные производители и сертифицированные материалы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HeadphonesIcon" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-semibold text-dark-gray mb-2">Поддержка 24/7</h4>
              <p className="text-gray-600">Наши эксперты помогут выбрать подходящий материал</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-gray text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">3D FILAMENT STORE</h4>
              <p className="text-gray-400">Профессиональные материалы для 3D печати с доставкой по всей России</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">PLA филаменты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ABS филаменты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PETG филаменты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Специальные материалы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат и обмен</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 +7 (495) 123-45-67</p>
                <p>📧 info@3dfilament.ru</p>
                <p>📍 Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 3D FILAMENT STORE. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;