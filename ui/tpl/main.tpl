<div class="panel-heading"> <h4>LogRhythm Student Demo</h4></div>
<div class="panel panel-default">
   <div class="panel-heading">
      <form class="form-inline" id="studentForm">
         <div class="form-group col-md-3">
            <label class="sr-only" for="firstName">First Name</label>
            <input type="text" class="form-control" name="firstname" value="" id="firstName" placeholder="First Name">
         </div>
         <div class="form-group col-md-3">
            <label class="sr-only" for="lastName">Last Name</label>
            <input type="text" class="form-control" name="lastname"  value ="" id="lastName" placeholder="Last Name">
           
         </div>
         <div class="form-group col-md-3">
            <label class="sr-only" for="testScore">Test Score</label>
            <input type="number" class="form-control" value="" name="testscore" id="testScore" maxlength="3" placeholder="Test Score">
         </div>
         <button type="button" class="submitBtn btn btn-primary">Submit</button>
      </form>
      
   </div>
   <div id="error" class="alert alert-dismissible alert-danger hide">
		  <button type="button" id="close" class="close" data-dismiss="alert">X</button>
		  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
	</div>
	<br/>
	<div class="panel panel-info">
		   <div id="stats" class="panel-heading">
		      <ul  class="list-inline">
             <li class="col-md-3"><b>Lowest Grade</b><br/><span>0%</span></li>
               <li class="col-md-3"><b>Highest Grade</b><br/><span>0%</span></li>
               <li class="col-md-3"><b> Average Grades</b><br/><span>0s%</span></li>

		      </ul>
		   </div>
   </div>
   <div class="panel-body">
      <div class="row">
         <div class="col-md-12">
            <div class="list-group" id="studentList" >
              
            </div>
         </div>
      </div>
   </div>
   <div class="panel-footer"> </div>
</div>