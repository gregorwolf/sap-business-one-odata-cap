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
exports.TaxDefinition = exports.TaxDefinitionField = exports.createTaxDefinition = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxDefinition.build]] instead.
 */
function createTaxDefinition(json) {
    return TaxDefinition.build(json);
}
exports.createTaxDefinition = createTaxDefinition;
/**
 * TaxDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxDefinitionField = /** @class */ (function (_super) {
    __extends(TaxDefinitionField, _super);
    /**
     * Creates an instance of TaxDefinitionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxDefinitionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxDefinition) || this;
        /**
         * Representation of the [[TaxDefinition.effectivefrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectivefrom = new core_1.ComplexTypeDatePropertyField('Effectivefrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxDefinition.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        return _this;
    }
    return TaxDefinitionField;
}(core_1.ComplexTypeField));
exports.TaxDefinitionField = TaxDefinitionField;
var TaxDefinition;
(function (TaxDefinition) {
    /**
     * Metadata information on all properties of the `TaxDefinition` complex type.
     */
    TaxDefinition._propertyMetadata = [{
            originalName: 'Effectivefrom',
            name: 'effectivefrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxDefinition);
    }
    TaxDefinition.build = build;
})(TaxDefinition = exports.TaxDefinition || (exports.TaxDefinition = {}));
//# sourceMappingURL=TaxDefinition.js.map