// import React, { useState, useEffect } from 'react';

import TechnologiesList from "../technologiesList.jsx/technologiesList";
import "./mainPage.css";

const MainPage = () => {
  // const [technologies, setTechnologies] = useState();
  // const [photos, SetPhotos] = useState();
  // useEffect(() => api.users.fetchAllTechs().then(data => setTechnologies(data)), []);
  // useEffect(() => api.users.fetchAllPhotos().then(data => SetPhotos(data)), []);

  const photos = [
    "https://avatars.mds.yandex.net/i?id=d0d82799585b92e1bade4e5667fd1dc5-5311641-images-thumbs&n=13&exp=1",
    "https://yandex-images.clstorage.net/s5wcP2154/55e387-Qcv/pocniCx1j4MaXGT0gj4MhcI2GHb4pSIEyCUPucHebHBDU5-9jkht5X8I6f2tZo8btdZWfZrKh63ZHKD6zeQbfObRZMQ3a8CJG1xn-YslBYLJPhd-_LElBpByFOHPmjQkWUGSueUgHMIJbpHN1xOkZ_iCCi3NisrtlXLJ94uGSzmbtDuDC3bwhg1IJ86IJiOL_lMMafniLXrjO1ba4L5ELEtL1fLDHRz0BFWVy-s4t2vToiIh5bah9rdFxaaqpnAIm7cKjzBQyLowRwbujAU5gtxQM3fiwC5w5CR36Pi8SgZTVcrc8AU5zxlQiszaLIxE4JEuGNqVjNmIf_KOqKRKOrKNGKUpcNKIO3g-1JAJKrTZUBVg_t8kb9QMcc7Gq0IZY37Z4c09NtEaWavb2SG4U-mzJyXvkJ7Vt0HDuKGTSwu1px-bLHTVrxVDLv6sODKD6HASUPvnLE7SNH3o7IN4AG1Y69rvFxDaPlyX6tgshF3Zlyg60oam3It8-JK9nGsnpK4rgg9I9IgmVQT5lSoGttlKD0v73z5KwC9qydiSWhhYZcPJ2ToVyCJXndbdP5pz46oION6dq_CYfcGknZhKHKilI7oGRfWaGl4n6oETD4vUXTJg7swPTOglX_jKn2wUa0H_wtIrPuwDS5vuzw65TuiwNiDHnJz-umz7uKqTZgm3jwqHO23AvStMJe-BASC12FQ3eN3iGmHIAGPsyKZiC2lY--z9MhPBJHip5csEpG3IjC8O2p-M3rh7w4-Ts3g4hrw0vjdE8K8GeTLZsR89iMxKHFLD8AR30ypq2PCFTgJ0d-Le4zoPyyx4jcnuIrdB0rANLv29numDefeloqREAp-2NIIQbs-7D0UFw6knMJXIag5R4OYlafcpd_j4nlY1VEna3cksPs8IQrTV2SG4Y-SGNzHDsI_3gmLnuZKveSW_khGKM3_ymQh2EsCQATKV_Xc1RvvcPG7yD0XTyZs",
    "https://img4.goodfon.ru/wallpaper/nbig/4/3c/kiara-biankeri-kompiuternaia-grafika-zeleno-korichnevoe.jpg",
  ];

  const technologies = ["html", "css", "js", "git", "webpack", "react"];

  const handleChangeSelectImage = e => {
    const $images = document.querySelectorAll(".peoples__item");
    for (const $image of $images) {
      $image.classList.remove("peoples__item--active");
    }
    e.currentTarget.classList.add("peoples__item--active");
  };

  return (
    <>
      <h1>Наша команда</h1>
      <ul className="peoples">
        {photos.map(photo => (
          <li onClick={handleChangeSelectImage} className="peoples__item" key={photo}>
            <img className="peoples__image" src={photo} alt="" />
          </li>
        ))}
      </ul>
      <h2>Наши технологии</h2>
      {technologies && <TechnologiesList technologies={technologies} />}
    </>
  );
};

export default MainPage;
