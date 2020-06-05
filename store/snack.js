export const state = () => ({
  show: false,
  text: "",
  x: "right"
});

export const mutations = {
  set_text(state, text) {
    state.text = text;
  },
  enable(state) {
    state.show = true;
  },
  disable(state) {
    state.show = false;
  }
};

export const actions = {
  show(context, params) {
    if (params.text) {
      context.commit("set_text", params.text);
    }
    context.commit("disable");
    context.commit("enable");
  }
};
