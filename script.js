const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = res.json()
    const paragrafo = document.creatElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem ${dado.total_pessoas_mundo} de pessoas e que aproximadamente ${total_pessoas_conectadas} estão conctadas em alguma rede social e passam em média ${dados.tempo_medio} horas conectadas.`
    console.log(paragrafo)

    const container = document.getElementById('graficos-container')
    container
    }

vizualizarInformacoesGlobais()