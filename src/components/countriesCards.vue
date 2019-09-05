<template>
    <div class="b-countries">
        <el-row>
            <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="(country, index) in countries" :key="country.cca2" :offset="index > 0 ? 2 : 0">
                <el-card>
                <div style="padding: 14px;">
                    <span>{{ country.name.common }}</span>
                    <div class="bottom clearfix">
                    <el-button  type="text" class="button" @click="openDetails(country)">
                        See details
                    </el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'app-countries-cards',
  props: ['countries'],
  data () {
    return {}
  },
  methods: {
    openDetails (country) {
      this.$router.push({
        name: 'countryDetail',
        params: { countryName: country.name.common }
      })
    }
  }
}
</script>
