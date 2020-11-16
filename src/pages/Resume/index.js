import React from 'react';
import moment from 'moment';
import Title from "../common/Title";
import './index.scss';
import ResumeItem from "./Item";

const Resume = () => {
    return (
        <div className="page" id="resume">
            <Title icon={'fa fa-briefcase'}>
                Professional Experiences 
            </Title>
            <ResumeItem
                date={'Juin 2020 - August 2020'}
                title={'Remote Internship'}
                company={'SLOCKWARE'}
                logo={'https://media-exp1.licdn.com/dms/image/C560BAQEpfKqRKu4bCg/company-logo_200_200/0?e=1613606400&v=beta&t=73_eTFeYloT_6DtvGgDgrf60OiADSx5E4T-eplmmdg8'}
            >
                • Develop web application for the management of a dental clinic <br/>
                • Using SYMFONY and TWIG .
            </ResumeItem>
            <ResumeItem
                date={'Juin 2019 – August 2019'}
                title={'Remote Internship'}
                company={'AKALEE'}
                logo={'https://media-exp1.licdn.com/dms/image/C560BAQHR_hSpLPnJPA/company-logo_200_200/0?e=1613606400&v=beta&t=ZJ9jd83HKkTuLMWTNm-PsRYK8U9wXduOTk_40L5bRJk'}
            >
                • Work on a freelancing web application <br/>
                • Using VueJs and GraphQL.
            </ResumeItem>
            <ResumeItem
                date={'Juin 2018 – August 2018'}
                title={'Teaching Experience'}
                company={'AIESEC Montenegro'}
                logo={'https://media-exp1.licdn.com/dms/image/C560BAQEzr1tkQ9NOpw/company-logo_200_200/0?e=1613606400&v=beta&t=EFQ5khKz0td0ATLM4mOsc6pi9ukpJWr9gHfuPuNZz3E'}
            >
                • Teaching HTML, CSS ,BOOTTSTRAP and  some JAVASCRIPT <br/>
        
            </ResumeItem>
      
            <Title icon={'fa fa-university'}>
                Education
            </Title>
            <ResumeItem
                date={'2016 – 2021'}
                title={'Information technology engineer '}
                company={'National School of Applied Sciences TETOUAN, MOROCCO'}
                logo={'https://ensate.uae.ac.ma/pluginfile.php/1/core_admin/logo/0x200/1605392315/logo4.0.png/dms/image/C510BAQE3p1j1WWn1Fg/company-logo_100_100/0?e=1612396800&v=beta&t=TPDysSQsDB8h-UUybls55tpUvFfzxzUpSBW3wD1qqoM'}
            >
               
            </ResumeItem>
            <ResumeItem
                date={'2013 – 2016'}
                title={'Preparatory Classes for Engineering Schools'}
                company={'Moulay Driss Fes, Morocco'}
                logo={'https://media-exp1.licdn.com/dms/image/C560BAQHst6BipupzWA/company-logo_200_200/0?e=2159024400&v=beta&t=YtGBehf_lQ80IxfbzkBjA8MWneQia_vbVZfAFQLAHEk'}
            >
                Section : physics and Engineering science;
            </ResumeItem>
            <ResumeItem
                date={'2013'}
                title={'Baccalaureate - Mathematical Sciences B'}
                company={'Derb AlMaarifa FES, Morocco'}
               
            >
               
            </ResumeItem>
        </div>
    );
};

export default Resume;
