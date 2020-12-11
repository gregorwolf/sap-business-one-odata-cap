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
exports.Forms1099Params = exports.Forms1099ParamsField = exports.createForms1099Params = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[Forms1099Params.build]] instead.
 */
function createForms1099Params(json) {
    return Forms1099Params.build(json);
}
exports.createForms1099Params = createForms1099Params;
/**
 * Forms1099ParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var Forms1099ParamsField = /** @class */ (function (_super) {
    __extends(Forms1099ParamsField, _super);
    /**
     * Creates an instance of Forms1099ParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function Forms1099ParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, Forms1099Params) || this;
        /**
         * Representation of the [[Forms1099Params.formCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formCode = new core_1.ComplexTypeNumberPropertyField('FormCode', _this, 'Edm.Int32');
        return _this;
    }
    return Forms1099ParamsField;
}(core_1.ComplexTypeField));
exports.Forms1099ParamsField = Forms1099ParamsField;
var Forms1099Params;
(function (Forms1099Params) {
    /**
     * Metadata information on all properties of the `Forms1099Params` complex type.
     */
    Forms1099Params._propertyMetadata = [{
            originalName: 'FormCode',
            name: 'formCode',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, Forms1099Params);
    }
    Forms1099Params.build = build;
})(Forms1099Params = exports.Forms1099Params || (exports.Forms1099Params = {}));
//# sourceMappingURL=Forms1099Params.js.map