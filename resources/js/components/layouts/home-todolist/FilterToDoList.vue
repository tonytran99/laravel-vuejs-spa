<template>
	<span id="filter">
		<th>
			<select class="form-control" v-model="filterStatus">
	    		<option value="-1">All</option>
	    		<option value="true">Show</option>
	    		<option value="false">Hide</option>
	    	</select>
		</th>	
	</span>
</template>

<script type="text/javascript">
	export default {
		props: {
			dataStudentAll: {
				required: true
			}
		},
		data() {
			return {
				filterStatus: '-1',
			}
		},
		methods: {
			getFilterStudentDataList() {
				var data = this.dataStudentAll
				if(this.filterStatus !== '-1') {
					var dataSearch = data.filter((data) => {
						if(this.filterStatus == 'true')
						{
							return (data.status == 'true') ? true : false
						}
						else 
						{
							return (data.status == 'false') ? true : false
						}
					})
					this.$emit('dataStudentCodition',dataSearch)
				} else {
					this.$emit('dataStudentCodition',data)
				}
			}
		},
		watch: {
			filterStatus: {
                handler: function () {
                    this.getFilterStudentDataList()
                },
                deep: true
            },
		}
	}
</script>

<style type="text/css">
	
</style>