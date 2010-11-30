// Northwind.Client.js
(function(){function executeScript(){
Type.registerNamespace('Northwind.Client');Northwind.Client.EmployeeModule=function(){this.$3();this.$2();}
Northwind.Client.EmployeeModule.prototype={$0:null,$1:null,get_selectedEmployee:function(){return this.$1;},territorySuggestions:function(eventHandler){eventHandler.currentTarget.firstChild.nodeValue.split(',');},$2:function(){$('#create-employee').live('click',ss.Delegate.create(this,this.$4));$('#employee-save').live('click',ss.Delegate.create(this,this.$4));$('#edit').live('click',ss.Delegate.create(this,this.$5));$('#delete').live('click',ss.Delegate.create(this,this.$6));$('#details').live('click',ss.Delegate.create(this,this.$7));$('#AvailableTerritories').live('keyup',ss.Delegate.create(this,this.territorySuggestions));},$3:function(){$('#loading').show();$.getJSON('EmployeeRia/GetEmployeeFormViewModel',ss.Delegate.create(this,function($p1_0){
var $1_0=$p1_0;this.$0=$1_0;this.$A($1_0);}));},$4:function($p0){$p0.preventDefault();if($p0.currentTarget.id==='create-employee'){var $0=new Northwind.Client.Models.Employee();var $1=new Northwind.Client.Models.EmployeeService();$1.displayForm($0);return;}$('.error-message').remove();$('#employee-save').attr('disabled','true');$.post('EmployeeRia/Edit',$('#employee-form-create').serialize(),ss.Delegate.create(this,function($p1_0){
var $1_0=$p1_0;if($1_0.Valid){$('#main').empty();$('#employee-form').remove();this.$3();return;}var $1_1=new Northwind.Client.Models.EmployeeService();$1_1.showValidationResults($1_0);$('#employee-save').attr('disabled','false');}));},$5:function($p0){this.$8($p0.currentTarget.getAttribute('employeeId').toString());var $0=new Northwind.Client.Models.EmployeeService();$0.displayForm(this.get_selectedEmployee());},$6:function($p0){this.$8($p0.currentTarget.getAttribute('employeeId').toString());$.post('EmployeeRia/Delete/'+this.get_selectedEmployee().Id,ss.Delegate.create(this,function($p1_0){
var $1_0=$p1_0;this.$0.Employees=$1_0;this.$A(this.$0);}));},$7:function($p0){this.$8($p0.currentTarget.getAttribute('employeeId').toString());var $0=$.tmpl($('#employee-detail-tmpl').html(),this.get_selectedEmployee());$('#main').append($0);$('#employee-detail').dialog({minWidth:500,close: function(event, ui){$(this).dialog('destroy').remove();}});},$8:function($p0){var $enum1=ss.IEnumerator.getEnumerator(this.$0.Employees);while($enum1.moveNext()){var $0=$enum1.get_current();if($0.Id.toString()===$p0.toString()){$0.TerritoriesString=this.$9($0.Territories);this.$1=$0;break;}}},$9:function($p0){var $0=new String();for(var $1=0;$1<$p0.length;$1++){var $2=$p0[$1];if($1===$p0.length-1){$0=$0+$2.Description.trim();}else{$0=$0+$2.Description.trim()+', ';}}return $0;},$A:function($p0){if(($p0.Employees.length===0&$p0.AvailableTerritories.length===0)===1){return;}$('#main').empty();this.$B($p0);$('#loading').hide();},$B:function($p0){var $0=new Boolean();$('#main').empty();var $1=$.tmpl($('#employees-table-tmpl').html(),$0);$('#main').append($1);var $enum1=ss.IEnumerator.getEnumerator(this.$0.Employees);while($enum1.moveNext()){var $2=$enum1.get_current();var $3=$.tmpl($('#employees-table-row-tmpl').html(),$2);$('#employees-table tbody').append($3);}}}
Northwind.Client.EmployeeRia=function(){}
Northwind.Client.EmployeeRia.main=function(){var $0=new Northwind.Client.EmployeeModule();}
Type.registerNamespace('Northwind.Client.Models');Northwind.Client.Models.IEmployeeService=function(){};Northwind.Client.Models.IEmployeeService.registerInterface('Northwind.Client.Models.IEmployeeService');Northwind.Client.Models.Employee=function(){Northwind.Client.Models.Employee.initializeBase(this);this.Id=0;}
Northwind.Client.Models.Employee.prototype={FirstName:null,FullName:null,LastName:null,PhoneExtension:0,Territories:null,TerritoriesString:null,getEnumerator:function(){return (Type.safeCast(this.Territories,ss.IEnumerable)).getEnumerator();}}
Northwind.Client.Models.EmployeeService=function(){}
Northwind.Client.Models.EmployeeService.prototype={displayForm:function(employee){var $0=$.tmpl($('#employee-form-tmpl').html(),employee);$('#main').append($0);$('#employee-form').dialog({minWidth:500,close: function(event, ui){$(this).dialog('destroy').remove();}});},showValidationResults:function(employee){var $enum1=ss.IEnumerator.getEnumerator(employee.ValidationResultsJson);while($enum1.moveNext()){var $0=$enum1.get_current();if($0.PropertyName==='FirstName'){$('#FirstName').append('<div class=\"error-message\">'+$0.Message+'</div>');}if($0.PropertyName==='LastName'){$('#LastName').append('<div class=\"error-message\">'+$0.Message+'</div>');}if($0.PropertyName==='PhoneExtension'){$('#PhoneExtension').append('<div class=\"error-message\">'+$0.Message+'</div>');}}}}
Northwind.Client.Models.EmployeeViewModel=function(){}
Northwind.Client.Models.EmployeeViewModel.prototype={Employees:null,AvailableTerritories:null}
Northwind.Client.EmployeeModule.registerClass('Northwind.Client.EmployeeModule');Northwind.Client.EmployeeRia.registerClass('Northwind.Client.EmployeeRia');Northwind.Client.Models.Employee.registerClass('Northwind.Client.Models.Employee',Object);Northwind.Client.Models.EmployeeService.registerClass('Northwind.Client.Models.EmployeeService',null,Northwind.Client.Models.IEmployeeService);Northwind.Client.Models.EmployeeViewModel.registerClass('Northwind.Client.Models.EmployeeViewModel');}
ss.loader.registerScript('Northwind.Client',[],executeScript);})();