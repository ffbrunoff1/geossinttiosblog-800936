import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Shield, Droplets, Mountain, ArrowRight, CheckCircle, Star, TrendingUp } from 'lucide-react'

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const geosynthetics = [
    {
      title: 'Geotêxtil',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754516527080_4hjkrgzeguy_geotextil-1-1024x768.jpg',
      description: 'Material têxtil permeável usado em geotecnia para separação, filtração, reforço e proteção',
      features: ['Separação de camadas', 'Filtração eficiente', 'Reforço estrutural', 'Proteção contra erosão'],
      applications: ['Estradas e pavimentos', 'Aterros sanitários', 'Obras portuárias', 'Sistemas de drenagem'],
      icon: Layers,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Manta Geotêxtil',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754516528143_ax1agsqqk2_manta-geotextil-9-768x1024.jpg',
      description: 'Manta geotêxtil de alta resistência para aplicações específicas em engenharia civil e ambiental',
      features: ['Alta resistência', 'Durabilidade superior', 'Fácil instalação', 'Versatilidade de uso'],
      applications: ['Contenção de taludes', 'Reforço de fundações', 'Proteção ambiental', 'Obras hidráulicas'],
      icon: Shield,
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Manta Geotêxtil Especial',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754516529529_2rfblcw82zh_manta-geotextil-3-1024x768.jpg',
      description: 'Manta geotêxtil com propriedades especiais para projetos de alta complexidade técnica',
      features: ['Propriedades especiais', 'Alta performance', 'Resistência extrema', 'Longa durabilidade'],
      applications: ['Projetos especiais', 'Obras de grande porte', 'Condições extremas', 'Soluções customizadas'],
      icon: Mountain,
      color: 'from-purple-500 to-purple-700'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Proteção Ambiental',
      description: 'Prevenção de erosões e poluição dos recursos hídricos'
    },
    {
      icon: TrendingUp,
      title: 'Durabilidade',
      description: 'Aumento da vida útil de estradas, aterros e sistemas de contenção'
    },
    {
      icon: Droplets,
      title: 'Gestão de Água',
      description: 'Drenagem eficiente e controle de fluxos hídricos'
    },
    {
      icon: CheckCircle,
      title: 'Sustentabilidade',
      description: 'Escolha econômica e sustentável para diversos projetos'
    }
  ]

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-900/10 rounded-full text-primary-900 font-medium text-sm mb-6">
            <Layers className="w-4 h-4 mr-2" />
            Nossos Geossintéticos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Materiais Essenciais</span>
            <br />
            <span className="text-gray-800">para Engenharia Moderna</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Os geossintéticos são materiais essenciais para engenharia civil e ambiental, 
            oferecendo soluções inovadoras para gestão de solo e água com tecnologia avançada 
            e benefícios a longo prazo.
          </p>
        </motion.div>

        {/* Benefits Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Geosynthetics Cards */}
        <div className="space-y-16">
          {geosynthetics.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800">Características Principais:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-gray-800">Aplicações:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.applications.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={scrollToContact}
                  className="btn-primary group mt-auto"
                >
                  Saiba Mais
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
              >
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Quality Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium text-gray-800">Premium</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-900 to-primary-600 rounded-3xl p-12 text-center text-white mt-20"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para Conhecer Mais?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para descobrir como os geossintéticos podem 
            revolucionar seus projetos de engenharia.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 group"
          >
            Entre em Contato
            <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}