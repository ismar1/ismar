import React from 'react'

// Components
import Topic from './topic'

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

    <Topic title="Skills">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae voluptatem ullam dolore. Consequatur delectus dolores id ab, maxime fuga, incidunt non quasi, sint ratione vitae reiciendis amet doloremque perspiciatis provident?
    </Topic>
  </div>
)

export default container
