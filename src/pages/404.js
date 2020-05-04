import React from 'react'
import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'
import { Body, Heading } from '../components/Typography.styles'
import { Container } from '../components/Container.styles'
import { Background } from '../components/Background.styles'

const ErrorPage = () => (
    <Layout>
      <SiteMetadata title="Error 404" description="The page doesn't exists" />

      <Background color="#fcf8f1" bgColor="#485d51">
        <Container>
          <Heading>
            Error 404
          </Heading>
          <Body>
            The page doesn't exists.
          </Body>
        </Container>
      </Background>

    </Layout>
);

export default ErrorPage
