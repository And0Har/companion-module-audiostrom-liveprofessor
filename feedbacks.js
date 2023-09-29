const {combineRgb} = require("@companion-module/base");
exports.getFeedbacks = function(self) {
    var feedbacks = {}

    feedbacks['GenericButton'] = {
        name: 'Generic Button',
        description: 'Change colour depending on state of Generic Button',
        options: [
            {
                type: 'colorpicker',
                label: 'Foreground color',
                id: 'fg',
                default: combineRgb(255, 255, 255),
            },
            {
                type: 'colorpicker',
                label: 'Background color',
                id: 'bg',
                default: combineRgb(0, 255, 0),
            },
            {
                label: 'Button Number',
                type: 'number',
                id: 'buttonNr',
                width: 64,
                default: 1,
                min: 1,
                max: 24,
            },
        ],
    }
    feedbacks['snapshotrecalled'] = {
        name: 'Global Snapshot Recalled',
        description: 'Change color when a Snapshot matches. Use number or name depending on action',
        options: [
            {
                type: 'colorpicker',
                label: 'Foreground color',
                id: 'fg',
                default: combineRgb(0, 0, 0),
            },
            {
                type: 'colorpicker',
                label: 'Background color',
                id: 'bg',
                default: combineRgb(94, 194, 232),
            },
            {
                label: 'Snapshot Number',
                type: 'number',
                id: 'snapshotnr',
                width: 64,
                default: 0,
                min: 0,
                max: 9999,
            },
            {
                label: 'Name',
                type: 'textinput',
                id: 'snapshotname',
            },
        ],
    }

    feedbacks['viewsetrecalled'] = {
        name: 'View Set Recalled',
        description: 'Change color when view set matches number',
        options: [
            {
                type: 'colorpicker',
                label: 'Foreground color',
                id: 'fg',
                default: combineRgb(0, 0, 0),
            },
            {
                type: 'colorpicker',
                label: 'Background color',
                id: 'bg',
                default: combineRgb(94, 194, 232),
            },
            {
                label: 'View Set Number',
                type: 'number',
                id: 'viewset',
                width: 64,
                default: 0,
                min: 0,
                max: 9999,
            },
        ],
    }

    feedbacks['ping'] = {
        name: 'Ping',
        description: 'Change color when ping is received',
        options: [
            {
                type: 'colorpicker',
                label: 'Foreground color',
                id: 'fg',
                default: combineRgb(0, 0, 0),
            },
            {
                type: 'colorpicker',
                label: 'Background color',
                id: 'bg',
                default: combineRgb(94, 255, 0),
            },
        ],
    }

    feedbacks['tempoflash'] = {
        name: 'Tempo Tap Flash',
        description: 'Change color when tempo is received',

        options: [
            {
                type: 'colorpicker',
                label: 'Foreground color',
                id: 'fg',
                default: combineRgb(0, 0, 0),
            },
            {
                type: 'colorpicker',
                label: 'Background color',
                id: 'bg',
                default: combineRgb(94, 255, 0),
            },
        ],
    }
    return feedbacks;
}