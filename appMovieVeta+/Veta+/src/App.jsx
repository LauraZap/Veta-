import React from 'react';
import CardViews from './Components/CardViews.jsx';
import SobreNosotros from './Components/SobreNosotros.jsx';
import ReviewsPeliculas from './Components/ReviewsPeliculas.jsx';
import Navbar from './Components/Navbar.jsx';
import './App.css'

const peliculas = [
  { titulo: "Venom3", sinopsis: "En Venom: El Último Baile, Tom Hardy vuelve como Venom, uno de los más grandes y complejos personajes de Marvel, para cerrar su trilogía cinematográfica. Eddie y Venom están a la fuga. Perseguidos por sus sendos mundos y cada vez más cercados, el dúo se ve abocado a tomar una decisión devastadora que hará que caiga el telón sobre el último baile de Venom y Eddie.", poster: "/public/Imagenes/Venom3.jpg" },
  { titulo: "Terrifier3", sinopsis: "Este año la Navidad llega antes.El payaso Art desata el caos entre los desprevenidos habitantes del condado de Miles mientras cogen el sueño plácidamente en Nochebuena.Tras sobrevivir a la masacre de Halloween perpetrada por el payaso Art, el peor asesino en serie desde Jack el Destripador, Sienna y su hermano se esfuerzan por reconstruir sus vidas destrozadas.", poster: "/public/Imagenes/Terrifier.png" },
  { titulo: "Halloween KILLS", sinopsis: "Laurie y su hija Karen descubren que Michael sigue vivo y ha regresado a completar la matanza. Sin embargo, esta vez todas las víctimas supervivientes que Michael ha dejado en Haddonfield se unen para acabar para siempre con el monstruo.", poster: "/public/Imagenes/halloween_kills.jpg" },
  { titulo: "DEADPOOL 3", sinopsis: "Lobezno se recupera de sus heridas cuando se cruza con el bocazas, Deadpool, que ha viajado en el tiempo para curarlo con la esperanza de hacerse amigos y formar un equipo para acabar con un enemigo común.", poster: "/public/Imagenes/DeadPool.png"},
  { titulo: "Los Tres Infiernos", sinopsis: "Tras sobrevivir milagrosamente a un tiroteo policial, el trío de asesinos del clan Firefly es condenado a prisión. Captain Spaulding fallece en la cárcel, pero Otis, el líder del grupo, recluta a su primo Winslow para huir y liberar también a su hermana Baby.", poster: "/public/Imagenes/three_from_hell.jpg"},
  { titulo: "Furiosa", sinopsis: "La joven Furiosa es arrebatada del Paraje Verde de las Muchas Madres por una horda de motociclistas. El señor de la guerra que dirige su grupo se enfrenta a otro tirano y, mientras tanto, Furiosa aprovecha la batalla para intentar volver a casa.", poster: "/public/Imagenes/Furiosa.jpg"},
  { titulo: "ALIEN ROMULUS", sinopsis: "Un grupo de colonos espaciales se enfrenta a la criatura más aterradora del universo en una nave espacial abandonada a la que han accedido para recuperar cámaras de criostasis, con las que piensan huir a un planeta lejano.", poster: "/public/Imagenes/Alien.jpg" },
  { titulo: "BAD BOYS 4", sinopsis: "Cuando su difunto capitán de policía es vinculado a los cárteles de la droga, los policías de Miami Mike Lowrey y Marcus Burnett se embarcan en una peligrosa misión para limpiar su nombre.", poster: "/public/Imagenes/Bad-Boy-4.jpg" },
  { titulo: "BEETLEJUCE 2", sinopsis: "Después de una tragedia, tres generaciones de la familia Deetz regresan a Winter River. Aún atormentada por Beetlejuice, la vida de Lydia da un vuelco cuando su rebelde hija adolescente, Astrid, descubre el misterioso modelo de la ciudad en el ático.", poster: "/public/Imagenes/beetlejuice.jpg" },
  { titulo: "Guason 2", sinopsis: "El comediante fracasado Arthur Fleck conoce al amor de su vida, Harley Quinn, mientras está en el Hospital Estatal de Arkham. Al ser liberados, la pareja se embarca en una aventura romántica.", poster: "/public/Imagenes/Guason2.jpg" },
  { titulo: "TIBURÓN", sinopsis: "Un pueblo costero del este de Estados Unidos se ve amenazado por un gigantesco tiburón blanco que ha atacado a varias personas. Este hecho pone en entredicho la seguridad de los bañadores durante la estación veraniega. Por ello, el alcalde de la localidad encomienda la caza del pez al jefe de la policía, un pescador y a un científico quienes se enfrentarán a un animal muy inteligente y violento.", poster: "/public/Imagenes/Jaws.jpg" },
  { titulo: "La Trampa", sinopsis: "Un padre y su hija adolescente van a un concierto de música pop y allí se dan cuenta de que algo terrible y siniestro va a ocurrir en el evento.", poster: "/public/Imagenes/La-Trampa.jpg" },
  { titulo: "Tiempos Violentos", sinopsis: "La vida de un boxeador, dos sicarios, la esposa de un gánster y dos bandidos se entrelaza en una historia de violencia y redención.", poster: "/public/Imagenes/PulpFiction.jpg" },
  { titulo: "Planeta de los simios ", sinopsis: "El planeta de los simios es una franquicia de medios de ciencia ficción estadounidense que consta de películas, libros, series de televisión, cómics y otros medios sobre un mundo en el que humanos y simios inteligentes se enfrentan por el control.", poster: "/public/Imagenes/Planeta-Simios.jpg" },
  { titulo: "Re-animator", sinopsis: "Herbert West viaja a Estados Unidos para continuar sus experimentos para alcanzar la fórmula que le permita reanimar a los muertos.", poster: "/public/Imagenes/Reanimator.jpg" },
  { titulo: "HELLBOY (2024)", sinopsis: "Hellboy, en esta historia que verá al legendario investigador paranormal varado en la zona rural de los Apalaches de la década de 1950 con un agente novato de la Agencia de Investigación y Defensa Paranormal. Allí descubren una pequeña comunidad atormentada por brujas, dirigida por un demonio local con una inquietante conexión con el pasado de Hellboy: el Hombre Torcido.", poster: "/public/Imagenes/Hellboy.jpg" },
  { titulo: "Regreso de los Muertos vivientes(1985)", sinopsis: "En un almacén de suministros médicos, dos empleados liberan accidentalmente un gas tóxico. Este gas reanima cadáveres, convirtiéndolos en zombis carnívoros.", poster: "/public/Imagenes/el-regreso-de-los-muertos-vivientes-1985.jpg" },
  { titulo: "Zombie(1978)", sinopsis: "La epidemia que hace resucitar a los muertos convertidos en seres ávidos de carne humana se ha extendido, llegando al punto en el que varias ciudades han quedado prácticamente desiertas. Los supervivientes deben refugiarse en zonas militares ya que los zombies no dudan en acabar con sus propios familiares.", poster: "/public/Imagenes/Zombie.jpg" }
];

const reviews = [
  { titulo: "Venom3", comentario: "Excelente película", calificacion: 9},
  { titulo: "Terrifier3", comentario: "Buena pero pudo ser mejor", calificacion: 10},
  { titulo: "Halloween KILLS", comentario: "Excelente película", calificacion: 8},
  { titulo: "DEADPOOL 3", comentario: "Excelente película", calificacion: 9},
  { titulo: "Los Tres Infiernos", comentario: "Buena pero pudo ser mejor", calificacion: 8},
  { titulo: "Furiosa", comentario: "Buena pero puede ser mejor", calificacion: 7},
  { titulo: "ALIEN ROMULUS", comentario: "Buena pero puede ser mejor", calificacion: 6},
  { titulo: "BAD BOYS 4", comentario: "Excelente película", calificacion: 9},
  { titulo: "BEETLEJUCE 2", comentario: "Excelente película", calificacion: 8},
  { titulo: "Guason 2", comentario: "Pesima ", calificacion: 2},
  { titulo: "TIBURÓN", comentario: "Excelente película ", calificacion: 8},
  { titulo: "La Trampa", comentario: "Excelente película ", calificacion: 9},
  { titulo: "Tiempos Violentos", comentario: "Excelente película ", calificacion: 10},
  { titulo: "Planeta de los simios", comentario: "Buena pero pudo ser mejor ", calificacion: 7},
  { titulo: "Re-animator", comentario: "Excelente película ", calificacion: 8},
  { titulo: "HELLBOY (2024)", comentario: "Buena pero pudo ser mejor ", calificacion: 7},
  { titulo: "Regreso de los Muertos vivientes(1985)", comentario: "Excelente película ", calificacion: 9},
  { titulo: "Zombie(1978)", comentario: "Excelente película ", calificacion: 9},
];

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <CardViews peliculas={peliculas} />
      <hr />
      <ReviewsPeliculas reviews={reviews} />
      <hr />
      <SobreNosotros />
    </div>
  );
};

export default App;

