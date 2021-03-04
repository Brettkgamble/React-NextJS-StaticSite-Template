import React from 'react';
import Header from '../includes/header';
import Head from 'next/head';


const MainLayout = (props) => (
    <>
        <Head>
            <meta charSet='utf-8' />
            <meta content='width=device-width, initial-scale=1, shrink-to-fit=no' name='viewport' />
            <meta content='index, follow' name='robots' />
            <title>Trainer Connect | Connecting Clients To Trainers using AI</title>
            <meta name='description' content='We connect people seeking personal trainer to their perfect match' />
            <meta property='og:site_name' content='Trainer Connect' />
            <meta property='og:title' content='Trainer Connect' />
            {/*TO=DO Change the url*/}
            <meta property='og:url' content='https:/trainerconnect.com/' />
            <meta property='og:type' content='website' />
            <meta property='og:description' content='We connect people seeking personal trainer to their perfect match' />
            <meta itemProp='name' content='Trainer Connect' />
            {/*TO=DO Change the url*/}
            <meta itemProp='url' content='https://trainerconnect.com/' />
            <meta itemProp='description' content='We connect people seeking personal trainer to their perfect match' />
            {/*TO=DO Change the url*/}
            <meta name='twitter:title' content='Trainer Connect' />
            <meta name='twitter:url' content='https:/trainerconnect.com/' />
            <meta name='twitter:card' content='summary' />
            <meta name='twitter:description' content='We connect people seeking personal trainer to their perfect match' />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            {/*TO=DO Stripe, Google Maps Api*/}
            {/*<script src="https://js.stripe.com/v3/"></script>*/}
            {/*<script src="https://maps.googleapis.com/maps/api/js?key=#########&libraries=places"></script>*/}
        </Head>
        <div className="mainlayout_container">
            {/*<Header />*/}
            <div className="main_container">
                {props.children}
            </div>
        </div>
    </>
)

export default MainLayout;