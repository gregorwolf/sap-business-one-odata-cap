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
exports.CockpitParams = exports.CockpitParamsField = exports.createCockpitParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CockpitParams.build]] instead.
 */
function createCockpitParams(json) {
    return CockpitParams.build(json);
}
exports.createCockpitParams = createCockpitParams;
/**
 * CockpitParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CockpitParamsField = /** @class */ (function (_super) {
    __extends(CockpitParamsField, _super);
    /**
     * Creates an instance of CockpitParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CockpitParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CockpitParams) || this;
        /**
         * Representation of the [[CockpitParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[CockpitParams.cockpitType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cockpitType = new core_1.ComplexTypeEnumPropertyField('CockpitType', _this);
        return _this;
    }
    return CockpitParamsField;
}(core_1.ComplexTypeField));
exports.CockpitParamsField = CockpitParamsField;
var CockpitParams;
(function (CockpitParams) {
    /**
     * Metadata information on all properties of the `CockpitParams` complex type.
     */
    CockpitParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CockpitType',
            name: 'cockpitType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CockpitParams);
    }
    CockpitParams.build = build;
})(CockpitParams = exports.CockpitParams || (exports.CockpitParams = {}));
//# sourceMappingURL=CockpitParams.js.map