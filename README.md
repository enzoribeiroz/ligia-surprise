# Página de Aniversário - Surpresa Especial 💕

Uma página interativa e romântica criada para celebrar o aniversário de relacionamento à distância.

## Estrutura da Página

A página segue um fluxo interativo com as seguintes seções:

1. **Tela de Boas-Vindas** - Efeito de digitação com mensagem carinhosa
2. **Quiz Interativo** - "O quanto você me conhece?" com perguntas personalizadas
3. **Galeria de Memórias** - Fotos com legendas e mensagens especiais
4. **Cartinhas Virtuais** - Envelopes que se abrem revelando motivos de amor
5. **Modo Estrelado** - Céu noturno com estrelas cintilantes e mensagem romântica
6. **Surpresa Final** - Mensagem de aniversário com confete e música

## Personalização

### 1. Quiz (components/quiz.tsx)
Edite as perguntas e respostas no array `questions`:
\`\`\`typescript
const questions = [
  {
    question: "Sua pergunta aqui?",
    options: ["Opção 1", "Opção 2", "Opção 3"],
    correct: 0, // índice da resposta correta
    sweetMessage: "Mensagem fofa após acertar"
  }
]
\`\`\`

### 2. Galeria de Memórias (components/interactive-gallery.tsx)
Substitua as imagens e mensagens no array `memories`:
- Adicione suas fotos na pasta `/public`
- Atualize os caminhos das imagens
- Personalize as legendas e mensagens

### 3. Cartinhas Virtuais (components/virtual-cards.tsx)
Edite os motivos no array `reasons`:
\`\`\`typescript
const reasons = [
  {
    title: "Título do motivo",
    message: "Mensagem explicando por que você a ama"
  }
]
\`\`\`

### 4. Surpresa Final (components/final-surprise.tsx)
Personalize a mensagem final editando o conteúdo dentro do componente.

### 5. Música
Adicione arquivos de áudio em `/public/music/`:
- `romantic-song.mp3` - Música de fundo inicial
- `our-song.mp3` - Música especial do casal

## Como Usar

1. Personalize todo o conteúdo conforme as instruções acima
2. Adicione suas fotos e músicas
3. Teste localmente com `npm run dev`
4. Publique e compartilhe o link com sua namorada!

## Dicas

- Todas as imagens devem estar em `/public`
- Use fotos reais de vocês para tornar mais especial
- Personalize as cores em `app/globals.css` se desejar
- Teste em diferentes dispositivos (mobile e desktop)

Feito com muito amor 💖
# ligia-surprise
