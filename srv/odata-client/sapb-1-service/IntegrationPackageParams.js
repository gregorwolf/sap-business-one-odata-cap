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
exports.IntegrationPackageParams = exports.IntegrationPackageParamsField = exports.createIntegrationPackageParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[IntegrationPackageParams.build]] instead.
 */
function createIntegrationPackageParams(json) {
    return IntegrationPackageParams.build(json);
}
exports.createIntegrationPackageParams = createIntegrationPackageParams;
/**
 * IntegrationPackageParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var IntegrationPackageParamsField = /** @class */ (function (_super) {
    __extends(IntegrationPackageParamsField, _super);
    /**
     * Creates an instance of IntegrationPackageParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function IntegrationPackageParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, IntegrationPackageParams) || this;
        /**
         * Representation of the [[IntegrationPackageParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        return _this;
    }
    return IntegrationPackageParamsField;
}(core_1.ComplexTypeField));
exports.IntegrationPackageParamsField = IntegrationPackageParamsField;
var IntegrationPackageParams;
(function (IntegrationPackageParams) {
    /**
     * Metadata information on all properties of the `IntegrationPackageParams` complex type.
     */
    IntegrationPackageParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, IntegrationPackageParams);
    }
    IntegrationPackageParams.build = build;
})(IntegrationPackageParams = exports.IntegrationPackageParams || (exports.IntegrationPackageParams = {}));
//# sourceMappingURL=IntegrationPackageParams.js.map