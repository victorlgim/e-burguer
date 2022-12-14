import React from 'react'

export interface iDefaultUserContext {
    children: React.ReactNode
}  

export interface iRegisterFormData {
    email: 'string',
    password: 'string',
    passwordConfirmed: 'string',
    name: 'string'
}