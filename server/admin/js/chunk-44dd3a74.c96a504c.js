(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44dd3a74"],{"9de8":function(e,t,a){"use strict";var s=a("d8ad"),l=a.n(s);l.a},d8ad:function(e,t,a){},f367:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"category"},[a("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),a("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[a("el-tabs",{attrs:{type:"border-card",value:"skills"}},[a("el-tab-pane",{attrs:{label:"基础信息",name:"basic"}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),a("el-form-item",{attrs:{label:"称号"}},[a("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),a("el-form-item",{attrs:{label:"头像"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{headers:e.getAuthHeaders(),action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":e.handleSuccess}},[e.model.avatar?a("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"Banner"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.banner?a("img",{staticClass:"avatar",attrs:{src:e.model.banner}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"类型"}},[a("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"难度"}},[a("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),a("el-form-item",{attrs:{label:"技能"}},[a("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),a("el-form-item",{attrs:{label:"攻击"}},[a("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),a("el-form-item",{attrs:{label:"生存"}},[a("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),a("el-form-item",{attrs:{label:"顺风出装"}},[a("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"逆风出装"}},[a("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return a("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),a("el-form-item",{attrs:{label:"使用技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),a("el-form-item",{attrs:{label:"对抗技巧"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),a("el-form-item",{attrs:{label:"团战思路"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),a("el-tab-pane",{attrs:{label:"技能信息",name:"skills"}},[a("el-button",{on:{click:function(t){return e.model.skills.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加技能 ")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,s){return a("el-col",{key:s,attrs:{md:12}},[a("el-form-item",{attrs:{label:"名称"}},[a("el-input",{model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"item.name"}})],1),a("el-form-item",{attrs:{label:"图标"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":function(a){return e.$set(t,"icon",a.url)}}},[t.icon?a("img",{staticClass:"avatar",attrs:{src:t.icon}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"冷却值"}},[a("el-input",{model:{value:t.delay,callback:function(a){e.$set(t,"delay",a)},expression:"item.delay"}})],1),a("el-form-item",{attrs:{label:"消耗"}},[a("el-input",{model:{value:t.cost,callback:function(a){e.$set(t,"cost",a)},expression:"item.cost"}})],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),a("el-form-item",{attrs:{label:"小提示"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(a){e.$set(t,"tips",a)},expression:"item.tips"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(s,1)}}},[e._v("删除")])],1)],1)})),1)],1),a("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[a("el-button",{attrs:{size:"small"},on:{click:function(t){return e.model.partners.push({})}}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加英雄 ")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,(function(t,s){return a("el-col",{key:s,attrs:{md:12}},[a("el-form-item",{attrs:{label:"英雄"}},[a("el-select",{attrs:{filterable:""},model:{value:t.hero,callback:function(a){e.$set(t,"hero",a)},expression:"item.hero"}},e._l(e.heroes,(function(e){return a("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(a){e.$set(t,"description",a)},expression:"item.description"}})],1),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.partners.splice(s,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),a("el-form-item",{staticStyle:{"margin-top":"1rem"}},[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},l=[],r=(a("96cf"),a("1da1")),i={props:{id:{}},data:function(){return{items:[],categories:[],heroes:[],model:{name:"",avatar:"",title:"",partners:[],scores:{difficult:0},usageTips:"",battleTips:"",teamTips:"",skills:[]}}},created:function(){this.fetchCategories(),this.fetchItems(),this.fetchHeroes(),this.id&&this.fetch()},methods:{handleSuccess:function(e){console.log(e),this.model.avatar=e.url},save:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=6;break}return t.next=3,e.$http.put("rest/heroes/".concat(e.id),e.model);case 3:t.sent,t.next=9;break;case 6:return t.next=8,e.$http.post("rest/heroes",e.model);case 8:t.sent;case 9:e.$router.push("/heroes/list"),e.$message({type:"success",message:"保存成功！"});case 11:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes/".concat(e.id));case 2:a=t.sent,e.model=Object.assign({},e.model,a.data);case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:a=t.sent,e.categories=a.data;case 4:case"end":return t.stop()}}),t)})))()},fetchItems:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:a=t.sent,e.items=a.data;case 4:case"end":return t.stop()}}),t)})))()},fetchHeroes:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:a=t.sent,e.heroes=a.data;case 4:case"end":return t.stop()}}),t)})))()}}},o=i,n=(a("9de8"),a("2877")),c=Object(n["a"])(o,s,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-44dd3a74.c96a504c.js.map