import { Container, Links, Content } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from '../../components/Section';
import { Tag } from "../../components/Tag";

export function Details() {

  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo commodi unde aut voluptatem eligendi fugit quas repudiandae rerum nisi sint molestiae, mollitia eaque laudantium asperiores numquam quibusdam incidunt et velit?</p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="@">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="@">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"></Tag>
            <Tag title="node"></Tag>
          </Section>
          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  );
}
