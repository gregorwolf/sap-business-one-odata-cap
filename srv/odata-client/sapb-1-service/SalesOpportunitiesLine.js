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
exports.SalesOpportunitiesLine = exports.SalesOpportunitiesLineField = exports.createSalesOpportunitiesLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function SalesOpportunitiesLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesOpportunitiesLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.salesPerson]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesPerson = new v4_1.ComplexTypeNumberPropertyField('SalesPerson', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SalesOpportunitiesLine.closingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.closingDate = new v4_1.ComplexTypeDatePropertyField('ClosingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SalesOpportunitiesLine.stageKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageKey = new v4_1.ComplexTypeNumberPropertyField('StageKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.percentageRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentageRate = new v4_1.ComplexTypeNumberPropertyField('PercentageRate', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.maxLocalTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxLocalTotal = new v4_1.ComplexTypeNumberPropertyField('MaxLocalTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.maxSystemTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxSystemTotal = new v4_1.ComplexTypeNumberPropertyField('MaxSystemTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new v4_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesLine.weightedAmountLocal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weightedAmountLocal = new v4_1.ComplexTypeNumberPropertyField('WeightedAmountLocal', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.weightedAmountSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weightedAmountSystem = new v4_1.ComplexTypeNumberPropertyField('WeightedAmountSystem', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesOpportunitiesLine.documentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNumber = new v4_1.ComplexTypeNumberPropertyField('DocumentNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.contactPerson]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactPerson = new v4_1.ComplexTypeNumberPropertyField('ContactPerson', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.bpChanelName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpChanelName = new v4_1.ComplexTypeStringPropertyField('BPChanelName', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesLine.bpChanelCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpChanelCode = new v4_1.ComplexTypeStringPropertyField('BPChanelCode', _this, 'Edm.String');
        /**
         * Representation of the [[SalesOpportunitiesLine.sequenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNo = new v4_1.ComplexTypeNumberPropertyField('SequenceNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.dataOwnershipfield]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dataOwnershipfield = new v4_1.ComplexTypeNumberPropertyField('DataOwnershipfield', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesOpportunitiesLine.bpChannelContact]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpChannelContact = new v4_1.ComplexTypeNumberPropertyField('BPChannelContact', _this, 'Edm.Int32');
        return _this;
    }
    return SalesOpportunitiesLineField;
}(v4_1.ComplexTypeField));
exports.SalesOpportunitiesLineField = SalesOpportunitiesLineField;
var SalesOpportunitiesLine;
(function (SalesOpportunitiesLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            SalesPerson: function (salesPerson) { return ({ salesPerson: v4_1.edmToTs(salesPerson, 'Edm.Int32') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            ClosingDate: function (closingDate) { return ({ closingDate: v4_1.edmToTs(closingDate, 'Edm.DateTimeOffset') }); },
            StageKey: function (stageKey) { return ({ stageKey: v4_1.edmToTs(stageKey, 'Edm.Int32') }); },
            PercentageRate: function (percentageRate) { return ({ percentageRate: v4_1.edmToTs(percentageRate, 'Edm.Double') }); },
            MaxLocalTotal: function (maxLocalTotal) { return ({ maxLocalTotal: v4_1.edmToTs(maxLocalTotal, 'Edm.Double') }); },
            MaxSystemTotal: function (maxSystemTotal) { return ({ maxSystemTotal: v4_1.edmToTs(maxSystemTotal, 'Edm.Double') }); },
            Remarks: function (remarks) { return ({ remarks: v4_1.edmToTs(remarks, 'Edm.String') }); },
            WeightedAmountLocal: function (weightedAmountLocal) { return ({ weightedAmountLocal: v4_1.edmToTs(weightedAmountLocal, 'Edm.Double') }); },
            WeightedAmountSystem: function (weightedAmountSystem) { return ({ weightedAmountSystem: v4_1.edmToTs(weightedAmountSystem, 'Edm.Double') }); },
            DocumentNumber: function (documentNumber) { return ({ documentNumber: v4_1.edmToTs(documentNumber, 'Edm.Int32') }); },
            ContactPerson: function (contactPerson) { return ({ contactPerson: v4_1.edmToTs(contactPerson, 'Edm.Int32') }); },
            BPChanelName: function (bpChanelName) { return ({ bpChanelName: v4_1.edmToTs(bpChanelName, 'Edm.String') }); },
            BPChanelCode: function (bpChanelCode) { return ({ bpChanelCode: v4_1.edmToTs(bpChanelCode, 'Edm.String') }); },
            SequenceNo: function (sequenceNo) { return ({ sequenceNo: v4_1.edmToTs(sequenceNo, 'Edm.Int32') }); },
            DataOwnershipfield: function (dataOwnershipfield) { return ({ dataOwnershipfield: v4_1.edmToTs(dataOwnershipfield, 'Edm.Int32') }); },
            BPChannelContact: function (bpChannelContact) { return ({ bpChannelContact: v4_1.edmToTs(bpChannelContact, 'Edm.Int32') }); }
        });
    }
    SalesOpportunitiesLine.build = build;
})(SalesOpportunitiesLine = exports.SalesOpportunitiesLine || (exports.SalesOpportunitiesLine = {}));
//# sourceMappingURL=SalesOpportunitiesLine.js.map