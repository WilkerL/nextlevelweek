import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar todos o botões que existem com a class check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button =>{
    //adicionar a escuta
    button.addEventListener("click", handleClick)

    })


//Abre a modal quando o botão delete for clicado
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button =>{
    button.addEventListener("click", (event) => handleClick (event, false))

    })

function handleClick(event, check = true){

    event.preventDefault() // função pra não redirecionar a tag <a> </a> pro endereço
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id
    const questionId = event.target.dataset.id



   


    const form = document.querySelector(.modal form)
    form.setAttribute("action" `route.post('/${roomId}/;room/${questionId}/${slug}`)
    
    modalTitle.innerHTML = `${text} esta pergunta?`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`

    check? modalButton.classList.remove("red") :modalButton.classList.add("red")


    modal.open()
}
