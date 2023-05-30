import React from 'react'
import { Heading, Text } from '@chakra-ui/react'
import styled from '@emotion/styled';
import barajiakur from '../icons/barajiakur.png'
import barajiakueSchool1 from '../icons/barajiakurschool2.jpeg'
import barajiakueSchool2 from '../icons/barajiakurschool1.jpeg'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
const Home = () => {
  return (
    <DIV>

      <div className='headings'>
        
        <div className='firstTwoImage'>
          <div className='item1'>
            <img src={barajiakueSchool1} alt="" />
          </div>

          <div className='item2'>
            <img src={barajiakueSchool2} alt="" />
          </div>
          <div className='item3'>
            <img src={barajiakueSchool1} alt="" />
          </div>
          <div className='item4'>
            <img src={barajiakueSchool2} alt="" />
          </div>
        </div>
      </div>
      <Text fontSize={20}>
      According to Census 2011 information the location code or village code of Barajiakur village is 321945. Barajiakur village is located in Santipur subdivision of Nadia district in West Bengal, India.
      The total geographical area of village is 176.76 hectares. Barajiakur has a total population of 2,733 peoples, out of which male population is 1,387 while female population is 1,346. Literacy rate of barajiakur village is 62.90% out of which 69.07% males and 56.54% females are literate. There are about 634 houses in barajiakur village. Pincode of barajiakur village locality is 741404.

      Santipur is nearest town to barajiakur for all major economic activities, which is approximately 10km away.
    </Text>
      <div className='links'>

        <a href="https://www.google.com/maps/dir//Barajiakur+West+Bengal+741404/@23.288615,88.4718747,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f8e0ac37eb9beb:0x865e00f944cbc51e!2m2!1d88.4718747!2d23.288615" target='_blank' rel='noreferrer'>Click Here to Vist Google Map
          <img src={barajiakur} alt="barajiakur" style={{
            width: "600px",
            height: "200px",
            border: "1px solid black",
            borderRadius: "5px",
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            margin: 'auto'

          }} />
        </a>
        <br />
        <br />
        <Heading>Population of Barajiakur</Heading>
        <br />
        <br />
        <TableContainer style={{
          fontSize: 'large'
        }}>
          <Table variant='striped' colorScheme='teal'>
            <Thead>
              <Tr>
                <Th>Particulars</Th>
                <Th>Total</Th>
                <Th>Male</Th>
                <Th>Female</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Total Population</Td>
                <Td>2,733</Td>
                <Td isNumeric>1,387</Td>
                <Td isNumeric>1,346</Td>

              </Tr>
              <Tr>
                <Td>Literate Population</Td>
                <Td>1,719</Td>
                <Td isNumeric>958</Td>
                <Td isNumeric>761</Td>
              </Tr>
              <Tr>
                <Td>Illiterate Population</Td>
                <Td>1,014</Td>
                <Td isNumeric>429</Td>
                <Td isNumeric>585</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <br />
        <br />
        <Heading>Connectivity of Barajiakur</Heading>
        <br />
        <br />
        <TableContainer style={{
          fontSize: 'large'
        }}>
          <Table variant='striped' colorScheme='teal'>
            <Thead>
              <Tr>
                <Th>Type</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Public Bus Service	</Td>
                <Td>Available within 5 - 10 km distance</Td>
              </Tr>
              <Tr>
                <Td>Private Bus Service	</Td>
                <Td>Available within 5 - 10 km distance</Td>

              </Tr>
              <Tr>
                <Td>Railway Station	</Td>
                <Td>Available within 5 - 10 km distance</Td>
              </Tr>
            </Tbody>

          </Table>
        </TableContainer>
      </div>
    </DIV>
  )
}

export default Home

const DIV = styled.div`
display: flex;
flex-direction: column;
width: 80%;
gap: 30px;
margin: auto;
/* border: 1px solid red; */
padding: 10px;
.headings{
  width: 50%;
  margin: auto;
}
.firstTwoImage{
    width: 100%;
    display: grid;
    grid-template-columns: auto auto auto auto;
   gap: 10px;
   margin-top: 15px;
}
.links{
  width: 40%;
  margin: auto;
}

`