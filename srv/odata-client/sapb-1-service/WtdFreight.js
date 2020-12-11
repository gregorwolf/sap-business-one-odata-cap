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
exports.WtdFreight = exports.WtdFreightField = exports.createWtdFreight = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WtdFreight.build]] instead.
 */
function createWtdFreight(json) {
    return WtdFreight.build(json);
}
exports.createWtdFreight = createWtdFreight;
/**
 * WtdFreightField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdFreightField = /** @class */ (function (_super) {
    __extends(WtdFreightField, _super);
    /**
     * Creates an instance of WtdFreightField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WtdFreightField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WtdFreight) || this;
        /**
         * Representation of the [[WtdFreight.freightCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freightCode = new core_1.ComplexTypeNumberPropertyField('FreightCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[WtdFreight.wTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxCode = new core_1.ComplexTypeStringPropertyField('WTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[WtdFreight.effectiveDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateFrom = new core_1.ComplexTypeDatePropertyField('EffectiveDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WtdFreight.effectiveDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateTo = new core_1.ComplexTypeDatePropertyField('EffectiveDateTo', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return WtdFreightField;
}(core_1.ComplexTypeField));
exports.WtdFreightField = WtdFreightField;
var WtdFreight;
(function (WtdFreight) {
    /**
     * Metadata information on all properties of the `WtdFreight` complex type.
     */
    WtdFreight._propertyMetadata = [{
            originalName: 'FreightCode',
            name: 'freightCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WTaxCode',
            name: 'wTaxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EffectiveDateFrom',
            name: 'effectiveDateFrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'EffectiveDateTo',
            name: 'effectiveDateTo',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WtdFreight);
    }
    WtdFreight.build = build;
})(WtdFreight = exports.WtdFreight || (exports.WtdFreight = {}));
//# sourceMappingURL=WtdFreight.js.map