<template>
	<div id="home">
		<div class="row">
			<div class="col-12 text-center mt-2">
				<div class="jumbotron bg-dark">
				  	<span class="font-weight-bolder text-light h3">Home</span>
				</div>
			</div>
			<div class="col-8 mb-2 text-left">
				<SearchToDoList v-bind:dataStudentAll="dataStudentAll" @dataStudentCodition="dataStudentCodition = $event"></SearchToDoList>
			</div>
			<div class="col-2 mb-2 text-right">
				<SortToDoList v-bind:dataStudentAll="dataStudentAll" @dataStudentCodition="dataStudentCodition = $event"></SortToDoList>
			</div>
			<div class="col-2 mb-2 text-right">
				<button class="btn btn-dark" data-toggle="modal" data-target="#create_modal"><span><i class="fa fa-plus"></i></span></button>
			</div>
			<div class="col-12">
				<table class="table table-bordered">
				    <thead>
				        <tr>
				            <th>#</th>
				            <th>Name</th>
				            <th>Date</th>
				            <th>Email</th>
				            <th>Phone Number</th>
				            <th>Address</th>
				            <th>Status</th>
				            <th class="text-center">
				            	<span><i class="fa fa-cog"></i></span>
				            </th>
				        </tr>
				        <tr>
				            <th></th>
				            <th colspan="5">
				            	<AutoSearchToDoList v-bind:dataStudentAll="dataStudentAll" @dataStudentCodition="dataStudentCodition = $event"></AutoSearchToDoList>
				            </th>
				            <th>
				            	<FilterToDoList v-bind:dataStudentAll="dataStudentAll" @dataStudentCodition="dataStudentCodition= $event"></FilterToDoList>
				            </th>
				            <th></th>
				        </tr>
				    </thead>
				    <tbody>
				    	<tr v-if="dataStudentList.length > 0" v-for="item, key in dataStudentList">
				            <td>{{ key + 1 }}</td>
				            <td>{{ item.name }}</td>
				            <td>{{ formatDate(new Date(item.date)) }}</td>
				            <td>{{ item.email }}</td>
				            <td>{{ item.phone }}</td>
				            <td>{{ item.address }}</td>
				            <td class="text-center">
								<button v-if="item.status == 1" class="btn btn-success btn-sm" @click="changeStatus(key, item.status)"><span><i class="fa fa-eye"></i></span></button>
								<button v-if="item.status == 0" class="btn btn-warning btn-sm" @click="changeStatus(key, item.status)"><span><i class="fa fa-close"></i></span></button>
				            </td>
				            <td class="text-center">
				            	<button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#update_modal" @click="openUpdate(key)"><span><i class="fa fa-edit"></i></span></button>
				            	<div class="dropdown-divider"></div>
				            	<button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#delete_modal" @click="openDelete(key)"><span><i class="fa fa-trash"></i></span></button>
				            </td>
				        </tr>
				    </tbody>
				</table>
				<PaginationToDoList v-bind:pagination="pagination" @changePagination="pagination = $event" @getDataStudentListPagination="getDataStudentListPagination"></PaginationToDoList>
			</div>
		</div>
		<CreateToDoList @getDataStudentAll="getDataStudentAll"></CreateToDoList>
		<UpdateToDoList v-bind:dataStudent="dataStudent" @getDataStudentAll="getDataStudentAll"></UpdateToDoList>
		<DeleteToDoList v-bind:id="id" @getDataStudentAll="getDataStudentAll"></DeleteToDoList>
	</div>
</template>
<script type="text/javascript">
	import CreateToDoList 		from '../layouts/home-todolist/CreateToDoList.vue'
	import UpdateToDoList 		from '../layouts/home-todolist/UpdateToDoList.vue'
	import DeleteToDoList 		from '../layouts/home-todolist/DeleteToDoList.vue'
	import PaginationToDoList 	from '../layouts/home-todolist/PaginationToDoList.vue'
	import SearchToDoList 		from '../layouts/home-todolist/SearchToDoList.vue'
	import SortToDoList 		from '../layouts/home-todolist/SortToDoList.vue'
	import FilterToDoList 		from '../layouts/home-todolist/FilterToDoList.vue'
	import AutoSearchToDoList 	from '../layouts/home-todolist/AutoSearchToDoList.vue'
	export default {
		components: {
			CreateToDoList,
			UpdateToDoList,
			DeleteToDoList,
			PaginationToDoList,
			SearchToDoList,
			SortToDoList,
			FilterToDoList,
			AutoSearchToDoList,
		},
		data() {
			return {
				dataStudentAll: {},
				dataStudentCodition: {},
				dataStudentList: {},
				/* dataStudent Update */
				dataStudent: {},
				/* id Delete */
				id: '',
				pagination: {
					currentPage: 1,
					perPage: 5,
					lastPage: 1
				}
			}
		},
		mounted() {
			this.getDataStudentAll()
		},
		methods: {
			formatDate(date){
				var dd = date.getDate()
		        var mm = date.getMonth() + 1
		  
		        var yyyy = date.getFullYear()
		        if (dd < 10) { 
		            dd = '0' + dd
		        } 
		        if (mm < 10) { 
		            mm = '0' + mm
		        } 
		        var dateFormat = dd + '/' + mm + '/' + yyyy
		        return dateFormat
			},
			getDataStudentListPagination() {
				var data = this.dataStudentCodition

				if(data != null && data.length != 0)
				{
					if(this.pagination.lastPage > Math.ceil((data.length)/(this.pagination.perPage)))
					{
						this.pagination.currentPage = 1
					}

					this.pagination.lastPage = Math.ceil((data.length)/(this.pagination.perPage))
					var dataStudentCurrentPage = []
					if(this.pagination.currentPage != this.pagination.lastPage)
					{
						var i
						for(i = (this.pagination.currentPage - 1) * this.pagination.perPage; i < this.pagination.currentPage * this.pagination.perPage; i++)
						{
							dataStudentCurrentPage.push(data[i])
						}
					}
					else
					{
						var i
						for(i = (this.pagination.currentPage - 1) * this.pagination.perPage; i < data.length; i++)
						{
							dataStudentCurrentPage.push(data[i])
						}
					}
					this.dataStudentList = dataStudentCurrentPage
				}	
				else
				{
					this.dataStudentList = {
						id: '',
						name: '',
						date: '',
						email: '',
						phone: '',
						address: '',
						status: ''
					}
					this.pagination = {
						currentPage: 1,
						perPage: 5,
						lastPage: 1
					}
				}
			},
			getDataStudentAll() {
				axios.get('http://spa-laravel-vuejs.com/student')
				.then((response) => {
					this.dataStudentAll = response.data
				})
				.catch((error) => {
					console.log(error)
				})
			},
			getDataStudentList() {
				this.dataStudentCodition = this.dataStudentAll
			},
			openUpdate(key) {
				this.dataStudent.id = this.dataStudentList[key].id
				this.dataStudent.name = this.dataStudentList[key].name
				this.dataStudent.date = this.dataStudentList[key].date
				this.dataStudent.email = this.dataStudentList[key].email
				this.dataStudent.phone = this.dataStudentList[key].phone
				this.dataStudent.address = this.dataStudentList[key].address
				this.dataStudent.status = this.dataStudentList[key].status
			},
			openDelete(key) {
				this.id = this.dataStudentList[key].id
			},
			changeStatus(key, status) {
				var idStatus = this.dataStudentList[key].id
				this.dataStudentList[key].status = (this.dataStudentList[key].status == '1') ? '0' : '1'
				var dataStudentStatus = {
					status: this.dataStudentList[key].status
				}

				axios({
					method: 'put',
				    url:`https://5d456552d823c30014771e06.mockapi.io/api/student/${idStatus}`,
				    data:  dataStudentStatus
				})
				.then((response) => {
					this.getDataStudentList()
     				toastr.success('Updated Status !', 'response', {timeOut: 1000})
				})
				.catch((error)=> {
					console.log(error);
				})	
			}
		},
		watch: {
			employees: {
				handler: function () {
                    this.getDataStudentList()
                },
                deep: true
			},
			employeesCodition: {
				handler: function () {
                    this.getDataStudentListPagination()
                },
                deep: true
			}
		}
	}
</script>