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
exports.ImportFileParam = exports.ImportFileParamField = exports.createImportFileParam = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ImportFileParam.build]] instead.
 */
function createImportFileParam(json) {
    return ImportFileParam.build(json);
}
exports.createImportFileParam = createImportFileParam;
/**
 * ImportFileParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ImportFileParamField = /** @class */ (function (_super) {
    __extends(ImportFileParamField, _super);
    /**
     * Creates an instance of ImportFileParamField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ImportFileParamField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ImportFileParam) || this;
        /**
         * Representation of the [[ImportFileParam.filePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.filePath = new core_1.ComplexTypeStringPropertyField('FilePath', _this, 'Edm.String');
        return _this;
    }
    return ImportFileParamField;
}(core_1.ComplexTypeField));
exports.ImportFileParamField = ImportFileParamField;
var ImportFileParam;
(function (ImportFileParam) {
    /**
     * Metadata information on all properties of the `ImportFileParam` complex type.
     */
    ImportFileParam._propertyMetadata = [{
            originalName: 'FilePath',
            name: 'filePath',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ImportFileParam);
    }
    ImportFileParam.build = build;
})(ImportFileParam = exports.ImportFileParam || (exports.ImportFileParam = {}));
//# sourceMappingURL=ImportFileParam.js.map