<template>
	<div id="delete">
		<!-- The Modal -->
		<div class="modal" id="delete_modal">
		    <div class="modal-dialog">
		        <div class="modal-content">

		            <!-- Modal Header -->
		            <div class="modal-header">
		                <h4 class="modal-title">Are you sure ?</h4>
		                <button type="button" class="close" data-dismiss="modal">&times;</button>
		            </div>
		            <!-- Modal footer -->
		            <div class="modal-footer">
		            	<button type="button" class="btn btn-primary text-right" @click='deleteYes'>Yes</button>
		                <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
		            </div>

		        </div>
		    </div>
		</div>
	</div>	
</template>

<script type="text/javascript">
	export default {
		props: {
			id: {
				required: true
			}
		},
		methods: {
			deleteYes() {
				axios({
					method: 'delete',
				    url:`http://spa-laravel-vuejs.com/student/${this.id}`,
				})
				.then((response) => {
					this.$emit('getDataStudentAll')
					$('#delete_modal').modal('hide')
					$(".modal-fade").modal("hide")
     				$(".modal-backdrop").remove()
     				toastr.success('Deleted Data !', 'response', {timeOut: 1000})
				})
				.catch((error) => {
					console.log(error)
				})
			}
		}
	}
</script>

<style type="text/css">
	
</style>