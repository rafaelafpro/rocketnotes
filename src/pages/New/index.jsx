import { useState } from 'react';

import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Link } from "react-router-dom";

export function New() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");


  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(index) {
    setLinks(prevState => prevState.filter((link, i) => i !== index));
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(index) {
    setTags(prevState => prevState.filter((tag, i) => i !== index));
  }


  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />

          <Section title="Link Úteis">
            {
              links.map((link, index) => <NoteItem key={String(index)} value={link} onClick={() => handleRemoveLink(index)} />)
            }

            <NoteItem
              isNew="true"
              placeholder="Novo Link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
              onKeyPress={e => e.key === 'Enter' ? handleAddLink() : null}
            />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              {
                tags.map((tag, index) => <NoteItem key={String(index)} value={tag} onClick={() => handleRemoveTag(index)} />)
              }

              <NoteItem
                isNew="true"
                placeholder="Nova Tag"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
                onKeyPress={e => e.key === 'Enter' ? handleAddTag() : null}
              />
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}