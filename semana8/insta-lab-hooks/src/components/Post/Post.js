import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommentContainer } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false);

  const [numeroCurtidas, setnumeroCurtidas] = useState(1);

  const [comentando, setComentando] = useState(false);

  const [numeroComentarios, setNumeroComentarios] = useState(1);

  const [comentario, setComentario] = useState([]);
  

  const onClickCurtida = () => {
if (curtido) {
  setCurtido (!curtido)
  setnumeroCurtidas(numeroCurtidas - 1)
  this.setState({
    curtido: !this.state.curtido,
    numeroCurtidas: this.state.numeroCurtidas - 1
  })} else {
    setCurtido(!curtido)
    setnumeroCurtidas(numeroCurtidas + 1)
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.numeroCurtidas + 1
    })
  }
  };

 

  const onClickComentario = () => {
    if (comentando) {
      setComentando (!comentando)
      setNumeroComentarios(numeroComentarios - 1)
      this.setState({
        comentando: !this.state.comentando,
        numeroCurtidas: this.state.numeroComentarios - 1
      })} else {
        setComentando(!comentando)
        setNumeroComentarios(numeroComentarios + 1)
        this.setState({
          comentando: !this.state.comentando,
          numeroComentarios: this.state.numeroComentarios + 1
        })
      }
  };


  const enviarComentario = (comentario) => {







  };

  const caixaDeComentario = this.state.comentando ? ( 

    <SecaoComentario enviarComentario={this.enviarComentario}/>
    ) : (  this.state.comentarios.map(comentario => {
      return (
        <CommentContainer>
          <p>{comentario}</p>
        </CommentContainer>
      )
    })
  )







  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          // icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          // valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          // valorContador={numeroComentarios}
        />
      </PostFooter>
      {/* {caixaDeComentario} */}
    </PostContainer>
  )
}

export default Post