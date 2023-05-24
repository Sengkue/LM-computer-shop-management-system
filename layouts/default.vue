<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      width="300px"
    >
      <v-list v-for="(item, i) in items" :key="i" dense class="pt-0" tile flat>
        <!-- Menu drop down -->
        <v-list-group v-if="item.children" :prepend-icon="item.icon" no-action>
        <!-- title name of topic -->
          <template #activator>
            <v-list-item-title class="py-1 ml-n5" style="font-weight: bold; font-size: 18px">{{
              item.title
            }}</v-list-item-title>
          </template>
        <!-- child lists menu display icon and title-->
          <v-list-item
            v-for="(child, j) in item.children"
            :key="j"
            :to="child.to"
            router
            exact
            active-class="blue-grey lighten-4"
          >
         <!-- child list icon -->
            <v-list-item-action class="ml-n6">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-item-action>
         <!-- child list title -->
            <v-list-item-title class="ml-n6" style="font-size: 15px">{{
              child.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <!-- Menu title One line -->
        <v-list-item
          v-else
          :to="item.to"
          router
          exact
          dense
          active-class="blue-grey lighten-4"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="ml-n5">
            <v-list-item-title
              class="py-1"
              style="font-weight: bold; font-size: 18px"
              >{{ item.title }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="clipped" fixed app elevation="1">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>

      <v-toolbar-title style="color: #9155fd">{{ title }}</v-toolbar-title>
      <v-spacer />
      <div v-ripple class="text-center px-3 cursor-pointer">
        <v-btn style="font" text rounded>
          <v-badge color="success" dot
            ><span class="btn"
              >ຜູ້ເຂົ້າໃໍຊ້ລະບົບ : {{ $cookies.get('name') }}</span
            ></v-badge
          >
        </v-btn>
      </div>
      <div v-ripple class="text-center px-3 cursor-pointer">
        <v-btn text rounded @click="showDialog">
          <v-icon color="#9155FD"> mdi-power</v-icon>
          ອອກຈາກລະບົບ
        </v-btn>
      </div>
    </v-app-bar>
    <v-main class="bgcolor">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app class="d-flex justify-center">
      <span>ຄີຣນິກ ດຣ ສະຖຽນ</span>
    </v-footer>

    <v-row>
      <v-dialog
        v-model="dialog"
        width="600"
        transition="dialog-bottom-transition"
        persistent
      >
        <v-card>
          <v-toolbar dark color="#9155FD">
            <div class="text-center">ອອກຈາກລະບົບ!!!</div>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <div class="text-center">
            <v-card-title class="text-center">
              ທ່ານຕ້ອງການອອກຈາກລະບົບບໍ ?
            </v-card-title>
          </div>
          <v-card-actions class="d-flex justify-end">
            <v-btn color="error" @click="signOut">
              <v-icon color="white">mdi-power</v-icon>
              <span style="color: white"> ອອກຈາກລະບົບ</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  // middleware: 'onlogin',
  middleware: 'auth',
  data() {
    return {
      sun: false,
      clipped: true,
      drawer: false,
      fixed: false,
      show: false,
      dialog: false,
      items: [
        {
          icon: 'mdi-home-outline',
          title: 'ໜ້າຫຼັກ',
          to: '/',
        },
        {
          icon: 'mdi-cogs',
          title: 'ຈັດການຂໍ້ມູນ',
          children: [
            { title: 'ຈັດການຂໍ້ມູນປະເພດສິນຄ້າ', to: '/manage/Manage_patient' },
            {
              title: 'ຈັດການຂໍ້ມູນສິນຄ້າ',
              to: '/manage/manage_information_staff',
            },
            {
              title: 'ຈັດການຂໍ້ມູນພະນັກງານ.',
              to: '/manage/manage_drug_equipment',
            },
            { title: 'ຈັດການຂໍ້ມູນຜູ້ສະໜອງ', to: '/manage/manage_checklists' },
            { title: 'ຈັດການຂໍ້ມູນຫົວໜ່ວຍ', to: '/manage/Manage_supplier' },
            {
              title: 'ຈັດການຂໍ້ມູນອັດຕາແລກປ່ຽນ',
              to: '/manage/Manage_appointment',
            },
            {
              title: 'ຈັດການຂໍ້ມູນຜູ້ໃຊ້',
              to: '/manage/Manage_appointment',
            },
          ],
        },
        {
          icon: 'mdi-medical-cotton-swab',
          // title: "ຈ່າຍຢາ",
          title: 'ຂາຍສິນຄ້າ',
          children: [
            { title: 'ກວດສອບໃບສັ່ງຢາ', to: '/prescription/check_prescription' },
            // { title: "ບັນທຶກການຈ່າຍຢາ", to: "" },
            // { title: "ຢືນຢັນການຈ່າຍຢາ", to: "" },
          ],
        },
        {
          icon: 'mdi-doctor',
          title: 'ກວດພະຍາດ',
          children: [
            { title: 'ກວດການັດໝາຍ', to: '/treat/Check_appointment' },
            { title: 'ບັນທຶກຂໍ້ມູນພື້ນຖານ', to: '/treat/basic_record' },
            // { title: "ບັນທືກການປີ່ນປົວ", to: "" },
            // { title: "ອອກໃບສັ່ງຢາ", to: "" },
          ],
        },
        {
          icon: 'mdi-import',
          title: 'ສັ່ງຊື້ສິນຄ້າ-ນຳສິນຄ້າເຂົ້າ',
          children: [{ title: 'ກວດສອບການສັ່ງຊື້', to: '/import' }],
        },
        {
          icon: 'mdi-chart-line',
          title: 'ລາຍງານ',
          children: [
            { title: 'ລາຍງານສິນຄ້າໃກ້ຈະໝົດ', to: '' },
            { title: 'ລາຍງານຂໍ້ມູນລູກຄ້າ', to: '' },
            { title: 'ລາຍງານຂໍ້ມູນພະນັກງານ', to: '' },
            { title: 'ລາຍງານຂໍ້ມູນສິນຄ້າທີ່ຂາຍໄດ້ຫຼາຍ', to: '' },
            { title: 'ລາຍງານຂໍ້ມູນສິນຄ້າທັງໝົດ', to: '' },
            { title: 'ລາຍງານລາຍຮັບ-ລາຍຈ່າຍ', to: '' },
          ],
        },
       
      ],
      setting: [
        {
          icon: 'mdi-chart-line',
          title: 'ລາຍງານ',
          to: '/reports/reportTable',
        },
        {
          icon: 'mdi-cog-outline',
          title: 'ຕັ້ງຄ່າລະບົບ',
          to: '/setting',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'ຈັດການລະບົບຮ້ານຄອມພິວເຕີ',
    }
  },
  methods: {
    showDialog() {
      this.dialog = true
    },
    signOut() {
      this.$cookies.remove('token')
      this.$router.push('/login')
      this.$cookies.remove('name')
    },
  },
}
</script>
<style>
* {
  font-family: 'Noto Sans Lao', serif;
}
.cursor-pointer {
  cursor: pointer !important;
}
.bgcolor {
  background-color: #eff3f6;
}
.btn {
  text-transform: inherit;
}
.appbarcolor {
  background: linear-gradient(
    68.6deg,
    rgb(252, 165, 241) 1.8%,
    rgb(181, 255, 255) 100.5%
  );
}
</style>
