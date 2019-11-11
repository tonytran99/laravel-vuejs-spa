<template>
	<div id="create">
		<!-- The Modal -->
		<div class="modal" id="create_modal">
		    <div class="modal-dialog font-weight-bolder">
		        <div class="modal-content">

		            <!-- Modal Header -->
		            <div class="modal-header">
		                <h4 class="modal-title">Create Data</h4>
		                <button type="button" class="close" data-dismiss="modal">&times;</button>
		            </div>

		            <!-- Modal body -->
		            <div class="modal-body">
		            	<form @submit="save">
		            	<ValidationObserver v-slot="{ invalid, passes }">
		            		<ValidationProvider rules="required|min:3|max:50" v-slot="{ errors }" name="name">
								<div class="form-group">
							        <label for="name">Name:</label>
							        <input type="text" class="form-control" placeholder="Enter name" name="name" v-model="dataStudent.name">
							        <div class="alert alert-danger" v-if="errors[0] != null">
									  	<strong>{{ errors[0] }}</strong>
									</div>
									<div class="alert alert-danger" v-if="apiErrors.name">
									  	<strong>{{ apiErrors.name[0] }}</strong>
									</div>
							    </div>
							</ValidationProvider>
							<ValidationProvider rules="required" v-slot="{ errors }" name="date">
								<div class="form-group">
							        <label for="date">Date:</label>
							        <input type="date" class="form-control" placeholder="Enter date" name="date" v-model="dataStudent.date">
							        <div class="alert alert-danger" v-if="errors[0] != null">
									  	<strong>{{ errors[0] }}</strong>
									</div>
									<div class="alert alert-danger" v-if="apiErrors.date">
									  	<strong>{{ apiErrors.date[0] }}</strong>
									</div>
							    </div>
							</ValidationProvider>
							<ValidationProvider rules="required|email" v-slot="{ errors }" name="email">
								<div class="form-group">
							        <label for="name">Email:</label>
							        <input type="text" class="form-control" placeholder="Enter email" name="email" v-model="dataStudent.email">
							        <div class="alert alert-danger" v-if="errors[0] != null">
									  	<strong>{{ errors[0] }}</strong>
									</div>
									<div class="alert alert-danger" v-if="apiErrors.email">
									  	<strong>{{ apiErrors.email[0] }}</strong>
									</div>
							    </div>
							</ValidationProvider>
							<ValidationProvider rules="required|numeric|min:10|max:11" v-slot="{ errors }" name="phone">
								<div class="form-group">
							        <label for="name">Phone Number:</label>
							        <input type="text" class="form-control" placeholder="Enter phone" name="name" v-model="dataStudent.phone">
							        <div class="alert alert-danger" v-if="errors[0] != null">
									  	<strong>{{ errors[0] }}</strong>
									</div>
									<div class="alert alert-danger" v-if="apiErrors.phone">
									  	<strong>{{ apiErrors.phone[0] }}</strong>
									</div>
							    </div>
							</ValidationProvider>
							<ValidationProvider rules="required|min:3|max:150" v-slot="{ errors }" name="address">
								<div class="form-group">
							        <label for="name">Address:</label>
							        <input type="text" class="form-control" placeholder="Enter address" name="address" v-model="dataStudent.address">
							        <div class="alert alert-danger" v-if="errors[0] != null">
									  	<strong>{{ errors[0] }}</strong>
									</div>
									<div class="alert alert-danger" v-if="apiErrors.address">
									  	<strong>{{ apiErrors.address[0] }}</strong>
									</div>
							    </div>
							</ValidationProvider>
							<ValidationProvider rules="required" v-slot="{ errors }" name="status">
								<div class="form-group">
							        <label for="name">Status:</label>
							        <select class="form-control" v-model="dataStudent.status">
							        	<option value="1">Show</option>
							        	<option value="0">Hide</option>
							        </select>
							        <div class="alert alert-danger" v-if="errors[0] != null">
									  	<strong>{{ errors[0] }}</strong>
									</div>
									<div class="alert alert-danger" v-if="apiErrors.status">
									  	<strong>{{ apiErrors.status[0] }}</strong>
									</div>
							    </div>
						    </ValidationProvider>
							<button type="submit" class="btn btn-primary" :disabled="invalid">Save</button>
						</ValidationObserver>		 
		            	</form> 
		            </div>

		            <!-- Modal footer -->
		            <div class="modal-footer">
		                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
		            </div>

		        </div>
		    </div>
		</div>
	</div>	
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				dataStudent: {},
				apiErrors : ''
			}
		},
		methods: {
			save(event) {
				console.log(this.dataStudent)
				event.preventDefault()
				axios({
					method: 'post',
				    url:'http://spa-laravel-vuejs.com/student',
				    data:  this.dataStudent
				})
				.then((response) => {
					this.$emit('getDataStudentAll')
					this.dataStudent = {}
					$('#create_modal').modal('hide')
					$(".modal-fade").modal("hide")
     				$(".modal-backdrop").remove()
     				console.log(response.data)
     				toastr.success('Created Data !', 'response', {timeOut: 1000})
				})
				.catch((error) => {
					this.apiErrors = error.response.data.errors
					console.log(this.apiErrors)
				})	
			}
		}
	}
</script>

<style type="text/css">
	
</style>