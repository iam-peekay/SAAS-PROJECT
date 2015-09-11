// INPUT & FUNCTION FOR MAIN METRICS HOVERBOXES
var metricsDefinitions = [
  ['j_2', '<span><b>Social media marketing:</b>\n Paid marketing through social media sites (e.g. Facebook, Twitter, Pinterest, etc.)</span>' ],
  ['j_3', '<span><b>Search engine marketing (SEM):</b>\n A form of <i>paid</i> online marketing that promotes websites by increasing their visibility in search engine results pages (SERPs) through optimization and advertising</span>'],
  ['j_4','<span><b>Offline advertising:</b>\n Any form of paid marketing done through offline channels (e.g. radio and print advertising, TV ads, telemarketing, etc.)</span>' ],
  ['j_5', '<span><b>Word-of-mouth (WoM): </b>\n An unpaid form of marketing where customers tell people how much they like a product or service, and in turn, those people are more likely to try that product or service. This can be triggered by having a great product that delivers value, exceptional customer service, etc. </span>'],
  ['j_6', '<span><b>Referrals: </b>\n Very similar to pure word of mouth, except this is typically influenced by a company. Referral marketing is done to increase word of mouth marketing by encouraging customers and contacts to talk as much as possible about a brand or product</span>'],
  ['j_7', '<span><b>Content marketing: </b>\n A stretegic marketing approach focused on creating and distributing valuable and relevant content to attract and retain a targetted audience (both customers and prospects) with the goal of driving some profitable customer action (e.g. sign-ups, trials, etc.)</span>'],
  ['j_8', '<span><b>Search engine optimization (SEO): </b>\n A free form of marketing to increate visibility of a website in a search engine\'s unpaid results (i.e. "organic" or "earned" results) </span>'],
  ['j_56', '<span><b>Unique visitors: </b>\n Number of unique visitors who arrive at company’s website for the 1st time and proceed to browse. Even if the same visitor visits the site more than once in that period, they are counted only once</span>'],
  ['j_9', '<span><b>Field sales: </b>\n The sales guys who are traveling out in the field hunting deals</span>'],
  ['j_10', '<span><b>Marketing qualified leads: </b>\n Leads who are potentially interesting that a company gathers more information on by exposed them to the company’s lead nurturing email campaign. An MQL will continue to be nurtured until they are either disqualified as a lead or ready to be handed off to a salesperson</span>'],
  ['j_11', '<span><b>Sales qualified leads: </b>\n High potential leads that a company determines as a fit based on their pre-determined criteria. These leads get handed off to sales immediately for follow up consultation</span>'],
  ['j_12', '<span><b>Indirect channel sales: </b>\n Sales involving one or more intermediaries. Examples include retail (selling through a brick-and-mortar business or an ecommerce company like Amazon), Value-added resellers (VARs) that bundle a vendor\'s product or service with other products and services to bundled solution for customers, Managed service providers (MSPs), Consultants, Systems integrators (SIs), Original equipment manufacturers (OEMs), ISVs, wholesalers and distributors</span>'],
  ['j_13', '<span><b>Inside Sales (i.e. outbound prospecting): </b>\n Cold calling to reach out to prospective customers rather than waiting for them to come to you. Typically, this is handled by the sales development (SDRs) reps within a sales team </span>'],
  ['j_14', '<span><b>Opportunities: </b>\n Number of of visitors who sign-up for a trial (freemium model) or number of leads who convert to POCs</span>'],
  ['j_15', '<span><b>Closed deals: </b>\n Number of opportunities that converted to paying customers</span>'],
  ['j_16', '<span><b>Bookings: </b>\n Total value, for software and services, of committed contracts with customers sold in that period. If a contract period exceeds one year, it should be annualized to represent the value for the first year. May include renewals and upsells to existing customers</span>'],
  ['j_17', '<span><b>New customers: </b>\n Number of customers that began paying in the current period </span>'],
  ['j_18', '<span><b>Churned customers: </b>\n Number of paying accounts (customers) that churned in the current month </span>'],
  ['j_19', '<span><b>Existing customers: </b>\n Total number of existing paying accounts (customers) in the current month (excluding new, churned, upgraded and downgraded customers)</span>'],
  ['j_20', '<span><b>Upgrade customers: </b>\nNumber of existing paying accounts (customers) that upgraded their plan in the current month</span>'],
  ['j_21', '<span><b>No change customers: </b>\nNumber of existing paying accounts (customers) that neither upgraded nor downgraded in the current month</span>'],
  ['j_22', '<span><b>Downgrade customers: </b>\n Number of existing paying accounts (customers) that downgraded their plan in the current month</span>'],
  ['j_23', '<span><b>Total paying customers: </b>\nExisting customers + New customers - Churned customers</span>'],
  ['j_24', '<span><b>Total Revenue: </b>\nTotal GAAP revenue recognized for the period (MRR/ARR + Services revenue + Maintenance revenue + Other revenue)</span>'],
  ['j_25', '<span><b>Recurring revenue (MRR/ARR): </b>\nRecurring revenue earned for a product or service that is highly likely to continue in the future. This is revenue that is predictable, stable and can be counted on in the future with a high degree of certainty. Excludes one-time fees, and variable, usage, or consumption fees</span>'],
  ['j_26', '<span><b>Maintenance & services revenue: </b>\nTotal revenue recognized from professional services, maintenance, training or education services (excludes subscription revenues)</span>'],
  ['j_27', '<span><b>COGS: </b>\nTotal direct and indirect costs of products and services that have been sold (Cost of product + cost of services)</span>'],
  ['j_28', '<span><b>Cost of product: </b>\nAll direct expenses of software or services that have been sold. For SaaS companies, this primarily includes hosting services, support costs, data center costs, depreciation or operating lease expenses associated with computer equipment and software, overhead and amortization expense associated with capitalized software</span>'],
  ['j_29', '<span><b>Cost of maintenance & services: </b>\nAll costs associated with providing professional services (e.g. employee costs for professional services personnel)</span>'],
  ['j_30', '<span><b>Gross profit: </b>\n Money left over from revenues after accounting for the cost of products and the cost of services. Gross profit serves as the source for paying all additional expenses and future savings</span>'],
  ['j_31', '<span><b>Product gross profit: </b>\nMoney left over on product sales after subtracting out the direct expenses related to making the products</span>'],
  ['j_32', '<span><b>Maintenance/services gross profit: </b>\nMoney left over from services and maintenance revenue after subtracting out the direct expenses related to providing the maintenance and services</span>']


  ];

function hoverBox(arg1){
      $(document).ready(function() {
          for (var i = 0; i < arg1.length; i += 1) {
            $('#' + arg1[i][0] + '').tooltipster({
              content: $('<span>' + arg1[i][1] + '</span>'),
              maxWidth: 350,
              interactive: true,
              position: 'top',
              theme: 'tooltipster-default',
              animation: 'grow'
        });
      }});
      }

hoverBox(metricsDefinitions);

// INPUT & FUNCTION FOR DERIVED METRICS HOVERBOXES

var derivedMetricsDefinitions = [
    ['ARR', '<span><b>Annual Recurring Revenue (ARR): </b> The predictable and recurring portion of revenue from subscriptions and maintenance</span>' + '<br></br>' + '<center> <img src="http://latex.codecogs.com/svg.latex?MRR * 12" border="0" /> </center>'],
    ['ARPAnew', '<span><b>ARPA (new): </b> Average monthly recurring revenue per new paying account (customer)</span>' + '<br></br>' + '<center> <img src="http://latex.codecogs.com/svg.latex? {\\tiny%20\\frac {MRR\\; from\\;  NEW\\; customers} {Number\\; of\\; new\\; paying\\; accounts}} " border="0" /> </center>'],
    ['ARPAexisting', '<span><b>ARPA (existing): </b> Average monthly recurring revenue per existing paying account (customer)</span>' + '<br></br>' + '<center> <img src="http://latex.codecogs.com/svg.latex? {\\tiny%20\\frac{MRR\\; from\\; existing\\; customers}{Number\\; of\\; existing\\; paying\\; accounts}} " border="0" /> </center>'],
    ['ACV', '<span><b>ACV (annual contract value): </b> Annual contract value for subscription services per customer/account</span>' + '<br></br>' + '<center> <img src="http://latex.codecogs.com/svg.latex? {\\tiny%20\\frac{ARR}{Total\\; number\\; of\\; paying\\; accounts}} " border="0" /> </center>'],
    ['CACblended', '<span><b>CAC (blended): </b>Average cost to acquire a customer (average across paid and organic customers)</span>' + '<br></br>' + '<center> <img src="http://latex.codecogs.com/svg.latex? {\\tiny%20\\frac{CAC-related\\; expense}{Total\\; number\\; of\\; new\\; paying\\; accounts}} " border="0" /> </center>']
    ];

function derivedHoverBox(arg2){
      $(document).ready(function() {
          for (var i = 0; i < arg2.length; i += 1) {
            $('#' + arg2[i][0] + '').tooltipster({
              content: $('<span>' + arg2[i][1] + '</span>'),
              maxWidth: 400,
              interactive: true,
              position: 'left',
              theme: 'tooltipster-default',
              animation: 'grow'
        });
      }});
      }



derivedHoverBox(derivedMetricsDefinitions);

// FUNCTION FOR HIGHLIGHTING

var counterArr = [0,0,0,0,0,0,0,0,0,0]; // # of 0's depends on the # of derived metrics

var map={}; // connects each derived metric to it's derivatives
map[0] = [source811];
map[1] = [source611, source811];
map[2] = [source613, source811];
map[3] = [source71, source811];
map[4] = [source611, source302];
map[5] = [source611a, source302];

var sourceIDMap = []; // links ID and element name
sourceIDMap[0] = ['j_21', source811];
sourceIDMap[1] = ['j_17', source611];
sourceIDMap[2] = ['j_19', source613];
sourceIDMap[3] = ['j_23', source71];
sourceIDMap[4] = ['j_39', source302];
sourceIDMap[5] = ['j_18', source611a];


var colorMap={}; // links ID and original element color
colorMap['j_21'] = '#5CA4A9';
colorMap['j_17'] = '#ED6A5A';
colorMap['j_19'] = '#ED6A5A';
colorMap['j_23'] = '#ED6A5A';
colorMap['j_39'] = '#ED6A5A';
colorMap['j_18'] = '#5CA4A9';

function highLight(val)
{
    if(counterArr[val] % 2 == 0)
    {
        listSrc = map[val];
        var i=0;
        for(i = 0; i <listSrc.length; i++)
        {
            listSrc[i].removeAttr('rect/fill');
            listSrc[i].attr('rect/fill',{
                        type: 'linearGradient',
                        stops: [
                          { offset: '0%', color: '#F4F1BB'},
                          { offset: '100%', color: '#F4F1BB'}
                        ]
                        });

            listSrc[i].attr('rect/filter', { name: 'dropShadow', args: { dx: 2, dy: 2, blur: 3 } });
        }
    }
    else
    {
        listSrc = map[val];
        var i=0;
        for(i = 0; i <listSrc.length; i++)
        {
          var myColor;
          for ( var j = 0; j < sourceIDMap.length; j++ )
          {
            if (sourceIDMap[j][1].id == listSrc[i].id) {
              myColor = colorMap[sourceIDMap[j][0]];
            }
          }
            listSrc[i].attr('rect/fill',{
                    type: 'linearGradient',
                    stops: [
                      { offset: '0%', color: myColor},
                      { offset: '100%', color: myColor}
                    ]
                    });
            listSrc[i].removeAttr('rect/filter');
        }
    }
    counterArr[val] += 1;
}




// INPUT & FUNCTION FOR HIDE AND SHOW FUNCTIONALITY
  // 2-D array of elements that need to hidden at start
  // 2-D array of parentIDs that matches to the index of the parentMap
  // for loop with IDs and links


  var parentID =['j_58', 'j_11', 'j_21', 'j_26', 'j_29', 'j_32', 'j_38', 'j_39', 'j_17'];
  var parentMap = {};
  parentMap[0] = ['j_1', 'j_2', 'j_3', 'j_4', 'j_5', 'j_6', 'j_7', 'j_8', 'j_59', 'j_60', 'j_61', 'j_62', 'j_63', 'j_64', 'j_65', 'j_66'];
  parentMap[1] = ['j_9', 'j_12', 'j_13', 'j_67', 'j_71', 'j_72'];
  parentMap[2] = ['j_22','j_23', 'j_24', 'j_77', 'j_78', 'j_79'];
  parentMap[3] = ['j_27', 'j_28', 'j_84', 'j_85'];
  parentMap[4] = ['j_30', 'j_31', 'j_87', 'j_88'];
  parentMap[5] = ['j_33', 'j_34', 'j_90', 'j_91'];
  parentMap[6] = ['j_40', 'j_41', 'j_42', 'j_97', 'j_98', 'j_99'];
  parentMap[7] = ['j_46', 'j_47', 'j_48', 'j_49', 'j_50', 'j_51', 'j_52', 'j_53', 'j_54', 'j_55', 'j_56', 'j_57', 'j_103', 'j_104', 'j_105', 'j_106', 'j_107', 'j_108', 'j_109', 'j_110', 'j_111', 'j_112', 'j_113', 'j_114', 'j_115', 'j_116'];
  parentMap[8] = ['j_18', 'j_19', 'j_103', 'j_104'];


 $(document).ready(function() {
  for (var i = 0; i < parentID.length; i++) {
    for (var j=0; j < parentMap[i].length; j++) {
          $('#' + parentMap[i][j]).css({'display': 'none'});
    }
  }
  $('#menu-toggle').click( function() {
    for (var i = 0; i < parentID.length; i++) {
      for (var j=0; j < parentMap[i].length; j++) {
        source302.transition('position/y', 2400,  {delay: 50, duration: 400});
        source701.transition('position/y', 2500,  {delay: 50, duration: 400});
        source702.transition('position/y', 2500,  {delay: 50, duration: 400});
        source703.transition('position/y', 2800,  {delay: 50, duration: 400});
        source801.transition('position/y', 2600,  {delay: 50, duration: 400});
        source802.transition('position/y', 2600,  {delay: 50, duration: 400});
        source901.transition('position/y', 2600,  {delay: 50, duration: 400});
        source902.transition('position/y', 2700,  {delay: 50, duration: 400});
        source903.transition('position/y', 2700,  {delay: 50, duration: 400});
        source1100.transition('position/y', 2900,  {delay: 50, duration: 400});
        source1101.transition('position/y', 2900,  {delay: 50, duration: 400});
        source1200.transition('position/y', 3000,  {delay: 50, duration: 400});
        source1201.transition('position/y', 3000,  {delay: 50, duration: 400});
            $('#' + parentMap[i][j]).css({'display': 'initial'});
      }
    }

  });

});


$(document).ready(function() {
  $('#' + parentID[0]).click( function()  {
    $('#' + parentID[0]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[0].length; j++) {
      if( $('#' + parentMap[0][j]).css('display')=='none' ) {
        target1.transition('position/y', 260,  {delay: 50, duration: 400});
        source31.transition('position/y', 340,  {delay: 50, duration: 400});
        source32.transition('position/y', 340,  {delay: 50, duration: 400});
        $('#' + parentMap[0][j]).css({'display': 'initial'});
      } else {
        $('#' + parentMap[0][j]).css({'display': 'none'});
        target1.transition('position/y', 100,  {delay: 50, duration: 300});
        source31.transition('position/y', 220,  {delay: 50, duration: 300});
        source32.transition('position/y', 220,  {delay: 50, duration: 300});
      }
}
});
});

$(document).ready(function() {
  $('#' + parentID[1]).click( function()  {
    $('#' + parentID[1]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[1].length; j++) {
      if( $('#' + parentMap[1][j]).css('display')=='none' ) {
        if ( $('#j_1').css('display') == 'none') {
          $('#' + parentMap[1][j]).css({'display': 'initial'});
        } else {
          source321.transition('position/y', 300, {delay: 50, duration: 300});
          source322.transition('position/y', 420, {delay: 50, duration: 300});
          source25.transition('position/y', 420, {delay: 50, duration: 300});
          $('#' + parentMap[1][j]).css({'display': 'initial'});
        }
      } else {
        $('#' + parentMap[1][j]).css({'display': 'none'});
      }
}
});
});

$(document).ready(function() {
  $('#' + parentID[2]).click( function()  {
    $('#' + parentID[2]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[2].length; j++) {
      if( $('#' + parentMap[2][j]).css('display')=='none' ) {
        $('#' + parentMap[2][j]).css({'display': 'initial'});
      } else {
        $('#' + parentMap[2][j]).css({'display': 'none'});
      }
}
});
});

$(document).ready(function() {
  $('#' + parentID[3]).click( function()  {
    $('#' + parentID[3]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[3].length; j++) {
      if( $('#' + parentMap[3][j]).css('display')=='none' ) {
        $('#' + parentMap[3][j]).css({'display': 'initial'});
      } else {
        $('#' + parentMap[3][j]).css({'display': 'none'});
      }
}
});
});


$(document).ready(function() {
  $('#' + parentID[4]).click( function()  {
    $('#' + parentID[4]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[4].length; j++) {
      if( $('#' + parentMap[4][j]).css('display')=='none' ) {
        $('#' + parentMap[4][j]).css({'display': 'initial'});
      } else {
        $('#' + parentMap[4][j]).css({'display': 'none'});
      }
}
});
});

$(document).ready(function() {
  $('#' + parentID[5]).click( function()  {
    $('#' + parentID[5]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[5].length; j++) {
      if( $('#' + parentMap[5][j]).css('display')=='none' ) {
        $('#' + parentMap[5][j]).css({'display': 'initial'});
      } else {
        $('#' + parentMap[5][j]).css({'display': 'none'});
      }
}
});
});

$(document).ready(function() {
  
        $('#j_43').css({'display': 'none'});
        $('#j_44').css({'display': 'none'});
        $('#j_45').css({'display': 'none'});
        $('#j_100').css({'display': 'none'});
        $('#j_101').css({'display': 'none'});
        $('#j_102').css({'display': 'none'});
});

$(document).ready(function() {
  $('#' + parentID[6]).click( function()  {
    $('#' + parentID[6]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[6].length; j++) {
      if( $('#' + parentMap[6][j]).css('display')=='none' ) {
        $('#' + parentMap[6][j]).css({'display': 'initial'});
        $('#j_43').css({'display': 'none'});
        $('#j_44').css({'display': 'none'});
        $('#j_45').css({'display': 'none'});
        $('#j_100').css({'display': 'none'});
        $('#j_101').css({'display': 'none'});
        $('#j_102').css({'display': 'none'});
      } else {
        $('#' + parentMap[6][j]).css({'display': 'none'});
      }
}
});
});


$(document).ready(function() {
  $('#' + parentID[7]).click( function()  {
    $('#' + parentID[7]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[7].length; j++) {
      if( $('#' + parentMap[7][j]).css('display')=='none' ) {
        source302.transition('position/y', 2300,  {delay: 50, duration: 400});
        source701.transition('position/y', 2500,  {delay: 50, duration: 400});
        source702.transition('position/y', 2500,  {delay: 50, duration: 400});
        source703.transition('position/y', 2800,  {delay: 50, duration: 400});
        source801.transition('position/y', 2600,  {delay: 50, duration: 400});
        source802.transition('position/y', 2600,  {delay: 50, duration: 400});
        source901.transition('position/y', 2600,  {delay: 50, duration: 400});
        source902.transition('position/y', 2700,  {delay: 50, duration: 400});
        source903.transition('position/y', 2700,  {delay: 50, duration: 400});
        source1100.transition('position/y', 2900,  {delay: 50, duration: 400});
        source1101.transition('position/y', 2900,  {delay: 50, duration: 400});
        source1200.transition('position/y', 3000,  {delay: 50, duration: 400});
        source1201.transition('position/y', 3000,  {delay: 50, duration: 400});
        $('#' + parentMap[7][j]).css({'display': 'initial'});
      } else {
        $('#' + parentMap[7][j]).css({'display': 'none'});
        source302.transition('position/y', 1960,  {delay: 50, duration: 400});
        source701.transition('position/y', 1960,  {delay: 50, duration: 400});
        source702.transition('position/y', 1960,  {delay: 50, duration: 400});
        source703.transition('position/y', 1960,  {delay: 50, duration: 400});
        source801.transition('position/y', 1960,  {delay: 50, duration: 400});
        source802.transition('position/y', 1960,  {delay: 50, duration: 400});
        source901.transition('position/y', 1960,  {delay: 50, duration: 400});
        source902.transition('position/y', 1960,  {delay: 50, duration: 400});
        source903.transition('position/y', 1960,  {delay: 50, duration: 400});
        source1100.transition('position/y', 1960,  {delay: 50, duration: 400});
        source1101.transition('position/y', 1960,  {delay: 50, duration: 400});
        source1200.transition('position/y', 1960,  {delay: 50, duration: 400});
        source1201.transition('position/y', 1960,  {delay: 50, duration: 400});
      }
}
});
});


$(document).ready(function() {
  $('#' + parentID[8]).click( function()  {
    $('#' + parentID[8]).css({'display': 'initial'});
    for (var j = 0; j < parentMap[8].length; j++) {
      if( $('#' + parentMap[8][j]).css('display')=='none' ) {
        $('#' + parentMap[8][j]).css({'display': 'initial'});
      } else {
        $('#' + parentMap[8][j]).css({'display': 'none'});
      }
}
});
});
