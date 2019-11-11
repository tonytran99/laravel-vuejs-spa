<template>
	<div id="pagination">
		<ul v-if="pagination.lastPage > 1" class="pagination">
		    <li class="page-item" @click="prevPage"><a class="page-link" href="javascript:void(0)"><span><i class="fa fa-arrow-left"></i></span></a></li>
		    <li v-for="page in pagination.lastPage" v-bind:class="[(page == pagination.currentPage) ? 'page-item active' : 'page-item']"><a class="page-link" href="javascript:void(0)" @click="goToPage(page)">{{ page }}</a></li>
		    <li class="page-item" @click="nextPage"><a class="page-link" href="javascript:void(0)"><span><i class="fa fa-arrow-right"></i></span></a></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: {
			pagination: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				// pagination: {}
			}
		},
		methods: {
			goToPage(page) {
				this.pagination.currentPage = page

				this.$emit('changePagination', this.pagination)
				this.$emit('getDataStudentListPagination')
			},
			prevPage() {
				if(this.pagination.currentPage != 1) {
					this.pagination.currentPage--;

					this.$emit('pagination', this.pagination)
					this.$emit('getDataStudentListPagination')
				}
			},
			nextPage() {
				if(this.pagination.currentPage != this.pagination.lastPage) {
					this.pagination.currentPage++;

					this.$emit('pagination', this.pagination)
					this.$emit('getDataStudentListPagination')
				}
			}
		}
	}
</script>

<style type="text/css">
	
</style>