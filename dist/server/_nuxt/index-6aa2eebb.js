import { ref, defineComponent, mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { d as defineStore, s as storeToRefs, _ as _export_sfc } from "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "h3";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
import "defu";
const useStateStore = defineStore("gameState", () => {
  const gameState = ref("opening");
  const progress = ref(0);
  const wholeQuizCount = ref(5);
  const wholeBossQuizCount = ref(3);
  const solvedNormalQuizCount = ref(0);
  const earnedBossHintCount = ref(0);
  const usedBossHintCount = ref(0);
  const currentQuizNo = ref(0);
  const currentBossQuizNo = ref(0);
  const myNormalQuizList = ref([
    {
      quizNo: 1,
      isSolved: false,
      title: "정답은 o입니다.",
      questionType: "ox",
      answer: "o"
    },
    {
      quizNo: 2,
      isSolved: false,
      title: "정답은 꼬북꼬북 입니다.",
      questionType: "input",
      answer: "꼬북꼬북"
    },
    {
      quizNo: 3,
      isSolved: false,
      title: "정답은 3번입니다.",
      questionType: "choice",
      answer: 3
    },
    {
      quizNo: 4,
      isSolved: false,
      title: "정답은 1234입니다.",
      questionType: "numbers",
      answer: "1234"
    },
    {
      quizNo: 5,
      isSolved: false,
      title: "정답은 왼쪽 위 오른쪽 아래입니다.",
      questionType: "directions",
      answer: "lurd"
    }
  ]);
  const isUsedFirstBossHint = ref(false);
  const isUsedSecondBossHint = ref(false);
  const startDt = ref();
  const endDt = ref();
  const changeState = (newState) => {
    gameState.value = newState;
  };
  const changeCorrect = () => {
    solvedNormalQuizCount.value++;
    progress.value = solvedNormalQuizCount.value / wholeQuizCount.value;
    earnedBossHintCount.value = Math.floor(solvedNormalQuizCount.value / wholeQuizCount.value * 3);
  };
  const normalQuizSolved = (quizNo) => {
    myNormalQuizList.value[quizNo].isSolved = true;
    currentQuizNo.value = quizNo + 1;
  };
  const useHint = () => {
    usedBossHintCount.value++;
  };
  const useFirstBossHint = () => {
    isUsedFirstBossHint.value = true;
  };
  const useSecondBossHint = () => {
    isUsedSecondBossHint.value = true;
  };
  const resetHint = () => {
    isUsedFirstBossHint.value = false;
    isUsedSecondBossHint.value = false;
  };
  const solvedBossQuiz = () => {
    currentBossQuizNo.value++;
  };
  const startGame = () => {
    startDt.value = /* @__PURE__ */ new Date();
  };
  const endGame = () => {
    endDt.value = /* @__PURE__ */ new Date();
  };
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
    endGame
  };
});
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const stateStore = useStateStore();
    storeToRefs(stateStore);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap theme-5" }, _attrs))} data-v-ec8e8ebf><div class="centered" data-v-ec8e8ebf><div class="spinner" data-v-ec8e8ebf><div class="spinner-item" data-v-ec8e8ebf></div><div class="spinner-item" data-v-ec8e8ebf></div><div class="spinner-item" data-v-ec8e8ebf></div><div class="spinner-item" data-v-ec8e8ebf></div><div class="spinner-item" data-v-ec8e8ebf></div><div class="spinner-item" data-v-ec8e8ebf></div><div class="spinner-item" data-v-ec8e8ebf></div><div class="spinner-item" data-v-ec8e8ebf></div></div><p class="text" data-v-ec8e8ebf>loading ...</p></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_ec8e8ebf_lang = "";
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loading/index.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-ec8e8ebf"]]);
const _imports_0$b = "" + __buildAssetsURL("icon-team-member.d63be873.svg");
const _imports_0$a = "" + __buildAssetsURL("help1.dbc57744.svg");
const Help1_vue_vue_type_style_index_0_scoped_d661afc0_lang = "";
const _sfc_main$o = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "help-content" }, _attrs))} data-v-d661afc0><div class="box-method" data-v-d661afc0><div class="method-header" data-v-d661afc0><div class="step" data-v-d661afc0><p class="font-jalnan" data-v-d661afc0>방법 1</p></div><p class="method-title" data-v-d661afc0>QR 스캔</p></div><img class="m-auto d-block"${ssrRenderAttr("src", _imports_0$a)} alt="" data-v-d661afc0></div><div class="text-area" data-v-d661afc0><p class="help-text" data-v-d661afc0> 게임이 시작되면 <span class="red" data-v-d661afc0>‘QR 스캔’</span>을 사용해<br data-v-d661afc0>곳곳에 있는 QR을 인식하여 문제를 풉니다. </p><p class="help-text" data-v-d661afc0>팀원 모두 문제를 풀어 최대한 많은 힌트를 얻고<br data-v-d661afc0>‘추론 문제 방’게이지를 모두 채웁니다.</p><p class="help-text" data-v-d661afc0>‘방장’이 확인 후 문을 열어주면 열린 문을 클릭해 다음 단계로 넘어갑니다!</p></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Modals/Help1.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Help1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-d661afc0"]]);
const _imports_0$9 = "" + __buildAssetsURL("help2.68cba1ce.svg");
const Help2_vue_vue_type_style_index_0_scoped_b23cf784_lang = "";
const _sfc_main$n = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "help-content" }, _attrs))} data-v-b23cf784><div class="box-method" data-v-b23cf784><div class="method-header" data-v-b23cf784><div class="step" data-v-b23cf784><p class="font-jalnan" data-v-b23cf784>방법 2</p></div><p class="method-title" data-v-b23cf784>추론 문제 방</p></div><img class="m-auto d-block"${ssrRenderAttr("src", _imports_0$9)} alt="" data-v-b23cf784></div><div class="text-area" data-v-b23cf784><p class="help-text" data-v-b23cf784> 추론 문제 방에는 스토리에 맞는 다양한 추론 문제들이 나타나는데요. </p><p class="help-text" data-v-b23cf784> 이 단계에서는 오직 <span class="red" data-v-b23cf784>‘팀장’</span>만 정답 입력과 힌트 사용이 가능하기 때문에 더욱 팀워크를 발휘해 문제를 해결해야 합니다! </p><p class="help-text" data-v-b23cf784>모든 추론 문제를 풀고 테마가 끝나면 <span class="red" data-v-b23cf784>‘탈출!’</span>버튼을 눌러 방을 탈출합니다!</p></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Modals/Help2.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Help2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-b23cf784"]]);
const _imports_0$8 = "" + __buildAssetsURL("help3.2b50d336.svg");
const Help3_vue_vue_type_style_index_0_scoped_66b556e6_lang = "";
const _sfc_main$m = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "help-content" }, _attrs))} data-v-66b556e6><div class="box-method" data-v-66b556e6><div class="method-header" data-v-66b556e6><div class="step" data-v-66b556e6><p class="font-jalnan" data-v-66b556e6>방법 3</p></div><p class="method-title" data-v-66b556e6>열쇠와 힌트</p></div><img class="m-auto d-block"${ssrRenderAttr("src", _imports_0$8)} alt="" data-v-66b556e6></div><div class="text-area" data-v-66b556e6><div class="round-box yellow" data-v-66b556e6> 열쇠 </div><p class="help-text" data-v-66b556e6> 팀이 문제를 많이 풀어야 얻을 수 있습니다.<br data-v-66b556e6>부족하면 <span class="red" data-v-66b556e6>일반 문제</span>를 더 풀어보세요! </p><div class="round-box gray" data-v-66b556e6> 1차 힌트 </div><p class="help-text" data-v-66b556e6> 보유한 <span class="red" data-v-66b556e6>열쇠</span>를 사용하여 볼 수 있습니다. </p><div class="round-box dark" data-v-66b556e6> 2차 힌트 </div><p class="help-text" data-v-66b556e6> 1차 힌트 사용 후 요청이 가능합니다. <span class="red" data-v-66b556e6>‘방장’</span>이 수락하면 힌트를 볼 수 있습니다. 물론! 방장이 순순히 주지 않겠지요? </p><p class="caution" data-v-66b556e6> 목표는 탈출! 힌트를 아끼지 마세요! </p></div></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Modals/Help3.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const Help3 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-66b556e6"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const helpNo = ref(1);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal modal-help" }, _attrs))} data-v-f691eca5><div class="modal-header" data-v-f691eca5><h2 class="modal-title font-jalnan" data-v-f691eca5>게임방법</h2><button class="btn-close" data-v-f691eca5><i class="icon-xmark" data-v-f691eca5></i></button></div>`);
      if (unref(helpNo) === 1) {
        _push(ssrRenderComponent(Help1, null, null, _parent));
      } else if (unref(helpNo) === 2) {
        _push(ssrRenderComponent(Help2, null, null, _parent));
      } else if (unref(helpNo) === 3) {
        _push(ssrRenderComponent(Help3, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="modal-footer" data-v-f691eca5><p class="page-number" data-v-f691eca5>${ssrInterpolate(unref(helpNo))} / 3 </p><div class="box-custom-btn" data-v-f691eca5><button class="btn-push"${ssrIncludeBooleanAttr(unref(helpNo) === 1) ? " disabled" : ""} data-v-f691eca5> 이전 </button><button class="btn-push"${ssrIncludeBooleanAttr(unref(helpNo) === 3) ? " disabled" : ""} data-v-f691eca5> 다음 </button></div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_f691eca5_lang = "";
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Modals/index.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const helpModal = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-f691eca5"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    openNormalQuiz: { type: Function },
    openBossQuiz: { type: Function }
  },
  setup(__props) {
    const stateStore = useStateStore();
    const {
      wholeQuizCount,
      solvedNormalQuizCount,
      progress,
      earnedBossHintCount,
      usedBossHintCount,
      myNormalQuizList
    } = storeToRefs(stateStore);
    const isHelpOpen = ref(false);
    const isShowMyTeamMembers = ref(false);
    const isShowMySolvedQuizzes = ref(false);
    const handleClickCloseHelpModal = () => {
      isHelpOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-main" }, _attrs))} data-v-9fc755dd><header class="header" data-v-9fc755dd><div class="box-nickname" data-v-9fc755dd><p class="my-nickname font-jalnan" data-v-9fc755dd>상훈이</p><span class="my-role reader" data-v-9fc755dd>팀장</span></div><button class="btn-help font-jalnan" data-v-9fc755dd>?</button></header><div class="body" data-v-9fc755dd><div class="${ssrRenderClass([{ open: Math.floor(unref(progress) * 100) >= 50 }, "room-door"])}" data-v-9fc755dd>`);
      if (Math.floor(unref(progress) * 100) >= 50) {
        _push(`<div class="box-message" data-v-9fc755dd><p class="message-enterable" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-9fc755dd>문이 열렸습니다. <br data-v-9fc755dd>클릭하여 추론문제에 입장해주세요</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="progress" data-v-9fc755dd><div class="progress-box" data-v-9fc755dd><p class="progress-title font-jalnan" data-v-9fc755dd>추론 문제 방</p><span class="progress-num" data-v-9fc755dd>${ssrInterpolate(Math.floor(unref(progress) * 100))} / 100%</span></div><div class="progress-bar" data-v-9fc755dd><div class="progress-current" style="${ssrRenderStyle({ width: unref(progress) * 100 + "%" })}" data-v-9fc755dd></div></div></div><div class="status" data-v-9fc755dd><div class="status-header" data-v-9fc755dd><p class="team-title font-jalnan" data-v-9fc755dd>A팀 정보 <span class="team-count" data-v-9fc755dd>1명</span></p><button class="btn-member" data-v-9fc755dd><img class="pr-1"${ssrRenderAttr("src", _imports_0$b)} alt="" data-v-9fc755dd><i class="icon-chevron_right" data-v-9fc755dd></i></button></div><div class="wrap-count" data-v-9fc755dd><p class="key-title font-jalnan" data-v-9fc755dd><i class="icon icon-hint" data-v-9fc755dd></i> 팀 열쇠 현황 </p><div class="box-key" data-v-9fc755dd><div class="key-header" data-v-9fc755dd><p class="font-jalnan" data-v-9fc755dd>보유</p><p class="font-jalnan" data-v-9fc755dd>사용</p><p class="font-jalnan" data-v-9fc755dd>전체</p></div><div class="key-body" data-v-9fc755dd><p class="key-count" data-v-9fc755dd>${ssrInterpolate(unref(earnedBossHintCount))}</p><p class="key-count" data-v-9fc755dd>${ssrInterpolate(unref(usedBossHintCount))}</p><p class="key-count" data-v-9fc755dd>3</p></div></div><div class="box-solved" data-v-9fc755dd><p class="solved-title font-jalnan" data-v-9fc755dd>내가 푼 문제</p><p class="solved-count" data-v-9fc755dd><span class="green" data-v-9fc755dd>${ssrInterpolate(unref(solvedNormalQuizCount))}</span> / ${ssrInterpolate(unref(wholeQuizCount))}</p><button class="btn-my-solved" data-v-9fc755dd><i class="icon-chevron_right" data-v-9fc755dd></i></button></div></div><div class="text-center" data-v-9fc755dd><button type="button" class="btn-push" data-v-9fc755dd>문제풀기</button></div></div></div>`);
      if (unref(isHelpOpen)) {
        _push(ssrRenderComponent(helpModal, { onClose: handleClickCloseHelpModal }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowMyTeamMembers)) {
        _push(`<div class="modal modal-member" data-v-9fc755dd><div class="content-area" data-v-9fc755dd><div class="modal-header" data-v-9fc755dd><h2 class="modal-title font-jalnan" data-v-9fc755dd>팀원 보기</h2><button class="btn-close" data-v-9fc755dd><i class="icon-xmark" data-v-9fc755dd></i></button></div><div class="modal-body" data-v-9fc755dd><ul class="list-member" data-v-9fc755dd><li class="item-member reader" data-v-9fc755dd><p class="member-name" data-v-9fc755dd> 상훈이 <span class="member-score" data-v-9fc755dd> (${ssrInterpolate(unref(solvedNormalQuizCount))}/${ssrInterpolate(unref(wholeQuizCount))}) </span></p><span class="member-role reader" data-v-9fc755dd> 팀장 </span></li></ul></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowMySolvedQuizzes)) {
        _push(`<div class="modal-solved modal" data-v-9fc755dd><div class="content-area" data-v-9fc755dd><div class="modal-header" data-v-9fc755dd><h2 class="modal-title font-jalnan" data-v-9fc755dd>내가 푼 문제</h2><button class="btn-close" data-v-9fc755dd><i class="icon-xmark" data-v-9fc755dd></i></button></div><div class="modal-body" data-v-9fc755dd><ul class="list-quiz" data-v-9fc755dd><!--[-->`);
        ssrRenderList(unref(myNormalQuizList), (quiz) => {
          _push(`<li class="${ssrRenderClass([{ "solved": quiz.isSolved }, "item-quiz"])}" data-v-9fc755dd>${ssrInterpolate(quiz.quizNo)}</li>`);
        });
        _push(`<!--]--></ul></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_9fc755dd_lang = "";
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/GameMain/index.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const GameMain = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-9fc755dd"]]);
const _imports_2 = "data:image/png;base64,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";
const _imports_3$1 = "data:image/png;base64,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";
const _imports_0$7 = "" + __buildAssetsURL("quiz1.2d38e07f.jpeg");
const quiz1_vue_vue_type_style_index_0_scoped_9ac0f8df_lang = "";
const _sfc_main$j = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-9ac0f8df><img${ssrRenderAttr("src", _imports_0$7)} alt="" class="type-image" data-v-9ac0f8df><div class="type-text" data-v-9ac0f8df> 상훈이를 합격시킨다 </div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz1.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Quiz1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-9ac0f8df"]]);
const _imports_0$6 = "" + __buildAssetsURL("quiz2.71832b27.jpg");
const quiz2_vue_vue_type_style_index_0_scoped_eb6ef1f4_lang = "";
const _sfc_main$i = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-eb6ef1f4><img${ssrRenderAttr("src", _imports_0$6)} alt="" class="type-image" data-v-eb6ef1f4><div class="type-text" data-v-eb6ef1f4> 꼬북꼬북!! </div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz2.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Quiz2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-eb6ef1f4"]]);
const quiz3_vue_vue_type_style_index_0_scoped_0929d73c_lang = "";
const _sfc_main$h = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-0929d73c><div class="type-embed-video" data-v-0929d73c><iframe src="https://www.youtube.com/embed/761ae_KDg_Q" class="video-frame" frameborder="0" allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture
        " allowfullscreen data-v-0929d73c>
      </iframe></div><div class="type-text" data-v-0929d73c> 다음 영상의 제목으로 알맞은 것은? </div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz3.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Quiz3 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-0929d73c"]]);
const quiz4_vue_vue_type_style_index_0_scoped_c31a5ec8_lang = "";
const _sfc_main$g = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-c31a5ec8><div class="type-text" data-v-c31a5ec8> 1234 1234 </div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz4.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Quiz4 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c31a5ec8"]]);
const quiz5_vue_vue_type_style_index_0_scoped_1b652967_lang = "";
const _sfc_main$f = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-1b652967><div class="type-text" data-v-1b652967> 오답시 반드시 리프래시를 눌러주세요 </div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz5.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Quiz5 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1b652967"]]);
const quiz6_vue_vue_type_style_index_0_scoped_093a36ed_lang = "";
const _sfc_main$e = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-093a36ed><div class="type-text" data-v-093a36ed> 상훈이를 합격시킨다 </div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz6.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Quiz6 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-093a36ed"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "ox",
  __ssrInlineRender: true,
  props: {
    changeAnswer: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "type-ox" }, _attrs))} data-v-aecfc5fc><label for="type-o" data-v-aecfc5fc><input type="radio" name="ox"${ssrRenderAttr("value", "o")} id="type-o" data-v-aecfc5fc><div class="box-o box-ox" data-v-aecfc5fc></div></label><label for="type-x" data-v-aecfc5fc><input type="radio" name="ox"${ssrRenderAttr("value", "x")} id="type-x" data-v-aecfc5fc><div class="box-x box-ox" data-v-aecfc5fc></div></label></div>`);
    };
  }
});
const ox_vue_vue_type_style_index_0_scoped_aecfc5fc_lang = "";
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizTypes/ox.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const Ox = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-aecfc5fc"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "input",
  __ssrInlineRender: true,
  props: {
    changeAnswer: { type: Function }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "type-input" }, _attrs))} data-v-a58bc347><input type="text" placeholder="정답을 입력해주세요." class="input-text" data-v-a58bc347></div>`);
    };
  }
});
const input_vue_vue_type_style_index_0_scoped_a58bc347_lang = "";
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizTypes/input.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Input = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-a58bc347"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "choice",
  __ssrInlineRender: true,
  props: {
    changeAnswer: { type: Function }
  },
  setup(__props) {
    const choices = [
      {
        value: 1,
        content: "아빠 상어"
      },
      {
        value: 2,
        content: "엄마 상어"
      },
      {
        value: 3,
        content: "상어가족"
      },
      {
        value: 4,
        content: "아기상어"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "type-choice" }, _attrs))}><!--[-->`);
      ssrRenderList(choices, (choice, index2) => {
        _push(`<div class="box-choice"><input type="radio" value="" name="choice"${ssrRenderAttr("id", "type-choice-" + choice.value)}><label${ssrRenderAttr("for", "type-choice-" + choice.value)}><div class="box-choice-text"><p class="choice-value">${ssrInterpolate(index2 + 1)}.</p><p class="choice-content">${choice.content}</p><div class="check-btn"><i class="icon-check"></i></div></div></label></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const choice_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizTypes/choice.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _imports_0$5 = "" + __buildAssetsURL("icn-lock-up.f2ad8e99.svg");
const _imports_1$3 = "" + __buildAssetsURL("icn-lock-down.f5135969.svg");
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "numbers",
  __ssrInlineRender: true,
  props: {
    changeAnswer: { type: Function }
  },
  setup(__props) {
    const lockNumArray = ref([0, 0, 0, 0]);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "type-lock" }, _attrs))} data-v-87eca066><i class="icon-locker" data-v-87eca066></i><div class="box-lock" data-v-87eca066><!--[-->`);
      ssrRenderList(unref(lockNumArray), (item, index2) => {
        _push(`<div class="locker" data-v-87eca066><button type="button" class="btn btn-lock-up" data-v-87eca066><img${ssrRenderAttr("src", _imports_0$5)} alt="숫자증가 아이콘" data-v-87eca066></button><p class="locker-num" data-v-87eca066>${ssrInterpolate(item)}</p><button type="button" class="btn btn-lock-down" data-v-87eca066><img${ssrRenderAttr("src", _imports_1$3)} alt="숫자감소 아이콘" data-v-87eca066></button></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const numbers_vue_vue_type_style_index_0_scoped_87eca066_lang = "";
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizTypes/numbers.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Numbers = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-87eca066"]]);
const _imports_0$4 = "" + __buildAssetsURL("icn-reset-direction.0c186fe0.svg");
const _imports_1$2 = "" + __buildAssetsURL("direction-button.5ca6bff4.svg");
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "directions",
  __ssrInlineRender: true,
  props: {
    changeAnswer: { type: Function }
  },
  setup(__props) {
    const direction = ref("");
    const resetMessage = ref(false);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "type-direction" }, _attrs))} data-v-a86cc74c><div class="box-reset" data-v-a86cc74c><button class="btn btn-reset-direction" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_0$4)} alt="" data-v-a86cc74c></button>`);
      if (unref(resetMessage)) {
        _push(`<p class="reset-meesage" data-v-a86cc74c>초기화 완료</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="direction-panel" data-v-a86cc74c><button class="btn btn-up" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-a86cc74c></button><button class="btn btn-down" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-a86cc74c></button><button class="btn btn-left" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-a86cc74c></button><button class="btn btn-right" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-a86cc74c></button><div class="${ssrRenderClass([unref(direction), "direction-controller"])}" data-v-a86cc74c></div><i class="icon-locker" data-v-a86cc74c></i></div></div>`);
    };
  }
});
const directions_vue_vue_type_style_index_0_scoped_a86cc74c_lang = "";
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizTypes/directions.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Directions = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-a86cc74c"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    closeNormalQuiz: { type: Function }
  },
  setup(__props) {
    const stateStore = useStateStore();
    const {
      currentQuizNo,
      myNormalQuizList,
      wholeQuizCount,
      solvedNormalQuizCount
    } = storeToRefs(stateStore);
    const currentQuiz = ref(myNormalQuizList.value[currentQuizNo.value]);
    const answer = ref();
    const isCorrect = ref(void 0);
    const isShowingFeedbackModal = ref(false);
    const chaneAnswer = (input) => {
      answer.value = input;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "normal" }, _attrs))} data-v-1d5026dd><div class="normal-header" data-v-1d5026dd><h2 class="normal-title" data-v-1d5026dd>일반문제 ${ssrInterpolate(unref(currentQuizNo) + 1)}.</h2><button class="btn btn-close" data-v-1d5026dd><i class="icon-xmark" data-v-1d5026dd></i></button></div><div class="normal-wrap" data-v-1d5026dd><div class="normal-body" data-v-1d5026dd><div class="wrap-content wrap" data-v-1d5026dd><h3 class="quiz-title" data-v-1d5026dd>${`Q. ${unref(currentQuiz).title}`}</h3>`);
      if (unref(currentQuizNo) === 0) {
        _push(ssrRenderComponent(Quiz1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuizNo) === 1) {
        _push(ssrRenderComponent(Quiz2, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuizNo) === 2) {
        _push(ssrRenderComponent(Quiz3, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuizNo) === 3) {
        _push(ssrRenderComponent(Quiz4, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuizNo) === 4) {
        _push(ssrRenderComponent(Quiz5, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuizNo) === 5) {
        _push(ssrRenderComponent(Quiz6, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass([[
        { "wrap-ox": unref(currentQuiz).questionType == "ox" },
        { "wrap-lock": unref(currentQuiz).questionType == "numbers" },
        { "wrap-direction": unref(currentQuiz).questionType == "directions" }
      ], "wrap-choice wrap"])}" data-v-1d5026dd>`);
      if (unref(currentQuiz).questionType == "ox") {
        _push(ssrRenderComponent(Ox, { changeAnswer: chaneAnswer }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuiz).questionType == "input") {
        _push(ssrRenderComponent(Input, { changeAnswer: chaneAnswer }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuiz).questionType == "choice") {
        _push(ssrRenderComponent(_sfc_main$b, { changeAnswer: chaneAnswer }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuiz).questionType == "numbers") {
        _push(ssrRenderComponent(Numbers, { changeAnswer: chaneAnswer }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentQuiz).questionType == "directions") {
        _push(ssrRenderComponent(Directions, { changeAnswer: chaneAnswer }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="normal-footer" data-v-1d5026dd><button type="button" class="btn-push" data-v-1d5026dd>정답 제출</button></div></div>`);
      if (unref(isShowingFeedbackModal)) {
        _push(`<div class="feedbackModal" data-v-1d5026dd>`);
        if (unref(isCorrect)) {
          _push(`<div class="modal-content" data-v-1d5026dd><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-1d5026dd><h2 class="modal-title font-jalnan" data-v-1d5026dd>정답!</h2><div data-v-1d5026dd><p class="answer-count" data-v-1d5026dd><span class="green" data-v-1d5026dd>${ssrInterpolate(unref(solvedNormalQuizCount))}</span> / ${ssrInterpolate(unref(wholeQuizCount))}</p></div></div>`);
        } else if (!unref(isCorrect)) {
          _push(`<div class="modal-content" data-v-1d5026dd><img${ssrRenderAttr("src", _imports_3$1)} alt="" data-v-1d5026dd><h2 class="modal-title font-jalnan" data-v-1d5026dd>오답!</h2><div class="box-answer" data-v-1d5026dd><p class="modal-text" data-v-1d5026dd><strong class="red" data-v-1d5026dd>2</strong>초 후 다시 도전할 수 있습니다.</p><p class="modal-notice" data-v-1d5026dd>(카운트가 끝나면 자동으로 닫힙니다.)</p></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_1d5026dd_lang = "";
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/NormalQuiz/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const NormalQuiz = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-1d5026dd"]]);
const _imports_0$3 = "" + __buildAssetsURL("quiz1.aa9dfd34.jpg");
const _imports_1$1 = "" + __buildAssetsURL("icn-round-x.b302cef9.svg");
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "BossQuiz1",
  __ssrInlineRender: true,
  props: {
    closeBossQuiz: { type: Function }
  },
  setup(__props) {
    const stateStore = useStateStore();
    const {
      wholeBossQuizCount,
      currentBossQuizNo,
      earnedBossHintCount,
      usedBossHintCount,
      isUsedFirstBossHint,
      isUsedSecondBossHint
    } = storeToRefs(stateStore);
    const hintboxToggle = ref(false);
    const hintNo = ref(0);
    const isShowHint = ref(false);
    const isShowFeedback = ref(false);
    const showingFeedbackType = ref("");
    const inputtedAnswer = ref("");
    const isTeamLeader = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boss-quiz" }, _attrs))}><div class="boss-header"><div class="box-text"><h2 class="boss-title font-jalnan">추론문제</h2><span class="current-quiz">${ssrInterpolate(unref(currentBossQuizNo) + 1)} / ${ssrInterpolate(unref(wholeBossQuizCount))}</span></div><div class="box-hint"><button class="btn btn-dropdown font-jalnan"> 힌트 <i class="icon-chevron_right"></i></button><ul class="${ssrRenderClass([{ "show": unref(hintboxToggle) }, "hint-list"])}"><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedFirstBossHint) }, "btn-hint btn-first-hint"])}"${ssrIncludeBooleanAttr(false) ? " disabled" : ""}>`);
      if (unref(isUsedFirstBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-hint"></i>`);
      }
      _push(` 1차 힌트 </button></li><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedSecondBossHint) }, "btn-hint btn-second-hint"])}"${ssrIncludeBooleanAttr(!unref(isUsedFirstBossHint)) ? " disabled" : ""}>`);
      if (unref(isUsedSecondBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-airplane"></i>`);
      }
      _push(` 2차 힌트 </button></li></ul></div></div><div class="boss-content"><div class="quiz-content pt-0"><p class="gray-box">우리 반 출석부이다.<br>근데 친구들 사이에 악마가 껴 있잖아??<br>도대체 무슨 생각이지?! </p></div><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="quiz-img"> 정답은 &#39;87&#39;입니다. </div>`);
      if (unref(isTeamLeader)) {
        _push(`<div class="boss-type-input"><input type="text" name="" id="" class="input-text" placeholder="정답을 입력해 주세요."${ssrRenderAttr("value", unref(inputtedAnswer))}></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isTeamLeader)) {
        _push(`<div class="box-custom-btn"><button type="button" class="btn-push">제출하기</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowHint)) {
        _push(`<div class="boss-hint-modal"><div class="wrap-hint"><button type="button" class="btn btn-close"><i class="icon-xmark"></i></button><p class="hint-title font-jalnan">${ssrInterpolate(unref(hintNo))}차 힌트 </p>`);
        if (unref(hintNo) === 1) {
          _push(`<div>`);
          if (unref(isUsedFirstBossHint)) {
            _push(`<div><div class="hint-content open"><div class="white-box"><p class="hint-message">악마는 뭐든지 <span class="red">거꾸로</span><br>하는 것을 좋아한다.</p></div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">확인</button></div></div>`);
          } else {
            _push(`<div><div class="hint-content"><p class="require-hint font-jalnan"><i class="icon-hint"></i><img${ssrRenderAttr("src", _imports_1$1)} alt="">1 </p><p class="hint-count font-jalnan">팀 보유 열쇠: ${ssrInterpolate(unref(earnedBossHintCount) - unref(usedBossHintCount))}</p><p class="hint-text"> 열쇠 1개를 사용하여<br>1차 힌트를 보겠습니까? </p></div><div class="hint-footer"><button type="button" class="btn-push gray">취소</button><button type="button" class="btn-push">사용</button></div></div>`);
          }
          _push(`</div>`);
        } else if (unref(hintNo) === 2) {
          _push(`<div><div><div class="hint-content open"><div class="white-box"><p class="hint-message">출석부를 거꾸로 뒤집어 보면<br>시작되는 번호 순서를 알 수 있다.</p></div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">확인</button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowFeedback)) {
        _push(`<div class="feedbackModal">`);
        if (unref(showingFeedbackType) === "correct") {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_2)} alt=""><h2 class="modal-title font-jalnan">정답!</h2><div class="box-answer"><p class="modal-text font-weight-bold">87</p></div><p class="box-message white-box">별로 어렵지 않네!<br>이정도면 껌이지!</p><div class="box-btn"><button type="button" class="btn-push">다음</button></div></div>`);
        } else {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><h2 class="modal-title font-jalnan">오답!</h2><div class="box-answer"><p class="modal-text">다시 한 번 신중하게 풀어보자.<br>힌트를 사용해볼까?</p></div><div class="box-btn"><button type="button" class="btn-push">계속</button></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/BossQuiz/BossQuiz1.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _imports_0$2 = "" + __buildAssetsURL("quiz2.18d375a0.jpg");
const _imports_1 = "" + __buildAssetsURL("hint2-1.c7bb117b.jpg");
const _imports_3 = "" + __buildAssetsURL("hint2-2.f590c828.jpg");
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BossQuiz2",
  __ssrInlineRender: true,
  props: {
    closeBossQuiz: { type: Function }
  },
  setup(__props) {
    const stateStore = useStateStore();
    const {
      wholeBossQuizCount,
      currentBossQuizNo,
      earnedBossHintCount,
      usedBossHintCount,
      isUsedFirstBossHint,
      isUsedSecondBossHint
    } = storeToRefs(stateStore);
    const hintboxToggle = ref(false);
    const hintNo = ref(0);
    const isShowHint = ref(false);
    const isShowFeedback = ref(false);
    const showingFeedbackType = ref("");
    const inputtedAnswer = ref("");
    const isTeamLeader = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boss-quiz" }, _attrs))}><div class="boss-header"><div class="box-text"><h2 class="boss-title font-jalnan">추론문제</h2><span class="current-quiz">${ssrInterpolate(unref(currentBossQuizNo) + 1)} / ${ssrInterpolate(unref(wholeBossQuizCount))}</span></div><div class="box-hint"><button class="btn btn-dropdown font-jalnan"> 힌트 <i class="icon-chevron_right"></i></button><ul class="${ssrRenderClass([{ "show": unref(hintboxToggle) }, "hint-list"])}"><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedFirstBossHint) }, "btn-hint btn-first-hint"])}"${ssrIncludeBooleanAttr(false) ? " disabled" : ""}>`);
      if (unref(isUsedFirstBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-hint"></i>`);
      }
      _push(` 1차 힌트 </button></li><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedSecondBossHint) }, "btn-hint btn-second-hint"])}"${ssrIncludeBooleanAttr(!unref(isUsedFirstBossHint)) ? " disabled" : ""}>`);
      if (unref(isUsedSecondBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-airplane"></i>`);
      }
      _push(` 2차 힌트 </button></li></ul></div></div><div class="boss-content"><div class="quiz-content pt-0"><p class="gray-box">멀리서 악마가 흥얼거리는 소리가 들린다.<br>이 못된 녀석... 우리를 비웃는건지... 노래를 계속 들어보니 뭔가를 얘기하는 것 같은데...?</p></div><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="quiz-img"> 정답은 &#39;foolish&#39;입니다. </div>`);
      if (unref(isTeamLeader)) {
        _push(`<div class="boss-type-input"><input type="text" name="" id="" class="input-text" placeholder="정답을 입력해 주세요."${ssrRenderAttr("value", unref(inputtedAnswer))}></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isTeamLeader)) {
        _push(`<div class="box-custom-btn"><button type="button" class="btn-push">제출하기</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowHint)) {
        _push(`<div class="boss-hint-modal"><div class="wrap-hint"><button class="btn btn-close"><i class="icon-xmark"></i></button><p class="hint-title font-jalnan">${ssrInterpolate(unref(hintNo))}차 힌트 </p>`);
        if (unref(hintNo) === 1) {
          _push(`<div>`);
          if (unref(isUsedFirstBossHint)) {
            _push(`<div><div class="hint-content open"><img${ssrRenderAttr("src", _imports_1)} alt="" class="hint-img"><div class="hint-message"><span class="red">무지개 색의 순서</span>가 뭐였더라...?</div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">확인</button></div></div>`);
          } else {
            _push(`<div><div class="hint-content"><p class="require-hint font-jalnan"><i class="icon-hint"></i><img${ssrRenderAttr("src", _imports_1$1)} alt="">1 </p><p class="hint-count font-jalnan">팀 보유 열쇠: ${ssrInterpolate(unref(earnedBossHintCount) - unref(usedBossHintCount))}</p><p class="hint-text"> 열쇠 1개를 사용하여<br>1차 힌트를 보겠습니까? </p></div><div class="hint-footer"><button type="button" class="btn-push gray">취소</button><button type="button" class="btn-push">사용</button></div></div>`);
          }
          _push(`</div>`);
        } else if (unref(hintNo) === 2) {
          _push(`<div><div><div class="hint-content open"><img${ssrRenderAttr("src", _imports_3)} alt="" class="hint-img"><div class="hint-message">무지개색상의 순서대로<br>알파벳을 적어보자.</div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">확인</button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowFeedback)) {
        _push(`<div class="feedbackModal">`);
        if (unref(showingFeedbackType) === "correct") {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_2)} alt=""><h2 class="modal-title font-jalnan">정답!</h2><div class="box-answer"><p class="modal-text font-weight-bold">foolish</p></div><p class="box-message">바보같다고??<br>절대 가만두지 않겠어!</p><div class="box-btn"><button type="button" class="btn-push">다음</button></div></div>`);
        } else {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><h2 class="modal-title font-jalnan">오답!</h2><div class="box-answer"><p class="modal-text">다시 한 번 신중하게 풀어보자.<br>힌트를 사용해볼까?</p></div><div class="box-btn"><button type="button" class="btn-push">계속</button></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/BossQuiz/BossQuiz2.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$1 = "" + __buildAssetsURL("quiz3.f35390fb.jpg");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "BossQuiz3",
  __ssrInlineRender: true,
  props: {
    closeBossQuiz: { type: Function }
  },
  setup(__props) {
    const stateStore = useStateStore();
    const {
      wholeBossQuizCount,
      currentBossQuizNo,
      earnedBossHintCount,
      usedBossHintCount,
      isUsedFirstBossHint,
      isUsedSecondBossHint
    } = storeToRefs(stateStore);
    const hintboxToggle = ref(false);
    const hintNo = ref(0);
    const isShowHint = ref(false);
    const isShowFeedback = ref(false);
    const showingFeedbackType = ref("");
    const inputtedAnswer = ref("");
    const isTeamLeader = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boss-quiz" }, _attrs))}><div class="boss-header"><div class="box-text"><h2 class="boss-title font-jalnan">추론문제</h2><span class="current-quiz">${ssrInterpolate(unref(currentBossQuizNo) + 1)} / ${ssrInterpolate(unref(wholeBossQuizCount))}</span></div><div class="box-hint"><button class="btn btn-dropdown font-jalnan"> 힌트 <i class="icon-chevron_right"></i></button><ul class="${ssrRenderClass([{ "show": unref(hintboxToggle) }, "hint-list"])}"><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedFirstBossHint) }, "btn-hint btn-first-hint"])}"${ssrIncludeBooleanAttr(false) ? " disabled" : ""}>`);
      if (unref(isUsedFirstBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-hint"></i>`);
      }
      _push(` 1차 힌트 </button></li><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedSecondBossHint) }, "btn-hint btn-second-hint"])}"${ssrIncludeBooleanAttr(!unref(isUsedFirstBossHint)) ? " disabled" : ""}>`);
      if (unref(isUsedSecondBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-airplane"></i>`);
      }
      _push(` 2차 힌트 </button></li></ul></div></div><div class="boss-content"><div class="quiz-content pt-0"><p class="gray-box">&#39;띵동~&#39;<br>앗? 선생님의 오래된 핸드폰으로<br>악마가 문자를 보냈다. 무슨 말을 하는 걸까??</p></div><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="quiz-img"> 정답은 &#39;나잡아봐라&#39;입니다. </div>`);
      if (unref(isTeamLeader)) {
        _push(`<div class="boss-type-input"><input type="text" name="" id="" class="input-text" placeholder="정답을 입력해 주세요."${ssrRenderAttr("value", unref(inputtedAnswer))}></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isTeamLeader)) {
        _push(`<div class="box-custom-btn"><button type="button" class="btn-push">제출하기</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowHint)) {
        _push(`<div class="boss-hint-modal"><div class="wrap-hint"><button class="btn btn-close"><i class="icon-xmark"></i></button><p class="hint-title font-jalnan">${ssrInterpolate(unref(hintNo))}차 힌트 </p>`);
        if (unref(hintNo) === 1) {
          _push(`<div>`);
          if (unref(isUsedFirstBossHint)) {
            _push(`<div><div class="hint-content open"><div class="white-box"><p class="hint-message">핸드폰의 자판을 보면<br><span class="red">숫자마다 한글</span>이 있어!</p></div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">확인</button></div></div>`);
          } else {
            _push(`<div><div class="hint-content"><p class="require-hint font-jalnan"><i class="icon-hint"></i><img${ssrRenderAttr("src", _imports_1$1)} alt="">1 </p><p class="hint-count font-jalnan">팀 보유 열쇠: ${ssrInterpolate(unref(earnedBossHintCount) - unref(usedBossHintCount))}</p><p class="hint-text"> 열쇠 1개를 사용하여<br>1차 힌트를 보겠습니까? </p></div><div class="hint-footer"><button type="button" class="btn-push gray">취소</button><button type="button" class="btn-push">사용</button></div></div>`);
          }
          _push(`</div>`);
        } else if (unref(hintNo) === 2) {
          _push(`<div><div><div class="hint-content open"><div class="hint-message white-box">문제에 있는 특수 문자와<br>자음, 모음을 보고<br>문장을 만들어 보자.</div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">확인</button></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowFeedback)) {
        _push(`<div class="feedbackModal">`);
        if (unref(showingFeedbackType) === "correct") {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_2)} alt=""><h2 class="modal-title font-jalnan">정답!</h2><div class="box-answer"><p class="modal-text font-weight-bold">나잡아봐라</p></div><div class="box-btn"><button type="button" class="btn-push">다음</button></div></div>`);
        } else {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><h2 class="modal-title font-jalnan">오답!</h2><div class="box-answer"><p class="modal-text">다시 한 번 신중하게 풀어보자.<br>힌트를 사용해볼까?</p></div><div class="box-btn"><button type="button" class="btn-push">계속</button></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/BossQuiz/BossQuiz3.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    closeBossQuiz: { type: Function }
  },
  setup(__props) {
    const stateStore = useStateStore();
    const {
      wholeQuizCount,
      solvedNormalQuizCount,
      progress,
      earnedBossHintCount,
      usedBossHintCount,
      myNormalQuizList,
      currentBossQuizNo
    } = storeToRefs(stateStore);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boss" }, _attrs))} data-v-91b1f57b><div class="boss-header" data-v-91b1f57b><button class="btn btn-close" data-v-91b1f57b><i class="icon-chevron_right" data-v-91b1f57b></i><span data-v-91b1f57b>메인</span></button><div class="box-hint" data-v-91b1f57b><p class="font-jalnan hint-count" data-v-91b1f57b>${ssrInterpolate(unref(earnedBossHintCount) - unref(usedBossHintCount))}</p></div></div>`);
      if (unref(currentBossQuizNo) === 0) {
        _push(ssrRenderComponent(_sfc_main$7, { "close-boss-quiz": _ctx.closeBossQuiz }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentBossQuizNo) === 1) {
        _push(ssrRenderComponent(_sfc_main$6, { "close-boss-quiz": _ctx.closeBossQuiz }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(currentBossQuizNo) === 2) {
        _push(ssrRenderComponent(_sfc_main$5, { "close-boss-quiz": _ctx.closeBossQuiz }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_91b1f57b_lang = "";
const index_vue_vue_type_style_index_1_lang$1 = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/BossQuiz/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BossQuiz = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-91b1f57b"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isNormalQuiz = ref(false);
    const isBossQuiz = ref(false);
    const handleClickOpenNormalQuiz = () => {
      isNormalQuiz.value = true;
    };
    const handleClickCloseNormalQuiz = () => {
      isNormalQuiz.value = false;
    };
    const handleClickOpenBossQuiz = () => {
      isBossQuiz.value = true;
    };
    const handleClickCloseBossQuiz = () => {
      isBossQuiz.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-wrapper" }, _attrs))} data-v-1e15caeb>`);
      _push(ssrRenderComponent(GameMain, {
        "open-normal-quiz": handleClickOpenNormalQuiz,
        "open-boss-quiz": handleClickOpenBossQuiz
      }, null, _parent));
      if (unref(isNormalQuiz)) {
        _push(ssrRenderComponent(NormalQuiz, { "close-normal-quiz": handleClickCloseNormalQuiz }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isBossQuiz)) {
        _push(ssrRenderComponent(BossQuiz, { "close-boss-quiz": handleClickCloseBossQuiz }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_1e15caeb_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Game/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Game = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1e15caeb"]]);
const _imports_0 = "" + __buildAssetsURL("trophy.e17f1a17.svg");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const stateStore = useStateStore();
    storeToRefs(stateStore);
    const gameOverTime = ref("");
    const fiveRankedTeams = ref(
      [
        {
          teamNumber: 1,
          teamTitle: "A",
          rank: 1,
          isCleared: true,
          clearedTimeText: gameOverTime
        },
        {
          teamNumber: 2,
          teamTitle: "B",
          rank: void 0,
          isCleared: false,
          clearedTimeText: "00:00"
        },
        {
          teamNumber: 3,
          teamTitle: "C",
          rank: void 0,
          isCleared: false,
          clearedTimeText: "00:00"
        },
        {
          teamNumber: 4,
          teamTitle: "D",
          rank: void 0,
          isCleared: false,
          clearedTimeText: "00:00"
        },
        {
          teamNumber: 5,
          teamTitle: "E",
          rank: void 0,
          isCleared: false,
          clearedTimeText: "00:00"
        }
      ]
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "result" }, _attrs))} data-v-4a153aab><div class="top" data-v-4a153aab><h1 class="title" data-v-4a153aab>최종 결과</h1><img class="img"${ssrRenderAttr("src", _imports_0)} alt="트로피" data-v-4a153aab></div><div class="main" data-v-4a153aab><div class="card" data-v-4a153aab><div class="card-header" data-v-4a153aab><h2 class="card-title" data-v-4a153aab>우리 팀</h2></div><div class="card-body" data-v-4a153aab><div class="team-grid" data-v-4a153aab><div class="bedge" data-v-4a153aab><i class="icon icon-trophy" data-v-4a153aab></i></div><div class="rank" data-v-4a153aab>1위</div><div class="divide" data-v-4a153aab><svg xmlns="http://www.w3.org/2000/svg" width="32" height="4" data-v-4a153aab><path d="M28 2a2 2 0 112 2 2 2 0 01-2-2zM14 2a2 2 0 112 2 2 2 0 01-2-2zM0 2a2 2 0 112 2 2 2 0 01-2-2z" fill="currentColor" data-v-4a153aab></path></svg></div><div class="name" data-v-4a153aab>A</div><div class="success" data-v-4a153aab><span class="text-green" data-v-4a153aab>성공</span><span class="text-gray" data-v-4a153aab>(${ssrInterpolate(unref(gameOverTime))})</span></div></div></div></div><div class="card" data-v-4a153aab><div class="card-header" data-v-4a153aab><h2 class="card-title team-title-grid" data-v-4a153aab><span data-v-4a153aab></span><span data-v-4a153aab>순위</span><span data-v-4a153aab></span><span data-v-4a153aab>팀</span><span data-v-4a153aab>탈출</span></h2></div><div class="card-body" data-v-4a153aab><!--[-->`);
      ssrRenderList(unref(fiveRankedTeams), (team) => {
        _push(`<div class="team-grid" data-v-4a153aab><div class="bedge" data-v-4a153aab>`);
        if (team.rank === 1) {
          _push(`<i class="icon icon-trophy" data-v-4a153aab></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="rank" data-v-4a153aab>${ssrInterpolate(team.rank ? team.rank + "위" : "-")}</div><div class="divide gray" data-v-4a153aab><svg xmlns="http://www.w3.org/2000/svg" width="32" height="4" data-v-4a153aab><path d="M28 2a2 2 0 112 2 2 2 0 01-2-2zM14 2a2 2 0 112 2 2 2 0 01-2-2zM0 2a2 2 0 112 2 2 2 0 01-2-2z" fill="currentColor" data-v-4a153aab></path></svg></div><div class="name" data-v-4a153aab>${ssrInterpolate(team.teamTitle)}</div><div class="success" data-v-4a153aab>`);
        if (team.isCleared) {
          _push(`<!--[--><span class="text-green" data-v-4a153aab>성공</span><span class="text-gray" data-v-4a153aab>(${ssrInterpolate(team.clearedTimeText)})</span><!--]-->`);
        } else {
          _push(`<span class="text-orange" data-v-4a153aab>실패</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="row cap" data-v-4a153aab><div class="col cap-title" data-v-4a153aab>종료 시간</div><div class="col cap-body" data-v-4a153aab><i class="icon icon-timer" data-v-4a153aab></i> ${ssrInterpolate(unref(gameOverTime))}</div></div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_4a153aab_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Result/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Result = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4a153aab"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const stateStore = useStateStore();
    const {
      gameState
    } = storeToRefs(stateStore);
    const vh = ref(window.innerHeight);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "user",
        style: {
          height: unref(vh) + "px"
        }
      }, _attrs))} data-v-e7120372>`);
      if (unref(gameState) === "opening") {
        _push(ssrRenderComponent(Loading, null, null, _parent));
      } else if (unref(gameState) === "playing") {
        _push(ssrRenderComponent(Game, null, null, _parent));
      } else if (unref(gameState) === "complete") {
        _push(ssrRenderComponent(Result, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_e7120372_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/User/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const User = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e7120372"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useStateStore();
    const isStarted = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrap theme-5" }, _attrs))} data-v-c1f74fee>`);
      if (!unref(isStarted)) {
        _push(`<div class="intro" data-v-c1f74fee><button class="btn-push" data-v-c1f74fee>sdasdasd</button></div>`);
      } else {
        _push(ssrRenderComponent(User, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_c1f74fee_lang = "";
const index_vue_vue_type_style_index_1_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/qrquiz/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1f74fee"]]);
export {
  index as default
};
//# sourceMappingURL=index-6aa2eebb.js.map
