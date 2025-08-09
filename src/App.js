import React from 'react';
import { motion } from 'framer-motion';

export default function NickStoneAudioSite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold tracking-widest">Nick Stone Audio</a>
          <nav className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#services" className="hover:text-red-500">Услуги</a>
            <a href="#portfolio" className="hover:text-red-500">Портфолио</a>
            <a href="#about" className="hover:text-red-500">Обо мне</a>
            <a href="#reviews" className="hover:text-red-500">Отзывы</a>
            <a href="#contact" className="hover:text-red-500">Контакты</a>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Сведение и мастеринг с энергией рока
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Студийное качество, живой драйв и внимание к деталям. Работая с рок-исполнителями, я помогу вашему треку зазвучать мощно и чисто.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md font-medium">Заказать</a>
              <a href="#portfolio" className="px-6 py-3 border border-white/20 hover:border-red-500 rounded-md font-medium">Слушать</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <img src="/assets/studio-setup.jpg" alt="Studio setup" className="rounded-xl shadow-lg" />
          </motion.div>
        </section>

        {/* SERVICES */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Сведение', desc: 'Баланс, панорама, обработка эффектами и выравнивание по громкости.' },
              { title: 'Мастеринг', desc: 'Финальная обработка трека для публикации на всех платформах.' },
              { title: 'Mix+Master', desc: 'Комплексная работа от сырого материала до финальной версии.' },
            ].map((s) => (
              <div key={s.title} className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition">
                <h3 className="text-xl font-semibold mb-3 text-red-500">{s.title}</h3>
                <p className="text-gray-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
       <section id="portfolio" className="bg-white/5 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8">Портфолио</h2>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        "https://soundcloud.com/nikita-kunin-985084936/vazelin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/nikita-kunin-985084936/vazelin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
        "https://soundcloud.com/nikita-kunin-985084936/vazelin?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
      ].map((trackUrl, i) => (
        <div key={i} className="bg-black rounded-lg overflow-hidden shadow-lg">
          <iframe
            title={`track-${i}`}
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff0000&auto_play=false&hide_related=false&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
          ></iframe>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* ABOUT */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <img src="/assets/nikita-profile.jpg" alt="Nikita profile" className="rounded-xl shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
            <p className="text-gray-300">
              Я Никита, звукорежиссёр и микс-инженер, специализирующийся на рок-музыке. За последние годы я поработал с десятками исполнителей, помогая им раскрыть звучание их треков.
            </p>
            <p className="mt-4 text-gray-300">
              Работаю в Pro Tools и Logic Pro, использую профессиональные плагины Waves, FabFilter, UAD и аналоговое оборудование.
            </p>
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="bg-white/5 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8">Отзывы</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Band A', text: 'Отличная работа! Трек зазвучал так, как мы мечтали.' },
                { name: 'Artist B', text: 'Сведение на высшем уровне, мастеринг мощный и чистый.' },
                { name: 'Group C', text: 'Профессионал, который понимает рок с полуслова.' },
              ].map((r) => (
                <div key={r.name} className="bg-black p-6 rounded-lg border border-white/10">
                  <p className="text-gray-300 mb-4">“{r.text}”</p>
                  <div className="text-red-500 font-semibold">— {r.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-8">Контакты</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Имя" className="p-3 rounded bg-white/5 border border-white/10" />
            <input type="email" placeholder="Email" className="p-3 rounded bg-white/5 border border-white/10" />
            <textarea placeholder="Ваш проект" rows="4" className="md:col-span-2 p-3 rounded bg-white/5 border border-white/10"></textarea>
            <button className="md:col-span-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md font-medium">Отправить</button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nick Stone Audio — Все права защищены
      </footer>
    </div>
  );
}
