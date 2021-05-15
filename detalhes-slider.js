//#region Botões de STATUS E DETALHES
const servicosBTN = document.querySelector('.ServiçosBTN')
const competenciasBTN = document.querySelector('.CompetênciasBTN')
const projetosBTN = document.querySelector('.ProjetosBTN')
const sliderServicos = document.querySelector('.ServiçosDiv')
const sliderCompetencias = document.querySelector('.CompetênciasDiv')
const sliderProjetos = document.querySelector('.ProjetosDiv')
const sliderDetalhes = document.querySelector('.SCP-Slider')

servicosBTN.addEventListener('click', function() {
    sliderServicos.style.left = "50%"
    sliderCompetencias.style.left = "130%"
    sliderProjetos.style.left = "160%"
})

competenciasBTN.addEventListener('click', function() {
    sliderServicos.style.left = "-60%"
    sliderCompetencias.style.left = "50%"
    sliderProjetos.style.left = "160%"
})

projetosBTN.addEventListener('click', function() {
    sliderServicos.style.left = "-60%"
    sliderCompetencias.style.left = "-30%"
    sliderProjetos.style.left = "50%"
})