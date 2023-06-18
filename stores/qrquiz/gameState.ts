import {
  defineStore,
} from 'pinia'
type gameState = 'opening' | 'playing' | 'complete' | 'loading'

export const useStateStore = defineStore('gameState', () => {
  const gameState = ref<gameState>('opening')
  const progress = ref(0)
  const wholeQuizCount = ref(5)
  const wholeBossQuizCount = ref(3)
  const solvedNormalQuizCount = ref(0)
  const earnedBossHintCount = ref(0)
  const usedBossHintCount = ref(0)
  const currentQuizNo = ref(0)
  const currentBossQuizNo = ref(0)
  const myNormalQuizList = ref([
    {
      quizNo: 1,
      isSolved: false,
      title: '정답은 o입니다.',
      questionType: 'ox',
      answer: 'o',
    },
    {
      quizNo: 2,
      isSolved: false,
      title: '정답은 꼬북꼬북입니다.',
      questionType: 'input',
      answer: '꼬북꼬북',
    },
    {
      quizNo: 3,
      isSolved: false,
      title: '정답은 3번입니다.',
      questionType: 'choice',
      answer: 3,
    },
    {
      quizNo: 4,
      isSolved: false,
      title: '정답은 1234입니다.',
      questionType: 'numbers',
      answer: '1234',
    },
    {
      quizNo: 5,
      isSolved: false,
      title: '정답은 왼쪽 위 오른쪽 아래입니다.',
      questionType: 'directions',
      answer: 'lurd',
    },
  ])

  const isUsedFirstBossHint = ref(false)
  const isUsedSecondBossHint = ref(false)
  const startDt = ref<Date>()
  const endDt = ref<Date>()

  const changeState = (newState: gameState) => {
    gameState.value = newState
  }

  const changeCorrect = () => {
    solvedNormalQuizCount.value++
    progress.value = solvedNormalQuizCount.value / wholeQuizCount.value
    earnedBossHintCount.value = Math.floor(solvedNormalQuizCount.value /wholeQuizCount.value * 3)
  }

  const normalQuizSolved = (quizNo: number) => {
    myNormalQuizList.value[quizNo].isSolved = true
    currentQuizNo.value = quizNo + 1
  }

  const useHint = () => {
    usedBossHintCount.value++
  }

  const useFirstBossHint = () => {
    isUsedFirstBossHint.value = true
  }

  const useSecondBossHint = () => {
    isUsedSecondBossHint.value = true
  }

  const resetHint = () => {
    isUsedFirstBossHint.value = false
    isUsedSecondBossHint.value = false
  }

  const solvedBossQuiz = () => {
    currentBossQuizNo.value++
  }
  const startGame = () => {
    startDt.value = new Date()
  }
  const endGame = () => {
    endDt.value = new Date()
  }
  return { 
    gameState, 
    solvedNormalQuizCount, 
    wholeQuizCount,
    progress,
    earnedBossHintCount,
    usedBossHintCount,
    myNormalQuizList, 
    currentQuizNo,
    wholeBossQuizCount,
    currentBossQuizNo,
    isUsedFirstBossHint,
    isUsedSecondBossHint,
    startDt,
    endDt,
    changeState, 
    changeCorrect,
    normalQuizSolved,
    useHint,
    useFirstBossHint,
    useSecondBossHint,
    resetHint,
    solvedBossQuiz,
    startGame,
    endGame,
  }
})

