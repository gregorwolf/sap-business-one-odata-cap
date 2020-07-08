"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PmTimeSheetLineData = exports.PmTimeSheetLineDataField = exports.createPmTimeSheetLineData = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmTimeSheetLineData.build]] instead.
 */
function createPmTimeSheetLineData(json) {
    return PmTimeSheetLineData.build(json);
}
exports.createPmTimeSheetLineData = createPmTimeSheetLineData;
/**
 * PmTimeSheetLineDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmTimeSheetLineDataField = /** @class */ (function (_super) {
    __extends(PmTimeSheetLineDataField, _super);
    function PmTimeSheetLineDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmTimeSheetLineData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmTimeSheetLineData.activityType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityType = new v4_1.ComplexTypeNumberPropertyField('ActivityType', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.laborItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.laborItem = new v4_1.ComplexTypeStringPropertyField('LaborItem', _this, 'Edm.String');
        /**
         * Representation of the [[PmTimeSheetLineData.startTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startTime = new v4_1.ComplexTypeTimePropertyField('StartTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.endTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endTime = new v4_1.ComplexTypeTimePropertyField('EndTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.workorder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workorder = new v4_1.ComplexTypeNumberPropertyField('Workorder', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.serviceCall]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCall = new v4_1.ComplexTypeNumberPropertyField('ServiceCall', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.costCenter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costCenter = new v4_1.ComplexTypeStringPropertyField('CostCenter', _this, 'Edm.String');
        /**
         * Representation of the [[PmTimeSheetLineData.financialProject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.financialProject = new v4_1.ComplexTypeStringPropertyField('FinancialProject', _this, 'Edm.String');
        /**
         * Representation of the [[PmTimeSheetLineData.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new v4_1.ComplexTypeNumberPropertyField('Location', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.gpsData]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gpsData = new v4_1.ComplexTypeStringPropertyField('GPSData', _this, 'Edm.String');
        /**
         * Representation of the [[PmTimeSheetLineData.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new v4_1.ComplexTypeNumberPropertyField('Branch', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.break]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.break = new v4_1.ComplexTypeTimePropertyField('Break', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.nonBillableTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nonBillableTime = new v4_1.ComplexTypeTimePropertyField('NonBillableTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.effectiveTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveTime = new v4_1.ComplexTypeTimePropertyField('EffectiveTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.billableTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billableTime = new v4_1.ComplexTypeTimePropertyField('BillableTime', _this, 'Edm.TimeOfDay');
        return _this;
    }
    return PmTimeSheetLineDataField;
}(v4_1.ComplexTypeField));
exports.PmTimeSheetLineDataField = PmTimeSheetLineDataField;
var PmTimeSheetLineData;
(function (PmTimeSheetLineData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); },
            ActivityType: function (activityType) { return ({ activityType: v4_1.edmToTs(activityType, 'Edm.Int32') }); },
            LaborItem: function (laborItem) { return ({ laborItem: v4_1.edmToTs(laborItem, 'Edm.String') }); },
            StartTime: function (startTime) { return ({ startTime: v4_1.edmToTs(startTime, 'Edm.TimeOfDay') }); },
            EndTime: function (endTime) { return ({ endTime: v4_1.edmToTs(endTime, 'Edm.TimeOfDay') }); },
            Workorder: function (workorder) { return ({ workorder: v4_1.edmToTs(workorder, 'Edm.Int32') }); },
            ServiceCall: function (serviceCall) { return ({ serviceCall: v4_1.edmToTs(serviceCall, 'Edm.Int32') }); },
            CostCenter: function (costCenter) { return ({ costCenter: v4_1.edmToTs(costCenter, 'Edm.String') }); },
            FinancialProject: function (financialProject) { return ({ financialProject: v4_1.edmToTs(financialProject, 'Edm.String') }); },
            Location: function (location) { return ({ location: v4_1.edmToTs(location, 'Edm.Int32') }); },
            GPSData: function (gpsData) { return ({ gpsData: v4_1.edmToTs(gpsData, 'Edm.String') }); },
            Branch: function (branch) { return ({ branch: v4_1.edmToTs(branch, 'Edm.Int32') }); },
            Break: (), break: v4_1.Time
        });
        ({ break: v4_1.edmToTs(), break: , 'Edm.TimeOfDay':  }),
            NonBillableTime;
        (function (nonBillableTime) { return ({ nonBillableTime: v4_1.edmToTs(nonBillableTime, 'Edm.TimeOfDay') }); },
            EffectiveTime);
        (function (effectiveTime) { return ({ effectiveTime: v4_1.edmToTs(effectiveTime, 'Edm.TimeOfDay') }); },
            BillableTime);
        (function (billableTime) { return ({ billableTime: v4_1.edmToTs(billableTime, 'Edm.TimeOfDay') }); });
    }
    PmTimeSheetLineData.build = build;
    ;
})(PmTimeSheetLineData = exports.PmTimeSheetLineData || (exports.PmTimeSheetLineData = {}));
//# sourceMappingURL=PmTimeSheetLineData.js.map