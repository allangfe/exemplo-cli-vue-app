<template>
    <h3>{{ mensagem }}</h3>
</template>

<script>
export default{
    name: 'BlogPost',
    props: {
        mensagem: String
    }
}
</script>
