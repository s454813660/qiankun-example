const render = ($) => {
  $("#purehtml-container").html("Hello, render with jQuery");
  return Promise.resolve();
};

((global) => {
  global["purehtml"] = {
    bootstrap: (props) => {
      console.log("purehtml bootstrap", props);
      return Promise.resolve();
    },
    mount: (props) => {
      console.log("purehtml mount", props);
      props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log(state, prev);
      });
      return render($);
    },
    unmount: () => {
      console.log("purehtml unmount");
      return Promise.resolve();
    },
  };
})(window);