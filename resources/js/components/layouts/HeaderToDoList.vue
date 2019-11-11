<template>
	<div id="header">
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		    <router-link to="/" class="navbar-brand">Home</router-link>
		    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
		        <span class="navbar-toggler-icon"></span>
		    </button>

		    <div class="collapse navbar-collapse" id="navb">
		        <ul class="navbar-nav mr-auto">
		        	<router-link to="/about" class="nav-link">About</router-link>
		        	<router-link to="/contact" class="nav-link">Contact</router-link>
		        </ul>
		    </div>
		</nav>
	</div>
</template>

<script type="text/javascript">
	export default {
		
	}
</script>