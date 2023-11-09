import {
  CountryType,
  ILastYearTotalTurnoverTypes,
  INoOfStaffTypes,
  ITradingCurrencyTypes,
  IYearsClientTradingTypes,
} from '../../types/types';

export const yearsClientTradingTypes: IYearsClientTradingTypes[] = [
  '0-5',
  '5-10',
  '10-15',
  '15-20',
  '20-25',
  '25+',
];

export const lastYearTotalTurnoverTypes: ILastYearTotalTurnoverTypes[] = [
  'below $1m',
  '$1m-$3m',
  '$3m-$5m',
  '$5m-$10m',
  '$ Above of $10m',
];

export const noOfStaffTypes: INoOfStaffTypes[] = [
  '0-5',
  '5-10',
  '10-15',
  '15-20',
  '20-25',
  '25-30',
  '30-35',
  '35-40',
  '40+',
];

export const tradingCurrencyTypes: ITradingCurrencyTypes[] = [
  'usd',
  'eur',
  'gbp',
  'bdt',
  'jpy',
  'aud',
  'cad',
  'chf',
  'cny',
  'sgd',
  'hkd',
  'sek',
  'nzd',
  'krw',
  'inr',
  'brl',
  'zar',
  'mxn',
  'try',
  'rub',
  'aed',
  'huf',
  'pln',
  'thb',
  'dkk',
  'myr',
  'nok',
  'czk',
  'ils',
  'clp',
  'sar',
  'zar',
  'sgd',
  'aed',
  'hkd',
  'pen',
  'qar',
  'cop',
  'sek',
  'ngn',
  'idr',
  'egp',
  'kwd',
  'ars',
  'vnd',
  'twd',
  'uah',
  'clp',
  'php',
  'cop',
  'rsd',
  'ron',
  'cve',
  'xof',
  'other',
];

export const judicialCountryArray: CountryType[] = [
  'afghanistan af',
  'albania al',
  'algeria dz',
  'andorra ad',
  'angola ao',
  'antigua and barbuda ag',
  'argentina ar',
  'armenia am',
  'australia au',
  'austria at',
  'azerbaijan az',
  'bahamas bs',
  'bahrain bh',
  'bangladesh bd',
  'barbados bb',
  'belarus by',
  'belgium be',
  'belize bz',
  'benin bj',
  'bhutan bt',
  'bolivia bo',
  'bosnia and herzegovina ba',
  'botswana bw',
  'brazil br',
  'brunei bn',
  'bulgaria bg',
  'burkina faso bf',
  'burundi bi',
  'cabo verde cv',
  'cambodia kh',
  'cameroon cm',
  'canada ca',
  'central african republic cf',
  'chad td',
  'chile cl',
  'china cn',
  'colombia co',
  'comoros km',
  'congo cg',
  'costa rica cr',
  'croatia hr',
  'cuba cu',
  'cyprus cy',
  'czech republic cz',
  'denmark dk',
  'djibouti dj',
  'dominica dm',
  'dominican republic do',
  'east timor tl',
  'ecuador ec',
  'egypt eg',
  'el salvador sv',
  'equatorial guinea gq',
  'eritrea er',
  'estonia ee',
  'eswatini sz',
  'ethiopia et',
  'fiji fj',
  'finland fi',
  'france fr',
  'gabon ga',
  'gambia gm',
  'georgia ge',
  'germany de',
  'ghana gh',
  'greece gr',
  'grenada gd',
  'guatemala gt',
  'guinea gn',
  'guinea-bissau gw',
  'guyana gy',
  'haiti ht',
  'honduras hn',
  'hungary hu',
  'iceland is',
  'india in',
  'indonesia id',
  'iran ir',
  'iraq iq',
  'ireland ie',
  'israel il',
  'italy it',
  'ivory coast ci',
  'jamaica jm',
  'japan jp',
  'jordan jo',
  'kazakhstan kz',
  'kenya ke',
  'kiribati ki',
  'kosovo xk',
  'kuwait kw',
  'kyrgyzstan kg',
  'laos la',
  'latvia lv',
  'lebanon lb',
  'lesotho ls',
  'liberia lr',
  'libya ly',
  'liechtenstein li',
  'lithuania lt',
  'luxembourg lu',
  'madagascar mg',
  'malawi mw',
  'malaysia my',
  'maldives mv',
  'mali ml',
  'malta mt',
  'marshall islands mh',
  'mauritania mr',
  'mauritius mu',
  'mexico mx',
  'micronesia fm',
  'moldova md',
  'monaco mc',
  'mongolia mn',
  'montenegro me',
  'morocco ma',
  'mozambique mz',
  'myanmar mm',
  'namibia na',
  'nauru nr',
  'nepal np',
  'netherlands nl',
  'new zealand nz',
  'nicaragua ni',
  'niger ne',
  'nigeria ng',
  'north macedonia mk',
  'norway no',
  'oman om',
  'pakistan pk',
  'palau pw',
  'panama pa',
  'papua new guinea pg',
  'paraguay py',
  'peru pe',
  'philippines ph',
  'poland pl',
  'portugal pt',
  'qatar qa',
  'romania ro',
  'russia ru',
  'rwanda rw',
  'saint kitts and nevis kn',
  'saint lucia lc',
  'saint vincent and the grenadines vc',
  'samoa ws',
  'san marino sm',
  'sao tome and principe st',
  'saudi arabia sa',
  'senegal sn',
  'serbia rs',
  'seychelles sc',
  'sierra leone sl',
  'singapore sg',
  'slovakia sk',
  'slovenia si',
  'solomon islands sb',
  'somalia so',
  'south africa za',
  'south korea kr',
  'south sudan ss',
  'spain es',
  'sri lanka lk',
  'sudan sd',
  'suriname sr',
  'sweden se',
  'switzerland ch',
  'syria sy',
  'taiwan tw',
  'tajikistan tj',
  'tanzania tz',
  'thailand th',
  'togo tg',
  'tonga to',
  'trinidad and tobago tt',
  'tunisia tn',
  'turkey tr',
  'turkmenistan tm',
  'tuvalu tv',
  'uganda ug',
  'ukraine ua',
  'united arab emirates ae',
  'united kingdom gb',
  'united states us',
  'uruguay uy',
  'uzbekistan uz',
  'vanuatu vu',
  'vatican city va',
  'venezuela ve',
  'vietnam vn',
  'yemen ye',
  'zambia zm',
  'zimbabwe zw',
];

export const multiFormSearchFiledName = [
  'judicialCountry',
  'clientRegisteredName',
  'emailAddress',
  'officePhone',
  'address',
  'emergencyContactName',
  'emergencyContactDesignation',
  'emergencyContactEmail',
  'emergencyContactPhone',
];
