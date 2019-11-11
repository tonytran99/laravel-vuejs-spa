<template>
	<div id="sort">
		<div class="col-3 text-right" id="sort_component">
            <button class="btn btn-primary dropdown-toggle" id="dropdownSort" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"><span><i class="fa fa-sort"></i></span>  Sort</button>
            <ul class="dropdown-menu" aria-labelledby="dropdownSort">
                <li>
                    <a class="btn sort_select" @click="onSort(1)" id="sort_a_z"><span><i class="fa fa-sort-alpha-asc"></i> Name A-Z </span></a>
                </li> 
                <li>
                    <a class="btn sort_select" @click="onSort(2)" id="sort_z_a"><span><i class="fa fa-sort-alpha-desc"></i> Name Z-A </span></a>
                </li>
                <li class="dropdown-divider"></li>
                <li>
                    <a class="btn sort_select" @click="onSort(3)" id="sort_active">Status - Active </span></a>
                </li>
                <li>
                    <a class="btn sort_select" @click="onSort(4)" id="sort_hidden">Status - Hidden </span></a>
                </li>
            </ul>
        </div>
	</div>
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

			}
		},
		methods: {
			onSort(sortSelect) {
				var data = this.dataStudentAll
				switch(sortSelect) {
                    case 1 : 
                        $('#sort_a_z').append('<span id="check_a_z"><i class="fa fa-check"></i></span>');
                        $('#check_z_a').remove();
                        $('#check_active').remove();
                        $('#check_hidden').remove();
                        var dataSort = data.sort((a, b) => {
                            if(a.name > b.name) return 1;
                            else if(a.name < b.name) return -1;
                            else return 0;
                        });
                        break;
                    case 2 : 
                        $('#sort_z_a').append('<span id="check_z_a"><i class="fa fa-check"></i></span>');
                        $('#check_a_z').remove();
                        $('#check_active').remove();
                        $('#check_hidden').remove();
                        var dataSort = data.sort((a, b) => {
                            if(a.name > b.name) return -1;
                            else if(a.name < b.name) return 1;
                            else return 0;
                        });
                        break;
                    case 3 : 
                        $('#sort_active').append('<span id="check_active"><i class="fa fa-check"></i></span>');
                        $('#check_a_z').remove();
                        $('#check_z_a').remove();
                        $('#check_hidden').remove();
                        var dataSort = data.sort((a, b) => {
                            if(a.status > b.status) return -1;
                            else if(a.status < b.status) return 1;
                            else return 0;
                        });
                        break;
                    case 4 : 
                        $('#sort_hidden').append('<span id="check_hidden"><i class="fa fa-check"></i></span>');
                        $('#check_a_z').remove();
                        $('#check_z_a').remove();
                        $('#check_active').remove();
                        var dataSort = data.sort((a, b) => {
                            if(a.status > b.status) return 1;
                            else if(a.status < b.status) return -1;
                            else return 0;
                        });
                        break;
                }
                this.$emit('dataStudentCodition',dataSort)
            }
		}
	}
</script>

<style type="text/css">
	
</style>