import {Game} from '../app/games/state/game.model'

const gamesList: Game[] = [{
    id : 1,
    title : 'Horizon Zero Dawn',
    description: 'Horizon Zero Dawn prend place dans un univers post-apocalyptique dominé par des créatures mécanisées, en particulier des animaux robotiques1. Le jeu se déroule donc dans un futur éloigné de 1 000 ans, où la civilisation humaine s\'est effondrée et où les créatures robotiques, devenues les plus puissantes en ce monde, dominent. La région visitée dans le jeu est indéterminée, mais plusieurs éléments du DLC The Frozen Wilds la situent près du parc de Yellowstone.',
    price: 19.90,
    cover: '/assets/Horizon-Zero-Dawn-PS4.jpg'
  },
  {
    id : 2,
    title : 'Detroit Become Human',
    description: 'En 2038, dans la ville de Détroit aux États-Unis, les androïdes partagent le quotidien des êtres humains en étant à leur service. Kara, une intelligence artificielle, décide malgré tout de vivre sa vie, de son propre chef, après avoir quitté l\'usine de conception. Connor, un autre humanoïde, joue de son côté le rôle de négociateur dans les forces spéciales de la police. Markus, un androïde activiste, aidé par North, Josh et Simon, tente quant à lui de libérer ses semblables du joug des humains par diverses actions d\'envergure.',
    price: 29.90,
    cover: '/assets/Detroit-Become-Human-PS4.jpg'
  }];

export default gamesList;
