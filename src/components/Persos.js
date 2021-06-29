import React from "react";

class Persos extends  React.Component{

     
     render(){


          // console.log(this.props.statut.perso1.prenom)
          // console.log(this.props.statut.perso1.nom)
          // console.log(this.props.statut.perso1.age)


          return(
               <div>

                    <p>{this.props.statut.perso1.prenom} {this.props.statut.perso1.nom} a {this.props.statut.perso1.age} ans</p>
                    

               </div>
          )
     }

}

export default Persos