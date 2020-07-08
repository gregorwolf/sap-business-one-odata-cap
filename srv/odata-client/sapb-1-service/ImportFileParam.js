"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ImportFileParamField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ImportFileParam.filePath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.filePath = new v4_1.ComplexTypeStringPropertyField('FilePath', _this, 'Edm.String');
        return _this;
    }
    return ImportFileParamField;
}(v4_1.ComplexTypeField));
exports.ImportFileParamField = ImportFileParamField;
var ImportFileParam;
(function (ImportFileParam) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FilePath: function (filePath) { return ({ filePath: v4_1.edmToTs(filePath, 'Edm.String') }); }
        });
    }
    ImportFileParam.build = build;
})(ImportFileParam = exports.ImportFileParam || (exports.ImportFileParam = {}));
//# sourceMappingURL=ImportFileParam.js.map