export const state = () => ({})
export const mutations = {}

export const actions = {
  signIn({ commit }, form) {
    const data =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNRU1CRVJfSUQiOiJNQjE3IiwiTUVNQkVSX05BTUUiOiJsaSIsIlRFTEVQSE9ORUQiOiIyMDc3OTI5NjAyIiwiQ1JFRElURSI6Ii00NTE2Ni41IiwiUEFTU1dPUkRfUkVUVVJOIjoiJDJhJDEwJERJWmxGLzNFR1ZaemUvYjdoQ2MuOWVPM3VlOVllMFZGM0VtZWIzTWY5LmkyRVJTc1lVSWwuIiwiQk9OVVNfQ1JFRElUIjoiMi4xIiwiUElOIjoiJDJhJDEwJFBJTWhpRjVGeGxXaHM1NlZzSFA3ZXVuZkN1cWFFZHo4T3d0eEdMZ0Q3TXV6TzlxcmhrMTJpIiwiU1RBRkYiOiIxIiwiT3V0UFVUIjoiMjAiLCJpYXQiOjE2ODQ3MjI5MjYsImV4cCI6MTY4NTU4NjkyNn0.fUrO0PYz5SeLZec9VaJBqJhY4maWhpIxPjgxD4tGZXw'
    this.$cookies.set('token', data)
    this.$cookies.set('name', "seng kue vang")
    this.$router.push('/')
    // await this.$axios
    //   .post('http://localhost:7000/signIn', form)
    //   .then((data) => {
    //     // console.log(data.data)
    //     const tokens = data.data.token
    //     const data1 = JSON.parse(
    //       Buffer.from(tokens.split('.')[1], 'base64').toString()
    //     )
    //     // console.log(data1)
    //     this.$cookies.set('name', data1.NAME)
    //     this.$cookies.set('token', data.data.token)
    //     this.$router.push('/')
    //     this.$toast.success('ເຂົ້າສູ່ລະບົບສຳເລັດ', {
    //       duration: 2000,
    //       position: 'top-right',
    //       iconPack: 'mdi',
    //       icon: 'check',
    //     })
    //   })
    //   .catch(() => {
    //     this.$toast.error('ເບີໂທລະສັບ ຫຼື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ', {
    //       duration: 2000,
    //       position: 'top-right',
    //       iconPack: 'mdi',
    //       icon: 'close',
    //     })
    //   })
  },
}
