'use client'

import { Container, Heading, Input, Radio } from "@escaletech/delta";
import { motion, useScroll, useSpring } from "framer-motion";

import FormSection from '../form-section'

export default function FormView() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Container css={{ 'padding': '60px' }} key={undefined} >

      <motion.div className="progress-bar" style={{ scaleX }} />

      <FormSection>
        <Heading lineHeight='md'>
          O que você quer simular?
        </Heading>

        <Radio id='carro' label='Carro' name='vehicle' />
        <Radio id='moto' label='Moto' name='vehicle' />
      </FormSection>

      <FormSection>
        <Heading lineHeight='md'>
          Onde você planeja comprar seu carro?
        </Heading>

        <Radio id='loja' label='Conssecionária' name='buy' />
        <Radio id='cpf' label='Pessoa Física' name='buy' />
        <Radio id='none' label='Não sei' name='buy' />
      </FormSection>

      <FormSection>
        <Heading lineHeight='md'>
          Onde você planeja comprar seu carro?
        </Heading>

        <Radio id='loja' label='Conssecionária' name='buy' />
        <Radio id='cpf' label='Pessoa Física' name='buy' />
        <Radio id='none' label='Não sei' name='buy' />
      </FormSection>
      <FormSection>
        <Heading lineHeight='md'>
          Onde você planeja comprar seu carro?
        </Heading>

        <Radio id='loja' label='Conssecionária' name='buy' />
        <Radio id='cpf' label='Pessoa Física' name='buy' />
        <Radio id='none' label='Não sei' name='buy' />
      </FormSection>
      <FormSection>
        <Heading lineHeight='md'>
          Onde você planeja comprar seu carro?
        </Heading>

        <Radio id='loja' label='Conssecionária' name='buy' />
        <Radio id='cpf' label='Pessoa Física' name='buy' />
        <Radio id='none' label='Não sei' name='buy' />
      </FormSection>
      <FormSection>
        <Heading lineHeight='md'>
          Onde você planeja comprar seu carro?
        </Heading>

        <Radio id='loja' label='Conssecionária' name='buy' />
        <Radio id='cpf' label='Pessoa Física' name='buy' />
        <Radio id='none' label='Não sei' name='buy' />
      </FormSection>
      <FormSection>
        <Heading lineHeight='md'>
          Onde você planeja comprar seu carro?
        </Heading>

        <Radio id='loja' label='Conssecionária' name='buy' />
        <Radio id='cpf' label='Pessoa Física' name='buy' />
        <Radio id='none' label='Não sei' name='buy' />
      </FormSection>

      <FormSection>
        <Heading lineHeight='md'>
          Onde você planeja comprar seu carro?
        </Heading>

        <Radio id='loja' label='Conssecionária' name='buy' />
        <Radio id='cpf' label='Pessoa Física' name='buy' />
        <Radio id='none' label='Não sei' name='buy' />
      </FormSection>

      <FormSection>
        <Heading lineHeight='md'>
          Qual é o CEP do local em que será feito o licenciamento do veículo?
        </Heading>
        <Input type={'number'} placeholder='Digite seu CEP' />
      </FormSection>

    </Container>
  )
}