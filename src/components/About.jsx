import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Users, Award, BookOpen, Lightbulb, Shield, Zap } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: 'Conteúdo Técnico',
      description: 'Artigos especializados e estudos de caso detalhados sobre geossintéticos'
    },
    {
      icon: Users,
      title: 'Comunidade Especializada',
      description: 'Conecte-se com profissionais e especialistas da área de geotecnia'
    },
    {
      icon: Lightbulb,
      title: 'Inovação Constante',
      description: 'Últimas tendências e tecnologias em materiais geossintéticos'
    },
    {
      icon: Shield,
      title: 'Informação Confiável',
      description: 'Conteúdo revisado por especialistas e baseado em pesquisas científicas'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description: 'Educar e informar profissionais sobre as melhores práticas em geossintéticos, contribuindo para o avanço da geotecnia no Brasil.'
    },
    {
      icon: Eye,
      title: 'Nossa Visão',
      description: 'Ser a principal fonte de conhecimento técnico sobre geossintéticos, formando uma comunidade de profissionais capacitados.'
    },
    {
      icon: Award,
      title: 'Nossos Valores',
      description: 'Excelência técnica, transparência na informação, inovação constante e compromisso com o desenvolvimento sustentável.'
    }
  ]

  return (
    <section id="about" className="py-24 bg-white">
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
            <Users className="w-4 h-4 mr-2" />
            Sobre o Geossintéticos.Blog
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Conhecimento Técnico</span>
            <br />
            <span className="text-gray-800">em Geossintéticos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos um blog especializado em divulgar conhecimento técnico e prático sobre 
            geossintéticos, sem fins comerciais diretos. Nossa missão é educar e informar 
            profissionais da geotecnia sobre as últimas inovações do setor.
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-8 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Por que escolher o <span className="gradient-text">Geossintéticos.Blog</span>?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos conteúdo de qualidade, atualizado e relevante para sua carreira profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-900 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-900 to-primary-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-6">
            Junte-se à Nossa Comunidade!
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Torne-se um especialista em geossintéticos com nosso conteúdo exclusivo e 
            faça parte de uma comunidade que está transformando a geotecnia.
          </p>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-80">Artigos Publicados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5K+</div>
              <div className="text-lg opacity-80">Leitores Mensais</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-lg opacity-80">Especialistas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-80">Cases de Sucesso</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('services')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300"
          >
            <Zap className="w-5 h-5 inline mr-2" />
            Começar Agora
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}