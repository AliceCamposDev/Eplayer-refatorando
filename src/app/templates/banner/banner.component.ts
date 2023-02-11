import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  ngOnInit(): void {
    let slideAtual = 2
    let listaSlides = ["url(../../../../assets/img/sonaBanner.png)", "url(../../../../assets/img/csBanner.png)", "url(../../../../assets/img/valorantBanner.png)"]
    const bannerImg = (document.getElementById("bannerImg") as HTMLDivElement | null);
    const radio0 = (document.getElementById("radioBanner0") as HTMLInputElement | null);
    const radio1 = (document.getElementById("radioBanner1") as HTMLInputElement | null);
    const radio2 = (document.getElementById("radioBanner2") as HTMLInputElement | null);
    const bannerLeftArrow = (document.getElementById("bannerLeftArrow") as HTMLInputElement | null);
    const bannerRightArrow = (document.getElementById("bannerRightArrow") as HTMLInputElement | null);
    
    mudarSlideDireita();
    setInterval(mudarSlideDireita, 7000);
    /*//TODO: resetar timer se botão clicado*/

    bannerLeftArrow?.addEventListener("click",mudarSlideEsquerda);
    bannerRightArrow?.addEventListener("click",mudarSlideDireita);

  
    function mudarSlideEsquerda() {

      if (slideAtual == 2) {
        if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[1];
        //TODO: AHAHAHAHAHAHAHAHA NAO É NULL CARA ACABEI DE TESTAR ENCIMA AHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAH
        slideAtual = 1;
        if (radio0)
          radio0.checked = false;
        if (radio1)
          radio1.checked = true;
        if (radio2)
          radio2.checked = false;

      } else if (slideAtual == 1) {
        if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[0];

        slideAtual = 0;

        if (radio0)
          radio0.checked = true;
        if (radio1)
          radio1.checked = false;
        if (radio2)
          radio2.checked = false;

      } else {
        if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[2];
        slideAtual = 2;

        if (radio0)
          radio0.checked = false;
        if (radio1)
          radio1.checked = false;
        if (radio2)
          radio2.checked = true;

      }

    }

    function mudarSlideDireita() {

      if (slideAtual == 2) {
        if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[0];
        slideAtual = 0;
        if (radio0)
          radio0.checked = true;
        if (radio1)
          radio1.checked = false;
        if (radio2)
          radio2.checked = false;

      } else if (slideAtual == 1) {
        if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[2];

        slideAtual = 2;

        if (radio0)
          radio0.checked = false;
        if (radio1)
          radio1.checked = false;
        if (radio2)
          radio2.checked = true;

      } else {
        if (bannerImg)
          bannerImg.style.backgroundImage = listaSlides[1];
        slideAtual = 1;

        if (radio0)
          radio0.checked = false;
        if (radio1)
          radio1.checked = true;
        if (radio2)
          radio2.checked = false;

      }

    }
    console.log("ㅤ██ㅤ  ██\n ██████████ㅤㅤㅤㅤㅤㅤㅤㅤpanㅤㅤ:)\n██ㅤ▌██ㅤ▌██\n██ㅤ ██ㅤ ██\nㅤ████████");
  }
}
