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
exports.WithholdingTaxData = exports.WithholdingTaxDataField = exports.createWithholdingTaxData = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxData.build]] instead.
 */
function createWithholdingTaxData(json) {
    return WithholdingTaxData.build(json);
}
exports.createWithholdingTaxData = createWithholdingTaxData;
/**
 * WithholdingTaxDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WithholdingTaxDataField = /** @class */ (function (_super) {
    __extends(WithholdingTaxDataField, _super);
    /**
     * Creates an instance of WithholdingTaxDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WithholdingTaxDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WithholdingTaxData) || this;
        /**
         * Representation of the [[WithholdingTaxData.wtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtCode = new core_1.ComplexTypeStringPropertyField('WTCode', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxData.wtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountSys = new core_1.ComplexTypeNumberPropertyField('WTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.wtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmountFc = new core_1.ComplexTypeNumberPropertyField('WTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.wtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAmount = new core_1.ComplexTypeNumberPropertyField('WTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.withholdingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingType = new core_1.ComplexTypeStringPropertyField('WithholdingType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxData.taxableAmountinSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountinSys = new core_1.ComplexTypeNumberPropertyField('TaxableAmountinSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.taxableAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmountFc = new core_1.ComplexTypeNumberPropertyField('TaxableAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.taxableAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxableAmount = new core_1.ComplexTypeNumberPropertyField('TaxableAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.roundingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.roundingType = new core_1.ComplexTypeStringPropertyField('RoundingType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxData.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.criteria]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.criteria = new core_1.ComplexTypeStringPropertyField('Criteria', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxData.category]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.category = new core_1.ComplexTypeStringPropertyField('Category', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxData.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new core_1.ComplexTypeStringPropertyField('BaseType', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxData.appliedWtAmountSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountSys = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmountSys', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.appliedWtAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmountFc = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.appliedWtAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedWtAmount = new core_1.ComplexTypeNumberPropertyField('AppliedWTAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxData.glAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.glAccount = new core_1.ComplexTypeStringPropertyField('GLAccount', _this, 'Edm.String');
        /**
         * Representation of the [[WithholdingTaxData.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxData.baseDocEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocEntry = new core_1.ComplexTypeNumberPropertyField('BaseDocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxData.baseDocLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocLine = new core_1.ComplexTypeNumberPropertyField('BaseDocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxData.baseDocType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocType = new core_1.ComplexTypeNumberPropertyField('BaseDocType', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxData.baseDocumentReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseDocumentReference = new core_1.ComplexTypeNumberPropertyField('BaseDocumentReference', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxData.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[WithholdingTaxData.targetAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetAbsEntry = new core_1.ComplexTypeNumberPropertyField('TargetAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxData.targetDocumentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.targetDocumentType = new core_1.ComplexTypeNumberPropertyField('TargetDocumentType', _this, 'Edm.Int32');
        return _this;
    }
    return WithholdingTaxDataField;
}(core_1.ComplexTypeField));
exports.WithholdingTaxDataField = WithholdingTaxDataField;
var WithholdingTaxData;
(function (WithholdingTaxData) {
    /**
     * Metadata information on all properties of the `WithholdingTaxData` complex type.
     */
    WithholdingTaxData._propertyMetadata = [{
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
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WithholdingTaxData);
    }
    WithholdingTaxData.build = build;
})(WithholdingTaxData = exports.WithholdingTaxData || (exports.WithholdingTaxData = {}));
//# sourceMappingURL=WithholdingTaxData.js.map