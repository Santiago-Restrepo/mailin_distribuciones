'use strict';

const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssMinimizer = require('css-minimizer-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin');
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.pug/,
                use: ["html-loader", "pug-html-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
            },
            {
                test: /\.css|.sass$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    {
                        // Variables
                        loader: 'sass-resources-loader',
                        options: {
                            resources: './src/styles/estilos.sass'
                        }
                    }
                ]
            },
            {
                test: /\.png|.gif|.svg|.webp|.jpg|.jpeg$/,
                include: [
                    path.resolve(__dirname, "src/assets")
                ],
                type: 'asset/resource'
            }
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'styles/styles.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/index.pug'),
            filename: 'index.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/bebe.pug'),
            filename: 'bebe.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/blanca.pug'),
            filename: 'blanca.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/capilar.pug'),
            filename: 'capilar.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/chicos-chicas.pug'),
            filename: 'chicos-chicas.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/cuidado-corporal.pug'),
            filename: 'cuidado-corporal.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/cuidado-personal.pug'),
            filename: 'cuidado-personal.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/fragancias.pug'),
            filename: 'fragancias.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/green.pug'),
            filename: 'green.html',
            inject: true,
            minify: true
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'pug/masculina.pug'),
            filename: 'masculina.html',
            inject: true,
            minify: true
        }),
        new Dotenv({
            // ruta del archivo .env
            path: './.env',
            // configuración
            systemvars: true
        }),
        new RobotstxtPlugin()
    ],
    optimization: {
        minimize: true,
        minimizer: [
            // Optimizar: CSS
            new cssMinimizer(),
            // Optimizar: JavaScript
            new terserPlugin()
        ]
    }
};