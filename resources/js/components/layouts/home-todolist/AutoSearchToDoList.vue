<template>
	<tr id="auto-search">
		<th>
			<input type="text" class="form-control" placeholder="Enter name" v-on:input="nameInput">
        </th>
        <th>
			<input type="email" class="form-control" placeholder="Enter email" v-on:input="emailInput">
        </th>
        <th>
			<input type="text" class="form-control" placeholder="Enter address" v-on:input="addressInput">
        </th>
    </tr>
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
				keyword: {
					name: '',
					email: '',
					address: ''
				}
			}
		},
		methods: {
			nameInput(event) {
				this.keyword.name = event.target.value
			},
			emailInput(event) {
				this.keyword.email = event.target.value
			},
			addressInput(event) {
				this.keyword.address = event.target.value
			},
			getSearchStudenthataList() {
				var dataSearch = this.dataStudentAll.filter((data) => {
					var searchByName = data.name.toLowerCase().indexOf(this.keyword.name.toLowerCase()) !== -1
					var searchByEmail = data.email.toLowerCase().indexOf(this.keyword.email.toLowerCase()) !== -1
					var searchByAddress = data.address.toLowerCase().indexOf(this.keyword.address.toLowerCase()) !== -1
					var searchCheck = (searchByName && searchByEmail && searchByAddress) ? true : false 
					return searchCheck
				})
				this.$emit('dataStudentCodition',dataSearch)
			}
		},
		watch: {
			keyword: {
                handler: function () {
                    this.getSearchStudenthataList()
                },
                deep: true
            },
		}
	}
</script>

<style type="text/css">
	
</style>