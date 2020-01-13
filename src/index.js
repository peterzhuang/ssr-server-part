// const express = require('express');
// const React = require('react');
// const renderToString = require('react-dom/server').renderToString;
// const Home = require('./client/components/Home').default;
import 'babel-polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './client/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
// import React from 'react';
// import { renderToString } from 'react-dom/server';
// import Home from './client/components/Home';

const app  = express();

app.use(express.static('public'));

app.get('*', (req,res) => {
    const store = createStore();

    // some logic to initialize and load data into store
    // console.log(matchRoutes(Routes, req.path));

    const promises =  matchRoutes(Routes, req.path).map(({ route }) => {
        return route.loadData ? route.loadData(store) : null;
    });

    // console.log(promises);
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    });

    // res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});