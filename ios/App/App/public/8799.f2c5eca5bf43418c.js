"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8799],{8799:(m,a,i)=>{i.r(a),i.d(a,{GradesPageModule:()=>h});var c=i(6814),l=i(95),n=i(3134),r=i(4875),t=i(9212),u=i(5175),d=i(2359);const g=[{path:"",component:(()=>{class e{constructor(o,s){this.authService=o,this.tokenService=s}ngOnInit(){this.getGrades()}getGrades(){this.userId=this.tokenService.getUser(),this.authService.getGradesByUserId(this.userId[0].id).subscribe(o=>{console.log(o)})}static#t=this.\u0275fac=function(s){return new(s||e)(t.Y36(u.e),t.Y36(d.B))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-grades"]],decls:19,vars:2,consts:[[3,"translucent"],["color","primary","slot","start","defaultHref",""],[1,"grades_title"],[3,"fullscreen"],["lines","none"],[1,"grades_label"],["color","primary","name","chevron-forward-sharp","slot","end"]],template:function(s,Z){1&s&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar"),t._UZ(2,"ion-back-button",1),t.TgZ(3,"ion-title",2),t._uU(4,"Grades"),t.qZA()()(),t.TgZ(5,"ion-content",3)(6,"ion-list",4)(7,"ion-item")(8,"ion-label",5),t._uU(9,"Cyber Security Awareness"),t.qZA(),t._UZ(10,"ion-icon",6),t.qZA(),t.TgZ(11,"ion-item")(12,"ion-label",5),t._uU(13,"New Hire Training"),t.qZA(),t._UZ(14,"ion-icon",6),t.qZA(),t.TgZ(15,"ion-item")(16,"ion-label",5),t._uU(17,"Compliance Training"),t.qZA(),t._UZ(18,"ion-icon",6),t.qZA()()()),2&s&&(t.Q6J("translucent",!0),t.xp6(5),t.Q6J("fullscreen",!0))},dependencies:[n.W2,n.Gu,n.gu,n.Ie,n.Q$,n.q_,n.wd,n.sr,n.oU],styles:[".grades_title[_ngcontent-%COMP%]{font-size:20px;font-weight:500;font-family:Inter,sans-serif}.grades_label[_ngcontent-%COMP%]{font-size:18px;font-weight:500;font-family:Inter,sans-serif}"]})}return e})()}];let f=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(g),r.Bz]})}return e})(),h=(()=>{class e{static#t=this.\u0275fac=function(s){return new(s||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,l.u5,n.Pc,f]})}return e})()}}]);