(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f60a7da"],{"35e8":function(e,r,o){e.exports=o.p+"img/logincover.ff8522cd.png"},"976e":function(e,r,o){"use strict";o("9844")},9844:function(e,r,o){},d9c9:function(e,r,o){"use strict";o.r(r);var t=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{attrs:{calss:"blogin"}},[t("el-container",[t("el-main",[t("img",{staticClass:"cover",attrs:{src:o("35e8"),alt:"cover"}}),t("div",{staticClass:"loginbox"},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"账号",prop:"user"}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"请输入账号"},model:{value:e.ruleForm.userName,callback:function(r){e.$set(e.ruleForm,"userName",r)},expression:"ruleForm.userName"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"请输入密码"},model:{value:e.ruleForm.password,callback:function(r){e.$set(e.ruleForm,"password",r)},expression:"ruleForm.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.axiosLogin}},[e._v("登录")])],1)],1)],1)])],1)],1)},a=[],s=o("841a"),l=o.n(s),n=o("5d2d"),i=o("73ef"),u=o.n(i),c={data:function(){var e=function(e,r,o){""===r?o(new Error("请输入账号")):o()},r=function(e,r,o){""===r?o(new Error("请输入密码")):o()};return{ruleForm:{userName:"",password:""},rules:{user:[{validator:e,trigger:"blur"}],pass:[{validator:r,trigger:"blur"}]}}},methods:{axiosLogin:function(){var e=this;u()({url:l.a.login,method:"post",data:{userName:this.ruleForm.userName,password:this.ruleForm.password}}).then((function(r){if(console.log(r),200==r.data.code&&r.data.message){var o=r.data.token;Object(n["b"])("token",o),e.$router.push("/admin")}else console.log("login failed")})).catch((function(e){console.log("login failed")}))}}},m=c,d=(o("976e"),o("2877")),p=Object(d["a"])(m,t,a,!1,null,"5c3aa006",null);r["default"]=p.exports}}]);
//# sourceMappingURL=chunk-1f60a7da.5d6c5092.js.map