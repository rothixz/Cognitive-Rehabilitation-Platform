webpackJsonp([9],{1155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=n(11),l=n(687),s=n(25),o=n(1556),d=n(1638);n.d(e,"PatientsModule",(function(){return r}));var r=(function(){function t(){}return t=__decorate([n.i(i.NgModule)({imports:[d.a,l.a,a.CommonModule,s.FormsModule],declarations:[o.a]}),__metadata("design:paramtypes",[])],t)})()},1556:function(t,e,n){"use strict";var i=n(0),a=n(340);n.d(e,"a",(function(){return s}));var l=(function(){function t(){}return t})(),s=(function(){function t(t){this.patients=t.database.list("/patients"),this.selectedPatient=new l,this.patient=new l}return t.prototype.submit=function(){this.patient.fname===this.selectedPatient.fname?this.patients.update(this.key,this.selectedPatient):this.patients.push(this.selectedPatient)},t.prototype.deleteItem=function(t){this.patients.remove(t)},t.prototype.deleteEverything=function(){this.patients.remove()},t.prototype.onSelect=function(t,e){this.patient=JSON.parse(JSON.stringify(t)),this.key=e,this.selectedPatient=JSON.parse(JSON.stringify(t))},t.prototype.ngOnInit=function(){console.debug("patients")},t=__decorate([n.i(i.Component)({selector:"seed-patients",template:n(1735),styles:[n(1706)]}),__metadata("design:paramtypes",[a.d])],t)})()},1638:function(t,e,n){"use strict";var i=n(0),a=n(62),l=n(1556);n.d(e,"a",(function(){return o}));var s=[{path:"",component:l.a,data:{title:"Patients"}}],o=(function(){function t(){}return t=__decorate([n.i(i.NgModule)({imports:[a.a.forChild(s)],exports:[a.a]}),__metadata("design:paramtypes",[])],t)})()},1706:function(t,e){t.exports=".example-form{width:50%;float:left}.selected{background-color:brown !important;color:white}.patients{list-style-type:none;text-align:center}.patients li{cursor:pointer;position:relative;left:0;background-color:lightslategrey;margin:.5em}.patients li:hover{color:lightskyblue;background-color:darkslategrey;left:.1em}.example-full-width{width:100%}\n"},1735:function(t,e){t.exports='<form class="example-form">\n  <h3> Patient </h3>\n  <table class="example-full-width" cellspacing="0"><tr>\n    <td><md-input-container class="example-full-width">\n      <input type="text" [(ngModel)]="selectedPatient.fname" name="first" mdInput placeholder="First name">\n    </md-input-container></td>\n    <td><md-input-container class="example-full-width">\n      <input type="text" [(ngModel)]="selectedPatient.lname" name ="second" mdInput placeholder="Last names">\n    </md-input-container></td>\n  </tr></table>\n\n  <p>\n    <md-input-container class="example-full-width">\n      <textarea type="text" [(ngModel)]="selectedPatient.address" name ="third" mdInput placeholder="Address">Bairro de Santiago</textarea>\n    </md-input-container>\n  </p>\n\n  <table class="example-full-width" cellspacing="0"><tr>\n    <td><md-input-container class="example-full-width">\n      <input type="text" [(ngModel)]="selectedPatient.city" name ="fourth" mdInput placeholder="City">\n    </md-input-container></td>\n    <td><md-input-container class="example-full-width">\n      <input type="text" [(ngModel)]="selectedPatient.state" name ="fifth" mdInput placeholder="State">\n    </md-input-container></td>\n    <td><md-input-container class="example-full-width">\n      <input [(ngModel)]="selectedPatient.postal" name ="sixth" mdInput placeholder="Postal Code" >\n    </md-input-container></td>\n  </tr></table>\n\n  <div class="button-row">\n    <button md-raised-button (click)="submit()">Submit</button>\n  </div>\n</form>\n\n<md-list class="example-form">\n  <h3 md-subheader>List of patients</h3>\n  <md-divider></md-divider>\n  <ul class="patients">\n    <li *ngFor="let patient of patients | async"\n    [class.selected]="patient === selectedPatient"\n    (click)="onSelect(patient, patient.$key)">\n      {{patient.fname}} {{patient.lname}}\n    </li>\n  </ul>\n</md-list>\n'}});