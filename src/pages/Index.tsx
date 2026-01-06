import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [review, setReview] = useState('');
  const { toast } = useToast();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmitReview = () => {
    if (rating === null) {
      toast({
        title: 'Выберите оценку',
        description: 'Пожалуйста, выберите оценку от 0 до 10',
        variant: 'destructive',
      });
      return;
    }

    if (!review.trim()) {
      toast({
        title: 'Напишите отзыв',
        description: 'Поле отзыва не может быть пустым',
        variant: 'destructive',
      });
      return;
    }

    const mailtoLink = `mailto:support@modbusrw.ru?subject=Отзыв о Modbus RW (Оценка: ${rating}/10)&body=${encodeURIComponent(review)}`;
    window.location.href = mailtoLink;

    toast({
      title: 'Спасибо за отзыв!',
      description: 'Ваш почтовый клиент должен открыться',
    });

    setRating(null);
    setReview('');
  };

  const features = [
    {
      icon: 'Activity',
      title: 'Автоматизация процессов',
      description: 'Настройте автоматический опрос устройств без программирования'
    },
    {
      icon: 'Gauge',
      title: 'Мониторинг в реальном времени',
      description: 'Отслеживайте состояние подключенных устройств'
    },
    {
      icon: 'Database',
      title: 'Логирование данных',
      description: 'Сохраняйте историю с экспортом в CSV/Excel'
    },
    {
      icon: 'FileCode',
      title: 'Готовые конфигурации',
      description: 'Библиотека шаблонов для популярных устройств'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Контроль доступа и шифрование данных'
    },
    {
      icon: 'Zap',
      title: 'Высокая производительность',
      description: 'Обработка тысяч запросов в секунду'
    }
  ];

  const news = [
    {
      date: '15 декабря 2024',
      title: 'Версия 2.5 — Поддержка Modbus TCP/IP',
      description: 'Добавлена работа через Ethernet, улучшена стабильность соединения'
    },
    {
      date: '03 декабря 2024',
      title: 'Новые готовые конфигурации',
      description: 'Добавлены профили для Schneider Electric и Siemens устройств'
    },
    {
      date: '20 ноября 2024',
      title: 'Бета-тестирование мобильного приложения',
      description: 'Управление системой с iOS и Android устройств'
    }
  ];

  const docs = [
    {
      category: 'Быстрый старт',
      items: [
        'Установка и первый запуск',
        'Настройка COM-порта',
        'Подключение первого устройства'
      ]
    },
    {
      category: 'Конфигурации',
      items: [
        'Датчики температуры Овен ТРМ',
        'ПЛК Schneider Modicon',
        'Частотные преобразователи Danfoss'
      ]
    },
    {
      category: 'Продвинутые функции',
      items: [
        'Создание собственных профилей',
        'Экспорт данных в SCADA',
        'API для интеграции'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/Logo.png" 
                alt="Modbus RW Logo" 
                className="w-8 h-8"
              />
              <span className="text-lg font-medium">Modbus RW</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <button onClick={() => scrollToSection('features')} className="hover:text-primary transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection('download')} className="hover:text-primary transition-colors">
                Скачать
              </button>
              <button onClick={() => scrollToSection('news')} className="hover:text-primary transition-colors">
                Новости
              </button>
              <button onClick={() => scrollToSection('docs')} className="hover:text-primary transition-colors">
                Документация
              </button>
              <button onClick={() => scrollToSection('review')} className="hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-40 pb-24 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <img 
            src="https://cdn.poehali.dev/files/Logo.png" 
            alt="Modbus RW Logo" 
            className="w-20 h-20 mx-auto mb-6"
          />
          <Badge className="mb-6" variant="secondary">Версия 2.5</Badge>
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">
            Modbus RW
          </h1>
          <p className="text-xl text-muted-foreground mb-10 font-light">
            Инструмент для мониторинга и управления промышленными устройствами
          </p>
          <Button size="lg" onClick={() => scrollToSection('download')} className="text-base">
            <Icon name="Download" size={20} className="mr-2" />
            Скачать для Windows
          </Button>
        </div>
      </section>

      <section id="features" className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-light text-center mb-16">Возможности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center space-y-3">
                <Icon name={feature.icon} size={32} className="text-primary mx-auto" />
                <h3 className="text-lg font-medium">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-6 bg-muted/40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light mb-12">Скачать программу</h2>
          <Card className="border-2">
            <CardHeader className="pb-6">
              <Icon name="Monitor" size={48} className="text-primary mx-auto mb-4" />
              <CardTitle className="text-2xl font-medium">Windows</CardTitle>
              <CardDescription className="text-base">Windows 10 / 11</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                Версия 2.5.0 • 58 МБ
              </div>
              <Button size="lg" className="w-full">
                <Icon name="Download" size={18} className="mr-2" />
                Скачать установщик
              </Button>
              <p className="text-xs text-muted-foreground pt-2">
                <Icon name="Shield" size={14} className="inline mr-1" />
                Файл проверен антивирусом
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="news" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-light text-center mb-12">Новости</h2>
          <div className="space-y-4">
            {news.map((item, idx) => (
              <Card key={idx} className="hover:border-primary transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                      <CardTitle className="text-xl font-medium">{item.title}</CardTitle>
                      <CardDescription className="text-sm">{item.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-6 bg-muted/40">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-light text-center mb-12">Документация</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {docs.map((section, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-background">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Icon name="Folder" size={18} />
                    {section.category}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1 pt-2">
                    {section.items.map((item, itemIdx) => (
                      <button
                        key={itemIdx}
                        className="w-full text-left px-3 py-2 rounded hover:bg-muted/50 transition-colors flex items-center gap-3 text-sm"
                      >
                        <Icon name="FileText" size={16} className="text-muted-foreground" />
                        <span>{item}</span>
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="review" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-light text-center mb-12">Оставьте отзыв</h2>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-center">Оцените программу</CardTitle>
              <CardDescription className="text-center">Ваше мнение поможет нам стать лучше</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <label className="text-sm font-medium">Оценка от 0 до 10</label>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <button
                      key={num}
                      onClick={() => setRating(num)}
                      className={`w-12 h-12 rounded-lg border-2 transition-all ${
                        rating === num
                          ? 'bg-primary text-primary-foreground border-primary scale-110'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Ваш отзыв</label>
                <Textarea
                  placeholder="Расскажите о вашем опыте использования программы..."
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button size="lg" className="w-full" onClick={handleSubmitReview}>
                <Icon name="Send" size={18} className="mr-2" />
                Отправить отзыв
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/40">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-light mb-12">Контакты</h2>
          <Card className="border-2">
            <CardHeader className="pb-6">
              <Icon name="Mail" size={40} className="text-primary mx-auto mb-4" />
              <CardTitle className="text-xl font-medium">Email</CardTitle>
              <CardDescription className="text-base">support@modbusrw.ru</CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" className="w-full" onClick={() => window.location.href = 'mailto:support@modbusrw.ru'}>
                <Icon name="Send" size={18} className="mr-2" />
                Написать нам
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-8 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/Logo.png" 
                alt="Modbus RW Logo" 
                className="w-6 h-6"
              />
              <span className="font-medium">Modbus RW</span>
            </div>
            <p>© 2024 Modbus RW. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
