import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const [phone, setPhone] = useState("");

  // Маска телефона
  const formatPhone = (value: string) => {
    // оставляем только цифры
    const numbers = value.replace(/\D/g, "");

    // Если пользователь пытается вводить 8 → заменяем на 7
    const clean = numbers.startsWith("8")
      ? "7" + numbers.slice(1)
      : numbers;

    let result = "+7 ";

    if (clean.length > 1) {
      result += "(" + clean.slice(1, 4);
    }
    if (clean.length >= 4) {
      result += ") " + clean.slice(4, 7);
    }
    if (clean.length >= 7) {
      result += "-" + clean.slice(7, 9);
    }
    if (clean.length >= 9) {
      result += "-" + clean.slice(9, 11);
    }

    return result;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numbers = value.replace(/\D/g, "");

    // Ограничиваем макс. длину → +7 + 10 цифр = 11 цифр
    if (numbers.length > 11) return;

    setPhone(formatPhone(value));
  };

  // Валидация номера
  const isValidPhone = () => {
    const digits = phone.replace(/\D/g, ""); // только цифры
    return digits.startsWith("7") && digits.length === 11; // +7 и 10 цифр после
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidPhone()) {
      toast({
        title: "Ошибка",
        description: "Введите корректный номер телефона формата +7 (XXX) XXX-XX-XX.",
        variant: "destructive",
      });
      return;
    }

    // Имитируем отправку 2 секунды
    await new Promise((res) => setTimeout(res, 2000));

    toast({
      title: "Спасибо за заявку!",
      description: "Я перезвоню вам в ближайшее время.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-3">
              Контакты
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6">
              Свяжитесь со мной
            </h2>
            <p className="text-lg text-foreground/70">
              Готова ответить на ваши вопросы и обсудить ваш проект.
              <br />
              Консультация и выезд на объект — бесплатно.
            </p>
          </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 space-y-4 md:space-y-0">
              {/* EMAIL */}
              <a
                href="mailto:designer@example.com"
                className="flex items-center gap-4 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-golden-accent/10 group-hover:bg-golden-accent/20 transition-colors">
                  <Mail className="h-5 w-5 text-golden-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground group-hover:text-golden-accent transition-colors">
                    faina_veselova2023@mail.ru
                  </p>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+79991234567"
                className="flex items-center gap-4 group"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-golden-accent/10 group-hover:bg-golden-accent/20 transition-colors">
                  <Phone className="h-5 w-5 text-golden-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-medium text-foreground group-hover:text-golden-accent transition-colors">
                    +7 (964) 823-66-35
                  </p>
                </div>
              </a>
            </div>


          <div className="grid hidden md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
                  Напишите или позвоните
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:designer@example.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-golden-accent/10 group-hover:bg-golden-accent/20 transition-colors">
                      <Mail className="h-5 w-5 text-golden-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground group-hover:text-golden-accent transition-colors">
                        faina_veselova2023@mail.ru
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+79991234567"
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-golden-accent/10 group-hover:bg-golden-accent/20 transition-colors">
                      <Phone className="h-5 w-5 text-golden-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Телефон</p>
                      <p className="font-medium text-foreground group-hover:text-golden-accent transition-colors">
                        +7 (964) 823-66-35
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Рассматриваю проекты от 30 м² и выше.
                  <br />
                  Время ответа: обычно в течение 24 часов.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 hidden animate-slide-up">
              <div className="space-y-4">
                <Input type="text" placeholder="Ваше имя" required className="bg-background" />

                <Input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  className="bg-background"
                />

                <Input type="email" placeholder="Email" className="bg-background" />

                <Textarea
                  placeholder="Расскажите о вашем проекте"
                  rows={5}
                  className="bg-background resize-none"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="h-4 w-4 mr-2" />
                Отправить заявку
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
