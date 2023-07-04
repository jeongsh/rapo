import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { ref, useSSRContext, defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { d as defineStore, _ as _export_sfc, s as storeToRefs } from '../server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

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
      title: "\uC815\uB2F5\uC740 o\uC785\uB2C8\uB2E4.",
      questionType: "ox",
      answer: "o"
    },
    {
      quizNo: 2,
      isSolved: false,
      title: "\uC815\uB2F5\uC740 \uAF2C\uBD81\uAF2C\uBD81 \uC785\uB2C8\uB2E4.",
      questionType: "input",
      answer: "\uAF2C\uBD81\uAF2C\uBD81"
    },
    {
      quizNo: 3,
      isSolved: false,
      title: "\uC815\uB2F5\uC740 3\uBC88\uC785\uB2C8\uB2E4.",
      questionType: "choice",
      answer: 3
    },
    {
      quizNo: 4,
      isSolved: false,
      title: "\uC815\uB2F5\uC740 1234\uC785\uB2C8\uB2E4.",
      questionType: "numbers",
      answer: "1234"
    },
    {
      quizNo: 5,
      isSolved: false,
      title: "\uC815\uB2F5\uC740 \uC67C\uCABD \uC704 \uC624\uB978\uCABD \uC544\uB798\uC785\uB2C8\uB2E4.",
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
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Loading/index.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-ec8e8ebf"]]);
const _imports_0$b = "" + buildAssetsURL("icon-team-member.d63be873.svg");
const _imports_0$a = "" + buildAssetsURL("help1.dbc57744.svg");
const _sfc_main$o = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "help-content" }, _attrs))} data-v-d661afc0><div class="box-method" data-v-d661afc0><div class="method-header" data-v-d661afc0><div class="step" data-v-d661afc0><p class="font-jalnan" data-v-d661afc0>\uBC29\uBC95 1</p></div><p class="method-title" data-v-d661afc0>QR \uC2A4\uCE94</p></div><img class="m-auto d-block"${ssrRenderAttr("src", _imports_0$a)} alt="" data-v-d661afc0></div><div class="text-area" data-v-d661afc0><p class="help-text" data-v-d661afc0> \uAC8C\uC784\uC774 \uC2DC\uC791\uB418\uBA74 <span class="red" data-v-d661afc0>\u2018QR \uC2A4\uCE94\u2019</span>\uC744 \uC0AC\uC6A9\uD574<br data-v-d661afc0>\uACF3\uACF3\uC5D0 \uC788\uB294 QR\uC744 \uC778\uC2DD\uD558\uC5EC \uBB38\uC81C\uB97C \uD489\uB2C8\uB2E4. </p><p class="help-text" data-v-d661afc0>\uD300\uC6D0 \uBAA8\uB450 \uBB38\uC81C\uB97C \uD480\uC5B4 \uCD5C\uB300\uD55C \uB9CE\uC740 \uD78C\uD2B8\uB97C \uC5BB\uACE0<br data-v-d661afc0>\u2018\uCD94\uB860 \uBB38\uC81C \uBC29\u2019\uAC8C\uC774\uC9C0\uB97C \uBAA8\uB450 \uCC44\uC6C1\uB2C8\uB2E4.</p><p class="help-text" data-v-d661afc0>\u2018\uBC29\uC7A5\u2019\uC774 \uD655\uC778 \uD6C4 \uBB38\uC744 \uC5F4\uC5B4\uC8FC\uBA74 \uC5F4\uB9B0 \uBB38\uC744 \uD074\uB9AD\uD574 \uB2E4\uC74C \uB2E8\uACC4\uB85C \uB118\uC5B4\uAC11\uB2C8\uB2E4!</p></div></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Modals/Help1.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Help1 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$8], ["__scopeId", "data-v-d661afc0"]]);
const _imports_0$9 = "" + buildAssetsURL("help2.68cba1ce.svg");
const _sfc_main$n = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "help-content" }, _attrs))} data-v-b23cf784><div class="box-method" data-v-b23cf784><div class="method-header" data-v-b23cf784><div class="step" data-v-b23cf784><p class="font-jalnan" data-v-b23cf784>\uBC29\uBC95 2</p></div><p class="method-title" data-v-b23cf784>\uCD94\uB860 \uBB38\uC81C \uBC29</p></div><img class="m-auto d-block"${ssrRenderAttr("src", _imports_0$9)} alt="" data-v-b23cf784></div><div class="text-area" data-v-b23cf784><p class="help-text" data-v-b23cf784> \uCD94\uB860 \uBB38\uC81C \uBC29\uC5D0\uB294 \uC2A4\uD1A0\uB9AC\uC5D0 \uB9DE\uB294 \uB2E4\uC591\uD55C \uCD94\uB860 \uBB38\uC81C\uB4E4\uC774 \uB098\uD0C0\uB098\uB294\uB370\uC694. </p><p class="help-text" data-v-b23cf784> \uC774 \uB2E8\uACC4\uC5D0\uC11C\uB294 \uC624\uC9C1 <span class="red" data-v-b23cf784>\u2018\uD300\uC7A5\u2019</span>\uB9CC \uC815\uB2F5 \uC785\uB825\uACFC \uD78C\uD2B8 \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD558\uAE30 \uB54C\uBB38\uC5D0 \uB354\uC6B1 \uD300\uC6CC\uD06C\uB97C \uBC1C\uD718\uD574 \uBB38\uC81C\uB97C \uD574\uACB0\uD574\uC57C \uD569\uB2C8\uB2E4! </p><p class="help-text" data-v-b23cf784>\uBAA8\uB4E0 \uCD94\uB860 \uBB38\uC81C\uB97C \uD480\uACE0 \uD14C\uB9C8\uAC00 \uB05D\uB098\uBA74 <span class="red" data-v-b23cf784>\u2018\uD0C8\uCD9C!\u2019</span>\uBC84\uD2BC\uC744 \uB20C\uB7EC \uBC29\uC744 \uD0C8\uCD9C\uD569\uB2C8\uB2E4!</p></div></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Modals/Help2.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const Help2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$7], ["__scopeId", "data-v-b23cf784"]]);
const _imports_0$8 = "" + buildAssetsURL("help3.2b50d336.svg");
const _sfc_main$m = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "help-content" }, _attrs))} data-v-66b556e6><div class="box-method" data-v-66b556e6><div class="method-header" data-v-66b556e6><div class="step" data-v-66b556e6><p class="font-jalnan" data-v-66b556e6>\uBC29\uBC95 3</p></div><p class="method-title" data-v-66b556e6>\uC5F4\uC1E0\uC640 \uD78C\uD2B8</p></div><img class="m-auto d-block"${ssrRenderAttr("src", _imports_0$8)} alt="" data-v-66b556e6></div><div class="text-area" data-v-66b556e6><div class="round-box yellow" data-v-66b556e6> \uC5F4\uC1E0 </div><p class="help-text" data-v-66b556e6> \uD300\uC774 \uBB38\uC81C\uB97C \uB9CE\uC774 \uD480\uC5B4\uC57C \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br data-v-66b556e6>\uBD80\uC871\uD558\uBA74 <span class="red" data-v-66b556e6>\uC77C\uBC18 \uBB38\uC81C</span>\uB97C \uB354 \uD480\uC5B4\uBCF4\uC138\uC694! </p><div class="round-box gray" data-v-66b556e6> 1\uCC28 \uD78C\uD2B8 </div><p class="help-text" data-v-66b556e6> \uBCF4\uC720\uD55C <span class="red" data-v-66b556e6>\uC5F4\uC1E0</span>\uB97C \uC0AC\uC6A9\uD558\uC5EC \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. </p><div class="round-box dark" data-v-66b556e6> 2\uCC28 \uD78C\uD2B8 </div><p class="help-text" data-v-66b556e6> 1\uCC28 \uD78C\uD2B8 \uC0AC\uC6A9 \uD6C4 \uC694\uCCAD\uC774 \uAC00\uB2A5\uD569\uB2C8\uB2E4. <span class="red" data-v-66b556e6>\u2018\uBC29\uC7A5\u2019</span>\uC774 \uC218\uB77D\uD558\uBA74 \uD78C\uD2B8\uB97C \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uBB3C\uB860! \uBC29\uC7A5\uC774 \uC21C\uC21C\uD788 \uC8FC\uC9C0 \uC54A\uACA0\uC9C0\uC694? </p><p class="caution" data-v-66b556e6> \uBAA9\uD45C\uB294 \uD0C8\uCD9C! \uD78C\uD2B8\uB97C \uC544\uB07C\uC9C0 \uB9C8\uC138\uC694! </p></div></div>`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "modal modal-help" }, _attrs))} data-v-f691eca5><div class="modal-header" data-v-f691eca5><h2 class="modal-title font-jalnan" data-v-f691eca5>\uAC8C\uC784\uBC29\uBC95</h2><button class="btn-close" data-v-f691eca5><i class="icon-xmark" data-v-f691eca5></i></button></div>`);
      if (unref(helpNo) === 1) {
        _push(ssrRenderComponent(Help1, null, null, _parent));
      } else if (unref(helpNo) === 2) {
        _push(ssrRenderComponent(Help2, null, null, _parent));
      } else if (unref(helpNo) === 3) {
        _push(ssrRenderComponent(Help3, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="modal-footer" data-v-f691eca5><p class="page-number" data-v-f691eca5>${ssrInterpolate(unref(helpNo))} / 3 </p><div class="box-custom-btn" data-v-f691eca5><button class="btn-push"${ssrIncludeBooleanAttr(unref(helpNo) === 1) ? " disabled" : ""} data-v-f691eca5> \uC774\uC804 </button><button class="btn-push"${ssrIncludeBooleanAttr(unref(helpNo) === 3) ? " disabled" : ""} data-v-f691eca5> \uB2E4\uC74C </button></div></div></div>`);
    };
  }
});
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user-main" }, _attrs))} data-v-9fc755dd><header class="header" data-v-9fc755dd><div class="box-nickname" data-v-9fc755dd><p class="my-nickname font-jalnan" data-v-9fc755dd>\uC0C1\uD6C8\uC774</p><span class="my-role reader" data-v-9fc755dd>\uD300\uC7A5</span></div><button class="btn-help font-jalnan" data-v-9fc755dd>?</button></header><div class="body" data-v-9fc755dd><div class="${ssrRenderClass([{ open: Math.floor(unref(progress) * 100) >= 50 }, "room-door"])}" data-v-9fc755dd>`);
      if (Math.floor(unref(progress) * 100) >= 50) {
        _push(`<div class="box-message" data-v-9fc755dd><p class="message-enterable" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-9fc755dd>\uBB38\uC774 \uC5F4\uB838\uC2B5\uB2C8\uB2E4. <br data-v-9fc755dd>\uD074\uB9AD\uD558\uC5EC \uCD94\uB860\uBB38\uC81C\uC5D0 \uC785\uC7A5\uD574\uC8FC\uC138\uC694</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="progress" data-v-9fc755dd><div class="progress-box" data-v-9fc755dd><p class="progress-title font-jalnan" data-v-9fc755dd>\uCD94\uB860 \uBB38\uC81C \uBC29</p><span class="progress-num" data-v-9fc755dd>${ssrInterpolate(Math.floor(unref(progress) * 100))} / 100%</span></div><div class="progress-bar" data-v-9fc755dd><div class="progress-current" style="${ssrRenderStyle({ width: unref(progress) * 100 + "%" })}" data-v-9fc755dd></div></div></div><div class="status" data-v-9fc755dd><div class="status-header" data-v-9fc755dd><p class="team-title font-jalnan" data-v-9fc755dd>A\uD300 \uC815\uBCF4 <span class="team-count" data-v-9fc755dd>1\uBA85</span></p><button class="btn-member" data-v-9fc755dd><img class="pr-1"${ssrRenderAttr("src", _imports_0$b)} alt="" data-v-9fc755dd><i class="icon-chevron_right" data-v-9fc755dd></i></button></div><div class="wrap-count" data-v-9fc755dd><p class="key-title font-jalnan" data-v-9fc755dd><i class="icon icon-hint" data-v-9fc755dd></i> \uD300 \uC5F4\uC1E0 \uD604\uD669 </p><div class="box-key" data-v-9fc755dd><div class="key-header" data-v-9fc755dd><p class="font-jalnan" data-v-9fc755dd>\uBCF4\uC720</p><p class="font-jalnan" data-v-9fc755dd>\uC0AC\uC6A9</p><p class="font-jalnan" data-v-9fc755dd>\uC804\uCCB4</p></div><div class="key-body" data-v-9fc755dd><p class="key-count" data-v-9fc755dd>${ssrInterpolate(unref(earnedBossHintCount))}</p><p class="key-count" data-v-9fc755dd>${ssrInterpolate(unref(usedBossHintCount))}</p><p class="key-count" data-v-9fc755dd>3</p></div></div><div class="box-solved" data-v-9fc755dd><p class="solved-title font-jalnan" data-v-9fc755dd>\uB0B4\uAC00 \uD47C \uBB38\uC81C</p><p class="solved-count" data-v-9fc755dd><span class="green" data-v-9fc755dd>${ssrInterpolate(unref(solvedNormalQuizCount))}</span>\xA0/ ${ssrInterpolate(unref(wholeQuizCount))}</p><button class="btn-my-solved" data-v-9fc755dd><i class="icon-chevron_right" data-v-9fc755dd></i></button></div></div><div class="text-center" data-v-9fc755dd><button type="button" class="btn-push" data-v-9fc755dd>\uBB38\uC81C\uD480\uAE30</button></div></div></div>`);
      if (unref(isHelpOpen)) {
        _push(ssrRenderComponent(helpModal, { onClose: handleClickCloseHelpModal }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowMyTeamMembers)) {
        _push(`<div class="modal modal-member" data-v-9fc755dd><div class="content-area" data-v-9fc755dd><div class="modal-header" data-v-9fc755dd><h2 class="modal-title font-jalnan" data-v-9fc755dd>\uD300\uC6D0 \uBCF4\uAE30</h2><button class="btn-close" data-v-9fc755dd><i class="icon-xmark" data-v-9fc755dd></i></button></div><div class="modal-body" data-v-9fc755dd><ul class="list-member" data-v-9fc755dd><li class="item-member reader" data-v-9fc755dd><p class="member-name" data-v-9fc755dd> \uC0C1\uD6C8\uC774 <span class="member-score" data-v-9fc755dd> (${ssrInterpolate(unref(solvedNormalQuizCount))}/${ssrInterpolate(unref(wholeQuizCount))}) </span></p><span class="member-role reader" data-v-9fc755dd> \uD300\uC7A5 </span></li></ul></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowMySolvedQuizzes)) {
        _push(`<div class="modal-solved modal" data-v-9fc755dd><div class="content-area" data-v-9fc755dd><div class="modal-header" data-v-9fc755dd><h2 class="modal-title font-jalnan" data-v-9fc755dd>\uB0B4\uAC00 \uD47C \uBB38\uC81C</h2><button class="btn-close" data-v-9fc755dd><i class="icon-xmark" data-v-9fc755dd></i></button></div><div class="modal-body" data-v-9fc755dd><ul class="list-quiz" data-v-9fc755dd><!--[-->`);
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
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/GameMain/index.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const GameMain = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-9fc755dd"]]);
const _imports_2 = "data:image/png;base64,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";
const _imports_3$1 = "data:image/png;base64,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";
const _imports_0$7 = "" + buildAssetsURL("quiz1.2d38e07f.jpeg");
const _sfc_main$j = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-9ac0f8df><img${ssrRenderAttr("src", _imports_0$7)} alt="" class="type-image" data-v-9ac0f8df><div class="type-text" data-v-9ac0f8df> \uC0C1\uD6C8\uC774\uB97C \uD569\uACA9\uC2DC\uD0A8\uB2E4 </div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz1.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Quiz1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-9ac0f8df"]]);
const _imports_0$6 = "" + buildAssetsURL("quiz2.71832b27.jpg");
const _sfc_main$i = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-eb6ef1f4><img${ssrRenderAttr("src", _imports_0$6)} alt="" class="type-image" data-v-eb6ef1f4><div class="type-text" data-v-eb6ef1f4> \uAF2C\uBD81\uAF2C\uBD81!! </div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz2.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const Quiz2 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-eb6ef1f4"]]);
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
      </iframe></div><div class="type-text" data-v-0929d73c> \uB2E4\uC74C \uC601\uC0C1\uC758 \uC81C\uBAA9\uC73C\uB85C \uC54C\uB9DE\uC740 \uAC83\uC740? </div></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz3.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const Quiz3 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-0929d73c"]]);
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
const _sfc_main$f = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-1b652967><div class="type-text" data-v-1b652967> \uC624\uB2F5\uC2DC \uBC18\uB4DC\uC2DC \uB9AC\uD504\uB798\uC2DC\uB97C \uB20C\uB7EC\uC8FC\uC138\uC694 </div></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizContents/quiz5.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const Quiz5 = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-1b652967"]]);
const _sfc_main$e = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "content-area" }, _attrs))} data-v-093a36ed><div class="type-text" data-v-093a36ed> \uC0C1\uD6C8\uC774\uB97C \uD569\uACA9\uC2DC\uD0A8\uB2E4 </div></div>`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "type-input" }, _attrs))} data-v-a58bc347><input type="text" placeholder="\uC815\uB2F5\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694." class="input-text" data-v-a58bc347></div>`);
    };
  }
});
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
        content: "\uC544\uBE60 \uC0C1\uC5B4"
      },
      {
        value: 2,
        content: "\uC5C4\uB9C8 \uC0C1\uC5B4"
      },
      {
        value: 3,
        content: "\uC0C1\uC5B4\uAC00\uC871"
      },
      {
        value: 4,
        content: "\uC544\uAE30\uC0C1\uC5B4"
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
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizTypes/choice.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _imports_0$5 = "" + buildAssetsURL("icn-lock-up.f2ad8e99.svg");
const _imports_1$3 = "" + buildAssetsURL("icn-lock-down.f5135969.svg");
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
        _push(`<div class="locker" data-v-87eca066><button type="button" class="btn btn-lock-up" data-v-87eca066><img${ssrRenderAttr("src", _imports_0$5)} alt="\uC22B\uC790\uC99D\uAC00 \uC544\uC774\uCF58" data-v-87eca066></button><p class="locker-num" data-v-87eca066>${ssrInterpolate(item)}</p><button type="button" class="btn btn-lock-down" data-v-87eca066><img${ssrRenderAttr("src", _imports_1$3)} alt="\uC22B\uC790\uAC10\uC18C \uC544\uC774\uCF58" data-v-87eca066></button></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/QuizTypes/numbers.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Numbers = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-87eca066"]]);
const _imports_0$4 = "" + buildAssetsURL("icn-reset-direction.0c186fe0.svg");
const _imports_1$2 = "" + buildAssetsURL("direction-button.5ca6bff4.svg");
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
        _push(`<p class="reset-meesage" data-v-a86cc74c>\uCD08\uAE30\uD654 \uC644\uB8CC</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="direction-panel" data-v-a86cc74c><button class="btn btn-up" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-a86cc74c></button><button class="btn btn-down" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-a86cc74c></button><button class="btn btn-left" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-a86cc74c></button><button class="btn btn-right" data-v-a86cc74c><img${ssrRenderAttr("src", _imports_1$2)} alt="" data-v-a86cc74c></button><div class="${ssrRenderClass([unref(direction), "direction-controller"])}" data-v-a86cc74c></div><i class="icon-locker" data-v-a86cc74c></i></div></div>`);
    };
  }
});
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "normal" }, _attrs))} data-v-1d5026dd><div class="normal-header" data-v-1d5026dd><h2 class="normal-title" data-v-1d5026dd>\uC77C\uBC18\uBB38\uC81C ${ssrInterpolate(unref(currentQuizNo) + 1)}.</h2><button class="btn btn-close" data-v-1d5026dd><i class="icon-xmark" data-v-1d5026dd></i></button></div><div class="normal-wrap" data-v-1d5026dd><div class="normal-body" data-v-1d5026dd><div class="wrap-content wrap" data-v-1d5026dd><h3 class="quiz-title" data-v-1d5026dd>${`Q. ${unref(currentQuiz).title}`}</h3>`);
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
      _push(`</div></div><div class="normal-footer" data-v-1d5026dd><button type="button" class="btn-push" data-v-1d5026dd>\uC815\uB2F5 \uC81C\uCD9C</button></div></div>`);
      if (unref(isShowingFeedbackModal)) {
        _push(`<div class="feedbackModal" data-v-1d5026dd>`);
        if (unref(isCorrect)) {
          _push(`<div class="modal-content" data-v-1d5026dd><img${ssrRenderAttr("src", _imports_2)} alt="" data-v-1d5026dd><h2 class="modal-title font-jalnan" data-v-1d5026dd>\uC815\uB2F5!</h2><div data-v-1d5026dd><p class="answer-count" data-v-1d5026dd><span class="green" data-v-1d5026dd>${ssrInterpolate(unref(solvedNormalQuizCount))}</span> / ${ssrInterpolate(unref(wholeQuizCount))}</p></div></div>`);
        } else if (!unref(isCorrect)) {
          _push(`<div class="modal-content" data-v-1d5026dd><img${ssrRenderAttr("src", _imports_3$1)} alt="" data-v-1d5026dd><h2 class="modal-title font-jalnan" data-v-1d5026dd>\uC624\uB2F5!</h2><div class="box-answer" data-v-1d5026dd><p class="modal-text" data-v-1d5026dd><strong class="red" data-v-1d5026dd>2</strong>\uCD08 \uD6C4 \uB2E4\uC2DC \uB3C4\uC804\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4.</p><p class="modal-notice" data-v-1d5026dd>(\uCE74\uC6B4\uD2B8\uAC00 \uB05D\uB098\uBA74 \uC790\uB3D9\uC73C\uB85C \uB2EB\uD799\uB2C8\uB2E4.)</p></div></div>`);
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/NormalQuiz/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const NormalQuiz = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-1d5026dd"]]);
const _imports_0$3 = "" + buildAssetsURL("quiz1.aa9dfd34.jpg");
const _imports_1$1 = "" + buildAssetsURL("icn-round-x.b302cef9.svg");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boss-quiz" }, _attrs))}><div class="boss-header"><div class="box-text"><h2 class="boss-title font-jalnan">\uCD94\uB860\uBB38\uC81C</h2><span class="current-quiz">${ssrInterpolate(unref(currentBossQuizNo) + 1)} / ${ssrInterpolate(unref(wholeBossQuizCount))}</span></div><div class="box-hint"><button class="btn btn-dropdown font-jalnan"> \uD78C\uD2B8 <i class="icon-chevron_right"></i></button><ul class="${ssrRenderClass([{ "show": unref(hintboxToggle) }, "hint-list"])}"><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedFirstBossHint) }, "btn-hint btn-first-hint"])}"${ssrIncludeBooleanAttr(false) ? " disabled" : ""}>`);
      if (unref(isUsedFirstBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-hint"></i>`);
      }
      _push(` 1\uCC28 \uD78C\uD2B8 </button></li><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedSecondBossHint) }, "btn-hint btn-second-hint"])}"${ssrIncludeBooleanAttr(!unref(isUsedFirstBossHint)) ? " disabled" : ""}>`);
      if (unref(isUsedSecondBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-airplane"></i>`);
      }
      _push(` 2\uCC28 \uD78C\uD2B8 </button></li></ul></div></div><div class="boss-content"><div class="quiz-content pt-0"><p class="gray-box">\uC6B0\uB9AC \uBC18 \uCD9C\uC11D\uBD80\uC774\uB2E4.<br>\uADFC\uB370 \uCE5C\uAD6C\uB4E4 \uC0AC\uC774\uC5D0 \uC545\uB9C8\uAC00 \uAEF4 \uC788\uC796\uC544??<br>\uB3C4\uB300\uCCB4 \uBB34\uC2A8 \uC0DD\uAC01\uC774\uC9C0?! </p></div><img${ssrRenderAttr("src", _imports_0$3)} alt="" class="quiz-img"> \uC815\uB2F5\uC740 &#39;87&#39;\uC785\uB2C8\uB2E4. </div>`);
      if (unref(isTeamLeader)) {
        _push(`<div class="boss-type-input"><input type="text" name="" id="" class="input-text" placeholder="\uC815\uB2F5\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694."${ssrRenderAttr("value", unref(inputtedAnswer))}></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isTeamLeader)) {
        _push(`<div class="box-custom-btn"><button type="button" class="btn-push">\uC81C\uCD9C\uD558\uAE30</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowHint)) {
        _push(`<div class="boss-hint-modal"><div class="wrap-hint"><button type="button" class="btn btn-close"><i class="icon-xmark"></i></button><p class="hint-title font-jalnan">${ssrInterpolate(unref(hintNo))}\uCC28 \uD78C\uD2B8 </p>`);
        if (unref(hintNo) === 1) {
          _push(`<div>`);
          if (unref(isUsedFirstBossHint)) {
            _push(`<div><div class="hint-content open"><div class="white-box"><p class="hint-message">\uC545\uB9C8\uB294 \uBB50\uB4E0\uC9C0 <span class="red">\uAC70\uAFB8\uB85C</span><br>\uD558\uB294 \uAC83\uC744 \uC88B\uC544\uD55C\uB2E4.</p></div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">\uD655\uC778</button></div></div>`);
          } else {
            _push(`<div><div class="hint-content"><p class="require-hint font-jalnan"><i class="icon-hint"></i><img${ssrRenderAttr("src", _imports_1$1)} alt="">1 </p><p class="hint-count font-jalnan">\uD300 \uBCF4\uC720 \uC5F4\uC1E0: ${ssrInterpolate(unref(earnedBossHintCount) - unref(usedBossHintCount))}</p><p class="hint-text"> \uC5F4\uC1E0 1\uAC1C\uB97C \uC0AC\uC6A9\uD558\uC5EC<br>1\uCC28 \uD78C\uD2B8\uB97C \uBCF4\uACA0\uC2B5\uB2C8\uAE4C? </p></div><div class="hint-footer"><button type="button" class="btn-push gray">\uCDE8\uC18C</button><button type="button" class="btn-push">\uC0AC\uC6A9</button></div></div>`);
          }
          _push(`</div>`);
        } else if (unref(hintNo) === 2) {
          _push(`<div><div><div class="hint-content open"><div class="white-box"><p class="hint-message">\uCD9C\uC11D\uBD80\uB97C \uAC70\uAFB8\uB85C \uB4A4\uC9D1\uC5B4 \uBCF4\uBA74<br>\uC2DC\uC791\uB418\uB294 \uBC88\uD638 \uC21C\uC11C\uB97C \uC54C \uC218 \uC788\uB2E4.</p></div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">\uD655\uC778</button></div></div></div>`);
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
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_2)} alt=""><h2 class="modal-title font-jalnan">\uC815\uB2F5!</h2><div class="box-answer"><p class="modal-text font-weight-bold">87</p></div><p class="box-message white-box">\uBCC4\uB85C \uC5B4\uB835\uC9C0 \uC54A\uB124!<br>\uC774\uC815\uB3C4\uBA74 \uAECC\uC774\uC9C0!</p><div class="box-btn"><button type="button" class="btn-push">\uB2E4\uC74C</button></div></div>`);
        } else {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><h2 class="modal-title font-jalnan">\uC624\uB2F5!</h2><div class="box-answer"><p class="modal-text">\uB2E4\uC2DC \uD55C \uBC88 \uC2E0\uC911\uD558\uAC8C \uD480\uC5B4\uBCF4\uC790.<br>\uD78C\uD2B8\uB97C \uC0AC\uC6A9\uD574\uBCFC\uAE4C?</p></div><div class="box-btn"><button type="button" class="btn-push">\uACC4\uC18D</button></div></div>`);
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
const _imports_0$2 = "" + buildAssetsURL("quiz2.18d375a0.jpg");
const _imports_1 = "" + buildAssetsURL("hint2-1.c7bb117b.jpg");
const _imports_3 = "" + buildAssetsURL("hint2-2.f590c828.jpg");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boss-quiz" }, _attrs))}><div class="boss-header"><div class="box-text"><h2 class="boss-title font-jalnan">\uCD94\uB860\uBB38\uC81C</h2><span class="current-quiz">${ssrInterpolate(unref(currentBossQuizNo) + 1)} / ${ssrInterpolate(unref(wholeBossQuizCount))}</span></div><div class="box-hint"><button class="btn btn-dropdown font-jalnan"> \uD78C\uD2B8 <i class="icon-chevron_right"></i></button><ul class="${ssrRenderClass([{ "show": unref(hintboxToggle) }, "hint-list"])}"><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedFirstBossHint) }, "btn-hint btn-first-hint"])}"${ssrIncludeBooleanAttr(false) ? " disabled" : ""}>`);
      if (unref(isUsedFirstBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-hint"></i>`);
      }
      _push(` 1\uCC28 \uD78C\uD2B8 </button></li><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedSecondBossHint) }, "btn-hint btn-second-hint"])}"${ssrIncludeBooleanAttr(!unref(isUsedFirstBossHint)) ? " disabled" : ""}>`);
      if (unref(isUsedSecondBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-airplane"></i>`);
      }
      _push(` 2\uCC28 \uD78C\uD2B8 </button></li></ul></div></div><div class="boss-content"><div class="quiz-content pt-0"><p class="gray-box">\uBA40\uB9AC\uC11C \uC545\uB9C8\uAC00 \uD765\uC5BC\uAC70\uB9AC\uB294 \uC18C\uB9AC\uAC00 \uB4E4\uB9B0\uB2E4.<br>\uC774 \uBABB\uB41C \uB140\uC11D... \uC6B0\uB9AC\uB97C \uBE44\uC6C3\uB294\uAC74\uC9C0... \uB178\uB798\uB97C \uACC4\uC18D \uB4E4\uC5B4\uBCF4\uB2C8 \uBB54\uAC00\uB97C \uC598\uAE30\uD558\uB294 \uAC83 \uAC19\uC740\uB370...?</p></div><img${ssrRenderAttr("src", _imports_0$2)} alt="" class="quiz-img"> \uC815\uB2F5\uC740 &#39;foolish&#39;\uC785\uB2C8\uB2E4. </div>`);
      if (unref(isTeamLeader)) {
        _push(`<div class="boss-type-input"><input type="text" name="" id="" class="input-text" placeholder="\uC815\uB2F5\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694."${ssrRenderAttr("value", unref(inputtedAnswer))}></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isTeamLeader)) {
        _push(`<div class="box-custom-btn"><button type="button" class="btn-push">\uC81C\uCD9C\uD558\uAE30</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowHint)) {
        _push(`<div class="boss-hint-modal"><div class="wrap-hint"><button class="btn btn-close"><i class="icon-xmark"></i></button><p class="hint-title font-jalnan">${ssrInterpolate(unref(hintNo))}\uCC28 \uD78C\uD2B8 </p>`);
        if (unref(hintNo) === 1) {
          _push(`<div>`);
          if (unref(isUsedFirstBossHint)) {
            _push(`<div><div class="hint-content open"><img${ssrRenderAttr("src", _imports_1)} alt="" class="hint-img"><div class="hint-message"><span class="red">\uBB34\uC9C0\uAC1C \uC0C9\uC758 \uC21C\uC11C</span>\uAC00 \uBB50\uC600\uB354\uB77C...?</div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">\uD655\uC778</button></div></div>`);
          } else {
            _push(`<div><div class="hint-content"><p class="require-hint font-jalnan"><i class="icon-hint"></i><img${ssrRenderAttr("src", _imports_1$1)} alt="">1 </p><p class="hint-count font-jalnan">\uD300 \uBCF4\uC720 \uC5F4\uC1E0: ${ssrInterpolate(unref(earnedBossHintCount) - unref(usedBossHintCount))}</p><p class="hint-text"> \uC5F4\uC1E0 1\uAC1C\uB97C \uC0AC\uC6A9\uD558\uC5EC<br>1\uCC28 \uD78C\uD2B8\uB97C \uBCF4\uACA0\uC2B5\uB2C8\uAE4C? </p></div><div class="hint-footer"><button type="button" class="btn-push gray">\uCDE8\uC18C</button><button type="button" class="btn-push">\uC0AC\uC6A9</button></div></div>`);
          }
          _push(`</div>`);
        } else if (unref(hintNo) === 2) {
          _push(`<div><div><div class="hint-content open"><img${ssrRenderAttr("src", _imports_3)} alt="" class="hint-img"><div class="hint-message">\uBB34\uC9C0\uAC1C\uC0C9\uC0C1\uC758 \uC21C\uC11C\uB300\uB85C<br>\uC54C\uD30C\uBCB3\uC744 \uC801\uC5B4\uBCF4\uC790.</div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">\uD655\uC778</button></div></div></div>`);
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
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_2)} alt=""><h2 class="modal-title font-jalnan">\uC815\uB2F5!</h2><div class="box-answer"><p class="modal-text font-weight-bold">foolish</p></div><p class="box-message">\uBC14\uBCF4\uAC19\uB2E4\uACE0??<br>\uC808\uB300 \uAC00\uB9CC\uB450\uC9C0 \uC54A\uACA0\uC5B4!</p><div class="box-btn"><button type="button" class="btn-push">\uB2E4\uC74C</button></div></div>`);
        } else {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><h2 class="modal-title font-jalnan">\uC624\uB2F5!</h2><div class="box-answer"><p class="modal-text">\uB2E4\uC2DC \uD55C \uBC88 \uC2E0\uC911\uD558\uAC8C \uD480\uC5B4\uBCF4\uC790.<br>\uD78C\uD2B8\uB97C \uC0AC\uC6A9\uD574\uBCFC\uAE4C?</p></div><div class="box-btn"><button type="button" class="btn-push">\uACC4\uC18D</button></div></div>`);
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
const _imports_0$1 = "" + buildAssetsURL("quiz3.f35390fb.jpg");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boss-quiz" }, _attrs))}><div class="boss-header"><div class="box-text"><h2 class="boss-title font-jalnan">\uCD94\uB860\uBB38\uC81C</h2><span class="current-quiz">${ssrInterpolate(unref(currentBossQuizNo) + 1)} / ${ssrInterpolate(unref(wholeBossQuizCount))}</span></div><div class="box-hint"><button class="btn btn-dropdown font-jalnan"> \uD78C\uD2B8 <i class="icon-chevron_right"></i></button><ul class="${ssrRenderClass([{ "show": unref(hintboxToggle) }, "hint-list"])}"><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedFirstBossHint) }, "btn-hint btn-first-hint"])}"${ssrIncludeBooleanAttr(false) ? " disabled" : ""}>`);
      if (unref(isUsedFirstBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-hint"></i>`);
      }
      _push(` 1\uCC28 \uD78C\uD2B8 </button></li><li class="hint-item"><button class="${ssrRenderClass([{ "used": unref(isUsedSecondBossHint) }, "btn-hint btn-second-hint"])}"${ssrIncludeBooleanAttr(!unref(isUsedFirstBossHint)) ? " disabled" : ""}>`);
      if (unref(isUsedSecondBossHint)) {
        _push(`<i class="icon-eye"></i>`);
      } else {
        _push(`<i class="icon-airplane"></i>`);
      }
      _push(` 2\uCC28 \uD78C\uD2B8 </button></li></ul></div></div><div class="boss-content"><div class="quiz-content pt-0"><p class="gray-box">&#39;\uB775\uB3D9~&#39;<br>\uC557? \uC120\uC0DD\uB2D8\uC758 \uC624\uB798\uB41C \uD578\uB4DC\uD3F0\uC73C\uB85C<br>\uC545\uB9C8\uAC00 \uBB38\uC790\uB97C \uBCF4\uB0C8\uB2E4. \uBB34\uC2A8 \uB9D0\uC744 \uD558\uB294 \uAC78\uAE4C??</p></div><img${ssrRenderAttr("src", _imports_0$1)} alt="" class="quiz-img"> \uC815\uB2F5\uC740 &#39;\uB098\uC7A1\uC544\uBD10\uB77C&#39;\uC785\uB2C8\uB2E4. </div>`);
      if (unref(isTeamLeader)) {
        _push(`<div class="boss-type-input"><input type="text" name="" id="" class="input-text" placeholder="\uC815\uB2F5\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694."${ssrRenderAttr("value", unref(inputtedAnswer))}></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isTeamLeader)) {
        _push(`<div class="box-custom-btn"><button type="button" class="btn-push">\uC81C\uCD9C\uD558\uAE30</button></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isShowHint)) {
        _push(`<div class="boss-hint-modal"><div class="wrap-hint"><button class="btn btn-close"><i class="icon-xmark"></i></button><p class="hint-title font-jalnan">${ssrInterpolate(unref(hintNo))}\uCC28 \uD78C\uD2B8 </p>`);
        if (unref(hintNo) === 1) {
          _push(`<div>`);
          if (unref(isUsedFirstBossHint)) {
            _push(`<div><div class="hint-content open"><div class="white-box"><p class="hint-message">\uD578\uB4DC\uD3F0\uC758 \uC790\uD310\uC744 \uBCF4\uBA74<br><span class="red">\uC22B\uC790\uB9C8\uB2E4 \uD55C\uAE00</span>\uC774 \uC788\uC5B4!</p></div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">\uD655\uC778</button></div></div>`);
          } else {
            _push(`<div><div class="hint-content"><p class="require-hint font-jalnan"><i class="icon-hint"></i><img${ssrRenderAttr("src", _imports_1$1)} alt="">1 </p><p class="hint-count font-jalnan">\uD300 \uBCF4\uC720 \uC5F4\uC1E0: ${ssrInterpolate(unref(earnedBossHintCount) - unref(usedBossHintCount))}</p><p class="hint-text"> \uC5F4\uC1E0 1\uAC1C\uB97C \uC0AC\uC6A9\uD558\uC5EC<br>1\uCC28 \uD78C\uD2B8\uB97C \uBCF4\uACA0\uC2B5\uB2C8\uAE4C? </p></div><div class="hint-footer"><button type="button" class="btn-push gray">\uCDE8\uC18C</button><button type="button" class="btn-push">\uC0AC\uC6A9</button></div></div>`);
          }
          _push(`</div>`);
        } else if (unref(hintNo) === 2) {
          _push(`<div><div><div class="hint-content open"><div class="hint-message white-box">\uBB38\uC81C\uC5D0 \uC788\uB294 \uD2B9\uC218 \uBB38\uC790\uC640<br>\uC790\uC74C, \uBAA8\uC74C\uC744 \uBCF4\uACE0<br>\uBB38\uC7A5\uC744 \uB9CC\uB4E4\uC5B4 \uBCF4\uC790.</div></div><div class="hint-footer justify-content-center"><button type="button" class="btn-push">\uD655\uC778</button></div></div></div>`);
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
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_2)} alt=""><h2 class="modal-title font-jalnan">\uC815\uB2F5!</h2><div class="box-answer"><p class="modal-text font-weight-bold">\uB098\uC7A1\uC544\uBD10\uB77C</p></div><div class="box-btn"><button type="button" class="btn-push">\uB2E4\uC74C</button></div></div>`);
        } else {
          _push(`<div class="modal-content"><img${ssrRenderAttr("src", _imports_3$1)} alt=""><h2 class="modal-title font-jalnan">\uC624\uB2F5!</h2><div class="box-answer"><p class="modal-text">\uB2E4\uC2DC \uD55C \uBC88 \uC2E0\uC911\uD558\uAC8C \uD480\uC5B4\uBCF4\uC790.<br>\uD78C\uD2B8\uB97C \uC0AC\uC6A9\uD574\uBCFC\uAE4C?</p></div><div class="box-btn"><button type="button" class="btn-push">\uACC4\uC18D</button></div></div>`);
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "boss" }, _attrs))} data-v-91b1f57b><div class="boss-header" data-v-91b1f57b><button class="btn btn-close" data-v-91b1f57b><i class="icon-chevron_right" data-v-91b1f57b></i><span data-v-91b1f57b>\uBA54\uC778</span></button><div class="box-hint" data-v-91b1f57b><p class="font-jalnan hint-count" data-v-91b1f57b>${ssrInterpolate(unref(earnedBossHintCount) - unref(usedBossHintCount))}</p></div></div>`);
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Qrquiz/Game/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Game = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1e15caeb"]]);
const _imports_0 = "" + buildAssetsURL("trophy.e17f1a17.svg");
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "result" }, _attrs))} data-v-4a153aab><div class="top" data-v-4a153aab><h1 class="title" data-v-4a153aab>\uCD5C\uC885 \uACB0\uACFC</h1><img class="img"${ssrRenderAttr("src", _imports_0)} alt="\uD2B8\uB85C\uD53C" data-v-4a153aab></div><div class="main" data-v-4a153aab><div class="card" data-v-4a153aab><div class="card-header" data-v-4a153aab><h2 class="card-title" data-v-4a153aab>\uC6B0\uB9AC \uD300</h2></div><div class="card-body" data-v-4a153aab><div class="team-grid" data-v-4a153aab><div class="bedge" data-v-4a153aab><i class="icon icon-trophy" data-v-4a153aab></i></div><div class="rank" data-v-4a153aab>1\uC704</div><div class="divide" data-v-4a153aab><svg xmlns="http://www.w3.org/2000/svg" width="32" height="4" data-v-4a153aab><path d="M28 2a2 2 0 112 2 2 2 0 01-2-2zM14 2a2 2 0 112 2 2 2 0 01-2-2zM0 2a2 2 0 112 2 2 2 0 01-2-2z" fill="currentColor" data-v-4a153aab></path></svg></div><div class="name" data-v-4a153aab>A</div><div class="success" data-v-4a153aab><span class="text-green" data-v-4a153aab>\uC131\uACF5</span><span class="text-gray" data-v-4a153aab>(${ssrInterpolate(unref(gameOverTime))})</span></div></div></div></div><div class="card" data-v-4a153aab><div class="card-header" data-v-4a153aab><h2 class="card-title team-title-grid" data-v-4a153aab><span data-v-4a153aab></span><span data-v-4a153aab>\uC21C\uC704</span><span data-v-4a153aab></span><span data-v-4a153aab>\uD300</span><span data-v-4a153aab>\uD0C8\uCD9C</span></h2></div><div class="card-body" data-v-4a153aab><!--[-->`);
      ssrRenderList(unref(fiveRankedTeams), (team) => {
        _push(`<div class="team-grid" data-v-4a153aab><div class="bedge" data-v-4a153aab>`);
        if (team.rank === 1) {
          _push(`<i class="icon icon-trophy" data-v-4a153aab></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="rank" data-v-4a153aab>${ssrInterpolate(team.rank ? team.rank + "\uC704" : "-")}</div><div class="divide gray" data-v-4a153aab><svg xmlns="http://www.w3.org/2000/svg" width="32" height="4" data-v-4a153aab><path d="M28 2a2 2 0 112 2 2 2 0 01-2-2zM14 2a2 2 0 112 2 2 2 0 01-2-2zM0 2a2 2 0 112 2 2 2 0 01-2-2z" fill="currentColor" data-v-4a153aab></path></svg></div><div class="name" data-v-4a153aab>${ssrInterpolate(team.teamTitle)}</div><div class="success" data-v-4a153aab>`);
        if (team.isCleared) {
          _push(`<!--[--><span class="text-green" data-v-4a153aab>\uC131\uACF5</span><span class="text-gray" data-v-4a153aab>(${ssrInterpolate(team.clearedTimeText)})</span><!--]-->`);
        } else {
          _push(`<span class="text-orange" data-v-4a153aab>\uC2E4\uD328</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div><div class="row cap" data-v-4a153aab><div class="col cap-title" data-v-4a153aab>\uC885\uB8CC \uC2DC\uAC04</div><div class="col cap-body" data-v-4a153aab><i class="icon icon-timer" data-v-4a153aab></i> ${ssrInterpolate(unref(gameOverTime))}</div></div></div></div>`);
    };
  }
});
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/qrquiz/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c1f74fee"]]);

export { index as default };
//# sourceMappingURL=index-6aa2eebb.mjs.map
