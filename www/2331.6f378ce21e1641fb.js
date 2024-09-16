"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2331],{2331:(b,f,s)=>{s.r(f),s.d(f,{FeedbackPageModule:()=>O});var m=s(6814),u=s(95),i=s(3134),g=s(4875),_=s(5861),t=s(9212),x=s(5175);function p(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"ion-item"),t._UZ(2,"ion-title",11),t.qZA(),t.BQk()),2&e){const n=t.oxw(2).$implicit;t.xp6(2),t.Q6J("innerHTML",n.presentation,t.oJD)}}function d(e,l){if(1&e&&(t.TgZ(0,"ion-select-option",15),t._uU(1),t.qZA()),2&e){const n=l.$implicit;t.Q6J("value",n.value),t.xp6(),t.Oqu(n.label)}}function k(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-select",13),t.YNc(3,d,2,2,"ion-select-option",14),t.qZA()(),t.BQk()),2&e){const n=t.oxw(3).$implicit;t.xp6(2),t.Q6J("formControlName",n.id)("label","Select"),t.xp6(),t.Q6J("ngForOf",n.presentation)}}function y(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"ion-radio",17),t._uU(2),t.qZA(),t.BQk()),2&e){const n=l.$implicit;t.xp6(),t.Q6J("value",n.value),t.xp6(),t.Oqu(n.label)}}function v(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"ion-item")(2,"ion-radio-group",16),t.YNc(3,y,3,2,"ng-container",5),t.qZA()(),t.BQk()),2&e){const n=t.oxw(3).$implicit;t.xp6(2),t.Q6J("formControlName",n.id),t.xp6(),t.Q6J("ngForOf",n.presentation)}}function F(e,l){if(1&e&&(t.ynx(0),t.TgZ(1,"ion-item",12)(2,"ion-label"),t._uU(3),t.qZA()(),t.YNc(4,k,4,3,"ng-container",10)(5,v,4,2,"ng-container",10),t.BQk()),2&e){const n=t.oxw(2).$implicit;t.xp6(3),t.Oqu(n.name),t.xp6(),t.Q6J("ngIf",n.presentation.length>4),t.xp6(),t.Q6J("ngIf",4==n.presentation.length)}}function P(e,l){if(1&e&&(t.TgZ(0,"ion-list",9),t.YNc(1,p,3,1,"ng-container",10)(2,F,6,3,"ng-container",10),t.qZA()),2&e){const n=t.oxw().$implicit;t.Q6J("inset",!0),t.xp6(),t.Q6J("ngIf","label"==n.typ),t.xp6(),t.Q6J("ngIf","multichoice"==n.typ)}}function T(e,l){if(1&e&&(t.TgZ(0,"ion-list",9)(1,"ion-item",12),t._uU(2),t.qZA(),t.TgZ(3,"ion-item"),t._UZ(4,"ion-textarea",18),t.qZA()()),2&e){const n=t.oxw().$implicit;t.Q6J("inset",!0),t.xp6(2),t.hij(" ",n.name," "),t.xp6(2),t.Q6J("formControlName",n.id)}}function I(e,l){if(1&e&&(t.ynx(0),t.YNc(1,P,3,3,"ion-list",8)(2,T,5,3,"ion-list",8),t.BQk()),2&e){const n=l.$implicit;t.xp6(),t.Q6J("ngIf","textarea"!=n.typ),t.xp6(),t.Q6J("ngIf","textarea"==n.typ)}}const J=[{path:"",component:(()=>{class e{constructor(n,o,a,r){this.authService=n,this.route=o,this.formBuilder=a,this.toastCtrl=r,this.feedbacks=[],this.formData=this.formBuilder.group({})}ngOnInit(){}ionViewDidEnter(){this.courseId=this.route.snapshot.paramMap.get("courseId"),this.instanceId=this.route.snapshot.paramMap.get("instanceId"),console.log(this.courseId,this.instanceId),this.getFeedbackItems(this.courseId,this.instanceId),this.onSubmit("load")}getFeedbackItems(n,o){var a=this;return(0,_.Z)(function*(){try{const r=yield a.authService.getFeedbackItems(n,o).toPromise();if(r){a.feedbacks=r.items,a.feedbacks.map(c=>{"label"!=c.typ&&(c.presentation=a.parsePresentation(c.presentation))}),console.log("getFeedbackItems",a.feedbacks);for(let c=0;c<a.feedbacks.length;c++){const h=a.feedbacks[c];"label"!=h.typ&&a.formData.addControl(h.id,a.formBuilder.control("",u.kI.required))}console.log("formData",a.formData)}}catch(r){console.log(r)}})()}parsePresentation(n){let o=n.split("|");return o=o.map(r=>r.replace(/^[dr]>>>>>/,"").trim()),o.map((r,c)=>({label:r,value:c+1}))}onSubmit(n){var o=this;return(0,_.Z)(function*(){try{var a=[];console.log("this.formData.value",o.formData.value);for(const c in o.formData.value)o.formData.value.hasOwnProperty(c)&&a.push({[c]:o.formData.value[c]});console.log("formData",JSON.stringify(a));const r=yield o.authService.submitFeedback(o.instanceId,JSON.stringify(a),n).toPromise();if(console.log("form submit",r),"error"==r?.result)return void o.presentToast(r[0].msg,"danger");r[0].msg&&o.presentToast(r[0].msg,"success")}catch(r){console.log(r)}})()}presentToast(n,o){var a=this;return(0,_.Z)(function*(){(yield a.toastCtrl.create({message:n,duration:1500,position:"top",color:o})).present()})()}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(x.e),t.Y36(g.gz),t.Y36(u.qu),t.Y36(i.yF))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-feedback"]],decls:12,vars:4,consts:[[1,"ion-page"],[3,"translucent"],["color","primary","slot","start","defaultHref",""],["color","light",3,"fullscreen"],[3,"formGroup","ngSubmit"],[4,"ngFor","ngForOf"],["size","12"],["expand","block","size","default","type","submit"],[3,"inset",4,"ngIf"],[3,"inset"],[4,"ngIf"],[3,"innerHTML"],["lines","none"],[3,"formControlName","label"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[3,"formControlName"],["labelPlacement","end","justify","start",3,"value"],["rows","5",3,"formControlName"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"ion-header",1)(2,"ion-toolbar"),t._UZ(3,"ion-back-button",2),t.qZA()(),t.TgZ(4,"ion-content",3)(5,"form",4),t.NdJ("ngSubmit",function(){return a.onSubmit("submit")}),t.YNc(6,I,3,2,"ng-container",5),t.TgZ(7,"ion-grid")(8,"ion-row")(9,"ion-col",6)(10,"ion-button",7),t._uU(11," Submit "),t.qZA()()()()()()()),2&o&&(t.xp6(),t.Q6J("translucent",!0),t.xp6(3),t.Q6J("fullscreen",!0),t.xp6(),t.Q6J("formGroup",a.formData),t.xp6(),t.Q6J("ngForOf",a.feedbacks))},dependencies:[m.sg,m.O5,u._Y,u.JJ,u.JL,i.YG,i.wI,i.W2,i.jY,i.Gu,i.Ie,i.Q$,i.q_,i.B7,i.se,i.Nd,i.t9,i.n0,i.g2,i.wd,i.sr,i.U5,i.QI,i.j9,i.oU,u.sg,u.u],styles:["ion-textarea[_ngcontent-%COMP%]{border:1px solid #cccccc;border-radius:6px}"]})}return e})()}];let Z=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(J),g.Bz]})}return e})();var Q=s(6208);let O=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[m.ez,u.u5,i.Pc,Z,Q.m]})}return e})()},6208:(b,f,s)=>{s.d(f,{m:()=>_});var m=s(6814),u=s(3134),i=s(95),g=s(9212);let _=(()=>{class t{static#t=this.\u0275fac=function(d){return new(d||t)};static#e=this.\u0275mod=g.oAB({type:t});static#n=this.\u0275inj=g.cJS({imports:[m.ez,u.Pc,i.UX,i.UX]})}return t})()}}]);