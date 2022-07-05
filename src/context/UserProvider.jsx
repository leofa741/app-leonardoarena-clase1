
import React from 'react'
import { useState,useEffect } from 'react';
import { UserContext } from './context';
import{cookie} from 'react-cookies';

export const UserProvider = ({children}) => {

  const [cesta,setCesta] = useState([]);

  useEffect(() => {
    const cookies = cookie.load('cesta');
    setCesta(cookies);
    }, []);

    const addToCesta = (product) => {
        if(!cesta[product]){
        cesta[product] = [];
        }
        cesta[product].push(product);
        }
        return () => {

            };

            };
            const removeFromCesta = (product) => {
                cesta[product].splice(cesta[product].indexOf(product), 1);
            };

            const addToCesta = (product) => {
                cesta[product].
                forEach((c) => {
                    c.quantity++;
                }
                );

                c.quantity--;
                };

             




          


   