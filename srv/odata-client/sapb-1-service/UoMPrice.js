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
exports.UoMPrice = exports.UoMPriceField = exports.createUoMPrice = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[UoMPrice.build]] instead.
 */
function createUoMPrice(json) {
    return UoMPrice.build(json);
}
exports.createUoMPrice = createUoMPrice;
/**
 * UoMPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UoMPriceField = /** @class */ (function (_super) {
    __extends(UoMPriceField, _super);
    /**
     * Creates an instance of UoMPriceField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function UoMPriceField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, UoMPrice) || this;
        /**
         * Representation of the [[UoMPrice.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new core_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[UoMPrice.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[UoMPrice.reduceBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reduceBy = new core_1.ComplexTypeNumberPropertyField('ReduceBy', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[UoMPrice.additionalReduceBy1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalReduceBy1 = new core_1.ComplexTypeNumberPropertyField('AdditionalReduceBy1', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.additionalPrice1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPrice1 = new core_1.ComplexTypeNumberPropertyField('AdditionalPrice1', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.additionalCurrency1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalCurrency1 = new core_1.ComplexTypeStringPropertyField('AdditionalCurrency1', _this, 'Edm.String');
        /**
         * Representation of the [[UoMPrice.additionalReduceBy2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalReduceBy2 = new core_1.ComplexTypeNumberPropertyField('AdditionalReduceBy2', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.additionalPrice2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPrice2 = new core_1.ComplexTypeNumberPropertyField('AdditionalPrice2', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.additionalCurrency2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalCurrency2 = new core_1.ComplexTypeStringPropertyField('AdditionalCurrency2', _this, 'Edm.String');
        /**
         * Representation of the [[UoMPrice.auto]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.auto = new core_1.ComplexTypeEnumPropertyField('Auto', _this);
        return _this;
    }
    return UoMPriceField;
}(core_1.ComplexTypeField));
exports.UoMPriceField = UoMPriceField;
var UoMPrice;
(function (UoMPrice) {
    /**
     * Metadata information on all properties of the `UoMPrice` complex type.
     */
    UoMPrice._propertyMetadata = [{
            originalName: 'PriceList',
            name: 'priceList',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ReduceBy',
            name: 'reduceBy',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Price',
            name: 'price',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AdditionalReduceBy1',
            name: 'additionalReduceBy1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdditionalPrice1',
            name: 'additionalPrice1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdditionalCurrency1',
            name: 'additionalCurrency1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AdditionalReduceBy2',
            name: 'additionalReduceBy2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdditionalPrice2',
            name: 'additionalPrice2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdditionalCurrency2',
            name: 'additionalCurrency2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Auto',
            name: 'auto',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, UoMPrice);
    }
    UoMPrice.build = build;
})(UoMPrice = exports.UoMPrice || (exports.UoMPrice = {}));
//# sourceMappingURL=UoMPrice.js.map