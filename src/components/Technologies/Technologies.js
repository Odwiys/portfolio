import React from 'react';
import { DiFirebase, DiPython, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies from Back-end to Front-end
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js, Javascript, HTML, CSS
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Python, Ruby on Rails and Databases
            </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              tools like Figma
            </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
