import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showBack: false,
    titleName:"GDGS",
    rightBtn:"icon-set",
    rightView:"setting"
  },
  mutations: {
    isShow(state,payload) {
    	if( payload == 'home'){
    		state.showBack = false;
    	}else{
    		state.showBack = true;	
    	}
    },
    changeTitle(state,payload){
      if( payload !=" "){
        state.titleName = payload;
      }else{
        state.titleName = " ";
      }
    },
    changeBtn(state,payload){
      if(payload == " "){
        state.rightBtn = ""
        state.rightView = ""
      }else if(payload == "home"){
        state.rightBtn = "icon-set"
        state.rightView = "setting"
      }else if( payload == "forum"){
        state.rightBtn = "icon-gengduo"
        state.rightView = "forum"
      }else{
        state.rightBtn = "icon-icon-test"
        state.rightView = payload;
      }
    }
  }
})
