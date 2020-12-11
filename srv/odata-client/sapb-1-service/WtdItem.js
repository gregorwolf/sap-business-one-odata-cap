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
exports.WtdItem = exports.WtdItemField = exports.createWtdItem = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WtdItem.build]] instead.
 */
function createWtdItem(json) {
    return WtdItem.build(json);
}
exports.createWtdItem = createWtdItem;
/**
 * WtdItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdItemField = /** @class */ (function (_super) {
    __extends(WtdItemField, _super);
    /**
     * Creates an instance of WtdItemField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WtdItemField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WtdItem) || this;
        /**
         * Representation of the [[WtdItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[WtdItem.wTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxCode = new core_1.ComplexTypeStringPropertyField('WTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[WtdItem.effectiveDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateFrom = new core_1.ComplexTypeDatePropertyField('EffectiveDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WtdItem.effectiveDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateTo = new core_1.ComplexTypeDatePropertyField('EffectiveDateTo', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return WtdItemField;
}(core_1.ComplexTypeField));
exports.WtdItemField = WtdItemField;
var WtdItem;
(function (WtdItem) {
    /**
     * Metadata information on all properties of the `WtdItem` complex type.
     */
    WtdItem._propertyMetadata = [{
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
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
        return core_1.deserializeComplexTypeV4(json, WtdItem);
    }
    WtdItem.build = build;
})(WtdItem = exports.WtdItem || (exports.WtdItem = {}));
//# sourceMappingURL=WtdItem.js.map