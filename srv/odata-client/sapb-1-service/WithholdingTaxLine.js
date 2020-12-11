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
exports.WithholdingTaxLine = exports.WithholdingTaxLineField = exports.createWithholdingTaxLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxLine.build]] instead.
 */
function createWithholdingTaxLine(json) {
    return WithholdingTaxLine.build(json);
}
exports.createWithholdingTaxLine = createWithholdingTaxLine;
/**
 * WithholdingTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WithholdingTaxLineField = /** @class */ (function (_super) {
    __extends(WithholdingTaxLineField, _super);
    /**
     * Creates an instance of WithholdingTaxLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WithholdingTaxLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WithholdingTaxLine) || this;
        /**
         * Representation of the [[WithholdingTaxLine.wtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtCode = new core_1.ComplexTypeStringPropertyField('WTCode', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.wtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountSys = new core_1.ComplexTypeNumberPropertyField('WTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.wtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountFc = new core_1.ComplexTypeNumberPropertyField('WTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.wtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmount = new core_1.ComplexTypeNumberPropertyField('WTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.withholdingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingType = new core_1.ComplexTypeStringPropertyField('WithholdingType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.taxableAmountinSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountinSys = new core_1.ComplexTypeNumberPropertyField('TaxableAmountinSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.taxableAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountFc = new core_1.ComplexTypeNumberPropertyField('TaxableAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.taxableAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmount = new core_1.ComplexTypeNumberPropertyField('TaxableAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.roundingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roundingType = new core_1.ComplexTypeStringPropertyField('RoundingType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.criteria]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.criteria = new core_1.ComplexTypeStringPropertyField('Criteria', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new core_1.ComplexTypeStringPropertyField('Category', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new core_1.ComplexTypeStringPropertyField('BaseType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.appliedWtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountSys = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.appliedWtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountFc = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.appliedWtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmount = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxLine.glAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccount = new core_1.ComplexTypeStringPropertyField('GLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.baseDocEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocEntry = new core_1.ComplexTypeNumberPropertyField('BaseDocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.baseDocLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocLine = new core_1.ComplexTypeNumberPropertyField('BaseDocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.baseDocType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocType = new core_1.ComplexTypeNumberPropertyField('BaseDocType', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.baseDocumentReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentReference = new core_1.ComplexTypeNumberPropertyField('BaseDocumentReference', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[WithholdingTaxLine.targetAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetAbsEntry = new core_1.ComplexTypeNumberPropertyField('TargetAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.targetDocumentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetDocumentType = new core_1.ComplexTypeNumberPropertyField('TargetDocumentType', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxLine.cstCodeIncoming]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cstCodeIncoming = new core_1.ComplexTypeStringPropertyField('CSTCodeIncoming', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxLine.cstCodeOutgoing]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cstCodeOutgoing = new core_1.ComplexTypeStringPropertyField('CSTCodeOutgoing', _this, 'Edm.String');
        return _this;
    }
    return WithholdingTaxLineField;
}(core_1.ComplexTypeField));
exports.WithholdingTaxLineField = WithholdingTaxLineField;
var WithholdingTaxLine;
(function (WithholdingTaxLine) {
    /**
     * Metadata information on all properties of the `WithholdingTaxLine` complex type.
     */
    WithholdingTaxLine._propertyMetadata = [{
            originalName: 'WTCode',
            name: 'wtCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WTAmountSys',
            name: 'wtAmountSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTAmountFC',
            name: 'wtAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTAmount',
            name: 'wtAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WithholdingType',
            name: 'withholdingType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxableAmountinSys',
            name: 'taxableAmountinSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxableAmountFC',
            name: 'taxableAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxableAmount',
            name: 'taxableAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'RoundingType',
            name: 'roundingType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Criteria',
            name: 'criteria',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Category',
            name: 'category',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BaseType',
            name: 'baseType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AppliedWTAmountSys',
            name: 'appliedWtAmountSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedWTAmountFC',
            name: 'appliedWtAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedWTAmount',
            name: 'appliedWtAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GLAccount',
            name: 'glAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocEntry',
            name: 'baseDocEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocLine',
            name: 'baseDocLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocType',
            name: 'baseDocType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseDocumentReference',
            name: 'baseDocumentReference',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TargetAbsEntry',
            name: 'targetAbsEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TargetDocumentType',
            name: 'targetDocumentType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CSTCodeIncoming',
            name: 'cstCodeIncoming',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CSTCodeOutgoing',
            name: 'cstCodeOutgoing',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WithholdingTaxLine);
    }
    WithholdingTaxLine.build = build;
})(WithholdingTaxLine = exports.WithholdingTaxLine || (exports.WithholdingTaxLine = {}));
//# sourceMappingURL=WithholdingTaxLine.js.map