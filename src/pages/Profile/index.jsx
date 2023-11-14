/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

import { useAuth } from '../../hooks/auth';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';

import { Container, Form, Avatar } from "./style";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

import { showError, toastError } from '../../utils/alert.js';


export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);


  console.log(user.avatar);

  async function handleUpdate() {

    const user = {
      name,
      email,
      old_password: oldPassword,
      password: newPassword
    };

    await updateProfile({ user, avatarFile });
  }

  function handleAvatarChange(event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);

    setAvatar(imagePreview);
  }



  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>
      <Form>
        <Avatar>
          <img src={avatar} alt="Foto do Usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input
              id="avatar"
              type="file"
              onChange={handleAvatarChange}
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
          onChange={(e) => setOldPassword(e.target.value)}

        />
        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setNewPassword(e.target.value)}

        />
        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}