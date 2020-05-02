import React, { useState } from 'react'
import Layout from '../layouts/Layout';
import SiteMetadata from '../components/SiteMetadata';
import { Heading, Label } from '../components/Typography';
import { Form, FormCol, Input } from '../components/Form';
import { Background } from '../components/Background';
import { Container } from '../components/Container';

const IndexPage = () => {
  const [inputs, setInputs] = useState({
    textColor: '#a1bbc4',
    bgColor: '#1b4645'
  });

  const handleChange = (e) => {
    setInputs({value: e.target.value});
  };

  return (
      <Layout>
        <SiteMetadata title="Home" description="A11y color contrast checker" />
        <Background color={ inputs.textColor } bgColor={ inputs.bgColor }>
          <Container>
            <Heading>
              Hello world
            </Heading>

            <Form>
              <FormCol>
                <Label>
                  Text
                </Label>
                <Input
                    type="text"
                    name="textColor"
                    placeholder={ inputs.textColor }
                    onChange={ handleChange }
                />
              </FormCol>

              <FormCol>
                <Label>
                  Background
                </Label>
                <Input
                    type="text"
                    name="bgColor"
                    placeholder={ inputs.bgColor }
                    onChange={ handleChange }
                />
              </FormCol>
            </Form>

          </Container>
        </Background>
      </Layout>
  )
};

export default IndexPage
