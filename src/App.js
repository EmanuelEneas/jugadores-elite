
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
      <h1>Jugadores Goleadores de este año</h1>
      <Testimonio
      nombre="Kylian Mbappé Lottin"
      imagen="imagen1"
      pais="francia"
      cargo="jugador de futbol"
      equipo="PSG"
      testimonio="Ha sido el máximo goleador de la Ligue 1 durante cinco temporadas consecutivas. Es el único jugador en la historia de la liga francesa que ha logrado ser el máximo anotador y máximo pasador en una misma temporada (2022) y es el futbolista más joven (24 años) en superar la marca de 150 goles en la primera división de Francia (superando a Just Fontaine).

      Es el jugador que más veces ha sido reconocido con el Premio al Mejor Jugador de la Ligue 1 (2019, 2021, 2022 y 2023). Fue incluido en el XI Mundial de FIFA/FIFPro en 2018, 2019 y 2022, año en el que fue elegido segundo mejor jugador del mundo en los premios The Best FIFA."/>
     
      <Testimonio
      nombre="lionel Messi"
      imagen="messi"
      pais="argentina"
      cargo="jugador de futbol"
      equipo="PSG"
      testimonio="un futbolista argentino que juega como delantero. Jugador histórico del Fútbol Club Barcelona, al que estuvo ligado veinte años, desde 2021 integra el plantel del Paris Saint-Germain de la Ligue 1 de Francia. Es también internacional con la selección de Argentina, equipo del que es capitán.

      Considerado con frecuencia el mejor jugador del mundo y uno de los mejores de todos los tiempos,9​ es el único futbolista en la historia que ha ganado, entre otras distinciones, siete veces el Balón de Oro, siete premios de la FIFA al mejor jugador del mundo, seis Botas de Oro y dos Balones de Oro de la Copa Mundial de Fútbol. En 2020, se convirtió en el primer futbolista y el primer argentino en recibir un premio Laureus y fue incluido en el Dream Team del Balón de Oro."/>

      <Testimonio
       nombre="Erling Braut Haaland "
       imagen="azul"
       pais=" Noruega  "
       cargo="jugador de futbol "
       equipo="Manchester city "
       testimonio="Prolífico goleador, es reconocido por su ritmo, fuerza y atléticos movimientos con y sin balón, y es frecuentemente considerado como uno de los mejores delanteros de la actualidad,8​ así como uno de los mejores futbolistas jóvenes del mundo.9​10​11​ Fue galardonado con el Golden Boy de 2020,12​ premio al mejor futbolista del fútbol europeo menor de 21 años, y considerado como el Balón de Oro a los jugadores jóvenes del panorama internacional.13​14​

       Durante la Copa Mundial Sub-20 de la FIFA 2019, ganó la Bota de Oro donde marcó nueve goles en un partido,15​ otro récord, debutó con la selección absoluta de Noruega en septiembre de 2019.16​ "/>


      </div>
   
    </div>
  );
}

export default App;
