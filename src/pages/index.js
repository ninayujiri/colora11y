import React, { useEffect, useState } from 'react'
import chroma from 'chroma-js';
import Layout from '../layouts/Layout';
import SiteMetadata from '../components/SiteMetadata';
import { Heading } from '../components/Typography';
import { Input, Label } from '../components/Form';
import { Background } from '../components/Background';
import { Container } from '../components/Container';
import RatioCard from '../components/RatioCard';
import { Col, Row } from '../components/Grid';

const IndexPage = () => {
  const [inputs, setInputs] = useState({
    textColor: '#a1bbc4',
    bgColor: '#1b4645'
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
      setGrade('AAA');
    } else if (contrastRatio > 4.5) {
      setGrade('AA');
    } else {
      setGrade('Fail');
    }
  };

  return (
      <Layout>
        <SiteMetadata title="Home" description="A11y color contrast checker" />
        <Background color={ inputs.textColor } bgColor={ inputs.bgColor }>
          <Container>
            <Row>
              <Col>
                <Heading>
                  AaBbCc
                </Heading>
              </Col>
              <Col>
                <RatioCard ratio={ ratio } grade={ grade } />
              </Col>
            </Row>

            <form>
              <Row>
                <Col>
                  <Label for="textColor">
                    Text
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
                  <Label for="bgColor">
                    Background
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
            </form>

          </Container>
        </Background>
      </Layout>
  )
};

export default IndexPage
