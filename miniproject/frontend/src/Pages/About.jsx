import { Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from '../Component/Laoder';

const About = () => {
  const [flag,setFlag] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setFlag(false);
    }, 2000);
  },[])
  if (flag) {
    return <Loader/>
  }
  return (
    <div>
      <Heading>Barajiakur</Heading>
      <Text fontSize={30}>
        According to Census 2011 information the location code or village code of Barajiakur village is 321945. Barajiakur village is located in Santipur subdivision of Nadia district in West Bengal, India. It is situated 11.6km away from sub-district headquarter Phulia (tehsildar office) and 18.7km away from district headquarter Krishnanagar. As per 2009 stats, Arbandi-II is the gram panchayat of Barajiakur village.

        The total geographical area of village is 176.76 hectares. Barajiakur has a total population of 2,733 peoples, out of which male population is 1,387 while female population is 1,346. Literacy rate of barajiakur village is 62.90% out of which 69.07% males and 56.54% females are literate. There are about 634 houses in barajiakur village. Pincode of barajiakur village locality is 741404.

        Santipur is nearest town to barajiakur for all major economic activities, which is approximately 10km away.
      </Text>
      <Heading>Santipur</Heading>
    <Text fontSize={30}>
    {`
    Santipur in Nadia district, West Bengal, India. Santipur is a historical town located in the southern part of Nadia district. It is renowned for its rich cultural heritage, particularly in the field of handloom textiles.

     Santipur is famous for its traditional hand-woven fabrics, especially the delicate and exquisite cotton sarees known as "Santipuri sarees." These sarees are woven with intricate designs, vibrant colors, and fine craftsmanship, making them highly sought after by connoisseurs of handloom textiles.

         The town is also known for its ancient temples, including the Madan Mohan Temple and the Nabadwip Bakultala Temple. These temples attract devotees and tourists alike, especially during festivals like Durga Puja and Rash Mela.

          Santipur has played a significant role in the cultural and religious history of the region. It has been a hub for arts, crafts, and spiritual pursuits for centuries. The town's unique blend of traditional craftsmanship and religious fervor makes it a fascinating destination for those interested in exploring the cultural heritage of Bengal.
    `}
    </Text>
      </div>
  )
}

export default About
