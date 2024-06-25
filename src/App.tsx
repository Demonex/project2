import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Briefcase } from './components/briefcase-component/Briefcase';
import { Guideline } from './components/guideline-component/Guideline';
import { History } from './components/history-component/History';
import { Intro } from './components/intro-component/Intro';
import { Layout } from './components/layout-component/Layout';
import { Leaderboard } from './components/leaderboard-component/Leaderboard';
import { News } from './components/news-component/News';
import { Profile } from './components/profile-component/Profile';
import { StockPurchase } from './components/stock-purchase-component/StockPurchase';
import { StockSell } from './components/stock-sell-component/StockSell';
import { StocksDetails } from './components/stocks-details-component/StocksDetails';
import { useTypedSelector } from './hooks/useTypedHooks';

export const App: React.FC = () => {

    const { savedTabsRoute } = useTypedSelector(state => state.tabsReducer)
    const { isIntroStatePassed } = useTypedSelector(state => state.coreReducer)

    return (
        <div className='app-container'>

            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Navigate to={isIntroStatePassed ? 'bag' : 'intro'} />} />
                    <Route path='bag' element={<Navigate to={savedTabsRoute} />} />
                    <Route path='bag/*' element={<Briefcase />}></Route>
                    <Route path='news' element={<News />}></Route>
                    <Route path='profile' element={<Profile />}></Route>
                    <Route path='stocks/:id' element={<StocksDetails />}></Route>
                    <Route path='purchase/:id' element={<StockPurchase />}></Route>
                    <Route path='sell/:id' element={<StockSell />}></Route>
                    <Route path='history' element={<History />}></Route>
                    <Route path='leaderboard' element={<Leaderboard />}></Route>
                    <Route path='intro' element={<Intro />}></Route>
                    <Route path='intro/guide' element={<Guideline />}></Route>
                </Route>
            </Routes>

        </div>
    );
}
