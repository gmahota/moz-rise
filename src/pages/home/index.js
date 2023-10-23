// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Bem Vindos 🚀'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}> À nossa plataforma de crowdfunding dedicada a impulsionar sonhos e promover a prosperidade na comunidade. Aqui, unimos investidores apaixonados a projetos inovadores, desde atletas promissores até iniciativas de cirurgias que podem transformar vidas.</Typography>
            <Typography sx={{ mb: 2 }}>Seja parte dessa jornada conosco, onde cada contribuição conta. Juntos, podemos criar um impacto positivo duradouro em áreas que amamos e valorizamos.</Typography>
            <Typography sx={{ mb: 2 }}>Explore projetos, conecte-se com empreendedores inspiradores e faça parte desta comunidade que acredita no poder da colaboração.</Typography>
            <Typography sx={{ mb: 2 }}>Junte-se a nós e seja a mudança que deseja ver no mundo.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Investindo no Futuro: Projetos Inovadores que Transformam o Mundo 🔒'></CardHeader>
          <CardContent>
            <Typography>
              <p>
                Onde o potencial encontra o apoio necessário para se tornar realidade. Acreditamos no poder da inovação para moldar um amanhã melhor e mais promissor.
              </p>
            </Typography>

            <Typography>
              <h2>Por que Investir em Projetos Inovadores?</h2>
            </Typography>

            <Typography>
              <p>
                A inovação é a força motriz por trás de avanços significativos em todas as esferas da vida. Ao investir em projetos inovadores, você não está apenas apoiando empreendedores visionários, mas também está impulsionando o progresso e a evolução da sociedade como um todo.
              </p>
            </Typography>

            <Typography>
              <h2>O Que Nos Diferencia:</h2>
            </Typography>

            <Typography>
              <ul>
                <li>
                  <strong>Seleção Rigorosa:</strong> Cada projeto em nossa plataforma passa por uma avaliação minuciosa para garantir que atenda aos mais altos padrões de inovação e viabilidade.
                </li>
                <li>
                  <strong>Acompanhamento Contínuo:</strong> Oferecemos suporte e orientação aos empreendedores ao longo de todo o processo, ajudando a maximizar o potencial de cada iniciativa.
                </li>
                <li>
                  <strong>Transparência Total:</strong> Mantemos uma comunicação aberta e transparente, fornecendo atualizações regulares sobre o progresso dos projetos.
                </li>
              </ul>
            </Typography>

            <Typography>
              <h2>O Impacto do seu Investimento:</h2>
            </Typography>

            <Typography>
              <p>
                Ao investir em projetos inovadores, você está desempenhando um papel fundamental na criação de soluções para desafios globais e na construção de um futuro mais vibrante e sustentável.
              </p>
            </Typography>

            <Typography>
              <h2>Prontos para Fazer a Diferença?</h2>
            </Typography>

            <Typography>
              <p>
                Explore os projetos inovadores em nossa plataforma e descubra como você pode ser parte da próxima grande revolução.
              </p>
            </Typography>

            <Typography>
              <p>
                Junte-se a nós, invista no futuro e faça parte da mudança que o mundo precisa.
              </p>
            </Typography>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
