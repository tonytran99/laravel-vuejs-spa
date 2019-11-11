<template>
	<span id="search">
		<div class="input-group">
	        <input type="text" class="form-control" placeholder="Enter keyword ..." v-model="keyword"/>
	        <span class="input-group-btn">
	            <button class="btn btn-primary" type="button" @click="onSearch"><span><i class="fa fa-search"></i></span></button>
	        </span>
	    </div>
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
				keyword: ''
			}
		},
		methods: {
			getSearchStudentDataList() {
				var dataSearch = this.dataStudentAll.filter((data) => {
					var searchByName = data.name.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
					var searchByEmail = data.email.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
					var searchByAddress = data.address.toLowerCase().indexOf(this.keyword.toLowerCase()) !== -1
					var searchCheck = (searchByName || searchByEmail || searchByAddress) ? true : false 
					return searchCheck
				})
				this.$emit('dataStudentCodition',dataSearch)
			},
			onSearch() {
				this.getSearchStudentDataList()
			}
		},
	}
</script>

<style type="text/css">
	
</style>