;(function(global){
  function emptyAction() {
    // 警告：提示当前使用的是空 Action
    console.warn("Current execute action is empty!");
  }
  
  class Actions {
    // 默认值为空 Action
    actions = {
      onGlobalStateChange: emptyAction,
      setGlobalState: emptyAction,
    };
  
    /**
     * 设置 actions
     */
    setActions(actions) {
      this.actions = actions;
    }
  
    /**
     * 映射
     */
    onGlobalStateChange(...args) {
      return this.actions.onGlobalStateChange(...args);
    }
  
    /**
     * 映射
     */
    setGlobalState(...args) {
      return this.actions.setGlobalState(...args);
    }
  }
  
  global.actions = new Actions();
})(window);


const render = ($) => {
  $("#purehtml-container").html("Hello, render with jQuery");
  return Promise.resolve();
};

((global) => {
  global['webapp'] = {
    bootstrap: (props) => {
      console.log("purehtml bootstrap", props);
      return Promise.resolve();
    },
    mount: (props) => {
      console.log("purehtml mount", props);
      global.actions.setActions(props);
      props.onGlobalStateChange((state, prev) => {
        // state: 变更后的状态; prev 变更前的状态
        console.log(state, prev);
      });
      console.log(props.getGlobalState('route'))
      return render($);
    },
    unmount: () => {
      console.log("purehtml unmount");
      return Promise.resolve();
    },
  };
})(window);
