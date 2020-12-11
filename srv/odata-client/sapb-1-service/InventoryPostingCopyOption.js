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
exports.InventoryPostingCopyOption = exports.InventoryPostingCopyOptionField = exports.createInventoryPostingCopyOption = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[InventoryPostingCopyOption.build]] instead.
 */
function createInventoryPostingCopyOption(json) {
    return InventoryPostingCopyOption.build(json);
}
exports.createInventoryPostingCopyOption = createInventoryPostingCopyOption;
/**
 * InventoryPostingCopyOptionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var InventoryPostingCopyOptionField = /** @class */ (function (_super) {
    __extends(InventoryPostingCopyOptionField, _super);
    /**
     * Creates an instance of InventoryPostingCopyOptionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function InventoryPostingCopyOptionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, InventoryPostingCopyOption) || this;
        /**
         * Representation of the [[InventoryPostingCopyOption.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new core_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[InventoryPostingCopyOption.copyOption]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.copyOption = new core_1.ComplexTypeEnumPropertyField('CopyOption', _this);
        return _this;
    }
    return InventoryPostingCopyOptionField;
}(core_1.ComplexTypeField));
exports.InventoryPostingCopyOptionField = InventoryPostingCopyOptionField;
var InventoryPostingCopyOption;
(function (InventoryPostingCopyOption) {
    /**
     * Metadata information on all properties of the `InventoryPostingCopyOption` complex type.
     */
    InventoryPostingCopyOption._propertyMetadata = [{
            originalName: 'BaseEntry',
            name: 'baseEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CopyOption',
            name: 'copyOption',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, InventoryPostingCopyOption);
    }
    InventoryPostingCopyOption.build = build;
})(InventoryPostingCopyOption = exports.InventoryPostingCopyOption || (exports.InventoryPostingCopyOption = {}));
//# sourceMappingURL=InventoryPostingCopyOption.js.map