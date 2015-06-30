// Create graph model

var graph = new joint.dia.Graph;

// Create paper model that contains the entire flow chart

var paper1 = new joint.dia.Paper({
    el: $('#mydiagram'),
    width: 1000,
    height: 800,
    model: graph,
    gridSize: 10
});

paper1.setOrigin(-250,0);

// paper1.fitToContent([opt.gridWidth: 0], [opt.gridHeight: 0], [opt.padding: 10]);

// ROW 1: Top of funnel sources
var source11 = new joint.shapes.basic.Rect({
    position: { x: 360, y: 50 },
    size: { width: 120, height: 60 },
    attrs: { rect: {
                fill: {
                    type: 'linearGradient',
                    stops: [
                      { offset: '0%', color: '#e48842'},
                      { offset: '100%', color: '#e48842'}
                    ]
                    }},
              text: {
                text: 'SEM',
                fill: '#eeeeee',
                'font-family': 'Open Sans',
                'font-size': 16,
                'font-weight': 'bold',
                'font-variant': 'small-caps'
              }}
});

//                       { offset: '0%', color: '#F26D6D'}
//                      { offset: '100%', color: '#f05656'}
var source12 = source11.clone().translate(130, 0).attr('text/text', 'Social media');
var source13 = source11.clone().translate(260, 0).attr('text/text', 'Offline\n advertising');
var source14 = source11.clone().translate(390, 0).attr('text/text', 'Other paid\n sources');

/* ASK PRANEEt
source11.embed(source12, source13);
*/

var source15 = source11.clone().translate(-80, 90).attr('text/text', 'Word of mouth');
var source16 = source11.clone().translate(50, 90).attr('text/text', 'Referrals');
var source17 = source11.clone().translate(180, 90).attr('text/text', 'Content\n marketing');
var source18 = source11.clone().translate(310, 90).attr('text/text', 'SEO');
var source19 = source11.clone().translate(440, 90).attr('text/text', 'Other organic\n sources');

// ROW 2: unique visitors box
var target1 = source11.clone().translate(600, 45).attr('text/text', 'Unique visitors');

// Links from top of funnel to unique visitors box
var link11 = new joint.dia.Link({
    source: { id: source11.id },
    target: { id: target1.id },
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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

var link12 = new joint.dia.Link({
    source: { id: source12.id },
    target: { id: target1.id },
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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

var link13 = new joint.dia.Link({
    source: { id: source13.id },
    target: { id: target1.id },
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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

var link15 = new joint.dia.Link({
    source: { id: source15.id },
    target: { id: target1.id },
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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

var link16 = new joint.dia.Link({
    source: { id: source16.id },
    target: { id: target1.id },
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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

var link17 = new joint.dia.Link({
    source: { id: source17.id },
    target: { id: target1.id },
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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

var link18 = new joint.dia.Link({
    source: { id: source18.id },
    target: { id: target1.id },
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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

var link19 = new joint.dia.Link({
    source: { id: source19.id },
    target: { id: target1.id },
    router: { name: 'manhattan'},
    connector: {name: 'rounded'},
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

// ADD CELLS TO GRAPH
graph.addCells([source11, source12, source13, source14, source15, source16, source17, source18, source19, target1, link11, link12, link13, link14, link15, link16, link17, link18, link19]);

// FIXING MULTIPLE LINKS BETWEEN ELEMENTS

function adjustVertices(graph, target1) {

    // If the cell is a view, find its model.
    target1 = target1.model || target1;

    if (target1 instanceof joint.dia.Element) {

        _.chain(graph.getConnectedLinks(target1)).groupBy(function(link) {
            // the key of the group is the model id of the link's source or target, but not our cell id.
            return _.omit([link.get('source').id, link.get('target').id], target1.id)[0];
        }).each(function(group, key) {
            // If the member of the group has both source and target model adjust vertices.
            if (key !== 'undefined') adjustVertices(graph, _.first(group));
        });

        return;
    }

    // The cell is a link. Let's find its source and target models.
    var srcId = target1.get('source').id || target1.previous('source').id;
    var trgId = target1.get('target').id || target1.previous('target').id;

    // If one of the ends is not a model, the link has no siblings.
    if (!srcId || !trgId) return;

    var siblings = _.filter(graph.getLinks(), function(sibling) {

        var _srcId = sibling.get('source').id;
        var _trgId = sibling.get('target').id;

        return (_srcId === srcId && _trgId === trgId) || (_srcId === trgId && _trgId === srcId);
    });

    switch (siblings.length) {

    case 0:
        // The link was removed and had no siblings.
        break;

    case 1:
        // There is only one link between the source and target. No vertices needed.
        target1.unset('vertices');
        break;

    default:

        // There is more than one siblings. We need to create vertices.

        // First of all we'll find the middle point of the link.
        var srcCenter = graph.getCell(srcId).getBBox().center();
        var trgCenter = graph.getCell(trgId).getBBox().center();
        var midPoint = g.line(srcCenter, trgCenter).midpoint();

        // Then find the angle it forms.
        var theta = srcCenter.theta(trgCenter);

        // This is the maximum distance between links
        var gap = 20;

        _.each(siblings, function(sibling, index) {

            // We want the offset values to be calculated as follows 0, 20, 20, 40, 40, 60, 60 ..
            var offset = gap * Math.ceil(index / 2);

            // Now we need the vertices to be placed at points which are 'offset' pixels distant
            // from the first link and forms a perpendicular angle to it. And as index goes up
            // alternate left and right.
            //
            //  ^  odd indexes
            //  |
            //  |---->  index 0 line (straight line between a source center and a target center.
            //  |
            //  v  even indexes
            var sign = index % 2 ? 1 : -1;
            var angle = g.toRad(theta + sign * 90);

            // We found the vertex.
            var vertex = g.point.fromPolar(offset, angle, midPoint);

            sibling.set('vertices', [{ x: vertex.x, y: vertex.y }]);
        });
    }
};

var myAdjustVertices = _.partial(adjustVertices, graph);

// adjust vertices when a cell is removed or its source/target was changed
graph.on('add remove change:source change:target', myAdjustVertices);

// also when an user stops interacting with an element.
paper1.on('cell:pointerup', myAdjustVertices);
