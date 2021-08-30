
export const goToLogin = (history) => {
history.push('/login')
}

export const goToAddReceita = (history) => {
    history.push('/addreceita')
    }

    export const goToCadastro = (history) => {
        history.push('/cadastro')
        }

        export const goToDetalheReceita = (history, id) => {
            history.push(`/detalhe/${id}`)
            }

            export const goToListaDeReceitas = (history) => {
                history.push('/')
                }