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
exports.BlanketAgreementsDetailsLine = exports.BlanketAgreementsDetailsLineField = exports.createBlanketAgreementsDetailsLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDetailsLine.build]] instead.
 */
function createBlanketAgreementsDetailsLine(json) {
    return BlanketAgreementsDetailsLine.build(json);
}
exports.createBlanketAgreementsDetailsLine = createBlanketAgreementsDetailsLine;
/**
 * BlanketAgreementsDetailsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlanketAgreementsDetailsLineField = /** @class */ (function (_super) {
    __extends(BlanketAgreementsDetailsLineField, _super);
    /**
     * Creates an instance of BlanketAgreementsDetailsLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BlanketAgreementsDetailsLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BlanketAgreementsDetailsLine) || this;
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.agreementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNo = new core_1.ComplexTypeNumberPropertyField('AgreementNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.agreementRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementRowNumber = new core_1.ComplexTypeNumberPropertyField('AgreementRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.agreementEffectiveRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementEffectiveRowNumber = new core_1.ComplexTypeNumberPropertyField('AgreementEffectiveRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.frequency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.frequency = new core_1.ComplexTypeEnumPropertyField('Frequency', _this);
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.from]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.from = new core_1.ComplexTypeDatePropertyField('From', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.to]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.to = new core_1.ComplexTypeDatePropertyField('To', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.releaseInformation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.releaseInformation = new core_1.ComplexTypeStringPropertyField('ReleaseInformation', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.freeText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText = new core_1.ComplexTypeStringPropertyField('FreeText', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.consumeSalesForecast]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.consumeSalesForecast = new core_1.ComplexTypeEnumPropertyField('ConsumeSalesForecast', _this);
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedAmountLc = new core_1.ComplexTypeNumberPropertyField('PlannedAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDetailsLine.plannedAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedAmountFc = new core_1.ComplexTypeNumberPropertyField('PlannedAmountFC', _this, 'Edm.Double');
        return _this;
    }
    return BlanketAgreementsDetailsLineField;
}(core_1.ComplexTypeField));
exports.BlanketAgreementsDetailsLineField = BlanketAgreementsDetailsLineField;
var BlanketAgreementsDetailsLine;
(function (BlanketAgreementsDetailsLine) {
    /**
     * Metadata information on all properties of the `BlanketAgreementsDetailsLine` complex type.
     */
    BlanketAgreementsDetailsLine._propertyMetadata = [{
            originalName: 'AgreementNo',
            name: 'agreementNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AgreementRowNumber',
            name: 'agreementRowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AgreementEffectiveRowNumber',
            name: 'agreementEffectiveRowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Frequency',
            name: 'frequency',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'From',
            name: 'from',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'To',
            name: 'to',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReleaseInformation',
            name: 'releaseInformation',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FreeText',
            name: 'freeText',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ConsumeSalesForecast',
            name: 'consumeSalesForecast',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PlannedAmountLC',
            name: 'plannedAmountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PlannedAmountFC',
            name: 'plannedAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BlanketAgreementsDetailsLine);
    }
    BlanketAgreementsDetailsLine.build = build;
})(BlanketAgreementsDetailsLine = exports.BlanketAgreementsDetailsLine || (exports.BlanketAgreementsDetailsLine = {}));
//# sourceMappingURL=BlanketAgreementsDetailsLine.js.map