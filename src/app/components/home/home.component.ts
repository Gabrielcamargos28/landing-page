import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { BenefitComponent } from '../benefit/benefit.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent, 
    NgOptimizedImage, 
    BtnPrimaryComponent,
    NewsletterFormComponent,
    BenefitComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  conteudos: Array<{
    titulo: string,
    texto: string,
    link?: string,
    lista?: { listaItem: string, textoItem: string, link?: string }[]
  }> = [
    {
      titulo: 'Java',
      texto: 'Uma das linguagens de programação mais populares e amplamente utilizadas no desenvolvimento de sistemas web corporativos e de grande escala. Com sua forte tipagem e orientação a objetos, Java oferece uma base sólida para construir aplicações robustas e seguras.'
    },
    {
      titulo: 'Spring Boot',
      texto: 'Spring Boot é um framework baseado no Spring Framework que simplifica o desenvolvimento de aplicações Java. Ele facilita a configuração e o lançamento de aplicações com mínima configuração e integração rápida com vários componentes.',
      lista: [
        { listaItem: 'Configuração Automática: ', textoItem: 'Reduz a necessidade de configuração manual com auto-configuração.' },
        { listaItem: 'Microserviços: ', textoItem: 'Ideal para criar arquiteturas baseadas em microserviços.' },
        { listaItem: 'Segurança: ', textoItem: 'Integração fácil com Spring Security para proteção de aplicações.' },
        { listaItem: 'Desenvolvimento Rápido: ', textoItem: 'Ferramentas e suporte para desenvolvimento ágil e testes.' }
      ]
    },
    {
      titulo: 'Jakarta EE',
      texto: 'Anteriormente conhecido como Java EE) é uma especificação de plataforma de desenvolvimento de aplicações corporativas em Java. Oferece uma robusta API e um ambiente padronizado para criar aplicações empresariais escaláveis.',
      lista: [
        { listaItem: 'Padronização: ', textoItem: 'APIs e padrões estabelecidos que garantem portabilidade entre diferentes servidores de aplicação.' },
        { listaItem: 'Componentes: ', textoItem: 'Suporte para EJBs, JPA, JMS, e outros componentes corporativos.' },
        { listaItem: 'Escalabilidade: ', textoItem: 'Ideal para aplicações de grande escala e de missão crítica.' },
        { listaItem: 'Transações e Segurança: ', textoItem: 'Suporte para gerenciamento de transações e segurança robusta.' }
      ]
    },
    {
      titulo: 'Características do Java',
      texto: 'Java é uma linguagem fortemente tipada e orientada a objetos, amplamente usada em sistemas corporativos e de grande escala.',
      lista: [
        { listaItem: 'Fortemente Tipada: ', textoItem: 'APIs e padrões estabelecidos que garantem portabilidade entre diferentes servidores de aplicação.' },
        { listaItem: 'Orientada a Objetos: ', textoItem: 'Suporte para EJBs, JPA, JMS, e outros componentes corporativos.' },
        { listaItem: 'Desenvolvimento Corporativo: ', textoItem: 'Ideal para aplicações de grande escala e de missão crítica.' },
        { listaItem: 'Comunidade e Suporte: ', textoItem: 'Suporte para gerenciamento de transações e segurança robusta.' }
      ]
    },
    {
      titulo: 'Casos de Uso e Aplicações',
      texto: 'Java é uma linguagem fortemente tipada e orientada a objetos, amplamente usada em sistemas corporativos e de grande escala.',
      lista: [
        { listaItem: 'Sistemas Corporativos: ', textoItem: 'Java é ideal para aplicações empresariais complexas que exigem robustez e escalabilidade.' },
        { listaItem: 'Microserviços: ', textoItem: 'Com Spring Boot, você pode construir e gerenciar facilmente uma arquitetura de microserviços.' },
        { listaItem: 'Aplicações em Nuvem: ', textoItem: 'Suporte para integração com plataformas de nuvem e contêineres.' },
      ]
    },
    {
      titulo: 'Comece a Desenvolver com Java',
      texto: 'Documentação Oficial',
      link: 'https://docs.oracle.com/en/java/',
      lista: [
        { listaItem: 'Sistemas Corporativos: ', textoItem: 'Encontre tutoriais e guias para começar com Spring Boot e Jakarta EE.', link: 'https://spring.io/guides' },
        { listaItem: 'Microserviços: ', textoItem: 'Participe de fóruns e grupos de discussão para obter suporte e trocar conhecimentos.', link: 'https://microservices.io/' },       
      ]
    },
    {
      titulo: 'Conclusão',
      texto: 'Java, com seus frameworks Spring Boot e Jakarta EE, oferece uma base poderosa para o desenvolvimento de aplicações web robustas e escaláveis. Explore essas ferramentas para aproveitar ao máximo suas capacidades e criar soluções de alto desempenho para suas necessidades corporativas.',
    }
  ];
}
