function App() {
  return (
    <div className="app">
      <header>
        <h1>Avança Araucária</h1>
        <p>Conectando pessoas, transformando realidades</p>
      </header>
      <main>
        <section className="hero">
          <h2>Bem-vindo ao Avança Araucária</h2>
          <p>
            Uma plataforma dedicada ao desenvolvimento e crescimento da região de Araucária,
            promovendo iniciativas comunitárias, educacionais e econômicas.
          </p>
        </section>
        <section className="features">
          <div className="feature">
            <h3>Comunidade</h3>
            <p>Fortalecendo laços entre moradores e organizações locais</p>
          </div>
          <div className="feature">
            <h3>Educação</h3>
            <p>Oportunidades de aprendizado e capacitação profissional</p>
          </div>
          <div className="feature">
            <h3>Desenvolvimento</h3>
            <p>Projetos que impulsionam a economia local sustentável</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Avança Araucária. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App