import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { TrainScreen } from './views/TrainView';
import { PlanScreen } from './views/PlanningView';
import { AnalysisScreen } from './views/AnalysisView';
import { ConfigScreen } from './views/ConfigView';

const HomeNavigator = createStackNavigator({
  Train: TrainScreen,
  Plan: PlanScreen,
  Analyse: AnalysisScreen,
  Config: ConfigScreen,
}, {
  headerMode: 'none',
});

export const AppNavigator = createAppContainer(HomeNavigator);