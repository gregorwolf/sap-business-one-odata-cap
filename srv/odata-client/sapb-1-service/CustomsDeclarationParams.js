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
exports.CustomsDeclarationParams = exports.CustomsDeclarationParamsField = exports.createCustomsDeclarationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CustomsDeclarationParams.build]] instead.
 */
function createCustomsDeclarationParams(json) {
    return CustomsDeclarationParams.build(json);
}
exports.createCustomsDeclarationParams = createCustomsDeclarationParams;
/**
 * CustomsDeclarationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CustomsDeclarationParamsField = /** @class */ (function (_super) {
    __extends(CustomsDeclarationParamsField, _super);
    /**
     * Creates an instance of CustomsDeclarationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CustomsDeclarationParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CustomsDeclarationParams) || this;
        /**
         * Representation of the [[CustomsDeclarationParams.ccdNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ccdNum = new core_1.ComplexTypeStringPropertyField('CCDNum', _this, 'Edm.String');
        return _this;
    }
    return CustomsDeclarationParamsField;
}(core_1.ComplexTypeField));
exports.CustomsDeclarationParamsField = CustomsDeclarationParamsField;
var CustomsDeclarationParams;
(function (CustomsDeclarationParams) {
    /**
     * Metadata information on all properties of the `CustomsDeclarationParams` complex type.
     */
    CustomsDeclarationParams._propertyMetadata = [{
            originalName: 'CCDNum',
            name: 'ccdNum',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CustomsDeclarationParams);
    }
    CustomsDeclarationParams.build = build;
})(CustomsDeclarationParams = exports.CustomsDeclarationParams || (exports.CustomsDeclarationParams = {}));
//# sourceMappingURL=CustomsDeclarationParams.js.map