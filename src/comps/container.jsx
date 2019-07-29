import React from 'react'

// Components
import Topic from './topic'
import Skill from './skill'

const linkPerfil = 'https://scontent.fssa12-1.fna.fbcdn.net/v/t1.0-9/53365820_1921698041293135_8976048071691468800_n.jpg?_nc_cat=104&_nc_oc=AQnw8Yl4oAtRLXAzG4pt_O1Rbu4MSiLsLeYqiQqZ39BUTGNjyhn2srSrd2xgbhQ72dA&_nc_ht=scontent.fssa12-1.fna&oh=753f6058e66283d1a9f72c407eab7aaa&oe=5DA254DD'

const container = props => (
  <div className="container text-center text-dark">
    <Topic title="About me">
      <div className="row">
        <div className="col-md-4">
          <img src={linkPerfil} className="rounded-circle shadow border-perfil" width="200" height="200" />
        </div>
        <div className="col-md-8">
          My name is Ismar Santos, i'm 17 years old, i live in Ubaitaba, Bahia, Brazil.
          Still studying high school, but i learn web programming. My hobbies are drawing
          and, of course, programming. Linux user, i use Ubuntu Budgie as main OS and Windows
          for games, because i like the freedom and functionality that Linux provides.
        </div>
      </div>
    </Topic>

    <Topic title="Skills" inverse>
      <div className="row mb-4">
        <Skill name="ReactJS" img="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
        <Skill name="Bootstrap" img="http://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png" />
        <Skill name="Git" img="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" />
      </div>

      <div className="row">
        <Skill name="JavaScript" img="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
        <Skill name="Github" img="https://image.flaticon.com/icons/svg/25/25231.svg" />
        <Skill name="Linux" img="http://pngimg.com/uploads/linux/linux_PNG13.png" />
      </div>
    </Topic>

    <Topic title="E-mail">
      <div className="text-center">
        If you prefer, contact me via email:
        <p className="font-weight-bold">ismar1875@gmail.com</p>
      </div>
    </Topic>
  </div>
)

export default container
