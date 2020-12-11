"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PmTimeSheetLineDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmTimeSheetLineDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmTimeSheetLineData) || this;
        /**
         * Representation of the [[PmTimeSheetLineData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmTimeSheetLineData.activityType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.activityType = new core_1.ComplexTypeNumberPropertyField('ActivityType', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.laborItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.laborItem = new core_1.ComplexTypeStringPropertyField('LaborItem', _this, 'Edm.String');
        /**
         * Representation of the [[PmTimeSheetLineData.startTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startTime = new core_1.ComplexTypeTimePropertyField('StartTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.endTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endTime = new core_1.ComplexTypeTimePropertyField('EndTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.workorder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.workorder = new core_1.ComplexTypeNumberPropertyField('Workorder', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.serviceCall]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCall = new core_1.ComplexTypeNumberPropertyField('ServiceCall', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.costCenter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costCenter = new core_1.ComplexTypeStringPropertyField('CostCenter', _this, 'Edm.String');
        /**
         * Representation of the [[PmTimeSheetLineData.financialProject]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.financialProject = new core_1.ComplexTypeStringPropertyField('FinancialProject', _this, 'Edm.String');
        /**
         * Representation of the [[PmTimeSheetLineData.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new core_1.ComplexTypeNumberPropertyField('Location', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.gpsData]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gpsData = new core_1.ComplexTypeStringPropertyField('GPSData', _this, 'Edm.String');
        /**
         * Representation of the [[PmTimeSheetLineData.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new core_1.ComplexTypeNumberPropertyField('Branch', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmTimeSheetLineData.break]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.break = new core_1.ComplexTypeTimePropertyField('Break', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.nonBillableTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nonBillableTime = new core_1.ComplexTypeTimePropertyField('NonBillableTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.effectiveTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveTime = new core_1.ComplexTypeTimePropertyField('EffectiveTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.billableTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billableTime = new core_1.ComplexTypeTimePropertyField('BillableTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[PmTimeSheetLineData.fullDay]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fullDay = new core_1.ComplexTypeEnumPropertyField('FullDay', _this);
        return _this;
    }
    return PmTimeSheetLineDataField;
}(core_1.ComplexTypeField));
exports.PmTimeSheetLineDataField = PmTimeSheetLineDataField;
var PmTimeSheetLineData;
(function (PmTimeSheetLineData) {
    /**
     * Metadata information on all properties of the `PmTimeSheetLineData` complex type.
     */
    PmTimeSheetLineData._propertyMetadata = [{
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ActivityType',
            name: 'activityType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LaborItem',
            name: 'laborItem',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StartTime',
            name: 'startTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'EndTime',
            name: 'endTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'Workorder',
            name: 'workorder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ServiceCall',
            name: 'serviceCall',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CostCenter',
            name: 'costCenter',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FinancialProject',
            name: 'financialProject',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Location',
            name: 'location',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GPSData',
            name: 'gpsData',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Branch',
            name: 'branch',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Break',
            name: 'break',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'NonBillableTime',
            name: 'nonBillableTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'EffectiveTime',
            name: 'effectiveTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'BillableTime',
            name: 'billableTime',
            type: 'Edm.TimeOfDay',
            isCollection: false
        }, {
            originalName: 'FullDay',
            name: 'fullDay',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmTimeSheetLineData);
    }
    PmTimeSheetLineData.build = build;
})(PmTimeSheetLineData = exports.PmTimeSheetLineData || (exports.PmTimeSheetLineData = {}));
//# sourceMappingURL=PmTimeSheetLineData.js.map