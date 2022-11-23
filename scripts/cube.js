window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / 
    (document.body.offsetHeight - window.innerHeight));
}, false);

//para deixar só o mouseover selecionado na tela
const ccenter = document.querySelector('.ccenter');
const cleft = document.querySelector('.cleft');
const cright = document.querySelector('.cright');

const cubeContainer = document.querySelector('.cube-container')
const cube = document.querySelector('.cube')

ccenter.addEventListener('mouseover', () => {
    cright.classList.add('hidden')
    cleft.classList.add('hidden')
})

ccenter.addEventListener('mouseout', () => {
    cright.classList.remove('hidden')
    cleft.classList.remove('hidden')
})

cubeContainer.addEventListener('click', (event) => {
    console.log(event.target)
});

cleft.addEventListener('mouseover', () => {
    cright.classList.add('hidden')
    ccenter.classList.add('hidden')
})

cleft.addEventListener('mouseout', () => {
    cright.classList.remove('hidden')
    ccenter.classList.remove('hidden')
})

cright.addEventListener('mouseover', () => {
    cleft.classList.add('hidden')
    ccenter.classList.add('hidden')
})

cright.addEventListener('mouseout', () => {
    cleft.classList.remove('hidden')
    ccenter.classList.remove('hidden')
})