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
exports.SalesOpportunitiesLine = exports.SalesOpportunitiesLineField = exports.createSalesOpportunitiesLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesOpportunitiesLine.build]] instead.
 */
function createSalesOpportunitiesLine(json) {
    return SalesOpportunitiesLine.build(json);
}
exports.createSalesOpportunitiesLine = createSalesOpportunitiesLine;
/**
 * SalesOpportunitiesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesOpportunitiesLineField = /** @class */ (function (_super) {
    __extends(SalesOpportunitiesLineField, _super);
    /**
     * Creates an instance of SalesOpportunitiesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesOpportunitiesLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesOpportunitiesLine) || this;
        /**
         * Representation of the [[SalesOpportunitiesLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.salesPerson]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesPerson = new core_1.ComplexTypeNumberPropertyField('SalesPerson', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SalesOpportunitiesLine.closingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.closingDate = new core_1.ComplexTypeDatePropertyField('ClosingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SalesOpportunitiesLine.stageKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageKey = new core_1.ComplexTypeNumberPropertyField('StageKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.percentageRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentageRate = new core_1.ComplexTypeNumberPropertyField('PercentageRate', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.maxLocalTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxLocalTotal = new core_1.ComplexTypeNumberPropertyField('MaxLocalTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.maxSystemTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxSystemTotal = new core_1.ComplexTypeNumberPropertyField('MaxSystemTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesLine.contact]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contact = new core_1.ComplexTypeEnumPropertyField('Contact', _this);
        /**
         * Representation of the [[SalesOpportunitiesLine.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[SalesOpportunitiesLine.weightedAmountLocal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weightedAmountLocal = new core_1.ComplexTypeNumberPropertyField('WeightedAmountLocal', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.weightedAmountSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weightedAmountSystem = new core_1.ComplexTypeNumberPropertyField('WeightedAmountSystem', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.documentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNumber = new core_1.ComplexTypeNumberPropertyField('DocumentNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.documentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentType = new core_1.ComplexTypeEnumPropertyField('DocumentType', _this);
        /**
         * Representation of the [[SalesOpportunitiesLine.documentCheckbox]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentCheckbox = new core_1.ComplexTypeEnumPropertyField('DocumentCheckbox', _this);
        /**
         * Representation of the [[SalesOpportunitiesLine.contactPerson]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactPerson = new core_1.ComplexTypeNumberPropertyField('ContactPerson', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.bpChanelName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpChanelName = new core_1.ComplexTypeStringPropertyField('BPChanelName', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesLine.bpChanelCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpChanelCode = new core_1.ComplexTypeStringPropertyField('BPChanelCode', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesLine.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new core_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.dataOwnershipfield]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dataOwnershipfield = new core_1.ComplexTypeNumberPropertyField('DataOwnershipfield', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.bpChannelContact]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpChannelContact = new core_1.ComplexTypeNumberPropertyField('BPChannelContact', _this, 'Edm.Int32');
        return _this;
    }
    return SalesOpportunitiesLineField;
}(core_1.ComplexTypeField));
exports.SalesOpportunitiesLineField = SalesOpportunitiesLineField;
var SalesOpportunitiesLine;
(function (SalesOpportunitiesLine) {
    /**
     * Metadata information on all properties of the `SalesOpportunitiesLine` complex type.
     */
    SalesOpportunitiesLine._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SalesPerson',
            name: 'salesPerson',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ClosingDate',
            name: 'closingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'StageKey',
            name: 'stageKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PercentageRate',
            name: 'percentageRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MaxLocalTotal',
            name: 'maxLocalTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MaxSystemTotal',
            name: 'maxSystemTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Contact',
            name: 'contact',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'WeightedAmountLocal',
            name: 'weightedAmountLocal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WeightedAmountSystem',
            name: 'weightedAmountSystem',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocumentNumber',
            name: 'documentNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentType',
            name: 'documentType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocumentCheckbox',
            name: 'documentCheckbox',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ContactPerson',
            name: 'contactPerson',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BPChanelName',
            name: 'bpChanelName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPChanelCode',
            name: 'bpChanelCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SequenceNo',
            name: 'sequenceNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DataOwnershipfield',
            name: 'dataOwnershipfield',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BPChannelContact',
            name: 'bpChannelContact',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesOpportunitiesLine);
    }
    SalesOpportunitiesLine.build = build;
})(SalesOpportunitiesLine = exports.SalesOpportunitiesLine || (exports.SalesOpportunitiesLine = {}));
//# sourceMappingURL=SalesOpportunitiesLine.js.map