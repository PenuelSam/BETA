import careImage1 from '../src/assets/Figma-Images/Care/care-approach.png'
import careImage2 from '../src/assets/Figma-Images/Care/Personal-care.png'
import careImage3 from '../src/assets/Figma-Images/Care/Respite-Care.png'
import careImage4 from '../src/assets/Figma-Images/Care/Post-Operative-Care.png'
import careImage5 from '../src/assets/Figma-Images/Care/Palliative-Care.png'
import careImage6 from '../src/assets/Figma-Images/Care/Alzheimer-Care.png'

import serviceImage1 from '../src/assets/Figma-Images/Care/Personal.png'
import serviceImage2 from '../src/assets/Figma-Images/Care/Respite.png'
import serviceImage3 from '../src/assets/Figma-Images/Care/Nursing.png'
import serviceImage4 from '../src/assets/Figma-Images/Care/PostOperative.png'
import serviceImage5 from '../src/assets/Figma-Images/Care/Palliative.png'
import serviceImage6 from '../src/assets/Figma-Images/Care/Alzheimer.png'

import Train1 from '../src/assets/Figma-Images/Manufacturing/Personal-Train.png'
import Train2 from '../src/assets/Figma-Images/Manufacturing/Training.png'
import Train3 from '../src/assets/Figma-Images/Manufacturing/BGcheck.png'
import Train4 from '../src/assets/Figma-Images/Manufacturing/ID.png'
import Train5 from '../src/assets/Figma-Images/Manufacturing/Reference.png'
import Train6 from '../src/assets/Figma-Images/Manufacturing/Payment.png'
import Train7 from '../src/assets/Figma-Images/Manufacturing/Work.png'
import Train8 from '../src/assets/Figma-Images/Manufacturing/CV.png'
import Train9 from '../src/assets/Figma-Images/Manufacturing/Kin.png'
import Train10 from '../src/assets/Figma-Images/Manufacturing/Declaration.png'
import Train11 from '../src/assets/Figma-Images/Manufacturing/Vaccine-Train.png'

import png1 from '../src/assets/Figma-Images/aboutpng.png'
import png2 from '../src/assets/Figma-Images/servicespng.png'
import png3 from '../src/assets/Figma-Images/operativepng.png'
import png5 from '../src/assets/Figma-Images/contactpng.png'
import offerlogo from '../src/assets/Figma-Images/Offerlogo.png'
import offerlogo2 from '../src/assets/Figma-Images/Offerlogo2.png'
import Checked from '../src/assets/Figma-Images/Checked.png'

export const OfferBtns = [
    {
        title:'Beta Personal Care',
        logo: offerlogo,
        logoBg: '#A6DBF8',
        textBg: '#021A71',
        textcolor:'#FFFFFF',
        path: '/personalcare'
    },
    {
        title:'Beta Respite Care',
        logo: offerlogo2,
        logoBg: '#021A71',
        textBg: '#A6DBF8',
        textcolor: '#021A71',
        path: '/respitecare'
    },
    {
        title:'Beta Personal Nursing Care',
        logo: offerlogo2,
        logoBg: '#021A71',
        textBg: '#A6DBF8',
        textcolor: '#021A71',
        path: '/personalnursing'
    },
    {
        title:'Beta after hospital and post-operative care',
        logo: offerlogo,
        logoBg: '#A6DBF8',
        textBg: '#021A71',
        textcolor:'#FFFFFF',
        path: '/postoperative'
    },
    {
        title:'Beta palliative care and end of life care',
        logo: offerlogo,
        logoBg: '#A6DBF8',
        textBg: '#021A71',
        textcolor:'#FFFFFF',
        path: '/palliative'
    },
    {
        title:"Beta alzheimer's and dementia care",
        logo: offerlogo2,
        logoBg: '#021A71',
        textBg: '#A6DBF8',
        textcolor: '#021A71',
        path: '/dementia'
    },

]


export const NavLinks = [
    {
        id: 1,
        name: 'About Us',
        path: '/about2',
        Png: png1
    },
    {
        id: 2,
        name: 'Services',
        path: '/company',
        Png: png2
    },
    {
        id: 3,
        name: 'Operatives',
        path: '/personal',
        Png: png3
    },
    {
        id: 5,
        name: 'Contact Us',
        path: '/contact2',
        Png: png5
    },
]

export  const NavLinks2 = [
    {
        id: 1,
        name: 'About Us',
        path: '/about',
        Png: png1
    },
    {
        id: 2,
        name: 'Services',
        path: '/services',
        Png: png2
    },
    {
        id: 3,
        name: 'Care Worker',
        path: '/personal2',
        Png: png3
    },
    {
        id: 5,
        name: 'Contact Us',
        path: '/contact',
        Png: png5
    },
]

export const WhatweOffer =[
    {
        title:'DBS checked, safe staffing solutions'
    },
    {
        title:'Free PPE for all agency staff members'
    },
    {
        title:'Specialised in filling short notice booking requests'
    },
    {
        title:'Fully trained staff, with specialty training including Infection Control'
    },
    {
        title:'Staff for same-day and long-term availability'
    },
    {
        title:'Can cater to one-off, temporary and permanent placements'
    },
    {
        title:'Cancel within 12 hours free of charge'
    },
    {
        title:'Personal support service available 24/7'
    },
    {
        title:'Both service and training are CQC registered'
    },
    
]

export const CareHomeButtons =[
    {
        button: careImage1,
        path: '/carehome#careapproach'
    },
    {
        button: careImage2,
        path: '/services#personalcare'
    },
    {
        button: careImage3,
        path: '/services#respitecare'
    },
    {
        button: careImage4,
        path: '/services2#postoperative'
    },
    {
        button: careImage5,
        path: '/services2#palliative'
    },
    {
        button: careImage6,
        path: '/services2#dementia'
    },
]

export const WhatweOfferBtn = [
    {
        button: serviceImage1,
        path: '/services#personalcare'
    },
    {
        button: serviceImage2,
        path: '/services#respitecare'
    },
    {
        button: serviceImage3,
        path: '/services#personalnursing'
    },
    {
        button: serviceImage4,
        path: '/services2#postoperative'
    },
    {
        button: serviceImage5,
        path: '/services2#palliative'
    },
    {
        button: serviceImage6,
        path: '/services2#dementia'
    },
]

export const PersonalCareList = [
    {
        title: 'Bathing (bed-bath if required)'
    },
    {
        title: 'Eating'
    },
    {
        title: 'Food care: for patients on diet usually based on health issues'
    },
    {
        title: 'Specific medical care, including medication timing'
    },
    {
        title: 'Body care and dressing'
    },
    {
        title: 'Convenience/Rest room care'
    },
    {
        title: 'Bed care: stretching, massaging and position support to avoid bed sore'
    },
    {
        title: 'General housekeeping'
    },
    {
        title: 'Daily activities assistance'
    },
    {
        title: 'Other specific cares based on Beta Care Approach.'
    },
]

export const NursingList = [
    {
        title: 'Patients care planning'
    },
    {
        title: 'Taking records of patients’ condition'
    },
    {
        title: 'Administering of drugs and injections'
    },
    {
        title: 'Setting up drips'
    },
    {
        title: 'Responding swiftly to emergencies'
    },
    {
        title: 'Taking patients to scheduled hospital meeting'
    },
    {
        title: 'Working with attendant doctors'
    },
    {
        title: 'Advocating for patients'
    },
    {
        title: 'Educating family caregiver on health care management'
    },
    {
        title: 'Enlightening patients on health management.'
    },   
]

export const PalliativeList = [
    {
        title: 'Providing necessary medical assistant, as stated in the Beta Personal Nursing Care outline'
    },
    {
        title: 'Assist in planning and decision making relating to palliative and end of life care'
    },
    {
        title: 'Attending to specified and required needs'
    },
    {
        title: 'Time management planning'
    },
    {
        title: 'Encouraging family involvement'
    },
    {
        title: 'Family counseling'
    },
    {
        title: 'Any other requirements as situations changes'
    },
]

export const AlzheimerList = [
    {
        title: 'Ensure patients feel loved.'
    },
    {
        title: 'Ensure to listen actively to understand patients at all times.'
    },
    {
        title: 'Ensure to keep track of appointment and prompt administration of medications'
    },
    {
        title: 'Ensure to create a daily routine for patients to have a sense of structure and familiarity with necessary progressive activities.'
    },
    {
        title: 'Assist with daily living activities'
    },
    {
        title: 'Encourage reflection exercise which is an active memory improvement practice'
    },
    {
        title: 'Patiently help cope with changes in communication'
    },
    {
        title: 'Encourage patients to avoid excessive activities that can cause decrease in memory function.'
    },
    {
        title: 'Avoid emotional trauma by continuing to educate patients and ensure not to use harsh words that points out their difficulties'
    },
    {
        title: 'Encourage group activities through scheduled social interaction and help manage    conversations. This also includes planning of visits and social events.'
    },
    {
        title: 'Plan different activities that kindle the senses at all times. Depending on the preference of  patients, we organize activities such as walking, dancing, singing, telling stories, seeing movies, attending sporting events and lots more. These also serve as relaxation practices.'
    },
]

export const ContactButtons = [
    {
        button: serviceImage1
    },
    {
        button: serviceImage3
    },
    {
        button: serviceImage5
    },
    {
        button: serviceImage2
    },
    {
        button: serviceImage4
    },
    {
        button: serviceImage6
    },
]

export const TrainBtn = [
    {
        button: Train1 ,
        path: '/personal'
    },
    {
        button: Train2 ,
        path: '/train'
    },
    {
        button: Train3,
        path: '/bgchecks'
    },
    {
        button: Train4,
        path: '/ids'
    },
    {
        button: Train5,
        path: '/reference'
    },
    {
        button: Train6,
        path: '/payment'
    },
    {
        button: Train7,
        path: '/work'
    },
    {
        button: Train8,
        path: '/cv'
    },
    {
        button: Train9,
        path: '/nextofkin'
    },
    {
        button: Train10,
        path: '/declaration'
    },
    {
        button: Train11,
        path: '/vaccination'
    },
]

export const TrainButton = [
    {
        name: 'Personal Data',
        img: Checked ,
        path: '/personal',
        active: '#A0C6FC'
    },
    {
        name: 'Training',
        img: Checked ,
        path: '/train',
        active: '#A0C6FC'
    },
    {
        name: 'Background Checks',
        img: Checked ,
        path: '/bgchecks',
        active: '#A0C6FC'
    },
    {
        name: 'ID Badge',
        img: Checked ,
        path: '/ids',
        active: '#A0C6FC'
    },
    {
        name: 'Reference',
        img: Checked ,
        path: '/reference',
        active: '#A0C6FC'
    },
    {
        name: 'Getting Paid',
        img: Checked ,
        path: '/payment',
        active: '#A0C6FC'
    },
    {
        name: 'Right to Work and ID Checks',
        img: Checked ,
        path: '/work',
        active: '#A0C6FC'
    },
    {
        name: 'CV',
        img: Checked ,
        path: '/cv',
        active: '#A0C6FC'
    },
    {
        name: 'Next of Kin',
        img: Checked ,
        path: '/nextofkin',
        active: '#A0C6FC'
    },
    {
        name: 'Self Declaration',
        img: Checked ,    
        path: '/declaration',
        active: '#A0C6FC'
    },
    {
        name: 'Flu Vaccination Declaration',
        img: Checked ,    
        path: '/vaccination',
        active: '#A0C6FC'
    },
]

export const TrainButton2 = [
    {
        name: 'Personal Data',
        img: Checked ,
        path: '/personal2',
        active: '#A0C6FC'
    },
    {
        name: 'Training',
        img: Checked ,
        path: '/train2',
        active: '#A0C6FC'
    },
    {
        name: 'Background Checks',
        img: Checked ,
        path: '/bgchecks2',
        active: '#A0C6FC'
    },
    {
        name: 'ID Badge',
        img: Checked ,
        path: '/ids2',
        active: '#A0C6FC'
    },
    {
        name: 'Reference',
        img: Checked ,
        path: '/reference2',
        active: '#A0C6FC'
    },
    {
        name: 'Getting Paid',
        img: Checked ,
        path: '/payment2',
        active: '#A0C6FC'
    },
    {
        name: 'Right to Work and ID Checks',
        img: Checked ,
        path: '/work2',
        active: '#A0C6FC'
    },
    {
        name: 'CV',
        img: Checked ,
        path: '/cv2',
        active: '#A0C6FC'
    },
    {
        name: 'Next of Kin',
        img: Checked ,
        path: '/nextofkin2',
        active: '#A0C6FC'
    },
    {
        name: 'Self Declaration',
        img: Checked ,    
        path: '/declaration2',
        active: '#A0C6FC'
    },
    {
        name: 'Flu Vaccination Declaration',
        img: Checked ,    
        path: '/vaccination2',
        active: '#A0C6FC'
    },
]