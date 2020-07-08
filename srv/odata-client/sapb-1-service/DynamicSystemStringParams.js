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
exports.DynamicSystemStringParams = exports.DynamicSystemStringParamsField = exports.createDynamicSystemStringParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DynamicSystemStringParams.build]] instead.
 */
function createDynamicSystemStringParams(json) {
    return DynamicSystemStringParams.build(json);
}
exports.createDynamicSystemStringParams = createDynamicSystemStringParams;
/**
 * DynamicSystemStringParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DynamicSystemStringParamsField = /** @class */ (function (_super) {
    __extends(DynamicSystemStringParamsField, _super);
    function DynamicSystemStringParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DynamicSystemStringParams.formId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formId = new v4_1.ComplexTypeStringPropertyField('FormID', _this, 'Edm.String');
        /**
         * Representation of the [[DynamicSystemStringParams.itemId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemId = new v4_1.ComplexTypeStringPropertyField('ItemID', _this, 'Edm.String');
        /**
         * Representation of the [[DynamicSystemStringParams.columnId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.columnId = new v4_1.ComplexTypeStringPropertyField('ColumnID', _this, 'Edm.String');
        return _this;
    }
    return DynamicSystemStringParamsField;
}(v4_1.ComplexTypeField));
exports.DynamicSystemStringParamsField = DynamicSystemStringParamsField;
var DynamicSystemStringParams;
(function (DynamicSystemStringParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            FormID: function (formId) { return ({ formId: v4_1.edmToTs(formId, 'Edm.String') }); },
            ItemID: function (itemId) { return ({ itemId: v4_1.edmToTs(itemId, 'Edm.String') }); },
            ColumnID: function (columnId) { return ({ columnId: v4_1.edmToTs(columnId, 'Edm.String') }); }
        });
    }
    DynamicSystemStringParams.build = build;
})(DynamicSystemStringParams = exports.DynamicSystemStringParams || (exports.DynamicSystemStringParams = {}));
//# sourceMappingURL=DynamicSystemStringParams.js.map