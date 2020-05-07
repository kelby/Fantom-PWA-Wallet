import NotFound from './views/NotFound/NotFound.vue';
import Home from './views/Home/Home.vue';
import AccountList from './views/AccountList/AccountList.vue';
import CreateAccount from './views/CreateAccount/CreateAccount.vue';
import RestoreAccount from './views/RestoreAccount/RestoreAccount.vue';
import Account from './views/Account/Account.vue';
import Dashboard from './views/Dashboard.vue';
import AccountSend from './views/AccountSend.vue';
import AccountRecieve from './views/AccountRecieve.vue';
import AccountStake from './views/AccountStake.vue';
import Playground from './views/Playground.vue';
import LedgerAccounts from './views/LedgerAccounts/LedgerAccounts.vue';
import AccountHistory from './views/AccountHistory.vue';
import Settings from './views/Settings.vue';
import Wallet from './views/Wallet/Wallet.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Home,
        children: [
            {
                name: 'acount-list',
                path: '',
                component: AccountList,
            },
            {
                name: 'create-account',
                path: '/account/create',
                component: CreateAccount,
            },
            {
                name: 'restore-account',
                path: '/account/restore',
                component: RestoreAccount,
            },
            {
                name: 'ledger-accounts',
                path: '/ledger-accounts',
                component: LedgerAccounts,
            },
        ],
    },
    {
        name: 'wallet',
        path: '/',
        component: Wallet,
        children: [
            {
                name: 'account',
                path: '/account/:address',
                component: Account,
                children: [
                    {
                        name: 'account-history',
                        path: '',
                        component: AccountHistory,
                    },
                    {
                        name: 'account-send',
                        path: 'send',
                        component: AccountSend,
                    },
                    {
                        name: 'account-recieve',
                        path: 'recieve',
                        component: AccountRecieve,
                    },
                    {
                        name: 'account-stake',
                        path: 'stake',
                        component: AccountStake,
                    },
                ],
            },
            {
                name: 'dashboard',
                path: '/dashboard',
                component: Dashboard,
            },
            {
                name: 'settings',
                path: '/settings',
                component: Settings,
            },
        ],
    },
    {
        name: 'playground',
        path: '/playground',
        component: Playground,
    },
    {
        name: 'not-found',
        path: '*',
        component: NotFound,
    },
];
