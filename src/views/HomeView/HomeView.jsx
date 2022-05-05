import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './HomeView.styled';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const HomeView = () => (
  <>
    <Outlet />
    <Container /* style={styles.container} */>
      <h1 style={styles.title}>
        Приветственная страница нашего сервиса
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </h1>
    </Container>
  </>
);
