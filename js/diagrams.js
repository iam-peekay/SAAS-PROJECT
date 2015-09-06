// Create graph model

var graph = new joint.dia.Graph;

// Create paper model that contains the entire flow chart

var paper1 = new joint.dia.Paper({
    el: $('#mydiagram'),
    width: 1100,
    height: 3350,
    model: graph,
    gridSize: 1

});

paper1.setOrigin(-250,50);



// ROW 1: TOP OF FUNNEL SOURCES
var source11 = new joint.shapes.basic.Rect({
    position: { x: 400, y: 0 },
    size: { width: 120, height: 60 },
    attrs: { rect: {
                fill: {
                    type: 'linearGradient',
                    stops: [
                      { offset: '0%', color: '#5CA4A9'},
                      { offset: '100%', color: '#5CA4A9'}
                    ]
                    }},
              text: {
                text: 'Other organic\n sources',
                fill: '#384047',
                'font-family': 'Open Sans',
                'font-size': 16,
                'font-weight': 'bold',
                'font-variant': 'small-caps'
              }}
});

/*
var source12 = source11.clone().translate(130, 0).attr('text/text', 'Social media');
var source13 = source11.clone().translate(260, 0).attr('text/text', 'Offline\n advertising');
var source14 = source11.clone().translate(390, 0).attr('text/text', 'Other paid\n sources');
var source21 = source11.clone().translate(-80, 140).attr('text/text', 'Word of mouth');
var source22 = source11.clone().translate(50, 140).attr('text/text', 'Referrals');
var source23 = source11.clone().translate(180, 140).attr('text/text', 'Content\n marketing');
var source24 = source11.clone().translate(310, 140).attr('text/text', 'SEO');
var source25 = source11.clone().translate(440, 140).attr('text/text', 'Other organic\n sources');
*/

var source12 = source11.clone().translate(280, -20).attr('text/text', 'Social media');
var source13 = source11.clone().translate(420, 40).attr('text/text', 'SEM');
var source14 = source11.clone().translate(480, 120).attr('text/text', 'Offline\n advertising');
var source21 = source11.clone().translate(-60, 80).attr('text/text', 'Word of mouth');
var source22 = source11.clone().translate(-100, 160).attr('text/text', 'Referrals');
var source23 = source11.clone().translate(140, -20).attr('text/text', 'Content\n marketing');
var source24 = source11.clone().translate(-120, 240).attr('text/text', 'SEO');
var source25 = source11.clone().translate(460, 220).attr('text/text', 'Field sales \n (Direct channel)');

// UNIQUE VISITORS BOX
var target1 = source11.clone().translate(180, 80).attr({text: {text: 'Marketing & \n lead gen*'}, rect: {fill: '#ED6A5A'}});
// target1 was y: 280 originally

target1.embed(source11).embed(source12).embed(source13).embed(source14).embed(source21).embed(source22).embed(source23).embed(source24).embed(source25);

// MIDDLE OF FUNNEL BOXES
var source31 = target1.clone().translate(-90, 120).attr('text/text', 'MQL');
var source32 = target1.clone().translate(90, 260).attr('text/text', 'SQL*');
var source321 = source32.clone().translate(190, -45).attr({text: {text: 'Indirect \n channel'}, rect: {fill:  '#5CA4A9'}});
var source322 = source32.clone().translate(190, 45).attr({text: {text: 'Inside \n sales'}, rect: {fill:  '#5CA4A9'}});
var source41 = source32.clone().translate(-100, 240).attr('text/text', 'Opportunities');

source32.embed(source321).embed(source322);

// TOP OF LINE
var source51 = source41.clone().translate(0, 180).attr('text/text', 'Closed deals');
var source511 = source51.clone().translate(180, 0).attr('text/text', 'Bookings');
var source611 = source51.clone().translate(0, 180).attr('text/text', 'New customers*');
var source611a = source611.clone().translate(180, -50).attr({text: {text: 'Paid \n new customers'}, rect: {fill:  '#5CA4A9'}});
var source611b = source611.clone().translate(180, 50).attr({text: {text: 'Free \n new customers'}, rect: {fill:  '#5CA4A9'}});
var source612 = source611.clone().translate(180, 180).attr('text/text', 'Churned\n customers');
var source613 = source611.clone().translate(-180, 180).attr('text/text', 'Existing\n customers*');
var source613a = source613.clone().translate(-180, -90).attr({text: {text: 'Upgrade \n customers'}, rect: {fill:  '#5CA4A9'}});
var source613b = source613.clone().translate(-180, 0).attr({text: {text: 'No change \n customers'}, rect: {fill:  '#5CA4A9'}});
var source613c = source613.clone().translate(-180, 90).attr({text: {text: 'Downgrade \n customers'}, rect: {fill:  '#5CA4A9'}});
var source71 = source611.clone().translate(0, 180).attr('text/text', 'Total paying\n customers');
var source81 = source71.clone().translate(0, 180).attr('text/text', 'Total revenue*');
var source811 = source81.clone().translate(180, -45).attr({text: {text: 'Recurring\n revenue \n(mrr/arr)'}, rect: {fill:  '#5CA4A9'}});
var source812 = source81.clone().translate(180, 45).attr({text: {text: 'Maintenance & \n services revenue'}, rect: {fill: '#5CA4A9'}});

source613.embed(source613a).embed(source613b).embed(source613c);
source71.embed(source611).embed(source612).embed(source613);
source81.embed(source811).embed(source812);

// GROSS PROFIT
var source91 = source81.clone().translate(0, 180).attr('text/text', 'COGS*');
var source911 = source91.clone().translate(180, -45).attr({text: {text: 'Cost of \n product'}, rect: {fill:  '#5CA4A9'}});
var source912 = source91.clone().translate(180, 45).attr({text: {text: 'Cost of \n maint & services'}, rect: {fill:  '#5CA4A9'}});
var source101 = source91.clone().translate(0, 180).attr('text/text', 'Gross Profit*');
var source1011 = source101.clone().translate(180, -45).attr({text: {text: 'Product \n gross profit'}, rect: {fill: '#5CA4A9'}});
var source1012 = source101.clone().translate(180, 45).attr({text: {text: 'Maint/services \n gross profit'}, rect: {fill: '#5CA4A9'}});

source91.embed(source911).embed(source912);
source101.embed(source1011).embed(source1012);

// OPERATING EXPENSES
var source201 = source101.clone().translate(0, 180).attr('text/text', 'Sales &\n marketing');
var source202 = source101.clone().translate(240, 200).attr('text/text', 'Research &\n development');
var source203 = source101.clone().translate(-320, 200).attr('text/text', 'General &\n administrative');
var source301 = source201.clone().translate(-100, 120).attr('text/text', 'Not\n CAC-related*');
var source302 = source201.clone().translate(100, 120).attr('text/text', 'CAC-related*');
var source401 = source301.clone().translate(0, 100).attr('text/text', 'Customer service\n costs');
var source501 = source401.clone().translate(90, 100).attr({text: {text: '# of \n tickets'}, rect: {fill: '#5CA4A9'}});;
var source502 = source401.clone().translate(-90, 100).attr({text: {text: 'Cost per \n ticket'}, rect: {fill: '#5CA4A9'}});;
var source601 = source502.clone().translate(-140, 100).attr({text: {text: '# of cs\n reps'}, rect: {fill: '#9BC1BC'}});
var source602 = source502.clone().translate(0, 100).attr({text: {text: 'Tickets handled \n per rep'}, rect: {fill: '#9BC1BC'}});
var source603 = source502.clone().translate(140, 100).attr({text: {text: 'Salary \n per rep'}, rect: {fill: '#9BC1BC'}});
var source701 = source302.clone().translate(180, 100).attr('text/text', 'Cost to\n serve');
var source702 = source302.clone().translate(-180, 100).attr('text/text', 'Sales expense');
var source703 = source302.clone().translate(0, 400).attr('text/text', 'Marketing\n expense');
var source801 = source701.clone().translate(90, 100).attr({text: {text: 'Infrastructure'}, rect: {fill: '#5CA4A9'}});
var source802 = source701.clone().translate(-90, 100).attr({text: {text: 'On-boarding \n costs'}, rect: {fill: '#5CA4A9'}});
var source901 = source702.clone().translate(0, 100).attr({text: {text: 'Sales personnel\n costs'}, rect: {fill: '#5CA4A9'}});
var source902 = source901.clone().translate(90, 100).attr({text: {text: 'Inbound sales'}, rect: {fill: '#9BC1BC'}});
var source903 = source901.clone().translate(-90, 100).attr({text: {text: 'Outbound sales'}, rect: {fill: '#9BC1BC'}});
var source1100 = source703.clone().translate(90, 100).attr({text: {text: 'Marketing \npersonnel costs'}, rect: {fill: '#5CA4A9'}});
var source1101 = source703.clone().translate(-90, 100).attr({text: {text: 'Marketing\n program costs'}, rect: {fill: '#5CA4A9'}});
var source1200 = source1101.clone().translate(-90, 100).attr({text: {text: 'Cost per\n channel'}, rect: {fill: '#9BC1BC'}});
var source1201 = source1101.clone().translate(90, 100).attr({text: {text: '# of\n channels'}, rect: {fill: '#9BC1BC'}});


source101.embed(source201).embed(source202).embed(source203);
source201.embed(source301).embed(source302);
source502.embed(source601).embed(source602).embed(source603);
source301.embed(source401);
source302.embed(source701).embed(source702).embed(source703);
source401.embed(source501).embed(source502);
source1101.embed(source1200).embed(source1201);
source703.embed(source1100).embed(source1101);
source901.embed(source902).embed(source903);
source702.embed(source901);
source701.embed(source801).embed(source802);
source611.embed(source611a).embed(source611b);


// Links from top of funnel to unique visitors box
var link11 = new joint.dia.Link({
    source: { id: source11.id },
    target: { id: target1.id },
    // router: { name: 'none'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
    }
}
});

var link12 = new joint.dia.Link({
    source: { id: source12.id },
    target: { id: target1.id },
    // router: { name: 'none'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link13 = new joint.dia.Link({
    source: { id: source13.id },
    target: { id: target1.id },
    // router: { name: 'none'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      'marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link14 = new joint.dia.Link({
    source: { id: source14.id },
    target: { id: target1.id },
    // router: { name: 'none'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link21 = new joint.dia.Link({
    source: { id: source21.id },
    target: { id: target1.id },
    // router: { name: 'none'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      'marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link22 = new joint.dia.Link({
    source: { id: source22.id },
    target: { id: target1.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link23 = new joint.dia.Link({
    source: { id: source23.id },
    target: { id: target1.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link24 = new joint.dia.Link({
    source: { id: source24.id },
    target: { id: target1.id },
  //  router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link25 = new joint.dia.Link({
    source: { id: source25.id },
    target: { id: source32.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link31 = new joint.dia.Link({
    source: { id: target1.id },
    target: { id: source31.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link32 = new joint.dia.Link({
    source: { id: target1.id },
    target: { id: source32.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link32a = new joint.dia.Link({
    source: { id: source31.id },
    target: { id: source32.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link321 = new joint.dia.Link({
    source: { id: source321.id },
    target: { id: source32.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link322 = new joint.dia.Link({
    source: { id: source322.id },
    target: { id: source32.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link41 = new joint.dia.Link({
    source: { id: source32.id },
    target: { id: source41.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link51 = new joint.dia.Link({
    source: { id: source41.id },
    target: { id: source51.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link511 = new joint.dia.Link({
    source: { id: source51.id },
    target: { id: source511.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link611 = new joint.dia.Link({
    source: { id: source51.id },
    target: { id: source611.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link611a = new joint.dia.Link({
    source: { id: source611a.id },
    target: { id: source611.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link611b = new joint.dia.Link({
    source: { id: source611b.id },
    target: { id: source611.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link613a = new joint.dia.Link({
    source: { id: source613a.id },
    target: { id: source613.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link613b = new joint.dia.Link({
    source: { id: source613b.id },
    target: { id: source613.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link613c = new joint.dia.Link({
    source: { id: source613c.id },
    target: { id: source613.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link71 = new joint.dia.Link({
    source: { id: source611.id },
    target: { id: source71.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link612 = new joint.dia.Link({
    source: { id: source612.id },
    target: { id: source71.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link613 = new joint.dia.Link({
    source: { id: source613.id },
    target: { id: source71.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link81 = new joint.dia.Link({
    source: { id: source71.id },
    target: { id: source81.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link811 = new joint.dia.Link({
    source: { id: source811.id },
    target: { id: source81.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link812 = new joint.dia.Link({
    source: { id: source812.id },
    target: { id: source81.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link91 = new joint.dia.Link({
    source: { id: source81.id },
    target: { id: source91.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link911 = new joint.dia.Link({
    source: { id: source911.id },
    target: { id: source91.id },
  //  router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link912 = new joint.dia.Link({
    source: { id: source912.id },
    target: { id: source91.id },
  //  router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link101 = new joint.dia.Link({
    source: { id: source91.id },
    target: { id: source101.id },
  //  router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link1011 = new joint.dia.Link({
    source: { id: source1011.id },
    target: { id: source101.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link1012 = new joint.dia.Link({
    source: { id: source1012.id },
    target: { id: source101.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link201 = new joint.dia.Link({
    source: { id: source101.id },
    target: { id: source201.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link202 = new joint.dia.Link({
    source: { id: source101.id },
    target: { id: source202.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link203 = new joint.dia.Link({
    source: { id: source101.id },
    target: { id: source203.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link301 = new joint.dia.Link({
    source: { id: source301.id },
    target: { id: source201.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link302 = new joint.dia.Link({
    source: { id: source302.id },
    target: { id: source201.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link401 = new joint.dia.Link({
    source: { id: source401.id },
    target: { id: source301.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link501 = new joint.dia.Link({
    source: { id: source501.id },
    target: { id: source401.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link502 = new joint.dia.Link({
    source: { id: source502.id },
    target: { id: source401.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link601 = new joint.dia.Link({
    source: { id: source601.id },
    target: { id: source502.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link602 = new joint.dia.Link({
    source: { id: source602.id },
    target: { id: source502.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link603 = new joint.dia.Link({
    source: { id: source603.id },
    target: { id: source502.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link701 = new joint.dia.Link({
    source: { id: source701.id },
    target: { id: source302.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link702 = new joint.dia.Link({
    source: { id: source702.id },
    target: { id: source302.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link703 = new joint.dia.Link({
    source: { id: source703.id },
    target: { id: source302.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link801 = new joint.dia.Link({
    source: { id: source801.id },
    target: { id: source701.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link802 = new joint.dia.Link({
    source: { id: source802.id },
    target: { id: source701.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link901 = new joint.dia.Link({
    source: { id: source901.id },
    target: { id: source702.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link902 = new joint.dia.Link({
    source: { id: source902.id },
    target: { id: source901.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link903 = new joint.dia.Link({
    source: { id: source903.id },
    target: { id: source901.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link1100 = new joint.dia.Link({
    source: { id: source1100.id },
    target: { id: source703.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link1101 = new joint.dia.Link({
    source: { id: source1101.id },
    target: { id: source703.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link1200 = new joint.dia.Link({
    source: { id: source1201.id },
    target: { id: source1101.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

var link1201 = new joint.dia.Link({
    source: { id: source1200.id },
    target: { id: source1101.id },
    // router: { name: 'manhattan'},
    connector: {name: 'smooth'},
    attrs: {
      '.connection': {
        stroke: '#384047',
        'stroke-width': 3
      },
      '.marker-target': {
        stroke: '#F26D6D',
        fill: '#F26D6D',
        d: 'M 10 0 L 0 5 L 10 10 z'
      }
    }
});

// ADD CELLS TO GRAPH
graph.addCells([source11, source12, source13, source14, source21, source22, source23, source24, source25, source31, source32, source321, source322, source41, source51, source511, source611, source611a, source611b, source612, source613, source613a, source613b, source613c, source71, source81, source811, source812, source91, source911, source912, source101, source1011, source1012, source201, source202, source203, source301, source302, source401, source501, source502, source601, source602, source603, source701, source702, source703, source801, source802, source901, source902, source903, source1100, source1101, source1200, source1201, target1, link11, link12, link13, link14, link21, link22, link23, link24, link25, link31, link32, link32a, link321, link322, link41, link51, link511, link611, link613a,  link613b, link613c, link611, link612, link613, link71, link81, link811, link812, link91, link911, link912, link101, link1011, link1012, link201, link202, link203, link301, link302, link401, link501, link502, link601, link602, link603, link611a, link611b, link701, link702, link703, link801, link802, link901, link902, link903, link1100, link1101, link1200, link1201]);

target1.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4, blur: 4, color: '#5CA4A9' } });
source32.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4,blur: 4, color: '#5CA4A9'} });
source611.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4, blur: 4, color: '#5CA4A9' } });
source613.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4, blur: 4, color: '#5CA4A9'} });
source81.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4, blur: 4, color: '#5CA4A9' } });
source91.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4, blur: 4, color: '#5CA4A9' } });
source101.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4, blur: 4, color: '#5CA4A9' } });
source301.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4, blur: 4, color: '#5CA4A9' } });
source302.attr('rect/filter', { name: 'dropShadow', args: { dx: 4, dy: 4, blur: 4, color: '#5CA4A9' } });

// FIT CONTENT TO PAPER

paper1.scaleContentToFit({
        padding: 50,
        minScale: .7,
        maxScale: 1
    });
