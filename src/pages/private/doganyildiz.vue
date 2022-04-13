<template>
    
    <div class="doganyildiz">

        <input type="text" placeholder="Para miktarı" v-model="value">
        <input type="text" placeholder="Yüzde" v-model="percent">
        <input type="text" placeholder="Gün sayısı" v-model="dayValue">

        <button @click="getValues()">Çıktı Al</button>

        <div class="days">

            <div class="day" v-for="day in days" :key="day.day">

                <span> gün : {{day.day}} , miktar : {{day.value}} </span>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    data(){
        return {
            days : [],
            value : null,
            percent : null,
            dayValue : null,
        }
    },
    methods : {
        getValues(){

            this.days = []
            let value = Number(this.value)

            for(let day = 1; day <= this.dayValue; day++){

                value = value + (value * this.percent / 100)
                value = Math.floor(value);
                this.days.push({value , day})

            }

        }
    }
}
</script>

<style>

    .doganyildiz{
        color: #fff;
    }

</style>