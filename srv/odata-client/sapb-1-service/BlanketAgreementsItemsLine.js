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
exports.BlanketAgreementsItemsLine = exports.BlanketAgreementsItemsLineField = exports.createBlanketAgreementsItemsLine = void 0;
var BlanketAgreementsDetailsLine_1 = require("./BlanketAgreementsDetailsLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsItemsLine.build]] instead.
 */
function createBlanketAgreementsItemsLine(json) {
    return BlanketAgreementsItemsLine.build(json);
}
exports.createBlanketAgreementsItemsLine = createBlanketAgreementsItemsLine;
/**
 * BlanketAgreementsItemsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlanketAgreementsItemsLineField = /** @class */ (function (_super) {
    __extends(BlanketAgreementsItemsLineField, _super);
    /**
     * Creates an instance of BlanketAgreementsItemsLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BlanketAgreementsItemsLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BlanketAgreementsItemsLine) || this;
        /**
         * Representation of the [[BlanketAgreementsItemsLine.agreementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNo = new core_1.ComplexTypeNumberPropertyField('AgreementNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.agreementRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementRowNumber = new core_1.ComplexTypeNumberPropertyField('AgreementRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new core_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.itemGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroup = new core_1.ComplexTypeNumberPropertyField('ItemGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedQuantity = new core_1.ComplexTypeNumberPropertyField('PlannedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.unitPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitPrice = new core_1.ComplexTypeNumberPropertyField('UnitPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.priceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceCurrency = new core_1.ComplexTypeStringPropertyField('PriceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeQuantity = new core_1.ComplexTypeNumberPropertyField('CumulativeQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeAmountLc = new core_1.ComplexTypeNumberPropertyField('CumulativeAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeAmountFc = new core_1.ComplexTypeNumberPropertyField('CumulativeAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.freeText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText = new core_1.ComplexTypeStringPropertyField('FreeText', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.inventoryUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryUoM = new core_1.ComplexTypeStringPropertyField('InventoryUoM', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.portionOfReturns]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portionOfReturns = new core_1.ComplexTypeNumberPropertyField('PortionOfReturns', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.endOfWarranty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endOfWarranty = new core_1.ComplexTypeDatePropertyField('EndOfWarranty', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedAmountLc = new core_1.ComplexTypeNumberPropertyField('PlannedAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedAmountFc = new core_1.ComplexTypeNumberPropertyField('PlannedAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.lineDiscount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineDiscount = new core_1.ComplexTypeNumberPropertyField('LineDiscount', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new core_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.unitsOfMeasurement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurement = new core_1.ComplexTypeNumberPropertyField('UnitsOfMeasurement', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.undeliveredCumulativeQuantity = new core_1.ComplexTypeNumberPropertyField('UndeliveredCumulativeQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.undeliveredCumulativeAmountLc = new core_1.ComplexTypeNumberPropertyField('UndeliveredCumulativeAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.undeliveredCumulativeAmountFc = new core_1.ComplexTypeNumberPropertyField('UndeliveredCumulativeAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.shippingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shippingType = new core_1.ComplexTypeNumberPropertyField('ShippingType', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.taxRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxRate = new core_1.ComplexTypeNumberPropertyField('TAXRate', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedVatAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedVatAmountLc = new core_1.ComplexTypeNumberPropertyField('PlannedVATAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedVatAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedVatAmountFc = new core_1.ComplexTypeNumberPropertyField('PlannedVATAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeVatAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeVatAmountLc = new core_1.ComplexTypeNumberPropertyField('CumulativeVATAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeVatAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeVatAmountFc = new core_1.ComplexTypeNumberPropertyField('CumulativeVATAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.blanketAgreementsDetailsLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blanketAgreementsDetailsLines = new core_1.CollectionField('BlanketAgreements_DetailsLines', _this, BlanketAgreementsDetailsLine_1.BlanketAgreementsDetailsLine);
        return _this;
    }
    return BlanketAgreementsItemsLineField;
}(core_1.ComplexTypeField));
exports.BlanketAgreementsItemsLineField = BlanketAgreementsItemsLineField;
var BlanketAgreementsItemsLine;
(function (BlanketAgreementsItemsLine) {
    /**
     * Metadata information on all properties of the `BlanketAgreementsItemsLine` complex type.
     */
    BlanketAgreementsItemsLine._propertyMetadata = [{
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
            originalName: 'ItemNo',
            name: 'itemNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemDescription',
            name: 'itemDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemGroup',
            name: 'itemGroup',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PlannedQuantity',
            name: 'plannedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UnitPrice',
            name: 'unitPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PriceCurrency',
            name: 'priceCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CumulativeQuantity',
            name: 'cumulativeQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CumulativeAmountLC',
            name: 'cumulativeAmountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CumulativeAmountFC',
            name: 'cumulativeAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FreeText',
            name: 'freeText',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryUoM',
            name: 'inventoryUoM',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PortionOfReturns',
            name: 'portionOfReturns',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'EndOfWarranty',
            name: 'endOfWarranty',
            type: 'Edm.DateTimeOffset',
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
        }, {
            originalName: 'LineDiscount',
            name: 'lineDiscount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UoMCode',
            name: 'uoMCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UnitsOfMeasurement',
            name: 'unitsOfMeasurement',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UndeliveredCumulativeQuantity',
            name: 'undeliveredCumulativeQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UndeliveredCumulativeAmountLC',
            name: 'undeliveredCumulativeAmountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UndeliveredCumulativeAmountFC',
            name: 'undeliveredCumulativeAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ShippingType',
            name: 'shippingType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Project',
            name: 'project',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TAXRate',
            name: 'taxRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PlannedVATAmountLC',
            name: 'plannedVatAmountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PlannedVATAmountFC',
            name: 'plannedVatAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CumulativeVATAmountLC',
            name: 'cumulativeVatAmountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CumulativeVATAmountFC',
            name: 'cumulativeVatAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BlanketAgreements_DetailsLines',
            name: 'blanketAgreementsDetailsLines',
            type: BlanketAgreementsDetailsLine_1.BlanketAgreementsDetailsLine,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BlanketAgreementsItemsLine);
    }
    BlanketAgreementsItemsLine.build = build;
})(BlanketAgreementsItemsLine = exports.BlanketAgreementsItemsLine || (exports.BlanketAgreementsItemsLine = {}));
//# sourceMappingURL=BlanketAgreementsItemsLine.js.map