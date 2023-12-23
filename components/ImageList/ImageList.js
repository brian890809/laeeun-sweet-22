'use client';
import Image from 'next/image';
import React from 'react';

import { Parallax } from '@/components';

import * as imgSrc from './constants';

const ImageList = () => {
  return (
    <>
      <Parallax speed={-7} className="self-start">
        <Image
          src={imgSrc.photo1}
          alt="Image"
          width={140}
          height={150}
          priority
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-5} className="self-end overflow-hidden">
        <Image
          src={imgSrc.photo2}
          alt="Image"
          width={130}
          height={150}
          priority
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-10} className="self-center">
        <Image
          src={imgSrc.photo3}
          alt="Image"
          width={170}
          height={150}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-8} className="self-start">
        <Image
          src={imgSrc.photo4}
          alt="Image"
          width={180}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-14} className="self-end overflow-hidden">
        <Image
          src={imgSrc.photo5}
          alt="Image"
          width={140}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-12} className="self-start">
        <Image
          src={imgSrc.photo6}
          alt="Image"
          width={200}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-14} className="self-center">
        <Image
          src={imgSrc.photo7}
          alt="Image"
          width={130}
          height={600}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-12} className="self-end">
        <Image
          src={imgSrc.photo8}
          alt="Image"
          width={120}
          height={200}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-12} className="self-start">
        <Image
          src={imgSrc.photo9}
          alt="Image"
          width={175}
          height={200}
          sizes="50vw"
        />
      </Parallax>
      <Parallax speed={-10} className="self-center">
        <Image
          src={imgSrc.photo10}
          alt="Image"
          width={150}
          height={150}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-8} className="self-start">
        <Image
          src={imgSrc.photo11}
          alt="Image"
          width={180}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-9} className="self-end">
        <Image
          src={imgSrc.photo12}
          alt="Image"
          width={140}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-6} className="self-start overflow-hidden">
        <Image
          src={imgSrc.photo13}
          alt="Image"
          width={200}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-10} className="self-end">
        <Image
          src={imgSrc.photo14}
          alt="Image"
          width={120}
          height={600}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-6} className="self-start overflow-hidden">
        <Image
          src={imgSrc.photo15}
          alt="Image"
          width={200}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={4} className="self-center">
        <Image
          src={imgSrc.photo16}
          alt="Image"
          width={130}
          height={600}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-12} className="self-start">
        <Image
          src={imgSrc.photo17}
          alt="Image"
          width={175}
          height={200}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-10} className="self-end overflow-hidden">
        <Image
          src={imgSrc.photo18}
          alt="Image"
          width={170}
          height={150}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-2} className="self-start">
        <Image
          src={imgSrc.photo19}
          alt="Image"
          width={200}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-6} className="self-center overflow-hidden">
        <Image
          src={imgSrc.photo20}
          alt="Image"
          width={180}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-4} className="self-end">
        <Image
          src={imgSrc.photo21}
          alt="Image"
          width={190}
          height={400}
          sizes="50vw"
        />
      </Parallax>
    </>
  );
};

export default ImageList;
