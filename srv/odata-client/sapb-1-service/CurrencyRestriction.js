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
exports.CurrencyRestriction = exports.CurrencyRestrictionField = exports.createCurrencyRestriction = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CurrencyRestriction.build]] instead.
 */
function createCurrencyRestriction(json) {
    return CurrencyRestriction.build(json);
}
exports.createCurrencyRestriction = createCurrencyRestriction;
/**
 * CurrencyRestrictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CurrencyRestrictionField = /** @class */ (function (_super) {
    __extends(CurrencyRestrictionField, _super);
    /**
     * Creates an instance of CurrencyRestrictionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CurrencyRestrictionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CurrencyRestriction) || this;
        /**
         * Representation of the [[CurrencyRestriction.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new core_1.ComplexTypeStringPropertyField('PaymentMethodCode', _this, 'Edm.String');
        /**
         * Representation of the [[CurrencyRestriction.currencyCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currencyCode = new core_1.ComplexTypeStringPropertyField('CurrencyCode', _this, 'Edm.String');
        /**
         * Representation of the [[CurrencyRestriction.currencyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currencyName = new core_1.ComplexTypeStringPropertyField('CurrencyName', _this, 'Edm.String');
        /**
         * Representation of the [[CurrencyRestriction.choose]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.choose = new core_1.ComplexTypeEnumPropertyField('Choose', _this);
        return _this;
    }
    return CurrencyRestrictionField;
}(core_1.ComplexTypeField));
exports.CurrencyRestrictionField = CurrencyRestrictionField;
var CurrencyRestriction;
(function (CurrencyRestriction) {
    /**
     * Metadata information on all properties of the `CurrencyRestriction` complex type.
     */
    CurrencyRestriction._propertyMetadata = [{
            originalName: 'PaymentMethodCode',
            name: 'paymentMethodCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CurrencyCode',
            name: 'currencyCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CurrencyName',
            name: 'currencyName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Choose',
            name: 'choose',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CurrencyRestriction);
    }
    CurrencyRestriction.build = build;
})(CurrencyRestriction = exports.CurrencyRestriction || (exports.CurrencyRestriction = {}));
//# sourceMappingURL=CurrencyRestriction.js.map