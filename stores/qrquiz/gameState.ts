import {
  defineStore,
} from 'pinia'
type gameState = 'opening' | 'playing' | 'complete' | 'end'

export const useStateStore = defineStore('gameState', () => {
  const gameState = ref<gameState>('opening')
  const progress = ref(0)
  const wholeQuizCount = ref(6)
  const solvedNormalQuizCount = ref(0)
  const earnedBossHintCount = ref(0)
  const usedBossHintCount = ref(0)
  const myNormalQuizList = ref([
    {
      quizNo: 1,
      isSolved: false,
    },
    {
      quizNo: 2,
      isSolved: false,
    },
    {
      quizNo: 3,
      isSolved: false,
    },
    {
      quizNo: 4,
      isSolved: false,
    },
    {
      quizNo: 5,
      isSolved: false,
    },
    {
      quizNo: 6,
      isSolved: false,
    },
  ])

  const changeState = (newState: gameState) => {
    gameState.value = newState
  }

  const changeCorrect = () => {
    solvedNormalQuizCount.value++
    progress.value = solvedNormalQuizCount.value / wholeQuizCount.value
  }

  const normalQuizSolved = (quizNo: number) => {
    myNormalQuizList.value[quizNo - 1].isSolved = true
  }

  return { 
    gameState, 
    solvedNormalQuizCount, 
    wholeQuizCount,
    progress,
    earnedBossHintCount,
    usedBossHintCount,
    myNormalQuizList, 
    changeState, 
    changeCorrect,
    normalQuizSolved
  }
})

