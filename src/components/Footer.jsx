import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, BookOpen, Users, Award, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { name: 'Início', id: 'hero' },
    { name: 'Sobre', id: 'about' },
    { name: 'Geossintéticos', id: 'services' },
    { name: 'Contato', id: 'contact' }
  ]

  const services = [
    'Geotêxtil',
    'Manta Geotêxtil',
    'Consultoria Técnica',
    'Estudos de Caso'
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'contato@geossinteticos.blog',
      href: 'mailto:contato@geossinteticos.blog'
    },
    {
      icon: Phone,
      label: '+55 (11) 99999-9999',
      href: 'tel:+5511999999999'
    },
    {
      icon: MapPin,
      label: 'São Paulo, Brasil',
      href: '#'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-900 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-900 rounded-full blur-3xl transform translate-x-32 translate-y-32"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img 
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754516535777_0.jpg"
                  alt="Geossintéticos.Blog" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Blog especializado em conhecimento técnico e prático sobre geossintéticos, 
                contribuindo para o avanço da geotecnia no Brasil.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <BookOpen className="w-4 h-4" />
                  <span>100+ Artigos</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>5K+ Leitores</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 block"
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Nossos Conteúdos</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={service}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      onClick={() => scrollToSection('services')}
                      className="text-gray-300 hover:text-white transition-colors duration-300 block"
                    >
                      {service}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Entre em Contato</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-primary-900 transition-colors duration-300">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{info.label}</span>
                  </motion.a>
                ))}
              </div>

              {/* Newsletter CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-lg p-4 space-y-3"
              >
                <h4 className="font-semibold text-white">Fique Atualizado</h4>
                <p className="text-sm text-gray-300">
                  Receba as últimas novidades sobre geossintéticos
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-primary-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-800 transition-colors duration-300"
                >
                  Inscrever-se
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 text-center md:text-left"
            >
              <p>
                © 2024 Geossintéticos.Blog. Todos os direitos reservados. | 
                Criado com{' '}
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
                >
                  Papum
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Award className="w-4 h-4 text-primary-400" />
                <span>Conteúdo de Qualidade</span>
              </div>
              
              {/* Back to Top Button */}
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="w-10 h-10 bg-primary-900 text-white rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}