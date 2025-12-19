import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: 'Workflow',
      title: 'Автоматизация процессов',
      description: 'Настройте автоматический опрос устройств и обработку данных без программирования'
    },
    {
      icon: 'Gauge',
      title: 'Мониторинг в реальном времени',
      description: 'Отслеживайте состояние всех подключенных устройств на единой панели'
    },
    {
      icon: 'Database',
      title: 'Логирование данных',
      description: 'Сохраняйте историю изменений параметров с возможностью экспорта в CSV/Excel'
    },
    {
      icon: 'Puzzle',
      title: 'Готовые конфигурации',
      description: 'Библиотека шаблонов для популярных промышленных устройств'
    },
    {
      icon: 'Shield',
      title: 'Безопасность',
      description: 'Контроль доступа и шифрование данных для защиты промышленных систем'
    },
    {
      icon: 'Zap',
      title: 'Высокая производительность',
      description: 'Обработка тысяч запросов в секунду с минимальной задержкой'
    }
  ];

  const useCases = [
    {
      title: 'Мониторинг температуры',
      description: 'Подключение датчиков температуры для контроля производственных процессов',
      code: `{
  "device": "temperature_sensor",
  "address": 1,
  "registers": [0, 1, 2],
  "interval": 1000
}`
    },
    {
      title: 'Управление двигателями',
      description: 'Запуск, остановка и контроль скорости частотных преобразователей',
      code: `{
  "device": "frequency_converter",
  "address": 2,
  "commands": ["start", "stop"],
  "speed_register": 40001
}`
    },
    {
      title: 'Счётчики энергии',
      description: 'Считывание показаний электросчётчиков для учёта энергопотребления',
      code: `{
  "device": "energy_meter",
  "address": 3,
  "parameters": ["voltage", "current", "power"]
}`
    }
  ];

  const news = [
    {
      date: '15 декабря 2024',
      title: 'Версия 2.5 — Поддержка Modbus TCP/IP',
      description: 'Добавлена работа через Ethernet, улучшена стабильность соединения',
      tag: 'Обновление'
    },
    {
      date: '03 декабря 2024',
      title: 'Новые готовые конфигурации',
      description: 'Добавлены профили для Schneider Electric и Siemens устройств',
      tag: 'Контент'
    },
    {
      date: '20 ноября 2024',
      title: 'Бета-тестирование мобильного приложения',
      description: 'Управление системой с iOS и Android устройств',
      tag: 'Анонс'
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={20} className="text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">ModbusMaster</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('features')} className="text-sm hover:text-primary transition-colors">
                Возможности
              </button>
              <button onClick={() => scrollToSection('download')} className="text-sm hover:text-primary transition-colors">
                Скачать
              </button>
              <button onClick={() => scrollToSection('news')} className="text-sm hover:text-primary transition-colors">
                Новости
              </button>
              <button onClick={() => scrollToSection('docs')} className="text-sm hover:text-primary transition-colors">
                Документация
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-fade-in">
            <Badge className="mb-4">Версия 2.5 — Modbus TCP/IP</Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Профессиональное решение<br />для работы с Modbus
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Простой и мощный инструмент для мониторинга, управления и логирования промышленных устройств
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" onClick={() => scrollToSection('download')} className="text-base">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать программу
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('docs')} className="text-base">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Документация
              </Button>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Zap" size={32} className="text-primary mb-2" />
                <CardTitle>Быстрый старт</CardTitle>
                <CardDescription>Начните работу за 5 минут с готовыми шаблонами</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Settings" size={32} className="text-primary mb-2" />
                <CardTitle>Гибкая настройка</CardTitle>
                <CardDescription>Адаптируйте под любые задачи с помощью конфигураций</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary transition-all hover:shadow-lg">
              <CardHeader>
                <Icon name="Users" size={32} className="text-primary mb-2" />
                <CardTitle>Поддержка 24/7</CardTitle>
                <CardDescription>Наша команда всегда готова помочь с настройкой</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Возможности программы</h2>
            <p className="text-xl text-muted-foreground">Всё необходимое для работы с промышленными системами</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <Icon name={feature.icon} size={40} className="text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Примеры использования</h3>
            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {useCases.map((useCase, idx) => (
                  <TabsTrigger key={idx} value={String(idx)}>{useCase.title}</TabsTrigger>
                ))}
              </TabsList>
              {useCases.map((useCase, idx) => (
                <TabsContent key={idx} value={String(idx)}>
                  <Card>
                    <CardHeader>
                      <CardTitle>{useCase.title}</CardTitle>
                      <CardDescription>{useCase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-secondary/20 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{useCase.code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      <section id="download" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Скачать программу</h2>
            <p className="text-xl text-muted-foreground">Выберите версию для вашей операционной системы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:border-primary transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <Icon name="Monitor" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Windows</CardTitle>
                <CardDescription>Windows 10/11</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-sm text-muted-foreground">
                  Версия 2.5.0<br />58 МБ
                </div>
                <Button className="w-full">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать .exe
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <Icon name="Apple" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>macOS</CardTitle>
                <CardDescription>macOS 11+</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-sm text-muted-foreground">
                  Версия 2.5.0<br />52 МБ
                </div>
                <Button className="w-full">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать .dmg
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-primary transition-all hover:shadow-lg">
              <CardHeader className="text-center">
                <Icon name="Terminal" size={48} className="text-primary mx-auto mb-4" />
                <CardTitle>Linux</CardTitle>
                <CardDescription>Ubuntu, Debian</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center text-sm text-muted-foreground">
                  Версия 2.5.0<br />48 МБ
                </div>
                <Button className="w-full">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать .deb
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="inline-block">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  <Icon name="Shield" size={16} className="inline mr-2" />
                  Все файлы проверены антивирусом и подписаны цифровой подписью
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Новости разработки</h2>
            <p className="text-xl text-muted-foreground">Следите за развитием проекта</p>
          </div>

          <div className="space-y-6">
            {news.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <Badge variant="secondary">{item.tag}</Badge>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <CardTitle className="text-2xl">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </div>
                    <Icon name="ChevronRight" size={24} className="text-muted-foreground" />
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              <Icon name="Rss" size={18} className="mr-2" />
              Подписаться на обновления
            </Button>
          </div>
        </div>
      </section>

      <section id="docs" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Документация</h2>
            <p className="text-xl text-muted-foreground">Руководства и готовые конфигурации</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {docs.map((section, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  <div className="flex items-center gap-3">
                    <Icon name="Folder" size={20} />
                    {section.category}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2 pt-2">
                    {section.items.map((item, itemIdx) => (
                      <button
                        key={itemIdx}
                        className="w-full text-left px-4 py-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-3 group"
                      >
                        <Icon name="FileText" size={18} className="text-muted-foreground group-hover:text-primary" />
                        <span>{item}</span>
                        <Icon name="ExternalLink" size={16} className="ml-auto text-muted-foreground opacity-0 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами для получения помощи</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all text-center">
              <CardHeader>
                <Icon name="Mail" size={40} className="text-primary mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-base">support@modbusmaster.ru</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all text-center">
              <CardHeader>
                <Icon name="MessageCircle" size={40} className="text-primary mx-auto mb-4" />
                <CardTitle>Telegram</CardTitle>
                <CardDescription className="text-base">@modbusmaster_support</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-all text-center">
              <CardHeader>
                <Icon name="Github" size={40} className="text-primary mx-auto mb-4" />
                <CardTitle>GitHub</CardTitle>
                <CardDescription className="text-base">github.com/modbusmaster</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">Остались вопросы? Напишите нам!</p>
                <Button size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Activity" size={20} className="text-primary-foreground" />
              </div>
              <span className="font-semibold">ModbusMaster</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 ModbusMaster. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Github" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Mail" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
