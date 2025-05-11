import React from 'react';
import './style.css'
import ActionButton from '../buttons/ActionButton';
import ButtonFormGroup from '../groups/ButtonFormGroup';
import useBrowseById from '../../../utils/actions/browse/useBrowseById';

export default function HeroSection({ header, id, text, imagePath, buttonLabel, buttonLink }) {
  const browse = useBrowseById();

  return (
    <section className='hero-section' id={id}>
      <div className='hero-section-container'>
        <div className='hero-section-texts'>
          <h1><b>Proteja</b> o que é mais importante para você</h1>
          <p>{text}</p>
        </div>
        <ButtonFormGroup direction="row">
          <ActionButton action={() => browse('contato')} label="Faça sua cotação" />
        </ButtonFormGroup>
      </div>
      <img src={imagePath} alt="" srcset="" />
    </section>
  )
}
