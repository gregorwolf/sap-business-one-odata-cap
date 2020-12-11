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
exports.IndiaSacCodeParams = exports.IndiaSacCodeParamsField = exports.createIndiaSacCodeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[IndiaSacCodeParams.build]] instead.
 */
function createIndiaSacCodeParams(json) {
    return IndiaSacCodeParams.build(json);
}
exports.createIndiaSacCodeParams = createIndiaSacCodeParams;
/**
 * IndiaSacCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var IndiaSacCodeParamsField = /** @class */ (function (_super) {
    __extends(IndiaSacCodeParamsField, _super);
    /**
     * Creates an instance of IndiaSacCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function IndiaSacCodeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, IndiaSacCodeParams) || this;
        /**
         * Representation of the [[IndiaSacCodeParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new core_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[IndiaSacCodeParams.serviceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCode = new core_1.ComplexTypeStringPropertyField('ServiceCode', _this, 'Edm.String');
        return _this;
    }
    return IndiaSacCodeParamsField;
}(core_1.ComplexTypeField));
exports.IndiaSacCodeParamsField = IndiaSacCodeParamsField;
var IndiaSacCodeParams;
(function (IndiaSacCodeParams) {
    /**
     * Metadata information on all properties of the `IndiaSacCodeParams` complex type.
     */
    IndiaSacCodeParams._propertyMetadata = [{
            originalName: 'AbsEntry',
            name: 'absEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ServiceCode',
            name: 'serviceCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, IndiaSacCodeParams);
    }
    IndiaSacCodeParams.build = build;
})(IndiaSacCodeParams = exports.IndiaSacCodeParams || (exports.IndiaSacCodeParams = {}));
//# sourceMappingURL=IndiaSacCodeParams.js.map