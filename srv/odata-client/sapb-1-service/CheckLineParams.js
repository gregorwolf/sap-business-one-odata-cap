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
exports.CheckLineParams = exports.CheckLineParamsField = exports.createCheckLineParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[CheckLineParams.build]] instead.
 */
function createCheckLineParams(json) {
    return CheckLineParams.build(json);
}
exports.createCheckLineParams = createCheckLineParams;
/**
 * CheckLineParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CheckLineParamsField = /** @class */ (function (_super) {
    __extends(CheckLineParamsField, _super);
    /**
     * Creates an instance of CheckLineParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CheckLineParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CheckLineParams) || this;
        /**
         * Representation of the [[CheckLineParams.checkKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkKey = new core_1.ComplexTypeNumberPropertyField('CheckKey', _this, 'Edm.Int32');
        return _this;
    }
    return CheckLineParamsField;
}(core_1.ComplexTypeField));
exports.CheckLineParamsField = CheckLineParamsField;
var CheckLineParams;
(function (CheckLineParams) {
    /**
     * Metadata information on all properties of the `CheckLineParams` complex type.
     */
    CheckLineParams._propertyMetadata = [{
            originalName: 'CheckKey',
            name: 'checkKey',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CheckLineParams);
    }
    CheckLineParams.build = build;
})(CheckLineParams = exports.CheckLineParams || (exports.CheckLineParams = {}));
//# sourceMappingURL=CheckLineParams.js.map