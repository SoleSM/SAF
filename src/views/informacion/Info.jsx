import React, { useState } from 'react'
import '../../styles/info.styles.css'
import imagen1 from '../../assets/imagen1.jpg'
import imagen2 from '../../assets/imagen2.jpg'
import imagen3 from '../../assets/imagen3.jpg'
import CardImagen from '../../components/Cards/CardImagen'
import { motion } from "framer-motion"


export default function Info() {

  return (
    <>

      <div className='containerPagina'>
        <div className="contenedorPrincipal">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
           >SOBERANIA ALIMENTARIA FORMOSA</motion.h1>

        <div className='contenedorPP'>
          <h3>¿Qué es?</h3>
          <p> En Formosa, el Gobierno provincial lanzó un nuevo programa que beneficia a la economía de las familias y a los pequeños
            productores conocidos como paipperos(forman parte del PAIPPA). </p>
          <p><strong>Soberanía Alimentaria Formosa</strong> es un programa que ofrece alimentos directamente del productor al consumidor, es decir,
            sin que existan intermediarios y agregados de valor entre la comercialización y las familias. Así, la gente puede acceder
            a una gran variedad de alimentos de producción local a precios referenciados. Desde frutas, verduras, hortalizas, carnes,
            productos lácteos y artesanales de los distintos consorcios adheridos al programa. </p>
          <p>
            Con esto se buscar impulsar a la producción y consumo local, mejorar la nutrición, la seguridad alimentaria y ayudar al bolsillo
            de las familias <strong>llevando a los stands productos de calidad garantizada.</strong>
          </p>
          <p>
            Mediante cronogramas el programa recorrerá todas las jurisdicciones de la provincia de Formosa para asegurarse de llegar a los
            lugares en donde se dan las mayores asimetrías en costos de producción y los precios que pagan los consumidores finales.
          </p>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <CardImagen
              imagen={imagen1} />
            <CardImagen
              imagen={imagen2} />
            <CardImagen
              imagen={imagen1} />
            <CardImagen
              imagen={imagen2} />

          </div>
        </div>
        
      </div>
    </div>

    </>
  )
}

