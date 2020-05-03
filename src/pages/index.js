import React, { useEffect, useState } from 'react'
import chroma from 'chroma-js'
import Layout from '../layouts/Layout'
import SiteMetadata from '../components/SiteMetadata'
import { Heading } from '../components/Typography'
import { Form, Input, Label } from '../components/Form'
import { Background } from '../components/Background'
import { Container } from '../components/Container'
import RatioCard from '../components/RatioCard'
import { Col, Row } from '../components/Grid'
import { Button } from '../components/Button'

const IndexPage = () => {
  const [inputs, setInputs] = useState({
    textColor: '#fcf8f1',
    bgColor: '#485d51'
  });
  const [ratio, setRatio] = useState();
  const [grade, setGrade] = useState('AaBbCc');

  useEffect(() => {
        const hexCodeRegEx = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
        if (inputs.textColor.match(hexCodeRegEx) && inputs.bgColor.match(hexCodeRegEx)) {
          checkColorContrast();
        }
      }, [inputs]
  );

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  };

  const checkColorContrast = () => {
    const contrastRatio = chroma.contrast(inputs.textColor, inputs.bgColor).toFixed(2);
    setRatio(contrastRatio);

    if (contrastRatio > 7) {
      setGrade('AAA 💯');
    } else if (contrastRatio > 4.5) {
      setGrade('AA Regular 👌');
    } else if (contrastRatio > 3) {
      setGrade('AA Large 👌')
    } else {
      setGrade('Fail 👎');
    }
  };

  const reverseColors = () => {
    setInputs({
      textColor: inputs.bgColor,
      bgColor: inputs.textColor
    });
  };

  return (
      <Layout>
        <SiteMetadata title="Home" description="A11y color contrast checker" />
        <Background color={ inputs.textColor } bgColor={ inputs.bgColor }>
          <Container>
            <Row>
              <Col width="38%">
                <Heading>
                  AaBbCc
                </Heading>
              </Col>
              <Col width="58%">
                <RatioCard ratio={ ratio } grade={ grade } />
              </Col>
            </Row>

            <Form color={ inputs.color }>
              <Row>
                <Col>
                  <Label htmlFor="textColor">
                    Foreground color
                  </Label>
                  <Input
                      id="textColor"
                      type="text"
                      maxLength="7"
                      name="textColor"
                      value={ inputs.textColor || '' }
                      onChange={ handleInputChange }
                      borderColor={ inputs.textColor }
                  />
                </Col>

                <Col>
                  <Label htmlFor="bgColor">
                    Background color
                  </Label>
                  <Input
                      id="bgColor"
                      type="text"
                      maxLength="7"
                      name="bgColor"
                      value={ inputs.bgColor || '' }
                      onChange={ handleInputChange }
                      borderColor={ inputs.textColor }
                  />
                </Col>
              </Row>
            </Form>

            <Button
                color={ inputs.textColor }
                bgColor={ inputs.bgColor }
                type="button"
                onClick={ reverseColors }
            >
              Reverse colors
            </Button>


          </Container>
        </Background>
      </Layout>
  )
};

export default IndexPage
