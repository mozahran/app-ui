import {createRouter, createWebHistory} from 'vue-router'

import InventoryList from '/src/components/Inventory/Inventories/InventoryList.vue'
import CreateInventory from '/src/components/Inventory/Inventories/CreateInventory.vue'

const routes = [
    {path: '/inventories/create', name: 'inventories.create', component: CreateInventory},
    {path: '/inventories', name: 'inventories.index', component: InventoryList},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router