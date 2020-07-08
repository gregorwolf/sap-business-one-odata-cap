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
exports.MaterialRevaluationSnbParam = exports.MaterialRevaluationSnbParamField = exports.createMaterialRevaluationSnbParam = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationSnbParam.build]] instead.
 */
function createMaterialRevaluationSnbParam(json) {
    return MaterialRevaluationSnbParam.build(json);
}
exports.createMaterialRevaluationSnbParam = createMaterialRevaluationSnbParam;
/**
 * MaterialRevaluationSnbParamField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MaterialRevaluationSnbParamField = /** @class */ (function (_super) {
    __extends(MaterialRevaluationSnbParamField, _super);
    function MaterialRevaluationSnbParamField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MaterialRevaluationSnbParam.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        return _this;
    }
    return MaterialRevaluationSnbParamField;
}(v4_1.ComplexTypeField));
exports.MaterialRevaluationSnbParamField = MaterialRevaluationSnbParamField;
var MaterialRevaluationSnbParam;
(function (MaterialRevaluationSnbParam) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); }
        });
    }
    MaterialRevaluationSnbParam.build = build;
})(MaterialRevaluationSnbParam = exports.MaterialRevaluationSnbParam || (exports.MaterialRevaluationSnbParam = {}));
//# sourceMappingURL=MaterialRevaluationSnbParam.js.map