import React from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Demo Components Imports
import CardUser from 'src/views/ui/cards/basic/CardUser'
import CardImgTop from 'src/views/ui/cards/basic/CardImgTop'
import CardMobile from 'src/views/ui/cards/basic/CardMobile'
import CardSupport from 'src/views/ui/cards/basic/CardSupport'
import CardTwitter from 'src/views/ui/cards/basic/CardTwitter'
import CardFacebook from 'src/views/ui/cards/basic/CardFacebook'
import CardLinkedIn from 'src/views/ui/cards/basic/CardLinkedIn'
import CardAppleWatch from 'src/views/ui/cards/basic/CardAppleWatch'
import CardMembership from 'src/views/ui/cards/basic/CardMembership'
import CardInfluencer from 'src/views/ui/cards/basic/CardInfluencer'
import CardNavigation from 'src/views/ui/cards/basic/CardNavigation'
import CardWithCollapse from 'src/views/ui/cards/basic/CardWithCollapse'
import CardVerticalRatings from 'src/views/ui/cards/basic/CardVerticalRatings'
import CardNavigationCenter from 'src/views/ui/cards/basic/CardNavigationCenter'
import CardHorizontalRatings from 'src/views/ui/cards/basic/CardHorizontalRatings'

const CardBasic = () => {

  const projectSocial = [
    {
      "name": "Andre Bastos",
      "city": "Maputo",
      "brief_summary": "Este Funding visa a participação no mundial de xadrez para  atleta talentoso representar Moçambique em uma competição internacional importante. O atleta qualificado tem o potencial de trazer honra e reconhecimento para o país.",
      "total_funding_needed": 8000,
      "total_funding_raised": 4000
    },
    {
      "name": "Participação em Conferência Global de Saúde",
      "city": "Beira",
      "brief_summary": "Esta iniciativa visa financiar a participação de um profissional de saúde em uma conferência de saúde de renome mundial. O objetivo é trazer conhecimentos e melhores práticas de volta para a comunidade, beneficiando a qualidade dos cuidados de saúde local.",
      "total_funding_needed": 10000,
      "total_funding_raised": 6000
    },
    {
      "name": "Representação Cultural em Festival Internacional",
      "city": "Nampula",
      "brief_summary": "Este projeto tem como finalidade apoiar a participação de um grupo cultural moçambicano em um festival internacional. A presença no evento proporcionará uma oportunidade única de compartilhar a rica herança cultural de Moçambique com o mundo.",
      "total_funding_needed": 12000,
      "total_funding_raised": 8000
    }
  ]

  const projects = [
    {
      "title": "Sustainable Agriculture Project in Gaza",
      "summary": "Estamos buscando financiamento para implementar um projeto de agricultura sustentável em Gaza. Com técnicas inovadoras e treinamento localizado, visamos aumentar a produção agrícola e melhorar a segurança alimentar na região. O investimento será crucial para adquirir equipamentos modernos e promover práticas agrícolas responsáveis.",
      "total_project": 50000,
      "total_acquired": 25000,
      "people_involved": 30,
      "category": "Agricultura",
      "duration_months": 12
    },
    {
      "title": "Online Education Platform for Youth in Maputo",
      "summary": "Nosso projeto visa criar uma plataforma de educação online acessível para jovens em Maputo. Com a expansão do acesso à educação de qualidade, estamos comprometidos em capacitar a próxima geração com habilidades relevantes para o mercado de trabalho. Os fundos serão direcionados para o desenvolvimento da plataforma e programas de capacitação.",
      "total_project": 35000,
      "total_acquired": 15000,
      "people_involved": 20,
      "category": "Educação",
      "duration_months": 10
    },
    {
      "title": "Solar Energy Initiative in Nampula",
      "summary": "Estamos buscando investimento para lançar uma iniciativa de energia solar em Nampula. Com a crescente demanda por energia limpa, planejamos instalar sistemas solares em áreas remotas, proporcionando eletricidade acessível e sustentável para comunidades carentes. Os fundos serão utilizados para aquisição e instalação dos painéis solares.",
      "total_project": 70000,
      "total_acquired": 30000,
      "people_involved": 40,
      "category": "Energia",
      "duration_months": 18
    },
    {
      "title": "Maternal Health Support Program in Sofala",
      "summary": "Nosso projeto tem como objetivo implementar um programa de apoio à saúde materna em Sofala. Com enfoque na redução da mortalidade materna e neonatal, planejamos oferecer cuidados pré-natais de qualidade e promover a educação sobre saúde reprodutiva. Os fundos serão alocados para treinamento de profissionais de saúde e infraestrutura adequada.",
      "total_project": 45000,
      "total_acquired": 20000,
      "people_involved": 25,
      "category": "Saúde",
      "duration_months": 14
    },
    {
      "title": "Agricultural Technology Development in Inhambane",
      "summary": "Buscamos financiamento para o desenvolvimento de tecnologia agrícola em Inhambane. Com a introdução de práticas agrícolas inovadoras e o uso de tecnologia de ponta, pretendemos aumentar a produtividade e a eficiência dos agricultores locais. Os fundos serão utilizados para pesquisa, desenvolvimento e implementação das soluções tecnológicas.",
      "total_project": 60000,
      "total_acquired": 28000,
      "people_involved": 35,
      "category": "Agricultura",
      "duration_months": 16
    }
  ]
  

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Funding Initiatives</Typography>
      </Grid>
      
      
      {projectSocial.map((project,index) =>( 
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CardVerticalRatings 
                title={project.name} 
                summary={project.brief_summary} 
                total={project.total_funding_needed}/>
            </Grid>
           
      ))
      }
      <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(12)} !important` }}>
        <Typography variant='h5'>Bussiness List</Typography>
      </Grid>

      {projects.map((project,index) =>(
        <div key={index}>
        <Grid  item xs={12} md={8}>
            <CardMembership  title={project.title} summary={project.summary} 
              category={project.category}
              duration_months={project.duration_months}
              total={project.total_project} 
              members={project.people_involved}/>
          </Grid>
        </div>
        ))
      }
      

      <Grid item xs={12} sx={{ pt: theme => `${theme.spacing(12)} !important` }}>
        <Typography variant='h5'>Testimonial</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardTwitter />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardFacebook />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardLinkedIn />
      </Grid>
    </Grid>
  )
}

export default CardBasic