<template>
    <div>
        <div class="container">
            <div id="content">
                <form class='form-inline'>
                <div class="input-group">
                    <CalendarItem />
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
    html, body {
    height:100%;
    background-color: #666699;
    }

    .well {
    background-color: #ffffee
    }

    #content {
    padding: 25% 25% 5%;  
    }

    .search-form {
    border-radius: 30px 0 0 30px;
    }

    .input-group {
    width:100%;
    }

    input-group-btn {
    max-width:38px;
    }

    #search {
    border: 1px;
    }

    .search-btn {
    cursor:pointer;
    border-radius: 0 30px 30px 0; 
    background-color:#fff;
    color:#669;
    
    }

    .text-center {
    color: #fff;
    }
</style>